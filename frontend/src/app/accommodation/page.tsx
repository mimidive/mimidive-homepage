import { ReadableText } from '@/components/ui/ReadableText';
import { PageHero } from '@/components/ui/PageHero';
import { getKakaoChatUrl } from '@/lib/kakao';
import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.accommodation;

const heroDescription =
  '교육 일정에 맞는 제주 숙소를 연동 숙소를 통해 연결해 드립니다.';

const bodyCopy = `단기 체류부터 한달살기·장기 체류까지, 체류 기간·인원·예산·목표 과정을 카카오톡으로 알려주시면 맞춤 상담해 드립니다. 강정·법환포구 교육 동선을 고려해 안내하며, 객실·가격·예약은 문의 후 안내합니다.`;

export default function AccommodationPage() {
  const consultHref = getKakaoChatUrl() ?? '/booking';

  return (
    <>
      <PageHero
        eyebrow="Stay"
        title="숙소안내"
        description={heroDescription}
        ctas={[{ label: '숙소·한달살기 문의', href: consultHref }]}
        compact
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <ReadableText
            text={bodyCopy}
            sentenceClassName="text-base leading-8 text-gray-600 md:text-lg md:leading-9"
          />
        </div>
      </section>
    </>
  );
}
