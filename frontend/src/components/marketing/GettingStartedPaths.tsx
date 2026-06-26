'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { ResponsiveText } from '@/components/ui/ResponsiveText';
import { gettingStarted } from '@/lib/content';
import { reveal, softEase } from '@/lib/motion-variants';

const pathBeat: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

function pathLineVariants(embedded: boolean): Variants {
  return embedded
    ? {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: softEase },
        },
      }
    : {
        hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.9, ease: softEase },
        },
      };
}

const numberFade: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: softEase },
  },
};

type PathData = {
  index: string;
  href: string;
  intent: string;
  cta: string;
  title: string;
  image: string;
  badge?: string;
  note?: string;
};

function PathCardContent({
  path,
  variant = 'portrait',
}: {
  path: PathData;
  variant?: 'portrait' | 'wide';
}) {
  const isWide = variant === 'wide';

  return (
    <>
      <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 sm:gap-x-2 sm:gap-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FAFAF8]/45 sm:text-[11px] md:text-[11px] md:tracking-[0.28em]">
          {path.index}
        </span>
        {path.badge ? (
          <span className="rounded-sm bg-[#E8C9A0]/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8C9A0] sm:px-2 sm:text-[11px]">
            {path.badge}
          </span>
        ) : null}
      </div>
      <ResponsiveText
        as="p"
        softBreaks
        className={`mt-2 font-serif font-semibold tracking-[-0.01em] text-[#FAFAF8] sm:mt-3 md:mt-4 md:text-xl md:leading-snug lg:text-2xl ${
          isWide
            ? 'text-base leading-snug sm:text-lg'
            : 'text-sm leading-snug sm:text-[15px] sm:leading-[1.4]'
        }`}
      >
        {path.intent}
      </ResponsiveText>
      <p
        className={`mt-1.5 font-semibold text-[#FAFAF8]/70 transition group-hover:text-[#7FA6B8] sm:mt-2 md:mt-2 md:text-sm ${
          isWide ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs'
        }`}
      >
        {path.cta} →
      </p>
    </>
  );
}

