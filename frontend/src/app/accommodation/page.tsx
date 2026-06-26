import Link from 'next/link';
import { ReadableText } from '@/components/ui/ReadableText';
import { PageHero } from '@/components/ui/PageHero';
import { BRAND } from '@/lib/content';

const tips = [
  '법환포구·강정동 인근 숙소 위주로 안내',
  '교육 일정에 맞춘 이동 동선 고려',
  '장기 체류·단기 체류 모두 상담 가능',
];

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay"
        title="숙소안내"
        description="숙소 문의는 따로 연락 바랍니다."
        ctas={[{ label: '숙소 문의', href: '/booking' }]}
        compact
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <ReadableText
            text={`${BRAND.location} 기준으로 교육 동선에 맞는 숙소를 추천해드립니다. 일정과 예산을 알려주시면 맞춤 안내가 가능합니다.`}
            sentenceClassName="text-base leading-8 text-gray-600 md:text-lg md:leading-9"
          />
          <ul className="mt-10 space-y-4 border-t border-[#5F7C8A]/16 pt-10">
            {tips.map((tip) => (
              <li key={tip} className="text-base leading-8 text-gray-700">
                {tip}
              </li>
            ))}
          </ul>
          <Link
            href="/booking"
            className="mt-12 inline-block text-sm font-semibold text-[#5F7C8A] underline underline-offset-8 transition hover:text-[#4f6e7c]"
          >
            숙소 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
