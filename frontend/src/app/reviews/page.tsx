import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { caseStudies, testimonials } from '@/lib/content';

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="수강생이 직접 말하는 미미다이브의 변화"
        description="물 공포, 이퀄라이징 정체, 강사 과정 준비까지. 실제 문제가 어떻게 해결되는지 확인하세요."
        ctas={[
          { label: '나도 상담받기', href: '/booking' },
          { label: '프로그램 보기', href: '/programs', variant: 'secondary' },
        ]}
        compact
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Before & After 사례"
            description="사람은 변화가 보일 때 움직입니다. 미미다이브는 수강 전 문제, 제공한 솔루션, 수강 후 결과를 구체적으로 보여드립니다."
          />
          <div className="mt-12 space-y-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="content-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{study.client}</p>
                  </div>
                  <span className="rounded-full bg-coral-50 px-4 py-2 text-xs font-semibold text-coral-600">
                    실제 교육 시나리오
                  </span>
                </div>
                <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
                  <div className="rounded-xl bg-sand-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Before
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
                      {study.before}
                    </p>
                  </div>
                  <div className="rounded-xl border border-navy-100 bg-navy-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">
                      Solution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
                      {study.solution}
                    </p>
                  </div>
                  <div className="rounded-xl border border-coral-200 bg-coral-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">
                      After
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-900 md:text-base">
                      {study.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="고객이 남긴 가장 솔직한 문장"
            description="회사 소개보다 강한 것은 같은 고민을 했던 사람이 남긴 말입니다."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="content-card rounded-2xl p-8">
                <p className="text-4xl font-serif leading-none text-coral-500/30">&ldquo;</p>
                <p className="mt-2 text-base leading-relaxed text-gray-800 md:text-lg">
                  {item.quote}
                </p>
                <footer className="mt-6 text-sm font-medium text-gray-500">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl">
            다음 후기는 당신의 첫 호흡에서 시작될 수 있습니다
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            수영을 못해도, 장비가 없어도, 혼자 와도 괜찮습니다. 지금 상태에 맞는 가장 안전한 시작점을 안내해 드립니다.
          </p>
          <Link
            href="/booking"
            className="cta-button mt-8 inline-block rounded-full px-10 py-4 text-sm font-semibold text-white transition"
          >
            무료 상담 및 예약하기
          </Link>
        </div>
      </section>
    </>
  );
}
