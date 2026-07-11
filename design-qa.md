# Design QA

Source visual truth: `/Users/nitro/.codex/generated_images/019f4b96-b163-7760-9499-0d18555eb323/exec-6b651932-c113-46fe-954f-45f153a343de.png`

Implementation screenshot: `/Users/nitro/code/jamesgodwin-site/tmp/design/pressure-home-mobile-final.png`

Normalized side-by-side comparison: `/Users/nitro/code/jamesgodwin-site/tmp/design/pressure-home-comparison-final.png`

Additional implementation evidence:

- `/Users/nitro/code/jamesgodwin-site/tmp/design/pressure-reflection-mobile-final.png`
- `/Users/nitro/code/jamesgodwin-site/tmp/design/pressure-home-desktop-final.png`

Viewport: 390 x 844 for the source comparison; 1280 x 800 for the desktop expansion.

State: default warm-white arrival screen. The implementation intentionally uses James's approved replacement copy rather than the earlier wording visible in the source mock.

## Findings

No actionable P0, P1, or P2 differences remain.

- [P3] Ring tone is stronger than the source mock.
  - Location: concentric-circle artwork.
  - Evidence: the source outer ring is softer grey while the final generated artwork keeps all three rings closer to dark charcoal.
  - Impact: the hierarchy is slightly stronger, but the concentric form, scale, imperfection, and interaction labels remain faithful.
  - Follow-up: soften the outer ring only if James prefers the quieter tonal hierarchy after using the live prototype.

## Required Fidelity Surfaces

- Fonts and typography: EB Garamond, Karla, and IBM Plex Mono are loaded explicitly. The serif headline, sans supporting copy, and monospaced controls match the source hierarchy and wrapping at 390 x 844.
- Spacing and layout rhythm: header, two-line opening, ring scale, prompt, composer, and browse link align closely in the normalized full-view comparison. The final mobile document is exactly 390 x 844 with no horizontal or vertical overflow.
- Colors and visual tokens: the warm-white background, near-black copy, fine outlines, and restrained control styling match the selected direction and continue to use the site's existing theme variables.
- Image quality and asset fidelity: the rings use a dedicated 1254 x 1254 transparent PNG generated from the selected visual direction. It is sharp at mobile and desktop sizes and is not replaced by CSS or placeholder art.
- Copy and content: the final headline and support line are the explicit approved override: “Pressure rarely stays where it begins.” and “It moves through the person, the room, and the work.” All four starting paths and the prompt remain consistent with the selected mock.

## Full-View Comparison Evidence

The normalized side-by-side image shows the same 390 x 844 crop and arrival state. The headline block, ring artwork, three labels, prompt, exploratory path, input, microphone control, and browse path are all visible at once and preserve the source composition.

## Focused Region Comparison Evidence

A separate crop was not needed: the normalized 780 x 844 comparison preserves both 390 x 844 screens at full readable size, including typography, ring texture, labels, input border, icon, and underlines.

## Comparison History

1. Initial browser capture: `/Users/nitro/code/jamesgodwin-site/tmp/design/pressure-home-mobile-1.png`
   - Earlier findings: [P1] the ring artwork was shifted left and visibly cropped; [P2] the page exceeded the mobile viewport by 8 px horizontally and 6 px vertically; [P2] the typed path did not submit reliably when Enter was pressed in a real browser.
   - Fixes: corrected the flex alignment and ring sizing, clipped only the transparent artwork overhang, tightened the final vertical spacing, and added an explicit Enter-key submission path with a regression test.
2. Final browser capture: `/Users/nitro/code/jamesgodwin-site/tmp/design/pressure-home-mobile-final.png`
   - Post-fix evidence: the rings are centred and fully visible; document and viewport measurements both report 390 x 844; the typed path reaches the authored work reflection; the reflection also fits 390 x 844 without overflow.
   - Console: no browser errors or warnings.

## Primary Interactions Tested

- Select `In a team` and reach its authored reflection.
- Follow `Explore Stillness Under Pressure` to `/workshops`.
- Enter a plain-language workflow description and reach the authored work reflection.
- Open the conventional navigation through `Browse without answering`.
- Return to the opening state with `Begin again`.

## Implementation Checklist

- [x] Mobile arrival matches the selected composition.
- [x] Four authored paths work without AI or external data transmission.
- [x] Typed input and preserved terminal commands work.
- [x] Voice input remains a progressive enhancement.
- [x] Existing route-backed pages and navigation remain available.
- [x] Keyboard focus, reduced motion, zoom, and mobile overflow were checked.
- [x] Production build succeeds.

final result: passed
