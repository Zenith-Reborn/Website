# Giscus Comments System - Setup Guide

This guide explains how to complete the Giscus comments system setup for the Zenith Reborn blog.

## What's Been Implemented

✅ **Installed:** `@giscus/react` package
✅ **Created:** `components/blog/GiscusComments.tsx` component with phoenix theme styling
✅ **Integrated:** Comments section added to all blog posts (placed after author, before related posts)
✅ **Tested:** Build successful, no linting or type errors

## What You Need to Do

To activate the comments system, you need to configure GitHub Discussions and get your Giscus IDs.

### Step 1: Enable GitHub Discussions

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/Zenith-Reborn-Website`
2. Click **Settings** tab
3. Scroll down to **Features** section
4. Check the **Discussions** checkbox
5. Click **Set up discussions** button
6. Create a welcome post (optional)

### Step 2: Create "Blog Comments" Category

1. Go to the **Discussions** tab in your repository
2. Click the **Categories** button (or settings icon)
3. Create a new category:
   - **Name:** Blog Comments
   - **Description:** Comments from blog posts
   - **Format:** Announcement (recommended) or Open-ended discussion
4. Save the category

### Step 3: Install Giscus GitHub App

1. Visit: https://github.com/apps/giscus
2. Click **Install** button
3. Select **Only select repositories**
4. Choose your `Zenith-Reborn-Website` repository
5. Click **Install** to authorize

### Step 4: Get Giscus Configuration

1. Visit: https://giscus.app
2. **Repository** section:
   - Enter your repository in format: `YOUR_USERNAME/Zenith-Reborn-Website`
   - Wait for the ✅ checkmark to appear
3. **Page ↔️ Discussions Mapping** section:
   - Select: **pathname** (default, recommended)
4. **Discussion Category** section:
   - Select: **Blog Comments** (the category you created)
5. **Features** section:
   - ✅ Enable reactions for the main post
   - Leave "Emit discussion metadata" unchecked
6. **Theme** section:
   - Select: **transparent_dark** (matches your phoenix theme)
7. Scroll down to **Enable giscus** section
8. Copy the values shown:
   - `data-repo-id` → This is your **REPO_ID**
   - `data-category-id` → This is your **CATEGORY_ID**

### Step 5: Update GiscusComments Component

Edit the file: `components/blog/GiscusComments.tsx`

Replace the placeholder values with your actual configuration:

```tsx
<Giscus
  id="comments"
  repo="YOUR_GITHUB_USERNAME/Zenith-Reborn-Website"  // ← Replace YOUR_GITHUB_USERNAME
  repoId="YOUR_REPO_ID"                              // ← Replace with actual repoId from giscus.app
  category="Blog Comments"                           // ← Keep as is (or change if you used different name)
  categoryId="YOUR_CATEGORY_ID"                      // ← Replace with actual categoryId from giscus.app
  mapping="pathname"
  strict="0"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="bottom"
  theme="transparent_dark"
  lang="en"
  loading="lazy"
/>
```

**Example with actual values:**
```tsx
<Giscus
  id="comments"
  repo="HansZenith/Zenith-Reborn-Website"
  repoId="R_kgDOL1234567"  // This is just an example
  category="Blog Comments"
  categoryId="DIC_kwDOL1234567ABC"  // This is just an example
  mapping="pathname"
  strict="0"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="bottom"
  theme="transparent_dark"
  lang="en"
  loading="lazy"
/>
```

### Step 6: Build and Deploy

```bash
# Test locally first
npm run dev

# Visit a blog post at http://localhost:3000/blog/YOUR-POST-SLUG
# The comments section should appear at the bottom

# Build for production
npm run build

# Deploy to Vercel
git add .
git commit -m "Add Giscus comments system to blog posts"
git push
```

## Features

### Phoenix Theme Integration
- ✨ Gradient heading matching "Related Posts" style
- 🎨 Transparent dark theme matching site design
- 🏆 Gold accent colors for links
- 📱 Responsive design for all screen sizes

### Performance Optimizations
- ⚡ Lazy loading enabled (loads only when user scrolls to comments)
- 📦 Minimal bundle size impact (~15 kB gzipped)
- 🚀 No impact on initial page load

### User Experience
- 🔐 Sign in with GitHub to comment
- 👍 Reactions enabled on comments
- 🔗 Comments stored in GitHub Discussions
- 🛡️ Built-in spam protection via GitHub
- 📧 Email notifications for comment replies (if enabled in GitHub settings)

### Moderation
- ✅ Edit/delete comments via GitHub Discussions
- 🔒 Lock discussions to prevent new comments
- 🚫 Hide/delete spam comments
- 👥 GitHub permissions apply (you have full control as repo owner)

## Testing Checklist

After deployment, verify:

- [ ] Comments section appears on all blog posts
- [ ] Theme matches the phoenix design (gold gradients, dark background)
- [ ] "Sign in with GitHub" button works
- [ ] Can post a test comment successfully
- [ ] Comment appears in GitHub Discussions
- [ ] Comment appears on blog post
- [ ] Reactions work (thumbs up, etc.)
- [ ] Mobile responsive (test on phone/tablet)
- [ ] Lazy loading works (check Network tab - giscus script loads on scroll)

## Troubleshooting

### Comments not appearing?
1. Check browser console for errors
2. Verify `repo`, `repoId`, `category`, and `categoryId` are correct
3. Ensure GitHub Discussions is enabled
4. Ensure Giscus app is installed on repository

### "Error: Repository not found"?
- Double-check repository name format: `username/repo-name`
- Ensure repository is public (Giscus doesn't work with private repos)
- Verify Giscus app has access to the repository

### Theme doesn't match?
- Ensure `theme="transparent_dark"` is set in component
- Check that Tailwind classes are applied correctly
- Clear browser cache and hard refresh

## Privacy & Data

- **No tracking:** Giscus doesn't track users
- **No ads:** Completely free and open source
- **No cookies:** GDPR compliant
- **Data storage:** Comments stored in your GitHub repository (you own the data)
- **User authentication:** GitHub OAuth (secure, no password storage)

## Resources

- **Giscus Website:** https://giscus.app
- **Giscus GitHub:** https://github.com/giscus/giscus
- **Documentation:** https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md
- **React Component:** https://github.com/giscus/giscus-component

---

**Status:** Implementation complete - awaiting GitHub configuration
**Last Updated:** 2025-10-22
**Contact:** Configure and test, then delete this file if desired
