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
      className={`ocean-hero ${
        compact
          ? 'pb-16 pt-[calc(var(--header-h)+2.75rem)] md:pb-24 md:pt-[calc(var(--header-h)+3.5rem)]'
          : 'pb-20 pt-[calc(var(--header-h)+3rem)] md:pb-28 md:pt-[calc(var(--header-h)+4rem)]'
      }`}
    >
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
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
        <div className={`photo-card rounded-[2.25rem] p-4 sm:p-5 ${showImageOnMobile ? '' : 'hidden lg:block'}`}>
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
