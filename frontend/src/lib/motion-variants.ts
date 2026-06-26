import type { Transition, Variants } from 'framer-motion';

export const softEase = [0.16, 1, 0.3, 1] as const;

export const slowReveal: Transition = { duration: 0.9, ease: softEase };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const reveal = {
  initial: 'hidden' as const,
  whileInView: 'show' as const,
  viewport: { once: true, margin: '-12% 0px' },
  transition: slowReveal,
  variants: fadeUp,
};

export const storyStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
};

export const storyLine: Variants = {
  hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.18, ease: softEase },
  },
};

export const storyRow: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export const storyRule: Variants = {
  hidden: { scaleX: 0, opacity: 0.5 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.15, ease: softEase },
  },
};

export const bridgeReveal = {
  initial: { opacity: 0, y: 30, scale: 0.98, filter: 'blur(12px)' },
  whileInView: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-14% 0px' },
  transition: { duration: 1, ease: softEase },
};

export const bridgeRule = {
  initial: { scaleY: 0, opacity: 0 },
  whileInView: { scaleY: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1, delay: 0.25, ease: softEase },
};
