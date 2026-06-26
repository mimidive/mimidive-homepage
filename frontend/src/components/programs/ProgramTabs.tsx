'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { GettingStartedPathGalleries } from '@/components/marketing/GettingStartedPaths';
import { ProgramCoursesAccordion } from '@/components/programs/ProgramCoursesAccordion';
import {
  isAccordionCourseId,
  programNavItems,
  programSections,
  programTabToSectionId,
  programTabs,
  type ProgramAccordionSectionId,
  type ProgramNavId,
  type ProgramTabId,
} from '@/lib/content';

const accordionSectionIds: ProgramAccordionSectionId[] = [
  'programs-cert',
  'programs-advanced',
  'programs-experience',
  'programs-special',
];

function isAccordionSectionId(value: string): value is ProgramAccordionSectionId {
  return accordionSectionIds.includes(value as ProgramAccordionSectionId);
}

function getChromeOffset(extraGap = 12): number {
  const header = document.getElementById('site-header');
  const nav = document.getElementById('programs-subnav');
  const headerHeight = header?.getBoundingClientRect().height ?? 72;
  const navHeight = nav?.offsetHeight ?? 61;
  return headerHeight + navHeight + extraGap;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = getChromeOffset();
  const targetTop = el.getBoundingClientRect().top + window.scrollY - offset;

  if (Math.abs(window.scrollY - targetTop) < 12) return;

  window.scrollTo({ top: Math.max(0, targetTop), behavior: 'auto' });
}

function resolveHashTarget(hash: string): { sectionId: string; expandId?: string } | null {
  if (!hash) return null;

  if (hash === 'level-intro-package' || isAccordionCourseId(hash)) {
    return { sectionId: 'programs-cert', expandId: hash === 'level-intro-package' ? hash : hash };
  }

  if (hash.startsWith('program-card-')) {
    const slug = hash.replace('program-card-', '');
    if (isAccordionCourseId(slug)) {
      const section = programSections.find((item) =>
        (item.slugs as readonly string[]).includes(slug),
      );
      if (section) {
        return { sectionId: section.id, expandId: slug };
      }
      if (slug === 'level-intro-package') {
        return { sectionId: 'programs-cert', expandId: slug };
      }
    }
  }

  if (isAccordionSectionId(hash) || hash === 'programs-recommended') {
    return { sectionId: hash };
  }

  return { sectionId: hash };
}

