# Zenith Reborn - Roadmap & Improvements

This document contains planned improvements and best practices for the Zenith Reborn website and blog system.

## Blog System Improvements

### Short Term (Quick Wins)

#### 1. RSS Feed
**Priority:** High
**Effort:** Low
**Impact:** Medium

Add an RSS/Atom feed for blog readers.

**Implementation:**
- Create `/app/blog/rss.xml/route.ts` API route
- Generate XML feed from blog posts using `lib/blog.ts`
- Add `<link rel="alternate">` to head for auto-discovery
- Include full content or summary in feed items

**Resources:**
- Next.js 15 Route Handlers documentation
- RSS 2.0 specification

---

#### 2. Related Posts
**Priority:** Medium
**Effort:** Low
**Impact:** Medium

Show related posts at the bottom of each blog post based on shared tags or project.

**Implementation:**
- Add function to `lib/blog.ts` to find related posts
- Algorithm: Match by tags first, then by project
- Display 3-4 related posts in card format
- Reuse existing `BlogCard` component

**Design Considerations:**
- Show related posts after main content
- Use same styling as blog listing page
- Add "You might also like" heading

---

#### 3. Analytics Integration
**Priority:** Medium
**Effort:** Low
**Impact:** High

Track blog post views and popular content.

**Options:**
1. **Vercel Analytics** (Recommended)
   - Built-in with Vercel hosting
   - Zero configuration
   - Privacy-friendly

2. **Plausible Analytics**
   - Privacy-focused
   - GDPR compliant
   - Lightweight script

3. **Google Analytics 4**
   - Most features
   - Free tier
   - Privacy concerns

**Implementation:**
- Add analytics package to `package.json`
- Configure in `app/layout.tsx`
- Track page views automatically
- Optional: Custom events for filters/searches

---

### Long Term (Bigger Features)

#### 4. Comments System
**Priority:** Medium
**Effort:** Medium-High
**Impact:** High

Enable community interaction on blog posts.

**Options:**

**A. Third-party Solutions (Recommended)**
- **Giscus** - GitHub Discussions based (free, privacy-friendly)
- **Utterances** - GitHub Issues based (simpler, free)
- **Disqus** - Popular but privacy concerns

**B. Custom Solution**
- Database required (Vercel Postgres, Supabase)
- Authentication needed (NextAuth.js)
- Moderation tools necessary
- Higher maintenance

**Recommended:** Start with Giscus for minimal maintenance.

---

#### 5. Newsletter Integration
**Priority:** Low
**Effort:** Medium
**Impact:** Medium

Send email updates to subscribers.

**Implementation:**
- **Newsletter Service:**
  - Mailchimp (popular, free tier)
  - ConvertKit (creator-focused)
  - Buttondown (simple, markdown)
  - Resend (developer-friendly)

- **Sign-up Form:**
  - Add to blog listing page
  - Add to individual posts (bottom)
  - Simple email input + subscribe button

- **Automation:**
  - Manual sends when new post published
  - OR: Webhook from Vercel on deployment
  - Include post summary + link

---

#### 6. Series Support
**Priority:** Low
**Effort:** Medium
**Impact:** Medium

Group related blog posts into multi-part series.

**Implementation:**
- Add `series` and `seriesPart` to frontmatter:
  ```yaml
  series: "Building SkillQuest"
  seriesPart: 1
  seriesTotal: 5
  ```
- Create series navigation component
- Show "Part X of Y" badge on cards
- Add previous/next navigation in posts
- Create series overview pages

**Design:**
- Badge showing "Series: Part 2 of 5"
- Navigation arrows at top and bottom
- Series table of contents sidebar

---

#### 7. Code Playgrounds
**Priority:** Low
**Effort:** High
**Impact:** Medium

Interactive code examples in blog posts.

**Options:**
1. **Sandpack** (CodeSandbox)
   - React component
   - Multiple frameworks
   - Live preview

