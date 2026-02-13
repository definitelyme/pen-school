Build a modern, warm, and professional **Progressive Web App (PWA)** website for a Nigerian nursery and primary school called **"Pen Foundation Nursery & Primary School"**, located in **Lagos, Nigeria**. The school serves children ages **2–16** (Nursery 1 through Primary 6). The school motto is **"Quest For Excellence"**.

It should also look professional grade (like UK primary school style UI) because both teachers, pupils, and parents would be taking a look. So the UI design, struture and style should be suited for each of them

### Tech Stack

- **Framework**: Vue 3 + Vite (Composition API with `<script setup>` syntax throughout)
- **Styling**: Tailwind CSS
- **Routing**: Vue Router 4 (client-side SPA with defined routes, use `createRouter` with `createWebHistory`)
- **Icons**: Lucide Vue Next (`lucide-vue-next`)
- **Fonts**: Google Fonts — use `"Nunito"` for body text (rounded, child-friendly) and `"Fredoka One"` or `"Baloo 2"` for headings (playful, bold)
- **Animations**: `@vueuse/motion` (or plain CSS transitions with Vue's `<Transition>` / `<TransitionGroup>` components) for scroll-triggered reveals and micro-interactions. Use `IntersectionObserver` via a custom composable (`useScrollReveal`) for triggering animations on scroll
- **PWA**: Include a `manifest.json` with proper app name, icons, theme_color, and a basic service worker for offline caching of static assets. Use `vite-plugin-pwa` if convenient
- **Images**: Use high-quality placeholder images from **Unsplash** (`https://images.unsplash.com/photo-[ID]?w=800&q=80`) and **Picsum** (`https://picsum.photos/seed/[keyword]/[width]/[height]`) showing diverse African children in school settings, classrooms, playgrounds, and learning environments. Mix both sources across the site for visual variety. For staff photos, use `https://randomuser.me/api/portraits/` or Picsum with seed params
- **Videos**: Use free stock video embed URLs from **Pexels Videos** or embed placeholder YouTube/Vimeo iframes showing school-related activities (children playing, classroom learning, cultural performances, sports). Use real embed-friendly video URLs. If no real URLs are available, create styled video placeholder cards with a play button overlay and thumbnail image that simulate a video player

### Design System & Visual Identity

- **Color Palette** (use CSS variables):
  - Primary: `#2D6A4F` (deep forest green — trust, growth)
  - Secondary: `#F4A261` (warm amber/gold — warmth, energy)
  - Accent: `#E76F51` (coral red — for CTA buttons and highlights)
  - Background: `#FFF8F0` (warm cream white)
  - Surface/Cards: `#FFFFFF` with subtle `box-shadow: 0 2px 12px rgba(0,0,0,0.06)`
  - Text Primary: `#1B1B1B`
  - Text Secondary: `#555555`
- **Border Radius**: Use generous rounded corners (`border-radius: 16px` on cards, `12px` on buttons)
- **Spacing**: Consistent `padding` and `margin` using Tailwind's spacing scale. Sections should breathe with `py-20` or `py-24` vertical spacing
- **Tone**: Warm, inviting, trustworthy, child-friendly but professional. Parents are the primary audience — the site must inspire confidence
- **Mobile-First**: Design for mobile screens first. All layouts must be fully responsive. Navigation should collapse into a hamburger menu on mobile with a smooth slide-in drawer

### Site Structure & Pages

Build the following as separate routes using Vue Router:

---

#### 1. **Homepage** (`/`)

This is the most important page. It should be a long-scrolling single page with the following sections in order:

**a) Hero Section**
- Full-width hero banner with a large, joyful image of children learning/playing at the school
- Overlay with school name, motto, and a short tagline: `"Where Every Child Shines"`
- Two CTA buttons: `"Enroll Your Child"` (primary, links to `/admissions`) and `"Take a Tour"` (secondary/outlined, scrolls to gallery)
- Subtle parallax scroll effect on the background image
- Floating badge/ribbon showing something like `"Enrolling for 2026 Session"` or `"20+ Years of Excellence"`

**b) Welcome / About Preview Section**
- Brief 2–3 sentence welcome message from the school head/proprietor
- Small circular photo of the head teacher with their name and title
- A `"Read More About Us →"` link to `/about`
- Decorative elements: subtle wave divider or curved section border at the top

**c) Why Choose Us Section**
- Grid of 4–6 feature cards (2 columns on mobile, 3 on desktop) with icons + title + short text:
  - "Experienced & Caring Teachers"
  - "Safe & Nurturing Environment"
  - "Modern Learning Facilities"
  - "Strong Moral & Academic Foundation"
  - "Extracurricular Activities"
  - "Small Class Sizes"
