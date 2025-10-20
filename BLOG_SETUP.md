# Blog Systeem Setup - Snel Start Guide

## ✅ Wat is al gedaan?

Het complete blog systeem is geïnstalleerd en geconfigureerd:

1. ✅ Website blog infrastructuur
2. ✅ MDX support voor blog posts
3. ✅ MCP server voor automatische blog generatie
4. ✅ Slash command `/write-blog-post`
5. ✅ 2 voorbeeld blog posts

## 🚀 Laatste Setup Stap

**BELANGRIJK:** Herstart Claude Desktop om de MCP server te activeren!

1. Sluit Claude Desktop volledig af
2. Open Claude Desktop opnieuw
3. De `zenith-blog` MCP server is nu actief

## ✨ Testen

### 1. Test de Website

De development server draait al op: **http://localhost:3008/blog**

Open je browser en ga naar:
- `http://localhost:3008/blog` - Blog overzicht
- `http://localhost:3008/blog/welcome-to-zenith-blog` - Voorbeeld post
- `http://localhost:3008/blog/skillquest-week-1-initial-setup` - Voorbeeld post met code

### 2. Test de Slash Command (na Claude Desktop restart)

In een project (bijv. SkillQuest):

```
/write-blog-post
```

Claude zal dan:
1. Git history analyseren
2. Blog post genereren
3. Preview tonen
4. Opslaan na bevestiging

## 📁 Project Structuur

```
Zenith-Reborn-Website/
├── app/
│   ├── blog/
│   │   ├── page.tsx              # Blog overzicht
│   │   └── [slug]/page.tsx       # Individuele posts
│   └── api/
│       └── blog/route.ts         # API voor blog data
├── components/
│   └── blog/
│       ├── BlogCard.tsx          # Post card component
│       ├── BlogFilter.tsx        # Filter/search component
│       └── MDXComponents.tsx     # MDX styling
├── content/
│   └── posts/                    # ⭐ HIER KOMEN BLOG POSTS
│       ├── welcome-to-zenith-blog.mdx
│       └── skillquest-week-1-initial-setup.mdx
├── lib/
│   └── blog.ts                   # Blog utility functies
├── mcp-servers/
│   └── zenith-blog/
│       ├── server.py             # MCP server
│       └── requirements.txt
├── .claude/
│   └── commands/
│       └── write-blog-post.md    # Slash command
└── BLOG_WORKFLOW.md              # Complete documentatie
```

## 🎯 Volgende Stappen

### Voor dit project (Zenith-Reborn-Website):

✅ Alles is klaar! De blog is live op `http://localhost:3008/blog`

### Voor andere projecten (SkillQuest, ZenFocus, etc.):

1. **Kopieer slash command:**
```bash
# In je andere project (bijv. SkillQuest)
mkdir -p .claude/commands
cp ../Zenith-Reborn-Website/.claude/commands/write-blog-post.md .claude/commands/
```

2. **Gebruik het:**
```
/write-blog-post
```

## 📝 Nieuwe Blog Post Maken

### Optie 1: Automatisch (aanbevolen)

In een project directory:
```
/write-blog-post
```

### Optie 2: Handmatig

Maak een nieuw `.mdx` bestand in `content/posts/`:

```mdx
---
title: "Je Titel Hier"
date: "2025-10-20"
project: "SkillQuest"
tags: ["feature", "ui"]
summary: "Korte samenvatting"
author: "Hans"
published: true
---

# Je Content Hier

Met markdown formatting...
```

## 🎨 Project Kleuren

De blog gebruikt automatisch kleuren per project:

- **SkillQuest**: Blauw
- **ZenFocus**: Paars
- **Zenith Reborn**: Amber/Goud

Voeg nieuwe projecten toe in:
- [components/blog/BlogCard.tsx](components/blog/BlogCard.tsx)
- [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx)

## 🐛 Troubleshooting

### MCP Server werkt niet

1. Check of Python dependencies zijn geïnstalleerd:
```bash
cd mcp-servers/zenith-blog
pip install -r requirements.txt
```

2. Herstart Claude Desktop

3. Check logs in Claude Desktop: Help > Show Logs

### Blog posts verschijnen niet

1. Check of bestand in `content/posts/` staat
2. Check of `published: true` in frontmatter
3. Restart dev server: `npm run dev`
4. Check browser console voor errors

### Development server issues

```bash
# Stop server
# Ctrl+C of kill de process

# Clear cache
rm -rf .next

# Restart
npm run dev
```

## 📚 Meer Info

- **Complete workflow**: Zie [BLOG_WORKFLOW.md](BLOG_WORKFLOW.md)
- **MCP Server details**: Zie [mcp-servers/zenith-blog/README.md](mcp-servers/zenith-blog/README.md)
- **Voorbeeld posts**: Zie `content/posts/`

## 🎉 Je bent klaar!

Het blog systeem is volledig operationeel. Begin met het schrijven van je eerste wekelijkse update!

**Tip:** Test eerst handmatig een post maken voordat je de automatische generatie gebruikt, zodat je begrijpt hoe alles werkt.

Happy blogging! 🚀
