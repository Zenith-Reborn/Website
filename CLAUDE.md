# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zenith Reborn is a Next.js 15 marketing website with an integrated MDX-powered blog system. The site features a phoenix-themed design representing transformation and growth, showcasing the SkillQuest app platform.

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
```

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
- `coverImage`: Optional image URL
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
   published: true
   ---
   ```
3. Write MDX content (supports full React components)
4. Posts are automatically included in the blog listing AND RSS feed
5. Unpublished posts (`published: false`) are filtered out

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

## Key Architectural Decisions

1. **File-based blog** - MDX files in `content/posts/` instead of CMS/database for version control and simplicity
2. **Dual MDX configuration** - Same plugins in both `next.config.ts` and blog post rendering to ensure consistency
3. **Static generation** - Blog posts use `generateStaticParams()` for build-time pre-rendering (fast CDN caching)
4. **Hash navigation** - Custom scroll logic for smooth UX when navigating to homepage sections
5. **Phoenix theme as identity** - Brand colors and gradients central to the design system
6. **Project-based theming** - Different badge colors per project for visual organization
7. **Vercel Analytics & Speed Insights** - Integrated monitoring for page views and Core Web Vitals

## TypeScript & Type Safety

- Strict mode enabled
- Path aliases: `@/*` maps to project root
- Blog post types defined in [lib/blog.ts:7-30](lib/blog.ts#L7-L30)
- Full type coverage for components and utilities
