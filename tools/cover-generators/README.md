# Blog Cover Image Generator

Professional, branded cover images for Zenith Reborn and SkillQuest blog posts.

## 🎨 What This Is

A custom cover image system that creates **1200x630px** OpenGraph-compliant images with:
- Project logos (Phoenix for Zenith, SkillQuest logo)
- Theme-based color schemes
- Clean, minimal design
- Professional typography
- Branded aesthetics

## 📁 Files

- **`cover-template.html`** - Main template with live preview and customization
- **`generate-mvp-cover-final.html`** - Example: MVP completion cover (Zenith)
- **`generate-mvp-cover-v2.html`** - Alternative version with canvas
- **`generate-mvp-cover.html`** - Original experimental version
- **`generate-moviequest-cover.html`** - MovieQuest blog cover generator (simplified single-file version)
- **`moviequest-logo.png`** - Phoenix filmreel logo for MovieQuest covers (512x512)

## 🚀 Quick Start

### Method 1: Using the Template (Recommended)

1. **Open the template:**
   ```
   File: tools/cover-generators/cover-template.html
   ```

2. **Customize settings:**
   - **Project**: Zenith Reborn or SkillQuest
   - **Theme**: Feature (gold), Bug Fix (purple), Performance (green), DevOps (blue)
   - **Main Text**: e.g., "NEW FEATURE", "BUG FIX", "MAJOR UPDATE"
   - **Subtitle**: e.g., "Production Ready", "Critical Fix", "Performance Boost"

3. **Click "Update Preview"** to see changes

4. **Generate PNG** using one of the methods below

### Method 2: Using Playwright MCP (Best Quality)

1. Open the template in your browser
2. Customize the settings
3. Use Playwright to take a screenshot:

```javascript
// Navigate to the file
await page.goto('file:///C:/Users/Hans/StudioProjects/Zenith-Reborn-Website/tools/cover-generators/cover-template.html');

// Take screenshot of .cover element
await page.locator('.cover').screenshot({
  path: 'public/blog/your-cover-name.png',
  type: 'png'
});
```

Or via Claude Code with Playwright MCP:
- Navigate to the HTML file
- Take screenshot of `.cover` element (ref from snapshot)
- Save to `public/blog/{filename}.png`

### Method 3: Browser Screenshot

1. Open the template HTML file in Chrome/Edge
2. Press F12 → Console tab
3. Run this command:
   ```javascript
   document.querySelector('.cover').style.transform = 'scale(1)';
   ```
4. Right-click the cover → "Inspect"
5. In DevTools, right-click the `.cover` element → "Capture node screenshot"
6. Save as PNG

## 🎯 Theme Guidelines

### Feature (Gold Theme)
- **Use for**: New features, major updates, releases
- **Colors**: Gold gradient background
- **Examples**: "NEW FEATURE", "MVP COMPLETE", "VERSION 2.0"

### Bug Fix (Purple Tint)
- **Use for**: Bug fixes, critical fixes, patches
- **Colors**: Purple-tinted dark background
- **Examples**: "BUG FIX", "CRITICAL FIX", "HOTFIX"

### Performance (Green Tint)
- **Use for**: Performance improvements, optimizations
- **Colors**: Green-tinted dark background
- **Examples**: "PERFORMANCE", "OPTIMIZED", "2X FASTER"

### DevOps (Blue Tint)
- **Use for**: Deployment, infrastructure, CI/CD
- **Colors**: Blue-tinted dark background
- **Examples**: "DEPLOYED", "CI/CD READY", "INFRASTRUCTURE"

## 📏 Image Specifications

- **Dimensions**: 1200x630px (OpenGraph standard)
- **Format**: PNG
- **File size**: ~200-500 KB (acceptable for web)
- **Location**: Save to `public/blog/`
- **Naming**: `{project}-{theme}-{description}.png`
  - Examples:
    - `zenith-mvp-cover.png`
    - `skillquest-feature-timer.png`
    - `skillquest-bugfix-sync.png`

## 🖼️ Using Generated Images

### In Blog Post Frontmatter

```yaml
---
title: "Your Post Title"
coverImage: "/blog/your-cover-name.png"
---
```

### File Path Structure

```
public/
  blog/
    zenith-mvp-cover.png
    skillquest-feature-timer.png
    skillquest-bugfix-database.png
```

