const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
test('the site exposes four static stories and every content page uses the shared shell',()=>{
 for(const file of files('dist').filter(f=>/\.(?:html|js|json|xml)$/.test(f)))assert.doesNotMatch(fs.readFileSync(file,'utf8'),/SECRET_DRAFT_FIXTURE/,file);
 const home=fs.readFileSync('dist/index.html','utf8'),story=fs.readFileSync('dist/work/crew-scores.html','utf8');
 assert.match(home,/href="\/work\/crew-scores"/);assert.doesNotMatch(home,/Transcription stays local|\/concept\//);
 assert.match(home,/href="\/work\/quality-control"/);
 assert.match(home,/href="\/work\/tapscribe"/);
 const tapscribe=fs.readFileSync('dist/work/tapscribe.html','utf8');
 assert.match(tapscribe,/QuickTime/);assert.match(tapscribe,/Python/);assert.match(tapscribe,/My own product/);
 assert.doesNotMatch(tapscribe,/<input\b|<form\b|<video\b|<audio\b/);
 for(const chapter of ['the-situation','how-i-helped','what-changed'])assert.ok(tapscribe.includes(`id="${chapter}"`));
 assert.match(home,/href="\/work\/plumbline"/);
 const plumbline=fs.readFileSync('dist/work/plumbline.html','utf8');
 assert.match(plumbline,/With IIIMPACT/);assert.match(plumbline,/In progress/);assert.match(plumbline,/I Ching/);
 assert.doesNotMatch(plumbline,/<input\b|<form\b/);
 for(const chapter of ['the-situation','how-i-helped','what-changed'])assert.ok(plumbline.includes(`id="${chapter}"`));
 const qc=fs.readFileSync('dist/work/quality-control.html','utf8');
 assert.match(qc,/Same roofing client/);assert.doesNotMatch(qc,/<input\b|<form\b/);
 assert.doesNotMatch(story,/<input\b|<form\b|data-score-form|data-recovery-action/);
 for(const chapter of ['the-situation','how-i-helped','what-changed'])assert.ok(story.includes(`id="${chapter}"`));
 for(const file of files('dist').filter(f=>f.endsWith('.html')&&!f.endsWith('/writing.html'))){
  const html=fs.readFileSync(file,'utf8');assert.match(html,/data-design="case-study"/,file);assert.match(html,/class="concept-header"/,file);assert.match(html,/class="site-footer"/,file);assert.doesNotMatch(html,/SECRET_DRAFT_FIXTURE|Private editorial notes/,file);
  for(const [,href]of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){
   if(href.startsWith('//'))continue;
   const target=path.join('dist',decodeURIComponent(href));
   const candidates=[target,`${target}.html`,path.join(target,'index.html')];
   assert.ok(candidates.some(candidate=>fs.existsSync(candidate)&&fs.statSync(candidate).isFile()),`${file}: broken internal URL ${href}`);

  }
 }
});
