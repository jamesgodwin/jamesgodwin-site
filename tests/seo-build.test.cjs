const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const origin='https://jamesgodwin.me';
const files=fs.readdirSync('dist',{recursive:true}).filter(file=>file.endsWith('.html'));
const read=file=>fs.readFileSync(path.join('dist',file),'utf8');
const tag=(html,name)=>html.match(new RegExp(`(?:name|property)="${name}" content="([^"]+)"`))?.[1];

test('sitemap lists every indexable canonical once and excludes redirects and utility pages',()=>{
 const xml=read('sitemap.xml');
 assert.match(xml,/xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/);
 const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
 assert.equal(urls.length,new Set(urls).size);
 const expected=[];
 for(const file of files){
  const html=read(file);
  if(file==='writing.html'||tag(html,'robots')?.includes('noindex'))continue;
  expected.push(html.match(/rel="canonical" href="([^"]+)"/)[1]);
 }
 assert.deepEqual(urls.sort(),expected.sort());
 for(const suffix of ['/writing','/workshop-enquiry','/thank-you','/404','/design-system/','/concept/'])assert.ok(!urls.includes(origin+suffix),suffix);
 assert.match(read('robots.txt'),/Sitemap: https:\/\/jamesgodwin.me\/sitemap.xml/);
 assert.doesNotMatch(read('robots.txt'),/Disallow:\s*\/\s*$/m);
});

test('page metadata, structured data and social images resolve in the production build',()=>{
 const titles=new Set();
 for(const file of files){
  if(file==='writing.html')continue;
  const html=read(file),title=html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title,file);assert.ok(!titles.has(title),`Duplicate title: ${file}`);titles.add(title);
  assert.ok(tag(html,'description'),file);
  // Each static story chapter has its own heading; all chapters remain readable
  // without JavaScript. Other routes have one main page heading.
  assert.equal((html.match(/<h1\b/g)||[]).length,file.startsWith('work/')?3:1,`Main/chapter headings: ${file}`);
  assert.match(html,/rel="canonical" href="https:\/\/jamesgodwin.me(?:\/[^"?#]*)?"/);
  for(const field of ['og:image','twitter:image']){
   const url=tag(html,field);assert.ok(url?.startsWith(origin+'/'),`${file}: ${field}`);
   assert.ok(fs.existsSync(path.join('dist',new URL(url).pathname)),`${file}: missing social image`);
  }
  assert.ok(tag(html,'og:image:alt'),file);
  assert.ok(Number(tag(html,'og:image:width'))>0,file);
  assert.ok(Number(tag(html,'og:image:height'))>0,file);
  for(const [,json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(json);
  assert.match(html,/"@type":"Person"/);assert.match(html,/"@type":"WebSite"/);
 }
});

test('rendered content imagery uses WebP or small vector icons, with alt text and intrinsic size',()=>{
 for(const file of files){
  for(const [img] of read(file).matchAll(/<img\b[^>]*>/g)){
   const src=img.match(/src="([^"]+)"/)?.[1];assert.ok(src?.startsWith('/'),`${file}: ${src}`);
   assert.match(img,/\balt(?:="[^"]*")?(?=[\s>])/,`${file}: alt`);
   assert.match(img,/\bwidth="\d+"/,`${file}: width`);assert.match(img,/\bheight="\d+"/,`${file}: height`);
   assert.match(src,/\.(webp|svg)$/i,`${file}: content format`);
   const stat=fs.statSync('dist'+src);
   assert.ok(stat.size<(src.endsWith('.svg')?20_000:150_000),`${file}: excessive image bytes ${src}`);
  }
 }
});

test('llms guide links only to existing public pages and keeps in-progress work explicit',()=>{
 const guide=read('llms.txt');assert.match(guide,/^# James Godwin\n/);assert.match(guide,/IIIMPACT/);assert.match(guide,/remains in progress/);
 for(const [,url] of guide.matchAll(/\]\((https:\/\/jamesgodwin.me[^)]+)\)/g)){
  const pathname=new URL(url).pathname;assert.ok(fs.existsSync('dist'+pathname+'.html')||fs.existsSync('dist'+pathname+'/index.html'),url);
 }
 assert.match(read('index.html'),/rel="describedby" href="\/llms.txt"/);
});
