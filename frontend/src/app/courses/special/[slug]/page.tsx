import type { Metadata } from 'next';
import { CoursePageView } from '@/components/CoursePageView';
import { courseMetadata } from '@/lib/seo';

const slugs = ['long-stay-package', 'membership'] as const;

type SpecialSlug = (typeof slugs)[number];

function isSpecialSlug(value: string): value is SpecialSlug {
  return slugs.includes(value as SpecialSlug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isSpecialSlug(slug)) {
    return courseMetadata('long-stay-package', `/courses/special/${slug}`);
  }

  return courseMetadata(slug, `/courses/special/${slug}`);
}

export default async function SpecialCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CoursePageView slug={slug} fallbackTitle="스페셜 코스" />;
}
