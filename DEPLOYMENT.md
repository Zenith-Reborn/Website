# Zenith Reborn - Deployment Guide

## 🚀 Deploy to Vercel

### Prerequisites

- GitHub account
- Vercel account (free tier works)
- Domain registered at your provider

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Zenith Reborn landing page"

# Create GitHub repository and push
# Go to github.com and create a new repository named "zenith-reborn-website"
git remote add origin https://github.com/YOUR_USERNAME/zenith-reborn-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Sign in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Repository**
   - Click "Add New" → "Project"
   - Select your GitHub repository: `zenith-reborn-website`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `.next` (auto-configured)
   - Install Command: `npm install` (auto-configured)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)
   - Your site will be live at: `https://your-project.vercel.app`

### Step 3: Connect Custom Domain (zenithreborn.com)

1. **Add Domain in Vercel**
   - Go to your project dashboard on Vercel
   - Click "Settings" → "Domains"
   - Enter `zenithreborn.com`
   - Click "Add"

2. **Configure DNS Records**

   Go to your domain registrar's DNS settings and add these records:

   **For apex domain (zenithreborn.com):**

   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   ```

   **For www subdomain:**

   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **Verify Domain**
   - Return to Vercel
   - Wait for DNS propagation (can take up to 48 hours, usually 5-30 minutes)
   - Vercel will automatically issue SSL certificate
   - Your site will be live at `https://zenithreborn.com`

### Step 4: Configure Email (Optional)

For the contact form to work, you'll need to integrate an email service:

**Option 1: Email API Services**

- [SendGrid](https://sendgrid.com) (12,000 free emails/month)
- [Resend](https://resend.com) (3,000 free emails/month)
- [Mailgun](https://mailgun.com) (5,000 free emails/month)

**Option 2: Form Submission Services**

- [Formspree](https://formspree.io)
- [Netlify Forms](https://netlify.com/products/forms)
- [Web3Forms](https://web3forms.com)

**Implementation:**

1. Sign up for your chosen service
2. Get your API key
3. Add to Vercel environment variables:
   - Go to Settings → Environment Variables
   - Add: `EMAIL_API_KEY=your_key_here`
4. Update the contact form handler in `components/Contact.tsx`

### Step 5: Configure Waitlist (Optional)

For the download section waitlist to work:

**Option 1: Mailchimp**

1. Create a Mailchimp account
2. Create an audience for "SkillQuest Waitlist"
3. Get your API key and audience ID
4. Add to Vercel environment variables

**Option 2: ConvertKit**

1. Create a ConvertKit account
2. Create a form for waitlist
3. Get your API key and form ID
4. Add to Vercel environment variables

**Option 3: Simple Email Collection**
Use a service like Airtable or Google Sheets to collect emails:

1. Create an Airtable base or Google Sheet
2. Use their API to submit form data
3. Much simpler for MVP

## 🔄 Continuous Deployment

Once connected to GitHub, every push to the `main` branch will automatically:

1. Trigger a new build on Vercel
2. Run tests (if configured)
3. Deploy to production
4. Update your live site

```bash
# Make changes locally
# Test the changes
npm run dev

# Commit and push
git add .
git commit -m "Update: description of changes"
git push origin main

# Vercel automatically deploys!
```

## 📊 Analytics (Optional)

### Vercel Analytics

1. Go to your project on Vercel
2. Click "Analytics" tab
3. Enable analytics (free for hobby tier)
4. Add to `app/layout.tsx`:

   ```tsx
   import { Analytics } from "@vercel/analytics/react";

   // Add inside <body> tag
   <Analytics />;
   ```

### Google Analytics

1. Create Google Analytics account
2. Get your tracking ID
3. Add to environment variables
4. Install package: `npm install @next/third-parties`
5. Add to layout

## 🎨 Customization Tips

### Update Brand Colors

Edit `tailwind.config.ts` to adjust colors:

```typescript
colors: {
  primary: {
    gold: '#YOUR_COLOR',
    // ...
  }
}
```

### Add Real Phoenix Logo

1. Replace emoji in `components/Hero.tsx`
2. Add SVG or PNG to `/public` folder
3. Use `<Image>` component from Next.js

### Email Integration

Update `components/Contact.tsx` and `components/Download.tsx` with your email service API

## 🐛 Troubleshooting

### Build Fails on Vercel

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript errors locally: `npm run build`

### Domain Not Working

- Wait 24-48 hours for DNS propagation
- Use [DNS Checker](https://dnschecker.org) to verify
- Ensure correct DNS records

### Styles Not Loading

- Clear browser cache
- Check Tailwind config
- Verify `globals.css` import

## 📝 Next Steps

1. **Add Real Content**
   - Replace placeholder text
   - Add actual app screenshots
   - Create real phoenix logo

2. **SEO Optimization**
   - Add sitemap.xml
   - Create opengraph images
   - Add structured data

3. **Performance**
   - Optimize images
   - Add lazy loading
   - Implement caching

4. **Features**
   - Blog section
   - Testimonials
   - Video demos
   - Press kit

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Support](https://vercel.com/support)

---

**Need Help?** Contact hello@zenithreborn.com
