# Global Commands Integration Guide

This directory contains tools to help you integrate global Claude commands into your projects.

## 📋 What's Included

1. **`GLOBAL_COMMANDS_TEMPLATE.md`** - Copy-paste template for manual integration
2. **`add-global-commands-to-claude-md.sh`** - Bash script for automatic installation
3. **`add-global-commands-to-claude-md.ps1`** - PowerShell script for Windows automatic installation

## 🎯 Purpose

These tools ensure Claude Code is **always aware** of your global commands (from `~/.claude/commands/`) when working in any project. This prevents:

- ❌ Creating duplicate project-specific commands
- ❌ Forgetting about existing global commands
- ❌ Inconsistent workflows across projects

## 🚀 Quick Start

### Option 1: Manual Copy-Paste (Simplest)

1. Open `GLOBAL_COMMANDS_TEMPLATE.md`
2. Copy the "Available Global Commands" section
3. Paste it into your project's `CLAUDE.md` (after "Project Overview")
4. Commit to git

### Option 2: Automatic Installation (Bash)

**From any project directory:**

```bash
# Copy the script to your project
cp /path/to/Zenith-Reborn-Website/.claude/add-global-commands-to-claude-md.sh .

# Make it executable
chmod +x add-global-commands-to-claude-md.sh

# Run it
./add-global-commands-to-claude-md.sh
```

### Option 3: Automatic Installation (PowerShell - Windows)

**From any project directory:**

```powershell
# Copy the script to your project
Copy-Item "C:\Users\Hans\StudioProjects\Zenith-Reborn-Website\.claude\add-global-commands-to-claude-md.ps1" .

# Run it
.\add-global-commands-to-claude-md.ps1
```

## 📦 What Gets Added

The script adds this section to your `CLAUDE.md`:

```markdown
## Available Global Commands

The following global commands are available from `~/.claude/commands/`:

- **`/blog-post`** - Generate blog posts from any project
  - Works from: SkillQuest, ZenFocus, Zenith Reborn, or any project
  - Analyzes git history and creates MDX blog posts
  - Includes security scanning, git safety checks, and auto cover images
  - Hybrid approach: tries MCP tools first, falls back to direct git commands
  - Dual storage: saves locally in source project + Zenith website
  - **This is the PREFERRED method for all blog post generation**

**IMPORTANT:** Always check for global commands before creating project-specific alternatives.
```

## 🔄 Updating Existing Projects

### If CLAUDE.md Doesn't Exist:

The scripts will offer to create one for you.

### If CLAUDE.md Already Exists:

- **Without global commands section:** Section is added automatically
- **With global commands section:** Script asks if you want to overwrite

## 🎨 Customization

After running the script, you can:

1. Adjust the command descriptions for your project context
2. Add project-specific notes about command usage
3. Remove commands that aren't relevant to this project

## 📊 Projects to Update

**Run this in each of your projects:**

- [ ] SkillQuest
- [ ] ZenFocus
- [ ] [Add other projects here]

## 🔧 Maintenance

**When you add new global commands:**

1. Update `GLOBAL_COMMANDS_TEMPLATE.md` in this directory
2. Update all scripts (`.sh` and `.ps1`)
3. Re-run scripts in all projects (or manually update CLAUDE.md files)

## 🤔 Why This Matters

**Before (Claude doesn't know about global commands):**

```
User: Write a blog post about recent changes
Claude: I'll create a new /write-blog-post command for this project...
```

**After (Claude knows about global commands):**

```
User: Write a blog post about recent changes
Claude: I'll use the global /blog-post command which includes:
- Security scanning
- Git safety checks
- Auto cover images
- Dual storage
[Uses existing, better-maintained global command]
```

## 📞 Questions?

- Check `GLOBAL_COMMANDS_TEMPLATE.md` for examples
- Review the scripts for customization options
- See Zenith Reborn's `CLAUDE.md` for a working example

---

**Last Updated:** 2025-10-24
**Maintained by:** Hans
**Project:** Zenith Reborn
