import { defineCollection, z } from 'astro:content';

// LVPR has no blog at present. Schema kept so future posts can be added without
// re-running design-theme.
const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Las Vegas Pole Rentals'),
    tags: z.array(z.string()).default([]),
    heroImage: image().optional(),
    heroAlt: z.string().optional(),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().url().optional(),
    legacyUrl: z.string().optional(),
  }),
});

export const collections = { blog };
