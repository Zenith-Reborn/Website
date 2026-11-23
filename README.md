# Zenith Reborn Website

Official website and blog for **Zenith Reborn** & **SkillQuest** - A phoenix-themed Next.js 15 landing page with MDX-powered blog system.

## Overview

Zenith Reborn is a comprehensive platform featuring both a marketing website and an integrated blog system. The website showcases the SkillQuest app - an innovative learning and skill development platform with a phoenix theme representing transformation and growth.

## 🎨 Brand Identity

**Phoenix Theme:** Rising from ashes to excellence

**Colors:**

- Primary: Gold (#FFD700), Orange (#FF6B35), Amber (#FFBF00)
- Secondary: Deep Red (#8B0000), Burgundy (#800020)
- Neutrals: Dark BG (#0F0F0F), Light Text (#F5F5F5)

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
zenith-reborn-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & Tailwind
│   └── favicon.ico         # Favicon
├── components/
│   ├── Hero.tsx            # Hero section with Phoenix theme
│   ├── About.tsx           # Mission & vision
│   ├── SkillQuest.tsx      # App features showcase
│   ├── Download.tsx        # App Store and Google Play links
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer with links
├── public/
│   └── robots.txt          # SEO configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies

```

## Features

- **Modern Landing Page** - Responsive, phoenix-themed design with smooth scrolling and animations
- **MDX-Powered Blog** - Rich blog posts with code syntax highlighting and GitHub Flavored Markdown
- **RSS Feed** - Automatic RSS 2.0 feed with auto-discovery for blog subscribers
- **SkillQuest Showcase** - Interactive feature presentation with app screenshots
- **Contact & Downloads** - Contact form and links to SkillQuest on the App Store and Google Play
- **SEO Optimized** - Meta tags, semantic HTML, and performance optimization
- **TypeScript** - Full type safety throughout the codebase
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## 🔧 Customization

### Update Brand Colors

Edit the `@theme` block in `app/globals.css` (Tailwind 4 reads its theme from CSS, not from a `tailwind.config.ts`):

```css
@theme {
  --color-primary-gold: #ffd700;
  --color-primary-orange: #ff6b35;
  --color-primary-amber: #ffbf00;
  /* ... customize as needed */
}
```

### Update Content

- **Hero:** Edit `components/Hero.tsx`
- **About:** Edit `components/About.tsx`
- **Features:** Edit `components/SkillQuest.tsx`
- **Contact:** Edit `components/Contact.tsx`

### Add Real Logo

Replace emoji in `components/Hero.tsx`:

```tsx
// Replace
<div className="text-8xl phoenix-glow">🔥</div>

// With
<Image src="/logo.svg" alt="Phoenix" width={100} height={100} />
```

## 📧 Email Integration

The contact form sends its messages with Resend (`RESEND_API_KEY`) to hello@zenithreborn.com. It sends no automatic reply to the visitor. Other options:

1. **SendGrid** - 12,000 free emails/month
2. **Resend** - 3,000 free emails/month
3. **Formspree** - Simple form submissions
4. **Web3Forms** - No backend required

See `DEPLOYMENT.md` for detailed setup instructions.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically
4. Connect your domain `zenithreborn.com`

**Full deployment guide:** See `DEPLOYMENT.md`

### Quick Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/zenith-reborn-website)

## 📊 Performance

- ⚡ Lighthouse Score: 90+
- 🎨 First Contentful Paint: < 1s
- 🚀 Time to Interactive: < 2s
- 📱 Mobile-optimized

## Tech Stack

- **Framework:** [Next.js 15.5.6](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.9.3](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.1.14](https://tailwindcss.com/)
- **Content:** MDX (Markdown + JSX)
- **UI Library:** React 19.2.0

### Key Dependencies

- `@mdx-js/loader` & `@next/mdx` - MDX support
- `gray-matter` - Frontmatter parsing
- `remark-gfm` - GitHub Flavored Markdown
- `rehype-highlight` - Code syntax highlighting
- `rehype-slug` - Heading anchors
- `rehype-autolink-headings` - Auto-generated heading links

## Blog System

The blog system uses MDX files stored in `content/posts/`. Each post includes:

- **Frontmatter** - Metadata (title, date, author, tags, etc.)
- **MDX Content** - Rich content with React components
- **Syntax Highlighting** - Code blocks with automatic highlighting
- **Filtering & Search** - Category and tag-based filtering
- **RSS Feed** - Automatic feed generation at `/blog/rss.xml`

### RSS Feed

The blog includes an RSS 2.0 feed that automatically updates with new posts:

- **Feed URL:** `https://zenithreborn.com/blog/rss.xml`
- **Auto-discovery:** Browsers automatically detect the feed on all pages
- **Content:** Includes post title, summary, publication date, author, and tags
- **Caching:** 1-hour cache with stale-while-revalidate for optimal performance

Subscribe in your favorite RSS reader (Feedly, Inoreader, etc.) to get notified of new posts!

For more details, see [BLOG_SETUP.md](BLOG_SETUP.md) and [BLOG_WORKFLOW.md](BLOG_WORKFLOW.md).

## Documentation

- [BLOG_SETUP.md](BLOG_SETUP.md) - Blog configuration guide
- [BLOG_WORKFLOW.md](BLOG_WORKFLOW.md) - Blog workflow and publishing process
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment instructions
- [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Technical implementation details
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide

## 🐛 Troubleshooting

### Development server won't start

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Styles not loading

```bash
# Rebuild Tailwind
npm run dev
# Clear browser cache (Ctrl+Shift+R)
```

### Build errors

```bash
# Check TypeScript errors
npm run build
# Fix errors before deploying
```

## 📞 Contact

- **Email:** hello@zenithreborn.com
- **Website:** zenithreborn.com

## 📄 License

© 2025 Zenith Reborn. All rights reserved.

---

**Built with ❤️ and 🔥 by Zenith Reborn**
