# AGENTS.md

This is the root operating contract for AI agents working in this repository.

## Project

James Godwin's personal portfolio site is a Create React App site with a terminal-inspired interactive interface and route-backed content pages for work, writing, Taoist practice, apps, books, and contact.

Read `DOCS/PROJECT.md` for the full project brief, stack, constraints, and environment notes.

## Startup Read Order

Every session must start with this exact sequence:

1. Read `AGENTS.md`.
2. Read `DOCS/PROJECT.md`.
3. Read `DOCS/BACKLOG.md`.
4. Read `DOCS/next-day.md`.
5. Load only the files named under "Read These First" in `DOCS/next-day.md`.
6. Do not open any other project memory file until the user directs it.

## File Authority

| File / Folder | Authority |
|---|---|
| `AGENTS.md` | Root operating contract. The AI reads this first. |
| `CLAUDE.md` | Claude Code entry point. Points to `AGENTS.md`. |
| `DOCS/PROJECT.md` | Project identity: purpose, stack, constraints, non-goals. |
| `DOCS/BACKLOG.md` | Single source of truth for current work status. |
| `DOCS/next-day.md` | Short handoff for the next session. Overwritten each session. |
| `DOCS/logs/` | Dated session history. Append only. Never delete. |
| `DOCS/specs/` | Feature specs and implementation plans. Named by topic. |
| `DOCS/runbooks/` | Repeatable operational workflows. Named verb-noun. |
| `DOCS/decisions/` | Architectural and product decisions in ADR format. |
| `DOCS/archive/` | Inactive material. Not authoritative for current work. |

Do not duplicate active work state across multiple files. `DOCS/BACKLOG.md` owns status, `DOCS/next-day.md` owns the next handoff, and logs own history.

## Structure and Placement Rules

- Specs live in `DOCS/specs/` and are named by topic, for example `little-panda-series-page.md`.
- Runbooks live in `DOCS/runbooks/` and are named verb-noun, for example `deploy-site.md`.
- Decisions live in `DOCS/decisions/` using ADR format and `YYYY-MM-DD-short-title.md` filenames.
- Session logs live in `DOCS/logs/` using `YYYY-MM-DD-NNN-short-topic.md` filenames.
- `DOCS/next-day.md` is overwritten at the end of each meaningful session. Do not append to it.
- `DOCS/archive/` holds inactive material. Do not delete archived material.

## Backlog Rules

`DOCS/BACKLOG.md` uses four Kanban sections:

- `## Backlog`
- `## In Progress`
- `## Blocked`
- `## Done`

Each backlog item must be a single line. If an item needs detail, write a spec and link to it from the backlog item.

Within each section, order items top-down by priority. The top item is the next thing to work on.

When `## Done` exceeds 20 items, or at the end of a milestone, move Done items to `DOCS/archive/YYYY-MM-backlog.md` and clear the section.

## Context Loading Strategy

Follow this strict four-layer loading model to keep startup context lean as the project grows:

- Layer 1, load every session: `AGENTS.md`, `DOCS/PROJECT.md`.
- Layer 2, load every session: `DOCS/BACKLOG.md`, `DOCS/next-day.md`.
- Layer 3, load on demand only: `DOCS/specs/*`, `DOCS/runbooks/*`, `DOCS/decisions/*` only if named in `DOCS/next-day.md` under "Read These First" or explicitly requested by the user.
- Layer 4, never load on startup: `DOCS/logs/*`, `DOCS/archive/*`.

A project with many logs, specs, and decisions still starts every session by loading exactly four files.

If a file listed under "Read These First" no longer exists, note the missing reference in the session log, continue with the remaining files, and surface the gap to the user.

## Session Workflow - Start

1. Read `AGENTS.md`.
2. Read `DOCS/PROJECT.md`.
3. Read `DOCS/BACKLOG.md`.
4. Read `DOCS/next-day.md`.
5. Load only files named under "Read These First" in `DOCS/next-day.md`.
6. Do not open any other project memory file until the user directs it.

## Session Workflow - End

For meaningful sessions only:

