import type { Metadata } from 'next';
import { CoursePageView } from '@/components/CoursePageView';
import { courseMetadata } from '@/lib/seo';

export const metadata: Metadata = courseMetadata('intro-dive', '/courses/intro-dive');

export default function IntroDivePage() {
  return <CoursePageView slug="intro-dive" />;
}
