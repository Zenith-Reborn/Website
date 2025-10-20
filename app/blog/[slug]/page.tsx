import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXComponents } from '@/components/blog/MDXComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github-dark.css'

const projectColors: Record<string, { bg: string; text: string; badge: string; badgeGlow: string }> = {
  SkillQuest: {
    bg: 'bg-blue-950/20',
    text: 'text-blue-400',
    badge: 'bg-gradient-to-r from-blue-600 to-blue-500',
    badgeGlow: 'shadow-blue-500/50'
  },
  ZenFocus: {
    bg: 'bg-purple-950/20',
    text: 'text-purple-400',
    badge: 'bg-gradient-to-r from-purple-600 to-purple-500',
    badgeGlow: 'shadow-purple-500/50'
  },
  'Zenith Reborn': {
    bg: 'bg-amber-950/20',
    text: 'text-primary-gold',
    badge: 'bg-phoenix-gradient',
    badgeGlow: 'shadow-primary-orange/50'
  },
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Zenith Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post || !post.published) {
    notFound()
  }

  const colors = projectColors[post.project] || {
    bg: 'bg-neutral-darkBg/50',
    text: 'text-neutral-lightText',
    badge: 'bg-neutral-gray',
    badgeGlow: 'shadow-neutral-gray/50'
  }

  const formattedDate = new Date(post.date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-neutral-darkBg">
      <Navbar />

      {/* Header */}
      <div className={`${colors.bg} border-b border-primary-gold/10 pt-28 pb-12`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className={`${colors.badge} ${colors.badgeGlow} text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg`}>
                {post.project}
              </span>
              <time className="text-neutral-gray">{formattedDate}</time>
            </div>

            <h1 className={`font-playfair text-4xl md:text-5xl font-bold mb-4 ${colors.text}`}>
              {post.title}
            </h1>

            <p className="text-xl text-neutral-lightText/80 leading-relaxed">
              {post.summary}
            </p>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-sm bg-neutral-darkBg/50 text-neutral-lightText/70 px-3 py-1 rounded-full border border-neutral-gray/30"
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
        <div className="container mx-auto px-4 -mt-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl shadow-2xl border border-primary-gold/20"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none prose-invert">
            <MDXRemote
              source={post.content}
              components={MDXComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  ],
                },
              }}
            />
          </div>

          {/* Author */}
          {post.author && (
            <div className="mt-12 pt-8 border-t border-primary-gold/20">
              <p className="text-neutral-gray">
                Geschreven door <span className="font-semibold text-primary-gold">{post.author}</span>
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-neutral-lightText hover:text-primary-gold font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Terug naar blog
            </Link>
            <Link
              href="/"
              className="inline-flex items-center text-neutral-lightText hover:text-primary-gold font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Naar homepage
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
