# Prompt for Integrating Global Commands in Other Projects

Copy-paste this complete prompt into Claude Code when you open another project (e.g., SkillQuest, ZenFocus):

---

## 📋 COPY THIS PROMPT ⬇️

```
I need you to add global commands awareness to this project's CLAUDE.md file.

CONTEXT:
I have global commands in ~/.claude/commands/ (like /blog-post) that work across all my projects. Currently, this project's Claude Code instance isn't aware of these commands, which can lead to creating duplicate project-specific commands.

TASK:
Add the "Available Global Commands" section to this project's CLAUDE.md file so you're always aware of these global commands.

SOURCE:
The template is located at:
C:\Users\Hans\StudioProjects\Zenith-Reborn-Website\.claude\GLOBAL_COMMANDS_TEMPLATE.md

STEPS:
1. Read the template file from the path above
2. Check if CLAUDE.md exists in the current project
   - If not: Create a minimal CLAUDE.md with basic structure
3. Check if "Available Global Commands" section already exists
   - If yes: Ask me if I want to overwrite it
4. Insert the "Available Global Commands" section into CLAUDE.md
   - Preferred location: After "## Project Overview" section
   - Fallback: Near the top, after the main heading
5. Show me the changes you made
6. Commit with an appropriate message

EXPECTED RESULT:
CLAUDE.md should contain a section that lists:
- /blog-post command with description
- Note about checking global commands before creating project-specific ones

Let me know if you need any clarification before starting!
```

---

## 🎯 Alternative: Shorter Version

If you prefer a more concise prompt:

```
Add global commands awareness to this project:

1. Read: C:\Users\Hans\StudioProjects\Zenith-Reborn-Website\.claude\GLOBAL_COMMANDS_TEMPLATE.md
2. Add the "Available Global Commands" section to CLAUDE.md (create if missing)
3. Insert after "## Project Overview" or near the top
4. Show changes and commit

This ensures you know about /blog-post and other global commands.
```

---

## 🚀 Even Faster: Use the PowerShell Script

Instead of a prompt, you can just run the automated script:

```powershell
# From your other project directory (e.g., SkillQuest):
Copy-Item "C:\Users\Hans\StudioProjects\Zenith-Reborn-Website\.claude\add-global-commands-to-claude-md.ps1" .
.\add-global-commands-to-claude-md.ps1
```

Then tell Claude:
```
I just ran a script that updated CLAUDE.md. Please review the changes and commit them with an appropriate message.
```

---

## 📝 Notes

**Why this works:**
- Gives Claude clear context about the problem
- Provides exact file paths (no guessing)
- Lists concrete steps to follow
- Claude will read the template and apply it correctly

**What Claude will do:**
1. Read the template from Zenith-Reborn-Website
2. Detect if CLAUDE.md exists (create if not)
3. Add the global commands section
4. Commit the changes

**Estimated time:** 1-2 minutes per project

---

## ✅ Checklist

Use this when setting up multiple projects:

- [ ] SkillQuest - Paste prompt and run
- [ ] ZenFocus - Paste prompt and run
- [ ] [Other project] - Paste prompt and run
- [ ] Verify each CLAUDE.md has the section
- [ ] Push commits to GitHub

---

**Created:** 2025-10-24
**Source Project:** Zenith Reborn Website
**Template Location:** C:\Users\Hans\StudioProjects\Zenith-Reborn-Website\.claude\GLOBAL_COMMANDS_TEMPLATE.md
