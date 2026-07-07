import { ReadableText } from '@/components/ui/ReadableText';
import { PageHero } from '@/components/ui/PageHero';
import { getKakaoChatUrl } from '@/lib/kakao';
import { imageAlt, marketingImages } from '@/lib/marketing-images';
import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata.accommodation;

const heroDescription =
  '제주에 오시는 분들을 위한 공간을 소개해 드립니다.';

const bodyCopy = `단기 체류부터 한달살기·장기 체류까지, 체류 기간·인원·예산·목표 과정을 카카오톡으로 편하게 알려주시면 맞춤 상담해 드립니다. 제주도 교육과 여행 동선도 함께 고려해 안내드리며, 객실·가격·예약은 문의 후 차근차근 알려드립니다.`;

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
        image={{
          src: marketingImages.accommodationHero,
          alt: imageAlt.accommodationHero,
          objectPosition: 'center center',
        }}
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
