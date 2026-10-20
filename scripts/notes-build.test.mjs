import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {noteSelections} from './note-selection.mjs';
const slugs=noteSelections.map(note=>note.slug);
test('visitors discover exactly the selected notes alongside an unchanged essay archive',()=>{
 const pageCount=Math.ceil(slugs.length/12);
 const archives=Array.from({length:pageCount},(_,i)=>fs.readFileSync(i===0?'dist/notes.html':`dist/notes/page/${i+1}.html`,'utf8'));
 const [first,second]=archives;
 const notes=archives.join('');
 archives.forEach((html,i)=>{
  assert.equal((html.match(/Read note /g)||[]).length,Math.min(12,slugs.length-i*12));
  assert.ok(html.includes(`Page ${i+1} of ${pageCount}`));
  if(i===pageCount-1)assert.doesNotMatch(html,/rel="next"/);
 });
 assert.match(first,/rel="next"/);assert.match(first,/href="\/notes\/page\/2"/);
 assert.match(second,/rel="prev"/);
 assert.match(second,/rel="canonical" href="https:\/\/jamesgodwin.me\/notes\/page\/2"/);
 assert.match(second,/<title>Notes · Page 2/);
 assert.equal(fs.existsSync('dist/notes/page/1.html'),false);
 assert.equal(fs.existsSync(`dist/notes/page/${pageCount+1}.html`),false);
 assert.match(notes,/>Notes\.<\/h1>/);
 assert.equal((notes.match(/Read note /g)||[]).length,slugs.length);
 for(const file of ['dist/index.html','dist/essays.html','dist/essays/page/2.html'])assert.ok(fs.readFileSync(file,'utf8').includes('href="/notes"'));
 const sitemap=fs.readFileSync('dist/sitemap.xml','utf8'), guide=fs.readFileSync('dist/llms.txt','utf8');
 assert.ok(sitemap.includes('https://jamesgodwin.me/notes/page/2'));
 assert.ok(guide.includes('/notes/page/2'));
 const listed=[...notes.matchAll(/href="(\/notes\/[^"]+)"[^>]*>Read note/g)].map(match=>match[1]);
 assert.equal(new Set(listed).size,slugs.length);
 const dates=[...notes.matchAll(/<time datetime="([^"]+)"/g)].map(match=>Date.parse(match[1]));
 assert.equal(dates.length,slugs.length);
 assert.deepEqual(dates,[...dates].sort((a,b)=>b-a));
 for(const selection of noteSelections){
  const bytes=fs.readFileSync(`src/assets/notes/${selection.slug}.jpg`);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),selection.originalImageSha256);
 }
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
