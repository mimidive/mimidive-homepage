import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { programs } from '@/lib/content';

const categories = [
  { label: '처음이라면', value: '체험다이빙 · AIDA 1', icon: '🌿' },
  { label: '자격증 목표', value: 'AIDA 2-4', icon: '🪪' },
  { label: '기록과 자세 교정', value: '노핀 · 트레이닝', icon: '🏅' },
  { label: '프로 전환', value: '강사 과정', icon: '🧭' },
] as const;

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="당신의 목표에 맞춰 고르는 미미다이브 프로그램"
        description="처음 바다에 들어가는 날부터 강사가 되는 과정까지. 김혜미 트레이너의 기준으로 안전하고 선명하게 성장합니다."
        ctas={[
          { label: '내게 맞는 과정 상담하기', href: '/booking' },
          { label: '후기 먼저 보기', href: '/reviews', variant: 'secondary' },
        ]}
        compact
      />

      <section className="section-bridge bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {categories.map((item) => (
            <div key={item.label} className="content-card rounded-2xl p-5">
              <span className="text-3xl" aria-hidden>
                {item.icon}
              </span>
              <p className="mt-4 text-sm font-semibold text-coral-600">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Link
                key={program.slug}
                href={program.href}
                className="content-card group flex min-h-72 flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-coral-200 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full bg-coral-50 px-3 py-1 text-xs font-semibold text-coral-600">
                    {program.badge}
                  </span>
                </div>
                <div className="mt-7 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">{program.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                    {program.summary}
                  </p>
                </div>
                <span className="mt-7 text-sm font-semibold text-gray-400 transition group-hover:text-coral-600">
                    자세히 →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] bg-navy-800 text-white">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr]">
              <div className="p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-coral-200">
                  Included
                </p>
                <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
                  모든 과정은 수중 촬영과 개인 피드백을 중심으로 진행됩니다
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/68 md:text-base">
                  단순히 수심을 찍는 수업이 아니라, 어떤 동작이 나를 편하게 만들었는지 이해하는 수업입니다. 국가대표의 시선으로 자세, 호흡, 안전 루틴을 정리해 드립니다.
                </p>
                <Link
                  href="/booking"
                  className="cta-button mt-8 inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition"
                >
                  프로그램 상담 및 예약하기
                </Link>
              </div>
              <div className="photo-card min-h-80 rounded-none p-6">
                <div className="flex h-full flex-col justify-end rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white/75">Image Area</p>
                  <p className="mt-2 text-2xl font-semibold text-white">수중 자세 분석 이미지 배치</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card mt-8 rounded-2xl bg-coral-50 p-8 text-center md:p-10">
            <p className="text-base font-medium text-gray-900 md:text-lg">
              어떤 과정을 골라야 할지 모르겠다면, 현재 물 적응도와 여행 일정만 알려주세요.
            </p>
            <Link
              href="/booking"
              className="mt-6 inline-block text-sm font-semibold text-coral-700 transition hover:text-coral-600"
            >
              무료 상담으로 추천받기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
