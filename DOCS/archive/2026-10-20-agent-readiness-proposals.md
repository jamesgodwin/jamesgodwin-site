# Deferred proposals: agent readiness, notes and practice additions

Parked by James on 20 October 2026. Historical proposal only, not active scope or implementation authority. Terminal restoration, agent tools, opening question and Notes require explicit resumption. The letter to agents, expanded `/now`, Markdown twins, `llms-full.txt`, crawler-specific work and guided audio are also outside the focused migration. Existing `/now` and `breathe` remain preserved. Earlier dates and corpus counts below are historical.

Active plan: [Astro, Cloudflare and Essays](../specs/essays-home-and-agent-readiness.md).

# Essays home, Astro migration and agent readiness

Date: 2026-10-15
Status: Planned. Accepted direction: `DOCS/decisions/2026-10-15-essays-canonical-home-and-astro-migration.md`. Written so another AI code editor can implement it slice by slice. Local implementation is authorised; deployment, Search Console, LinkedIn edits and publication of individual essays are separate explicit actions.
Related: `DOCS/specs/linkedin-site-alignment.md` (current page hierarchy, keep), `DOCS/specs/interactive-terminal-homepage.md` (original terminal concept), `Source/Business/Growth Strategy/Agent-Ready Web Personal Exploration.md` (the thesis this site should demonstrate), `/Users/nitro/code/ai_ching_web/PLAN/specs/ai-agent-readiness.md` and `/Users/nitro/code/tapscribe-launch/DOCS/specs/agent-readiness-and-coaching-traction.md` (same pattern, reuse shapes not code)

## 20 October handoff amendment — overrides earlier dates/source assumptions

James will finish the Astro website and Essays publishing path before resuming article writing in Source. The 26/27 October target and the proposed new six-week article cycle are suspended; no deadline is implied by the older dates below. Source remains the authoring workspace, not a replacement website CMS. The existing implementation slices remain the scope authority; this amendment adds no feature scope.

- Source root: `/Users/nitro/Library/CloudStorage/Dropbox/Source/`. Read `WRITING_STYLE.md` for James’s spoken-first authoring method. Article bodies live in `Runbooks/LinkedIn Posts/Output/Posts/*ARTICLE*.md`, excluding announcement files. Read current Status and `Runbooks/LinkedIn Posts/Log.md` instead of assuming the old count or that a scheduled date means published. Keep unpublished files as drafts until James explicitly approves publication.
- Preserve James’s wording, opinions, cadence, uncertainty and actual experience. Import essay bodies without turning them into new AI-written essays. Image hooks, prompts, editorial notes, private project material and internal source metadata must not become public article text.
- Website-first full essays; a short LinkedIn announcement links home after publication. Native Pulse republication is optional, not a second weekly obligation. Source owns queue and confirmed publication state; site owns published rendering/canonical URL. Return the exact live essay URL to Source when publication is actually confirmed; no task-to-task messaging is implied.
- Source’s current pause and eventual restart rules: `Business/Growth Strategy/LinkedIn Article Cycle/Programme.md`. On James’s return, choose fresh cycle dates/baseline; no automatic restart when a build passes.
- The earlier claim that all LinkedIn articles are unreadable by search engines/assistants is too broad. Official LinkedIn visibility guidance allows public off-platform discovery. The supported rationale is control of the archive, accessibility, URLs and reader experience, not guaranteed search rankings or AI citations.
- This is a documentation handoff only. No implementation, deployment, Search Console action or essay publication occurred here. Existing explicit local implementation authority remains; release/publication boundaries are unchanged.

## Why

The site's design is not the problem; the circle encounter is distinctive and the September alignment made the inner pages clear. The problem is that James's voice is absent. His writing lives on LinkedIn, where search engines and AI assistants cannot read it. The August 2026 corpus review found that posts bridging operational systems with embodied state convert followers at roughly 1.9 per thousand impressions against 1.2 for the rest; that bridging voice is exactly what the site lacks. Bringing the writing home makes the site sound like James, gives search something to rank, gives AI assistants something to quote with attribution, and stops a year of weekly writing from evaporating in a feed.

The second aim is to make the site a working demonstration of the agent-ready web thesis James is already exploring: one capability layer, two faces (a human interface and an agent interface), with the original terminal idea returning as the human face of those capabilities rather than as a gimmick.

## User-facing outcome

