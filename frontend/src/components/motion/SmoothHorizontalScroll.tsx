'use client';

import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  loopCount: number;
  ariaLabel: string;
  className?: string;
  trackClassName?: string;
  cardSelector?: string;
  speed?: number;
};

export function SmoothHorizontalScroll({
  children,
  loopCount,
  ariaLabel,
  className = '',
  trackClassName = 'flex w-max gap-4 pl-5 will-change-transform md:gap-5 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]',
  cardSelector = '[data-story-card]',
  speed = 38,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || loopCount === 0) return;

    const measure = () => {
      const cards = track.querySelectorAll<HTMLElement>(cardSelector);
      if (cards.length < loopCount) return;

      const gap = window.matchMedia('(min-width: 768px)').matches ? 20 : 16;
      let width = 0;

      for (let i = 0; i < loopCount; i++) {
        width += cards[i].offsetWidth;
        if (i < loopCount - 1) width += gap;
      }

      setLoopWidth(width);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [cardSelector, loopCount]);

  const pause = () => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    setPaused(true);
  };

  const resumeLater = () => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => setPaused(false), 4000);
  };

  useEffect(
    () => () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    },
    [],
  );

  const isAnimating = visible && !paused && !reduceMotion && loopWidth > 0;
  const scrollDuration = loopWidth > 0 ? loopWidth / speed : 24;

  useEffect(() => {
    if (!isAnimating) {
      controls.stop();
      return;
    }

    controls.start({
      x: [0, -loopWidth],
      transition: {
        duration: scrollDuration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  }, [controls, isAnimating, loopWidth, scrollDuration]);

  if (reduceMotion) {
    return (
      <div
        role="region"
        aria-label={ariaLabel}
        className={`overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      >
        <div className={trackClassName}>{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      className={`overflow-hidden pb-2 ${className}`}
      onMouseEnter={pause}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={pause}
      onTouchEnd={resumeLater}
    >
      <motion.div ref={trackRef} animate={controls} className={trackClassName}>
        {children}
      </motion.div>
    </div>
  );
}
