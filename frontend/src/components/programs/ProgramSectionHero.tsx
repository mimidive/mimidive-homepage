type ProgramSectionHeroProps = {
  image: string;
  alt: string;
  objectPosition?: string;
};

export function ProgramSectionHero({
  image,
  alt,
  objectPosition = 'center center',
}: ProgramSectionHeroProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-[1.75rem] ring-1 ring-[#5F7C8A]/12 md:mb-10">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className="block aspect-[16/9] w-full object-cover md:aspect-[21/9]"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-[#1A1A1A]/10 to-transparent"
        />
      </div>
    </div>
  );
}
