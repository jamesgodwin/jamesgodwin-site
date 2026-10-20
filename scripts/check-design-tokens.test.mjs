import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findDesignViolations } from './check-design-tokens.mjs';

test('raw values cannot bypass token authority in component styles', () => {
 const findings=findDesignViolations('src/components/Example.astro', '<style>.card { color: #fafafa; font-size: 17px; border-radius: 4px; }</style>');
 assert.deepEqual(findings.map(f=>f.property).sort(), ['border-radius','color','font-size']);
});

test('token references and intrinsic geometry remain valid', () => {
 assert.deepEqual(findDesignViolations('src/styles/example.css', '.a { color:var(--color-text); border-radius:var(--radius-control); font-size:var(--type-prose-size); background:transparent; width:50%; }'),[]);
});

test('raw colours in browser code and direct component appearance overrides fail', () => {
 assert.ok(findDesignViolations('src/view.js', "const colour = '#fff';").length);
 assert.ok(findDesignViolations('src/View.astro', '<Action style="color:var(--color-text)" />').some(f=>f.property==='component-override'));
});

test('token authority cannot hide non-token CSS rules', () => {
 assert.ok(findDesignViolations('src/styles/tokens.css', ':root { --color-text:#000; } .bypass { color:red; }').length);
});

test('token-valid CSS cannot override an action recipe outside its owner', () => {
 assert.ok(findDesignViolations('src/styles/override.css', '.ui-action--outline { padding:var(--space-8); color:var(--color-text); }').some(f=>f.property==='recipe-override'));
});

test('new raw spacing and named colours do not bypass the guard', () => {
 assert.ok(findDesignViolations('src/styles/new.css', '.x { gap:37px; color:rebeccapurple; }').length>=2);
});

test('unused token checks follow dark and responsive dependencies, not catalogue inventory', async () => {
 const { findUnusedTokens } = await import('./check-design-tokens.mjs');
 const tokens=':root { --text:var(--ink); --ink:#000; --dark-ink:#fff; --small:12px; --orphan:var(--dead); --dead:7px; } .dark { --text:var(--dark-ink); } @media(max-width:768px) { :root { --text:var(--small); } }';
 assert.deepEqual(findUnusedTokens(tokens,['p { color:var(--text); }']).sort(),['--dead','--orphan']);
});
