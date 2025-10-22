import { BlogPostMetadata } from '@/lib/blog'
import BlogCard from './BlogCard'

interface RelatedPostsProps {
  posts: BlogPostMetadata[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-12 border-t border-primary-gold/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl font-bold mb-8 bg-gradient-to-r from-primary-gold via-primary-orange to-primary-amber bg-clip-text text-transparent">
          You might also like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
