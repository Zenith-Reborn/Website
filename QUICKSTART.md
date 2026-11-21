# ⚡ Quick Start Guide - Zenith Reborn Website

## 🎯 You're Ready to Launch!

Your premium landing page is complete with:

- ✅ Phoenix-themed hero section with gold/orange gradients
- ✅ About section with mission, vision & values
- ✅ SkillQuest app showcase with 6 key features
- ✅ Download section with iOS/Android + waitlist signup
- ✅ Contact form
- ✅ Professional footer with links
- ✅ Mobile-responsive design
- ✅ SEO optimized

## 🚀 Get Started in 3 Steps

### 1️⃣ Install Dependencies

```bash
npm install
```

**Note:** If npm install takes too long, try:

```bash
npm install --force
```

### 2️⃣ Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 3️⃣ Deploy to Vercel

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub (create repo first on github.com)
git remote add origin https://github.com/YOUR_USERNAME/zenith-reborn-website.git
git push -u origin main

# Then on vercel.com:
# - Import your GitHub repo
# - Click Deploy
# - Add domain: zenithreborn.com
```

## 📂 Project Files Created

```
✅ app/layout.tsx         - Root layout + SEO
✅ app/page.tsx           - Home page
✅ app/globals.css        - Global styles + brand colors (@theme)
✅ components/Hero.tsx    - Phoenix hero section
✅ components/About.tsx   - Mission & vision
✅ components/SkillQuest.tsx - App features
✅ components/Download.tsx   - App download + waitlist
✅ components/Contact.tsx    - Contact form
✅ components/Footer.tsx     - Footer with links
✅ next.config.ts            - Next.js config
✅ tsconfig.json             - TypeScript config
✅ package.json              - Dependencies
```

## 🎨 Your Brand Colors (Already Configured!)

```css
Primary:
  - Gold: #FFD700
  - Orange: #FF6B35
  - Amber: #FFBF00

Secondary:
  - Deep Red: #8B0000
  - Burgundy: #800020

Neutrals:
  - Dark BG: #0F0F0F
  - Light Text: #F5F5F5
  - Gray: #6B7280
```

## ✏️ Quick Customizations

### Replace Fire Emoji with Phoenix Logo

In `components/Hero.tsx`, line ~17:

```tsx
// Replace
<div className="text-8xl phoenix-glow">🔥</div>

// With your logo
<Image src="/phoenix-logo-transparent.png" alt="Phoenix" width={100} height={100} />
```

### Change Tagline

In `components/Hero.tsx`, line ~35:

```tsx
Master Your Skills, One Session at a Time
```

### Add Real App Screenshot

In `components/SkillQuest.tsx`, line ~71-79:
Replace the placeholder phone mockup with your actual app screenshot.

### Update Social Links

In `components/Footer.tsx` and `components/Contact.tsx`:
Replace `href="#"` with your actual social media URLs.

## 📧 Connect Email Service

For contact form and waitlist to work, choose one:

**Easiest:** [Web3Forms](https://web3forms.com) - No backend needed

1. Get API key from web3forms.com
2. Add to form action in `components/Contact.tsx`

**Best for Marketing:** [ConvertKit](https://convertkit.com) or [Mailchimp](https://mailchimp.com)

1. Create account + get API key
2. Set up API route in Next.js
3. Update form handlers

See `DEPLOYMENT.md` for detailed email integration guide.

## 🌐 Domain Setup (zenithreborn.com)

After deploying to Vercel:

1. **Vercel Settings → Domains** → Add `zenithreborn.com`
2. **Your Domain Registrar DNS:**
   ```
   A Record:  @  →  76.76.21.21
   CNAME: www  →  cname.vercel-dns.com
   ```
3. Wait 5-30 minutes for DNS propagation
4. SSL auto-configured by Vercel ✅

## 🐛 Troubleshooting

### Dependencies won't install?

```bash
npm install --force
# or
npm cache clean --force && npm install
```

### Dev server won't start?

```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Styles not showing?

- Hard refresh browser: `Ctrl+Shift+R` (Win) or `Cmd+Shift+R` (Mac)
- Check browser console for errors

### Build errors?

```bash
npm run build
# Fix any TypeScript/React errors shown
```

## 📖 Full Documentation

- **DEPLOYMENT.md** - Complete deployment guide with Vercel + domain setup
- **README.md** - Full project documentation
- This file - Quick start essentials

## 🎉 Next Steps

1. ✅ Run `npm install && npm run dev`
2. ✅ View at http://localhost:3000
3. ✅ Customize content & images
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel
6. ✅ Connect zenithreborn.com
7. ✅ Set up email service
8. ✅ Launch! 🚀

---

**Questions?** Check `DEPLOYMENT.md` or email hello@zenithreborn.com
