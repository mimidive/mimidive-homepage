'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const softEase = [0.16, 1, 0.3, 1] as const;

type Props = {
  items: ReactNode[];
  ariaLabel: string;
  className?: string;
  intervalMs?: number;
  initialIndex?: number;
  edgeClassName?: string;
};

export function SectionFadeBetween({
  items,
  ariaLabel,
  className = '',
  intervalMs = 4500,
  initialIndex = 0,
  edgeClassName = 'from-[#FAFAF8]',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || reduceMotion || items.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [paused, visible, reduceMotion, items.length, intervalMs]);

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

  if (items.length === 0) return null;

  if (reduceMotion) {
    return (
      <div className={`space-y-4 ${className}`} role="region" aria-label={ariaLabel}>
        {items}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={pause}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={pause}
      onTouchEnd={resumeLater}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r to-transparent md:w-16 ${edgeClassName}`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l to-transparent md:w-16 ${edgeClassName}`}
        aria-hidden="true"
      />

      <div
        role="region"
        aria-label={ariaLabel}
        aria-live="polite"
        className="relative mx-auto max-w-2xl px-5 lg:px-0"
      >
        <div className="relative min-h-[16rem] md:min-h-[18rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
              transition={{ duration: 0.8, ease: softEase }}
              className="absolute inset-0"
            >
              {items[activeIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`${index + 1}번째 경로`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? 'w-8 bg-[#5F7C8A]'
                  : 'w-1.5 bg-[#5F7C8A]/25 hover:bg-[#5F7C8A]/45'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