- Update `DOCS/BACKLOG.md`.
- Create a dated log in `DOCS/logs/` using `YYYY-MM-DD-NNN-short-topic.md`.
- Overwrite `DOCS/next-day.md` with a fresh handoff.
- Record tests run, or note that no tests were added.

## What Counts as a Meaningful Session

A session is meaningful if any of these are true:

- A file was created or modified.
- A backlog item changed state.
- A decision was made or reversed.
- A blocker was identified or resolved.
- Any spec, runbook, or decision doc was written or updated.

Short exploratory or read-only sessions do not require a log entry.

## Log Format

Use this structure for session logs:

```markdown
# Session Log - YYYY-MM-DD-NNN

## Summary


## Files Touched


## Tests


## Decisions


## Follow-ups

```

## Development Commands

- `npm start` - Run development server on `localhost:3000`.
- `npm test` - Run the test runner in watch mode.
- `npm run build` - Build production output to `build/` and prerender route metadata.
- `npm run eject` - Eject from Create React App. This is irreversible and requires explicit approval.

## Architecture Overview

This is a personal portfolio site built as a terminal-style interactive React application. The core concept is a command-line interface where users type commands to explore different sections of the site. The app also renders route-backed page views for the same command outputs.

### Key Architectural Components

**Terminal Interface System**: `src/App.js` implements the command parser. Commands are defined in `allCommands` and handled in `executeCommand()`.

**Command Output System**: Each command corresponds to a JavaScript module in `src/outputs/` that exports HTML content as strings. These modules are rendered with `dangerouslySetInnerHTML`, so keep content trusted and avoid injecting user-generated HTML.

**Route Metadata System**: `src/siteMetadata.js` owns per-route titles, descriptions, images, and paths. `scripts/prerender-route-metadata.js` writes static metadata pages after `react-scripts build`.

**Theme System**: Themes are defined in `src/themes.js` with CSS variable based light/dark schemes and image-based themes that include mobile variants and transition animations.

**Voice Recognition**: The Web Speech API supports voice commands and natural language parsing to extract valid commands from speech input.

**Background Transitions**: Theme switching uses fade transitions when moving between image-based themes.

## File Structure Patterns

- `src/outputs/[command].js` - HTML string content for terminal/page commands.
- `src/components/` - React components such as `Breathe`.
- `public/` - Public image assets, book covers, app icons, redirect rules, and sitemap.
- `public/images/` - Theme backgrounds and UI icons with dark mode variants.
- `src/NewSite.css` - Current site styling.
- CSS uses custom properties for theme-based styling.

## Command System

Commands are processed through:

1. Input validation against `allCommands`.
2. Autocomplete suggestions based on input prefix.
3. Command execution with output rendering.
4. Command history navigation with up/down arrows.

Special commands:

- `breathe` - Launches the meditation component overlay.
- `return` - Easter egg command.
- Theme names such as `default`, `dark`, `stillness`, `mountains`, `essence`, `tao`, `zen`, `snow`, and `void` switch themes directly.
- `unlearn` - Easter egg with special icon.

When adding a new page-backed command, update:

- `src/App.js` imports, `allCommands`, `commandRouteMap`, `pageHeadingLabels`, navigation where relevant, and `executeCommand()`.
- `src/outputs/[command].js`.
- `src/siteMetadata.js`.
- `public/_redirects`.
- `public/sitemap.xml`.
- `src/outputs/help.js` if the command should be discoverable.

## Content Integration

- ConvertKit integration for email capture uses `data-uid="0da6b662ba"`.
- Google Analytics tracking uses `G-0TCHNH6DEP`.
- External links include portfolio projects such as AI Ching and GratefulFor.

## Styling Architecture

CSS uses a two-tier theming system:

1. CSS custom properties for light and dark modes.
2. Theme-specific background images with opacity transitions.
3. Responsive design with mobile-specific background images.

The site maintains a monospace terminal aesthetic with careful typography and spacing. Preserve that feel when adding pages or visual content.

## Operating Principles

- Git is the version history. Logs summarise intent and decisions, not diffs.
- Keep changes minimal and aligned with the existing command/page architecture.
- Do not create speculative docs.
- Do not let planning files go stale. Update or archive, never leave outdated content in active files.
- Update `AGENTS.md` itself if the project structure or operating model changes.
