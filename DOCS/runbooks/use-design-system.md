# Use the design system

The main deployed website and local implementation use the selected cream/forest Case shelf system. Reuse supported components and recipes before introducing a variation. Existing legacy compositions remain only where needed for retained content.

## Authority

The main site and selected Case shelf prototype use a scoped theme in this same system. `html[data-design="case-study"]` supplies cream/forest colours, Manrope 700 and Inter 400/600 with the main SiteLayout selecting this theme. It adds the primary action and story/step choice recipes. The actual themed reference lives at `/concept/system/` when `SITE_POC=true`; the existing catalogue also inventories the new recipes. [Prototype scope](../specs/homepage-proof-of-concept.md).

| Source | Owns |
|---|---|
| `src/styles/tokens.css` | Colour/theme roles, typography and numeric scales, spacing, sizes, corners, elevation and motion. No legacy aliases. |
| `src/design-system/patterns.js` | Supported recipes, classes, examples and native-attribute contract shared by Astro, browser code and catalogue. |
| `src/styles/patterns.css` | Appearance and responsive states of the shared patterns. |
| `src/components/ui/` | Action, TextLink, LinkCard, PageHero and ContentProse markup. |
| `src/NewSite.css` | Inherited layout styles and retained historical circle composition; the public shell uses the Case shelf theme. Retired terminal, overlay and offer styles have been removed. |
| `src/styles/site.css` | Main site composition only; design values and appearance belong to tokens/recipes. |
| `src/components/site/` | Shared header, story and writing compositions. ContentProse `reading` uses the supported serif reading variant. |
| `src/styles/concept.css` | Case shelf composition shared by the main site and opt-in prototype; values and recipe treatments remain in the authorities above. |
| `src/components/Fonts.astro` | Default font loading for product/catalogue; explicit `theme="case-study"` loads the selected main-site and prototype families. |
| `src/pages/design-system/[...catalogue].astro` | Opt-in catalogue using the real sources; no independent token or recipe inventory. |

## Open the local catalogue

For live editing:

```sh
npm run dev:catalogue
```

Open `http://127.0.0.1:3001/design-system/`.

For the built version:

```sh
npm run build:catalogue
npm run preview:catalogue
```

Open `http://127.0.0.1:4175/design-system/`. The explicit `DESIGN_SYSTEM_CATALOG=true` flag emits the catalogue into ignored `output/design-system/catalogue-build/`; it does not replace normal `dist/`. The catalogue commands use Astro's `--ignore-lock` so they can coexist with the regular preview/development server. They remain bound to loopback.

The catalogue renders theme swatches and aliases, responsive typography roles, each action/link/card recipe, a real hero/prose example, radii, elevations and spacing. Hover/focus previews exercise the authored state selectors; use Tab to inspect native keyboard focus too. The theme selector affects the catalogue only. No PostHog, GA or Kit scripts are loaded there.

A normal `npm run build` omits the route entirely. It stays noindex/nofollow, disallowed by robots, outside sitemap and product navigation. Catalogue screenshots and comparisons belong under ignored `output/design-system/`.

## Consume patterns

```astro
---
import Action from '../components/ui/Action.astro';
import TextLink from '../components/ui/TextLink.astro';
import PageHero from '../components/ui/PageHero.astro';
import ContentProse from '../components/ui/ContentProse.astro';
---
<Action recipe="outline" href="/contact?about=product-clarity" data-contact-cta="uxui">
  Talk about your product
</Action>
<ContentProse>
  <h2>Start with one flow</h2>
  <p>Authored copy with a <TextLink href="/contact">direct contact path</TextLink>.</p>
</ContentProse>
```

Action chooses an anchor when `href` is supplied, otherwise a native button. External HTTP links receive the existing new-tab/noopener treatment. Preserve contact tracking attributes when moving an existing CTA. Use the exports for the current recipe list rather than inventing one.

Browser-created reflection buttons call `patternAttributes('action', recipe)` from that same module and apply its returned attributes. Do not copy its classes into another renderer.

Callers own content, destinations, events, accessible native attributes and outer composition. Recipes own colour, typography, borders, corners, internal padding and states. `class`, `class:list`, `style` and recipe identity attributes are rejected by the shared attribute helper; source checks also reject direct appearance props. Targeted CSS overrides of action/link/card recipes outside `patterns.css` fail even when they use valid tokens. PageHero and ContentProse expose semantic content/slots, not styling overrides.

