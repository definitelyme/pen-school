# Pen Foundation School Website

A modern, responsive Progressive Web App (PWA) for Pen Foundation Nursery, Primary & College in Lagos, Nigeria.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # NavBar, Footer, ScrollToTop
│   ├── home/            # Homepage sections
│   ├── events/          # Event components (EventDetailModal)
│   ├── shared/          # Shared components (ContactForm, PageHero)
│   └── ui/              # Reusable UI components
├── pages/               # Route pages
├── composables/         # Vue composables (useScrollReveal, useCloudinary)
├── constants/           # Central constants (SCHOOL_INFO, CONTACT_INFO, etc.)
├── data/                # Data files (events, gallery, staff, videos)
├── router/              # Vue Router configuration
└── index.css            # Global styles & theme

scripts/
├── fetch-all-organized.js    # Fetch images from Cloudinary
└── auto-update-data-files.js # Auto-update data files
```

---

## 🎨 Theme Customization

Colors are centralized in `src/index.css`:

```css
@theme {
  --color-primary: #2D6A4F;        /* Main green */
  --color-secondary: #F4A261;      /* Warm amber */
  --color-accent: #E76F51;         /* Coral red */
  --color-background: #FFF8F0;     /* Warm cream */
}
```

To change colors, simply update these values.

---

## 📝 Content Updates

### Update Contact Information
Edit `src/constants/index.js` → `CONTACT_INFO`

### Update School Statistics
Edit `src/constants/index.js` → `SCHOOL_STATS`

### Update Mission & Vision
Edit `src/constants/index.js` → `MISSION_VISION`

### Add/Update Staff
Edit `src/data/staffData.js`

### Add/Update Events
Edit `src/data/eventsData.js`

See `QUICK_UPDATE_GUIDE.md` for detailed instructions.

---

## 🖼️ Image Management (Cloudinary)

### Setup

1. Add credentials to `.env`:
```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Workflow

1. Upload images to Cloudinary (organize in folders)
2. Run: `npm run fetch-cloudinary`
3. Run: `npm run update-data`
4. Review updated data files
5. Commit changes

See `scripts/README.md` for detailed Cloudinary documentation.

---

## 🎯 Features

- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **Progressive Web App** - Installable, offline support
- ✅ **Image Optimization** - Cloudinary CDN with auto WebP/AVIF
- ✅ **Event Galleries** - Photo galleries with fullscreen viewer
- ✅ **Video Playlists** - Event video playlists with player
- ✅ **Lazy Loading** - Images load only when visible
- ✅ **Service Worker** - 90-day image caching
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML

---

## 📱 Pages

- **Home** - Hero, welcome, features, stats, events preview, testimonials
- **About** - School story, mission, vision, core values
- **Academics** - Class levels, curriculum highlights
- **Staff** - Directors, management, consultants
- **Events** - Event cards with galleries and video playlists
- **Gallery** - Photo and video gallery
- **Contact** - Contact form, info, map

---

## 🛠️ Tech Stack

- **Framework**: Vue 3 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: Vue Router 4
- **Icons**: Lucide Vue Next
- **PWA**: vite-plugin-pwa
- **Fonts**: Baloo 2 (display), Nunito (body)
- **CDN**: Cloudinary for images/videos

---

## 📊 Performance

- ✅ Lighthouse Score: 90+
- ✅ First Load: <3s
- ✅ Cached Load: <1s
- ✅ Image Optimization: 98% size reduction
- ✅ PWA: Offline support

---

## 🔐 Environment Variables

Required for Cloudinary integration:
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

---

## 📚 Documentation

- `QUICK_UPDATE_GUIDE.md` - How to update common content
- `CHANGES_SUMMARY.md` - Complete change log
- `scripts/README.md` - Cloudinary scripts documentation

---

## 🎓 School Information

**Name**: Pen Foundation School  
**Full Name**: Pen Foundation Nursery, Primary & College  
**Motto**: Quest For Excellence  
**Location**: Iba Housing Estate Ojo, Lagos, Nigeria  
**Founded**: August 2006  
**Contact**: +234 810 039 5180  
**Email**: info@penschoolsgroup.sch.ng  

---

## 📄 License

Private - Pen Foundation School © 2026

---

**Built with ❤️ for Pen Foundation School**
