'use client';

import { useEffect, useRef } from 'react';
import { ReadableText } from '@/components/ui/ReadableText';
import {
  getAccordionAnchorId,
  isAccordionCourseId,
  programSectionAccordions,
  type ProgramAccordionSectionId,
  type ProgramCourseLanding,
} from '@/lib/content';

function BlockSection({ label, body }: { label: string; body: string }) {
  return (
    <section>
      <h4 className="text-base font-semibold tracking-[-0.02em] text-gray-900 md:text-lg">
        {label}
      </h4>
      <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base md:leading-8">{body}</p>
    </section>
  );
}

function PackagePricePanel({
  pricing,
}: {
  pricing: NonNullable<ProgramCourseLanding['packagePricing']>;
}) {
  return (
    <>
      <h4 className="text-lg font-semibold tracking-[-0.03em] text-gray-900 md:text-xl">Price</h4>

      <div className="mt-6 overflow-hidden rounded-[1rem] border border-[#5F7C8A]/10">
        {pricing.items.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center justify-between gap-4 bg-[#FAFAF8] px-4 py-3.5 md:px-5 ${
              index > 0 ? 'border-t border-[#5F7C8A]/10' : ''
            }`}
          >
            <span className="text-sm text-gray-600 md:text-base">{item.label}</span>
            <span className="text-sm font-semibold tabular-nums text-gray-900 md:text-base">
              {item.price}
            </span>
          </div>
        ))}

        <div className="flex items-center justify-between gap-4 border-t border-[#5F7C8A]/10 bg-white px-4 py-3.5 md:px-5">
          <span className="text-sm font-medium text-gray-500 md:text-base">Level 1 + 2 합계</span>
          <span className="text-base font-semibold tabular-nums text-gray-400 line-through decoration-2 md:text-lg">
            {pricing.subtotal}
          </span>
        </div>

        <div className="relative border-t border-[#5F7C8A]/10 bg-[#DCECEF]/50 px-4 py-5 md:px-6 md:py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5F7C8A]">패키지</p>
          <div className="mt-2 flex flex-wrap items-end gap-3">
            <p className="text-3xl font-semibold tabular-nums tracking-[-0.04em] text-[#1A1A1A] md:text-4xl">
              {pricing.packagePrice}
            </p>
            <div className="flex flex-wrap gap-2 pb-1">
              <span className="rounded-full bg-[#E8C9A0] px-3 py-1 text-xs font-bold text-[#1A1A1A] md:text-sm">
                {pricing.savingsAmount}
              </span>
              <span className="rounded-full bg-[#5F7C8A] px-3 py-1 text-xs font-bold text-[#FAFAF8] md:text-sm">
                {pricing.savingsPercent}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ExpandedPanel({ course }: { course: ProgramCourseLanding }) {
  return (
    <div
      id={`program-panel-${course.id}`}
      className="border-t border-[#5F7C8A]/12 bg-white px-6 py-8 md:px-10 md:py-10"
    >
      <p className="text-sm font-medium text-[#5F7C8A] md:text-base">{course.duration}</p>
      <p className="mt-5 max-w-3xl text-base leading-8 text-gray-700 md:text-lg md:leading-9">
        {course.lead}
      </p>

      <div className="mt-8 space-y-7 md:mt-10 md:space-y-8">
        {course.blocks.map((block) => (
          <BlockSection key={block.label} label={block.label} body={block.body} />
        ))}
      </div>

      <div className="mt-10 border-t border-[#5F7C8A]/12 pt-8">
        {course.packagePricing ? (
          <PackagePricePanel pricing={course.packagePricing} />
        ) : (
          <>
            <h4 className="text-lg font-semibold tracking-[-0.03em] text-gray-900 md:text-xl">
              Price : {course.price}
            </h4>
            {course.priceNote && (
              <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-500">
                {course.priceNote}
              </p>
            )}
          </>
        )}
      </div>

      {!course.packagePricing && course.discounts && (
        <div className="mt-6 divide-y divide-[#5F7C8A]/10 overflow-hidden rounded-[1rem] border border-[#5F7C8A]/10">
          {course.discounts.map((discount) => (
            <div
              key={discount.label}
              className="flex items-center justify-between gap-4 bg-[#FAFAF8] px-4 py-3.5 md:px-5"
            >
              <div className="min-w-0">
                <span className="text-sm text-gray-600">{discount.label}</span>
                {discount.note && (
                  <p className="mt-1 text-xs leading-5 text-gray-500">{discount.note}</p>
                )}
              </div>
              <span className="shrink-0 text-sm font-semibold text-[#5F7C8A]">{discount.value}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

type Props = {
  sectionId: ProgramAccordionSectionId;
  expandedId: string | null;
  onToggle: (id: string) => void;
  chromeOffset: number;
};

export function ProgramCoursesAccordion({ sectionId, expandedId, onToggle, chromeOffset }: Props) {
  const config = programSectionAccordions[sectionId];
  const scrolledToRef = useRef<string | null>(null);

  useEffect(() => {
    const order = config.order as readonly string[];
    if (!expandedId || !order.includes(expandedId)) {
      scrolledToRef.current = null;
      return;
    }
    if (scrolledToRef.current === expandedId) return;

    scrolledToRef.current = expandedId;
    requestAnimationFrame(() => {
      const el = document.getElementById(getAccordionAnchorId(expandedId));
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - chromeOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
    });
  }, [expandedId, chromeOffset, config.order]);

  return (
    <div>
      <div className="space-y-0 divide-y divide-[#5F7C8A]/12 overflow-hidden rounded-[1.5rem] border border-[#5F7C8A]/10 bg-[#FAFAF8]">
        {config.order.map((courseId, index) => {
          const course = config.landings[courseId as keyof typeof config.landings] as ProgramCourseLanding;
          const expanded = expandedId === courseId;
          const panelId = `program-panel-${courseId}`;
          const isFeatured = course.featured;

          return (
            <article
              key={courseId}
              id={getAccordionAnchorId(courseId)}
              style={{ scrollMarginTop: chromeOffset + 12 }}
              className={isFeatured ? 'bg-[#DCECEF]/40' : 'bg-[#FAFAF8]'}
            >
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => onToggle(courseId)}
                className="group flex w-full items-center gap-4 px-5 py-5 text-left md:gap-6 md:px-8 md:py-6"
              >
                <span className="hidden w-8 shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-[#5F7C8A]/50 sm:block">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-gray-900 md:text-2xl">
                      {course.title}
                    </h3>
                    {course.badge && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs ${
                          isFeatured
                            ? 'bg-[#E8C9A0]/40 text-[#1A1A1A]'
                            : 'bg-sky-50 text-sky-700'
                        }`}
                      >
                        {course.badge}
                      </span>
                    )}
                  </div>
                  {!expanded && (
                    <p className="mt-1.5 line-clamp-1 text-sm text-gray-500 md:text-base">
                      {course.duration}
                    </p>
                  )}
                </div>

                <span
                  className={`shrink-0 text-xs font-semibold transition md:text-sm ${
                    expanded ? 'text-[#5F7C8A]' : 'text-gray-400 group-hover:text-[#5F7C8A]'
                  }`}
                >
                  {expanded ? '접기 ↑' : '자세히 보기 ↓'}
                </span>
              </button>

              {expanded && <ExpandedPanel course={course} />}
            </article>
          );
        })}
      </div>

      <div className="mt-12 space-y-12 md:mt-16">
        <section
          id={`${sectionId}-includes`}
          className="rounded-[1.5rem] border border-[#5F7C8A]/10 bg-[#FAFAF8] p-6 md:p-8"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
            {config.shared.includesTitle}
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
            {config.shared.includes.join(' · ')}
          </p>
        </section>

        <section
          id={`${sectionId}-faq`}
          className="rounded-[1.5rem] border border-[#5F7C8A]/10 bg-[#FAFAF8] p-6 md:p-8"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
            {config.shared.faqTitle}
          </h3>
          <div className="mt-6 space-y-3">
            {config.shared.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#5F7C8A]/10 bg-white/60"
              >
                <summary className="cursor-pointer list-none px-5 py-4 md:px-6 md:py-5">
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-sm font-semibold leading-7 text-gray-900 md:text-base">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#5F7C8A] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="border-t border-[#5F7C8A]/10 px-5 pb-4 pt-3 md:px-6 md:pb-5">
                  <ReadableText
                    text={faq.answer}
                    gap="sm"
                    sentenceClassName="text-sm leading-7 text-gray-600 md:text-base md:leading-8"
                  />
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
