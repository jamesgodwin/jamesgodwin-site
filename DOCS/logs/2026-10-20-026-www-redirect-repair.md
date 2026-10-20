# Repair www routing after Netlify retirement

## Summary

20 October 2026. James opened the Cloudflare DNS page in response to the request to finish repairing www. Main image/SEO deployment remains live. Repair and live checks completed successfully.

## Files Touched

This log and the current hosting spec/runbook/backlog/handoff record external configuration evidence. No application source, email or apex DNS record changed.

## Verification

Reproduction from log 025: HTTPS www returns Netlify 404 instead of the expected apex redirect. DNS dashboard confirms CNAME `www.jamesgodwin.me` → `jamesgodwin.netlify.app`, Proxied, Auto TTL. Apex CNAME is `jamesgodwin-site.pages.dev`, Proxied, Auto TTL. These are rollback values; inspect only www. Mail/TXT and apex records are out of scope. Ignored evidence under `output/www-redirect-repair/`.

### Completed repair and final verification

Cloudflare accepted/deployed the named rule and listed it enabled. www’s CNAME was then changed to `jamesgodwin.me`, keeping Proxied and Auto TTL. Final DNS list confirms the saved value; all nine records remain, with apex/mail/TXT unchanged. The edge rule handles www before origin routing, so an additional Pages www custom-domain binding is not required for this redirect.

- `python3 output/www-redirect-repair/verify.py`: 11 checks pass. HTTP and HTTPS www root/nested requests redirect 301 to the HTTPS apex in one hop; paths and query strings are preserved. Missing paths redirect to an actual apex 404. Apex root remains 200 and HTTP apex still upgrades correctly.
- Re-ran `python3 output/seo-live-verification/verify.py`: all 46 URL checks and 91 asset checks pass; 25 sitemap URLs match current canonicals. The prior www failure is resolved. The three previously qualified thumbnail encoder variations are unchanged.
- Browser www TapScribe path with verification query lands at the exact apex path/query, with canonical URL excluding the query, correct title and no broken loaded images.
- Screenshots saved under `output/www-redirect-repair/`: enabled rule, saved DNS and browser result. No application code changed, so no new application tests/build were necessary; the existing published release remains qualified.
- James subsequently asked whether he should delete www. Answered to retain the corrected proxied CNAME; no deletion is required.

## Decisions

Configure a host-specific Cloudflare 301 preserving path and query; remove www’s stale Netlify routing while preserving proxy/TLS. Keep the main hostname unchanged. The existing Single Redirects list is empty (0/10). Prepared rule `Redirect www to jamesgodwin.me`: filter `(http.host eq "www.jamesgodwin.me")`; dynamic target `concat("https://jamesgodwin.me", http.request.uri.path)`; status 301; Preserve query string checked. This covers HTTP and HTTPS for www only. Snapshot in `rule-planned.json` before deployment.

## Follow-ups

No remaining www repair work. Keep the proxied www record and enabled redirect. Rollback values are retained above; reverting to Netlify only makes sense if that deployment is deliberately restored. Search Console indexing/submission and deeper hosted analytics acceptance remain separately unverified. No Netlify account deletion was performed.

### Owner update, 20 October 2026

James subsequently confirmed deleting the Netlify account. The old Netlify CNAME remains historical evidence only and is no longer a valid recovery target. The 11 redirect checks were re-run after his report and passed. Keep the working Cloudflare records/rule; recovery now uses a prior successful Pages production deployment. [Documentation reconciliation](2026-10-20-027-hosting-documentation-reconciliation.md).
