import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('website-original essay has complete content and accurate provenance while imports retain attribution',()=>{
 const slug='why-i-kept-a-step-i-could-have-removed';
 const html=fs.readFileSync(`dist/essays/${slug}.html`,'utf8');
 assert.match(html,/Why I Kept a Step I Could Have Removed/);
 assert.doesNotMatch(html,/Originally published on LinkedIn|"isBasedOn"/);
 assert.match(html,/leave them that quiet moment with the question they had brought/);
 assert.ok(fs.readFileSync('dist/essays.html','utf8').includes(`/essays/${slug}`));
 assert.ok(fs.readFileSync('dist/sitemap.xml','utf8').includes(`/essays/${slug}`));
 assert.match(fs.readFileSync('dist/essays/decentralisation-is-not-about-crypto.html','utf8'),/Originally published on LinkedIn/);
});