## 🎨 Customization Tips

### Text Sizing
- **Short text** (1-3 words): Use larger font (90px)
- **Medium text** (4-6 words): Use medium font (72px)
- **Long text** (7+ words): Use smaller font (60px)

### Logo Adjustments
- Phoenix logo: Works best at 280px
- SkillQuest logo: May need slight size adjustment (check in preview)

### Color Variations
To create custom themes, edit the CSS:

```css
.cover.theme-custom {
    background: linear-gradient(135deg, #0a0a0a 0%, #YOUR_COLOR 50%, #0a0a0a 100%);
}
```

## 📋 Workflow for Blog Posts

1. **Write blog post** in `content/posts/`
2. **Generate cover image** using this tool
3. **Save PNG** to `public/blog/`
4. **Update frontmatter** with `coverImage: "/blog/filename.png"`
5. **Commit both files** (blog post + cover image)
6. **Deploy** to Vercel

## 🔧 Troubleshooting

### Logo not loading
- Check file path: `../public/phoenix-logo-transparent.png`
- Make sure you're opening from the correct directory

### Canvas "tainted" error
- This is a CORS issue when trying to download via canvas
- **Solution**: Use Playwright MCP or browser screenshot instead

### Wrong dimensions
- The `.cover` div is hardcoded to 1200x630px
- Don't resize manually - always use the div as-is

### Blurry image
- Make sure to use **PNG** format (not JPEG)
- Don't scale the screenshot - use 1:1 pixel ratio

## 💡 Tips & Best Practices

1. **Consistency**: Use similar text patterns across posts
   - "NEW FEATURE" / "RELEASED"
   - "BUG FIX" / "FIXED"
   - "PERFORMANCE" / "OPTIMIZED"

2. **Project Branding**: Keep phoenix for Zenith, SkillQuest logo for SkillQuest posts

3. **Theme Matching**: Match the theme to your blog post tags
   - `#feature` → Feature theme (gold)
   - `#bugfix` → Bug Fix theme (purple)
   - `#performance` → Performance theme (green)
   - `#devops` → DevOps theme (blue)

4. **Test Locally First**: View the cover on localhost before deploying

5. **Batch Generation**: Create multiple covers at once, then update posts

## 🚀 Future Enhancements

Ideas for improving this system:
- [ ] Add more themes (security, ui, api, etc.)
- [ ] Animated gradient backgrounds
- [ ] Icon/badge system for tags
- [ ] Dark/light mode variants
- [ ] Automated generation script
- [ ] Integration with `/blog-post` command

## 📝 Examples

### Zenith Reborn MVP
- Theme: Feature (gold)
- Text: "MVP" / "COMPLETE"
- Subtitle: "Production Ready"
- File: `zenith-mvp-cover.png`

### SkillQuest Timer Feature
- Theme: Feature (gold)
- Text: "FOCUS" / "TIMER"
- Subtitle: "New Feature"
- File: `skillquest-feature-timer.png`

### SkillQuest Database Fix
- Theme: Bug Fix (purple)
- Text: "DATABASE" / "FIXED"
- Subtitle: "Critical Patch"
- File: `skillquest-bugfix-database.png`

### MovieQuest Blog Series
Generated using `generate-moviequest-cover.html` (simplified version):
- **Day One Wins**: "DAY ONE" / "WINS" - Three Game-Changers
- **Phoenix Rising**: "PHOENIX" / "RISING" - Branding & Exclusions
- **The Polish**: "THE" / "POLISH" - Details That Matter
- **Power Mode**: "POWER" / "MODE" - Filtering & Sorting Mastery

**How to use MovieQuest generator:**
1. Open `generate-moviequest-cover.html` in browser
2. Edit the text in the HTML directly:
   ```html
   <div class="main-text">FIRST LINE</div>
   <div class="main-text">SECOND LINE</div>
   <div class="subtitle-text">Your Subtitle</div>
   ```
3. Refresh page to see changes
4. Take screenshot using Playwright MCP or browser DevTools
5. Save to `public/blog/moviequest-{description}.png`

All MovieQuest covers use the phoenix filmreel logo and gold theme for consistency.

---

**Made with ❤️ for Zenith Reborn and SkillQuest**

For questions or improvements, update this README or create an issue.
