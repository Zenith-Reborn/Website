# Deployment Guide

Complete guide for deploying the Zenith Reborn website to Vercel production.

## Prerequisites

Before deployment, ensure you have:

- [x] All tests passing (see [TESTING.md](./TESTING.md))
- [x] Production build successful (`npm run build`)
- [x] Environment variables ready
- [x] Resend domain verified
- [x] GitHub repository up to date

---

## Step 1: Prepare Environment Variables

You'll need these environment variables in Vercel:

### Required Variables

```bash
# Resend (Email Service)
RESEND_API_KEY=re_your_actual_key_here
```

The site no longer uses Supabase: the waitlist was removed in November 2026.

### Where to Find These Values

**Resend API Key:**
1. Go to https://resend.com/api-keys
2. Create a key with **Sending access** for the domain `zenithreborn.com` (not Full access)
3. Save it in Vercel as a **Secret** (sensitive) variable, so it cannot be read back

---

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for First Deploy)

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Click "Add New..." → "Project"

2. **Import Git Repository:**
   - Select "Import Git Repository"
   - Choose your GitHub account
   - Select the `Zenith-Reborn-Website` repository
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

4. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add all 4 variables from Step 1
   - Make sure they're added to **Production** environment
   - Click "Add" for each variable

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Vercel will provide a URL: `https://zenith-reborn-website.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Add environment variables via CLI
vercel env add RESEND_API_KEY production

# Redeploy with new env vars
vercel --prod
```

---

## Step 3: Configure Custom Domain

### Add Domain to Vercel

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter: `zenithreborn.com`
   - Click "Add"

2. **Configure DNS (OVH.nl):**

Vercel will provide DNS records. Add these in your OVH dashboard:

**For Root Domain (`zenithreborn.com`):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

3. **Wait for DNS Propagation:**
   - Usually takes 5-30 minutes
   - Vercel will auto-detect when ready
   - SSL certificate generated automatically

4. **Set Primary Domain:**
   - In Vercel, click on `zenithreborn.com`
   - Click "Set as Primary Domain"
   - This redirects `www` to root domain

---

## Step 4: Verify Deployment

After deployment, test the following:

### 4.1 Production URLs

- [ ] https://zenithreborn.com loads correctly
- [ ] https://www.zenithreborn.com redirects to root
- [ ] SSL certificate shows valid (🔒 in browser)

### 4.2 Core Functionality

**Pages:**
- [ ] Homepage (/) loads
- [ ] Blog listing (/blog) loads
- [ ] Blog posts (/blog/[slug]) load
- [ ] Legal pages (/privacy, /terms, /cookies) load
- [ ] 404 page works (/nonexistent-page)

