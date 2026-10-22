import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { selections } from './essay-selection.mjs';
test('selected essays render images, canonical metadata, article schema and original body only',()=>{
 const index=Array.from({length:Math.ceil(selections.length/12)},(_,i)=>fs.readFileSync(i===0?'dist/essays.html':`dist/essays/page/${i+1}.html`,'utf8')).join('');
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

test('essay archive paginates without omissions or duplicates and provides real navigation',()=>{
 const published=fs.readdirSync('src/content/essays').filter(name=>/^draft: false$/m.test(fs.readFileSync(`src/content/essays/${name}`,'utf8'))).map(name=>({slug:name.replace(/\.md$/,''),date:fs.readFileSync(`src/content/essays/${name}`,'utf8').match(/^date: "([^"]+)"/m)[1]})).sort((a,b)=>b.date.localeCompare(a.date));
 const totalPages=Math.ceil(published.length/12);
 let position=0;
 for(let number=1;number<=totalPages;number++){
  const file=number===1?'dist/essays.html':`dist/essays/page/${number}.html`;
  const html=fs.readFileSync(file,'utf8');
  const expected=published.slice((number-1)*12,number*12);
  const hasLink=(href,rel)=>[...html.matchAll(/<a\b[^>]*>/g)].some(([tag])=>tag.includes(`href="${href}"`)&&tag.includes(`rel="${rel}"`));
  assert.equal((html.match(/<article class="writing-(?:feature|card)"/g)||[]).length,expected.length);
  const path=number===1?'/essays':`/essays/page/${number}`;
  assert.ok(html.includes(`rel="canonical" href="https://jamesgodwin.me${path}"`));
  assert.ok(fs.readFileSync('dist/sitemap.xml','utf8').includes(`https://jamesgodwin.me${path}`));
  if(number>1){
   const prev=number===2?'/essays':`/essays/page/${number-1}`;
   assert.ok(hasLink(prev,'prev'));
  }else assert.doesNotMatch(html,/rel="prev"/);
  if(number<totalPages)assert.ok(hasLink(`/essays/page/${number+1}`,'next'));
  else assert.doesNotMatch(html,/rel="next"/);
  for(const item of published)assert.equal(html.includes(`/essays/${item.slug}`),expected.includes(item));
  for(const item of expected)assert.equal(item,published[position++]);
  assert.match(html,/>Essays\.<\/h1>/);
  assert.match(html,/aria-current="page"[^>]*>Essays<\/a>/);
 }
 assert.equal(position,published.length);
 assert.equal(fs.existsSync('dist/essays/page/1.html'),false);
 assert.equal(fs.existsSync(`dist/essays/page/${totalPages+1}.html`),false);
});
