'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { Transition, Variants } from 'framer-motion';
import Link from 'next/link';
import { SmoothHorizontalScroll } from '@/components/motion/SmoothHorizontalScroll';
import { SocialLinks } from '@/components/marketing/SocialLinks';
import { ResponsiveText, type ResponsiveLine } from '@/components/ui/ResponsiveText';
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
import { oceanImages } from '@/lib/marketing-images';

type Moment = {
  image: string;
  quote: ResponsiveLine;
};

function MomentCard({ moment }: { moment: Moment }) {
  return (
    <figure
      data-story-card
      className="relative w-[calc((100vw-2.5rem-1rem)/1.5)] shrink-0 overflow-hidden rounded-2xl bg-[#1A1A1A] shadow-[0_12px_40px_rgba(26,26,26,0.1)] md:w-[calc((100vw-4rem-1.25rem)/1.5)] lg:w-[calc((min(100vw,80rem)-4rem-1.25rem)/1.5)]"
    >
      <div
        className="aspect-[4/5] bg-cover bg-center"
        style={{ backgroundImage: `url(${moment.image})` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/25 to-[#1A1A1A]/5"
        aria-hidden="true"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FAFAF8]/50">
          Review
        </p>
        <p className="mt-3 text-[15px] font-medium leading-7 tracking-[-0.01em] text-[#FAFAF8] md:text-base md:leading-8">
          &ldquo;<ResponsiveText as="span" copy={moment.quote} />&rdquo;
        </p>
      </figcaption>
    </figure>
  );
}

function MomentsAutoScroll({ moments }: { moments: Moment[] }) {
  const loopMoments = [...moments, ...moments];

  return (
    <SmoothHorizontalScroll
      loopCount={moments.length}
      ariaLabel="수강생 후기"
      className="mt-12 md:mt-16"
    >
      {loopMoments.map((moment, index) => (
        <MomentCard key={`${moment.quote.desktop}-${index}`} moment={moment} />
      ))}
    </SmoothHorizontalScroll>
  );
}

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

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.08]);

  const moments: Moment[] = [
    { image: oceanImages.trainee, quote: homeMomentsCopy.reviews[0] },
    { image: oceanImages.momentLevel, quote: homeMomentsCopy.reviews[1] },
    { image: oceanImages.momentFun, quote: homeMomentsCopy.reviews[2] },
  ];

  return (
    <>
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#FAFAF8] px-5 text-center">
        <motion.div
          className="absolute inset-x-0 bottom-0 top-[4.5rem]"
          style={{ y: heroY, scale: heroScale }}
          aria-hidden="true"
        >
          <div
            className="h-full w-full bg-cover bg-[center_45%]"
            style={{ backgroundImage: `url(${oceanImages.hero})` }}
          />
          <div className="absolute inset-0 bg-[#FAFAF8]/20" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/65 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto max-w-5xl pt-20"
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: softEase }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
            {homeHeroCopy.eyebrow}
          </p>
          <h1 className="mt-8 text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.06em] text-[#1A1A1A] md:text-7xl lg:text-[5.5rem]">
            <ResponsiveText balance copy={homeHeroCopy.title} />
          </h1>
          <p className="mx-auto mt-10 max-w-3xl font-serif text-[clamp(1.25rem,3.2vw,2rem)] font-semibold leading-snug tracking-[-0.03em] md:mt-12 md:leading-tight">
            <span className="box-decoration-clone bg-white/30 px-2.5 py-1 text-[#1A1A1A] [box-decoration-break:clone]">
              <ResponsiveText copy={homeHeroCopy.lead} />
            </span>
          </p>
          <p className="mt-5 text-sm font-medium leading-7 text-[#6B7280] md:text-base">
            <ResponsiveText copy={homeHeroCopy.tagline} />
          </p>
          <SocialLinks className="mt-4" />
          <div className="mt-11 flex justify-center">
            <Link
              href={homeCta.programsEntry.href}
              className="rounded-full bg-[#5F7C8A] px-8 py-4 text-center text-sm font-semibold leading-snug text-[#FAFAF8] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4f6e7c]"
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

      <section className="bg-[#FAFAF8] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...reveal} className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-6">
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#1A1A1A] md:text-6xl lg:text-7xl">
              <ResponsiveText balance copy={homeTruthCopy.title} />
            </h2>
            <ResponsiveText
              as="p"
              className="text-base leading-7 text-[#6B7280] md:text-lg md:leading-8"
              copy={homeTruthCopy.body}
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <motion.div {...reveal} className="relative aspect-[4/5] overflow-hidden">
            <motion.div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${oceanImages.instructor})` }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1, ease: softEase }}
            />
          </motion.div>
          <motion.div
            className="lg:pl-10"
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
              className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-[#1A1A1A] md:text-6xl"
            >
              <ResponsiveText balance as="span" copy={homeInstructorCopy.title} />
            </motion.h2>
            <motion.div variants={instructorLine} className="mt-9 max-w-2xl">
              <ResponsiveText
                as="p"
                className="text-base leading-8 text-[#6B7280] md:text-lg md:leading-9"
                copy={homeInstructorCopy.body}
              />
            </motion.div>
            <div className="mt-12 space-y-8">
              {homeInstructorCopy.storyMarks.map((mark) => (
                <motion.div
                  key={mark.year}
                  variants={instructorRow}
                  className="relative pt-7 md:grid md:grid-cols-[10rem_1fr] md:gap-4"
                >
                  <motion.div
                    variants={instructorRule}
                    className="absolute inset-x-0 top-0 h-px origin-left bg-[#5F7C8A]/16"
                    aria-hidden="true"
                  />
                  <motion.div variants={instructorLine} className="grid gap-4 md:contents">
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
            <motion.div variants={instructorLine} className="mt-12">
              <Link
                href="/instructor/intro"
                className="inline-block break-keep text-sm font-bold text-[#1A1A1A] underline decoration-[#5F7C8A]/35 underline-offset-8 transition hover:text-[#5F7C8A]"
              >
                <ResponsiveText copy={homeInstructorCopy.link} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#DCECEF] py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...reveal} className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
              Before the depth
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-[#1A1A1A] md:text-6xl">
              <ResponsiveText balance copy={homeConcernsCopy.title} />
            </h2>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, margin: '-12% 0px' }}
            variants={instructorStagger}
            className="mt-16 grid gap-x-12 gap-y-7 md:grid-cols-2 lg:mt-24"
          >
            {homeConcernsCopy.items.map((item) => (
              <motion.div key={item.desktop} variants={instructorRow} className="relative pb-7">
                <motion.div
                  variants={instructorRule}
                  className="absolute inset-x-0 bottom-0 h-px origin-left bg-[#5F7C8A]/18"
                  aria-hidden="true"
                />
                <motion.p
                  variants={instructorLine}
                  className="text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#1A1A1A] md:text-4xl"
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
            className="relative mt-20 max-w-2xl pl-6 text-base leading-8 text-[#6B7280] md:text-lg md:leading-9"
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

      <section className="overflow-hidden bg-[#FAFAF8] py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
              {homeMomentsCopy.eyebrow}
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-[#1A1A1A] md:text-6xl">
              <ResponsiveText balance copy={homeMomentsCopy.title} />
            </h2>
            <ResponsiveText
              as="p"
              className="mt-5 text-base leading-8 text-[#6B7280] md:text-lg md:leading-9"
              copy={homeMomentsCopy.subtitle}
            />
          </motion.div>
        </div>
        <MomentsAutoScroll moments={moments} />
      </section>

      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#FAFAF8] py-28 md:py-40">
        <div
          className="absolute inset-y-16 right-0 hidden w-[42vw] bg-cover bg-center opacity-80 lg:block"
          style={{ backgroundImage: `url(${oceanImages.breathing})` }}
          aria-hidden="true"
        />
        <motion.div {...reveal} className="relative z-10 mx-auto max-w-[780px] px-5 text-center">
          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-[#1A1A1A] md:text-6xl">
            <ResponsiveText balance copy={homeClosingCopy.title} />
          </h2>
          <div className="mx-auto mt-9 max-w-[640px] space-y-2 text-base leading-8 text-[#6B7280] md:mt-9 md:text-lg md:leading-9">
            {homeClosingCopy.lines.map((line) => (
              <ResponsiveText key={line.desktop} as="p" copy={line} />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 md:mt-12">
            <Link
              href={homeCta.freeConsultation.href}
              className="inline-block rounded-full bg-[#5F7C8A] px-9 py-4 text-center text-sm font-semibold leading-snug text-[#FAFAF8] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4f6e7c]"
            >
              <ResponsiveText copy={homeCtaCopy.freeConsultation} />
            </Link>
            <Link
              href={homeCta.packageInquiry.href}
              className="text-center text-sm font-semibold leading-snug text-[#5F7C8A] underline decoration-[#5F7C8A]/35 underline-offset-8 transition hover:text-[#4f6e7c]"
            >
              <ResponsiveText copy={homeCtaCopy.packageInquiry} />
            </Link>
          </div>
          <ResponsiveText
            as="p"
            className="mx-auto mt-10 max-w-[640px] text-sm leading-7 text-[#6B7280] md:mt-12 md:text-base md:leading-8"
            copy={homeClosingCopy.footnote}
          />
        </motion.div>
      </section>
    </>
  );
}
