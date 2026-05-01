import { MetadataRoute } from 'next';
import { fetchPosts } from '@/lib/strapi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wordbiblicalministries.vercel.app';

  // Fetch blog posts for dynamic sitemap entries
  const posts = await fetchPosts().catch(() => []);
  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Static pages
  const staticPages = [
    '',
    '/about-wbm',
    '/about-afint',
    '/our-story',
    '/our-theology',
    '/ministries',
    '/give',
    '/contact',
    '/blog',
    '/digital-availability',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticPages, ...blogEntries];
}
