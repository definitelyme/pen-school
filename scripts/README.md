# Cloudinary Integration Scripts

## 🚀 Quick Start

### Step 1: Configure Credentials

Edit `.env` file in project root:

```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Step 2: Fetch Images from Cloudinary

```bash
npm run fetch-cloudinary
```

This fetches all images and videos from your Cloudinary folders and generates `cloudinary-organized.json`.

### Step 3: Update Data Files

```bash
npm run update-data
```

This automatically updates:
- `src/data/eventsData.js`
- `src/data/galleryData.js`
- `src/data/videosData.js`

---

## 📁 Expected Cloudinary Folder Structure

```
events/
  cultural-day/
    2017/
    2024/
    2025/
  graduation/
    2023/
  sports-day/
    2024/
  valentines-day/
    2025/
gallery/
  activities/
  classroom/
  random/
staff/
  directors/
  management/
  consultants/
```

---

## 🔄 Workflow for Adding New Images

1. **Upload images** to Cloudinary (organize in appropriate folders)
2. **Run**: `npm run fetch-cloudinary`
3. **Run**: `npm run update-data`
4. **Review** the updated data files
5. **Test** the website
6. **Commit** changes

---

## 📊 What Gets Generated

### `cloudinary-organized.json`
Organized structure of all your Cloudinary assets:
```json
{
  "events": {
    "cultural-day": {
      "2024": {
        "images": [...],
        "videos": [...]
      }
    }
  },
  "gallery": {...},
  "staff": {...}
}
```

### Updated Data Files
- **eventsData.js**: Events with images, galleries, and video playlists
- **galleryData.js**: Gallery photos with optimized URLs
- **videosData.js**: Gallery videos

---

## ⚡ Performance Features

All images are automatically optimized:
- ✅ WebP/AVIF conversion
- ✅ Smart compression (q_auto)
- ✅ Responsive sizing
- ✅ CDN delivery
- ✅ 90-day browser caching

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run fetch-cloudinary` | Fetch all assets from Cloudinary |
| `npm run update-data` | Update data files with Cloudinary URLs |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |

---

## 🆘 Troubleshooting

### "Missing credentials" Error
- Check that `.env` file exists
- Verify credentials are correct
- No spaces around `=` sign

### "No images found"
- Verify folder structure in Cloudinary
- Check that images are uploaded
- Ensure folders are not empty

### Images not loading on website
- Check browser console for errors
- Verify images are set to "public" in Cloudinary
- Test image URLs directly in browser

---

## 💡 Tips

1. **Organize by year**: Create subfolders by year for events
2. **Use descriptive folders**: Makes finding images easier
3. **Run scripts after uploads**: Keep data files in sync
4. **Keep cloudinary-organized.json**: Useful reference file

---

**For detailed setup info, see the main README.md**
