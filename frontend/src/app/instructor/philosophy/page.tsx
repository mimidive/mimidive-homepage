import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';
import PhilosophyPage from './PhilosophyContent';

export const metadata: Metadata = staticPageMetadata.instructorPhilosophy;

export default PhilosophyPage;
