import fs from 'node:fs';
import assert from 'node:assert/strict';
const root='output/homepage-poc/build';
for(const route of ['concept','concept/writing','concept/system']) {
 const html=fs.readFileSync(`${root}/${route}/index.html`,'utf8');
 assert.match(html,/name="robots" content="noindex,nofollow"/);
 assert.doesNotMatch(html,/posthog|googletagmanager|data-uid|aiching\.kit/);
 for(const match of html.matchAll(/(?:src|href)="(\/_astro\/[^"]+)"/g)) {
  assert.ok(fs.existsSync(`${root}${match[1]}`),`Missing asset: ${match[1]}`);
 }
}
const storyHtml=fs.readFileSync(`${root}/concept/index.html`,'utf8');
assert.doesNotMatch(storyHtml, /<form\b|<input\b|data-recovery-action|data-score-form|data-inspection-form/, 'Case screens must illustrate the story, not run app demos');
assert.equal(fs.existsSync('dist/concept/index.html'),false,'Normal build must omit the prototype');
assert.equal(fs.existsSync('dist/concept.html'),false,'Normal build must omit the prototype');
assert.doesNotMatch(fs.readFileSync('dist/sitemap.xml','utf8'),/concept/);
assert.doesNotMatch(fs.readFileSync('dist/index.html','utf8'),/data-case-app|\/concept\//);
const assets=fs.readdirSync('dist/_astro');
assert.ok(!assets.some(name=>/writing-index|writing-article/.test(name)),'Normal output must not contain unselected story or mockup media');
console.log('Prototype build checks passed: routes, assets, noindex, no tracking and normal-build exclusion.');
