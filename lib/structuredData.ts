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
      "Transform your skills with SkillQuest - the premium skill mastery and focus tracking app. Track progress, master skills, and rise to excellence.",
    url: "https://zenithreborn.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://zenithreborn.com/blog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
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
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: post.coverImage || "https://zenithreborn.com/phoenix-logo-transparent.png",
    datePublished: post.date,
    dateModified: post.date, // Can be updated later if we track modification dates
    author: {
      "@type": "Person",
      name: post.author || "Zenith Reborn",
    },
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
    description: "Weekly updates about our apps and development journey",
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
