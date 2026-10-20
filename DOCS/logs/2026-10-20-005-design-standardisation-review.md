# Design standardisation review

## Summary

Reviewed token inflation at James's request before Essays. Confirmed the preservation pass retained unnecessary vocabulary. Recorded four ranked consolidation candidates in the existing foundation spec; no product styles or tokens changed.

## Files Touched

- `DOCS/specs/design-system-foundations.md`: quantified findings, proposed rollout and verification gates.
- `DOCS/next-day.md`: current next step reflects consolidation review before Essays.
- Local ignored audit scripts/results under `output/design-system/standardization/`.

## Verification

Executed a PostCSS source census and reference/dependency traversal across product CSS/Astro/JS/TS, including dark/responsive token dependencies and excluding catalogue/tests as consumers. Found 410 base names, 81 unreachable names including 67 typography fields. Compared resolved colour pairs across light/dark. Inspected font request and weight declarations. Reused existing 30-case computed-style evidence for the limited observed family/weight census; no fresh browser run. This is not a complete all-route/state usage proof.

No tests or builds rerun because only review documentation changed. No claim of implemented consolidation or new visual acceptance.

## Decisions

Recommend retiring dead definitions/styles before merging active recipes. Retain semantic colour distinctions where their purpose differs. Treat typography/spacing/font-face changes as potentially visible. Three brand families remain intentional.

## Follow-ups

Review proposed consolidation scope before Essays. Keep all work local; no deployment, publication, commit or push.
