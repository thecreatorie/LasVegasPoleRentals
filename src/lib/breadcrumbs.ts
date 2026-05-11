import { siteConfig } from '../site.config';

/**
 * Build a schema.org BreadcrumbList for the current page.
 * Always starts with Home; adds intermediate crumbs if provided.
 */
export function breadcrumbList(crumbs: Array<{ name: string; path: string }>) {
  const items = [
    { name: 'Home', path: '/' },
    ...crumbs,
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.path, siteConfig.url).toString(),
    })),
  };
}
