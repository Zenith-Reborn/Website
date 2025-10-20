import { NextResponse } from 'next/server'
import { getAllPosts, getAllProjects, getAllTags } from '@/lib/blog'

export async function GET() {
  try {
    const posts = getAllPosts()
    const projects = getAllProjects()
    const tags = getAllTags()

    return NextResponse.json({
      posts,
      projects,
      tags,
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
