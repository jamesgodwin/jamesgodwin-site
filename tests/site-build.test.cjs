const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
test('the portfolio exposes project stories, preserves legacy stories and uses the shared shell',()=>{
 for(const file of files('dist').filter(f=>/\.(?:html|js|json|xml)$/.test(f)))assert.doesNotMatch(fs.readFileSync(file,'utf8'),/SECRET_DRAFT_FIXTURE/,file);
 const home=fs.readFileSync('dist/index.html','utf8'),story=fs.readFileSync('dist/work/roof-ops.html','utf8');
 assert.match(home,/href="\/work\/roof-ops"/);
 assert.match(home,/href="\/work\/tapscribe"/);
 assert.match(home,/data-app-count>01 \/ 22/);
 assert.doesNotMatch(home,/\/concept\//);
 const tapscribe=fs.readFileSync('dist/work/tapscribe.html','utf8');
 assert.match(tapscribe,/I wasn’t always the host/);assert.match(tapscribe,/Transcription stays on the Mac/);
 assert.doesNotMatch(tapscribe,/My own product/);
 assert.doesNotMatch(tapscribe,/<input\b|<form\b|<video\b|<audio\b/);
 const appNames=[...home.matchAll(/<button[^>]*data-app-select="\d+"[^>]*>([\s\S]*?)<\/button>/g)].map(m=>[...m[1].matchAll(/<strong>([^<]+)<\/strong>/g)].at(-1)?.[1]);
 assert.equal(appNames[0],'TapScribe');
 assert.deepEqual(appNames.slice(-9),['IIIMPACT','FROM Digital / Algoworks','SwiftVEE','PrivySeal','StraTech','JUMO','Lobster Ink','IMB','Star120']);
 assert.equal(fs.existsSync('dist/work/plumbline.html'),false);
 assert.doesNotMatch(fs.readFileSync('dist/sitemap.xml','utf8'),/plumbline/);
 for(const [route,destination] of [['work.html','/#work'],['work/crew-scores.html','/work/roof-ops'],['work/quality-control.html','/work/roof-ops'],['work/dan-tian.html','/dantian']]){
  const redirect=fs.readFileSync('dist/'+route,'utf8');
  assert.match(redirect,/name="robots" content="noindex"/);
  assert.ok(redirect.includes('0;url='+destination),route);
 }
 assert.match(home,/id="work"/);assert.match(home,/href="\/#work"/);assert.doesNotMatch(home,/plumbline/i);
 assert.match(home,/href="\/dantian"/);
 assert.match(fs.readFileSync('dist/dantian.html','utf8'),/rel="canonical" href="https:\/\/jamesgodwin.me\/dantian"/);
 for(const route of ['index','apps','taoism','philosophy','now','workshops'])assert.doesNotMatch(fs.readFileSync(`dist/${route}.html`,'utf8'),/href="\/work\/dan-tian"/);
 assert.match(story,/Beyond the first release/);
 for(const file of files('dist').filter(f=>f.endsWith('.html')&&!f.endsWith('/writing.html'))){
  const html=fs.readFileSync(file,'utf8');if(/<meta http-equiv="refresh"/.test(html))continue;assert.match(html,/data-design="case-study"/,file);assert.match(html,/class="concept-header"/,file);assert.match(html,/class="site-footer"/,file);assert.doesNotMatch(html,/SECRET_DRAFT_FIXTURE|Private editorial notes/,file);
  for(const [,href]of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){
   if(href.startsWith('//'))continue;
   const target=path.join('dist',decodeURIComponent(href));
   const candidates=[target,`${target}.html`,path.join(target,'index.html')];
   assert.ok(candidates.some(candidate=>fs.existsSync(candidate)&&fs.statSync(candidate).isFile()),`${file}: broken internal URL ${href}`);

  }
 }
});