**Forms:**
- [ ] Store links in /#download open the App Store and Google Play
- [ ] Contact form works (/#contact)
  - [ ] Email to hello@zenithreborn.com
  - [ ] Auto-reply received

**Navigation:**
- [ ] Hash navigation works (/#about, /#contact, etc.)
- [ ] All internal links work
- [ ] Social media links work
- [ ] Footer links work

### 4.3 SEO & Analytics

- [ ] RSS feed accessible (/blog/rss.xml)
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] Robots.txt accessible (/robots.txt)
- [ ] OpenGraph images load (test with https://www.opengraph.xyz/)
- [ ] Vercel Analytics tracking (check dashboard after 1 hour)
- [ ] Vercel Speed Insights working (check dashboard after 1 hour)

### 4.4 Performance

**Test with:**
- Chrome DevTools Lighthouse
- https://pagespeed.web.dev/

**Expected Scores:**
- Performance: 90+ ✅
- Accessibility: 95+ ✅
- Best Practices: 95+ ✅
- SEO: 100 ✅

---

## Step 5: Post-Deployment Configuration

### 5.1 Google Search Console

1. Go to https://search.google.com/search-console
2. Click "Add Property" → "URL prefix"
3. Enter: `https://zenithreborn.com`
4. Verify ownership (already done via meta tag in layout.tsx)
5. Submit sitemap: `https://zenithreborn.com/sitemap.xml`

### 5.2 Vercel Analytics

**Already configured!** Data will appear within 24 hours.

Check at: https://vercel.com/your-team/zenith-reborn-website/analytics

### 5.3 Resend Domain Settings

Verify domain is active:
1. Go to https://resend.com/domains
2. Check `zenithreborn.com` shows "Verified" ✅
3. If not, check DNS records in OVH

---

## Step 6: Monitor Production

### First 24 Hours

**Check every 4-6 hours:**
- [ ] Error logs in Vercel dashboard
- [ ] Contact form emails arriving
- [ ] Vercel Analytics data appearing
- [ ] Page load times acceptable

### Monitoring Tools

**Vercel Dashboard:**
- Deployments: https://vercel.com/your-team/zenith-reborn-website
- Analytics: https://vercel.com/your-team/zenith-reborn-website/analytics
- Logs: https://vercel.com/your-team/zenith-reborn-website/logs

**Resend Dashboard:**
- Emails: https://resend.com/emails
- Analytics: https://resend.com/analytics

---

## Rollback Procedure

If something goes wrong:

### Quick Rollback (via Vercel Dashboard)

1. Go to Vercel project → "Deployments"
2. Find the last working deployment
3. Click "..." → "Promote to Production"
4. Deployment reverted in ~30 seconds

### Full Rollback (via Git)

```bash
# Find the last working commit
git log --oneline

# Revert to that commit
git reset --hard <commit-hash>

# Force push (be careful!)
git push origin main --force

# Vercel will auto-deploy the reverted version
```

---

## Continuous Deployment

**Automatic deployments configured!**

Every time you push to `main` branch:
1. GitHub triggers Vercel webhook
2. Vercel runs `npm run build`
3. If build succeeds → deploys automatically
4. If build fails → deployment stops, you get notified

**Preview Deployments:**
- Every PR creates a preview URL
- Test features before merging to main
- Preview URL format: `https://zenith-reborn-website-<git-branch>-<team>.vercel.app`

---

## Troubleshooting

### Build Fails on Vercel

**Check:**
1. Environment variables set correctly
2. `npm run build` works locally
3. All dependencies in `package.json`
4. Node version compatible (check `package.json` engines field)

**Solution:**
```bash
# Test build locally
npm run build

# Check for errors
# Fix any issues
# Push to GitHub
```

### Forms Not Working

**Check:**
1. `RESEND_API_KEY` in the Vercel dashboard
2. Resend API key valid

**Test the contact route without sending mail** (an empty body must give HTTP 400):
```bash
curl -i -X POST https://zenithreborn.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{}'
```

### Emails Not Sending

**Check:**
1. Resend domain verified
2. DNS records correct in OVH
3. API key has send permissions
4. Check Resend dashboard for errors

### Domain Not Working

**Check:**
1. DNS records in OVH match Vercel's requirements
2. Wait 30 minutes for DNS propagation
3. Clear browser cache
4. Try incognito mode

**Verify DNS:**
```bash
nslookup zenithreborn.com
# Should show Vercel IP: 76.76.21.21
```

---

## Security Checklist

Post-deployment security verification:

- [ ] All API keys stored in Vercel environment variables (not in code)
- [ ] `.env.local` not committed to git
- [ ] HTTPS/SSL working correctly
- [ ] CORS configured properly (Next.js handles this)
- [ ] Rate limiting considered (future improvement)

---

## Cost Monitoring

### Expected Monthly Costs

**Vercel:**
- Hobby Plan: $0/month ✅
- Pro Plan: $20/month (if needed later)

**Resend:**
- Free tier: 100 emails/day, 3,000 emails/month ✅
- Upgrade when: >100 signups/day

**Total:** $0/month on free tiers ✅

**Monitor:**
- Vercel dashboard for build minutes
- Resend dashboard for email quota

---

## Support

For deployment issues:

1. **Check logs:**
   - Vercel: Project → Logs
   - Resend: Emails → View Details

2. **Documentation:**
   - Vercel: https://vercel.com/docs
   - Resend: https://resend.com/docs

3. **Contact:**
   - Email: hello@zenithreborn.com
   - Or refer to project documentation in this repository

---

## Success Metrics

After 1 week in production, verify:

- [ ] Uptime: 99.9%+ (Vercel status)
- [ ] Page load time: <2 seconds average
- [ ] Contact form submissions: >0
- [ ] Zero security incidents
- [ ] Zero data loss
- [ ] Email delivery rate: >95%

**Congratulations! 🎉 Your website is now live in production!**
