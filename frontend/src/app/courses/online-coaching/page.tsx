import type { Metadata } from 'next';
import { CoursePageView } from '@/components/CoursePageView';
import { courseMetadata } from '@/lib/seo';

export const metadata: Metadata = courseMetadata('online-coaching', '/courses/online-coaching');

export default function OnlineCoachingPage() {
  return <CoursePageView slug="online-coaching" />;
}
