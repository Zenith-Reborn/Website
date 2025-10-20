#!/usr/bin/env python3
"""
Zenith Blog MCP Server
Automatically generates blog posts from project git history and updates.
"""

import os
import sys
import json
from datetime import datetime, timedelta
from pathlib import Path
from typing import Optional
import re
import subprocess

# MCP SDK
from mcp.server import Server
from mcp.types import Tool, TextContent, Resource
import mcp.server.stdio


# Initialize the MCP server
app = Server("zenith-blog")

# Configuration
WEBSITE_REPO_PATH = os.environ.get(
    "ZENITH_WEBSITE_PATH",
    "C:/Users/Hans/StudioProjects/Zenith-Reborn-Website"
)
POSTS_DIR = Path(WEBSITE_REPO_PATH) / "content" / "posts"


def slugify(text: str) -> str:
    """Convert text to URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')


def get_git_commits(repo_path: str, days: int = 7) -> list[dict]:
    """Get git commits from the last N days."""
    try:
        since_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

        # Get commit history
        result = subprocess.run(
            ['git', 'log', f'--since={since_date}', '--pretty=format:%H|%an|%ae|%ad|%s', '--date=iso'],
            cwd=repo_path,
            capture_output=True,
            text=True,
            check=True
        )

        commits = []
        for line in result.stdout.strip().split('\n'):
            if not line:
                continue
            parts = line.split('|')
            if len(parts) >= 5:
                commits.append({
                    'hash': parts[0],
                    'author': parts[1],
                    'email': parts[2],
                    'date': parts[3],
                    'message': parts[4]
                })

        return commits
    except subprocess.CalledProcessError as e:
        return []


def get_git_diff_stats(repo_path: str, days: int = 7) -> dict:
    """Get diff statistics for the last N days."""
    try:
        since_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

        result = subprocess.run(
            ['git', 'diff', '--shortstat', f'@{{\'@\'{since_date}\'}}..HEAD'],
            cwd=repo_path,
            capture_output=True,
            text=True
        )

        # Parse output like: "5 files changed, 120 insertions(+), 30 deletions(-)"
        stats = result.stdout.strip()
        return {'stats': stats}
    except subprocess.CalledProcessError:
        return {'stats': 'No changes'}


def get_changed_files(repo_path: str, days: int = 7) -> list[str]:
    """Get list of changed files in the last N days."""
    try:
        since_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

        result = subprocess.run(
            ['git', 'diff', '--name-only', f'@{{\'@\'{since_date}\'}}..HEAD'],
            cwd=repo_path,
            capture_output=True,
            text=True
        )

        files = [f for f in result.stdout.strip().split('\n') if f]
        return files
    except subprocess.CalledProcessError:
        return []


@app.list_tools()
async def list_tools() -> list[Tool]:
    """List available tools."""
    return [
        Tool(
            name="analyze_project_changes",
            description="Analyze git commits and changes from a project for the last N days",
            inputSchema={
                "type": "object",
                "properties": {
                    "project_path": {
                        "type": "string",
                        "description": "Path to the git repository to analyze"
                    },
                    "project_name": {
                        "type": "string",
                        "description": "Name of the project (e.g., 'SkillQuest', 'ZenFocus')"
                    },
                    "days": {
                        "type": "integer",
                        "description": "Number of days to look back (default: 7)",
                        "default": 7
                    }
                },
                "required": ["project_path", "project_name"]
            }
        ),
        Tool(
            name="generate_blog_post",
            description="Generate a blog post from project changes analysis. Returns the MDX content.",
            inputSchema={
                "type": "object",
                "properties": {
                    "project_name": {
                        "type": "string",
                        "description": "Name of the project"
                    },
                    "title": {
                        "type": "string",
                        "description": "Blog post title"
                    },
                    "summary": {
                        "type": "string",
                        "description": "Short summary of the post"
                    },
                    "content": {
                        "type": "string",
                        "description": "Main blog post content in Markdown format"
                    },
                    "tags": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "Tags for the post (e.g., ['feature', 'bugfix'])"
                    },
                    "author": {
                        "type": "string",
                        "description": "Author name (default: 'Hans')",
                        "default": "Hans"
                    }
                },
                "required": ["project_name", "title", "summary", "content", "tags"]
            }
        ),
        Tool(
            name="save_blog_post",
            description="Save a generated blog post to the website content directory",
            inputSchema={
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string",
                        "description": "Blog post title (used to generate filename)"
                    },
                    "mdx_content": {
                        "type": "string",
                        "description": "Complete MDX content including frontmatter"
                    }
                },
                "required": ["title", "mdx_content"]
            }
        ),
        Tool(
            name="list_blog_posts",
            description="List all existing blog posts in the website",
            inputSchema={
                "type": "object",
                "properties": {}
            }
        ),
    ]


@app.call_tool()
async def call_tool(name: str, arguments: dict) -> list[TextContent]:
    """Handle tool calls."""

    if name == "analyze_project_changes":
        project_path = arguments["project_path"]
        project_name = arguments["project_name"]
        days = arguments.get("days", 7)

        if not os.path.exists(project_path):
            return [TextContent(
                type="text",
                text=f"Error: Project path does not exist: {project_path}"
            )]

        # Get git data
        commits = get_git_commits(project_path, days)
        diff_stats = get_git_diff_stats(project_path, days)
        changed_files = get_changed_files(project_path, days)

        analysis = {
            "project_name": project_name,
            "analysis_period_days": days,
            "total_commits": len(commits),
            "commits": commits,
            "diff_stats": diff_stats,
            "changed_files": changed_files,
            "file_count": len(changed_files)
        }

        return [TextContent(
            type="text",
            text=json.dumps(analysis, indent=2)
        )]

    elif name == "generate_blog_post":
        project_name = arguments["project_name"]
        title = arguments["title"]
        summary = arguments["summary"]
        content = arguments["content"]
        tags = arguments["tags"]
        author = arguments.get("author", "Hans")

        # Get current date
        date = datetime.now().strftime("%Y-%m-%d")

        # Generate MDX with frontmatter
        mdx_content = f"""---
title: "{title}"
date: "{date}"
project: "{project_name}"
tags: {json.dumps(tags)}
summary: "{summary}"
author: "{author}"
published: true
---

{content}
"""

        return [TextContent(
            type="text",
            text=mdx_content
        )]

    elif name == "save_blog_post":
        title = arguments["title"]
        mdx_content = arguments["mdx_content"]

        # Create slug from title
        slug = slugify(title)

        # Ensure posts directory exists
        POSTS_DIR.mkdir(parents=True, exist_ok=True)

        # Save file
        file_path = POSTS_DIR / f"{slug}.mdx"
        file_path.write_text(mdx_content, encoding='utf-8')

        return [TextContent(
            type="text",
            text=f"Blog post saved successfully to: {file_path}"
        )]

    elif name == "list_blog_posts":
        if not POSTS_DIR.exists():
            return [TextContent(
                type="text",
                text="No blog posts directory found."
            )]

        posts = []
        for file_path in POSTS_DIR.glob("*.mdx"):
            posts.append({
                "filename": file_path.name,
                "slug": file_path.stem,
                "path": str(file_path)
            })

        return [TextContent(
            type="text",
            text=json.dumps({"posts": posts, "count": len(posts)}, indent=2)
        )]

    else:
        return [TextContent(
            type="text",
            text=f"Unknown tool: {name}"
        )]


async def main():
    """Run the MCP server."""
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await app.run(
            read_stream,
            write_stream,
            app.create_initialization_options()
        )


if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
