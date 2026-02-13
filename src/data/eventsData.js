export const eventsData = [
  {
    id: 1,
    title: 'Annual Inter-House Sports Day',
    date: '2025-03-15',
    dateDisplay: 'March 2025',
    status: 'upcoming',
    description: 'Our biggest sporting event of the year! Students compete in track and field events, team sports, and fun races. Parents are welcome to attend and cheer for their children.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Inter-House Sports Highlights 2024'
  },
  {
    id: 2,
    title: 'Cultural Day Celebration',
    date: '2024-12-06',
    dateDisplay: 'December 2024',
    status: 'past',
    description: 'A vibrant celebration of Nigerian culture featuring traditional dances, attire, and cuisine from various ethnic groups. Students showcase the beauty of our diverse heritage.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Cultural Day Performances 2024'
  },
  {
    id: 3,
    title: 'End of Year Prize Giving Ceremony',
    date: '2024-07-19',
    dateDisplay: 'July 2024',
    status: 'past',
    description: 'Celebrating academic excellence and character development. Outstanding students receive awards for their achievements throughout the academic year.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Prize Giving Ceremony 2024'
  },
  {
    id: 4,
    title: 'Excursion to Lagos State Museum',
    date: '2024-11-22',
    dateDisplay: 'November 2024',
    status: 'past',
    description: 'Educational trip to the Lagos State Museum where students learned about Nigerian history, art, and cultural artifacts. An enriching experience for our young learners.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=500&fit=crop',
    hasVideo: false
  },
  {
    id: 5,
    title: 'Christmas Carol & End of Year Party',
    date: '2024-12-20',
    dateDisplay: 'December 2024',
    status: 'past',
    description: 'Festive celebration featuring Christmas carols, nativity plays, and fun activities. Students exchange gifts and celebrate the joy of the season together.',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=500&fit=crop',
    hasVideo: false
  },
  {
    id: 6,
    title: 'Parent-Teacher Association Meeting',
    date: '2025-02-08',
    dateDisplay: 'February 2025',
    status: 'upcoming',
    description: 'Quarterly meeting to discuss student progress, school developments, and ways parents can support their children\'s education. All parents are encouraged to attend.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop',
    hasVideo: false
  },
  {
    id: 7,
    title: 'Open Day for Prospective Parents',
    date: '2025-04-12',
    dateDisplay: 'April 2025',
    status: 'upcoming',
    description: 'Inviting prospective families to tour our facilities, meet our teachers, and learn about our curriculum and values. Experience the Pen Foundation difference firsthand.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    hasVideo: false
  },
  {
    id: 8,
    title: 'Independence Day Celebration',
    date: '2024-10-01',
    dateDisplay: 'October 2024',
    status: 'past',
    description: 'Celebrating Nigeria\'s Independence Day with patriotic songs, poetry recitals, and cultural displays. Students dressed in green and white to honor our nation.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    hasVideo: false
  }
]

export const getUpcomingEvents = () => {
  return eventsData.filter(event => event.status === 'upcoming')
}

export const getPastEvents = () => {
  return eventsData.filter(event => event.status === 'past')
}

export const getRecentEvents = (count = 3) => {
  return [...eventsData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, count)
}
