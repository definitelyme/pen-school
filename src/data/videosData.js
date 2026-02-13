export const videosData = [
  {
    id: 1,
    title: 'Cultural Day Performances 2024',
    description: 'Students showcase traditional Nigerian dances and songs',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    event: 'Cultural Day',
    date: 'December 2024'
  },
  {
    id: 2,
    title: 'Annual Inter-House Sports 2024',
    description: 'Highlights from track and field events',
    thumbnail: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    event: 'Sports Day',
    date: 'March 2024'
  },
  {
    id: 3,
    title: 'Christmas Carol & End of Year Party',
    description: 'Festive celebration with students singing carols',
    thumbnail: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&h=400&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    event: 'Christmas Party',
    date: 'December 2024'
  },
  {
    id: 4,
    title: 'A Day in Our Classroom',
    description: 'Experience interactive learning with our dedicated teachers',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    event: 'School Life',
    date: '2024'
  },
  {
    id: 5,
    title: 'School Excursion to Nike Art Gallery Lagos',
    description: 'Educational adventure exploring Nigerian art and culture',
    thumbnail: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&h=400&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    event: 'Field Trip',
    date: 'November 2024'
  },
  {
    id: 6,
    title: 'Graduation Ceremony — Class of 2024',
    description: 'Celebrating our Primary 6 graduates moving on to secondary school',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    event: 'Graduation',
    date: 'July 2024'
  }
]

export const getHomeVideos = () => {
  return videosData.slice(0, 3)
}
