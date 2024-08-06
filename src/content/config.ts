import { z, defineCollection } from "astro:content";

export const collections = {
  sites: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      url: z.string(),
      priority: z.number(),
    }),
  }),
};
