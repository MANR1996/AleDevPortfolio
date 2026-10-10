import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ale-dev-portfolio.vercel.app',
  // lightningcss (default en Vite 8) fusiona `animation-timeline` dentro del
  // shorthand `animation`, lo que los navegadores descartan como CSS invalido
  // (rompe las scroll-driven animations en produccion). esbuild lo deja intacto.
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
  integrations: [astroI18next(), sitemap({
    filter: (page) => !page.includes('404'),
    serialize: (item) => {
      if (!item.url.endsWith('/')) {
        item.url += '/';
      }
      return item;
    },
  })],
});
