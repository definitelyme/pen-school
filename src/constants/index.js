/**
 * Application Constants
 * Central location for all reusable constants across the application
 */

// School Information
export const SCHOOL_INFO = {
  name: 'Pen Foundation School',
  fullName: 'Pen Foundation Nursery & Primary School',
  footerSchName: 'Pen Foundation',
  footerSchNameOther: 'Nursery & Primary',
  motto: 'Quest For Excellence',
  tagline: 'Where Every Child Shines',
  founded: 'August 2006',
  foundedYear: 2006
}

// Contact Information
export const CONTACT_INFO = {
  address: {
    street: 'Iba Housing Estate Ojo',
    landmark: 'by Ipaye Bustop',
    city: 'Lagos',
    country: 'Nigeria',
    full: 'Iba Housing Estate Ojo, by Ipaye Bustop, Lagos, Nigeria'
  },
  phone: {
    primary: '+234 816 922 392',
    formatted: '+234 816 922 392',
    href: 'tel:+2348169223392'
  },
  email: {
    primary: 'info@penschoolsgroup.sch.ng',
    admissions: 'admissionsoffice@penschoolsgroup.sch.ng',
    academic: 'academicaffairs@penschoolsgroup.sch.ng',
    href: 'mailto:info@penschoolsgroup.sch.ng',
    admissionsHref: 'mailto:admissionsoffice@penschoolsgroup.sch.ng',
    academicHref: 'mailto:academicaffairs@penschoolsgroup.sch.ng'
  },
  officeHours: 'Mon - Fri: 7:30 AM - 4:00 PM',
  mapUrl: 'https://maps.google.com/?q=Ipaye+Ojo+Lagos+Nigeria'
}

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  twitter: '#'
}

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Staff', path: '/staff' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
]

// School Statistics
export const SCHOOL_STATS = {
  students: 400,
  teachers: 25,
  yearsInService: 19,
  nonTeachingStaff: 10
}

// Class Levels
export const CLASS_LEVELS = {
  kindergarten: {
    name: 'Kindergarten',
    classes: ['Creche', 'Reception', 'KG1', 'KG2'],
    ageRange: '2-4 years'
  },
  nursery: {
    name: 'Nursery',
    classes: ['Nursery 1', 'Nursery 2'],
    ageRange: '3-5 years'
  },
  primary: {
    name: 'Primary',
    classes: ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6'],
    ageRange: '6-11 years'
  },
  college: {
    name: 'College (Junior Secondary)',
    classes: ['JSS 1', 'JSS 2', 'JSS 3'],
    ageRange: '12-15 years'
  }
}

// Mission & Vision
export const MISSION_VISION = {
  mission: 'Our mission is to create an enabling environment that facilitates the sound development of every child with excellence through diligence, honesty, discipline, integrity, and respect for others and constituted authority.',
  vision: 'Our vision is to give every pupil the opportunity to demonstrate creativity, challenge their own capabilities, appreciate individual differences, and become lifelong learners who contribute positively to society.'
}

// Image Placeholders (commonly used Unsplash images)
export const PLACEHOLDER_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=600&fit=crop',
  classroom: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
  students: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
  building: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=600&fit=crop',
  cultural: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop',
  sports: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop',
  graduation: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop'
}

// Common Page Titles
export const PAGE_TITLES = {
  home: 'Home | Pen Foundation School',
  about: 'About Us | Pen Foundation School',
  academics: 'Academics | Pen Foundation School',
  staff: 'Our Staff | Pen Foundation School',
  events: 'Events & News | Pen Foundation School',
  gallery: 'Gallery | Pen Foundation School',
  contact: 'Contact Us | Pen Foundation School'
}

// Event Categories
export const EVENT_CATEGORIES = {
  CULTURAL: 'Cultural',
  EDUCATIONAL: 'Educational',
  SPORTS: 'Sports',
  SOCIAL: 'Social',
  ACADEMIC: 'Academic',
  ACTIVITIES: 'Activities'
}

// Event Status
export const EVENT_STATUS = {
  UPCOMING: 'upcoming',
  PAST: 'past'
}

// Health Partners
export const HEALTH_PARTNERS = [
  'Holy Trinity Hospital Igboleri',
  'Adigate Hospital Post Service Estate'
]

// Core Values
export const CORE_VALUES = [
  { title: 'Excellence', description: 'We strive for the highest standards in everything we do' },
  { title: 'Integrity', description: 'Honesty and strong moral principles guide our actions' },
  { title: 'Respect', description: 'We value every individual and embrace diversity' },
  { title: 'Discipline', description: 'Self-control and orderly conduct are foundations of success' },
  { title: 'Innovation', description: 'We embrace creative and modern teaching approaches' },
  { title: 'Compassion', description: 'We care deeply about the well-being of our students' }
]