A visitor from LinkedIn lands on an essay that reads like the person they follow, can move to the work or the practice, and can reach James directly. A reader who asks an AI assistant about private AI workflows, finishing AI-built products, or Tai Chi for leaders under pressure finds James cited by name with a link to the essay. James publishes each Tuesday essay on his own site first, with a LinkedIn announcement that links home. An agent arriving on someone's behalf can read a plain-language letter about who James is and call a small set of read-only capabilities.

## Scope and slices, in order

### Slice 1 — Astro migration with URL parity

Intended behaviour: the live site renders identically enough that no visitor notices, every existing URL resolves to the same content, and the codebase is Astro 5+ with content collections, no React runtime for static pages.

Technical approach:

- New Astro project at the repository root (move the CRA tree to `legacy/` during migration, delete after parity is verified; keep git history). Tailwind is optional; the existing `NewSite.css` custom properties and themes can port as-is.
- Routes to preserve, from `src/siteMetadata.js`: `/`, `/about`, `/executive-state-diagnostic`, `/systems`, `/workshops`, `/workshop-enquiry`, `/apps`, `/books`, `/little-panda`, `/contact`, `/taoism`, `/now`, `/paintings`, `/philosophy`, `/uxui`, `/sanctuary`, `/legal`, `/thank-you`. Port each `src/outputs/*.js` HTML string into a `.astro` page or a Markdown entry; keep headings, copy, prices and contact paths byte-for-byte unless a later slice changes them.
- Preserve `public/_redirects`, the sitemap (now generated), social images, ConvertKit form `data-uid`, GA (or replace with PostHog in a later decision, not here), and the TapScribe pilot DMG path.
- The homepage circle encounter and authored reflections port as an Astro island (React or vanilla; vanilla preferred, it is a small amount of state). Theme switching and `breathe` port as small client scripts. Keep the easter eggs `return` and `unlearn`.
- Prerendering script `scripts/prerender-route-metadata.js` is retired; Astro emits metadata per page from frontmatter.

Acceptance: a crawl of the old `build/` and the new `dist/` yields the same set of URLs with 200; titles and descriptions match `siteMetadata.js`; the circle encounter works at 390×844 and 1280×720 with no console errors; `breathe` and theme commands work; Lighthouse accessibility score does not drop; CRA tests that cover content (`contentQuality.test.js`, `conversionRoutes.test.js`, `siteMetadata.test.js`, `contactIntent.test.js`) are ported or replaced by equivalent Astro-side checks.

### Slice 2 — Essays collection and backfill

Intended behaviour: `/essays/` lists every essay newest first; `/essays/<slug>/` renders one essay with title, date, reading time, a short lead, the body, an "originally published" note where a Pulse copy exists, and a closing block with the discovery question and the contact path. Each essay has `Article` JSON-LD with author, dates, `inLanguage`, and `isPartOf` the site.

Source of truth for backfill: `Source/Runbooks/LinkedIn Posts/Output/Posts/*ARTICLE*.md` (exclude `*Announcement*`). Eighteen files exist on 2026-10-15; sixteen are published, two (20 and 27 October) are scheduled. Each file has a consistent shape: `ArticleID:`, `## Status` (contains the live Pulse URL when published), `## Title`, `## Image Hook`, `## Image Prompt`, `## Article` (the body). The 2026-05-31 decentralisation essay is the style benchmark and has no ArticleID.

Technical approach:

- `scripts/import-essays.mjs`: reads the Source folder (path passed as an argument, never hard-coded; the folder is Dropbox-synced), parses each ARTICLE file, writes `src/content/essays/<date>-<slug>.md` with frontmatter `title`, `date`, `articleId`, `linkedinUrl` (from Status when present), `announcementUrl` (when present), `lead` (first paragraph), `topics` (from a small manual map: local-ai, finish-line, practice, tools, writing), `draft` (true for files whose Status does not say Published). The body is the `## Article` section verbatim. The image prompt and hook are not published; keep them in frontmatter as `imageHook` for later cover images.
- Re-runnable: re-import updates frontmatter from source but never overwrites a body that was edited in the site repo after import (compare a stored `sourceHash`).
- Scheduled essays (20 and 27 October) import as drafts and are flipped to published on the day by James.
- `/essays/<slug>.md` Markdown twin and `<link rel="alternate" type="text/markdown">` on each essay page; `/llms-full.txt` concatenates all published essays.

