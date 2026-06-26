import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const routes = ['/', '/programs', '/booking', '/instructor/intro', '/accommodation'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
