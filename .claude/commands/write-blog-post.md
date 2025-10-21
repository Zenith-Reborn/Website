# Write Blog Post Command

Your task is to automatically generate a blog post for the Zenith Reborn website based on recent project changes.

## Steps:

1. **Identify the project**
   - Ask the user for confirmation of the project name if not clear
   - Detect the project path (current working directory as git repo)
   - Possible projects: "SkillQuest", "ZenFocus", "Zenith Reborn", etc.

2. **Analyze git history**
   - Use MCP tool `analyze_project_changes` with:
     - `project_path`: current directory or user-specified path
     - `project_name`: detected/confirmed project name
     - `days`: 7 (or user-specified period)

3. **Generate blog post content**
   - Analyze the commit messages and changed files
   - Identify:
     - New features
     - Bug fixes
     - Performance improvements
     - Refactoring
     - Documentation updates
   - Write an engaging blog post in English with:
     - Clear title (e.g., "SkillQuest Week X - [Main Theme]")
     - Brief summary (1-2 sentences)
     - Structured content with headers
     - Code snippets where relevant (use markdown code blocks)
     - Challenges and solutions
     - Preview of next week

4. **Generate tags**
   - Choose relevant tags such as:
     - "feature" - new functionality
     - "bugfix" - bug fixes
     - "performance" - performance improvements
     - "refactoring" - code refactoring
     - "ui" - UI/UX changes
     - "database" - database changes
     - "testing" - tests
     - "documentation" - docs

5. **Create MDX content**
   - Use MCP tool `generate_blog_post` with:
     - `project_name`: the project
     - `title`: generated title
     - `summary`: summary
     - `content`: full blog post in Markdown
     - `tags`: relevant tags
     - `author`: "Hans" (or user-specified)

6. **Show preview**
   - Show the generated blog post to the user
   - Ask for feedback or adjustments

7. **Save**
   - If user approves, use MCP tool `save_blog_post`:
     - `title`: the title
     - `mdx_content`: complete MDX content
   - Confirm saving with the file path

## Important:

- Always write in **English**
- Use a **professional yet accessible** tone
- Focus on the **"why"** alongside the "what"
- Add **concrete examples** where possible
- Keep posts **readable** (not too technical unless necessary)
- Use **headings and lists** for structure
- Add **code snippets** with syntax highlighting

## CRITICAL RULES - Content Accuracy:

**ONLY write about what was actually built/changed:**
- ❌ DO NOT add "What's Next?" or future features sections
- ❌ DO NOT suggest improvements that weren't implemented
- ❌ DO NOT add features to make the post "more complete"
- ❌ DO NOT speculate about future plans
- ✅ ONLY describe actual commits, changes, and implemented features
- ✅ Stick to factual information from git history
- ✅ If unsure about something, ask the user first

**Preview & Approval Required:**
- ALWAYS show the full blog post content to the user before saving
- WAIT for explicit approval ("yes", "perfect", "save it", etc.)
- If user requests changes, update and show again
- NEVER auto-save without user confirmation

## Example workflow:

```
User: /write-blog-post

Claude: I see you're in the SkillQuest repository.
        Should I generate a blog post for SkillQuest based on the last 7 days?

User: Yes

Claude: [Analyzes commits via MCP]
        [Generates blog post]

        Here's the generated blog post:

        ---
        Title: "SkillQuest Week 42 - Focus Timer Improvements"

        [Content preview]
        ---

        Does this look good? Would you like any changes?

User: Can you add more details about the database optimization?

Claude: [Adjusts content]
        [Shows new version]

        Is this better?

User: Perfect!

Claude: [Saves via MCP]
        Blog post successfully saved!
        You can view it at: http://localhost:3000/blog/skillquest-week-42-focus-timer-improvements
```

Start by identifying the project and analyzing the git history.
