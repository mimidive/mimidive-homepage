import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.notice;

export default function NoticeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
