import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zenithreborn.com";

  // Get all published blog posts
  const posts = getAllPosts();

  // Generate blog post URLs
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // The blog index only changes when a post is published, so it uses the newest post date
  // (posts are sorted newest first).
  const newestPostDate = posts.length > 0 ? new Date(posts[0].date) : undefined;

  // Static pages. lastModified is left out where no real change date is known, instead of
  // claiming that the page changed at build time.
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      ...(newestPostDate && { lastModified: newestPostDate }),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticPages, ...blogUrls];
}
