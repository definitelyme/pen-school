export const staffData = {
  leadership: [
    {
      id: 1,
      name: 'Mrs. Adaeze Okonkwo',
      role: 'Proprietress / Head Teacher',
      bio: 'Over 25 years of experience in early childhood education',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Mr. Oluwaseun Adeyemi',
      role: 'Vice Principal',
      bio: 'Specialist in curriculum development and teacher training',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Mrs. Folake Akinwale',
      role: 'Academic Director',
      bio: 'Passionate about innovative teaching methods',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
    },
  ],
  teaching: [
    {
      id: 4,
      name: 'Mr. Chukwuemeka Nwachukwu',
      role: 'Primary 6 Class Teacher',
      bio: 'Mathematics and Science specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Mrs. Ngozi Eze',
      role: 'Primary 5 Class Teacher',
      bio: 'Expert in English Language and Literature',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Miss Aisha Mohammed',
      role: 'Primary 4 Class Teacher',
      bio: 'Creative arts and music enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 7,
      name: 'Mr. Tunde Bakare',
      role: 'Primary 3 Class Teacher',
      bio: 'Social studies and civic education expert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 8,
      name: 'Mrs. Chidinma Obi',
      role: 'Primary 2 Class Teacher',
      bio: 'Specializes in phonics and early reading',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 9,
      name: 'Miss Blessing Effiong',
      role: 'Primary 1 Class Teacher',
      bio: 'Dedicated to building strong literacy foundations',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 10,
      name: 'Mrs. Yetunde Adeola',
      role: 'Nursery 2 Class Teacher',
      bio: 'Early childhood development specialist',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 11,
      name: 'Miss Amara Okwu',
      role: 'Nursery 1 Class Teacher',
      bio: 'Gentle and nurturing approach to early learning',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face'
    },
  ],
  support: [
    {
      id: 12,
      name: 'Mr. Emmanuel Okafor',
      role: 'Physical Education Teacher',
      bio: 'Former state athletics champion',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 13,
      name: 'Mrs. Fatima Ibrahim',
      role: 'School Nurse',
      bio: 'Registered nurse with pediatric experience',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 14,
      name: 'Mr. Segun Adewale',
      role: 'Security & Facilities Manager',
      bio: 'Ensuring a safe environment for all students',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
    },
  ]
}

export const getAllStaff = () => {
  return [
    ...staffData.leadership,
    ...staffData.teaching,
    ...staffData.support
  ]
}
