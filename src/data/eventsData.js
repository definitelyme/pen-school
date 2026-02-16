export const eventsData = [
  {
    id: 1,
    title: 'Cultural Day',
    date: '2024-12-06',
    dateDisplay: 'December 2024',
    status: 'past',
    description: 'One of our most vibrant celebrations where students dress in traditional attire representing different Nigerian ethnic groups. The day showcases traditional dances, music with local instruments, drama presentations, and authentic food displays. Children learn about every tribe in Nigeria and their cultural heritage, appreciate diversity, and develop respect for various traditions within the community.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Cultural Day Performances 2024'
  },
  {
    id: 2,
    title: 'Career Day',
    date: '2025-03-20',
    dateDisplay: 'March 2025',
    status: 'upcoming',
    description: 'An exciting event that brings real-world professionals into the classroom. We host experts from medicine, engineering, law, business, arts, and technology who share their journeys with students. Through interactive presentations, hands-on activities, and Q&A sessions, children explore diverse career paths and see how education connects to their future. This experience inspires them to dream big and set ambitious goals early.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    hasVideo: false
  },
  {
    id: 3,
    title: 'Yearly Christmas Carol',
    date: '2024-12-20',
    dateDisplay: 'December 2024',
    status: 'past',
    description: 'Our annual Christmas Carol is a joyful celebration that brings together students, staff, and parents. Students perform beautiful Christmas songs, nativity plays, and dance presentations. And by creating this warm festive atmosphere, we mark the end of the school term with fun activities, refreshments, and gift exchanges.',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=500&fit=crop',
    hasVideo: false
  },
  {
    id: 4,
    title: 'Graduation Ceremony',
    date: '2024-07-19',
    dateDisplay: 'July 2024',
    status: 'past',
    description: 'A momentous celebration honoring students completing their primary education and transitioning to secondary school. This proud occasion brings together students, parents, and teachers to recognize academic achievements, award prizes for excellence, and send graduates forward with heartfelt wishes for their continued educational journey.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Graduation Ceremony 2024'
  },
  {
    id: 5,
    title: 'Sporting Activities',
    date: '2025-03-15',
    dateDisplay: 'March 2025',
    status: 'upcoming',
    description: 'An exciting inter-house competition packed with athletic events. Students participate in track and field, relay races, football, and various team sports. This energetic day promotes physical fitness, teamwork, and healthy competition while building school spirit as houses vie for the coveted championship trophy.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Inter-House Sports Highlights 2024'
  },
  {
    id: 6,
    title: 'Valentine\'s Day Celebration',
    date: '2025-02-14',
    dateDisplay: 'February 2025',
    status: 'upcoming',
    description: 'A special celebration of love, friendship, and kindness. Children engage in craft activities, exchange friendship cards, and learn about showing care and appreciation for others. The day features fun games, special treats, and activities that foster positive relationships and emotional intelligence among classmates.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=500&fit=crop',
    hasVideo: false
  },
  {
    id: 7,
    title: 'External Excursion',
    date: '2024-11-22',
    dateDisplay: 'November 2024',
    status: 'past',
    description: 'Educational trips that extend learning beyond classroom walls. We visit enriching locations like the Lagos State Museum, Nike Art Gallery, National Theatre, and other cultural landmarks. These excursions provide hands-on learning experiences, deepen understanding of Nigerian history and heritage, while creating unforgettable memories.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=500&fit=crop',
    hasVideo: false
  },
  {
    id: 8,
    title: 'Extra-Curricular Activities',
    date: '2025-05-10',
    dateDisplay: 'May 2025',
    status: 'upcoming',
    description: 'A showcase of talents developed through diverse programs including music, drama, art, debate, and specialized clubs. Children demonstrate skills from chess, computer, French, and other enrichment activities. Parents witness firsthand the holistic development of their children beyond traditional academics.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
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