Acceptance: sixteen published essays render; `/essays/` lists them with dates; each page validates in the Rich Results Test with zero errors; `npm run build` includes the two drafts in neither the sitemap nor `llms-full.txt`; `import-essays.mjs` run twice produces no diff.

Backfill answer to James's question: yes, all essays. Posts are handled in slice 3 and are selective, not exhaustive.

### Slice 3 — Notes collection (selected posts)

Intended behaviour: `/notes/` holds short pieces, each the body of a LinkedIn post, dated, with its live post URL. These are the "bridge" posts and product-story posts worth keeping, not the full feed.

Source: `Source/Runbooks/LinkedIn Posts/Output/Posts/*LI-*.md` and `*ADHOC*.md` (about ninety-five files; `## Title`, `## Status` with live URL, body section). The full 293-post export in `Source/Business/LinkedIn Analytics/2026-06-04 - Export Deep Dive Data.json` is a later, optional source.

Technical approach: same importer with a `--notes` mode and an allowlist file `DOCS/notes-allowlist.txt` that James curates (post IDs, one per line). Notes get `BlogPosting` JSON-LD and appear in `llms-full.txt` after the essays. Posts never go to `/essays/`; that URL means long-form work.

Selection method, three passes. Do not import everything and do not ask a model "is this good".

1. **Evidence pass (mechanical).** Input: `Source/Business/LinkedIn Analytics/2026-06-04 - Export Deep Dive Data.json` (293 posts) plus any later Friday analytics intakes with per-post numbers. Compute engagement rate and comments per thousand impressions; where attributed followers or profile views exist, weight them in. Rank on rate, not raw reach, because the August 2026 review showed bridging posts earn followers at roughly 1.9 per thousand impressions against 1.2 for high-reach AI posts. Keep the top quartile (about seventy). Script: `scripts/rank-posts.mjs`, output `DOCS/notes-candidates.md` as a table with ID, date, title or first line, metrics, live URL.
2. **Rubric pass (narrow, checkable).** For each candidate answer five yes/no questions; a model may answer them because they are narrow, and James reviews the borderline ones. (a) Stands alone without feed context: no "yesterday I posted", no dependence on a comment thread. (b) Contains a first-hand scene or observation, not only an opinion. (c) Belongs to one of the site's lanes: finish-line work, local and private AI, practice and state, tools James actually uses. (d) Still true: no dead product, superseded claim or stale price. (e) Not a near-duplicate of an essay already on the site. Four of five passes. Expect about thirty.
3. **James pass.** James reads the thirty in one sitting with `DOCS/notes-allowlist.txt` open, removes any for reasons the rubric cannot see, and adds low-reach posts he cares about. The allowlist is the final authority; the script only stops him reading three hundred posts.

Cluster-to-essay step (higher value than the import). Cluster the full corpus by topic using embeddings or a keyword pass. Where five to eight posts circle one idea that has no essay yet, record it in `DOCS/essay-candidates.md` with the post IDs, a working title and the strongest scene. These become new essays written from the archive, not posts to import. Likely first clusters: the recording-recovery and Teams-recording posts, the finish-line pieces, the AI-assistant portability posts.

Pruning. After ninety days live, Search Console reads per note decide: a note with no reads and no inbound link from an essay leaves the allowlist. The allowlist works in both directions.

Acceptance: `rank-posts.mjs` produces the candidates table from the export without manual editing; the rubric results are recorded per candidate in the same table; only allowlisted posts render; each links to its live LinkedIn post; a post removed from the allowlist disappears on the next import; `DOCS/essay-candidates.md` exists with at least three clusters after the first run.

### Slice 4 — The letter to agents, `/now`, and the opening question

Intended behaviour:

- `/llms.txt` is written in the first person as a letter: who James is, what he is good at and not, what he would ask the visitor's person first, how to reach him, and a map of the site. It is hand-written, not generated; the generated part is only the list of essay and note URLs appended below the letter.
- `/now` becomes a living page with dated entries (a small collection): what James is building, what he is reading, the hundred-day practice day count if James wants it public, and a line on response times. `/now.md` is its Markdown twin.
- The homepage gains one opening question above the circles, "What brought you here?", a single free-text field. A small client-side router maps keywords to the three destinations (work: `/uxui` and `/systems`; practice: `/taoism`, `/workshops`; reading: `/essays/`) and shows the three as choices when nothing matches. No model call, no network, nothing stored. The circles remain below as the reflective layer. This is the terminal reborn: sentences in, a route out.

