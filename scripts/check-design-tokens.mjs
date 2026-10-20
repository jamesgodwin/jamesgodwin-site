import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import postcss from 'postcss';
import { patternRecipes } from '../src/design-system/patterns.js';
const ownedClasses = Object.values(patternRecipes).flatMap(recipes => Object.values(recipes).flatMap(recipe => recipe.class.split(' ')));
const appearance = /^(?:color|background.*|border.*|padding.*|font.*|line-height|letter-spacing|text-decoration.*|box-shadow|outline.*)$/;

const colours = /#[\da-f]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab|lab|lch|hwb|color)\s*\(|\b(?:white|black|blue|red|gray|grey)\b/i;
const typography = /^(?:font(?:-family|-size|-weight)?|line-height|letter-spacing)$/;
const shapes = /^(?:border(?:-(?:top|bottom)-(?:left|right))?-radius|box-shadow)$/;
const isKeyword = value => /^(?:inherit|initial|unset|revert|normal|none|0|transparent|currentColor)$/i.test(value);
const validReference = value => /^var\(--[\w-]+\)(?:\s*!important)?$/.test(value);

export function findDesignViolations(filename, source) {
 const findings=[];
 const add=(property,value,line=1)=>findings.push({file:filename,line,property,value});
 let blocks=[];
 if(filename.endsWith('.css')) blocks=[{text:source,offset:0}];
 else {
  blocks=[...source.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)].map(m=>({text:m[1],offset:source.slice(0,m.index).split('\n').length-1}));
  for(const m of source.matchAll(/\bstyle\s*=\s*["']([^"']+)["']/g)) blocks.push({text:`inline { ${m[1]} }`,offset:source.slice(0,m.index).split('\n').length-1});
 }
 for(const {text,offset} of blocks) {
  let root;
  try {root=postcss.parse(text);}catch {add('css','Unparseable CSS',offset+1);continue;}
  root.walkDecls(decl=>{
   const {prop,value}=decl;
   if(filename==='src/styles/tokens.css') {
    if(!prop.startsWith('--'))add(prop,'Token authority may only declare custom properties',decl.source.start.line+offset);
    return;
   }
   const selector=decl.parent.selector || '';
   const owned=ownedClasses.some(name=>selector.includes('.'+name)) || /\[data-ui[=\s]/.test(selector);
   if(filename !== 'src/styles/patterns.css' && owned && appearance.test(prop)) add('recipe-override', `${selector}: ${prop}`,decl.source.start.line+offset);
   const colourProperty=/^(?:color|background(?:-color)?|border(?:-(?:top|right|bottom|left))?-color|outline-color|fill|stroke)$/.test(prop);
   const rawColour=colours.test(value) || (colourProperty && !validReference(value) && !isKeyword(value) && !/^url\(/.test(value));
   const rawSpacing=/^(?:margin|padding|gap|row-gap|column-gap)/.test(prop) && /(?<![-\w])[-\d.]+(?:px|rem|em)\b/.test(value);
   const rawType=(typography.test(prop)||shapes.test(prop))&&!validReference(value)&&!isKeyword(value);
   if(prop.startsWith('--') || rawColour || rawType || rawSpacing)add(prop,value,decl.source.start.line+offset);
  });
 }
 if(!filename.endsWith('.css')) {
  // Inline strings/JSX style objects and literal colours must not become a second palette.
  const withoutStyles=source.replace(/<style\b[^>]*>[\s\S]*?<\/style>/g,'').replace(/\/\*[\s\S]*?\*\/|^\s*\/\/.*$/gm,'');
  for(const m of withoutStyles.matchAll(/#[\da-f]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab)\s*\(/gi)) add('colour',m[0],withoutStyles.slice(0,m.index).split('\n').length);
  for(const m of source.matchAll(/<(Action|TextLink|LinkCard|PageHero|ContentProse)\b[^>]*\b(?:class(?::list)?|style)\s*=/g))add('component-override',m[0],source.slice(0,m.index).split('\n').length);
 }
 return findings;
}

// Inventory pages do not make a token live: follow actual static references and
// every theme/media dependency so a later theme cannot lose its backing value.
export function findUnusedTokens(tokenSource, sources) {
 const definitions = new Map();
 postcss.parse(tokenSource).walkDecls(decl => {
  if (!decl.prop.startsWith('--')) return;
  definitions.set(decl.prop, [...(definitions.get(decl.prop) || []), decl.value]);
 });
 const references = value => [...value.matchAll(/var\((--[\w-]+)\s*[,)]/g)].map(match => match[1]);
 const live = new Set();
 const visit = name => {
  if (live.has(name)) return;
  live.add(name);
  for (const value of definitions.get(name) || []) references(value).forEach(visit);
 };
 sources.forEach(source => references(source).forEach(visit));
 return [...definitions.keys()].filter(name => !live.has(name));
}

export function checkDesign(root='src') {
 const files=[];
 const walk=dir=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else if(/\.(css|astro|js|ts)$/.test(p)&&!p.includes('.test.'))files.push(p);}};
 walk(root);
 const findings=files.flatMap(file=>findDesignViolations(file,fs.readFileSync(file,'utf8')));
 const definitions=new Set([...fs.readFileSync('src/styles/tokens.css','utf8').matchAll(/(--[\w-]+)\s*:/g)].map(m=>m[1]));
 for(const file of files)for(const match of fs.readFileSync(file,'utf8').matchAll(/var\((--[\w-]+)\s*[,)]/g))if(!definitions.has(match[1]))findings.push({file,line:1,property:'unknown-token',value:match[1]});
 for (const name of findUnusedTokens(fs.readFileSync('src/styles/tokens.css','utf8'), files.filter(file=>file!=='src/styles/tokens.css').map(file=>fs.readFileSync(file,'utf8')))) findings.push({file:'src/styles/tokens.css',line:1,property:'unused-token',value:name});
 return {files:files.length,findings};
}
if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href){
 const {files,findings}=checkDesign();
 for(const f of findings)console.error(`${f.file}:${f.line} ${f.property}: ${f.value}`);
 console.log(`Design check: ${files} source files, ${findings.length} violations.`);
 if(findings.length)process.exitCode=1;
}
