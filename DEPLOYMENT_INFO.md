# Deployment Configuration

This repository is configured for automatic deployment to Vercel.

## Automatic Deployment Flow

1. Push to `main` branch
2. GitHub triggers Vercel webhook
3. Vercel builds and deploys automatically
4. Live site updates within minutes

## Blog Post Workflow

The blog system is fully automated:

1. In your project, run: `/write-blog-post`
2. Claude analyzes git history
3. Generates blog post MDX file
4. Commits changes
5. Pushes to GitHub
6. Vercel auto-deploys

Everything happens automatically! 🚀

## Configuration

- **Platform**: Vercel
- **Branch**: main
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Git Configuration

Git is configured with automatic authentication for seamless commits and pushes.
