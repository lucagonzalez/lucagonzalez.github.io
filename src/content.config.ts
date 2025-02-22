import {glob} from 'astro/loaders';
import {defineCollection} from 'astro:content';
import {rssSchema} from "@astrojs/rss";

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({base: './src/content/blog', pattern: '**/*.{md,mdx}'}),
    // Type-check frontmatter using a schema
    schema: rssSchema,
});

export const collections = {blog};
