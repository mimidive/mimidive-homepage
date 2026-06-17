import { CoursePageView } from '@/components/CoursePageView';

const slugs: Record<string, string> = {
  aida1: 'aida1',
  aida2: 'aida2',
  aida3: 'aida3',
  aida4: 'aida4',
  instructor: 'instructor',
};

export default async function LevelCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CoursePageView slug={slugs[slug] || slug} />;
}
