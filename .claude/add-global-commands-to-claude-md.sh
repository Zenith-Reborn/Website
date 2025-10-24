#!/bin/bash
# Script to add global commands section to any project's CLAUDE.md

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Global Commands Installer ===${NC}"
echo ""

# Check if CLAUDE.md exists
if [ ! -f "CLAUDE.md" ]; then
    echo -e "${YELLOW}No CLAUDE.md found in current directory.${NC}"
    read -p "Create new CLAUDE.md? (y/n): " create_new
    if [ "$create_new" != "y" ]; then
        echo -e "${RED}Aborted.${NC}"
        exit 1
    fi

    # Create minimal CLAUDE.md
    cat > CLAUDE.md << 'EOF'
# CLAUDE.md

## Project Overview

[Add your project description here]

EOF
    echo -e "${GREEN}✓ Created CLAUDE.md${NC}"
fi

# Check if global commands section already exists
if grep -q "## Available Global Commands" CLAUDE.md; then
    echo -e "${YELLOW}⚠ Global commands section already exists in CLAUDE.md${NC}"
    read -p "Overwrite existing section? (y/n): " overwrite
    if [ "$overwrite" != "y" ]; then
        echo -e "${RED}Aborted.${NC}"
        exit 1
    fi

    # Remove old section (everything between "## Available Global Commands" and next "##")
    sed -i '/## Available Global Commands/,/^## [^A]/{ /^## [^A]/!d; }' CLAUDE.md
fi

# Define the global commands section to add
GLOBAL_COMMANDS_SECTION='
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
'

# Find the insertion point (after Project Overview, or at the end if not found)
if grep -q "## Project Overview" CLAUDE.md; then
    # Insert after Project Overview section
    awk -v section="$GLOBAL_COMMANDS_SECTION" '
        /## Project Overview/ {
            print
            # Print lines until next section or end
            while (getline > 0) {
                if (/^## / && !/## Project Overview/) {
                    # Found next section, insert global commands before it
                    print section
                    print
                    break
                }
                print
            }
            next
        }
        {print}
    ' CLAUDE.md > CLAUDE.md.tmp && mv CLAUDE.md.tmp CLAUDE.md
else
    # No Project Overview section, add at the beginning after header
    awk -v section="$GLOBAL_COMMANDS_SECTION" '
        NR==1 {print; print section; next}
        {print}
    ' CLAUDE.md > CLAUDE.md.tmp && mv CLAUDE.md.tmp CLAUDE.md
fi

echo ""
echo -e "${GREEN}✓ Global commands section added to CLAUDE.md${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Review the changes in CLAUDE.md"
echo "2. Adjust the content if needed for your project"
echo "3. Commit the changes to git"
echo ""
echo -e "${GREEN}Done!${NC}"
