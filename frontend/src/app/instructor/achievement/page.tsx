import Link from 'next/link';
import { CompetitionHistory } from '@/components/instructor/CompetitionHistory';
import { PageHero } from '@/components/ui/PageHero';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  careerMilestones,
  competitionHistory,
  recordHighlights,
  trainerProfile,
} from '@/lib/content';
import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.instructorAchievement;

export default function AchievementPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievement"
        title="경력 및 신기록"
        description="국가대표 활동, 아시아·한국 신기록, 국제 대회 이력."
        ctas={[
          { label: '강사 소개', href: '/instructor/intro' },
          { label: '교육 문의', href: '/booking', variant: 'secondary' },
        ]}
        compact
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle title="주요 기록" description="대표 성과 요약입니다." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recordHighlights.map((item) => (
              <article key={item.label} className="content-card rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5F7C8A]">
                  {item.label}
                </p>
                <p className="mt-4 text-base font-semibold leading-8 text-[#1A1A1A] md:text-lg">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="경력 요약"
            description={`${trainerProfile.name} · ${trainerProfile.title}`}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careerMilestones.map((item) => (
              <article key={`${item.label}-${item.title}`} className="content-card rounded-[1.75rem] p-6">
                <p className="text-sm font-semibold tracking-[0.14em] text-[#5F7C8A]">
                  {item.label}
                </p>
                <h3 className="mt-4 text-lg font-semibold leading-8 tracking-[-0.03em] text-[#1A1A1A]">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle
            title="대회 활동 이력"
            description="연도별 국제·국내 대회 기록입니다."
          />
          <div className="mt-12">
            <CompetitionHistory years={competitionHistory} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Link
            href="/booking"
            className="cta-button inline-block rounded-full px-8 py-4 text-sm font-semibold transition"
          >
            교육 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
