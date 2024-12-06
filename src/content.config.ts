import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const collections = {
  sites: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "data/sites" }),
    schema: z.object({
      title: z.string(),
      url: z.string(),
      priority: z.number(),
    }),
  }),
};
