import type { Metadata } from 'next';
import { CoursePageView } from '@/components/CoursePageView';
import { courseDetails } from '@/lib/content';

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
    return { title: '스페셜 코스 | 미미다이브' };
  }

  const detail = courseDetails[slug];
  return {
    title: `${detail.title} | 미미다이브`,
    description: detail.description,
  };
}

export default async function SpecialCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CoursePageView slug={slug} fallbackTitle="스페셜 코스" />;
}
