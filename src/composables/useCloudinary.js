/**
 * Cloudinary Helper Composable
 * 
 * Provides utility functions for working with Cloudinary images
 * Generates optimized URLs with automatic format and quality settings
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo'

/**
 * Generate optimized Cloudinary image URL
 * @param {string} publicId - Cloudinary public ID (e.g., 'events/cultural-day/image1')
 * @param {object} options - Transformation options
 * @returns {string} Optimized image URL
 */
export function getCloudinaryUrl(publicId, options = {}) {
  const {
    width = 800,
    height = 600,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    gravity = 'auto'
  } = options

  const transformations = [
    `w_${width}`,
    `h_${height}`,
    `c_${crop}`,
    `q_${quality}`,
    `f_${format}`,
    `g_${gravity}`
  ].join(',')

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${publicId}`
}

/**
 * Generate responsive srcset for Cloudinary image
 * @param {string} publicId - Cloudinary public ID
 * @param {array} widths - Array of widths for srcset (default: [400, 800, 1200, 1600])
 * @returns {string} srcset string
 */
export function getCloudinarySrcset(publicId, widths = [400, 800, 1200, 1600]) {
  return widths
    .map(width => {
      const url = getCloudinaryUrl(publicId, { width, height: Math.round(width * 0.75) })
      return `${url} ${width}w`
    })
    .join(', ')
}

/**
 * Generate Cloudinary video URL
 * @param {string} publicId - Cloudinary public ID
 * @param {object} options - Video options
 * @returns {string} Video URL
 */
export function getCloudinaryVideoUrl(publicId, options = {}) {
  const {
    quality = 'auto',
    format = 'auto'
  } = options

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_${quality},f_${format}/${publicId}`
}

/**
 * Generate thumbnail for video
 * @param {string} publicId - Video public ID
 * @param {object} options - Thumbnail options
 * @returns {string} Thumbnail URL
 */
export function getVideoThumbnail(publicId, options = {}) {
  const {
    width = 400,
    height = 300
  } = options

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/w_${width},h_${height},c_fill,so_0/${publicId}.jpg`
}

/**
 * Preload critical images
 * @param {array} publicIds - Array of public IDs to preload
 */
export function preloadImages(publicIds) {
  publicIds.forEach(publicId => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = getCloudinaryUrl(publicId, { width: 400, height: 300 })
    document.head.appendChild(link)
  })
}

export function useCloudinary() {
  return {
    getCloudinaryUrl,
    getCloudinarySrcset,
    getCloudinaryVideoUrl,
    getVideoThumbnail,
    preloadImages
  }
}
