import { getCollection } from 'astro:content';
export const publishedEssays=async()=> (await getCollection('essays',({data})=>!data.draft)).sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf());
export const essayPath=essay=>`/essays/${essay.id}`;
export const readingMinutes=essay=>Math.max(1,Math.ceil((essay.body||'').split(/\s+/).filter(Boolean).length/220));
export const displayDate=date=>new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(date);
