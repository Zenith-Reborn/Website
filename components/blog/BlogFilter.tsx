'use client'

import { useState } from 'react'

interface BlogFilterProps {
  projects: string[]
  tags: string[]
  selectedProject: string
  selectedTag: string
  onProjectChange: (project: string) => void
  onTagChange: (tag: string) => void
  onSearch: (query: string) => void
}

export default function BlogFilter({
  projects,
  tags,
  selectedProject,
  selectedTag,
  onProjectChange,
  onTagChange,
  onSearch,
}: BlogFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div className="bg-neutral-darkBg/50 backdrop-blur-sm border border-primary-gold/20 rounded-xl shadow-xl p-6 mb-8">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 bg-neutral-darkBg border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-neutral-lightText placeholder-neutral-gray"
          />
          <svg
            className="absolute left-3 top-3.5 w-5 h-5 text-neutral-gray"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-neutral-lightText mb-2">
            Filter by Project
          </label>
          <select
            value={selectedProject}
            onChange={(e) => onProjectChange(e.target.value)}
            className="w-full px-4 py-2 bg-neutral-darkBg border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-neutral-lightText"
          >
            <option value="">All projects</option>
            {projects.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-lightText mb-2">
            Filter by Tag
          </label>
          <select
            value={selectedTag}
            onChange={(e) => onTagChange(e.target.value)}
            className="w-full px-4 py-2 bg-neutral-darkBg border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-neutral-lightText"
          >
            <option value="">All tags</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                #{tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {(selectedProject || selectedTag || searchQuery) && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-neutral-gray">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {selectedProject && (
              <button
                onClick={() => onProjectChange('')}
                className="bg-primary-gold/20 text-primary-gold border border-primary-gold/30 text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-primary-gold/30 transition-colors"
              >
                {selectedProject}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            {selectedTag && (
              <button
                onClick={() => onTagChange('')}
                className="bg-primary-orange/20 text-primary-orange border border-primary-orange/30 text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-primary-orange/30 transition-colors"
              >
                #{selectedTag}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  onSearch('')
                }}
                className="bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-purple-500/30 transition-colors"
              >
                &quot;{searchQuery}&quot;
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
