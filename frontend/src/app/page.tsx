'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { Transition, Variants } from 'framer-motion';
import Link from 'next/link';
import { SmoothHorizontalScroll } from '@/components/motion/SmoothHorizontalScroll';
import { ReadableText } from '@/components/ui/ReadableText';
import { concernsBridge, homeCta, homeMoments } from '@/lib/content';
import { oceanImages } from '@/lib/marketing-images';

type Moment = {
  image: string;
  quote: string;
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
          &ldquo;{moment.quote}&rdquo;
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
        <MomentCard key={`${moment.quote}-${index}`} moment={moment} />
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

  const concerns = [
    '물이 무섭다',
    '이퀄라이징이 안 된다',
    '수심이 늘지 않는다',
    '자격증만 따고 멈춰 있다',
    '무엇을 연습해야 할지 모르겠다',
    '강사가 될 수 있을지 자신이 없다',
  ];

  const storyMarks = [
    ['since 2016~', '10년이상의 물 속에서의 경험'],
    ['National Team', 'CMAS*AIDA 대한민국 국가대표 선발'],
    ['Asian Record', '아시아 신기록과 한국 신기록 12회 수립.'],
    ['AIDA Instructor Trainer', '초보자부터 전문가 과정까지 교육 가능한 센터'],
  ];

  const moments = [
    {
      image: oceanImages.trainee,
      quote: '처음이라 잘 할 수 있을지 걱정했는데, 제 속도에 맞춰 알려주셔서 부담이 없었습니다.',
    },
    {
      image: oceanImages.momentLevel,
      quote: '물에 대한 두려움이 있었는데, 교육이 끝날 때쯤에는 바다가 편안하게 느껴졌어요.',
    },
    {
      image: oceanImages.momentFun,
      quote: '깊이 내려가는 것보다 편안하게 머무르는 방법을 배운 시간이었어요.',
    },
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
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${oceanImages.hero})` }}
          />
          <div className="absolute inset-0 bg-[#FAFAF8]/15" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/65 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto max-w-5xl pt-20"
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: softEase }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
            Jeju Ocean · Breath · Trust
          </p>
          <h1 className="mt-8 text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.06em] text-[#1A1A1A] md:text-7xl lg:text-[5.5rem]">
            숨을 참고,
            <br />
            바다와 마주하는 시간.
          </h1>
          <p className="mx-auto mt-10 max-w-3xl font-serif text-[clamp(1.25rem,3.2vw,2rem)] font-semibold leading-snug tracking-[-0.03em] md:mt-12 md:leading-tight">
            <span className="box-decoration-clone bg-white/30 px-2.5 py-1 text-[#1A1A1A] [box-decoration-break:clone]">
              대한민국 노핀 국가대표와 함께하는 프리다이빙
            </span>
          </p>
          <p className="mt-5 text-sm font-medium leading-7 text-[#6B7280] md:text-base">
            제주 프리다이빙 전문 교육센터
          </p>
          <div className="mt-11 flex justify-center">
            <Link
              href={homeCta.programsEntry.href}
              className="rounded-full bg-[#5F7C8A] px-8 py-4 text-sm font-semibold text-[#FAFAF8] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4f6e7c]"
            >
              {homeCta.programsEntry.label}
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
              물속에서 사람은
              <br />
              속일 수 없습니다.
            </h2>
            <ReadableText
              text="긴장, 호흡, 두려움, 욕심이 모두 드러납니다. 미미다이브는 더 깊이 내려가기 전에, 물속에서 스스로를 믿는 감각을 먼저 만듭니다."
              sentenceClassName="text-base leading-7 text-[#6B7280] md:text-lg md:leading-8"
              gap="sm"
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
              <motion.span className="block" variants={instructorLine}>
                아시아기록 보유자
              </motion.span>
              <motion.span className="mt-1 block md:mt-2" variants={instructorLine}>
                김혜미 트레이너 강사
              </motion.span>
            </motion.h2>
            <motion.div variants={instructorLine} className="mt-9 max-w-2xl">
              <ReadableText
                text="선수의 경험과 강사의 책임감으로 가르칩니다."
                animate={false}
                sentenceClassName="text-base leading-8 text-[#6B7280] md:text-lg md:leading-9"
              />
            </motion.div>
            <div className="mt-12 space-y-8">
              {storyMarks.map(([year, text]) => (
                <motion.div
                  key={year}
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
                      {year}
                    </p>
                    <ReadableText
                      text={text}
                      gap="sm"
                      animate={false}
                      sentenceClassName="max-w-xl font-serif text-lg font-semibold leading-snug tracking-[-0.02em] text-[#1A1A1A] md:text-xl md:leading-snug"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={instructorLine}>
              <Link
                href="/instructor/intro"
                className="mt-12 inline-block text-sm font-bold text-[#1A1A1A] underline decoration-[#5F7C8A]/35 underline-offset-8 transition hover:text-[#5F7C8A]"
              >
                미미다이브 강사 소개 보기
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
              혹시 이런 고민이
              <br />
              있으신가요?
            </h2>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, margin: '-12% 0px' }}
            variants={instructorStagger}
            className="mt-16 grid gap-x-12 gap-y-7 md:grid-cols-2 lg:mt-24"
          >
            {concerns.map((item) => (
              <motion.div key={item} variants={instructorRow} className="relative pb-7">
                <motion.div
                  variants={instructorRule}
                  className="absolute inset-x-0 bottom-0 h-px origin-left bg-[#5F7C8A]/18"
                  aria-hidden="true"
                />
                <motion.p
                  variants={instructorLine}
                  className="text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#1A1A1A] md:text-4xl"
                >
                  {item}
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
            <ReadableText
              text={concernsBridge}
              sentenceClassName="text-base leading-8 text-[#6B7280] md:text-lg md:leading-9"
            />
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FAFAF8] py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
              {homeMoments.eyebrow}
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-[#1A1A1A] md:text-6xl">
              {homeMoments.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6B7280] md:text-lg md:leading-9">
              {homeMoments.subtitle}
            </p>
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
            혼자 고민하지 마세요.
          </h2>
          <p className="mx-auto mt-9 max-w-[640px] text-base leading-8 text-[#6B7280] md:text-lg md:leading-9">
            상담만 받아봐도 괜찮습니다.
          </p>
          <p className="mx-auto mt-2 max-w-[640px] text-base leading-8 text-[#6B7280] md:text-lg md:leading-9">
            부담 없이 문의해 주세요.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 md:mt-12">
            <Link
              href={homeCta.freeConsultation.href}
              className="inline-block rounded-full bg-[#5F7C8A] px-9 py-4 text-sm font-semibold text-[#FAFAF8] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4f6e7c]"
            >
              {homeCta.freeConsultation.label}
            </Link>
            <Link
              href={homeCta.packageInquiry.href}
              className="text-sm font-semibold text-[#5F7C8A] underline decoration-[#5F7C8A]/35 underline-offset-8 transition hover:text-[#4f6e7c]"
            >
              {homeCta.packageInquiry.label}
            </Link>
          </div>
          <p className="mx-auto mt-10 max-w-[640px] text-sm leading-7 text-[#6B7280] md:mt-12 md:text-base md:leading-8">
            현재 수준과 목표에 맞는 교육 과정을 함께 찾아드립니다.
          </p>
        </motion.div>
      </section>
    </>
  );
}
