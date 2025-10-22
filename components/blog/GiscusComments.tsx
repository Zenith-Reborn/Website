"use client";

import Giscus from "@giscus/react";

/**
 * Giscus Comments Component
 *
 * GitHub Discussions-based commenting system for blog posts.
 * Styled to match the phoenix theme with dark mode and gold accents.
 *
 * Configuration:
 * - Repository: Set via GISCUS_REPO_ID environment variable or update below
 * - Category: "Blog Comments" (create in GitHub Discussions)
 * - Mapping: pathname (each blog post URL = unique discussion)
 * - Theme: transparent_dark to match site design
 * - Lazy loading: enabled for performance
 *
 * Setup Instructions:
 * 1. Enable GitHub Discussions in your repository settings
 * 2. Install Giscus app: https://github.com/apps/giscus
 * 3. Get configuration from: https://giscus.app
 * 4. Update repo, repoId, category, and categoryId below
 */

export default function GiscusComments() {
  return (
    <section className="border-primary-gold/20 mt-16 border-t pt-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-playfair from-primary-gold via-primary-orange to-primary-amber mb-8 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
          Comments
        </h2>

        <div className="bg-neutral-darkBg/50 rounded-lg p-6">
          <Giscus
            id="comments"
            repo="Zenith-Reborn/Website"
            repoId="R_kgDOQF3wBw"
            category="Blog Comments"
            categoryId="DIC_kwDOQF3wB84Cw7jx"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="transparent_dark"
            lang="en"
            loading="lazy"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-neutral-gray text-sm">
            Sign in with GitHub to leave a comment. Comments are powered by{" "}
            <a
              href="https://giscus.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-gold hover:text-primary-amber transition-colors"
            >
              Giscus
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
