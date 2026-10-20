# Hosted PostHog verification — 20 October 2026

## Summary

Queried the website-specific PostHog connector and verified project 631540 (`Default project`). Actual browser visits and contact clicks reached PostHog from both the Pages address and `jamesgodwin.me`. No application or infrastructure changes were needed. Google Search Console remains owner-led and uninspected.

## Files Touched

Updated the hosting spec, deployment runbook, backlog and handoff to distinguish confirmed analytics delivery from the remaining exception check. Existing uncommitted hosting documentation was preserved.

## Verification

- Production session: 18:01:47–18:02:20 UTC, 20 October 2026. Raw events returned the homepage and contact `$pageview`, `contact_cta_clicked` (`source_page=home`, `enquiry_type=product-clarity`) and `contact_method_selected` (`contact_method=linkedin`, same enquiry). All had `site_runtime=astro`.
- Production log: `Visitor selected a contact method`, timestamp 18:02:19.820 UTC, observed 18:02:21.181942 UTC, with LinkedIn/product-clarity/astro attributes. UUID `01a15a7a-847d-7983-853c-a2e81aad8777`.
- Pages session: `verification_run=posthog-live-20261020`, 18:00:43–18:00:56 UTC. Homepage/contact pageviews, both contact events and the interaction log arrived with `traffic_type=verification`, the run label and `site_runtime=astro`.
- A first query preceded ingestion of the CTA event; a later query confirmed receipt. This was no evidence of an application fault. One connector transport error was retried successfully.
- Only the visitor-facing LinkedIn link was exercised. No message, email, phone call or WhatsApp communication was sent.
- Automatic hosted exception capture remains **unverified**. An isolated Pages test tab was prepared with run `posthog-error-20261020`, but no controlled exception was executed. Brave was in use by James; testing stopped before further console interaction. Local exception receipt remains historical local evidence only.
- No code changes, build or automated tests: this was deployed-runtime receipt verification. Documentation `git diff --check` passed.

## Decisions

The existing SDK assigns verification properties only on localhost and Pages hosts. A query parameter on the production domain does not label or persist a synthetic session across navigation. Exclude the production test using homepage URL `?verification_run=posthog-production-20261020`, distinct ID `01a15887-d356-7272-832f-371f1a6401a1` and the narrow time window above. Do not report these clicks as genuine enquiries or visitor outcomes. Additional diagnostic Pages visits used run `posthog-cta-20261020`.

## Follow-ups

- Automatic hosted exception gate completed by the follow-up below. Search Console remains separate.
- James plans to handle Search Console ownership/sitemap/indexing. No submission or Google index status is established here.
- Documentation remains local and uncommitted; no push or deployment was performed for this check.

## Automatic exception follow-up — 20 October 2026

The earlier unverified checkpoint is superseded. Native DevTools executed a `setTimeout` callback that threw `POSTHOG_VERIFICATION_SHIELDS_OFF_20261020` on the deployed Pages site. No `posthog.capture` or `captureException` call was used. Brave initially returned `ERR_BLOCKED_BY_CLIENT` for analytics requests. James turned Shields off himself; after the reload, pageview and automatic exception ingestion succeeded. No site code or PostHog configuration changed.

The website-specific connector returned two `$exception` records in project 631540, at 18:22:49.252 and 18:22:54.192 UTC (20:22 SAST), with UUIDs `01a15a8d-407b-722b-9262-ad8178a03d83` and `01a15a8d-542e-7306-ad53-8cfd02f54cf1`. Both contain the exact message, `handled=false`, `traffic_type=verification`, `verification_run=posthog-error-retry-20261020`, `site_runtime=astro`, and the Pages test URL. The browser ran the command twice while native-input delivery was being confirmed; these are deliberate QA records, not product faults. The SDK sent them automatically. Ingestion lag meant the initial receipt query showed only the pageview.

Saved console screenshot: `output/posthog-verification/automatic-error-console.png` (ignored). The receipt is the acceptance evidence; the screenshot establishes the deliberate browser error. A Chrome Guest window was briefly prepared as an alternative, but no error was triggered there. Hosted pageviews/events/logs on the custom domain were established earlier; the forced exception test was on the Pages address only. This confirms automatic uncaught-error capture, not every possible error class or source-map fidelity. Analytics blockers can prevent delivery.

Hosted analytics acceptance is now complete for the agreed controlled-exception gate, and slice 3 can close against the existing routing/image/SEO/mobile/release evidence. Search Console and the visitor exercise remain separate. Documentation is local and uncommitted; no deployment occurred.

## Documentation publication handoff

James subsequently authorised committing and pushing all pending documentation updates to GitHub main. This documentation commit packages the www repair, owner-reported Netlify retirement, current Cloudflare recovery procedure, historical-spec applicability notices and completed hosted analytics evidence. The earlier local/uncommitted statements above describe their original checkpoints. No application, environment file, screenshot or ignored output is included. Relative-link and whitespace checks apply to this documentation-only candidate; application tests/build were not repeated. GitHub push and any resulting Cloudflare build remain separate outcomes, recorded by Git/hosting status rather than inferred from the source commit.

Publication candidate checks: 28 Markdown files only, 147 relative links resolve, all 16 distinct operational npm script references exist, and `git diff --check` passes. The explicit eject prohibition is not an operational script reference. Staged paths exclude application source, credentials and ignored browser artifacts.
