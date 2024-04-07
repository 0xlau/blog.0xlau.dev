import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { THEME_CONFIG } from "./src/theme.config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import linkPreview from "astro-link-preview"

// https://astro.build/config
export default defineConfig({
  site: THEME_CONFIG.website,
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      langs: [],
      wrap: true,
    },
  },
  integrations: [
    linkPreview(),
    UnoCSS({
      injectReset: true,
    }),
    robotsTxt(),
    sitemap(),
  ],
});
