import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
const hash=value=>createHash('sha256').update(value).digest('hex');
export function articleBody(source){
 const start=/^## Article\s*\n/m.exec(source);
 if(!start)throw new Error('No explicit Article section');
 const rest=source.slice(start.index+start[0].length);
 const end=/^## (?:Announcement Post|Private\b.*|Preflight|Image Hook|Image Prompt|Status|Title)\s*$/im.exec(rest);
 const body=(end?rest.slice(0,end.index):rest).trim();
 if(!body)throw new Error('Empty article body');
 return body+'\n';
}
function readEntry(source){
 const match=/^---\n([\s\S]*?)\n---\n\n?([\s\S]*)$/.exec(source);
 if(!match)throw new Error('Existing entry has no managed frontmatter');
 const data=Object.fromEntries(match[1].split('\n').map(line=>{const i=line.indexOf(':');return [line.slice(0,i),JSON.parse(line.slice(i+1).trim())];}));
 return {data,body:match[2].trim()+'\n'};
}
export async function importEssays({sourceDir,outDir,logPath,selections}){
 const [files,log]=await Promise.all([fs.readdir(sourceDir),fs.readFile(logPath,'utf8')]);
 await fs.mkdir(outDir,{recursive:true});
 const result={written:0,unchanged:0,conflicts:[],warnings:[]};
 for(const selection of selections){
  const {articleId,slug,sourceFile,replacements=[],...metadata}=selection;
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))throw new Error('Unsafe essay slug');
  if(sourceFile && (path.basename(sourceFile)!==sourceFile || sourceFile.includes('\\') || !sourceFile.endsWith('.md')))throw new Error('Unsafe source filename');
  const matches=files.filter(file=>file.endsWith('.md')&&(sourceFile?file===sourceFile:file.includes(articleId))&&!/announcement/i.test(file));
  if(matches.length!==1)throw new Error(`Expected one source for ${articleId}`);
  const source=await fs.readFile(path.join(sourceDir,matches[0]),'utf8');
  let body=articleBody(source);
  for(const [before,after] of replacements){
   if(body.includes(before))body=body.replace(before,after);
   else if(!body.includes(after))throw new Error(`Published-text reconciliation no longer matches ${articleId}`);
  }
  const row=log.split('\n').find(line=>line.split('|').map(cell=>cell.trim()).includes(articleId));
  const published=!!row&&row.split('|').some(cell=>/^(?:posted|published)$/.test(cell.trim()));
  if(published&&/not yet published/i.test(source.split('## Article')[0]))result.warnings.push(`${articleId}: publication Log overrides stale draft Status`);
  const data={...metadata,articleId,draft:!published,sourceHash:hash(source),importedBodyHash:hash(body)};
  const file=path.join(outDir,slug+'.md');
  let existing;
  try {existing=await fs.readFile(file,'utf8');}catch(error){if(error.code!=='ENOENT')throw error;}
  if(existing){
   let current;
   try {current=readEntry(existing);}catch {result.conflicts.push(`${slug}: existing entry is unmanaged`);continue;}
   if(hash(current.body)!==current.data.importedBodyHash){result.conflicts.push(`${slug}: locally edited body preserved`);continue;}
  }
  const next='---\n'+Object.entries(data).map(([key,value])=>`${key}: ${JSON.stringify(value)}`).join('\n')+'\n---\n\n'+body;
  if(existing===next){result.unchanged++;continue;}
  await fs.writeFile(file,next);result.written++;
 }
 return result;
}
