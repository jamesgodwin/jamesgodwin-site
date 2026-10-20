# Session Log — 2026-10-15-001

## Summary

James asked how the site could stand out in an agent-mediated web and why it no longer feels like him. The site repo, its git history (terminal commits `2681032`, `5133ee8`), the LinkedIn article schedule, the growth signal baseline and the saved essay and post archive in Source were reviewed. Finding: the design is not generic, the circle encounter is distinctive; the gap is that James's writing (eighteen long-form essays, about a hundred saved posts) is only on LinkedIn, which is login-walled to search engines and AI assistants. The August 2026 corpus review's strongest-converting voice, bridging operational systems with embodied state, is absent from the site.

James accepted the direction: the site becomes the canonical home of the essays with LinkedIn as the announcement; the site migrates to Astro; essays are backfilled in full and posts selectively; a first-person letter to agents, a living `/now`, an opening question, and later a read-only capability layer with the terminal returned as its human face. No chatbot.

## Files Touched

- `DOCS/decisions/2026-10-15-essays-canonical-home-and-astro-migration.md` (new, Accepted)
- `DOCS/specs/essays-home-and-agent-readiness.md` (new; seven slices with acceptance, importer design, publishing workflow)
- `DOCS/BACKLOG.md` (seven Backlog items added ahead of the visitor exercise)
- `DOCS/next-day.md` (rewritten for the new focus; visitor exercise kept as a parallel thread)
- `DOCS/PROJECT.md` (pointer under Stack noting the accepted direction supersedes the rebuild non-goal)
- `DOCS/logs/2026-10-15-001-essays-home-and-agent-readiness-plan.md` (this log)

## Verification

Planning only; no code changed, no build or tests run. Source archive shape verified by reading two files (`ARTICLE-2026-10-12-01`, `LI-00108`): `ArticleID`/`PostID`, `## Status` with live URL, `## Title`, `## Image Hook`, `## Image Prompt`, body section. Eighteen ARTICLE files counted on 2026-10-15, sixteen published. Routes taken from `src/siteMetadata.js`.

## Decisions

- Recorded in the ADR. Publishing order is site first, LinkedIn announcement same day, optional Pulse republish a week or more later with an "originally published" line.
- Backfill: all essays; posts via a curated allowlist, not the full feed. Slice 3 now records the three-pass method (evidence ranking from the analytics export, five-question rubric, James's allowlist pass), the cluster-to-essay step and ninety-day pruning.
- No Source vault edits from this repository; the announcement-post format is a one-line addition to the Source article runbook for James to make.

## Follow-ups

- James: hosting decision before slice 6; whether the practice day count is public; seed the notes allowlist after the first import; add Search Console when the first essay is live.
- Run the eight-person visitor exercise on the live site before or alongside slice 1.
- Companion specs with the same pattern: `ai_ching_web/PLAN/specs/ai-agent-readiness.md`, `tapscribe-launch/DOCS/specs/agent-readiness-and-coaching-traction.md`.
