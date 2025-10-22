"use client";

import { useState } from "react";

interface BlogFilterProps {
  projects: string[];
  tags: string[];
  selectedProject: string;
  selectedTag: string;
  onProjectChange: (project: string) => void;
  onTagChange: (tag: string) => void;
  onSearch: (query: string) => void;
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
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-neutral-darkBg/50 border-primary-gold/20 mb-8 rounded-xl border p-6 shadow-xl backdrop-blur-sm">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-neutral-darkBg border-neutral-gray/30 focus:ring-primary-gold text-neutral-lightText placeholder-neutral-gray w-full rounded-lg border px-4 py-3 pl-10 focus:ring-2 focus:outline-none"
          />
          <svg
            className="text-neutral-gray absolute top-3.5 left-3 h-5 w-5"
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-neutral-lightText mb-2 block text-sm font-semibold">
            Filter by Project
          </label>
          <select
            value={selectedProject}
            onChange={(e) => onProjectChange(e.target.value)}
            className="bg-neutral-darkBg border-neutral-gray/30 focus:ring-primary-gold text-neutral-lightText w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
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
          <label className="text-neutral-lightText mb-2 block text-sm font-semibold">
            Filter by Tag
          </label>
          <select
            value={selectedTag}
            onChange={(e) => onTagChange(e.target.value)}
            className="bg-neutral-darkBg border-neutral-gray/30 focus:ring-primary-gold text-neutral-lightText w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
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
          <span className="text-neutral-gray text-sm">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {selectedProject && (
              <button
                onClick={() => onProjectChange("")}
                className="bg-primary-gold/20 text-primary-gold border-primary-gold/30 hover:bg-primary-gold/30 flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition-colors"
              >
                {selectedProject}
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            {selectedTag && (
              <button
                onClick={() => onTagChange("")}
                className="bg-primary-orange/20 text-primary-orange border-primary-orange/30 hover:bg-primary-orange/30 flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition-colors"
              >
                #{selectedTag}
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  onSearch("");
                }}
                className="flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-xs text-purple-400 transition-colors hover:bg-purple-500/30"
              >
                &quot;{searchQuery}&quot;
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
