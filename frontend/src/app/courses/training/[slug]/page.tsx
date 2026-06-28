import type { Metadata } from 'next';
import { CoursePageView } from '@/components/CoursePageView';
import { courseMetadata } from '@/lib/seo';

const slugs: Record<string, 'depth' | 'indoor' | 'nofin'> = {
  depth: 'depth',
  indoor: 'indoor',
  nofin: 'nofin',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const courseSlug = slugs[slug] ?? 'depth';
  return courseMetadata(courseSlug, `/courses/training/${slug}`);
}

export default async function TrainingCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CoursePageView slug={slugs[slug] || slug} />;
}
