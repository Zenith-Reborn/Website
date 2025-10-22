import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { MDXComponents } from "@/components/blog/MDXComponents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import GiscusComments from "@/components/blog/GiscusComments";
import { generateBlogPostingSchema } from "@/lib/structuredData";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";

const projectColors: Record<
  string,
  { bg: string; text: string; badge: string; badgeGlow: string }
> = {
  SkillQuest: {
    bg: "bg-blue-950/20",
    text: "text-blue-400",
    badge: "bg-gradient-to-r from-blue-600 to-blue-500",
    badgeGlow: "shadow-blue-500/50",
  },
  ZenFocus: {
    bg: "bg-purple-950/20",
    text: "text-purple-400",
    badge: "bg-gradient-to-r from-purple-600 to-purple-500",
    badgeGlow: "shadow-purple-500/50",
  },
  "Zenith Reborn": {
    bg: "bg-amber-950/20",
    text: "text-primary-gold",
    badge: "bg-phoenix-gradient",
    badgeGlow: "shadow-primary-orange/50",
  },
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const url = `https://zenithreborn.com/blog/${slug}`;
  const ogImage = post.coverImage || "https://zenithreborn.com/phoenix-logo-transparent.png";

  return {
    title: `${post.title} | Zenith Blog`,
    description: post.summary,
    keywords: post.tags.join(", "),
    authors: post.author ? [{ name: post.author }] : [{ name: "Zenith Reborn" }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: url,
      siteName: "Zenith Reborn",
      locale: "en_US",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      authors: post.author ? [post.author] : ["Zenith Reborn"],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [ogImage],
      creator: "@zenithreborn",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 4);

  const colors = projectColors[post.project] || {
    bg: "bg-neutral-darkBg/50",
    text: "text-neutral-lightText",
    badge: "bg-neutral-gray",
    badgeGlow: "shadow-neutral-gray/50",
  };

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Generate JSON-LD structured data
  const url = `https://zenithreborn.com/blog/${slug}`;
  const jsonLd = generateBlogPostingSchema(post, url);

  return (
    <div className="bg-neutral-darkBg min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Header */}
      <div className={`${colors.bg} border-primary-gold/10 border-b pt-28 pb-12`}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`${colors.badge} ${colors.badgeGlow} rounded-full px-4 py-1.5 text-sm font-semibold text-white shadow-lg`}
              >
                {post.project}
              </span>
              <time className="text-neutral-gray">{formattedDate}</time>
            </div>

            <h1 className={`font-playfair mb-4 text-4xl font-bold md:text-5xl ${colors.text}`}>
              {post.title}
            </h1>

            <p className="text-neutral-lightText/80 text-xl leading-relaxed">{post.summary}</p>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-neutral-darkBg/50 text-neutral-lightText/70 border-neutral-gray/30 rounded-full border px-3 py-1 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="container mx-auto -mt-8 mb-8 px-4">
          <div className="relative mx-auto h-96 max-w-4xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="border-primary-gold/20 rounded-xl border object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <MDXRemote
              source={post.content}
              components={MDXComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  ],
                },
              }}
            />
          </div>

          {/* Author */}
          {post.author && (
            <div className="border-primary-gold/20 mt-12 border-t pt-8">
              <p className="text-neutral-gray">
                Geschreven door{" "}
                <span className="text-primary-gold font-semibold">{post.author}</span>
              </p>
            </div>
          )}

          {/* Comments */}
          <GiscusComments />

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />

          {/* Navigation */}
          <div className="mt-12 flex flex-col justify-between gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="text-neutral-lightText hover:text-primary-gold inline-flex items-center font-semibold transition-colors"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Terug naar blog
            </Link>
            <Link
              href="/"
              className="text-neutral-lightText hover:text-primary-gold inline-flex items-center font-semibold transition-colors"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Naar homepage
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