- Each card should have a colored icon from Lucide, a bold title, and 1-2 sentence description
- Cards should animate in with staggered fade-up on scroll

**d) Quick Stats / Counter Section**
- Horizontal bar or strip with animated counting numbers:
  - `200+` Students
  - `25+` Qualified Staff
  - `15+` Years of Excellence
  - `6` Grade Levels
- Use a contrasting background color (primary green or dark) with white text
- Numbers should count up when the section scrolls into view

**e) Events & News Preview Section**
- Show the 3 most recent events/news items as cards in a horizontal scroll on mobile or grid on desktop
- Each card: image thumbnail, date badge, title, 1-line excerpt, `"Read More"` link
- A `"View All Events →"` button linking to `/events`
- Sample events to include (use placeholder data):
  - "Annual Inter-House Sports Day — March 2025"
  - "Cultural Day Celebration — December 2024"
  - "End of Year Prize Giving Ceremony — July 2024"
  - "Excursion to Lagos state Museum — November 2024"

**f) Testimonials Section**
- Carousel/slider with 3–4 parent testimonials
- Each slide: quote text (in italic), parent name, child's class level
- Auto-rotate with dot indicators and swipe support on mobile
- Subtle background pattern or light illustration behind the quotes

**g) Video Highlights Section**
- Section heading: `"See Our School in Action"`
- Display 2–3 video cards in a row (1 column on mobile, 3 on desktop)
- Each card: thumbnail image from Picsum/Unsplash with a large centered play button overlay (semi-transparent dark circle with white triangle), video title below, and a short label like "Cultural Day 2024"
- On click, open a modal with the video playing in an embedded iframe (YouTube/Vimeo embed URL)
- Use placeholder embed URLs — the structure just needs to be correct so real video IDs can be swapped in later
- A `"View All Videos →"` link to `/gallery` (with the Videos tab pre-selected via a query param like `/gallery?tab=videos`)

**h) Call to Action Banner**
- Full-width colored banner (gradient from primary green to a slightly lighter shade)
- Bold headline: `"Give Your Child the Best Start in Life"`
- Subtext: `"Admissions are now open for the 2026/2027 academic session"`
- Large `"Apply Now"` button (links to `/admissions`)

**i) Footer**
- School name, address, phone number, email
- Quick links: Home, About, Staff, Events, Admissions, Contact
- Social media icon links (Facebook, Instagram, Twitter/X) — use `#` as placeholder hrefs
- Copyright line: `"© 2026 Pen Foundation School. All rights reserved."`
- Small Nigerian flag emoji or icon next to the location

---

#### 2. **About Page** (`/about`)

- Hero banner with the text "About Our School" overlaid on a school building photo
- **Our Story**: 2–3 paragraphs about the school's history, founding, and mission. Use placeholder lorem text but make it contextually relevant to a Nigerian primary school
- **Our Mission**: Short mission statement in a highlighted callout box
- **Our Vision**: Short vision statement in a second callout box
- **Core Values**: Display as a horizontal list of badges or icons: Integrity, Excellence, Discipline, Compassion, Innovation
- **A Message from the Proprietor/Head Teacher**: A blockquote-style section with a photo, their full name, title, and a 3–4 sentence message

---

#### 3. **Our Staff Page** (`/staff`)

- Page title: "Meet Our Dedicated Team"
- Grid of staff cards (2 columns on mobile, 3–4 on desktop)
- Each card: circular/rounded photo, full name, role/title (e.g., "Head Teacher", "Class Teacher — Primary 3", "School Nurse"), and optionally a short 1-line bio
- Include at least 8–10 placeholder staff members with diverse Nigerian names
- Cards should have a hover effect: subtle scale-up and shadow deepening
- Group staff into sections: "School Leadership", "Teaching Staff", "Support Staff"

---

#### 4. **Events & News Page** (`/events`)

- Page title: "School Events & News"
- List/grid of 6–8 event cards, each with:
  - Featured image
  - Date (displayed as a colored badge, e.g., `MAR 2025`)
  - Title
  - Short description (2–3 sentences)
  - Optional `"View Photos"` button (can be non-functional for now)
- Include a mix of past events and upcoming events
- Add a filter or tab toggle: "All" | "Upcoming" | "Past"
- Sample events should reflect typical Nigerian primary school activities: Inter-house sports, cultural day, excursions, graduation ceremonies, PTA meetings, open day
- **Event Videos**: At least 3 events should include an embedded video section below the description. Use placeholder video embeds (YouTube/Vimeo iframes or Pexels video embeds) showing activities like:
  - Children performing cultural dances in colorful traditional attire
  - Students running relay races on a sports field
  - A graduation/prize-giving ceremony
  - Classroom learning activities
