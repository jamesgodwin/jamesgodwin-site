import {test} from 'node:test';
import assert from 'node:assert/strict';
import {noteArchivePages} from '../src/note-pagination.js';

test('Notes pages preserve every note exactly once at twelve per page',()=>{
 for(const count of [0,1,12,13,20,24,25]){
  const notes=Array.from({length:count},(_,id)=>({id}));
  const pages=noteArchivePages(notes);
  assert.equal(pages.length,Math.max(1,Math.ceil(count/12)));
  assert.deepEqual(pages.flatMap(page=>page.notes),notes);
  pages.forEach((page,index)=>{
   assert.ok(page.notes.length<=12);
   assert.equal(page.path,index===0?'/notes':`/notes/page/${index+1}`);
   assert.equal(page.previous,index===0?undefined:index===1?'/notes':`/notes/page/${index}`);
   assert.equal(page.next,index===pages.length-1?undefined:`/notes/page/${index+2}`);
   assert.equal(page.start,count?index*12+1:0);
   assert.equal(page.end,Math.min((index+1)*12,count));
   assert.equal(page.totalNotes,count);
  });
 }
});
