import { BlogPostMetadata } from "@/lib/blog";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  posts: BlogPostMetadata[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="border-primary-gold/20 mt-16 border-t pt-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-playfair from-primary-gold via-primary-orange to-primary-amber mb-8 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
          You might also like
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
