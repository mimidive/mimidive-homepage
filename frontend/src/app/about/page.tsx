import { PageHero } from '@/components/ui/PageHero';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { instructorTimeline, proofCards, trainerProfile } from '@/lib/content';

const brandStory = {
  title: '기록을 세운 방식으로, 당신의 첫 바다를 더 안전하게 만듭니다.',
  body: `안녕하세요. 미미다이브 대표 강사 김혜미입니다.

저는 대한민국 노핀 국가대표 선수로 대회에 출전하며 아시아 신기록과 한국 신기록 11회를 만들었습니다. 하지만 미미다이브에서 가장 중요하게 여기는 것은 더 깊이 내려가는 기록보다, 물속에서 스스로를 믿을 수 있게 되는 감각입니다.

처음 배우는 분에게는 두려움이 사라지는 순서를, 이미 배운 분에게는 정체기를 넘는 정확한 원인을 알려드립니다. 제주 바다는 아름답지만 매일 다릅니다. 그래서 미미다이브는 컨디션, 기상, 장비, 수면 안전을 먼저 확인하고 그날 가능한 가장 좋은 경험을 설계합니다.

기록은 강사의 자랑으로 끝나면 의미가 없습니다. 저는 그 기록을 만든 호흡, 정렬, 이퀄라이징, 멘탈 루틴을 수강생의 언어로 바꾸어 전달합니다. 당신의 바다가 오래 즐거울 수 있도록, 첫 순간부터 제대로 안내하겠습니다.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mimi Dive"
        title="김혜미 강사가 직접 이끄는 제주 프리미엄 프리다이빙 센터"
        description="대한민국 노핀 국가대표, 아시아 신기록 보유자, AIDA Instructor Trainer. 미미다이브는 기록보다 안전을 먼저 가르치는 곳입니다."
        ctas={[
          { label: '무료 상담 신청하기', href: '/booking' },
          { label: '프로그램 보기', href: '/programs', variant: 'secondary' },
        ]}
        compact
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div className="photo-card sticky top-24 rounded-[2rem] p-6 text-white">
            <div className="flex min-h-96 flex-col justify-between rounded-[1.5rem] border border-white/25 bg-white/10 p-6 backdrop-blur-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Instructor
                </p>
                <h2 className="mt-4 text-4xl font-semibold">{trainerProfile.name}</h2>
                <p className="mt-3 text-white/75">{trainerProfile.title}</p>
              </div>
              <p className="text-sm leading-relaxed text-white/75">
                이 영역에는 강사의 인물 사진, 수중 노핀 다이빙 사진, 대회 사진을 교차 배치하면 브랜드 신뢰가 가장 빠르게 쌓입니다.
              </p>
            </div>
          </div>
          <div>
            <SectionTitle title={brandStory.title} />
            <div className="content-card mt-10 rounded-2xl p-8 md:p-12">
              <p className="whitespace-pre-line text-base leading-relaxed text-gray-700 md:text-lg">
                {brandStory.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="신뢰를 만드는 권위 요소"
            description={`${trainerProfile.name} · ${trainerProfile.title}`}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {trainerProfile.credentials.map((credential) => (
              <li
                key={credential}
                className="content-card flex items-start gap-3 rounded-xl p-5"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coral-500" />
                <span className="text-sm leading-relaxed text-gray-700 md:text-base">
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-800 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-coral-200">
              Timeline
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              2016년부터 지금까지, 더 깊은 바다를 더 안전하게 가르치기까지
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {instructorTimeline.map((item) => (
              <article key={`${item.year}-${item.title}`} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold text-coral-200">{item.year}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/62">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="미미다이브가 수업에서 지키는 기준"
            description="잘 내려가는 것보다 오래 즐겁게 다이빙하는 사람이 되도록 돕습니다."
            align="center"
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
        </div>
      </section>
    </>
  );
}
