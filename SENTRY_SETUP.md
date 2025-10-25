# Sentry Error Monitoring Setup

This guide will help you set up Sentry error monitoring for the Zenith Reborn website.

## What is Sentry?

Sentry is an error tracking and performance monitoring platform that helps you:
- Get notified when errors occur in production
- See detailed stack traces and user context
- Track error frequency and trends
- Monitor application performance

## Setup Instructions

### 1. Create a Sentry Account

1. Go to [https://sentry.io/signup/](https://sentry.io/signup/)
2. Sign up for a free account (free tier is generous for small projects)
3. Create a new organization (or use your personal account)

### 2. Create a Next.js Project

1. Click "Create Project" in your Sentry dashboard
2. Select **Next.js** as the platform
3. Give it a name (e.g., "zenith-reborn-website")
4. Choose an alert frequency (recommended: "Alert me on every new issue")
5. Click "Create Project"

### 3. Get Your Sentry DSN

After creating the project, Sentry will show you a **DSN (Data Source Name)** that looks like:
```
https://xxxxxxxxxxxxx@xxxxx.ingest.sentry.io/xxxxx
```

Copy this DSN - you'll need it in the next step.

### 4. Configure Environment Variables

1. Open your `.env.local` file (create it if it doesn't exist)
2. Add the following variables:

```bash
# Sentry Error Monitoring
NEXT_PUBLIC_SENTRY_DSN=https://xxxxxxxxxxxxx@xxxxx.ingest.sentry.io/xxxxx
SENTRY_ORG=your-organization-slug
SENTRY_PROJECT=your-project-name
```

**Where to find these values:**
- `NEXT_PUBLIC_SENTRY_DSN`: From step 3 above
- `SENTRY_ORG`: Your organization slug (found in Sentry Settings > Organization Settings)
- `SENTRY_PROJECT`: Your project name (e.g., "zenith-reborn-website")

### 5. (Optional) Source Maps Upload

If you want to upload source maps to Sentry for better error stack traces in production:

1. Go to [https://sentry.io/settings/account/api/auth-tokens/](https://sentry.io/settings/account/api/auth-tokens/)
2. Click "Create New Token"
3. Name it "Zenith Reborn Source Maps"
4. Select scopes: `project:read`, `project:releases`, `org:read`
5. Click "Create Token"
6. Copy the token and add to `.env.local`:

```bash
SENTRY_AUTH_TOKEN=your_auth_token_here
```

### 6. Test Your Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to [http://localhost:3000](http://localhost:3000)

3. Trigger a test error by adding this to any page temporarily:
   ```tsx
   <button onClick={() => { throw new Error("Test Sentry error"); }}>
     Test Error
   </button>
   ```

4. Click the button and check your Sentry dashboard - you should see the error appear!

### 7. Deploy to Production

When deploying to Vercel or another hosting platform:

1. Add the environment variables to your hosting platform's environment settings:
   - `NEXT_PUBLIC_SENTRY_DSN`
   - `SENTRY_ORG`
   - `SENTRY_PROJECT`
   - `SENTRY_AUTH_TOKEN` (if using source maps)

2. Deploy your application

3. Errors in production will now be automatically captured and sent to Sentry

## What Gets Tracked

The Sentry integration will automatically capture:

- ✅ **Client-side errors** - JavaScript errors in the browser
- ✅ **Server-side errors** - Errors during server rendering
- ✅ **API route errors** - Errors in API endpoints
- ✅ **Edge runtime errors** - Errors in edge functions
- ✅ **Global errors** - Critical errors in the root layout
- ✅ **Session replays** - Video-like replay of user sessions when errors occur (10% sampling)

## Sentry Dashboard Features

In your Sentry dashboard, you can:

- View error details with full stack traces
- See user context (browser, OS, page URL)
- Set up email/Slack notifications for new errors
- Create custom alerts based on error frequency
- View performance metrics and slow transactions
- Watch session replays to see what users did before an error

## Important Notes

- **Free Tier Limits**: 5,000 errors and 50 replays per month (more than enough for most sites)
- **Privacy**: Session replays mask all text and media by default
- **Performance**: Sentry adds ~110KB to your bundle (included in the 213KB shared chunk)
- **Source Maps**: Only uploaded in production builds, not development

## Troubleshooting

**Error not appearing in Sentry?**
1. Check that `NEXT_PUBLIC_SENTRY_DSN` is set correctly
2. Verify the DSN is for the correct project
3. Make sure the error actually occurred (check browser console)
4. Wait a few seconds - Sentry can have slight delays

**Build warnings about instrumentation?**
- The deprecation warning about `instrumentation-client.ts` only applies to Turbopack (experimental)
- Current Webpack setup works perfectly - you can ignore this warning

**Source maps not uploading?**
1. Verify `SENTRY_AUTH_TOKEN` is set
2. Check that `SENTRY_ORG` and `SENTRY_PROJECT` match your Sentry settings exactly
3. Look for upload errors in build logs

## Support

- [Sentry Next.js Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Sentry Discord](https://discord.gg/sentry)
- [GitHub Issues](https://github.com/getsentry/sentry-javascript/issues)
