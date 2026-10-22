import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const essays=defineCollection({
 loader:glob({pattern:'**/*.md',base:'./src/content/essays'}),
 schema:({image})=>z.object({
  title:z.string(),date:z.coerce.date(),category:z.string(),lead:z.string(),cover:image(),coverAlt:z.string(),coverQuality:z.number().int().min(1).max(100).default(80),origin:z.enum(['linkedin','website']).default('linkedin'),sourceUrl:z.string().url().optional(),articleId:z.string(),draft:z.boolean().default(true),sourceHash:z.string().optional(),importedBodyHash:z.string().optional()
 }).superRefine((data,ctx)=>{
  if(data.origin==='linkedin'&&!data.sourceUrl)ctx.addIssue({code:'custom',path:['sourceUrl'],message:'Imported essays require their original source URL'});
  if(data.origin==='website'&&data.sourceUrl)ctx.addIssue({code:'custom',path:['sourceUrl'],message:'Website originals do not have an external original source'});
 })
});
const notes=defineCollection({
 loader:glob({pattern:'**/*.md',base:'./src/content/notes'}),
 schema:({image})=>z.object({
  title:z.string(),date:z.coerce.date(),updated:z.coerce.date(),category:z.string(),lead:z.string(),
  cover:image(),coverAlt:z.string(),coverQuality:z.number().int().min(1).max(100).default(75),
  sourceUrl:z.string().url(),postId:z.string(),draft:z.boolean().default(true),
  relatedWork:z.object({href:z.string().startsWith('/work/'),label:z.string()}).optional(),
  sourceHash:z.string(),importedBodyHash:z.string()
 })
});
export const collections={essays,notes};