For future prose/Essays, use PageHero within the route composition and ContentProse for the body. Its selectors style trusted output HTML and future rendered Markdown directly; no prose plugin is required. Book/media rows stay their existing compositions. The circles remain bespoke; no general Card wrapper is required for every block.

## Consume tokens

Prefer `--color-*`, `--type-<role>-*`, `--radius-*`, `--shadow-*`, `--space-*` and `--motion-*`. The supported typography roles are display, page-title, section-title, lead, body, label, control, caption, wordmark, ring and breath. Roles expose only fields actually applied by styles; family/size/weight primitives are shared. The catalogue uses inheritance/defaults for omitted fields.

The brand families are EB Garamond (400 headings), Karla (400 prose, 700 emphasis), and IBM Plex Mono (400 controls/labels, 500 wordmark/card emphasis/rings). These five family/weight combinations are explicitly requested. Courier remains a bespoke breathing-practice exception; the system stack remains the document fallback. Do not add a font or weight to style one location differently without a design reason.

Light values live at `:root`; dark mappings live at `.dark`. Components reference semantic colours directly. Equal-purpose border and muted-text roles are shared. Distinct canvas, menu surface, hover and scrim roles remain independently themeable. Existing link colours and black SVG icons still need a later public dark-mode contrast qualification.

### Pattern decisions

For the prototype, `Action / primary` is the forest filled action; `choice / story` owns the image-led pressed selector; `choice / step` owns named progress with `aria-current="step"`. Their markup must use `patternAttributes`, and their styling remains in `patterns.css`. Prototype controls are demonstrated with real components in `ConceptSystem.astro`. The serif testimonial uses a scoped quote role; do not spread it into the new body/UI system.

| Pattern | Use and reason |
|---|---|
| Action `outline` | Every standard outlined page/reflection button. Same mono 14px type, 44px minimum height, 4px corners, border, padding and interaction states. Mobile width belongs to responsive composition. |
| Action `text` | Supporting choices without a button frame; same 14px type, underline and focus treatment wherever used. |
| Action `quiet` | Auxiliary browse navigation at 13px; reduced emphasis communicates a secondary route. |
| Action `back` | Muted return navigation, without a competing CTA frame or underline. |
| Action `menuItem` / `menuToggle` | Menu rows need full-width hit areas and hover surfaces; the icon toggle has its own fixed hit target. |
| LinkCard `primary` / `secondary` | One shared card structure, with filled/outlined emphasis for the existing work hierarchy. |
| TextLink `body` / `proof` | Existing prose-link palette versus monochrome homepage proof; preserve the current look pending public dark-mode review. |

The native TapScribe HUD capture uses a dedicated proportional `--radius-app-capture` mask to match the rounded corners already present in the bitmap; it is not a control/card variant. General interface corners remain: 4px controls, 8px menus/covers, and 50% circles. The previous 6px reflection-only corner and dormant pill/12px/20px values are retired. The circle artwork and breathing practice are intentional bespoke experiences, not extra button variants.

Spacing primitives preserve current page geometry. Prefer 4/8/12/16/24/32/48/64px when composing new work; other retained values support measured page fit, responsive artwork placement, media and existing reading rhythm. Do not round them mechanically or use every retained measurement as a menu of new design choices. New spacing/type/shape exceptions need a concrete purpose and a catalogue/runbook update.

## Validate changes

```sh
npm run test:design
npm run build
npm test
npm run test:routes
npm run build:catalogue
npm run test:catalogue
```

`npm run build` always runs `check:design` first. The checker covers source CSS, Astro styles and appearance props, literal browser-code colours, token references, unused definitions and targeted recipe overrides. It rejects raw typography/colours/radii/shadows and raw spacing lengths outside token authority; bespoke percentage/viewport geometry remains allowed. It has no broad legacy allowlist. It is a source guard, not a proof of every possible dynamically constructed style.

`test:catalogue` expects both builds and checks default exclusion, noindex, no analytics/forms, sitemap exclusion and complete recipe rendering. Product interaction and screenshot comparisons still matter; unit/build checks do not establish visual or accessibility parity.

Foundation evidence is in `DOCS/logs/2026-10-20-004-design-system-foundations.md`; consolidation evidence is in `DOCS/logs/2026-10-20-006-design-system-consolidation.md`. No public dark-mode switcher, Essays or Cloudflare deployment is part of this foundation change.
