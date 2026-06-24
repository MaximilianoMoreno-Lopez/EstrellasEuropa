import { defineCollection, z } from 'astro:content';

// Colección de artículos / actualidad de la federación.
// API de colecciones de Astro 4 (type: 'content', entry.slug, entry.render()).
const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['Federación', 'Erasmus+', 'Cooperación', 'Acción local', 'Participación']),
    date: z.string().optional(),
    dates: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { noticias };
