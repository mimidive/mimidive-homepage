import { api } from '@/lib/api';
import type { Course } from '@/lib/types';
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

export async function CoursePageView({ slug, fallbackTitle }: Props) {
  const course = await getCourse(slug);

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center lg:px-8">
        <h1 className="text-2xl text-white">{fallbackTitle || '교육 과정'}</h1>
        <p className="mt-4 text-white/60">과정 정보를 불러올 수 없습니다.</p>
        <Link href="/" className="mt-8 inline-block text-cyan-400">
          홈으로
        </Link>
      </div>
    );
  }

  return (
    <>
      <section
        className="relative flex min-h-[50vh] items-end bg-cover bg-center pb-16 pt-32"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        <div className="section-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          {course.level && (
            <span className="text-sm uppercase tracking-wider text-cyan-400">
              {course.level}
            </span>
          )}
          <h1 className="mt-2 text-4xl font-light text-white md:text-5xl">
            {course.title}
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-lg font-medium text-cyan-400">과정 소개</h2>
            <p className="mt-6 whitespace-pre-line leading-relaxed text-white/80">
              {course.description}
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-full bg-cyan-500 px-8 py-3 text-center text-sm font-medium text-ocean-950 transition hover:bg-cyan-400"
            >
              이 과정 신청하기
            </Link>
            <Link
              href="/schedule"
              className="rounded-full border border-white/20 px-8 py-3 text-center text-sm text-white transition hover:border-cyan-400"
            >
              일정 확인
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
