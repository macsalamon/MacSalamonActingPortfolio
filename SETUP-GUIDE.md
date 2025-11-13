# Mac Salamon Acting Portfolio - Setup Guide

## 🎯 Quick Start Options

You have **3 ways** to work on this project:

### **Option 1: Local Claude Code CLI (RECOMMENDED)**

This gives you local preview with `npm run dev`.

**Steps:**
1. **Install Claude Code CLI** (if you haven't): https://docs.claude.com/en/docs/claude-code
2. **Clone this repo locally:**
   ```bash
   git clone https://github.com/macsalamon/MacSalamonActingPortfolio.git
   cd MacSalamonActingPortfolio
   npm install
   ```
3. **Open in Claude Code CLI:**
   ```bash
   claude code .
   ```
4. **Start local dev server:**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:4321

5. **Add your content to FileDrop/ folders** (see below)

---

### **Option 2: GitHub Web Interface**

Upload files directly through GitHub without cloning.

**Steps:**
1. Go to: https://github.com/macsalamon/MacSalamonActingPortfolio
2. Navigate to the `FileDrop` folder
3. Click "Add file" → "Upload files"
4. Drag files from your computer
5. Commit changes
6. Ask Claude to integrate them

---

### **Option 3: Cloudflare Pages Preview**

Deploy to Cloudflare for live preview (no local setup needed).

**Steps:**
1. Go to: https://dash.cloudflare.com/
2. Click "Workers & Pages" → "Create application" → "Pages"
3. Click "Connect to Git"
4. Select your GitHub account and this repository
5. **Build settings:**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave blank)
6. Click "Save and Deploy"
7. You'll get a URL like: `https://macsalamonactingportfolio.pages.dev`

**Every push to your branch auto-deploys a preview!**

---

## 📁 Adding Your Content

### **1. Headshots** (Priority 1)

Drop photos into `FileDrop/headshots/`:
- `hero.jpg` - Main headshot for hero section (will be cropped to circle)
- `01.jpg`, `02.jpg`, `03.jpg`, ... - Gallery photos (3:4 aspect ratio ideal)

### **2. Showreel URLs** (Priority 2)

Create `FileDrop/showreel-info/showreel-urls.txt`:
```
General: https://www.filmmakers.eu/de/actors/matthias-salamon/video/XXXXX?autoplay=false&background_color=none&iframe=v2&playlist=h
German: https://...
English: https://...
Polish: https://...
Commercial: https://...
Dramatic: https://...
```

### **3. CV PDF** (Priority 3)

Drop your CV PDF into `FileDrop/cv/` - I'll extract content for the site and make it downloadable.

### **4. Bio Content**

Edit `cms/en.yaml` (and translate to `de.yaml`, `pl.yaml`):
```yaml
about:
  bio1: "<p>Your bio paragraph 1...</p>"
  bio2: "<p>Your bio paragraph 2...</p>"
```

### **5. Agency Info**

Edit `cms/en.yaml`:
```yaml
contact:
  agencyTitle: "Represented by:"
  agencyName: "Your Agency Name"
  agencyEmail: "agency@example.com"
  agencyPhone: "+43 XXX XXX XXX"
```

---

## 🔄 Workflow

**If working locally:**
```bash
# 1. Make changes (add files, edit YAML)
# 2. Sync YAML to JS
npm run sync

# 3. Preview changes
npm run dev

# 4. When happy, commit and push
git add .
git commit -m "Add headshots and showreel URLs"
git push
```

**If using GitHub web:**
1. Upload files to FileDrop/
2. Ask Claude to integrate them
3. Changes will auto-deploy to Cloudflare (if set up)

---

## 🚀 Deployment

Once Cloudflare Pages is connected:
- **Every push** creates a preview deployment
- **Main branch** is your production site
- You can set a custom domain (e.g., macsalamon.com)

---

## 🆘 Need Help?

Just ask Claude! You can:
- Upload files and ask to integrate them
- Request design changes
- Add new features
- Fix bugs

The site is built with Astro, which makes it super fast and easy to maintain!
