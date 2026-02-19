#!/usr/bin/env node

/**
 * Fetch All Cloudinary Assets - Organized by Folder Structure
 * 
 * This script fetches ALL your images and videos from Cloudinary
 * and organizes them by their actual folder structure
 */

import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

function getOptimizedUrl(publicId, options = {}) {
  const {
    width = 800,
    height = 600,
    crop = 'fill',
    quality = 'auto',
    format = 'auto'
  } = options

  return cloudinary.url(publicId, {
    transformation: [
      { width, height, crop, quality, fetch_format: format }
    ]
  })
}

function getVideoUrl(publicId) {
  return cloudinary.url(publicId, {
    resource_type: 'video',
    transformation: [
      { quality: 'auto', fetch_format: 'mp4' }
    ]
  })
}

function getVideoThumbnail(publicId) {
  return cloudinary.url(publicId, {
    resource_type: 'video',
    transformation: [
      { width: 400, height: 300, crop: 'fill', start_offset: '0' }
    ],
    format: 'jpg'
  })
}

// Recursively get all subfolders
async function getAllSubfolders(folderPath) {
  try {
    const result = await cloudinary.api.sub_folders(folderPath)
    let allFolders = result.folders.map(f => f.path)
    
    // Recursively get subfolders of subfolders
    for (const folder of [...allFolders]) {
      const subfolders = await getAllSubfolders(folder)
      allFolders = allFolders.concat(subfolders)
    }
    
    return allFolders
  } catch (error) {
    return []
  }
}

// Fetch resources from a specific folder using asset_folder method
async function fetchFromAssetFolder(folderPath, resourceType = 'image') {
  try {
    const result = await cloudinary.api.resources_by_asset_folder(folderPath, {
      resource_type: resourceType,
      max_results: 500
    })
    // Filter to ensure we only get the correct resource type
    const filtered = (result.resources || []).filter(r => {
      if (resourceType === 'image') {
        return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(r.format?.toLowerCase())
      } else if (resourceType === 'video') {
        return ['mp4', 'mov', 'avi', 'webm', 'mkv'].includes(r.format?.toLowerCase())
      }
      return true
    })
    return filtered
  } catch (error) {
    return []
  }
}

async function organizeAllAssets() {
  console.log('🔍 Discovering folder structure...\n')
  
  // Get all folders recursively
  const rootFolders = await cloudinary.api.root_folders()
  console.log(`📁 Root folders: ${rootFolders.folders.map(f => f.name).join(', ')}\n`)
  
  const allFolders = []
  for (const rootFolder of rootFolders.folders) {
    const subfolders = await getAllSubfolders(rootFolder.path)
    allFolders.push(rootFolder.path)
    allFolders.push(...subfolders)
  }
  
  console.log(`✅ Found ${allFolders.length} total folders\n`)
  console.log('📸 Fetching assets from each folder...\n')
  
  const organized = {
    events: {},
    gallery: {},
    staff: {},
    other: {}
  }
  
  // Fetch from each folder
  for (const folder of allFolders) {
    const images = await fetchFromAssetFolder(folder, 'image')
    const videos = await fetchFromAssetFolder(folder, 'video')
    
    if (images.length > 0 || videos.length > 0) {
      console.log(`   ${folder}: ${images.length} images, ${videos.length} videos`)
      
      const parts = folder.split('/')
      const category = parts[0]
      
      // Organize by category
      if (category === 'events') {
        const eventName = parts[1] || 'uncategorized'
        const subfolder = parts[2] || 'general'
        
        if (!organized.events[eventName]) {
          organized.events[eventName] = {}
        }
        if (!organized.events[eventName][subfolder]) {
          organized.events[eventName][subfolder] = { images: [], videos: [] }
        }
        
        organized.events[eventName][subfolder].images = images.map(img => ({
          publicId: img.public_id,
          folder: folder,
          format: img.format,
          sizeKB: Math.round(img.bytes / 1024),
          width: img.width,
          height: img.height,
          uploaded: img.created_at,
          fullUrl: getOptimizedUrl(img.public_id, { width: 800, height: 600 }),
          thumbnailUrl: getOptimizedUrl(img.public_id, { width: 400, height: 300 }),
          largeUrl: getOptimizedUrl(img.public_id, { width: 1200, height: 900 })
        }))
        
        organized.events[eventName][subfolder].videos = videos.map(vid => ({
          publicId: vid.public_id,
          folder: folder,
          format: vid.format,
          sizeMB: Math.round(vid.bytes / (1024 * 1024)),
          duration: vid.duration,
          width: vid.width,
          height: vid.height,
          uploaded: vid.created_at,
          videoUrl: getVideoUrl(vid.public_id),
          thumbnailUrl: getVideoThumbnail(vid.public_id)
        }))
        
      } else if (category === 'gallery') {
        const galleryCategory = parts[1] || 'general'
        
        if (!organized.gallery[galleryCategory]) {
          organized.gallery[galleryCategory] = { images: [], videos: [] }
        }
        
        organized.gallery[galleryCategory].images = organized.gallery[galleryCategory].images.concat(
          images.map(img => ({
            publicId: img.public_id,
            folder: folder,
            format: img.format,
            sizeKB: Math.round(img.bytes / 1024),
            width: img.width,
            height: img.height,
            uploaded: img.created_at,
            fullUrl: getOptimizedUrl(img.public_id, { width: 800, height: 600 }),
            thumbnailUrl: getOptimizedUrl(img.public_id, { width: 400, height: 300 }),
            largeUrl: getOptimizedUrl(img.public_id, { width: 1200, height: 900 })
          }))
        )
        
        organized.gallery[galleryCategory].videos = organized.gallery[galleryCategory].videos.concat(
          videos.map(vid => ({
            publicId: vid.public_id,
            folder: folder,
            format: vid.format,
            sizeMB: Math.round(vid.bytes / (1024 * 1024)),
            duration: vid.duration,
            width: vid.width,
            height: vid.height,
            uploaded: vid.created_at,
            videoUrl: getVideoUrl(vid.public_id),
            thumbnailUrl: getVideoThumbnail(vid.public_id)
          }))
        )
        
      } else if (category === 'staff') {
        const staffCategory = parts[1] || 'general'
        
        if (!organized.staff[staffCategory]) {
          organized.staff[staffCategory] = { images: [], videos: [] }
        }
        
        organized.staff[staffCategory].images = images.map(img => ({
          publicId: img.public_id,
          folder: folder,
          format: img.format,
          sizeKB: Math.round(img.bytes / 1024),
          width: img.width,
          height: img.height,
          uploaded: img.created_at,
          fullUrl: getOptimizedUrl(img.public_id, { width: 400, height: 400 }),
          thumbnailUrl: getOptimizedUrl(img.public_id, { width: 200, height: 200 }),
          largeUrl: getOptimizedUrl(img.public_id, { width: 600, height: 600 })
        }))
        
      } else {
        if (!organized.other[category]) {
          organized.other[category] = { images: [], videos: [] }
        }
        
        organized.other[category].images = images.map(img => ({
          publicId: img.public_id,
          folder: folder,
          format: img.format,
          sizeKB: Math.round(img.bytes / 1024),
          uploaded: img.created_at,
          fullUrl: getOptimizedUrl(img.public_id)
        }))
      }
    }
  }
  
  return organized
}

