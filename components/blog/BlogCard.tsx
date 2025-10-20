import Link from 'next/link'
import { BlogPostMetadata } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMetadata
}

const projectColors: Record<string, { bg: string; border: string; text: string; badge: string; badgeGlow: string }> = {
  SkillQuest: {
    bg: 'bg-blue-950/30',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    badge: 'bg-gradient-to-r from-blue-600 to-blue-500',
    badgeGlow: 'shadow-blue-500/50'
  },
  ZenFocus: {
    bg: 'bg-purple-950/30',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    badge: 'bg-gradient-to-r from-purple-600 to-purple-500',
    badgeGlow: 'shadow-purple-500/50'
  },
  'Zenith Reborn': {
    bg: 'bg-amber-950/30',
    border: 'border-primary-gold/30',
    text: 'text-primary-gold',
    badge: 'bg-phoenix-gradient',
    badgeGlow: 'shadow-primary-orange/50'
  },
}

export default function BlogCard({ post }: BlogCardProps) {
  const colors = projectColors[post.project] || {
    bg: 'bg-neutral-darkBg/50',
    border: 'border-neutral-gray/30',
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
    <Link href={`/blog/${post.slug}`}>
      <article className={`${colors.bg} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border ${colors.border} backdrop-blur-sm hover:scale-[1.02] group`}>
        {post.coverImage && (
          <div className="mb-4 -mt-6 -mx-6 rounded-t-xl overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="flex items-center gap-3 mb-3">
          <span className={`${colors.badge} ${colors.badgeGlow} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
            {post.project}
          </span>
          <time className="text-sm text-neutral-gray">{formattedDate}</time>
        </div>

        <h3 className={`font-playfair text-2xl font-bold mb-3 ${colors.text} group-hover:text-primary-gold transition-colors`}>
          {post.title}
        </h3>

        <p className="text-neutral-lightText/80 leading-relaxed mb-4 flex-grow">
          {post.summary}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-xs bg-neutral-darkBg/50 text-neutral-lightText/70 px-2 py-1 rounded border border-neutral-gray/30"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className={`mt-4 font-semibold ${colors.text} flex items-center group-hover:text-primary-gold transition-colors`}>
          Lees meer
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  )
}
