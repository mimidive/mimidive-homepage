import type { Metadata } from 'next';
import { CoursePageView } from '@/components/CoursePageView';
import { courseMetadata } from '@/lib/seo';

const slugs = ['aida1', 'aida2', 'aida3', 'aida4', 'instructor'] as const;

type LevelSlug = (typeof slugs)[number];

function isLevelSlug(value: string): value is LevelSlug {
  return slugs.includes(value as LevelSlug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isLevelSlug(slug)) {
    return courseMetadata('aida1', `/courses/level/${slug}`);
  }

  return courseMetadata(slug, `/courses/level/${slug}`);
}

export default async function LevelCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CoursePageView slug={isLevelSlug(slug) ? slug : slug} />;
}