export function ProgramTabs() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get('tab');
  const [activeNavId, setActiveNavId] = useState<ProgramNavId | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(72);
  const [mounted, setMounted] = useState(false);
  const hasScrolledFromUrl = useRef(false);
  const navRef = useRef<HTMLElement>(null);

  const updateActiveNav = useCallback(() => {
    const nav = navRef.current;
    const header = document.getElementById('site-header');
    if (header) {
      setHeaderOffset(header.getBoundingClientRect().height);
    }
    if (!nav) return;

    const height = nav.offsetHeight;
    setNavHeight(height);

    const scrollLine = getChromeOffset(0);
    let active: ProgramNavId | null = null;

    for (const item of programNavItems) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= scrollLine) {
        active = item.id;
      }
    }

    setActiveNavId(active);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const header = document.getElementById('site-header');
    if (!header) return;

    const updateHeaderOffset = () => {
      setHeaderOffset(header.getBoundingClientRect().height);
    };

    updateHeaderOffset();
    const resizeObserver = new ResizeObserver(updateHeaderOffset);
    resizeObserver.observe(header);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (hasScrolledFromUrl.current) return;

    const hash = window.location.hash.replace('#', '');
    const tabTarget =
      tabFromUrl && programTabs.some((tab) => tab.id === tabFromUrl) && isProgramTabId(tabFromUrl)
        ? programTabToSectionId(tabFromUrl)
        : null;

    const hashTarget = resolveHashTarget(hash);
    if (hashTarget?.expandId) {
      setExpandedSlug(hashTarget.expandId);
    }

    const targetId = hashTarget?.sectionId || tabTarget;
    if (!targetId) return;

    hasScrolledFromUrl.current = true;
    requestAnimationFrame(() => {
      scrollToSection(targetId);
      if (isAccordionSectionId(targetId) || targetId === 'programs-recommended') {
        setActiveNavId(targetId as ProgramNavId);
      }
    });
  }, [tabFromUrl]);

  useEffect(() => {
    if (!mounted) return;

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const hashTarget = resolveHashTarget(hash);
      if (hashTarget?.expandId) {
        setExpandedSlug(hashTarget.expandId);
      }

      const targetId = hashTarget?.sectionId ?? hash;
      requestAnimationFrame(() => {
        scrollToSection(targetId);
        if (isAccordionSectionId(targetId) || targetId === 'programs-recommended') {
          setActiveNavId(targetId as ProgramNavId);
        }
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const offset = headerOffset + navHeight;
    document.documentElement.style.setProperty(
      '--programs-chrome-offset',
      `${offset}px`,
    );

    return () => {
      document.documentElement.style.removeProperty('--programs-chrome-offset');
    };
  }, [mounted, headerOffset, navHeight]);

  useEffect(() => {
    if (!mounted) return;

    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('resize', updateActiveNav);

    const nav = navRef.current;
    const resizeObserver = nav ? new ResizeObserver(updateActiveNav) : null;
    if (nav) resizeObserver?.observe(nav);

    return () => {
      window.removeEventListener('scroll', updateActiveNav);
      window.removeEventListener('resize', updateActiveNav);
      resizeObserver?.disconnect();
    };
  }, [mounted, updateActiveNav]);

  const handleToggle = (slug: string) => {
    setExpandedSlug((current) => (current === slug ? null : slug));
  };

  const chromeOffset = headerOffset + (navHeight || 61);

  const accordionSections = useMemo(
    () => new Set<ProgramAccordionSectionId>(accordionSectionIds),
    [],
  );

  return (
    <div className="relative" style={{ paddingTop: chromeOffset }}>
      {mounted &&
        createPortal(
          <nav
            id="programs-subnav"
            ref={navRef}
            aria-label="교육 과정 구역 이동"
            style={{ top: headerOffset }}
            className="fixed inset-x-0 z-40 border-b border-[#5F7C8A]/16 bg-[#FAFAF8] py-3"
          >
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 scrollbar-none lg:px-8">
              {programNavItems.map((item) => {
                const selected = activeNavId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveNavId(item.id);
                      scrollToSection(item.id);
                    }}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold tracking-[-0.02em] transition-colors ${
                      selected
                        ? 'bg-[#5F7C8A] text-[#FAFAF8]'
                        : 'border border-[#5F7C8A]/12 bg-white text-gray-500 hover:text-[#5F7C8A]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>,
          document.body,
        )}

      <div className="space-y-16 md:space-y-20">
        <section
          id="programs-recommended"
          style={{ scrollMarginTop: chromeOffset + 12 }}
          aria-label="시작하기"
        >
          <GettingStartedPathGalleries embedded />
        </section>

        {programSections.map((section) => {
          const scrollMarginTop = chromeOffset + 12;

          return (
            <section
              key={section.id}
              id={section.id}
              style={{ scrollMarginTop }}
              aria-labelledby={`${section.id}-heading`}
            >
              <div className="mb-7 max-w-2xl">
                <h2
                  id={`${section.id}-heading`}
                  className="text-2xl font-semibold tracking-[-0.04em] text-[#1A1A1A] md:text-3xl"
                >
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                  {section.subtitle}
                </p>
              </div>

              {accordionSections.has(section.id as ProgramAccordionSectionId) && (
                <ProgramCoursesAccordion
                  sectionId={section.id as ProgramAccordionSectionId}
                  expandedId={expandedSlug}
                  onToggle={handleToggle}
                  chromeOffset={chromeOffset}
                />
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

function isProgramTabId(value: string): value is ProgramTabId {
  return programTabs.some((tab) => tab.id === value);
}
