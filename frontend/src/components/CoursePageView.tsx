import { IntroDiveLevelUpsell } from '@/components/marketing/IntroDiveLevelUpsell';
import { api } from '@/lib/api';
import type { Course } from '@/lib/types';
import { courseDetails, funDiveTarget, programs } from '@/lib/content';
import { ReadableText } from '@/components/ui/ReadableText';
import Link from 'next/link';

interface Props {
  slug: string;
  fallbackTitle?: string;
}

async function getCourse(slug: string): Promise<Course | null> {
  try {
    return await api.courses.getBySlug(slug);
  } catch {
    return null;
  }
}

function getStaticCourse(slug: string) {
  const detail = courseDetails[slug as keyof typeof courseDetails];
  const program = programs.find((item) => item.slug === slug || item.href.endsWith(`/${slug}`));

  if (!detail && !program) return null;

  return {
    slug,
    title: detail?.title ?? program?.title ?? '교육 프로그램',
    level: detail?.level,
    description: detail?.description ?? program?.summary ?? '',
    detail,
  };
}

function TargetContent({ target }: { target: string }) {
  const lines = target
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length > 1) {
    return (
      <ul className="mt-3 space-y-3">
        {lines.map((line) => (
          <li
            key={line}
            className="flex gap-3 text-sm leading-7 text-gray-700 md:text-base md:leading-8"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ReadableText
      text={target}
      className="mt-3"
      gap="sm"
      sentenceClassName="text-sm leading-7 text-gray-700 md:text-base md:leading-8"
    />
  );
}

export async function CoursePageView({ slug, fallbackTitle }: Props) {
  const apiCourse = await getCourse(slug);
  const staticCourse = getStaticCourse(slug);
  const course = apiCourse
    ? {
        slug,
        title: apiCourse.title,
        level: apiCourse.level,
        description: apiCourse.description,
        detail: staticCourse?.detail,
      }
    : staticCourse;

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-28 text-center lg:px-8">
        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-gray-900">{fallbackTitle || '교육 프로그램'}</h1>
        <p className="mt-5 leading-8 text-gray-600">과정 정보를 불러올 수 없습니다.</p>
        <Link href="/programs" className="mt-9 inline-block text-sm font-semibold text-sky-700">
          교육 과정
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="ocean-hero py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {course.level && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">
              {course.level}
            </span>
          )}
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-gray-900 md:text-6xl">{course.title}</h1>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="content-card rounded-[2rem] p-8 md:p-12">
            <h2 className="text-lg font-semibold text-sky-700">과정 안내</h2>
            <ReadableText
              text={course.description}
              className="mt-7"
              sentenceClassName="leading-8 text-gray-700 md:text-lg md:leading-9"
            />
          </div>
          {course.detail && (
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              <div
                className={`content-card rounded-[1.5rem] p-6 md:col-span-2 ${
                  slug === 'fun' ? 'order-3 md:col-span-4' : ''
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Price
                </p>
                <p className="mt-3 text-lg font-semibold text-gray-900">{course.detail.price}</p>
                {'priceNote' in course.detail && course.detail.priceNote && (
                  <p className="mt-2 text-xs leading-5 text-gray-500">{course.detail.priceNote}</p>
                )}
              </div>
              <div
                className={`content-card rounded-[1.5rem] p-6 ${slug === 'fun' ? 'order-1' : ''}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Duration
                </p>
                <p className="mt-3 text-sm font-semibold text-gray-900">{course.detail.duration}</p>
              </div>
              <div
                className={`content-card rounded-[1.5rem] p-6 md:col-span-4 ${
                  slug === 'fun' ? 'order-2' : ''
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Target
                </p>
                <TargetContent
                  target={slug === 'fun' ? funDiveTarget.target : course.detail.target}
                />
                {slug === 'fun' && (
                  <div className="mt-5">
                    <p className="text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                      {funDiveTarget.note}
                    </p>
                    <Link
                      href={funDiveTarget.levelCta.href}
                      className="mt-4 inline-block text-sm font-semibold text-[#5F7C8A] underline decoration-[#5F7C8A]/35 underline-offset-8 transition hover:text-[#4f6e7c]"
                    >
                      {funDiveTarget.levelCta.label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
          {course.detail && (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {slug !== 'fun' && (
                <DetailList title="커리큘럼" items={course.detail.curriculum} />
              )}
              <DetailList title="포함 사항" items={course.detail.includes} />
              {slug === 'fun' && 'excludes' in course.detail && course.detail.excludes && (
                <DetailList title="불포함 사항" items={course.detail.excludes} />
              )}
            </div>
          )}
          {slug === 'intro-dive' && <IntroDiveLevelUpsell />}
          {slug === 'fun' && (
            <section className="mt-8 rounded-[1.5rem] border border-[#5F7C8A]/10 bg-[#FAFAF8] p-6 md:p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                자주 묻는 질문
              </h2>
              <div className="mt-6 space-y-3">
                {funDiveTarget.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-[#5F7C8A]/10 bg-white/60"
                  >
                    <summary className="cursor-pointer list-none px-5 py-4 md:px-6 md:py-5">
                      <span className="flex items-start justify-between gap-4">
                        <span className="text-sm font-semibold leading-7 text-gray-900 md:text-base">
                          {faq.question}
                        </span>
                        <span className="shrink-0 text-[#5F7C8A] transition group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <div className="border-t border-[#5F7C8A]/10 px-5 pb-4 pt-3 md:px-6 md:pb-5">
                      <ReadableText
                        text={faq.answer}
                        gap="sm"
                        sentenceClassName="text-sm leading-7 text-gray-600 md:text-base md:leading-8"
                      />
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
          {slug !== 'fun' && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="cta-button rounded-full px-8 py-4 text-center text-sm font-semibold transition"
            >
              교육 문의
            </Link>
            <Link
              href="/programs"
              className="rounded-full bg-white/40 px-8 py-4 text-center text-sm font-semibold text-zinc-800 shadow-sm ring-1 ring-white/60 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.018] hover:bg-white/70"
            >
              다른 과정 보기
            </Link>
          </div>
          )}
        </div>
      </section>
    </>
  );
}

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="content-card rounded-[1.5rem] p-6">
      <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-gray-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