Acceptance: `/llms.txt` reads as prose in James's voice and lists every published essay; `/now` has at least three dated entries at launch; the opening question routes "my app is wonky" to work, "breathing" to practice and "write" to reading, and shows all three on nonsense input; keyboard-only use works; 320 px shows no overflow.

### Slice 5 — Structured data and crawler hygiene

- `Person` JSON-LD on `/about` and as `author` everywhere, with `sameAs` for LinkedIn and the apps; `Organization` is not needed for a personal site.
- `Article`/`BlogPosting` per slice 2 and 3; `BreadcrumbList` on inner pages; `FAQPage` only where a page has a real FAQ.
- `robots.txt` names GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Perplexity-User and Google-Extended explicitly with the same allow as `*`. Confirm the host's AI-bot blocking is off (Netlify today; if the site moves to Cloudflare Pages like the other two, check the zone toggle).
- Search Console property added the day the first essay is live (James action).

Acceptance: zero errors in the Rich Results Test on `/`, `/about`, one essay, one note; robots lists the agents.

### Slice 6 — Capabilities with two faces (after slices 1–5)

Intended behaviour: a small, read-only capability layer that both the human terminal and agents use. Tools: `who_is_james` (the letter), `what_is_james_doing_now` (latest `/now` entries), `list_essays(topic?)`, `get_essay(slug)` (Markdown), `tai_chi_classes` (schedule as data), `how_to_contact` (the contact paths; no sending). Exposed as an MCP server (Streamable HTTP, stateless) at `/api/mcp` and as plain JSON under `/api/`. The human terminal, available via a `terminal` command or `/terminal`, lists the same tools in `help` and calls them; `now` in the terminal is `what_is_james_doing_now`.

Technical approach: the site's data is static, so the API can be static JSON emitted at build time plus a thin function for MCP (Netlify Functions or Cloudflare Pages Functions). No side-effecting tool in this slice; a human-confirmed "start a conversation" tool is a later decision.

Acceptance: `npx @modelcontextprotocol/inspector` lists six tools and returns the essays; the terminal `help` output and the MCP tool list are generated from the same definition file so they cannot drift; a James-authored essay quoted through `get_essay` carries the canonical URL in its footer.

### Slice 7 — Evidence of practice

One three-minute guided breath, recorded by James, attached to `breathe` and to `/workshops`. Audio with a transcript (TapScribe), `AudioObject` JSON-LD, no autoplay. This is the only workshop-side change; the commercial hierarchy from September stays.

Acceptance: the audio plays from `breathe` and from the workshops page; the transcript is on the page; the file is under 4 MB.

## Publishing workflow after slice 2

1. Tuesday: James flips the essay's `draft` to false, builds, deploys. Canonical URL is `/essays/<slug>/`.
2. Same day: the LinkedIn announcement post from the Source runbook, 150–250 words, strongest scene, discovery question, link in the body. It consumes the day's one public slot.
3. A week or more later, optionally: Pulse republish with "Originally published at <url>" as the first line. No second announcement.
4. Friday review: Search Console impressions and clicks per essay are the measure, alongside the existing LinkedIn signals.

The Source LinkedIn runbooks keep owning drafting and queue; this repository owns the published copy.

## Non-goals

- No chatbot or model-backed "ask James". The opening question is keyword routing only.
- No new offers, prices or commercial hierarchy changes; the September decisions stand.
- No exhaustive import of all 293 posts; notes are curated.
- No side-effecting agent tools (sending, booking) in this plan.
- No edits to the Source vault from this repository.

## Open questions

- Hosting: stay on Netlify or move to Cloudflare Pages to match the other two sites. Affects slice 6 functions only; decide before slice 6.
- Whether the hundred-day practice count is public on `/now`.
- Which posts seed the notes allowlist; James curates after the first import.
- Essay cover images: use the saved image hooks later, or publish text-only first. Recommendation: text-only first.

## Sequencing and estimates

Slice 1 is two to three days of focused work and is the gate for everything else. Slice 2 is one day including the importer. Slices 4 and 5 are one day together. Slice 3 is half a day plus James's curation. Slice 6 is two days. Slice 7 is James's recording plus an hour. First target: the 27 October essay published home-first, which needs slices 1, 2 and 5 live by 26 October. TapScribe's release owns the current week; this starts after the public switch.