// Print detailed summary
function printSummary(organized) {
  console.log('\n\n📊 Organization Summary:\n')
  console.log('═══════════════════════════════════════════════════════════════\n')
  
  // Events
  if (Object.keys(organized.events).length > 0) {
    console.log('📅 EVENTS:\n')
    Object.entries(organized.events).forEach(([eventName, subfolders]) => {
      console.log(`   ${eventName}:`)
      Object.entries(subfolders).forEach(([subfolder, assets]) => {
        console.log(`      📁 ${subfolder}:`)
        console.log(`         Images: ${assets.images.length}`)
        console.log(`         Videos: ${assets.videos.length}`)
        if (assets.images.length > 0) {
          console.log(`         Sample URL: ${assets.images[0].fullUrl}`)
        }
      })
      console.log('')
    })
  }
  
  // Gallery
  if (Object.keys(organized.gallery).length > 0) {
    console.log('🖼️  GALLERY:\n')
    Object.entries(organized.gallery).forEach(([category, assets]) => {
      console.log(`   ${category}:`)
      console.log(`      Images: ${assets.images.length}`)
      console.log(`      Videos: ${assets.videos.length}`)
      if (assets.images.length > 0) {
        console.log(`      Sample URL: ${assets.images[0].fullUrl}`)
      }
      console.log('')
    })
  }
  
  // Staff
  if (Object.keys(organized.staff).length > 0) {
    console.log('👥 STAFF:\n')
    Object.entries(organized.staff).forEach(([category, assets]) => {
      console.log(`   ${category}:`)
      console.log(`      Images: ${assets.images.length}`)
      console.log(`      Videos: ${assets.videos.length}`)
      console.log('')
    })
  }
}

async function main() {
  console.log('🗂️  Cloudinary Complete Asset Fetcher\n')
  console.log('═══════════════════════════════════════════════════════════════\n')
  
  if (!process.env.CLOUDINARY_CLOUD_NAME) {
    console.error('❌ ERROR: Missing credentials in .env file\n')
    process.exit(1)
  }
  
  try {
    const organized = await organizeAllAssets()
    
    printSummary(organized)
    
    // Save organized data
    const outputPath = path.join(__dirname, '..', 'src', 'data', 'cloudinary-organized.json')
    fs.writeFileSync(outputPath, JSON.stringify(organized, null, 2), 'utf-8')
    
    console.log('═══════════════════════════════════════════════════════════════')
    console.log(`\n✅ SUCCESS! Organized data saved to:`)
    console.log(`   ${outputPath}`)
    console.log('\n📖 JSON Structure:')
    console.log('   {')
    console.log('     "events": {')
    console.log('       "cultural-day": {')
    console.log('         "2017": { images: [...], videos: [...] },')
    console.log('         "2024": { images: [...], videos: [...] }')
    console.log('       },')
    console.log('       "graduation": { ... }')
    console.log('     },')
    console.log('     "gallery": {')
    console.log('       "activities": { images: [...], videos: [...] }')
    console.log('     },')
    console.log('     "staff": { ... }')
    console.log('   }')
    console.log('\n💡 Each image includes:')
    console.log('   - publicId, folder, format, size, dimensions')
    console.log('   - fullUrl (800x600 optimized)')
    console.log('   - thumbnailUrl (400x300 optimized)')
    console.log('   - largeUrl (1200x900 optimized)')
    console.log('\n🎯 Now you can easily map images to your data files!\n')
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message)
    if (error.error) {
      console.error('Details:', error.error.message)
    }
    process.exit(1)
  }
}

main()
