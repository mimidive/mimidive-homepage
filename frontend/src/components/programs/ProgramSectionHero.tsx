type HeroImage = {
  image: string;
  alt: string;
  objectPosition?: string;
};

export type ProgramSectionHeroConfig =
  | {
      image: string;
      alt: string;
      objectPosition?: string;
      variant?: 'wide' | 'portrait';
    }
  | {
      gallery: readonly HeroImage[];
    };

export function ProgramSectionHero({ config }: { config: ProgramSectionHeroConfig }) {
  if ('gallery' in config) {
    const gridCols = config.gallery.length === 2 ? 'grid-cols-2' : 'grid-cols-3';

    return (
      <div className="mb-8 overflow-hidden rounded-[1.75rem] ring-1 ring-[#5F7C8A]/12 md:mb-10">
        <div className={`grid ${gridCols} gap-1.5 p-1.5 md:gap-2 md:p-2`}>
          {config.gallery.map((item) => (
            <div key={item.image} className="relative overflow-hidden rounded-[1rem] md:rounded-[1.25rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.alt}
                className="block aspect-[3/4] w-full object-cover"
                style={{ objectPosition: item.objectPosition ?? 'center center' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const { image, alt, objectPosition = 'center center', variant = 'wide' } = config;
  const isPortrait = variant === 'portrait';

  return (
    <div className="mb-8 overflow-hidden rounded-[1.75rem] ring-1 ring-[#5F7C8A]/12 md:mb-10">
      <div className={isPortrait ? 'flex justify-center bg-[#5F7C8A]/5' : 'relative'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className={
            isPortrait
              ? 'block aspect-[9/16] w-full max-w-md object-cover sm:max-w-lg md:max-w-xl'
              : 'block aspect-[16/9] w-full object-cover md:aspect-[21/9]'
          }
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
        {!isPortrait && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-[#1A1A1A]/10 to-transparent"
          />
        )}
      </div>
    </div>
  );
}
