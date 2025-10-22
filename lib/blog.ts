import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  project: string;
  tags: string[];
  summary: string;
  author?: string;
  coverImage?: string;
  published: boolean;
  content: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  project: string;
  tags: string[];
  summary: string;
  author?: string;
  coverImage?: string;
  published: boolean;
}

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): BlogPostMetadata[] {
  ensurePostsDirectory();

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        project: data.project,
        tags: data.tags || [],
        summary: data.summary,
        author: data.author,
        coverImage: data.coverImage,
        published: data.published ?? true,
      } as BlogPostMetadata;
    })
    .filter((post) => post.published)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return allPostsData;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensurePostsDirectory();

  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      project: data.project,
      tags: data.tags || [],
      summary: data.summary,
      author: data.author,
      coverImage: data.coverImage,
      published: data.published ?? true,
      content,
    };
  } catch {
    return null;
  }
}

export function getPostsByProject(project: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.project.toLowerCase() === project.toLowerCase());
}

export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

export function getAllProjects(): string[] {
  const allPosts = getAllPosts();
  const projects = new Set(allPosts.map((post) => post.project));
  return Array.from(projects).sort();
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.flatMap((post) => post.tags));
  return Array.from(tags).sort();
}

export function getRelatedPosts(currentSlug: string, limit: number = 4): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  const currentPost = allPosts.find((post) => post.slug === currentSlug);

  if (!currentPost) {
    return [];
  }

  // Exclude current post from candidates
  const candidates = allPosts.filter((post) => post.slug !== currentSlug);

  // Score posts based on shared tags
  const scoredPosts = candidates.map((post) => {
    let score = 0;

    // Count shared tags (higher priority)
    const sharedTags = post.tags.filter((tag) =>
      currentPost.tags.some((currentTag) => currentTag.toLowerCase() === tag.toLowerCase())
    );
    score += sharedTags.length * 10;

    // Same project (lower priority)
    if (post.project.toLowerCase() === currentPost.project.toLowerCase()) {
      score += 5;
    }

    return { post, score };
  });

  // Sort by score (descending), then by date (newest first)
  const sortedPosts = scoredPosts
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // If scores are equal, sort by date
      return a.post.date < b.post.date ? 1 : -1;
    })
    .filter((item) => item.score > 0) // Only include posts with some relevance
    .slice(0, limit)
    .map((item) => item.post);

  return sortedPosts;
}
