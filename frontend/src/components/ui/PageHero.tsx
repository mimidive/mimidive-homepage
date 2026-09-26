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
  aspectClassName?: string;
  fit?: 'cover' | 'contain';
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctas?: Cta[];
  compact?: boolean;
  image?: HeroImage;
  secondaryImage?: HeroImage;
};

export function PageHero({ eyebrow, title, description, ctas, compact, image, secondaryImage }: Props) {
  const heroImage = image ?? {
    src: oceanImages.hero,
    alt: imageAlt.hero,
    objectPosition: 'center center',
  };
  const showImageOnMobile = Boolean(image);

  return (
    <section
      className={`ocean-hero ${
        compact
          ? 'pb-16 pt-[calc(var(--header-h)+2.75rem)] md:pb-24 md:pt-[calc(var(--header-h)+3.5rem)]'
          : 'pb-20 pt-[calc(var(--header-h)+3rem)] md:pb-28 md:pt-[calc(var(--header-h)+4rem)]'
      }`}
    >
      <div
        className={
          secondaryImage
            ? 'page-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12'
            : 'page-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12'
        }
      >
        <div className="min-w-0">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-5 max-w-3xl break-keep text-pretty text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.16] tracking-[-0.04em] text-gray-900 [word-break:keep-all] md:mt-6 md:leading-[1.1]">
            {title}
          </h1>
          {description && (
            <ReadableText
              text={description}
              className="mt-6 max-w-xl md:mt-7"
              sentenceClassName="text-base leading-8 text-gray-600 md:text-lg md:leading-9"
            />
          )}
          {ctas && ctas.length > 0 && (
            <div className="cta-stack mt-8 md:mt-10">
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === 'secondary'
                      ? 'inline-flex min-h-11 items-center justify-center rounded-full bg-white/40 px-8 py-3.5 text-center text-sm font-semibold text-zinc-800 shadow-sm ring-1 ring-white/60 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.018] hover:bg-white/70'
                      : 'cta-button rounded-full px-8 py-3.5 text-center text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div
          className={`photo-card rounded-[2.25rem] p-4 sm:p-5 ${
            secondaryImage ? 'mx-auto w-full max-w-3xl lg:mx-0 lg:max-w-none lg:justify-self-center' : ''
          } ${showImageOnMobile ? '' : 'hidden lg:block'}`}
        >
          <div className={secondaryImage ? 'grid gap-3 md:grid-cols-[1fr_0.78fr] md:items-center' : ''}>
            {[heroImage, secondaryImage].filter(Boolean).map((item, index) => {
              const currentImage = item as HeroImage;

              return (
                <div
                  key={currentImage.src}
                  className={`relative w-full overflow-hidden rounded-[1.75rem] bg-white/35 ring-1 ring-white/60 ${
                    currentImage.aspectClassName ??
                    (secondaryImage
                      ? 'aspect-[4/3] lg:aspect-[16/10]'
                      : 'aspect-[4/3] lg:aspect-[5/4]')
                  }`}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    priority={index === 0}
                    sizes={secondaryImage ? '(max-width: 1024px) 100vw, 45vw' : '(max-width: 1024px) 100vw, 45vw'}
                    className={currentImage.fit === 'contain' ? 'object-contain' : 'object-cover'}
                    style={{ objectPosition: currentImage.objectPosition ?? 'center center' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
