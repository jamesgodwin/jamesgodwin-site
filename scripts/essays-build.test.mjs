import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { selections } from './essay-selection.mjs';
test('selected essays render images, canonical metadata, article schema and original body only',()=>{
 const index=fs.readFileSync('dist/essays.html','utf8');
 const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
 let previous=-1;
 for(const item of selections){
  const position=index.indexOf(`/essays/${item.slug}`);assert.ok(position>previous);previous=position;
  const html=fs.readFileSync(`dist/essays/${item.slug}.html`,'utf8');
  assert.ok(html.includes(`rel="canonical" href="https://jamesgodwin.me/essays/${item.slug}"`));
  assert.ok(html.includes(item.sourceUrl));assert.match(html,/"@type":"Article"/);assert.match(html,/"@type":"Person"/);
  assert.match(html,/class="essay-cover"[\s\S]*?<img/);assert.ok(sitemap.includes(`/essays/${item.slug}`));
  assert.doesNotMatch(html,/Private editorial notes|## Image Prompt|Primary overlay|sourceHash|importedBodyHash|SECRET_DRAFT_FIXTURE/);
 }
 assert.equal(fs.existsSync('dist/essays/draft-check.html'),false);assert.doesNotMatch(sitemap,/draft-check/);assert.doesNotMatch(index,/Draft privacy check|SECRET_DRAFT_FIXTURE/);
});