function PathScrollCard({ path, variant = 'portrait' }: { path: PathData; variant?: 'portrait' | 'wide' }) {
  const isWide = variant === 'wide';

  return (
    <Link
      href={path.href}
      className="group relative block min-w-0 overflow-hidden rounded-2xl bg-[#26353a]"
    >
      <div
        className={`relative w-full ${
          isWide
            ? 'aspect-[16/9] min-h-[13.5rem] sm:min-h-[15rem] md:aspect-[21/9] md:min-h-0'
            : 'aspect-[3/4] min-h-[14rem] sm:min-h-0'
        }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${path.image})` }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[1] bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/50 to-[#1A1A1A]/10"
        />
        <div
          className={`absolute inset-x-0 bottom-0 z-[2] ${
            isWide ? 'p-4 sm:p-5 md:p-6 lg:p-7' : 'p-3.5 sm:p-4 md:p-6 lg:p-7'
          }`}
        >
          <PathCardContent path={path} variant={variant} />
        </div>
      </div>
    </Link>
  );
}

function PathStartGalleryCards({ paths }: { paths: PathData[] }) {
  const [featured, ...rest] = paths;
  const entryPaths = rest.slice(0, 2);

  return (
    <div role="region" aria-label="시작 경로 선택" className="space-y-2 sm:space-y-3 md:space-y-5">
      <div className="w-full">
        <PathScrollCard path={featured} variant="wide" />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-5 lg:gap-6">
        {entryPaths.map((path) => (
          <PathScrollCard key={path.index} path={path} />
        ))}
      </div>
    </div>
  );
}

function PathAdvancedGallery({
  paths,
  embedded = false,
}: {
  paths: PathData[];
  embedded?: boolean;
}) {
  return (
    <div className={embedded ? undefined : 'mx-auto max-w-7xl px-5 lg:px-8'}>
      <motion.div {...(embedded ? {} : reveal)} className="mb-8 max-w-xl md:mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
          {gettingStarted.scrollEyebrow}
        </p>
        <h3 className="relative z-10 mt-6 max-w-xl font-serif text-[clamp(1.75rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-[#1A1A1A] md:mt-8 lg:ml-[12%] lg:max-w-2xl">
          전문 교육으로,
          <br />
          편안해지는 법을 먼저 배웁니다.
        </h3>
      </motion.div>

      <div role="region" aria-label="전문 트레이닝 경로" className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-5 lg:gap-6">
        {paths.map((path) => (
          <PathScrollCard key={path.index} path={path} />
        ))}
      </div>

      <div className="mt-12 text-center md:mt-16">
        <Link
          href={gettingStarted.footerLink.href}
          className="inline-block text-sm font-semibold text-[#1A1A1A] underline decoration-[#5F7C8A]/35 underline-offset-8 transition hover:text-[#5F7C8A]"
        >
          {gettingStarted.footerLink.label} →
        </Link>
      </div>
    </div>
  );
}

function useGettingStartedPaths(): { startPaths: PathData[]; advancedPaths: PathData[] } {
  const { experiencePath, packagePath, funPath, trainingPath, nofinPath } = gettingStarted;

  const paths: PathData[] = [
    {
      index: '01',
      href: packagePath.href,
      intent: packagePath.intent,
      cta: packagePath.cta,
      title: packagePath.title,
      image: packagePath.image,
      badge: packagePath.badge,
      note: packagePath.note,
    },
    {
      index: '02',
      href: experiencePath.href,
      intent: experiencePath.intent,
      cta: experiencePath.cta,
      title: experiencePath.title,
      image: experiencePath.image,
    },
    {
      index: '03',
      href: funPath.href,
      intent: funPath.intent,
      cta: funPath.cta,
      title: funPath.title,
      image: funPath.image,
    },
    {
      index: '04',
      href: trainingPath.href,
      intent: trainingPath.intent,
      cta: trainingPath.cta,
      title: trainingPath.title,
      image: trainingPath.image,
    },
    {
      index: '05',
      href: nofinPath.href,
      intent: nofinPath.intent,
      cta: nofinPath.cta,
      title: nofinPath.title,
      image: nofinPath.image,
    },
  ];

  return { startPaths: paths.slice(0, 3), advancedPaths: paths.slice(3) };
}

export function GettingStartedPathGalleries({ embedded = false }: { embedded?: boolean }) {
  const reduceMotion = useReducedMotion();
  const { startPaths, advancedPaths } = useGettingStartedPaths();
  const pathLine = pathLineVariants(embedded);

  return (
    <div className={embedded ? 'space-y-12 md:space-y-16' : undefined}>
      <div className={embedded ? undefined : 'relative overflow-hidden bg-[#FAFAF8] py-28 md:py-40'}>
        <div className={embedded ? undefined : 'mx-auto max-w-7xl px-5 lg:px-8'}>
          <motion.div
            initial={reduceMotion || embedded ? false : 'hidden'}
            whileInView={reduceMotion || embedded ? undefined : 'show'}
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={pathBeat}
            className={`relative ${embedded ? 'min-h-0' : 'min-h-[14rem] md:min-h-[18rem]'}`}
          >
            {!embedded ? (
              <>
                <motion.span
                  variants={numberFade}
                  className="absolute left-0 top-0 font-serif text-[clamp(5rem,18vw,11rem)] font-semibold leading-none tracking-[-0.06em] text-[#1A1A1A]/[0.07]"
                  aria-hidden="true"
                >
                  01
                </motion.span>
                <motion.span
                  variants={numberFade}
                  className="absolute right-[8%] top-[18%] font-serif text-[clamp(3rem,10vw,6rem)] font-semibold leading-none tracking-[-0.06em] text-[#5F7C8A]/20 md:right-[22%]"
                  aria-hidden="true"
                >
                  02
                </motion.span>
                <motion.span
                  variants={numberFade}
                  className="absolute bottom-0 left-[28%] font-serif text-[clamp(4rem,14vw,8rem)] font-semibold leading-none tracking-[-0.06em] text-[#1A1A1A]/[0.05] md:left-[38%]"
                  aria-hidden="true"
                >
                  03
                </motion.span>
              </>
            ) : null}
            <motion.p
              variants={pathLine}
              className={`relative z-10 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A] ${
                embedded ? '' : 'max-w-[12rem] pt-6 md:max-w-none md:pt-10'
              }`}
            >
              {gettingStarted.beat1Eyebrow}
            </motion.p>
            <motion.h3
              variants={pathLine}
              className={`relative z-10 font-serif font-semibold tracking-[-0.05em] text-[#1A1A1A] ${
                embedded
                  ? 'mt-4 text-2xl leading-[1.12] md:text-3xl'
                  : 'mt-16 max-w-xl text-[clamp(2.25rem,7vw,5rem)] leading-[1.04] md:mt-24 lg:ml-[18%] lg:max-w-2xl'
              }`}
            >
              {gettingStarted.title}
            </motion.h3>
            <motion.p
              variants={pathLine}
              className={`relative z-10 text-sm leading-7 text-[#6B7280] md:text-base md:leading-8 ${
                embedded ? 'mt-3 max-w-2xl' : 'mt-4 max-w-md md:mt-5 lg:ml-[18%]'
              }`}
            >
              {gettingStarted.subtitle}
            </motion.p>
          </motion.div>

          <div className={`relative z-10 ${embedded ? 'mt-8 md:mt-10' : 'mt-12 md:mt-16'}`}>
            <PathStartGalleryCards paths={startPaths} />
          </div>
        </div>
      </div>

      <div className={embedded ? undefined : 'overflow-hidden bg-[#FAFAF8] py-16 md:py-24'}>
        <PathAdvancedGallery paths={advancedPaths} embedded={embedded} />
      </div>
    </div>
  );
}

/** @deprecated Homepage no longer uses this — paths live on /programs */
export function GettingStartedPaths() {
  return (
    <div id="getting-started" className="scroll-mt-24">
      <GettingStartedPathGalleries />
    </div>
  );
}
