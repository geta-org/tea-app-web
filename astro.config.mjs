import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercelStatic from "@astrojs/vercel/static";
// https://astro.build/config
export default defineConfig({
  site: "https://tea-app.geta.omnicesupa.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
  ],
  output: "server",
  adapter: vercelStatic(),
});