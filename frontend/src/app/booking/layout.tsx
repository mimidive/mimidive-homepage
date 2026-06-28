import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.booking;

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
