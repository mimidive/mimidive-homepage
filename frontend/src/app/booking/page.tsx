import { KakaoConsultCard } from '@/components/marketing/KakaoConsultCard';
import { PageHero } from '@/components/ui/PageHero';
import { ReadableText } from '@/components/ui/ReadableText';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { faqs, processSteps } from '@/lib/content';

export default function BookingPage() {
  return (
    <>
      <section className="section-bridge bg-surface pb-16 pt-[calc(var(--header-h)+3rem)] md:pb-24 md:pt-[calc(var(--header-h)+4rem)]">
        <div className="page-shell">
          <SectionTitle
            title="진행 절차"
            description="상담, 사전 안내, 교육, 피드백, 사후 안내 순서."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="content-card rounded-[1.75rem] p-5 md:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-[-0.03em] text-gray-900 md:mt-6 md:text-lg">
                  {step.title}
                </h3>
                <ReadableText
                  text={step.body}
                  className="mt-3 md:mt-4"
                  gap="sm"
                  sentenceClassName="text-sm leading-7 text-gray-600"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageHero
        eyebrow="FAQ & Kakao"
        title="카카오톡 상담"
        description="수영 실력, 물 공포 여부, 희망 일정, 목표 과정을 카카오톡으로 남겨 주세요. 맞춤 안내해 드립니다."
        ctas={[
          { label: '카카오톡 문의', href: '#kakao-consult' },
          { label: 'FAQ 확인', href: '#faq', variant: 'secondary' },
        ]}
        compact
      />

      <section id="faq" className="section-y">
        <div className="page-shell">
          <SectionTitle title="FAQ" description="교육 전 자주 묻는 질문입니다." />
          <div className="mt-6 max-w-3xl space-y-2 md:mt-8 md:space-y-2.5">
            {faqs.map((faq) => (
              <details key={faq.question} className="content-card group rounded-[1.35rem]">
                <summary className="cursor-pointer list-none p-4 font-medium leading-7 text-gray-900 md:px-5 md:py-4">
                  <span className="flex items-start justify-between gap-4">
                    <span className="break-keep text-pretty [word-break:keep-all]">{faq.question}</span>
                    <span className="shrink-0 text-sky-700 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-0 md:px-5 md:pb-5">
                  <ReadableText
                    text={faq.answer}
                    gap="sm"
                    sentenceClassName="text-base leading-8 text-gray-600 md:leading-8"
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kakao-consult" className="bg-surface py-12 md:py-16">
        <div className="page-shell">
          <SectionTitle
            title="카카오톡 문의"
            description="채널로 연결해 편하게 상담해 주세요."
            align="center"
          />
          <div className="mx-auto mt-6 max-w-2xl md:mt-8">
            <KakaoConsultCard />
          </div>
        </div>
      </section>
    </>
  );
}
