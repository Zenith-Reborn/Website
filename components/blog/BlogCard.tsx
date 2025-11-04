import Link from "next/link";
import Image from "next/image";
import { BlogPostMetadata } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMetadata;
  priority?: boolean;
}

const projectColors: Record<
  string,
  { bg: string; border: string; text: string; badge: string; badgeGlow: string }
> = {
  SkillQuest: {
    bg: "bg-blue-950/30",
    border: "border-blue-500/30",
    text: "text-blue-400",
    badge: "bg-gradient-to-r from-blue-600 to-blue-500",
    badgeGlow: "shadow-blue-500/50",
  },
  ZenFocus: {
    bg: "bg-purple-950/30",
    border: "border-purple-500/30",
    text: "text-purple-400",
    badge: "bg-gradient-to-r from-purple-600 to-purple-500",
    badgeGlow: "shadow-purple-500/50",
  },
  "Zenith Reborn": {
    bg: "bg-amber-950/30",
    border: "border-primary-gold/30",
    text: "text-primary-gold",
    badge: "bg-phoenix-gradient",
    badgeGlow: "shadow-primary-orange/50",
  },
};

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  const colors = projectColors[post.project] || {
    bg: "bg-neutral-darkBg/50",
    border: "border-neutral-gray/30",
    text: "text-neutral-lightText",
    badge: "bg-neutral-gray",
    badgeGlow: "shadow-neutral-gray/50",
  };

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={`${colors.bg} flex h-full flex-col rounded-xl border p-6 shadow-lg transition-all duration-300 hover:shadow-2xl ${colors.border} group backdrop-blur-sm hover:scale-[1.02]`}
      >
        {post.coverImage && (
          <div className="relative -mx-6 -mt-6 mb-4 h-48 overflow-hidden rounded-t-xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
            />
          </div>
        )}

        <div className="mb-3 flex items-center gap-3">
          <span
            className={`${colors.badge} ${colors.badgeGlow} rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg`}
          >
            {post.project}
          </span>
          <time className="text-neutral-gray text-sm">{formattedDate}</time>
        </div>

        <h3
          className={`font-playfair mb-3 text-2xl font-bold ${colors.text} group-hover:text-primary-gold transition-colors`}
        >
          {post.title}
        </h3>

        <p className="text-neutral-lightText/80 mb-4 flex-grow leading-relaxed">{post.summary}</p>

        {post.tags && post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-neutral-darkBg/50 text-neutral-lightText/70 border-neutral-gray/30 rounded border px-2 py-1 text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div
          className={`mt-4 font-semibold ${colors.text} group-hover:text-primary-gold flex items-center transition-colors`}
        >
          Read more
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
