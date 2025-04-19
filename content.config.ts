import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    product: defineCollection({
      type: 'page',
      source: 'products/**.md',
      schema: z.object({
        title: z.string(),
        body: z.object({}),
        isNew: z.boolean(),
        visible: z.boolean(),
        price: z.number().min(0, 'il prezzo deve essere maggiore di Zero'),
        variants: z.object({ variation: z.string(), price: z.number() }),
        tags:z.string().array(),
        category: z.string(),
        alergens: z.string().array(),
        images: z.string(),
        order: z.number(),
      }),
    }),
    categories: defineCollection({
      type: 'data',
      source: 'categories/**.md',
      schema: z.object({
        title: z.string(),
        body: z.object({}),
        slug: z.string(),
        featured: z.boolean(),
        visible: z.boolean(),
        images: z.boolean(),
        bgColor: z.string(),
        textColor: z.string(),
        order: z.number(),
      }),
    }),
  },
})
