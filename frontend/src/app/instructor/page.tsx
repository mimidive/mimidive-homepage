import Link from 'next/link';
import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.instructor;

export default function InstructorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Instructor</p>
      <h1 className="mt-2 text-3xl font-light text-white">강사소개</h1>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { title: '강사소개', href: '/instructor/intro', desc: '대표 강사 프로필' },
          { title: '교육 철학', href: '/instructor/philosophy', desc: 'Deep Blue의 교육 방향' },
          { title: '경력 및 신기록', href: '/instructor/achievement', desc: '경력과 기록' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="glass-card rounded-2xl p-8 transition hover:border-cyan-400/30"
          >
            <h2 className="text-lg font-medium text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-white/60">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
