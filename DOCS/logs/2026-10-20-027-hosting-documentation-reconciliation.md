# Hosting documentation reconciliation after Netlify deletion

## Summary

20 October 2026. James confirmed deleting the Netlify account and requested all documentation be updated before proceeding. Current authority now describes the deployed Astro/Case shelf site on Cloudflare, the completed www repair and owner-reported Netlify retirement. No application, DNS, account or Source authoring change in this documentation session.

## Files Touched

- AGENTS removes the obsolete skip-Netlify operating rule. PROJECT/README describe current hosting and recovery rather than a pending cutover.
- Deployment runbook removes instructions to retain/use the deleted host, documents current www routing and Cloudflare production rollback, and supplies Search Console/analytics follow-up procedure.
- Backlog and next-day preserve unresolved hosted analytics gates and place Search Console account verification first among the next backlog actions.
- Spec/runbook indexes distinguish current maintenance references, earlier positioning/validation and historical interface explorations. Relevant specs receive short applicability notices; earlier decision/evidence text is preserved rather than rewritten. Main hosting spec, ADR and www log record explicit later amendments.
- Prior uncommitted www-repair documentation is merged and preserved. No historical log/archive content is removed.

## Verification

- Owner’s report establishes deletion status; no independent Netlify account audit is claimed.
- Re-ran the existing `output/www-redirect-repair/verify.py`: 11 checks pass after deletion was reported. Previous 46-URL/91-asset checks and 37 automated release checks remain separately dated evidence, not re-run claims for this documentation-only session.
- Current commands checked against package.json and runtime/hosting details against existing source and release evidence. All 139 relative Markdown links across 27 current documentation/index files resolve; `git diff --check` passes. Current npm commands in README/PROJECT/runbooks resolve against package.json scripts. No app tests/build needed for documentation-only edits.
- Official Google ownership/sitemap guidance and Cloudflare rollback documentation checked for the next procedure. Existing Google verification TXT presence does not prove account ownership/indexing.

## Decisions

Cloudflare is the production and recovery host. Retain the proxied www CNAME and edge 301. Netlify skip markers are no longer necessary; old Netlify deployment targets are historical, not rollback options. Preserve earlier specs as labelled chronological references. Documentation updates do not authorise further deployments, profile changes, Source-cycle restart or new essay publication.

## Follow-ups

Next: verify the existing Search Console property and sitemap/indexing status. Then reconcile deeper hosted PostHog delivery using controlled labelled traffic. Keep the eight-person visitor exercise separate from technical acceptance. No Search Console account action or sitemap submission performed here. Documentation is saved locally; no commit/push or new deployment was requested for this documentation session.
