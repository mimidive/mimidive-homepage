import Image from 'next/image';
import Link from 'next/link';
import { ReadableText } from '@/components/ui/ReadableText';
import { imageAlt, oceanImages } from '@/lib/marketing-images';

type Cta = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type HeroImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctas?: Cta[];
  compact?: boolean;
  image?: HeroImage;
};

export function PageHero({ eyebrow, title, description, ctas, compact, image }: Props) {
  const heroImage = image ?? {
    src: oceanImages.hero,
    alt: imageAlt.hero,
    objectPosition: 'center center',
  };
  const showImageOnMobile = Boolean(image);

  return (
    <section
      className={`ocean-hero ${compact ? 'py-20 md:py-28' : 'py-24 md:py-36'}`}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-gray-900 md:text-6xl">
            {title}
          </h1>
          {description && (
            <ReadableText
              text={description}
              className="mt-7 max-w-3xl"
              sentenceClassName="text-[15px] leading-8 text-gray-600 md:text-lg md:leading-9"
            />
          )}
          {ctas && ctas.length > 0 && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === 'secondary'
                      ? 'rounded-full bg-white/40 px-8 py-4 text-center text-sm font-semibold text-zinc-800 shadow-sm ring-1 ring-white/60 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.018] hover:bg-white/70'
                      : 'cta-button rounded-full px-8 py-4 text-center text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className={`photo-card rounded-[2.25rem] p-5 ${showImageOnMobile ? '' : 'hidden lg:block'}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] ring-1 ring-white/60 lg:aspect-[5/4]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: heroImage.objectPosition ?? 'center center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
