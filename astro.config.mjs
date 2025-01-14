import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    adapter: deno(),
    output: 'server',
    integrations: [tailwind()],
});
