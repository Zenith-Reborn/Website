# PowerShell script to add global commands section to any project's CLAUDE.md
# Usage: Run this script from any project directory

Write-Host "=== Global Commands Installer ===" -ForegroundColor Green
Write-Host ""

# Check if CLAUDE.md exists
if (-not (Test-Path "CLAUDE.md")) {
    Write-Host "No CLAUDE.md found in current directory." -ForegroundColor Yellow
    $createNew = Read-Host "Create new CLAUDE.md? (y/n)"
    if ($createNew -ne "y") {
        Write-Host "Aborted." -ForegroundColor Red
        exit 1
    }

    # Create minimal CLAUDE.md
    @"
# CLAUDE.md

## Project Overview

[Add your project description here]

"@ | Out-File -FilePath "CLAUDE.md" -Encoding UTF8
    Write-Host "✓ Created CLAUDE.md" -ForegroundColor Green
}

# Read existing content
$content = Get-Content "CLAUDE.md" -Raw

# Check if global commands section already exists
if ($content -match "## Available Global Commands") {
    Write-Host "⚠ Global commands section already exists in CLAUDE.md" -ForegroundColor Yellow
    $overwrite = Read-Host "Overwrite existing section? (y/n)"
    if ($overwrite -ne "y") {
        Write-Host "Aborted." -ForegroundColor Red
        exit 1
    }

    # Remove old section (everything between "## Available Global Commands" and next "##")
    $content = $content -replace '(?s)## Available Global Commands.*?(?=\n## |\z)', ''
}

# Define the global commands section to add
$globalCommandsSection = @"

## Available Global Commands

The following global commands are available from ``~/.claude/commands/``:

- **``/blog-post``** - Generate blog posts from any project
  - Works from: SkillQuest, ZenFocus, Zenith Reborn, or any project
  - Analyzes git history and creates MDX blog posts
  - Includes security scanning, git safety checks, and auto cover images
  - Hybrid approach: tries MCP tools first, falls back to direct git commands
  - Dual storage: saves locally in source project + Zenith website
  - **This is the PREFERRED method for all blog post generation**

**IMPORTANT:** Always check for global commands before creating project-specific alternatives. Global commands are more comprehensive and maintained centrally.

"@

# Find insertion point (after Project Overview, or at the beginning if not found)
if ($content -match "## Project Overview") {
    # Insert after Project Overview section
    $content = $content -replace '(## Project Overview.*?)(\n## )', "`$1$globalCommandsSection`$2"
} else {
    # No Project Overview section, add after the first heading
    $content = $content -replace '(# CLAUDE\.md.*?\n)', "`$1$globalCommandsSection`n"
}

# Write updated content
$content | Out-File -FilePath "CLAUDE.md" -Encoding UTF8 -NoNewline

Write-Host ""
Write-Host "✓ Global commands section added to CLAUDE.md" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Review the changes in CLAUDE.md"
Write-Host "2. Adjust the content if needed for your project"
Write-Host "3. Commit the changes to git"
Write-Host ""
Write-Host "Done!" -ForegroundColor Green
