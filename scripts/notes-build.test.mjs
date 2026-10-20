import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {noteSelections} from './note-selection.mjs';
const slugs=noteSelections.map(note=>note.slug);
test('visitors discover exactly the selected notes alongside an unchanged essay archive',()=>{
 const notes=fs.readFileSync('dist/notes.html','utf8');
 assert.match(notes,/>Notes\.<\/h1>/);
 assert.equal((notes.match(/Read note /g)||[]).length,12);
 for(const file of ['dist/index.html','dist/essays.html','dist/essays/page/2.html'])assert.ok(fs.readFileSync(file,'utf8').includes('href="/notes"'));
 const sitemap=fs.readFileSync('dist/sitemap.xml','utf8'), guide=fs.readFileSync('dist/llms.txt','utf8');
 for(const slug of slugs){
  const path=`/notes/${slug}`,html=fs.readFileSync(`dist${path}.html`,'utf8');
  assert.ok(notes.includes(`href="${path}"`));
  assert.ok(html.includes(`rel="canonical" href="https://jamesgodwin.me${path}"`));
  assert.match(html,/"@type":"BlogPosting"/);
  assert.match(html,/Adapted from a LinkedIn post/);
  assert.match(html,/href="https:\/\/(?:www\.linkedin\.com|lnkd\.in)\//);
  assert.match(html,/class="note-cover"[\s\S]*?<img[^>]+src="[^"]+\.webp"[^>]+srcset=/);
  assert.ok(html.includes('href="/notes"'));assert.ok(sitemap.includes(`https://jamesgodwin.me${path}`));assert.ok(guide.includes(path));
 }
 assert.doesNotMatch(notes+sitemap+guide,/PRIVATE_NOTE_DRAFT|private-note-check/);
 assert.equal(fs.existsSync('dist/notes/private-note-check.html'),false);
 const archive=fs.readFileSync('dist/essays.html','utf8')+fs.readFileSync('dist/essays/page/2.html','utf8');
 assert.equal((archive.match(/<article class="writing-(?:feature|card)"/g)||[]).length,15);
 for(const slug of slugs)assert.ok(!archive.includes(`/essays/${slug}`));
});
