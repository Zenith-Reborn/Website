"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilter from "@/components/blog/BlogFilter";
import { BlogPostMetadata } from "@/lib/blog";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostMetadata[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostMetadata[]>([]);
  const [projects, setProjects] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog data from API route
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
        setProjects(data.projects);
        setTags(data.tags);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog posts:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (selectedProject) {
      filtered = filtered.filter((post) => post.project === selectedProject);
    }

    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.summary.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedProject, selectedTag, searchQuery, posts]);

  if (loading) {
    return (
      <div className="bg-neutral-darkBg min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="border-primary-gold inline-block h-12 w-12 animate-spin rounded-full border-b-2"></div>
            <p className="text-neutral-lightText mt-4">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-darkBg min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="from-neutral-darkBg via-secondary-deepRed/20 to-neutral-darkBg relative overflow-hidden bg-gradient-to-br pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="bg-phoenix-gradient absolute inset-0"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-playfair text-gradient phoenix-glow mb-6 text-5xl font-bold md:text-6xl">
              Zenith Blog
            </h1>
            <p className="text-neutral-lightText/90 text-xl">
              Weekly updates about our apps and development journey
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto -mt-8 px-4">
        <BlogFilter
          projects={projects}
          tags={tags}
          selectedProject={selectedProject}
          selectedTag={selectedTag}
          onProjectChange={setSelectedProject}
          onTagChange={setSelectedTag}
          onSearch={setSearchQuery}
        />
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-20">
        {filteredPosts.length === 0 ? (
          <div className="py-16 text-center">
            <svg
              className="text-neutral-gray mx-auto mb-4 h-24 w-24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="font-playfair text-neutral-lightText mb-2 text-2xl font-semibold">
              No blog posts found
            </h3>
            <p className="text-neutral-gray">
              {posts.length === 0
                ? "No blog posts have been published yet."
                : "Try adjusting your filters."}
            </p>
          </div>
        ) : (
          <>
            <div className="text-neutral-lightText/70 mb-6">
              {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"} found
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
