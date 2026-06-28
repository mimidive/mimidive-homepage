import Link from 'next/link';
import Image from 'next/image';
import { AchievementHighlights } from '@/components/instructor/AchievementHighlights';
import { CareerSection } from '@/components/instructor/CareerSection';
import { SocialLinks } from '@/components/marketing/SocialLinks';
import { ResponsiveText } from '@/components/ui/ResponsiveText';
import { InstructorIntroBio } from '@/components/instructor/InstructorIntroBio';
import { ReadableText } from '@/components/ui/ReadableText';
import { imageAlt, marketingImages, oceanImages } from '@/lib/marketing-images';
import { instructorIntroCopy } from '@/lib/responsiveCopy';
import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.instructorIntro;

export default function InstructorIntroPage() {
  const differentiators = [
    {
      number: '01',
      title: '개인별 수준 분석',
      body: `입문자는 물 적응부터,
자격 보유자는 정체 원인을 분석합니다.`,
    },
    {
      number: '02',
      title: '안전 우선 교육',
      body: `컨디션, 장비, 기상 상황,
수면 안전 요소를 먼저 확인합니다.`,
    },
    {
      number: '03',
      title: '체계적인 기술 지도',
      body: `호흡, 정렬, 이퀄라이징,
핀 테크닉, 멘탈 루틴을 수준에 맞게 지도합니다.`,
    },
    {
      number: '04',
      title: '지속적인 성장 관리',
      body: `교육 이후에도
훈련 방향과 개선점을 제공합니다.`,
    },
  ];

  const safetyPrinciples = [
    '수면 안전 기준 준수',
    '버디 시스템 운영',
    '단계별 교육 진행',
    '개인별 맞춤 훈련',
    '입문자부터 강사 과정까지 동일한 안전 기준 적용',
  ];

  return (
    <>
      <section className="py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div className="photo-card rounded-[2.25rem] p-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] ring-1 ring-white/60">
              <Image
                src={oceanImages.instructor}
                alt={imageAlt.instructor}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
              Instructor
            </p>
            <h1 className="mt-6 max-w-3xl">
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500 sm:text-sm md:text-base md:tracking-[0.18em]">
              AIDA · CMAS 대한민국 국가대표 선수
              </span>
              <span className="mt-5 block text-5xl font-extrabold leading-[0.959] tracking-[-0.0625em] text-zinc-900 md:mt-6 md:text-7xl">
                강사 트레이너
              </span>
              <span className="mt-2 block text-3xl font-extrabold leading-[1.02] tracking-[-0.055em] text-zinc-900 md:text-5xl">
                김혜미
              </span>
            </h1>
            <SocialLinks className="mt-6" align="start" />
            <p className="mt-7 text-xl font-semibold leading-8 text-zinc-800 md:text-2xl">
              <AchievementHighlights />
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="cta-button rounded-full px-8 py-4 text-center text-sm font-semibold transition"
              >
                교육 문의하기
              </Link>
              <Link
                href="/programs"
                className="rounded-full bg-white/40 px-8 py-4 text-center text-sm font-semibold text-zinc-800 shadow-sm ring-1 ring-white/60 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.018] hover:bg-white/70"
              >
                수업 안내 보기
              </Link>
            </div>
            <InstructorIntroBio />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-7xl font-extrabold leading-none tracking-[-0.08em] text-zinc-900/10 md:text-9xl">
            “
          </p>
          <h2 className="mx-auto -mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.06em] text-zinc-900 md:text-6xl">
            <ResponsiveText copy={instructorIntroCopy.quote} />
          </h2>
          <ReadableText
            text={`프리다이빙은 더 깊이 내려가는 스포츠이기도 하지만, 자신의 몸과 마음을 이해하는 과정이기도 합니다.\n\n미미다이브는 경쟁보다 성장, 결과보다 과정, 그리고 무엇보다 안전을 가장 중요하게 생각합니다.`}
            className="mx-auto mt-8 max-w-3xl"
            sentenceClassName="text-base leading-8 text-zinc-600 md:text-xl md:leading-10"
          />
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-[#5F7C8A]/12">
            <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
              <Image
                src={marketingImages.instructorEducationTraining}
                alt={imageAlt.instructorEducationTraining}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 35%' }}
                sizes="(max-width: 768px) 100vw, 80rem"
              />
            </div>
          </div>

          <div className="mt-12 max-w-3xl md:mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
              Education
            </p>
            <h2 className="mt-5 whitespace-nowrap text-[clamp(1.25rem,4.6vw,2.25rem)] font-extrabold leading-[1.02] tracking-[-0.06em] text-zinc-900 md:whitespace-normal md:text-6xl">
              왜 미미다이브의 교육이 다른가
            </h2>
          </div>
          <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <article
                key={item.number}
                className="content-card flex min-h-[18rem] flex-col rounded-3xl p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.012]"
              >
                <p className="text-xs font-semibold tracking-[0.24em] text-zinc-400">
                  {item.number}
                </p>
                <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em] text-zinc-900">
                  {item.title}
                </h3>
                <ReadableText
                  text={item.body}
                  className="mt-5"
                  gap="sm"
                  sentenceClassName="text-sm leading-7 text-zinc-600"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-[#5F7C8A]/12">
            <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
              <Image
                src={marketingImages.instructorCareerCompetition}
                alt={imageAlt.instructorCareerCompetition}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 42%' }}
                sizes="(max-width: 768px) 100vw, 80rem"
              />
            </div>
          </div>

          <div className="mt-12 max-w-3xl md:mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
              Career
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] text-zinc-900 md:text-6xl">
              경력 및 활동
            </h2>
          </div>
          <CareerSection />
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="content-card rounded-[2.5rem] p-8 md:p-12">
            <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] text-zinc-900 md:text-6xl">
              안전은 절대 타협하지 않습니다.
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {safetyPrinciples.map((item) => (
                <li key={item} className="flex gap-4 text-sm leading-7 text-zinc-700 md:text-base">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.07em] text-zinc-900 md:text-7xl">
            <ResponsiveText copy={instructorIntroCopy.closing} />
          </h2>
          <ReadableText
            text={`기록은 언제든 따라올 수 있습니다. 하지만 안전은 한 번도 타협할 수 없습니다.\n\n프리다이빙이 처음인 분부터, 선수와 강사를 목표로 하는 분까지. 안전하게 성장할 수 있도록 함께하겠습니다.`}
            className="mx-auto mt-10 max-w-2xl"
            sentenceClassName="text-base leading-8 text-zinc-600 md:text-lg md:leading-9"
          />
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/booking"
              className="cta-button rounded-full px-8 py-4 text-center text-sm font-semibold transition"
            >
              교육 문의하기
            </Link>
            <Link
              href="/programs"
              className="rounded-full bg-white/40 px-8 py-4 text-center text-sm font-semibold text-zinc-800 shadow-sm ring-1 ring-white/60 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.018] hover:bg-white/70"
            >
              수업 안내 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PageTemplate({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <section
        className="relative flex min-h-[40vh] items-end bg-cover bg-center pb-12 pt-32"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544551763-77ef2d0cfb6b?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        <div className="section-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-light text-white">{title}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {sections.map((s) => (
            <div key={s.heading} className="glass-card mb-8 rounded-2xl p-8 md:p-12">
              <h2 className="text-lg font-medium text-cyan-400">{s.heading}</h2>
              <ReadableText
                text={s.body}
                className="mt-6"
                sentenceClassName="leading-relaxed text-white/80"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export { PageTemplate };
