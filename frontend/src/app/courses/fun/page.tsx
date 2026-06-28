import type { Metadata } from 'next';
import { CoursePageView } from '@/components/CoursePageView';
import { courseMetadata } from '@/lib/seo';

export const metadata: Metadata = courseMetadata('fun', '/courses/fun');

export default function FunDivePage() {
  return <CoursePageView slug="fun" />;
}
