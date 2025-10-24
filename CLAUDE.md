# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zenith Reborn is a Next.js 15 marketing website with an integrated MDX-powered blog system. The site features a phoenix-themed design representing transformation and growth, showcasing the SkillQuest app platform.

## Available Global Commands

The following global commands are available from `~/.claude/commands/`:

- **`/blog-post`** - Generate blog posts from any project
  - Works from: SkillQuest, ZenFocus, Zenith Reborn, or any project
  - Analyzes git history and creates MDX blog posts
  - Includes security scanning, git safety checks, and auto cover images
  - Hybrid approach: tries MCP tools first, falls back to direct git commands
  - Dual storage: saves locally in source project + Zenith website
  - **This is the PREFERRED method for all blog post generation**

**IMPORTANT:** Always check for global commands before creating project-specific alternatives. Global commands are more comprehensive and maintained centrally.

## Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Bundle size analysis
npm run analyze
```

### Development Server Management (CRITICAL)

**IMPORTANT:** When testing changes, always ensure only ONE development server is running at a time.

**Why this matters:**
- Multiple servers on different ports (3000, 3001, 3002) cause confusion
- Old servers with errors can mask whether fixes are working
- Port conflicts lead to unpredictable behavior
- Makes proper testing impossible

**Best Practices:**

1. **Before starting a new server:**
   ```bash
   # Kill ALL existing background shells first
   # Use KillShell tool for each running bash process

   # Find processes on ports
   netstat -ano | findstr :3000
   netstat -ano | findstr :3001
   netstat -ano | findstr :3002

   # Kill each process by PID
   taskkill //PID <PID> //F
   ```

2. **Starting a clean server:**
   ```bash
   # Optional: Clean build cache if MDX errors occur
   rm -rf .next

   # Start single server in background
   npm run dev
   ```

3. **After making changes:**
   - Kill the old server FIRST
   - Clean .next folder if needed (especially for MDX changes)
   - Start ONE new server
   - Test on http://localhost:3000

**Common Issues:**

- **"Jest worker" errors with MDX:** Clean .next folder and restart
- **Port already in use:** Kill old process before starting new one
- **Changes not appearing:** Old server still running on different port

**Server Management Checklist:**
- ✅ Kill all old servers before starting new one
- ✅ Verify only one Node process is running
- ✅ Test on the correct port (default: 3000)
- ✅ Clean .next if experiencing MDX parsing issues

### Bundle Size Analysis

**Tool:** `@next/bundle-analyzer` v16.0.0

**Purpose:** Analyze JavaScript bundle sizes to monitor performance and identify optimization opportunities.

**How it works:**

1. Builds production bundle with `ANALYZE=true` environment variable
2. Generates three HTML reports in `.next/analyze/`:
   - `client.html` - Client-side JavaScript bundles (main analysis focus)
   - `edge.html` - Edge runtime bundles
   - `nodejs.html` - Node.js server bundles
3. Automatically opens reports in browser

**Configuration:**

- [next.config.ts:8-15](next.config.ts#L8-L15) - Bundle analyzer wrapper around Next.js config
- [package.json:10](package.json#L10) - `npm run analyze` script with cross-env for Windows

**Current bundle sizes (as of 2025-10-22):**

| Route | First Load JS | Target | Status |
|-------|---------------|--------|--------|
| Homepage | 116 kB | 200 kB | ✅ 42% under |
| Blog listing | 114 kB | 200 kB | ✅ 43% under |
| Blog posts | 112 kB | 200 kB | ✅ 44% under |

**Shared JS:** 102 kB across all pages (excellent code splitting)

**When to run:**

- Before adding major features or dependencies
- After significant refactoring
- Monthly performance audits
- When First Load JS approaches 150 kB (warning threshold)

**Interpreting results:**

- Each colored block represents a JavaScript module
- Larger blocks = larger file sizes = potential optimization targets
- Look for: duplicate dependencies, unexpectedly large libraries, unused code
- Focus on the **client bundle** as it impacts user experience most

**Best practices:**

- Keep First Load JS under 200 kB (current: ~115 kB average)
- Maintain shared chunk strategy (reduces per-page overhead)
- Use dynamic imports for large optional features
- Tree-shake unused code by importing only what you need

## Core Architecture Patterns

### Next.js 15 App Router with Mixed Rendering

- **Homepage**: Client component for hash-based smooth scrolling to sections
- **Blog listing**: Client component with dynamic filtering
- **Blog posts**: Server components with `generateStaticParams()` for SSG at build time
- **Root layout**: Server-side for metadata and fonts

### Blog System Architecture

**File-based MDX system** - Blog posts are MDX files in `content/posts/` instead of a CMS/database. This enables version control and simplicity.

**Data Flow:**

1. MDX files stored in `content/posts/` with YAML frontmatter
2. [lib/blog.ts](lib/blog.ts) provides utilities to read and parse posts
3. Uses `gray-matter` to extract frontmatter metadata
4. `next-mdx-remote/rsc` renders MDX on the server
5. Posts pre-rendered at build time via `generateStaticParams()`

**Blog Post Frontmatter Fields:**

- `title`: Post title
- `date`: ISO date string (YYYY-MM-DD) - used for sorting (newest first)
- `project`: "SkillQuest" | "ZenFocus" | "Zenith Reborn" - determines badge color
- `tags`: Array of tags for filtering
- `summary`: Brief description shown on cards
- `author`: Optional author name
- `coverImage`: **Recommended** - Image URL for OpenGraph/Twitter cards (1200x630px ideal)
  - Use Unsplash URLs with `?w=1200&h=630&fit=crop&q=80` for optimization
  - Falls back to phoenix logo if omitted
  - Critical for social media sharing appearance
- `published`: Boolean - unpublished posts are filtered out

### MDX Processing Pipeline

MDX configuration appears in TWO places with identical plugin setup:

1. **[next.config.ts](next.config.ts)** - For standalone `.mdx` pages
2. **[app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx)** - Inline options for `next-mdx-remote`

**Plugins (applied in order):**

- `remark-gfm` - GitHub Flavored Markdown (tables, task lists, strikethrough)
- `rehype-highlight` - Syntax highlighting for code blocks (using highlight.js)
- `rehype-slug` - Auto-generate IDs for all headings
- `rehype-autolink-headings` - Wrap headings in anchor links for sharing

**Custom MDX Components:** [components/blog/MDXComponents.tsx](components/blog/MDXComponents.tsx) provides styled mappings for all MDX elements (headings, paragraphs, code, etc.) with phoenix-themed colors.

### MDX Troubleshooting

**"Jest worker" errors** when compiling blog posts are typically NOT caused by content issues. Testing revealed that the following are all safe to use:

✅ **Safe to use:**
- Emoji's in headers (`## 🚀 Features`)
- Multiple inline code blocks (`code` and `more` code)
- Any comment syntax in code blocks (MDX doesn't validate code block content)
- Backticks in tables (`` | `code` | `value` | ``)

**Actual causes of "Jest worker" errors:**

1. **Stale build cache** - The `.next` folder can contain corrupted compilation artifacts
   - **Fix:** Delete `.next` folder and rebuild

2. **Multiple concurrent builds** - Editing a file while Next.js is compiling can cause worker crashes
   - **Fix:** Wait for compilation to complete before saving again

3. **File system issues** - Corrupted or locked files
   - **Fix:** Restart dev server, check file permissions

4. **Memory issues** - Large files or many simultaneous compilations
   - **Fix:** Increase Node memory limit or reduce concurrent operations

**Recommended fix workflow:**
1. Stop the dev server
2. Clean build cache: `rm -rf .next`
3. Restart dev server: `npm run dev`
4. If error persists, check for file system locks or memory issues

**Note:** If you encounter a "Jest worker" error, it's almost always a build system issue, not a content issue. The MDX parser is very permissive and accepts a wide variety of markdown syntax.

### Hash Navigation System

The homepage uses hash anchors for smooth scrolling to sections (#about, #skillquest, etc.).

**Smart Navigation Logic in Navbar:**

- On homepage: smooth scroll to section
- From other pages: navigate to homepage first, then scroll
- Custom scroll offset to account for fixed navbar height

### Phoenix Theme Styling

**Tailwind CSS 4** with custom brand colors defined in [tailwind.config.ts](tailwind.config.ts):

- **Primary**: Gold (#FFD700), Orange (#FF6B35), Amber (#FFBF00)
- **Secondary**: Deep Red (#8B0000), Burgundy (#800020)
- **Neutral**: Dark BG (#0F0F0F), Light Text (#F5F5F5)
- **Custom Gradients**: `bg-phoenix-gradient`, `bg-hero-gradient`

The phoenix theme represents transformation and growth - a core part of the brand identity.

### Project-Based Theming

The blog supports color-coded project badges. Each project (SkillQuest, ZenFocus, Zenith Reborn) has unique colors defined in [app/blog/[slug]/page.tsx:13-32](app/blog/[slug]/page.tsx#L13-L32).

**When adding a new project:**

1. Add `project: "ProjectName"` to MDX frontmatter
2. Optionally add custom colors to the `projectColors` object for themed badges

### RSS Feed

The blog includes an automatic RSS 2.0 feed at `/blog/rss.xml`:

**Implementation:**

- [app/blog/rss.xml/route.ts](app/blog/rss.xml/route.ts) - Route handler that generates RSS XML
- [app/layout.tsx:58-65](app/layout.tsx#L58-L65) - Auto-discovery link in HTML head
- Uses `getAllPosts()` from [lib/blog.ts](lib/blog.ts) to fetch all published posts
- Includes: title, link, summary, publication date, author, tags
- Caching: 1-hour with stale-while-revalidate for performance

**Feed URL:** `https://zenithreborn.com/blog/rss.xml`

### Comments System

The blog includes a GitHub Discussions-based commenting system powered by Giscus.

**Implementation:**

- [components/blog/GiscusComments.tsx](components/blog/GiscusComments.tsx) - Comments component with phoenix theme
- [app/blog/[slug]/page.tsx:233](app/blog/[slug]/page.tsx#L233) - Integrated after author section, before related posts
- Uses `@giscus/react` package for React integration

**Features:**

- **GitHub Authentication:** Users sign in with GitHub to comment
- **Phoenix Theme:** Transparent dark theme with gold gradient heading
- **Lazy Loading:** Comments load only when user scrolls to section
- **Privacy-Friendly:** No tracking, GDPR compliant, all data stored in GitHub
- **Moderation:** Full control via GitHub Discussions interface
- **Reactions:** Users can react to comments with emojis
- **Notifications:** GitHub notifications for comment replies

**Configuration:**

- Repository: Configured in component via `repo` prop
- Mapping: `pathname` - each blog post URL maps to unique GitHub Discussion
- Category: "Blog Comments" in GitHub Discussions
- Theme: `transparent_dark` to match site design

**Moderation:**

All comments are stored as GitHub Discussions, allowing you to:
- Edit/delete comments via GitHub interface
- Lock discussions to prevent new comments
- Hide spam comments
- Use GitHub permissions for moderation

## Adding New Blog Posts

1. Create a new file in `content/posts/` with `.mdx` extension
2. Add required YAML frontmatter at the top:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2025-10-21"
   project: "SkillQuest"
   tags: ["tag1", "tag2"]
   summary: "Brief description"
   author: "Your Name"
   coverImage: "https://images.unsplash.com/photo-xxxxx?w=1200&h=630&fit=crop&q=80"
   published: true
   ---
   ```
3. Write MDX content (supports full React components)
4. Posts are automatically included in the blog listing AND RSS feed
5. Unpublished posts (`published: false`) are filtered out

**Finding Cover Images:**

- **Unsplash** (recommended): https://unsplash.com - Free, high-quality images
  - Search for relevant topics (coding, productivity, etc.)
  - Use URL format: `https://images.unsplash.com/photo-{id}?w=1200&h=630&fit=crop&q=80`
  - Optimal dimensions: 1200x630px (OpenGraph standard)
- **Alternative sources**: Pexels, Pixabay (also free with commercial use)
- **Custom images**: Create branded OG images with Canva or Figma

### Blog Content Guidelines (CRITICAL)

When generating blog posts (via `/write-blog-post` or manually):

**Content Accuracy:**

- ✅ ONLY write about features/changes that were actually implemented
- ✅ Base content on actual git commits and code changes
- ❌ NEVER add "What's Next?" or future roadmap sections without explicit user request
- ❌ NEVER suggest features that weren't built
- ❌ NEVER add speculative content to make posts "more complete"

**Review Process:**

- ✅ ALWAYS show full blog post to user before saving
- ✅ WAIT for explicit approval before saving to `content/posts/`
- ✅ If user requests changes, update and show again
- ❌ NEVER auto-save blog posts without confirmation

**Tone & Style:**

- Write in English
- Professional yet accessible tone
- Focus on "why" alongside "what"
- Include concrete examples and code snippets
- Use clear structure with headings and lists

## Analytics & Performance Monitoring

The website includes Vercel Analytics and Speed Insights for tracking and monitoring:

**Vercel Analytics** (`@vercel/analytics`):

- Automatic page view tracking
- Privacy-friendly (no cookies, GDPR compliant)
- Real-time visitor data in Vercel dashboard
- Zero configuration required

**Vercel Speed Insights** (`@vercel/speed-insights`):

- Real User Monitoring (RUM) for Core Web Vitals
- Tracks: LCP, FID, CLS, TTFB, FCP, INP
- Performance scores from actual user sessions
- Visible in Vercel dashboard after deployment

**Implementation:** Both components are added to [app/layout.tsx:69-70](app/layout.tsx#L69-L70) inside the `<body>` tag for global tracking across all pages.

## SEO Optimization

The website is fully optimized for search engines with comprehensive metadata and structured data.

### Metadata Implementation

**Global Metadata** ([app/layout.tsx](app/layout.tsx)):
- Title template for consistent branding: `%s | Zenith Reborn`
- Enhanced descriptions with extended keywords
- Robots meta tags with Google Bot configuration
- Open Graph images (1200x1200px)
- Twitter Card metadata with creator handle
- RSS feed alternate link
- Canonical URLs

**Blog Post Metadata** ([app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx)):
- Dynamic Open Graph images from `coverImage` frontmatter
- Twitter Card with `summary_large_image` format
- Author metadata
- Publication dates in ISO format
- Tags as keywords for search relevance
- Article-specific Open Graph properties

**Blog Listing Metadata** ([app/blog/layout.tsx](app/blog/layout.tsx)):
- Dedicated metadata for blog index page
- Open Graph and Twitter Card configuration

### Structured Data (JSON-LD)

**Schema Types Implemented** ([lib/structuredData.ts](lib/structuredData.ts)):

1. **WebSite Schema** (Homepage):
   - SearchAction for site search
   - Organization publisher information

2. **BlogPosting Schema** (Individual posts):
   - Article metadata (headline, description, image)
   - Author and publisher information
   - Publication and modification dates
   - Keywords from tags

3. **Blog Schema** (Blog listing):
   - Blog information and publisher

### Sitemap & Robots

**Dynamic Sitemap** ([app/sitemap.ts](app/sitemap.ts)):
- Homepage: priority 1.0, weekly updates
- Blog listing: priority 0.8, daily updates
- Blog posts: priority 0.7, monthly updates
- Uses post dates for `lastModified`
- Auto-generated at build time

**Robots.txt** ([app/robots.ts](app/robots.ts)):
- Allows all crawlers
- Disallows `/api/` and `/private/`
- References sitemap location

### Testing SEO

After deployment, test with:
- **OpenGraph Preview**: https://www.opengraph.xyz/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Lighthouse SEO Audit**: Chrome DevTools > Lighthouse tab

## Key Architectural Decisions

1. **File-based blog** - MDX files in `content/posts/` instead of CMS/database for version control and simplicity
2. **Dual MDX configuration** - Same plugins in both `next.config.ts` and blog post rendering to ensure consistency
3. **Static generation** - Blog posts use `generateStaticParams()` for build-time pre-rendering (fast CDN caching)
4. **Hash navigation** - Custom scroll logic for smooth UX when navigating to homepage sections
5. **Phoenix theme as identity** - Brand colors and gradients central to the design system
6. **Project-based theming** - Different badge colors per project for visual organization
7. **Vercel Analytics & Speed Insights** - Integrated monitoring for page views and Core Web Vitals
8. **Bundle size monitoring** - `@next/bundle-analyzer` for performance optimization and preventing bundle bloat
9. **Giscus comments** - GitHub Discussions-based commenting system for community engagement

## TypeScript & Type Safety

- Strict mode enabled
- Path aliases: `@/*` maps to project root
- Blog post types defined in [lib/blog.ts:7-30](lib/blog.ts#L7-L30)
- Full type coverage for components and utilities