2. **CodeMirror**
   - Lightweight editor
   - Syntax highlighting
   - No live preview

**Use Cases:**
- TypeScript/JavaScript examples
- React component demos
- CSS demonstrations

**Implementation:**
- Create custom MDX component
- Wrap code blocks with `live` flag
- Add to `MDXComponents.tsx`

---

#### 8. Dark/Light Toggle
**Priority:** Low
**Effort:** Medium
**Impact:** Medium

Theme switching between dark and light mode.

**Current Status:** Dark theme only

**Implementation:**
- Add `next-themes` package
- Create theme provider in `app/layout.tsx`
- Add toggle button to navbar
- Define light theme colors in `tailwind.config.ts`
- Update all components with theme-aware colors
- Store preference in localStorage

**Design Considerations:**
- Current dark theme is core to brand identity
- Light theme must maintain phoenix colors
- Toggle with sun/moon icon in navbar

---

## Code Quality & Best Practices

### 1. Linting & Formatting

#### ESLint Configuration
**Current Status:** Basic Next.js ESLint setup

**Improvements:**
```bash
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install -D eslint-plugin-tailwindcss
npm install -D eslint-plugin-react-hooks
```

**Recommended Rules:**
- Enforce TypeScript strict mode
- Warn on unused variables
- Enforce consistent import order
- Tailwind class sorting
- React hooks rules

**Add to `package.json`:**
```json
"scripts": {
  "lint": "next lint",
  "lint:fix": "next lint --fix",
  "type-check": "tsc --noEmit"
}
```

---

#### Prettier Integration
**Current Status:** Not configured

**Setup:**
```bash
npm install -D prettier eslint-config-prettier
```

**Create `.prettierrc.json`:**
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Benefits:**
- Automatic code formatting
- Consistent style across team
- Tailwind class sorting

---

### 2. Testing Strategy

#### Unit Tests (Recommended)
**Tool:** Vitest (faster than Jest for Vite/Next.js)

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

**What to Test:**
- `lib/blog.ts` utility functions
- Blog post parsing logic
- Component rendering (BlogCard, BlogFilter)
- Tag filtering logic

**Example:**
```typescript
// lib/blog.test.ts
import { describe, it, expect } from 'vitest'
import { getAllPosts, getPostBySlug } from './blog'

describe('Blog utilities', () => {
  it('should return published posts only', () => {
    const posts = getAllPosts()
    expect(posts.every(p => p.published)).toBe(true)
  })
})
```

---

#### E2E Tests (Optional)
**Tool:** Playwright

```bash
npm install -D @playwright/test
```

**What to Test:**
- Blog listing page loads
- Filtering by project works
- Search functionality
- Blog post pages render
- Navigation between posts

**Priority:** Low (manual testing sufficient for now)

---

### 3. Performance Optimization

#### Image Optimization
**Current Status:** Using Next.js Image component

**Improvements:**
- Add `blur` placeholder for cover images
- Optimize image sizes (use WebP format)
- Lazy load images below fold
- Consider CDN for images (Cloudinary, imgix)

---

#### Bundle Size Analysis
**Add to `package.json`:**
```json
"scripts": {
  "analyze": "ANALYZE=true next build"
}
```

**Install:**
```bash
npm install -D @next/bundle-analyzer
```

**Monitor:**
- Keep JavaScript bundles under 200KB
- Code split large dependencies
- Tree-shake unused code

---

#### Core Web Vitals Monitoring
**Using Vercel Analytics:**
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

**Optimizations:**
- Preload critical fonts
- Optimize images
- Minimize layout shift

---

### 4. SEO Improvements

#### Metadata Optimization
**Current:** Basic metadata in pages

**Improvements:**
- Add Open Graph images for social sharing
- Add Twitter Card metadata
- Generate dynamic OG images per post
- Add JSON-LD structured data

