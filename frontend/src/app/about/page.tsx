import { PageHero } from '@/components/ui/PageHero';
import { ReadableText } from '@/components/ui/ReadableText';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { instructorTimeline, proofCards, trainerProfile } from '@/lib/content';

const brandStory = {
  title: '대표 강사 소개',
  body: `안녕하세요. 미미다이브 대표 강사 김혜미입니다.

저는 대한민국 노핀 국가대표 선수로 대회에 출전하며 아시아 신기록과 한국 신기록 11회를 만들었습니다. 하지만 미미다이브에서 가장 중요하게 여기는 것은 더 깊이 내려가는 기록보다, 물속에서 스스로를 믿을 수 있게 되는 감각입니다.

입문자는 물 적응 순서부터, 자격 보유자는 정체 원인부터 확인. 컨디션, 기상, 장비, 수면 안전 우선 점검.

호흡, 정렬, 이퀄라이징, 멘탈 루틴을 수강생 레벨에 맞춰 교육. 입문자부터 강사 과정까지 안전 기준 우선 운영.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mimi Dive"
        title="미미다이브 소개"
        description="김혜미 강사가 운영하는 제주 프리다이빙 교육 센터. 입문, 자격증, 트레이닝, 강사 과정 운영."
        ctas={[
          { label: '교육 문의', href: '/booking' },
          { label: '교육 과정', href: '/programs', variant: 'secondary' },
        ]}
        compact
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div className="photo-card sticky top-28 rounded-[2.25rem] p-6 text-zinc-900">
            <div className="flex min-h-96 flex-col justify-between rounded-[1.75rem] bg-white/12 p-7 backdrop-blur-sm ring-1 ring-white/25">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Instructor
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">{trainerProfile.name}</h2>
                <p className="mt-4 text-zinc-600">{trainerProfile.title}</p>
              </div>
              <p className="text-sm leading-7 text-zinc-600">
                이 영역에는 강사의 인물 사진, 수중 노핀 다이빙 사진, 대회 사진을 교차 배치하면 브랜드 신뢰가 가장 빠르게 쌓입니다.
              </p>
            </div>
          </div>
          <div>
            <SectionTitle title={brandStory.title} />
            <div className="content-card mt-12 rounded-[2rem] p-8 md:p-12">
              <ReadableText
                text={brandStory.body}
                sentenceClassName="text-base leading-8 text-gray-700 md:text-lg md:leading-9"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="자격 및 경력"
            description={`${trainerProfile.name} · ${trainerProfile.title}`}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {trainerProfile.credentials.map((credential) => (
              <li
                key={credential}
                className="content-card flex items-start gap-4 rounded-[1.5rem] p-6"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                <span className="text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 text-zinc-900 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
              Timeline
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.16] tracking-[-0.04em] md:text-5xl">
              주요 경력
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {instructorTimeline.map((item) => (
              <article key={`${item.year}-${item.title}`} className="rounded-[1.5rem] bg-white/40 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] ring-1 ring-white/60 backdrop-blur-xl">
                <p className="text-sm font-semibold text-sky-200">{item.year}</p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">{item.title}</h3>
                <ReadableText
                  text={item.body}
                  className="mt-3"
                  gap="sm"
                  sentenceClassName="text-sm leading-7 text-zinc-600"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="교육 기준"
            description="안전 절차, 해양 조건, 개인별 피드백 기준."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proofCards.map((card) => (
              <article key={card.title} className="content-card rounded-[1.75rem] p-7">
                <span className="text-3xl" aria-hidden>
                  {card.icon}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{card.title}</h3>
                <ReadableText
                  text={card.body}
                  className="mt-4"
                  gap="sm"
                  sentenceClassName="text-sm leading-7 text-gray-600"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
