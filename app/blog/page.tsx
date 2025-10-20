'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import BlogCard from '@/components/blog/BlogCard'
import BlogFilter from '@/components/blog/BlogFilter'
import { BlogPostMetadata } from '@/lib/blog'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostMetadata[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPostMetadata[]>([])
  const [projects, setProjects] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch blog data from API route
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts)
        setFilteredPosts(data.posts)
        setProjects(data.projects)
        setTags(data.tags)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading blog posts:', err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let filtered = posts

    if (selectedProject) {
      filtered = filtered.filter(post => post.project === selectedProject)
    }

    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag))
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.summary.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    setFilteredPosts(filtered)
  }, [selectedProject, selectedTag, searchQuery, posts])

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-darkBg">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-gold"></div>
            <p className="mt-4 text-neutral-lightText">Blog posts laden...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-darkBg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-neutral-darkBg via-secondary-deepRed/20 to-neutral-darkBg">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-phoenix-gradient"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gradient mb-6 phoenix-glow">
              Zenith Blog
            </h1>
            <p className="text-xl text-neutral-lightText/90">
              Wekelijkse updates over onze apps en development journey
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 -mt-8">
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
          <div className="text-center py-16">
            <svg
              className="mx-auto h-24 w-24 text-neutral-gray mb-4"
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
            <h3 className="text-2xl font-playfair font-semibold text-neutral-lightText mb-2">
              Geen blog posts gevonden
            </h3>
            <p className="text-neutral-gray">
              {posts.length === 0
                ? 'Er zijn nog geen blog posts gepubliceerd.'
                : 'Probeer je filters aan te passen.'}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-neutral-lightText/70">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} gevonden
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
