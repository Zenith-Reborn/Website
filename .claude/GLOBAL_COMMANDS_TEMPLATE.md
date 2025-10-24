# Global Commands Template

**Copy this section to your project's CLAUDE.md file to make Claude aware of global commands.**

---

## Available Global Commands

The following global commands are available from `~/.claude/commands/`:

- **`/blog-post`** - Generate blog posts from any project
  - Works from: SkillQuest, ZenFocus, Zenith Reborn, or any project
  - Analyzes git history and creates MDX blog posts
  - Includes security scanning, git safety checks, and auto cover images
  - Hybrid approach: tries MCP tools first, falls back to direct git commands
  - Dual storage: saves locally in source project + Zenith website
  - **This is the PREFERRED method for all blog post generation**

**IMPORTANT:** Always check for global commands before creating project-specific alternatives. Global commands are more comprehensive and maintained centrally.

---

## How to Use This Template

### For New Projects:

1. Copy the entire "Available Global Commands" section above
2. Paste it into your project's `CLAUDE.md` file (create if it doesn't exist)
3. Place it near the top, after "Project Overview" but before project-specific sections

### Example CLAUDE.md Structure:

```markdown
# CLAUDE.md

## Project Overview
[Your project description]

## Available Global Commands
[Paste the section from above]

## Development Commands
[Your project-specific commands]

## [Rest of your project documentation]
```

### Benefits:

- ✅ Claude will always know about global commands in this project
- ✅ Prevents duplicate/redundant project-specific commands
- ✅ Ensures consistent workflow across all your projects
- ✅ Global commands are loaded into Claude's system prompt automatically

### Maintenance:

- When you add new global commands to `~/.claude/commands/`, update this template
- Copy the updated template to all your projects' CLAUDE.md files
- Keep global commands list synchronized across projects

---

## Quick Copy-Paste Version

**Minimal version for quick integration:**

```markdown
## Available Global Commands

Global commands from `~/.claude/commands/`:

- `/blog-post` - Generate blog posts from any project (git analysis → MDX)

Always check for global commands before creating project-specific alternatives.
```
