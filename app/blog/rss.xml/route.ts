import { getAllPosts } from '@/lib/blog'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = getAllPosts()
  const siteUrl = 'https://zenithreborn.com'
  const feedUrl = `${siteUrl}/blog/rss.xml`

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Zenith Reborn Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Insights on skill mastery, productivity, and personal transformation from the Zenith Reborn team.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.summary}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.author ? `<author>noreply@zenithreborn.com (${post.author})</author>` : ''}
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  })
}
