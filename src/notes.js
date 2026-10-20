import { getCollection } from 'astro:content';
export const publishedNotes=async()=> (await getCollection('notes',({data})=>!data.draft)).sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf());
export const notePath=note=>`/notes/${note.id}`;
