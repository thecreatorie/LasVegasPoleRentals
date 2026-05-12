import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

// LVPR — Las Vegas Pole Rentals
// Production site URL set to the current domain so the Astro build can replace
// the WordPress install in-place once DNS is switched.
//
// Sitemap is served statically from public/sitemap.xml. The @astrojs/sitemap
// plugin crashes on the redirects: config below in 3.x; for a 6-page site a
// hand-maintained sitemap is simpler than chasing the plugin bug.

export default defineConfig({
  site: 'https://lasvegaspolerentals.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    compress({
      HTML: true,
      CSS: true,
      JavaScript: true,
      Image: false,
      SVG: true,
    }),
  ],
  // 301-equivalent redirects (Astro emits static refresh pages with canonical
  // pointing to the destination — Google honors these as 301-equivalent on
  // static hosts like GitHub Pages).
  redirects: {
    '/rentapole/': '/rent-a-pole/',
    '/checkout/': '/',
    '/my-cart/': '/',
    '/my-account/': '/',
  },
});
