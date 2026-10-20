# TapScribe graphic and copy refinement

## Summary

Corrected awkward meeting wording and replaced the floating HUD with a composed Record/Transcribe/Keep visual using actual screenshot and existing shared panels.

## Files Touched

TapScribe story, CaseVisual, concept composition and build scope.

## Verification

Build/design guard and four route checks pass. Browser reloaded built output; revised English and graphic verified on desktop/390px, with no mobile overflow. Screenshot `output/site-build/tapscribe-connected-workflow.jpg`. No new tests for copy/layout refinement.

## Decisions

Constrain HUD image box to apply shared rounded corners correctly. Reuse existing design values and static composition; original screenshot unchanged.

## Follow-ups

James reviews the revised graphic. No deployment, commit or push.
