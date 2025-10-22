# Zenith Blog MCP Server

MCP server voor het automatisch genereren van blog posts gebaseerd op git history en project updates.

## Installatie

1. Install dependencies:

```bash
cd mcp-servers/zenith-blog
pip install -r requirements.txt
```

2. Configure in `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "zenith-blog": {
      "command": "python",
      "args": [
        "-m",
        "C:/Users/Hans/StudioProjects/Zenith-Reborn-Website/mcp-servers/zenith-blog/server.py"
      ],
      "env": {
        "ZENITH_WEBSITE_PATH": "C:/Users/Hans/StudioProjects/Zenith-Reborn-Website"
      }
    }
  }
}
```

## Available Tools

### `analyze_project_changes`

Analyseert git commits en wijzigingen van een project voor de laatste N dagen.

**Parameters:**

- `project_path` (string, required): Path naar de git repository
- `project_name` (string, required): Naam van het project (bijv. "SkillQuest")
- `days` (integer, optional): Aantal dagen terug kijken (default: 7)

**Returns:** JSON object met commits, diff stats, en gewijzigde bestanden.

### `generate_blog_post`

Genereert een blog post in MDX formaat.

**Parameters:**

- `project_name` (string, required): Naam van het project
- `title` (string, required): Blog post titel
- `summary` (string, required): Korte samenvatting
- `content` (string, required): Markdown content
- `tags` (array, required): Tags voor de post
- `author` (string, optional): Auteur naam (default: "Hans")

**Returns:** Complete MDX content met frontmatter.

### `save_blog_post`

Slaat een gegenereerde blog post op in de website content directory.

**Parameters:**

- `title` (string, required): Blog post titel (voor filename)
- `mdx_content` (string, required): Complete MDX content

**Returns:** Bevestiging met file path.

### `list_blog_posts`

Lijst alle bestaande blog posts.

**Returns:** JSON array met alle blog post bestanden.

## Gebruik

Zie `/write-blog-post` slash command voor geautomatiseerd gebruik.
