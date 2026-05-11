import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// LVPR — Las Vegas Pole Rentals
// Production site URL set to the current domain so the Astro build can replace
// the WordPress install in-place once DNS is switched.
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
    sitemap({
      // @astrojs/sitemap@3.2 has a known bug where a custom `serialize` callback
      // crashes when combined with top-level `lastmod`/`changefreq` (reduce on
      // undefined). Keep the config minimal — Google ignores `priority` and
      // `changefreq` in practice anyway.
      filter: (page) =>
        !page.includes('/draft/') &&
        !page.includes('/_theme-preview') &&
        !page.endsWith('/thanks/') &&
        !page.endsWith('/404/'),
    }),
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
