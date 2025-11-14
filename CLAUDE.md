# Claude Code - Project Guide

This document provides context for Claude Code when working on the Mac Salamon Acting Portfolio project.

## Project Overview

**Project Name:** Mac Salamon Acting Portfolio
**Type:** Portfolio website for professional actor and voice-over artist
**Tech Stack:** Astro (static site generator)
**Design Theme:** Light Monochrome - Clean, professional grey/white theme with subtle gradients
**Status:** Foundation complete, awaiting content (CV, headshots, showreel URLs)

## Key Information

### Actor
- **Matthias / Maciej / Mac Salamon** - Professional actor and voice-over artist
- Based in Vienna, Austria
- Multilingual: Polish (native), German (native), English (fluent), Russian (basic), French (basic)
- Also known as "Maciej" in Polish contexts, "Mac" informally

### Languages Supported
- English (flag-gb.png) - Default language
- German (flag-de.png)
- Polish (flag-pl.png)

Note: Language flags use PNG images instead of emoji for cross-browser compatibility (Windows Chrome/Edge don't support flag emojis).

### Color Scheme
- **Theme:** Light Monochrome with professional grey tones
- **Background:** Light grey (`#f5f5f5`) with diagonal gradient overlay (`#e8e8e8` → `#a8a8a8`)
- **Text:** Dark grey (`#2a2a2a`) on light backgrounds
- **Accents:** Mid-grey (`#6a6a6a`) for interactive elements
- **Borders:** Light grey (`#c5c5c5`)
- **Design:** Clean, professional, theatre-industry appropriate

## Project Structure

```
MacSalamonActingPortfolio/
├── cms/                       # 📝 CMS - Edit these YAML files
│   ├── en.yaml                # English content
│   ├── de.yaml                # German content
│   └── pl.yaml                # Polish content
├── FileDrop/                  # Temporary content staging (gitignored)
│   ├── headshots/             # User uploads headshot photos here
│   ├── cv/                    # User uploads CV PDF here
│   ├── showreel-info/         # User provides showreel URLs here
│   └── README.md              # Instructions for FileDrop usage
├── scripts/
│   └── sync-translations.js   # Syncs YAML to content.js
├── public/
│   └── media/                 # Images, videos, audio files
│       ├── headshots/         # Headshot photos (hero + gallery)
│       ├── cv/                # Downloadable CV PDF
│       ├── flag-*.png         # Language flag images (gb, de, pl)
│       └── headshot-main.jpg  # Main hero headshot (circular crop)
├── src/
│   ├── components/
│   │   ├── ShowreelSelector.astro  # Showreel video selector with tabs
│   │   ├── PhotoGallery.astro      # Headshot photo gallery
│   │   └── CVTabs.astro            # CV/Resume tabs component
│   ├── data/
│   │   └── content.js              # Generated from YAML (DON'T EDIT)
│   ├── pages/
│   │   └── index.astro             # Main single-page application
│   └── styles/
│       └── global.css              # All styles (light monochrome theme)
├── CLAUDE.md                  # This file
├── CLAUDEOLD.md               # Voice-over project reference (for comparison)
├── README.md                  # Main documentation
├── SETUP-GUIDE.md             # Quick setup guide for user
└── package.json               # Dependencies and scripts
```

## Common Tasks

### Syncing Content Changes (After Editing YAML)
```bash
npm run sync
```
Converts YAML files to `content.js`. **Run this after any YAML edits.**

### Running the Development Server
```bash
npm run dev
```
Opens at `http://localhost:4321`

### Building for Production
```bash
npm run build
```
Output goes to `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## Content Management

### YAML-Based Content Editing System

All website text is editable via YAML files for easier content management.

**Location:** `cms/`
- `en.yaml` - English content (default)
- `de.yaml` - German content
- `pl.yaml` - Polish content

**Workflow:**
1. Edit the YAML file for the desired language
2. Run `npm run sync` to update `content.js`
3. Changes appear automatically in the browser (with hot reload)

**Why YAML?**
- Easy to read and edit (no JavaScript knowledge required)
- Clean separation between content and code
- Simple syntax with clear structure
- One command to sync changes

**Example Edit:**
```yaml
hero:
  name: Matthias Salamon
  tagline: Actor & Voice-Over Artist
  intro: Multilingual actor and voice talent based in Vienna, Austria

showreels:
  title: Showreels
  reels:
    - id: general
      label: General Showreel
      embedUrl: "https://www.filmmakers.eu/de/actors/matthias-salamon/video/XXXXX..."
```

**Important:** Always run `npm run sync` after editing YAML files. The website reads from `content.js`, which is automatically generated from YAML files.

### Content Sections in YAML

Each YAML file contains these sections:
- **nav:** Navigation menu labels
- **hero:** Name, tagline, intro text
- **showreels:** Title and list of 6 showreel videos (General, German, English, Polish, Commercial, Dramatic)
- **gallery:** Photo gallery configuration
- **cv:** CV/Resume tabs content (General Info, Film/TV, Theatre/Musicals, Education/Workshops)
- **about:** Biography paragraphs
- **voiceover:** Voice-over section (links to separate voice-over website)
- **contact:** Contact information, agency details, casting profile links
- **footer:** Copyright, legal links

### Media Files Structure

#### Headshots
- **Location:** `public/media/headshots/`
- **Hero image:** `public/media/headshot-main.jpg` (displayed as circular crop in hero section)
- **Gallery images:** `01.jpg`, `02.jpg`, `03.jpg`, etc. (displayed in photo gallery)
- **Format:** JPG or PNG
- **Aspect ratio:** 3:4 works best for gallery photos
- **Hero aspect:** Square or portrait for circular crop

#### CV/Resume PDF
- **Location:** `public/media/cv/`
- **Filename:** `Matthias-Salamon-CV.pdf`
- **Usage:** Downloadable via "Download Full CV" button
- **Note:** CV content is also displayed in tabs on the site (extracted into YAML)

#### Showreel Videos
- **Hosted externally:** filmmakers.eu or schauspielervideos.de
- **Embedded:** Using iframe embed URLs from those platforms
- **Configuration:** Edit `embedUrl` in YAML files
- **6 categories:** General, German, English, Polish, Commercial, Dramatic

### Content Configuration Files
- **CMS Folder:** `cms/` - All editable YAML files
  - `en.yaml`, `de.yaml`, `pl.yaml` - Translation files
- **Generated JavaScript (Don't Edit):** `src/data/content.js`
- **Sync Script:** `scripts/sync-translations.js`

**Important:** Languages should be treated separately. English content may differ from German and Polish translations (not just direct translations).

## Styling

### CSS Variables
All theming is done via CSS custom properties in `src/styles/global.css`:

```css
:root {
  /* Light Monochrome Theme */
  --color-background: #f5f5f5;
  --color-surface: #e8e8e8;
  --color-text: #2a2a2a;
  --color-accent: #6a6a6a;
  --color-border: #c5c5c5;
  /* ... and more */
}
```

### Design System
- **Typography:** Raleway for all text (headings and body)
- **Font Sizes:**
  - Base: 17px
  - Large: 21px
  - XL: 36px
  - 2XL: 56px
- **Iconography:** + / - for collapsible sections
- **Border radius:** 12px standard
- **Transitions:** 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Background:** Diagonal gradient from light grey to mid-grey (`linear-gradient(135deg, #e8e8e8 0%, #a8a8a8 100%)`)

### Layout Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1050px
- **Desktop:** > 1050px
- **Hamburger menu:** Activates at 1050px

### Responsive Design
- Mobile-first approach
- Single-column layout on mobile
- Multi-column grid layouts on desktop
- Hamburger menu for mobile navigation
- Logo clickable to return to top of page

## Component Details

### ShowreelSelector.astro
- Tab-based selector for 6 showreel categories
- Categories: General, German, English, Polish, Commercial, Dramatic
- Embeds videos from filmmakers.eu/schauspielervideos.de using iframe
- Responsive iframe with 16:9 aspect ratio
- Tabs switch between different showreel videos
- Multilingual tab labels (translations from YAML)

### PhotoGallery.astro
- Grid-based photo gallery for headshots
- Lightbox/modal functionality for viewing full-size images
- Responsive: 1 column (mobile), 2-3 columns (desktop)
- Lazy loading for performance
- Keyboard navigation support (arrow keys, ESC to close)
- Accessibility: proper ARIA labels

### CVTabs.astro
- 4-tab CV/Resume display
- Tabs: General Info, Film/TV, Theatre/Musicals, Education/Workshops
- Displays credits in structured format (role, project, year, director)
- Download button for full PDF CV
- Multilingual content from YAML
- Responsive tab layout (stacks on mobile)

## Features

### Collapsible Sections
- Showreels, Gallery, CV, About, Voice-Over, Contact sections all collapsible
- JavaScript-based with max-height transitions
- Open/closed state indicated by + / - icon
- Initial state: all sections open
- User preference could be saved to localStorage (future enhancement)

### Language Switcher
- Flag-based buttons in header using PNG images (not emoji)
- Images: `/media/flag-gb.png`, `/media/flag-de.png`, `/media/flag-pl.png`
- 24px wide, border-radius 3px
- Swaps content for all sections simultaneously
- State managed in vanilla JavaScript
- PNG images ensure compatibility across all browsers (Windows Chrome/Edge don't support emoji flags)
- **Auto-detection:** Browser language detection on first visit
  - Detects German/Polish browsers and shows appropriate language
  - Defaults to English for other languages
  - Manual language selection saved to localStorage
  - Returning visitors see their saved preference
  - Privacy-friendly (no cookies, no tracking)

### Responsive Navigation
- Desktop: Horizontal nav menu in header
- Mobile: Hamburger menu (slides in from top/side)
- Smooth scroll to sections on click
- Active section highlighting (optional enhancement)
- Sticky header (optional - currently not implemented)

## Development Workflow

### When Adding Features
1. Check if it affects multiple languages (update all translations in YAML)
2. Test on mobile and desktop breakpoints
3. Verify accessibility (keyboard navigation, screen readers)
4. Check color contrast meets WCAG AA standards
5. Run `npm run sync` if YAML files were changed

### When Updating Content
1. **Text content:** Edit YAML files in `cms/`, then run `npm run sync`
2. **Images:** Add to `public/media/` directory with proper naming
3. **Showreel URLs:** Edit `embedUrl` in YAML showreels section
4. **CV PDF:** Replace file in `public/media/cv/`
5. Test in development before building

### Before Committing
1. Remove any console.log statements
2. Check for broken links or missing files
3. Verify all languages work correctly
4. Test responsive design at all breakpoints
5. Run `npm run build` to ensure no build errors
6. Check that FileDrop/ is gitignored (temporary files only)

## FileDrop Workflow

The `FileDrop/` directory is for easy content management:

### User uploads content to FileDrop folders:
- `FileDrop/headshots/` - Headshot photos (`hero.jpg`, `01.jpg`, `02.jpg`, etc.)
- `FileDrop/cv/` - CV PDF file
- `FileDrop/showreel-info/` - Text file with showreel URLs

### Claude Code moves content to proper locations:
- Headshots → `public/media/headshots/` (rename hero.jpg to headshot-main.jpg)
- CV PDF → `public/media/cv/`
- Showreel URLs → Update `embedUrl` in `cms/en.yaml` (and de.yaml, pl.yaml)
- Extract CV content → Update CV section in YAML files

### FileDrop is gitignored
- Temporary staging area only
- Files are moved to public/ during integration
- User can upload via GitHub web interface or local clone

## Deployment

### Target Platform
Cloudflare Pages (configured for static output)

### Build Settings
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 18+
- **Environment:** Node.js

### Git Workflow
- **Repository:** https://github.com/macsalamon/MacSalamonActingPortfolio
- **Branch:** main
- Can deploy automatically from GitHub to Cloudflare Pages

### Deployment Steps
1. Push changes to GitHub main branch
2. Cloudflare Pages auto-builds and deploys
3. Preview deployments for non-main branches
4. Custom domain: Can be configured in Cloudflare Pages settings

## Accessibility Checklist

- [x] All images have alt text
- [x] Color contrast meets WCAG AA (4.5:1 for normal text)
- [x] Keyboard navigation works for all interactive elements
- [x] Language attributes are set correctly (`lang` attribute on `<html>`)
- [x] Focus indicators are visible
- [x] Screen reader only text for semantic headings (`.sr-only`)
- [ ] Skip link to main content (not yet implemented)
- [ ] Form labels properly associated (when contact form is added)

## Performance Considerations

- Static site generation (fast by default)
- Lazy-load images in gallery
- Responsive images (srcset) - future enhancement
- CSS custom properties for theming (efficient)
- No JavaScript frameworks (minimal JS bundle)
- Media files optimized (JPEG for photos)
- Font preconnect for Google Fonts
- Smooth scroll behavior (CSS-based)

### Performance Optimizations Applied
- `image-rendering: -webkit-optimize-contrast` for sharper images
- `-webkit-font-smoothing: antialiased` for better text rendering
- `scroll-behavior: smooth` for smooth anchor scrolling
- Fixed background gradient (no repainting on scroll)

### Future Performance Enhancements
- Image optimization (WebP format with JPEG fallback)
- Font subsetting (reduce Raleway file size to only used characters)
- Critical CSS extraction
- Service Worker for offline functionality
- Intersection Observer for lazy loading sections

## Next Steps (Content Integration)

The site foundation is complete. Next steps require user content:

1. **Upload CV PDF** → FileDrop/cv/ → Extract content for YAML CV section
2. **Provide 6 showreel URLs** → FileDrop/showreel-info/ → Update embedUrl in YAML
3. **Add headshots** → FileDrop/headshots/ → Move to public/media/headshots/
4. **Write biography** → Edit `about.bio1` and `about.bio2` in YAML files
5. **Add agency information** → Edit `contact.agencyName`, etc. in YAML files

## Important Notes

### Backup Files
- No `.astrob` or `.cssb` backup files should exist
- Git version control is the backup system
- FileDrop/ is temporary only (gitignored)

### References to Other Projects
- This is Mac's **acting portfolio** (separate from voice-over website)
- Voice-over work is referenced but links to separate site
- CLAUDEOLD.md is from the voice-over project (for reference only)
- Don't confuse the two projects - they serve different purposes

### Media Files
- JPEG files are committed to Git (compressed, acceptable size)
- Keep media files in the repository for easy deployment
- Optimize images before committing (use online tools or Photoshop)
- Hero headshot should be at least 600x600px for circular crop

### Naming Conventions
- **Matthias** - Official/formal name (used on the site)
- **Maciej** - Polish version of the name
- **Mac** - Informal/nickname
- Use "Matthias Salamon" on the site for professional consistency

## Troubleshooting

### Dev Server Won't Start
- Check if port 4321 is already in use
- Try `npm install` again
- Delete `node_modules/` and `.astro/` directories, reinstall
- Check for syntax errors in `.astro` files

### Styles Not Updating
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check if changes are in the correct CSS file (`src/styles/global.css`)
- Verify CSS syntax (no missing brackets or semicolons)
- Clear Astro cache (delete `.astro/` directory)

### Images Not Displaying
- Check file path matches `public/media/` structure
- Ensure images exist in `public/` directory (not `src/`)
- Verify image filenames match exactly (case-sensitive)
- Check browser console for 404 errors

### Showreels Not Loading
- Verify `embedUrl` is correct in YAML
- Check that URLs include `?autoplay=false&background_color=none&iframe=v2&playlist=h` parameters
- Ensure iframe embed is allowed (some sites block iframes)
- Test URL directly in browser first

### Build Fails
- Check all file paths are correct
- Ensure all imports are valid
- Look for syntax errors in `.astro` files
- Verify all referenced media files exist
- Run `npm run sync` if YAML changes weren't synced

### Language Switcher Not Working
- Check that all three YAML files (en, de, pl) have matching structure
- Verify `npm run sync` was run after YAML edits
- Check browser console for JavaScript errors
- Ensure `data-lang` attributes are set correctly on `<html>` element

## Known Issues & Limitations

### Cross-Browser Compatibility
- **Flag emojis:** Windows Chrome/Edge don't support flag emojis - we use PNG images instead
- **Smooth scroll:** Not supported in older browsers (graceful degradation)

### Mobile Responsiveness
- Collapsible sections use max-height transitions (not ideal for performance, but works reliably)
- Hero headshot circular crop may look odd with extreme portrait/landscape aspect ratios

## Contact

**Project Owner:** Mac Salamon / Matthias Salamon
**Repository:** https://github.com/macsalamon/MacSalamonActingPortfolio
**Related Project:** Salamon Voice-Over Website (https://github.com/macsalamon/salamon-voiceover-concept)

---

*Last updated: 2025-11-13*

## Current Status (as of 2025-11-14)

### Completed Features
- ✅ Project structure set up (adapted from voice-over website)
- ✅ YAML-based CMS for multilingual content (EN/DE/PL)
- ✅ Showreel section with player comparison (Schauspielervideos.de vs Filmmakers.eu)
  - SV player with built-in navigation
  - Filmmakers player with custom selector (6 showreels from FileDrop URLs)
  - Videos stop when switching tabs (no simultaneous playback)
  - Autoplay disabled on SV player
- ✅ CV section fully populated from German CV PDF
  - All 16 Film/TV credits (2014-2024)
  - All theatre/musical productions (1999-2024)
  - Education and training
  - Compact list format (1-2 lines per entry)
  - Year-aligned layout
- ✅ Sync script fixed (regex updated to work with content.js format)

### Pending Content
- ⏳ Headshot photos (FileDrop/headshots/)
- ⏳ CV PDF file (needs to be moved to public/media/cv/)
- ⏳ Biography content (about section)
- ⏳ Agency information
- ⏳ Polish YAML translations (currently using placeholders)

### Next Steps
1. Upload headshots to FileDrop/headshots/ folder
2. Move CV PDF to public/media/cv/
3. Write biography content for about section
4. Translate CV content to Polish (pl.yaml)
5. Add agency contact information
6. Choose final showreel player implementation (SV or Filmmakers)

## Version History

This project was bootstrapped from the Salamon Voice-Over project structure on November 13, 2025. Initial setup created by Claude Code (web version), with local development now managed by Claude Code CLI for stability.

**Session 2025-11-14:**
- Embedded both Schauspielervideos.de and Filmmakers.eu players for comparison
- Built custom showreel selector for Filmmakers player (6 showreels)
- Extracted and structured CV content from German CV PDF
- Populated CV section in English and German YAML files
- Reformatted CV display from card layout to compact list format
- Fixed sync script regex to work with project structure
