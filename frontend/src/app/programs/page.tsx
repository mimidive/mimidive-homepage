import type { Metadata } from 'next';
import Link from 'next/link';
import { ProgramTabs } from '@/components/programs/ProgramTabs';
import { ReadableText } from '@/components/ui/ReadableText';
import { programsPage } from '@/lib/content';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.programs;

export default function ProgramsPage() {
  return (
    <section className="programs-page pb-20 md:pb-28">
      <div className="page-shell">
        <ProgramTabs />

        <div className="mt-8 rounded-[2rem] border border-[#5F7C8A]/12 bg-sky-50 px-6 py-8 text-center md:mt-10 md:p-12">
          <ReadableText
            text={programsPage.closingConsult}
            animate={false}
            className="mx-auto max-w-2xl text-base font-medium leading-8 text-gray-900 md:text-lg"
          />
          <Link
            href="/booking"
            className="cta-button mt-6 inline-flex w-full max-w-xs items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition md:mt-7 md:w-auto"
          >
            {programsPage.closingCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