- Videos should be responsive (16:9 aspect ratio maintained via `aspect-video` Tailwind class or a `padding-bottom: 56.25%` wrapper)

---

#### 5. **Gallery Page** (`/gallery`)

- Page title: "Our School in Pictures & Videos"
- **Tab toggle**: "Photos" | "Videos" — defaulting to Photos
- **Photos Tab**:
  - Masonry-style or Pinterest-style photo grid layout
  - 12–16 placeholder images from Unsplash and Picsum showing: classrooms, playground, students in uniform, school building exterior, sports activities, art classes, graduation
  - On click/tap, open a simple lightbox/modal showing the full image with left/right navigation arrows
  - Each image can have a small caption overlay at the bottom
- **Videos Tab**:
  - Grid of 4–6 video cards (2 columns on mobile, 3 on desktop)
  - Each video card has: a thumbnail image with a centered play button overlay (circle with triangle icon), a title below the thumbnail, and the event/date it was from
  - On click, open a modal/overlay with the embedded video player (use YouTube or Vimeo iframe embeds)
  - Sample video entries:
    - "Cultural Day Performances 2024" — children in traditional Nigerian attire dancing
    - "Annual Inter-House Sports 2024" — track and field events
    - "Christmas Carol & End of Year Party" — students singing and celebrating
    - "A Day in Our Classroom" — teachers engaging with students in a lesson
    - "School Excursion to Nike Art Gallery Lagos" — outdoor learning adventure
    - "Graduation Ceremony — Class of 2024" — cap and gown ceremony
  - Use placeholder YouTube embed URLs like `https://www.youtube.com/embed/dQw4w9WgXcQ` or Pexels video direct links. The important thing is that the embed iframe structure is correct and responsive so Brendan can easily swap in real video IDs later

---

#### 6. **Admissions Page** (`/admissions`)

- Page title: "Admissions"
- **Admissions Overview**: Short paragraph explaining the enrollment process
- **Age Requirements Table**: Simple table showing class levels and age ranges:
  - Nursery 1: 2–3 years
  - Nursery 2: 3–4 years
  - Primary 1: 5–6 years
  - Primary 2–6: 6–11 years
- **Admission Requirements**: Bulleted list of documents needed (birth certificate, passport photos, previous school report, etc.)
- **Fee Structure**: A simple, tasteful pricing table or card layout showing term fees for different levels. Use placeholder amounts in Naira (₦)
- **How to Apply**: Step-by-step process (1. Visit the school → 2. Fill out the form → 3. Assessment → 4. Enrollment confirmation)
- **Contact CTA**: Button or link to contact the school for more information

---

#### 7. **Contact Page** (`/contact`)

- Page title: "Get in Touch"
- Two-column layout on desktop (form on left, info on right). Single column stacked on mobile
- **Contact Form** with fields: Parent/Guardian Name, Email, Phone Number, Child's Name, Class Applying For (dropdown), Message. Include a `"Send Message"` button. Form should have client-side validation (required fields, email format, phone format)
- **Contact Info Panel**: School address, phone number(s), email address, and operating hours (e.g., "Monday – Friday: 7:30 AM – 3:30 PM")
- **Embedded Google Maps**: Use an `<iframe>` embed showing the school's approximate location in Ipaye Bustop, Ojo, Lagos, Nigeria. Use a placeholder Google Maps embed URL for Lagos, Nigeria if unsure
- **Social Media Links**: Repeat the social icons from the footer

---

### Global Components

