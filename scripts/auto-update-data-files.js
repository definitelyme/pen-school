#!/usr/bin/env node

/**
 * Auto-Update Data Files from Cloudinary
 * 
 * This script reads cloudinary-organized.json and automatically updates:
 * - eventsData.js (with images, videos, galleries)
 * - galleryData.js (with gallery folder images)
 * - videosData.js (with gallery videos)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDir = path.join(__dirname, '..', 'src', 'data')

// Read cloudinary organized data
const cloudinaryData = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'cloudinary-organized.json'), 'utf-8')
)

// Map of event titles to descriptions (from current eventsData.js)
const eventDescriptions = {
  'Cultural Day': 'One of our most vibrant celebrations where students dress in traditional attire representing different Nigerian ethnic groups. The day showcases traditional dances, music with local instruments, drama presentations, and authentic food displays. Children learn about Nigeria\'s rich cultural heritage, appreciate diversity, and develop respect for various traditions within the community.',
  'Career Day': 'An exciting event that brings real-world professionals into the classroom. We host experts from medicine, engineering, law, business, arts, and technology who share their journeys with students. Through interactive presentations, hands-on activities, and Q&A sessions, children explore diverse career paths and see how education connects to their future. This experience inspires them to dream big and set ambitious goals early.',
  'Yearly Christmas Carol': 'A joyful celebration uniting students, staff, and parents in festive spirit. Children perform beautiful Christmas songs, nativity plays, and dance presentations. This heartwarming event creates a festive atmosphere while marking the end of term with fun activities, refreshments, and gift exchanges that strengthen community bonds.',
  'Graduation Ceremony': 'A momentous celebration honoring students completing their primary education and transitioning to secondary school. This proud occasion brings together students, parents, and teachers to recognize academic achievements, award prizes for excellence, and send graduates forward with heartfelt wishes for their continued educational journey.',
  'Sporting Activities': 'An exciting inter-house competition packed with athletic events. Students participate in track and field, relay races, football, and various team sports. This energetic day promotes physical fitness, teamwork, and healthy competition while building school spirit as houses vie for the coveted championship trophy.',
  'Valentine\'s Day Celebration': 'A special celebration of love, friendship, and kindness. Children engage in craft activities, exchange friendship cards, and learn about showing care and appreciation for others. The day features fun games, special treats, and activities that foster positive relationships and emotional intelligence among classmates.',
  'External Excursion': 'Educational trips that extend learning beyond classroom walls. We visit enriching locations like the Lagos State Museum, Nike Art Gallery, National Theatre, and other cultural landmarks. These excursions provide hands-on learning experiences, deepen understanding of Nigerian history and heritage, while creating unforgettable memories.',
  'Extra-Curricular Activities': 'A showcase of talents developed through diverse programs including music, drama, art, debate, and specialized clubs. Children demonstrate skills from chess, computer, French, and other enrichment activities. Parents witness firsthand the holistic development of their children beyond traditional academics.'
}

console.log('🔄 Auto-Updating Data Files...\n')

// Map Cloudinary events to eventsData structure
function updateEventsData() {
  console.log('📅 Updating eventsData.js...\n')
  
  const updatedEvents = []
  
  // Cultural Day - use 2024 data
  const culturalDay2024 = cloudinaryData.events['cultural-day']?.['2024']
  if (culturalDay2024) {
    updatedEvents.push({
      id: 1,
      title: 'Cultural Day',
      date: '2024-12-06',
      dateDisplay: 'December 2024',
      status: 'past',
      description: eventDescriptions['Cultural Day'],
      image: culturalDay2024.images[0]?.fullUrl,
      gallery: culturalDay2024.images.slice(0, 20).map(img => ({
        url: img.fullUrl,
        thumbnail: img.thumbnailUrl,
        alt: 'Cultural Day celebration - students in traditional attire'
      })),
      hasVideo: culturalDay2024.videos.length > 0,
      videoPlaylist: culturalDay2024.videos.slice(0, 10).map((vid, idx) => ({
        url: vid.videoUrl,
        thumbnail: vid.thumbnailUrl,
        title: `Cultural Day 2024 - Video ${idx + 1}`,
        duration: vid.duration
      }))
    })
    console.log(`   ✅ Cultural Day: ${culturalDay2024.images.length} images, ${culturalDay2024.videos.length} videos`)
  }
  
  // Graduation
  const graduation2023 = cloudinaryData.events['graduation']?.['2023']
  if (graduation2023) {
    const allGradImages = []
    const allGradVideos = []
    
    // Combine Nur2 and Pry6
    if (graduation2023['Nur2']) {
      allGradImages.push(...graduation2023['Nur2'].images)
      allGradVideos.push(...graduation2023['Nur2'].videos)
    }
    if (graduation2023['Pry6']) {
      allGradImages.push(...graduation2023['Pry6'].images)
      allGradVideos.push(...graduation2023['Pry6'].videos)
    }
    
    updatedEvents.push({
      id: 4,
      title: 'Graduation Ceremony',
      date: '2024-07-19',
      dateDisplay: 'July 2024',
      status: 'past',
      description: eventDescriptions['Graduation Ceremony'],
      image: allGradImages[0]?.fullUrl,
      gallery: allGradImages.map(img => ({
        url: img.fullUrl,
        thumbnail: img.thumbnailUrl,
        alt: 'Graduation ceremony'
      })),
      hasVideo: allGradVideos.length > 0,
      videoPlaylist: allGradVideos.map((vid, idx) => ({
        url: vid.videoUrl,
        thumbnail: vid.thumbnailUrl,
        title: `Graduation 2023 - Video ${idx + 1}`,
        duration: vid.duration
      }))
    })
    console.log(`   ✅ Graduation: ${allGradImages.length} images, ${allGradVideos.length} videos`)
  }
  
  // Sports Day
  const sportsDay2024 = cloudinaryData.events['sports-day']?.['2024']
  if (sportsDay2024) {
    updatedEvents.push({
      id: 5,
      title: 'Sporting Activities',
      date: '2025-03-15',
      dateDisplay: 'March 2025',
      status: 'upcoming',
      description: eventDescriptions['Sporting Activities'],
      image: sportsDay2024.images[0]?.fullUrl,
      gallery: sportsDay2024.images.map(img => ({
        url: img.fullUrl,
        thumbnail: img.thumbnailUrl,
        alt: 'Inter-house sports competition'
      })),
      hasVideo: sportsDay2024.videos.length > 0,
      videoPlaylist: sportsDay2024.videos.map((vid, idx) => ({
        url: vid.videoUrl,
        thumbnail: vid.thumbnailUrl,
        title: `Sports Day 2024 - Video ${idx + 1}`,
        duration: vid.duration
      }))
    })
    console.log(`   ✅ Sports Day: ${sportsDay2024.images.length} images, ${sportsDay2024.videos.length} videos`)
  }
  
  // Keep other events but commented out
  const eventsWithoutImages = [
    { id: 2, title: 'Career Day', date: '2025-03-20', dateDisplay: 'March 2025', status: 'upcoming', description: eventDescriptions['Career Day'] },
    { id: 3, title: 'Yearly Christmas Carol', date: '2024-12-20', dateDisplay: 'December 2024', status: 'past', description: eventDescriptions['Yearly Christmas Carol'] },
    { id: 6, title: 'Valentine\'s Day Celebration', date: '2025-02-14', dateDisplay: 'February 2025', status: 'upcoming', description: eventDescriptions['Valentine\'s Day Celebration'] },
    { id: 7, title: 'External Excursion', date: '2024-11-22', dateDisplay: 'November 2024', status: 'past', description: eventDescriptions['External Excursion'] },
    { id: 8, title: 'Extra-Curricular Activities', date: '2025-05-10', dateDisplay: 'May 2025', status: 'upcoming', description: eventDescriptions['Extra-Curricular Activities'] }
  ]
  
  return { updatedEvents, eventsWithoutImages }
}

// Update galleryData
function updateGalleryData() {
  console.log('\n🖼️  Updating galleryData.js...\n')
  
  const galleryPhotos = []
  
  // Add from gallery/activities
  if (cloudinaryData.gallery.activities) {
    cloudinaryData.gallery.activities.images.forEach(img => {
      galleryPhotos.push({
        id: galleryPhotos.length + 1,
        url: img.fullUrl,
        thumbnail: img.thumbnailUrl,
        category: 'Activities',
        alt: 'School activities'
      })
    })
    console.log(`   ✅ Activities: ${cloudinaryData.gallery.activities.images.length} images`)
  }
  
  // Add from gallery/random
  if (cloudinaryData.gallery.random) {
    cloudinaryData.gallery.random.images.forEach(img => {
      galleryPhotos.push({
        id: galleryPhotos.length + 1,
        url: img.fullUrl,
        thumbnail: img.thumbnailUrl,
        category: 'School Life',
        alt: 'School life'
      })
    })
    console.log(`   ✅ Random: ${cloudinaryData.gallery.random.images.length} images`)
  }
  
  return galleryPhotos
}

// Update videosData
function updateVideosData() {
  console.log('\n🎥 Updating videosData.js...\n')
  
  const videos = []
  
  // Add from gallery videos
  if (cloudinaryData.gallery.activities?.videos) {
    cloudinaryData.gallery.activities.videos.forEach((vid, idx) => {
      videos.push({
        id: videos.length + 1,
        title: `School Activities - Video ${idx + 1}`,
        thumbnail: vid.thumbnailUrl,
        videoUrl: vid.videoUrl,
        category: 'Activities',
        duration: vid.duration
      })
    })
    console.log(`   ✅ Activities videos: ${cloudinaryData.gallery.activities.videos.length}`)
  }
  
  if (cloudinaryData.gallery.random?.videos) {
    cloudinaryData.gallery.random.videos.forEach((vid, idx) => {
      videos.push({
        id: videos.length + 1,
        title: `School Life - Video ${idx + 1}`,
        thumbnail: vid.thumbnailUrl,
        videoUrl: vid.videoUrl,
        category: 'School Life',
        duration: vid.duration
      })
    })
    console.log(`   ✅ Random videos: ${cloudinaryData.gallery.random.videos.length}`)
  }
  
  return videos
}

// Generate file content
function generateEventsFile(updatedEvents, commentedEvents) {
  let content = `// Auto-updated from Cloudinary on ${new Date().toISOString()}\n`
  content += `// Run 'npm run fetch-all' and 'npm run update-data' to regenerate\n\n`
  content += `export const eventsData = [\n`
  
  updatedEvents.forEach((event, idx) => {
    content += `  {\n`
    content += `    id: ${event.id},\n`
    content += `    title: '${event.title}',\n`
    content += `    date: '${event.date}',\n`
    content += `    dateDisplay: '${event.dateDisplay}',\n`
    content += `    status: '${event.status}',\n`
    content += `    description: '${event.description.replace(/'/g, "\\'")}',\n`
    content += `    image: '${event.image}',\n`
    
    if (event.gallery && event.gallery.length > 0) {
      content += `    gallery: [\n`
      event.gallery.forEach(img => {
        content += `      { url: '${img.url}', thumbnail: '${img.thumbnail}', alt: '${img.alt}' },\n`
      })
      content += `    ],\n`
    }
    
    content += `    hasVideo: ${event.hasVideo},\n`
    
    if (event.videoPlaylist && event.videoPlaylist.length > 0) {
      content += `    videoPlaylist: [\n`
      event.videoPlaylist.forEach(vid => {
        content += `      { url: '${vid.url}', thumbnail: '${vid.thumbnail}', title: '${vid.title}', duration: ${vid.duration || 0} },\n`
      })
      content += `    ]\n`
    }
    
    content += `  }${idx < updatedEvents.length - 1 ? ',' : ''}\n\n`
  })
  
  // Add commented out events
  if (commentedEvents.length > 0) {
    content += `  // Events below are commented out (no Cloudinary images yet)\n`
    content += `  // Uncomment and add images when ready\n\n`
    commentedEvents.forEach(event => {
      content += `  /*\n`
      content += `  {\n`
      content += `    id: ${event.id},\n`
      content += `    title: '${event.title}',\n`
      content += `    date: '${event.date}',\n`
      content += `    dateDisplay: '${event.dateDisplay}',\n`
      content += `    status: '${event.status}',\n`
      content += `    description: '${event.description.replace(/'/g, "\\'")}',\n`
      content += `    image: 'ADD_CLOUDINARY_URL_HERE',\n`
      content += `    hasVideo: false\n`
      content += `  },\n`
      content += `  */\n\n`
    })
  }
  
  content += `]\n\n`
  content += `export const getUpcomingEvents = () => {\n`
  content += `  return eventsData.filter(event => event.status === 'upcoming')\n`
  content += `}\n\n`
  content += `export const getPastEvents = () => {\n`
  content += `  return eventsData.filter(event => event.status === 'past')\n`
  content += `}\n\n`
  content += `export const getRecentEvents = (count = 3) => {\n`
  content += `  return [...eventsData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, count)\n`
  content += `}\n`
  
  return content
}

function generateGalleryFile(photos) {
  let content = `// Auto-updated from Cloudinary on ${new Date().toISOString()}\n\n`
  content += `export const galleryData = [\n`
  
  photos.forEach((photo, idx) => {
    content += `  {\n`
    content += `    id: ${photo.id},\n`
    content += `    url: '${photo.url}',\n`
    content += `    thumbnail: '${photo.thumbnail}',\n`
    content += `    category: '${photo.category}',\n`
    content += `    alt: '${photo.alt}'\n`
    content += `  }${idx < photos.length - 1 ? ',' : ''}\n`
  })
  
  content += `]\n\n`
  content += `export const getGalleryByCategory = (category) => {\n`
  content += `  return galleryData.filter(item => item.category === category)\n`
  content += `}\n`
  
  return content
}

