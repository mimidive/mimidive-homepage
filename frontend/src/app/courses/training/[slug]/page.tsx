import { CoursePageView } from '@/components/CoursePageView';

const slugs: Record<string, string> = {
  depth: 'depth',
  indoor: 'indoor',
  nofin: 'nofin',
};

export default async function TrainingCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CoursePageView slug={slugs[slug] || slug} />;
}
