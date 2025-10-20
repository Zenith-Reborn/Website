# Write Blog Post Command

Je taak is om automatisch een blog post te genereren voor de Zenith Reborn website gebaseerd op recente project wijzigingen.

## Stappen:

1. **Identificeer het project**
   - Vraag de gebruiker om bevestiging van de project naam als deze niet duidelijk is
   - Detecteer het project pad (huidige working directory als git repo)
   - Mogelijke projecten: "SkillQuest", "ZenFocus", "Zenith Reborn", etc.

2. **Analyseer git history**
   - Gebruik MCP tool `analyze_project_changes` met:
     - `project_path`: huidige directory of door gebruiker opgegeven pad
     - `project_name`: gedetecteerde/bevestigde project naam
     - `days`: 7 (of door gebruiker opgegeven periode)

3. **Genereer blog post content**
   - Analyseer de commit messages en gewijzigde bestanden
   - Identificeer:
     - Nieuwe features
     - Bug fixes
     - Performance verbeteringen
     - Refactoring
     - Documentation updates
   - Schrijf een engaging blog post in het Nederlands met:
     - Duidelijke titel (bijv. "SkillQuest Week X - [Hoofdthema]")
     - Korte samenvatting (1-2 zinnen)
     - Gestructureerde content met headers
     - Code snippets waar relevant (gebruik markdown code blocks)
     - Uitdagingen en oplossingen
     - Preview van volgende week

4. **Genereer tags**
   - Kies relevante tags zoals:
     - "feature" - nieuwe functionaliteit
     - "bugfix" - bug fixes
     - "performance" - performance verbeteringen
     - "refactoring" - code refactoring
     - "ui" - UI/UX wijzigingen
     - "database" - database changes
     - "testing" - tests
     - "documentation" - docs

5. **Creëer MDX content**
   - Gebruik MCP tool `generate_blog_post` met:
     - `project_name`: het project
     - `title`: gegenereerde titel
     - `summary`: samenvatting
     - `content`: volledige blog post in Markdown
     - `tags`: relevante tags
     - `author`: "Hans" (of door gebruiker opgegeven)

6. **Toon preview**
   - Laat de gegenereerde blog post zien aan de gebruiker
   - Vraag om feedback of aanpassingen

7. **Opslaan**
   - Als gebruiker akkoord is, gebruik MCP tool `save_blog_post`:
     - `title`: de titel
     - `mdx_content`: complete MDX content
   - Bevestig opslaan met het file pad

## Belangrijk:

- Schrijf altijd in het **Nederlands**
- Gebruik een **professionele maar toegankelijke** tone
- Focus op de **"why"** naast de "what"
- Voeg **concrete voorbeelden** toe waar mogelijk
- Houd posts **leesbaar** (niet te technisch tenzij nodig)
- Gebruik **kopjes en lijsten** voor structuur
- Voeg **code snippets** toe met syntax highlighting

## Voorbeeld workflow:

```
User: /write-blog-post

Claude: Ik zie dat je in de SkillQuest repository bent.
        Zal ik een blog post genereren voor SkillQuest gebaseerd op de laatste 7 dagen?

User: Ja

Claude: [Analyseert commits via MCP]
        [Genereert blog post]

        Hier is de gegenereerde blog post:

        ---
        Titel: "SkillQuest Week 42 - Focus Timer Improvements"

        [Preview van content]
        ---

        Ziet dit er goed uit? Wil je aanpassingen?

User: Kan je meer details toevoegen over de database optimalisatie?

Claude: [Past content aan]
        [Toont nieuwe versie]

        Is dit beter?

User: Perfect!

Claude: [Slaat op via MCP]
        Blog post succesvol opgeslagen!
        Je kunt hem bekijken op: http://localhost:3000/blog/skillquest-week-42-focus-timer-improvements
```

Begin met het identificeren van het project en het analyseren van de git history.