function generateVideosFile(videos) {
  let content = `// Auto-updated from Cloudinary on ${new Date().toISOString()}\n\n`
  content += `export const videosData = [\n`
  
  videos.forEach((video, idx) => {
    content += `  {\n`
    content += `    id: ${video.id},\n`
    content += `    title: '${video.title}',\n`
    content += `    thumbnail: '${video.thumbnail}',\n`
    content += `    videoUrl: '${video.videoUrl}',\n`
    content += `    category: '${video.category}',\n`
    content += `    duration: ${video.duration || 0}\n`
    content += `  }${idx < videos.length - 1 ? ',' : ''}\n`
  })
  
  content += `]\n`
  
  return content
}

// Main execution
function main() {
  console.log('🚀 Auto Data File Updater\n')
  console.log('═══════════════════════════════════════════════════════════════\n')
  
  try {
    // Update events
    const { updatedEvents, eventsWithoutImages } = updateEventsData()
    const eventsContent = generateEventsFile(updatedEvents, eventsWithoutImages)
    fs.writeFileSync(path.join(dataDir, 'eventsData.js'), eventsContent, 'utf-8')
    console.log(`\n   📝 Written to: eventsData.js`)
    console.log(`      Active events: ${updatedEvents.length}`)
    console.log(`      Commented out: ${eventsWithoutImages.length}`)
    
    // Update gallery
    const galleryPhotos = updateGalleryData()
    const galleryContent = generateGalleryFile(galleryPhotos)
    fs.writeFileSync(path.join(dataDir, 'galleryData.js'), galleryContent, 'utf-8')
    console.log(`\n   📝 Written to: galleryData.js`)
    console.log(`      Total photos: ${galleryPhotos.length}`)
    
    // Update videos
    const videos = updateVideosData()
    const videosContent = generateVideosFile(videos)
    fs.writeFileSync(path.join(dataDir, 'videosData.js'), videosContent, 'utf-8')
    console.log(`\n   📝 Written to: videosData.js`)
    console.log(`      Total videos: ${videos.length}`)
    
    console.log('\n═══════════════════════════════════════════════════════════════')
    console.log('\n✅ SUCCESS! All data files updated with Cloudinary URLs!')
    console.log('\n📊 Summary:')
    console.log(`   Events with media: ${updatedEvents.length}`)
    console.log(`   Gallery photos: ${galleryPhotos.length}`)
    console.log(`   Gallery videos: ${videos.length}`)
    console.log('\n💡 Next: Review the updated files and test your website!\n')
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message)
    console.error(error.stack)
    process.exit(1)
  }
}

main()