**Navigation Bar (Header)**:
- Sticky/fixed at the top with a slight blur/frosted glass background on scroll (`backdrop-filter: blur(10px)`)
- School logo (use a placeholder colored circle with the school's initials as text) on the left
- Navigation links: Home, About, Staff, Events, Gallery, Admissions, Contact
- On mobile: Hamburger icon → smooth slide-in side drawer with all links
- Active link should be visually highlighted (underline or colored text)
- Include a small `"Enroll Now"` CTA button on the right side of the navbar (desktop only)

**Footer** (as described in homepage section h)

**Scroll-to-Top Button**:
- Floating circular button that appears after scrolling down 300px
- Smooth scroll to top on click
- Use the Lucide `ChevronUp` icon

**Page Transitions**:
- Smooth fade-in transition when navigating between pages using Vue's `<Transition>` component wrapping the `<RouterView>`. Use CSS transition classes (`fade-enter-active`, `fade-leave-active`, etc.) for a clean 300ms opacity + slight translateY animation

**SEO & Meta**:
- Set proper `<title>` and `<meta description>` for each page
- Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`)

**Accessibility**:
- All images must have descriptive `alt` text
- Interactive elements must be keyboard-navigable
- Use proper heading hierarchy (h1 → h2 → h3)
- Color contrast must meet WCAG AA standards

### PWA Configuration

- Create a `manifest.json` with:
  - `name`: "Pen Foundation School"
  - `short_name`: "Pen School"
  - `start_url`: "/"
  - `display`: "standalone"
  - `theme_color`: "#2D6A4F"
  - `background_color`: "#FFF8F0"
  - Placeholder icon sizes: 192x192 and 512x512
- Register a basic service worker that caches the app shell and static assets for offline access
- Add the appropriate `<link rel="manifest">` and meta tags for iOS support (`apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`)

### Content Tone & Placeholder Text

- Write all placeholder text in a warm, professional Nigerian English tone
- Staff names should be realistic Nigerian names (e.g., Mrs. Adaeze Okonkwo, Mr. Chukwuemeka Nwachukwu, Mrs. Folake Adeyemi)
- Events should reference real Nigerian school activities and cultural celebrations
- Testimonials should sound like real Nigerian parents speaking naturally
- Currency should be Nigerian Naira (₦) where applicable

### Performance Requirements

- Lazy load all images below the fold
- Use responsive images with `srcset` or appropriate sizing via Unsplash URL params
- Code-split routes using Vue Router's dynamic imports (`() => import('./pages/AboutPage.vue')`) with a loading spinner fallback via Vue's `<Suspense>` component or a route-level loading indicator
- Keep the Lighthouse performance score above 90

### File Structure

Organize the project cleanly:

```
src/
├── components/
│   ├── layout/
│   │   ├── NavBar.vue
│   │   ├── AppFooter.vue
│   │   └── ScrollToTop.vue
│   ├── home/
│   │   ├── HeroSection.vue
│   │   ├── WelcomeSection.vue
│   │   ├── WhyChooseUs.vue
│   │   ├── StatsCounter.vue
│   │   ├── EventsPreview.vue
│   │   ├── Testimonials.vue
│   │   └── CTABanner.vue
│   ├── ui/
│   │   ├── BaseButton.vue
│   │   ├── BaseCard.vue
│   │   ├── SectionHeading.vue
│   │   ├── VideoCard.vue
│   │   ├── LightboxModal.vue
│   │   └── BaseBadge.vue
│   └── shared/
│       ├── PageHero.vue
│       └── ContactForm.vue
├── pages/
│   ├── HomePage.vue
│   ├── AboutPage.vue
│   ├── StaffPage.vue
│   ├── EventsPage.vue
│   ├── GalleryPage.vue
│   ├── AdmissionsPage.vue
│   └── ContactPage.vue
├── composables/
│   ├── useScrollReveal.js
│   └── useCounter.js
├── data/
│   ├── staffData.js
│   ├── eventsData.js
│   ├── galleryData.js
│   ├── videosData.js
│   └── testimonialsData.js
├── router/
│   └── index.js
├── App.vue
├── main.js
└── index.css
```

### What NOT to Do

- Do NOT use a dark theme. This is a children's school — keep it bright, warm, and inviting
- Do NOT use stock-looking generic templates. Make it feel bespoke and lovingly designed
- Do NOT use placeholder text like "Lorem ipsum". Write contextually appropriate content for a Nigerian primary school
- Do NOT skip mobile responsiveness. Every section must look excellent on a 375px-wide screen
- Do NOT leave any broken links or non-functional navigation
- Do NOT use more than 3 font families

### Final Checklist Before Completion

- [ ] All 7 pages render correctly with proper Vue Router navigation
- [ ] Navigation works on both desktop and mobile (hamburger menu + slide drawer)
- [ ] All images load (using Unsplash and Picsum URLs)
- [ ] Scroll animations trigger properly via IntersectionObserver composable
- [ ] Contact form validates inputs with clear error messages
- [ ] Stats counter animates on scroll
- [ ] Testimonial carousel works with swipe on mobile
- [ ] Gallery page has working Photos/Videos tab toggle
- [ ] Photo lightbox opens/closes properly with arrow navigation
- [ ] Video cards open a modal with an embedded iframe player
- [ ] Event pages with videos display responsive embedded video players
- [ ] PWA manifest is linked and service worker is registered
- [ ] Site looks great on mobile (375px), tablet (768px), and desktop (1440px)
- [ ] No console errors

Build the complete application now. Start with the Vite + Vue 3 project setup, Tailwind CSS config, and Vue Router setup, then build each page starting from the Homepage. Use `<script setup>` syntax in all `.vue` single-file components. Implement all sections as described above.
