import { BlogPost } from "./blog";

/**
 * Generates JSON-LD structured data for the website homepage
 * Implements WebSite schema for improved search engine understanding
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zenith Reborn",
    description:
      "Zenith Reborn makes SkillQuest, a skill tracker with built-in focus timers. Track practice time per skill, earn XP and follow your progress.",
    url: "https://zenithreborn.com",
    publisher: {
      "@type": "Organization",
      name: "Zenith Reborn",
      logo: {
        "@type": "ImageObject",
        url: "https://zenithreborn.com/phoenix-logo-transparent.png",
      },
    },
  };
}

/**
 * Generates JSON-LD structured data for individual blog posts
 * Implements BlogPosting schema for rich search results
 */
export function generateBlogPostingSchema(post: BlogPost, url: string) {
  // Convert date to ISO 8601 format with timezone
  const datePublished = new Date(post.date).toISOString();
  const dateModified = new Date(post.date).toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    // Schema.org needs an absolute image URL; cover images are site-relative paths.
    image: new URL(post.coverImage || "/phoenix-logo-transparent.png", "https://zenithreborn.com").toString(),
    datePublished: datePublished,
    dateModified: dateModified, // Can be updated later if we track modification dates
    // Without a named author the post is attributed to the company, not to a person.
    author: post.author
      ? { "@type": "Person", name: post.author, url: "https://zenithreborn.com" }
      : { "@type": "Organization", name: "Zenith Reborn", url: "https://zenithreborn.com" },
    publisher: {
      "@type": "Organization",
      name: "Zenith Reborn",
      logo: {
        "@type": "ImageObject",
        url: "https://zenithreborn.com/phoenix-logo-transparent.png",
      },
    },
    url: url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags.join(", "),
    articleSection: post.project,
  };
}

/**
 * Generates JSON-LD structured data for the blog listing page
 * Implements Blog schema
 */
export function generateBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Zenith Reborn Blog",
    description: "Development notes about the apps and website of Zenith Reborn",
    url: "https://zenithreborn.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Zenith Reborn",
      logo: {
        "@type": "ImageObject",
        url: "https://zenithreborn.com/phoenix-logo-transparent.png",
      },
    },
  };
}
