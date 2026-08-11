import { defineCollection, z } from 'astro:content';

// Colección de artículos / actualidad de la federación.
// API de colecciones de Astro 4 (type: 'content', entry.slug, entry.render()).
const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['Federación', 'Erasmus+', 'Cooperación', 'Acción local', 'Participación', 'Solidaridad']),
    date: z.string().optional(),
    dates: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().default(99),
  }),
});

// Bitácora de proyectos: una entrada = una novedad de un proyecto en curso.
// Cada archivo .md se publica automáticamente en la página del proyecto,
// ordenado por fecha (más reciente arriba). Ver BITACORA.md.
const bitacora = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Slug del proyecto al que pertenece la entrada, p. ej. 'decide-con-informacion'.
    project: z.string(),
    // Fecha de la novedad en formato YYYY-MM-DD.
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Usa el formato YYYY-MM-DD'),
    kind: z
      .enum(['Hito', 'Actividad', 'Material', 'Centro', 'Evaluación', 'Difusión'])
      .default('Actividad'),
    phase: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    // Cifras destacadas de la novedad, p. ej. [{ label: 'Estudiantes', value: '48' }].
    metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    // draft: true → no se publica (útil para preparar una entrada con antelación).
    draft: z.boolean().default(false),
  }),
});

export const collections = { noticias, bitacora };
