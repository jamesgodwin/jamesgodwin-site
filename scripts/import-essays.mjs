import path from 'node:path';
import { importEssays } from './lib/essay-import.mjs';
import { selections } from './essay-selection.mjs';
const sourceDir=process.argv[2];
if(!sourceDir)throw new Error('Usage: node scripts/import-essays.mjs <Source posts folder> [publication Log.md]');
const result=await importEssays({sourceDir:path.resolve(sourceDir),logPath:process.argv[3]?path.resolve(process.argv[3]):path.resolve(sourceDir,'../../Log.md'),outDir:path.resolve('src/content/essays'),selections});
console.log(JSON.stringify(result,null,2));
if(result.conflicts.length)process.exitCode=1;