**Example:**
```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.coverImage || '/og-default.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.coverImage || '/og-default.png'],
    },
  }
}
```

---

#### Sitemap & Robots.txt
**Add:**
```bash
# app/sitemap.ts
export default function sitemap() {
  const posts = getAllPosts()
  const blogUrls = posts.map(post => ({
    url: `https://zenithreborn.com/blog/${post.slug}`,
    lastModified: post.date,
  }))

  return [
    { url: 'https://zenithreborn.com', lastModified: new Date() },
    { url: 'https://zenithreborn.com/blog', lastModified: new Date() },
    ...blogUrls,
  ]
}
```

---

### 5. Accessibility (a11y)

#### Current State
Good foundation with semantic HTML.

#### Improvements:
- Add skip-to-content link
- Ensure all images have alt text
- Test keyboard navigation
- Add ARIA labels where needed
- Test with screen reader (NVDA, JAWS)
- Maintain color contrast ratios (WCAG AA)

**Tools:**
- Lighthouse accessibility audit
- axe DevTools browser extension
- WAVE accessibility checker

---

### 6. Error Handling & Monitoring

#### Error Boundaries
Add React Error Boundaries for graceful failures:

```typescript
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  )
}
```

---

#### Error Tracking
**Options:**
- **Sentry** - Comprehensive error tracking
- **Vercel Error Tracking** - Built-in solution
- **LogRocket** - Session replay + errors

**Recommended:** Sentry (free tier available)

```bash
npm install @sentry/nextjs
```

---

### 7. CI/CD Improvements

#### GitHub Actions
**Current:** Vercel handles deployment

**Add Pre-deployment Checks:**
```yaml
# .github/workflows/ci.yml
name: CI
on: [pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
```

**Benefits:**
- Catch errors before merge
- Enforce code quality
- Automated testing

---

## Priority Matrix

### Immediate (Do First)
1. RSS Feed - Low effort, high value
2. ESLint + Prettier setup - Code quality foundation
3. Related Posts - Improves engagement

### Short Term (Next 1-2 months)
4. Analytics - Understanding audience
5. SEO improvements - Organic growth
6. Performance monitoring - User experience

### Medium Term (2-4 months)
7. Comments system - Community building
8. Testing setup - Code confidence
9. Newsletter - Audience building

### Long Term (4+ months)
10. Series support - Content organization
11. Dark/light toggle - User preference
12. Code playgrounds - Interactive learning

---

## Recommendations

### For Solo Developer (You)

**Start with:**
1. RSS Feed (1-2 hours)
2. Prettier + ESLint (1 hour setup)
3. Related Posts (2-3 hours)
4. Vercel Analytics (5 minutes)

**Why:**
- Quick wins
- Immediate value
- Low maintenance
- No ongoing costs

**Avoid (for now):**
- Custom comment systems (high maintenance)
- Complex testing (overkill for current size)
- Newsletter (premature - build audience first)

---

### Development Workflow

**Before Every Commit:**
```bash
npm run lint:fix       # Auto-fix linting issues
npm run type-check     # Verify TypeScript
npm run build          # Test production build
```

**Weekly:**
- Check Vercel Analytics
- Review build times
- Monitor bundle size

**Monthly:**
- Review and update dependencies
- Check for security vulnerabilities
- Audit accessibility
- Review Core Web Vitals

---

## Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Platform](https://vercel.com/docs)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audits
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - Bundle size
- [TypeScript Playground](https://www.typescriptlang.org/play) - Type testing

### Inspiration
- [Josh Comeau's Blog](https://www.joshwcomeau.com) - Interactive examples
- [Lee Robinson's Blog](https://leerob.io) - Next.js best practices
- [Kent C. Dodds](https://kentcdodds.com) - Testing strategies

---

**Last Updated:** 2025-10-21
**Maintained By:** Hans

**Note:** This roadmap is a living document. Priorities may shift based on user feedback, analytics, and project needs.
