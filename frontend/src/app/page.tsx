import Link from 'next/link';
import { api } from '@/lib/api';
import type { Notice, Schedule } from '@/lib/types';

async function getRecentNotices(): Promise<Notice[]> {
  try {
    const notices = await api.notices.list();
    return notices.slice(0, 3);
  } catch {
    return [];
  }
}

async function getUpcomingSchedules(): Promise<Schedule[]> {
  try {
    const schedules = await api.schedules.list();
    return schedules.slice(0, 3);
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const [notices, schedules] = await Promise.all([
    getRecentNotices(),
    getUpcomingSchedules(),
  ]);

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        <div className="section-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Freediving Education
          </p>
          <h1 className="text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
            깊은 바다,
            <br />
            <span className="font-semibold text-cyan-300">새로운 자아</span>를 만나다
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            AIDA 공인 프리다이빙 교육. 체계적인 커리큘럼과 안전한 환경에서
            당신만의 수중 여정을 시작하세요.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-medium text-ocean-950 transition hover:bg-cyan-400"
            >
              교육 신청하기
            </Link>
            <Link
              href="/courses/intro-dive"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              체험다이빙 알아보기
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">About Us</p>
              <h2 className="mt-4 text-3xl font-light text-white md:text-4xl">
                바다와 호흡으로
                <br />
                연결되는 교육
              </h2>
              <p className="mt-6 leading-relaxed text-white/70">
                Deep Blue Freediving은 AIDA 국제 공인 커리큘럼을 기반으로
                안전하고 체계적인 프리다이빙 교육을 제공합니다. 입문자부터
                강사 과정까지, 각자의 페이스에 맞춘 맞춤형 프로그램을 운영합니다.
              </p>
              <Link
                href="/instructor/intro"
                className="mt-8 inline-block text-sm text-cyan-400 transition hover:text-cyan-300"
              >
                강사 소개 →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '500+', label: '수료생' },
                { num: 'AIDA', label: '공인 센터' },
                { num: '10+', label: '년 경력' },
                { num: '100%', label: '안전 우선' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                  <p className="text-2xl font-semibold text-cyan-400">{stat.num}</p>
                  <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-ocean-900/50 py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-cyan-400">
            Programs
          </p>
          <h2 className="mt-4 text-center text-3xl font-light text-white md:text-4xl">
            교육 프로그램
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                title: '레벨 교육',
                desc: 'AIDA 1~4 및 강사 과정',
                href: '/courses/level/aida1',
                image:
                  'https://images.unsplash.com/photo-1682687220062-717022bb589f?q=80&w=800&auto=format&fit=crop',
              },
              {
                title: '트레이닝',
                desc: '수심·인도어·노핀 집중 훈련',
                href: '/courses/training/depth',
                image:
                  'https://images.unsplash.com/photo-1544551763-77ef2d0cfb6b?q=80&w=800&auto=format&fit=crop',
              },
              {
                title: '체험다이빙',
                desc: '프리다이빙 첫 경험',
                href: '/courses/intro-dive',
                image:
                  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
              },
            ].map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group overflow-hidden rounded-2xl border border-white/10"
              >
                <div
                  className="h-48 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
                <div className="bg-ocean-950/80 p-6">
                  <h3 className="text-lg font-medium text-white">{program.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{program.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Schedule</p>
              <h2 className="mt-4 text-3xl font-light text-white">다가오는 일정</h2>
            </div>
            <Link href="/schedule" className="text-sm text-cyan-400 hover:text-cyan-300">
              전체 일정 →
            </Link>
          </div>
          <div className="mt-12 space-y-4">
            {schedules.length === 0 ? (
              <p className="text-white/50">등록된 일정이 없습니다.</p>
            ) : (
              schedules.map((s) => (
                <div key={s.id} className="glass-card flex items-center gap-6 rounded-xl p-6">
                  <div className="text-center">
                    <p className="text-2xl font-light text-cyan-400">
                      {new Date(s.date).getDate()}
                    </p>
                    <p className="text-xs text-white/50">
                      {new Date(s.date).toLocaleDateString('ko-KR', { month: 'short' })}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{s.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="notice" className="bg-ocean-900/50 py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Notice</p>
              <h2 className="mt-4 text-3xl font-light text-white">공지사항</h2>
            </div>
            <Link href="/notice" className="text-sm text-cyan-400 hover:text-cyan-300">
              더보기 →
            </Link>
          </div>
          <div className="mt-12 space-y-3">
            {notices.length === 0 ? (
              <p className="text-white/50">등록된 공지가 없습니다.</p>
            ) : (
              notices.map((n) => (
                <Link
                  key={n.id}
                  href={`/notice?id=${n.id}`}
                  className="glass-card block rounded-xl px-6 py-4 transition hover:border-cyan-400/30"
                >
                  <h3 className="font-medium text-white">{n.title}</h3>
                  <p className="mt-1 text-xs text-white/40">
                    {new Date(n.createdAt).toLocaleDateString('ko-KR')}
                  </p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative py-32"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="section-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-light text-white md:text-4xl">
            지금, 바다로의 여정을 시작하세요
          </h2>
          <p className="mt-4 text-white/70">
            교육 신청 후 24시간 내 연락드립니다.
          </p>
          <Link
            href="/apply"
            className="mt-8 inline-block rounded-full bg-cyan-500 px-10 py-3 text-sm font-medium text-ocean-950 transition hover:bg-cyan-400"
          >
            교육 신청
          </Link>
        </div>
      </section>
    </>
  );
}
