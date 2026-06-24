import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  BRAND,
  stats,
  coreBenefits,
  featuredReview,
  proofCards,
  conversionCards,
  caseStudies,
  instructorTimeline,
  programs,
} from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <section className="ocean-hero border-b border-navy-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy-600">
              Mimi Dive · Jeju Premium Freediving
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-gray-900 md:text-6xl">
              {BRAND.tagline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              {BRAND.subTagline}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {conversionCards.map((item) => (
                <div key={item.concern} className="rounded-2xl border border-white/70 bg-white/72 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-coral-600">{item.concern}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="cta-button rounded-full px-8 py-4 text-center text-sm font-semibold text-white transition"
              >
                무료 상담으로 내 과정 찾기
              </Link>
              <Link
                href="/programs"
                className="rounded-full border border-navy-200 bg-white/75 px-8 py-4 text-center text-sm font-semibold text-gray-900 transition hover:border-navy-600 hover:text-navy-600"
              >
                프로그램 먼저 보기
              </Link>
            </div>
          </div>

          <div className="photo-card relative rounded-[2rem] p-5 text-white md:p-7">
            <div className="absolute right-6 top-6 rounded-full bg-white/18 px-4 py-2 text-xs font-semibold backdrop-blur">
              11년 무사고 교육
            </div>
            <div className="flex min-h-[28rem] flex-col justify-end rounded-[1.5rem] border border-white/25 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Image Area
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
                제주 바다에서 배우는 첫 호흡
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                실제 사이트에서는 김혜미 강사의 수중 교육 사진, 법환포구 바다, 수강생 Before/After 이미지를 이 영역에 배치하면 전환 신뢰가 크게 올라갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bridge bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="모호한 약속 대신, 숫자로 먼저 안심시키는 센터"
            description="방문자가 가장 먼저 확인하는 것은 실력과 안전입니다. 미미다이브는 둘 다 기록으로 보여줍니다."
            align="center"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card rounded-2xl p-6 md:p-8">
                <p className="text-3xl font-bold text-coral-600 md:text-4xl">{stat.value}</p>
                <p className="mt-3 text-sm font-semibold text-gray-900">{stat.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="왜 제주에서 미미다이브를 선택할까요?"
            description="처음 배우는 사람에게는 편안함을, 이미 배운 사람에게는 정체기를 넘는 정확한 피드백을 제공합니다."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proofCards.map((card) => (
              <article key={card.title} className="content-card rounded-2xl p-6">
                <span className="text-3xl" aria-hidden>
                  {card.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{card.body}</p>
              </article>
            ))}
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {coreBenefits.map((benefit, index) => (
              <li key={benefit} className="flex gap-4 rounded-2xl bg-navy-50 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-gray-700 md:text-base">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wave-section border-y border-navy-100 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <p className="text-5xl font-serif leading-none text-coral-500/40">&ldquo;</p>
          <blockquote className="text-xl font-medium leading-relaxed text-gray-900 md:text-2xl">
            {featuredReview.quote}
          </blockquote>
          <p className="mt-6 text-sm font-medium text-gray-500">{featuredReview.author}</p>
          <Link
            href="/reviews"
            className="mt-10 inline-block text-sm font-semibold text-coral-600 transition hover:text-coral-700"
          >
            더 많은 수강 후기 보기 →
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="실제로 이렇게 달라집니다"
            description="막연한 '잘 가르칩니다' 대신 수강 전후의 문제와 해결 과정을 보여드립니다."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="content-card rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
                  Before / After
                </p>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{study.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{study.client}</p>
                <div className="mt-6 space-y-3 text-sm leading-relaxed">
                  <p className="rounded-xl bg-sand-50 p-4 text-gray-700">{study.before}</p>
                  <p className="rounded-xl bg-navy-50 p-4 text-gray-700">{study.solution}</p>
                  <p className="rounded-xl bg-coral-50 p-4 font-medium text-gray-900">{study.after}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-coral-200">
              Premium Story
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              김혜미 강사의 기록은 수업에서 더 부드러운 확신이 됩니다
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/68">
              2016년 첫 호흡부터 국가대표, 아시아 신기록, 그리고 제주 교육 활동까지. 미미다이브는 선수의 기준을 초보자도 이해할 수 있는 언어로 바꾸는 곳입니다.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-coral-200 hover:text-coral-200"
            >
              대표 스토리 자세히 보기
            </Link>
          </div>
          <div className="space-y-4">
            {instructorTimeline.map((item) => (
              <div key={`${item.year}-${item.title}`} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold text-coral-200">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/64">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <SectionTitle
            title="당신에게 맞는 바다의 깊이를 고르세요"
            description="입문, 자격증, 노핀, 강사 과정까지 목표에 맞춰 시작할 수 있습니다."
            align="center"
          />
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">
            {programs.slice(0, 5).map((program) => (
              <Link key={program.slug} href={program.href} className="content-card rounded-2xl p-5 transition hover:-translate-y-1 hover:border-coral-200">
                <p className="text-xs font-semibold text-coral-600">{program.badge}</p>
                <h3 className="mt-2 text-base font-semibold text-gray-900">{program.title}</h3>
              </Link>
            ))}
          </div>
          <Link
            href="/booking"
            className="cta-button mt-10 inline-block rounded-full px-10 py-4 text-sm font-semibold text-white transition"
          >
            지금 국가대표와 무료 상담하기 →
          </Link>
        </div>
      </section>
    </>
  );
}
