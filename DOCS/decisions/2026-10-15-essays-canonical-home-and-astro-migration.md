# Essays live on jamesgodwin.me; LinkedIn announces; the site moves to Astro

Status: Accepted by James on 2026-10-15, with subsequent accepted design/hosting amendments on 20 October 2026. Astro/Case shelf and three selected essays are deployed on Cloudflare Pages; www is repaired and James reports deleting Netlify. The original context below is historical. LinkedIn profile changes, Source-cycle restart and publication of further essays remain separate.

## Context

James's recognisable voice exists in roughly eighteen long-form Tuesday essays and about a hundred saved LinkedIn posts in `Source/Runbooks/LinkedIn Posts/Output/Posts/`, plus a 293-post export corpus. None of that writing is on jamesgodwin.me. Public LinkedIn content may be discoverable off-platform; the reason to bring writing home is archive ownership, stable URLs and reader experience. The site therefore reads as pages about James rather than James, and the site's SEO and AI-citation surface is nearly empty despite a year of weekly writing.

The site is Create React App with a post-build prerender script. James maintains two Astro sites (`ai_ching_web`, `tapscribe-launch`) and the content-collection pattern for essays, Markdown twins and `llms.txt` already exists in both. The September alignment plan explicitly excluded a rebuild; that exclusion was scoped to that pass and is superseded here.

## Decision

1. jamesgodwin.me is the canonical home of James's essays. Each new essay is published on the site first. The same-day LinkedIn post is a standalone announcement (150–250 words of the essay's strongest scene, ending with the discovery question, link in the body). The Pulse republish, if used, follows at least a week later with an "originally published at" line and link.
2. The site migrates from Create React App to Astro with content collections, preserving every existing URL, the circle encounter, the terminal-inspired visual language, the theme and `breathe` commands, prices and contact paths.
3. Backfill verified published essays, preserving the original wording. Unpublished files remain drafts pending explicit publication approval.
4. Amendment accepted by James on 2026-10-20: move hosting from Netlify to Cloudflare and preserve the existing PostHog project, pageviews, events, exception capture and logs through the migration. Validate delivery on preview and production.
5. Park terminal restoration, agent tools/MCP, opening question and Notes. Other agent-readiness additions and new guided audio are outside this focused release. Preserve the existing site interaction and `/now`; deferred proposals need explicit resumption. See the [historical proposal](../archive/2026-10-20-agent-readiness-proposals.md).
6. Earlier sequencing amendment accepted by James on 2026-10-20: after local Astro migration and design-system consolidation, explore two homepage concepts before Essays. Bring work, writing and practice together while retaining the typography and circles. The [exploration brief](../specs/homepage-visual-exploration.md) defines this local concept phase; no replacement layout or implementation has been accepted.

7. Final design/hosting amendment accepted by James on 2026-10-20: the Case shelf replaces the circle/terminal UI, with four static stories and three approved essays. The image/SEO update is published; Cloudflare is the production/recovery host, www redirects at its edge and Netlify is owner-reported deleted. This supersedes the preservation/local-only restrictions in decisions 2 and 6, without authorising other essay or profile publication. [Current operating guide](../runbooks/deploy-cloudflare-pages.md).

## Consequences

- `DOCS/PROJECT.md` stack and the "not a rebuild" non-goal are superseded by `DOCS/specs/essays-home-and-agent-readiness.md`.
- The Source LinkedIn runbooks keep owning drafting, queue and publication state; the site repo owns the published copy and its metadata. The announcement-post format needs one line added to the Source article runbook when James next edits it; this repo does not edit Source.
- Search Console ownership, sitemap status and indexing remain to be checked after launch; the earlier same-day target is not evidence that this happened.
- Short-term LinkedIn reach on announcement posts may be lower than native articles. That is accepted in exchange for owned, indexable, citable writing.
