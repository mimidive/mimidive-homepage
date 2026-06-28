import type { Metadata } from 'next';
import Link from 'next/link';
import { ProgramTabs } from '@/components/programs/ProgramTabs';
import { ReadableText } from '@/components/ui/ReadableText';
import { programsPage } from '@/lib/content';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.programs;

export default function ProgramsPage() {
  return (
    <section className="programs-page pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ProgramTabs />

        <div className="mt-8 rounded-[2rem] border border-[#5F7C8A]/12 bg-sky-50 p-9 text-center md:p-12">
          <ReadableText
            text={programsPage.closingConsult}
            animate={false}
            className="text-base font-medium leading-8 text-gray-900 md:text-lg"
          />
          <Link
            href="/booking"
            className="cta-button mt-7 inline-block rounded-full px-8 py-3.5 text-sm font-semibold transition"
          >
            {programsPage.closingCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
