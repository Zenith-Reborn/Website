# Zenith Blog Workflow

Complete guide voor het gebruik van het Zenith Blog systeem.

## Overzicht

Dit blog systeem bestaat uit drie componenten:

1. **Website Blog** - Next.js website met MDX blog posts
2. **MCP Server** - Backend voor blog post generatie
3. **Slash Command** - `/write-blog-post` voor eenvoudige blog creatie

## Setup

### 1. Website Setup (Already Done)

De website is al geconfigureerd met:

- MDX support voor blog posts
- Blog overzichtspagina op `/blog`
- Individuele post pagina's op `/blog/[slug]`
- Filtering op project en tags
- Zoekfunctionaliteit

### 2. MCP Server Setup

#### Installeer Dependencies

```bash
cd mcp-servers/zenith-blog
pip install -r requirements.txt
```

#### Configureer MCP Server

Voeg toe aan `C:\Users\Hans\AppData\Roaming\Claude\claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "zenith-blog": {
      "command": "python",
      "args": [
        "C:/Users/Hans/StudioProjects/Zenith-Reborn-Website/mcp-servers/zenith-blog/server.py"
      ],
      "env": {
        "ZENITH_WEBSITE_PATH": "C:/Users/Hans/StudioProjects/Zenith-Reborn-Website"
      }
    }
  }
}
```

**Belangrijk:** Herstart Claude Desktop na het toevoegen van de MCP server.

### 3. Slash Command Setup voor Andere Projecten

Om `/write-blog-post` te gebruiken in andere projecten (zoals SkillQuest):

1. Kopieer `.claude/commands/write-blog-post.md` naar het andere project:

```bash
# In SkillQuest project
mkdir -p .claude/commands
cp ../Zenith-Reborn-Website/.claude/commands/write-blog-post.md .claude/commands/
```

2. Dat is het! Je kunt nu `/write-blog-post` gebruiken in dat project.

## Gebruik

### Automatisch Blog Post Genereren

1. Open je project (bijv. SkillQuest) in Claude Code
2. Type: `/write-blog-post`
3. Claude zal:
   - Git history analyseren (laatste 7 dagen)
   - Automatisch een blog post genereren
   - Preview tonen
   - Vragen om bevestiging
   - Opslaan naar de website

### Handmatig Blog Post Maken

Als je handmatig een post wilt maken:

1. Maak een nieuw `.mdx` bestand in `content/posts/`:

```bash
# Example: content/posts/mijn-nieuwe-post.mdx
```

2. Voeg frontmatter en content toe:

```mdx
---
title: "Mijn Blog Post Titel"
date: "2025-10-20"
project: "SkillQuest"
tags: ["feature", "ui"]
summary: "Korte samenvatting van de post"
author: "Hans"
published: true
---

# Heading 1

Content hier...

## Heading 2

Meer content...

### Code Example

\`\`\`kotlin
fun example() {
println("Hello World")
}
\`\`\`
```

3. De post verschijnt automatisch op de website

## Blog Post Structuur

### Frontmatter (Verplicht)

```yaml
---
title: string # "SkillQuest Week 42 - Feature X"
date: string # "2025-10-20" (YYYY-MM-DD)
project: string # "SkillQuest" | "ZenFocus" | "Zenith Reborn"
tags: array # ["feature", "bugfix", "performance"]
summary: string # Korte samenvatting (voor overzichtspagina)
author: string # "Hans" (optioneel)
coverImage: string # "/blog/images/post.png" (optioneel)
published: boolean # true/false
---
```

### Content Structuur (Aanbevolen)

```markdown
# Hoofdtitel

Introductie paragraaf...

## Wat is er gebeurd?

- Feature 1
- Feature 2
- Bug fix X

## Technische Details

### Implementatie

Code snippets en uitleg...

### Uitdagingen

Welke problemen kwamen je tegen?

## Volgende Stappen

Wat staat er op de planning?

---

**Auteur Naam**
_Rol_
```

## Markdown Features

### Code Blocks met Syntax Highlighting

\`\`\`kotlin
data class User(
val name: String,
val age: Int
)
\`\`\`

### Inline Code

Gebruik `backticks` voor inline code.

### Lijsten

**Unordered:**

- Item 1
- Item 2
  - Subitem

**Ordered:**

1. Eerste
2. Tweede
3. Derde

### Links

[Link text](https://example.com)

### Afbeeldingen

```markdown
![Alt text](/path/to/image.png)
```

### Blockquotes

> Dit is een quote

### Tabellen

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |

## Project-Specifieke Kleuren

Het blog systeem gebruikt automatisch project kleuren:

- **SkillQuest**: Blauw
- **ZenFocus**: Paars
- **Zenith Reborn**: Amber/Goud

## Tips voor Goede Blog Posts

1. **Begin met waarom**: Leg uit waarom iets belangrijk is
2. **Gebruik concrete voorbeelden**: Show, don't tell
3. **Voeg screenshots toe**: Visuele elementen maken posts leuker
4. **Code snippets**: Laat code zien waar relevant
5. **Structuur**: Gebruik headers voor goede leesbaarheid
6. **Uitdagingen delen**: Mensen leren van problemen én oplossingen
7. **Vooruitkijken**: Wat komt er volgende week?

## Veelvoorkomende Tags

- `feature` - Nieuwe functionaliteit
- `bugfix` - Bug fixes
- `performance` - Performance verbeteringen
- `ui` - UI/UX wijzigingen
- `refactoring` - Code refactoring
- `database` - Database changes
- `testing` - Tests
- `documentation` - Documentatie
- `architecture` - Architecture beslissingen
- `release` - Release announcements

## Deployment

### Lokaal Testen

```bash
npm run dev
```

Bezoek `http://localhost:3000/blog`

### Production Deployment

Het blog wordt automatisch gedeployed naar Vercel wanneer je pusht naar GitHub:

```bash
git add .
git commit -m "Add new blog post: [titel]"
git push origin main
```

Vercel detecteert automatisch de push en deployed de website.

## Troubleshooting

### MCP Server werkt niet

1. Check of Python correct is geïnstalleerd:

```bash
python --version
```

2. Check of dependencies zijn geïnstalleerd:

```bash
pip list | grep mcp
```

3. Herstart Claude Desktop

4. Check logs in Claude Desktop (Help > Show Logs)

### Blog post verschijnt niet

1. Check of `published: true` in frontmatter staat
2. Check of bestand in `content/posts/` staat
3. Check of bestand eindigt op `.mdx`
4. Restart development server
5. Check browser console voor errors

### Styling ziet er verkeerd uit

1. Check of alle MDX dependencies geïnstalleerd zijn
2. Rebuild de app: `npm run build`
3. Clear `.next` cache: `rm -rf .next`

### Syntax highlighting werkt niet

1. Check of `rehype-highlight` is geïnstalleerd
2. Check of je de juiste taal specificeert in code blocks
3. Check of CSS is geïmporteerd in blog post page

## Support

Voor vragen of problemen:

1. Check deze documentatie
2. Check de voorbeeld blog posts in `content/posts/`
3. Check MCP server logs
4. Open een issue in het project

## Voorbeelden

Zie de voorbeeld posts in `content/posts/`:

- `welcome-to-zenith-blog.mdx` - Intro post
- `skillquest-week-1-initial-setup.mdx` - Feature post met code

## Volgende Stappen

1. Setup MCP server (zie boven)
2. Test `/write-blog-post` command in een project
3. Schrijf je eerste wekelijkse update!
4. Deel met de community

Happy blogging! 🚀
