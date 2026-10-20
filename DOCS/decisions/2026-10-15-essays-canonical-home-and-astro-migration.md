# Essays live on jamesgodwin.me; LinkedIn announces; the site moves to Astro

Status: Accepted by James on 2026-10-15 in conversation. Implementation is authorised as local work; deployment, LinkedIn profile edits and publication of any individual essay remain separate explicit actions.

## Context

James's recognisable voice exists in roughly eighteen long-form Tuesday essays and about a hundred saved LinkedIn posts in `Source/Runbooks/LinkedIn Posts/Output/Posts/`, plus a 293-post export corpus. None of that writing is on jamesgodwin.me. Public LinkedIn content may be discoverable off-platform; the reason to bring writing home is archive ownership, stable URLs and reader experience. The site therefore reads as pages about James rather than James, and the site's SEO and AI-citation surface is nearly empty despite a year of weekly writing.

The site is Create React App with a post-build prerender script. James maintains two Astro sites (`ai_ching_web`, `tapscribe-launch`) and the content-collection pattern for essays, Markdown twins and `llms.txt` already exists in both. The September alignment plan explicitly excluded a rebuild; that exclusion was scoped to that pass and is superseded here.

## Decision

1. jamesgodwin.me is the canonical home of James's essays. Each new essay is published on the site first. The same-day LinkedIn post is a standalone announcement (150–250 words of the essay's strongest scene, ending with the discovery question, link in the body). The Pulse republish, if used, follows at least a week later with an "originally published at" line and link.
2. The site migrates from Create React App to Astro with content collections, preserving every existing URL, the circle encounter, the terminal-inspired visual language, the theme and `breathe` commands, prices and contact paths.
3. Backfill verified published essays, preserving the original wording. Unpublished files remain drafts pending explicit publication approval.
4. Amendment accepted by James on 2026-10-20: move hosting from Netlify to Cloudflare and preserve the existing PostHog project, pageviews, events, exception capture and logs through the migration. Validate delivery on preview and production.
5. Park terminal restoration, agent tools/MCP, opening question and Notes. Other agent-readiness additions and new guided audio are outside this focused release. Preserve the existing site interaction and `/now`; deferred proposals need explicit resumption. See the [historical proposal](../archive/2026-10-20-agent-readiness-proposals.md).
6. Further sequencing amendment accepted by James on 2026-10-20: after local Astro migration and design-system consolidation, explore two homepage concepts before Essays. Bring work, writing and practice together while retaining the typography and circles. The [exploration brief](../specs/homepage-visual-exploration.md) defines this local concept phase; no replacement layout or implementation has been accepted.

## Consequences

- `DOCS/PROJECT.md` stack and the "not a rebuild" non-goal are superseded by `DOCS/specs/essays-home-and-agent-readiness.md`.
- The Source LinkedIn runbooks keep owning drafting, queue and publication state; the site repo owns the published copy and its metadata. The announcement-post format needs one line added to the Source article runbook when James next edits it; this repo does not edit Source.
- Search Console must be connected on the day the first essay goes live.
- Short-term LinkedIn reach on announcement posts may be lower than native articles. That is accepted in exchange for owned, indexable, citable writing.
