import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { importEssays } from './lib/essay-import.mjs';

test('selected published body imports verbatim, excludes editorial sections and is stable on repeat', async t=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'essay-import-'));
 t.after(()=>fs.rm(root,{recursive:true,force:true}));
 const sourceDir=path.join(root,'source'),outDir=path.join(root,'out');await fs.mkdir(sourceDir);
 await fs.writeFile(path.join(sourceDir,'ARTICLE-TEST.md'),'## Status\n\nNot yet published.\n\n## Article\n\nMy actual words.\n\nAnother paragraph.\n\n## Private editorial notes\n\nSECRET EDITORIAL MATERIAL');
 const logPath=path.join(root,'Log.md');await fs.writeFile(logPath,'| ARTICLE-TEST | 2026-01-01 | posted |');
 const selections=[{articleId:'ARTICLE-TEST',slug:'my-words',title:'My words',date:'2026-01-01',cover:'../../assets/cover.png',coverAlt:'Cover',category:'Work',sourceUrl:'https://example.com/article',lead:'My actual words.'}];
 const first=await importEssays({sourceDir,outDir,logPath,selections});assert.equal(first.written,1);
 const original=await fs.readFile(path.join(outDir,'my-words.md'),'utf8');
 assert.match(original,/My actual words\.\n\nAnother paragraph\./);assert.doesNotMatch(original,/SECRET|Not yet published/);
 const second=await importEssays({sourceDir,outDir,logPath,selections});assert.equal(second.unchanged,1);
 assert.equal(await fs.readFile(path.join(outDir,'my-words.md'),'utf8'),original);
});

test('a source change cannot overwrite a locally edited body, and unconfirmed entries stay draft', async t=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'essay-conflict-'));
 t.after(()=>fs.rm(root,{recursive:true,force:true}));
 const sourceDir=path.join(root,'source'),outDir=path.join(root,'out');await fs.mkdir(sourceDir);
 const source=path.join(sourceDir,'ARTICLE-TEST.md'),logPath=path.join(root,'Log.md');
 await fs.writeFile(source,'## Article\n\nOriginal words.\n\n## Announcement Post\n\nPRIVATE ANNOUNCEMENT');await fs.writeFile(logPath,'No confirmed publication');
 const selections=[{articleId:'ARTICLE-TEST',slug:'my-words',title:'My words',date:'2026-01-01',cover:'../../assets/cover.png',coverAlt:'Cover',category:'Work',sourceUrl:'https://example.com/article',lead:'Original words.'}];
 await importEssays({sourceDir,outDir,logPath,selections});
 const file=path.join(outDir,'my-words.md');let value=await fs.readFile(file,'utf8');assert.match(value,/draft: true/);assert.doesNotMatch(value,/PRIVATE ANNOUNCEMENT/);
 await fs.writeFile(logPath,'| ARTICLE-TEST | posted |');await importEssays({sourceDir,outDir,logPath,selections});
 value=await fs.readFile(file,'utf8');assert.match(value,/draft: false/);
 const edited=value.replace('Original words.\n','My local revision.\n');await fs.writeFile(file,edited);await fs.writeFile(source,'## Article\n\nChanged source words.');
 const result=await importEssays({sourceDir,outDir,logPath,selections});assert.equal(result.conflicts.length,1);assert.equal(await fs.readFile(file,'utf8'),edited);
});
