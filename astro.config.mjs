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
      changefreq: 'weekly',
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/draft/') &&
        !page.includes('/_theme-preview') &&
        !page.endsWith('/thanks/') &&
        !page.endsWith('/404/'),
      serialize: (item) => {
        const path = new URL(item.url).pathname;
        // Homepage = top priority, weekly
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Main conversion page
        else if (path === '/rent-a-pole/') {
          item.priority = 0.95;
          item.changefreq = 'weekly';
        }
        // Trust + contact pages
        else if (path === '/contact/' || path === '/testimonials/') {
          item.priority = 0.85;
          item.changefreq = 'monthly';
        }
        // Reference pages
        else if (path === '/faqs/' || path === '/view-photos/') {
          item.priority = 0.75;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
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
