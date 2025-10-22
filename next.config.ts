import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

// Bundle analyzer configuration
// Analyzes JavaScript bundle sizes to monitor performance
// Usage: npm run analyze
// Generates reports in .next/analyze/ (client.html, edge.html, nodejs.html)
// Only enabled when ANALYZE=true environment variable is set
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true, // Automatically opens reports in browser
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
});

export default bundleAnalyzer(withMDX(nextConfig));
