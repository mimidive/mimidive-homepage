import { KakaoConsultCard } from '@/components/marketing/KakaoConsultCard';
import { PageHero } from '@/components/ui/PageHero';
import { ReadableText } from '@/components/ui/ReadableText';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { faqs, processSteps } from '@/lib/content';

export default function BookingPage() {
  return (
    <>
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

      <section className="section-bridge bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="진행 절차"
            description="상담, 사전 안내, 교육, 피드백, 사후 안내 순서."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="content-card rounded-[1.75rem] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-gray-900">
                  {step.title}
                </h3>
                <ReadableText
                  text={step.body}
                  className="mt-4"
                  gap="sm"
                  sentenceClassName="text-sm leading-7 text-gray-600"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle title="FAQ" description="교육 전 자주 묻는 질문입니다." />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="content-card group rounded-[1.75rem]">
                <summary className="cursor-pointer list-none p-6 font-medium leading-7 text-gray-900 md:p-8">
                  <span className="flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-sky-700 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1 md:px-8 md:pb-8">
                  <ReadableText
                    text={faq.answer}
                    gap="sm"
                    sentenceClassName="text-sm leading-7 text-gray-600 md:text-base md:leading-8"
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kakao-consult" className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <SectionTitle
            title="카카오톡 문의"
            description="채널로 연결해 편하게 상담해 주세요."
            align="center"
          />
          <KakaoConsultCard />
        </div>
      </section>
    </>
  );
}
