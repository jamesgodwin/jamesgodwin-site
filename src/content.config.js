import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const essays=defineCollection({
 loader:glob({pattern:'**/*.md',base:'./src/content/essays'}),
 schema:({image})=>z.object({
  title:z.string(),date:z.coerce.date(),category:z.string(),lead:z.string(),cover:image(),coverAlt:z.string(),sourceUrl:z.string().url(),articleId:z.string(),draft:z.boolean().default(true),sourceHash:z.string().optional(),importedBodyHash:z.string().optional()
 })
});
export const collections={essays};
