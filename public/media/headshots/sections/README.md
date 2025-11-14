# Section Photos - Naming Convention

This folder contains photos used in various sections throughout the portfolio site. Each photo has a descriptive filename that indicates where it's used on the page.

## Current Photos

### Hero Section
- **Hero_Portrait.jpg** - Main portrait displayed in the hero section (left side, full viewport height)

### About Section
- **Section_About_1.jpg** - First photo for the About section (placeholder)
- **Section_About_2.jpg** - Second photo for the About section (placeholder)

### Contact Section
- **Section_Contact.jpg** - Photo for the Contact section (placeholder)

### Additional / Future Use
- **Section_Additional_1.jpg** - Reserved for future feature
- **Section_Additional_2.jpg** - Reserved for future feature

### Special
- **Separator_Horizontal.jpg** - Horizontal photo (can be used as visual separator/divider)

## Naming Convention

When adding new photos, follow this pattern:
- **Hero_[Purpose].jpg** - Photos used in the hero section
- **Section_[SectionName]_[Number].jpg** - Photos for specific sections
  - Examples: Section_CV_1.jpg, Section_Showreels_1.jpg
- **Separator_[Orientation].jpg** - Photos used as visual separators
  - Orientations: Horizontal, Vertical
- **Background_[Location].jpg** - Photos used as background images
  - Examples: Background_Contact.jpg, Background_About.jpg

## File Requirements

- **Format:** JPG (optimized)
- **Portrait photos:** 3:4 aspect ratio recommended
- **Landscape photos:** 16:9 or 3:2 aspect ratio
- **Resolution:** At least 1200px on the longest side
- **Optimization:** Keep file size under 2MB (preferably under 1MB)

## Renaming Photos

To change which photo is used where:
1. Rename the photo to match the position you want (e.g., rename your new portrait to Hero_Portrait.jpg)
2. The site will automatically use the updated file
3. No code changes needed - just replace the file with the same name

## Adding New Photos

To add photos for new features:
1. Choose a descriptive name following the convention above
2. Copy to both locations:
   - `public/media/headshots/sections/[Name].jpg`
   - `src/assets/headshots/sections/[Name].jpg` (for Astro Image optimization)
3. Reference in your component code using the descriptive filename
4. Update this README with the new photo name and its purpose

---

*Last updated: 2025-11-14*
