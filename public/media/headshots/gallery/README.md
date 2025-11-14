# Gallery Photos - Naming Convention

This folder contains photos displayed in the Gallery section (5×2 grid layout).

## Naming Convention

Gallery photos use **numbered filenames** for easy ordering and reorganization:
- `1.jpg`, `2.jpg`, `3.jpg`, etc.

Numbers indicate the display order in the gallery (1 is shown first).

## Current Photos

- **1.jpg through 10.jpg** - Gallery headshots displayed in the 5×2 grid
- **11.jpg through 15.jpg** - Extra photos (not currently displayed, but available)

## Why Numbers?

Using numbers makes it **easy to reorganize** the gallery order:

### Example: Adding 4 New Photos at the Beginning
1. **Batch rename** existing photos (add 4 to each):
   - `1.jpg` → `5.jpg`
   - `2.jpg` → `6.jpg`
   - `3.jpg` → `7.jpg`
   - etc.
2. **Add new photos** as `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`
3. Gallery automatically shows them in the new order

### Example: Removing a Photo
1. Delete the unwanted photo (e.g., `8.jpg`)
2. **Optional:** Renumber subsequent photos to close the gap
   - Or leave gaps - the gallery skips missing numbers

## File Requirements

- **Format:** JPG (optimized with Astro Image)
- **Aspect Ratio:** 3:4 (portrait) recommended
- **Resolution:** At least 800px wide
- **Original Size:** Up to 2MB (automatically optimized to ~150-300KB WebP)

## Adding New Photos

To add gallery photos:
1. Choose the position number (e.g., `16.jpg` to add at the end)
2. Copy to both locations:
   - `public/media/headshots/gallery/[Number].jpg`
   - `src/assets/headshots/gallery/[Number].jpg` (for Astro optimization)
3. Refresh the site - photos load automatically

## Removing Photos

To remove gallery photos:
1. Delete from both locations:
   - `public/media/headshots/gallery/[Number].jpg`
   - `src/assets/headshots/gallery/[Number].jpg`
2. **Optional:** Renumber remaining photos to close gaps

## Optimization

All gallery photos are automatically optimized by Astro:
- **WebP format** (85% quality for thumbnails, 90% for zoom)
- **Lazy loading** (first 4 load immediately, rest load on scroll)
- **Responsive sizing** (different sizes for mobile/desktop)
- **Result:** ~85% file size reduction with no visible quality loss

---

*Last updated: 2025-11-14*
