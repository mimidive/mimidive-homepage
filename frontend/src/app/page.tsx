'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { Transition, Variants } from 'framer-motion';
import Link from 'next/link';
import {
  ReviewMomentRow,
  ReviewStarRating,
  type ReviewMoment,
} from '@/components/marketing/ReviewMomentCard';
import { SocialLinks } from '@/components/marketing/SocialLinks';
import { CoverImage } from '@/components/ui/CoverImage';
import { FluorescentHighlight } from '@/components/ui/FluorescentHighlight';
import { ResponsiveText } from '@/components/ui/ResponsiveText';
import { homeCta } from '@/lib/content';
import {
  homeClosingCopy,
  homeConcernsCopy,
  homeCtaCopy,
  homeHeroCopy,
  homeInstructorCopy,
  homeMomentsCopy,
  homeTruthCopy,
} from '@/lib/responsiveCopy';
import { imageAlt, marketingImages, oceanImages } from '@/lib/marketing-images';

const softEase = [0.16, 1, 0.3, 1] as const;
const slowReveal: Transition = { duration: 0.9, ease: softEase };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const reveal = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, margin: '-12% 0px' },
  transition: slowReveal,
  variants: fadeUp,
};

const instructorStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
};

const instructorLine: Variants = {
  hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.18, ease: softEase },
  },
};

const instructorHeadingStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const instructorRow: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const instructorRule: Variants = {
  hidden: { scaleX: 0, opacity: 0.5 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.15, ease: softEase },
  },
};

const reviewStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const reviewRow: Variants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: slowReveal,
  },
};

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.08]);

  const reviewAssets = [
    {
      image: marketingImages.homeReviewExperience,
      alt: imageAlt.homeReviewExperience,
    },
    {
      image: marketingImages.homeReviewLevel,
      alt: imageAlt.homeReviewLevel,
    },
    {
      image: marketingImages.homeReviewFun,
      alt: imageAlt.homeReviewFun,
    },
    {
      image: marketingImages.homeReviewNofin,
      alt: imageAlt.homeReviewNofin,
    },
  ] as const;

  const moments: ReviewMoment[] = homeMomentsCopy.reviews.map((review, index) => ({
    ...reviewAssets[index],
    ...review,
  }));

  return (
    <>
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#FAFAF8] px-5 text-center sm:px-6">
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
          aria-hidden
        >
          <CoverImage
            src={oceanImages.hero}
            alt=""
            imageClassName="scale-110 object-cover object-[center_40%] opacity-45 blur-[10px] md:blur-[14px]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#FAFAF8]/55" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/70 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto max-w-5xl pt-[calc(var(--header-h)+1.5rem)]"
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: softEase }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
            {homeHeroCopy.eyebrow}
          </p>
          <h1 className="mt-6 text-[clamp(2.25rem,8vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#1A1A1A] md:mt-8 md:leading-[1.05]">
            <span className="break-keep text-pretty [word-break:keep-all] [overflow-wrap:normal] md:hidden">
              <span className="text-[#5F7C8A]">대한민국 국가대표</span>와
              <br />
              함께하는 프리다이빙
            </span>
            <span className="hidden break-keep text-pretty [word-break:keep-all] [overflow-wrap:normal] md:inline">
              <span className="text-[#5F7C8A]">대한민국 국가대표</span>와 함께하는 프리다이빙
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-serif text-[clamp(1.2rem,3.2vw,2rem)] font-semibold leading-snug tracking-[-0.03em] md:mt-12 md:max-w-3xl md:leading-tight">
            <span className="box-decoration-clone bg-white/30 px-2.5 py-1 text-[#1A1A1A] [box-decoration-break:clone]">
              <ResponsiveText copy={homeHeroCopy.lead} />
            </span>
          </p>
          <p className="mt-5 text-sm font-medium leading-7 text-[#6B7280] md:text-base">
            <ResponsiveText copy={homeHeroCopy.tagline} />
          </p>
          <SocialLinks className="mt-4" />
          <div className="mt-10 flex justify-center md:mt-11">
            <Link
              href={homeCta.programsEntry.href}
              className="inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-[#5F7C8A] px-8 py-3.5 text-center text-sm font-semibold leading-snug text-[#FAFAF8] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4f6e7c] sm:w-auto"
            >
              <ResponsiveText copy={homeCtaCopy.programsEntry} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5F7C8A]"
          animate={{ y: [0, 8, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll
        </motion.div>
      </section>

      <section className="bg-[#FAFAF8] py-12 md:py-16">
        <div className="page-shell">
          <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-10">
            <h2 className="text-[clamp(1.875rem,4.5vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#1A1A1A] md:leading-[1.08]">
              <ResponsiveText balance copy={homeTruthCopy.title} />
            </h2>
            <ResponsiveText
              as="p"
              className="max-w-xl text-base leading-8 text-[#6B7280] md:text-lg md:leading-8 lg:justify-self-end"
              copy={homeTruthCopy.body}
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] py-20 md:py-28 lg:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <motion.div {...reveal} className="relative aspect-[4/5] overflow-hidden">
            <motion.div
              className="relative h-full w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1, ease: softEase }}
            >
              <CoverImage
                src={oceanImages.instructor}
                alt={imageAlt.instructor}
                imageClassName="object-cover object-[center_22%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="min-w-0 lg:pl-6 xl:pl-10"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, margin: '-12% 0px' }}
            variants={instructorStagger}
          >
            <motion.p
              variants={instructorLine}
              className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]"
            >
              Instructor
            </motion.p>
            <motion.h2
              variants={instructorHeadingStagger}
              className="mt-5 text-[clamp(1.875rem,4.5vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#1A1A1A] md:mt-6 md:leading-[1.06]"
            >
              <ResponsiveText balance as="span" copy={homeInstructorCopy.title} />
            </motion.h2>
            <motion.div variants={instructorLine} className="mt-7 max-w-xl md:mt-9">
              <ResponsiveText
                as="p"
                className="text-base leading-8 text-[#6B7280] md:text-lg md:leading-9"
                copy={homeInstructorCopy.body}
              />
            </motion.div>
            <div className="mt-10 space-y-7 md:mt-12 md:space-y-8">
              {homeInstructorCopy.storyMarks.map((mark) => (
                <motion.div
                  key={mark.year}
                  variants={instructorRow}
                  className="relative pt-6 md:grid md:grid-cols-[10rem_1fr] md:gap-4 md:pt-7"
                >
                  <motion.div
                    variants={instructorRule}
                    className="absolute inset-x-0 top-0 h-px origin-left bg-[#5F7C8A]/16"
                    aria-hidden="true"
                  />
                  <motion.div variants={instructorLine} className="grid gap-3 md:contents md:gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7C8A]">
                      {mark.year}
                    </p>
                    <ResponsiveText
                      as="p"
                      className="max-w-xl font-serif text-lg font-semibold leading-snug tracking-[-0.02em] text-[#1A1A1A] md:text-xl md:leading-snug"
                      copy={mark.text}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={instructorLine} className="mt-10 md:mt-12 md:pl-6">
              <Link
                href="/instructor/intro"
                className="group inline-block break-keep text-base font-bold leading-7 tracking-[-0.02em] text-[#1A1A1A] transition hover:opacity-90 md:text-lg"
              >
                <FluorescentHighlight>
                  <ResponsiveText copy={homeInstructorCopy.link} />
                </FluorescentHighlight>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#DCECEF] py-20 md:py-28 lg:py-32">
        <div className="page-shell">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
              Before the depth
            </p>
            <h2 className="mt-5 text-[clamp(1.875rem,4.5vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#1A1A1A] md:mt-6 md:leading-[1.06]">
              <ResponsiveText balance copy={homeConcernsCopy.title} />
            </h2>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, margin: '-12% 0px' }}
            variants={instructorStagger}
            className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2 md:mt-16 md:gap-y-7 lg:mt-20 lg:gap-x-12"
          >
            {homeConcernsCopy.items.map((item) => (
              <motion.div key={item.desktop} variants={instructorRow} className="relative pb-6 md:pb-7">
                <motion.div
                  variants={instructorRule}
                  className="absolute inset-x-0 bottom-0 h-px origin-left bg-[#5F7C8A]/18"
                  aria-hidden="true"
                />
                <motion.p
                  variants={instructorLine}
                  className="text-[clamp(1.25rem,3.5vw,2.25rem)] font-semibold leading-snug tracking-[-0.045em] text-[#1A1A1A]"
                >
                  <ResponsiveText balance copy={item} />
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-14% 0px' }}
            transition={{ duration: 1, ease: softEase }}
            className="relative mt-14 max-w-2xl pl-5 text-base leading-8 text-[#6B7280] md:mt-20 md:pl-6 md:text-lg md:leading-9"
          >
            <motion.span
              className="absolute left-0 top-1 h-full w-px origin-top bg-[#5F7C8A]"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25, ease: softEase }}
              aria-hidden="true"
            />
            <ResponsiveText as="div" copy={homeConcernsCopy.bridge} />
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FAFAF8] py-20 md:py-28 lg:py-32">
        <div className="page-shell">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
              {homeMomentsCopy.eyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.875rem,4.5vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#1A1A1A] md:mt-6 md:leading-[1.06]">
              <ResponsiveText balance copy={homeMomentsCopy.title} />
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <ReviewStarRating />
              <ResponsiveText
                as="p"
                className="text-base font-semibold leading-8 text-[#1A1A1A] md:text-lg md:leading-9"
                copy={homeMomentsCopy.subtitle}
              />
            </div>
            <ResponsiveText
              as="p"
              className="mt-2 max-w-xl text-sm leading-7 text-[#6B7280] md:text-base md:leading-8"
              copy={homeMomentsCopy.summary}
            />
          </motion.div>
          <motion.div
            role="region"
            aria-label="수강생 후기"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={reviewStagger}
            className="mt-12 space-y-14 md:mt-20 md:space-y-24 lg:mt-24 lg:space-y-28"
          >
            {moments.map((moment, index) => (
              <motion.div key={moment.category} variants={reviewRow}>
                <ReviewMomentRow moment={moment} reverse={index % 2 === 1} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FAFAF8] py-20 md:py-28 lg:py-32">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div {...reveal} className="relative z-10 mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="text-[clamp(1.875rem,4.5vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#1A1A1A] md:leading-[1.06]">
              <ResponsiveText balance copy={homeClosingCopy.title} />
            </h2>
            <div className="mx-auto mt-7 max-w-xl space-y-2 text-base leading-8 text-[#6B7280] md:mt-9 md:text-lg md:leading-9 lg:mx-0">
              {homeClosingCopy.lines.map((line) => (
                <ResponsiveText key={line.desktop} as="p" copy={line} />
              ))}
            </div>
            <div className="cta-stack mx-auto mt-9 max-w-xs items-stretch md:mt-12 md:max-w-none md:items-center md:justify-center lg:mx-0 lg:justify-start">
              {homeCta.freeConsultation.href.startsWith('http') ? (
                <a
                  href={homeCta.freeConsultation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#5F7C8A] px-9 py-3.5 text-center text-sm font-semibold leading-snug text-[#FAFAF8] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4f6e7c]"
                >
                  <ResponsiveText copy={homeCtaCopy.freeConsultation} />
                </a>
              ) : (
                <Link
                  href={homeCta.freeConsultation.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#5F7C8A] px-9 py-3.5 text-center text-sm font-semibold leading-snug text-[#FAFAF8] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4f6e7c]"
                >
                  <ResponsiveText copy={homeCtaCopy.freeConsultation} />
                </Link>
              )}
              <Link
                href={homeCta.packageInquiry.href}
                className="inline-flex min-h-11 items-center justify-center px-2 text-center text-sm font-semibold leading-snug text-[#5F7C8A] underline decoration-[#5F7C8A]/35 underline-offset-8 transition hover:text-[#4f6e7c]"
              >
                <ResponsiveText copy={homeCtaCopy.packageInquiry} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="relative mx-auto hidden aspect-[4/5] w-full max-w-md overflow-hidden lg:mx-0 lg:block lg:max-w-none"
          >
            <CoverImage
              src={oceanImages.breathing}
              alt={imageAlt.breathing}
              imageClassName="object-cover object-center"
              sizes="(max-width: 1024px) 0vw, 40vw"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
