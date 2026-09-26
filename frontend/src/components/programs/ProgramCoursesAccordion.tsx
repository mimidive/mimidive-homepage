'use client';

import { useEffect, useRef } from 'react';
import { ReadableText } from '@/components/ui/ReadableText';
import {
  getAccordionAnchorId,
  programSectionAccordions,
  type ProgramAccordionSectionId,
  type ProgramCourseLanding,
} from '@/lib/content';

function BlockIcon({ label }: { label: string }) {
  const common = 'h-5 w-5';

  if (label.includes('이론') || label.includes('상담')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M9 13h6M9 17h3" />
      </svg>
    );
  }

  if (label.includes('수영장') || label.includes('인도어') || label.includes('풀')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 12c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
      </svg>
    );
  }

  if (label.includes('바다') || label.includes('수심') || label.includes('개방')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 7.5 12 5l2.5 2.5" />
      </svg>
    );
  }

  if (label.includes('숙식') || label.includes('숙소')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19V9l9-5 9 5v10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6h6v6" />
      </svg>
    );
  }

  if (label.includes('트레이닝') || label.includes('드라이') || label.includes('후속')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.5" />
        <path strokeLinecap="round" d="M12 5v2M12 17v2M5 12h2M17 12h2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 1.5" />
    </svg>
  );
}

function parseBlockKeywords(body: string) {
  return body
    .split(/\s*·\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function CourseBlocksGrid({
  blocks,
  layout = 'stack',
}: {
  blocks: ProgramCourseLanding['blocks'];
  layout?: 'stack' | 'row' | 'row-end';
}) {
  if (layout === 'row') {
    const pair = blocks.slice(0, 2);
    const rest = blocks.slice(2);

    return (
      <div className="mt-5 space-y-2.5 md:mt-6 md:space-y-3">
        <div className="grid grid-cols-2 gap-2.5 md:gap-3">
          {pair.map((block, index) => (
            <CourseBlockCard key={block.label} block={block} index={index} />
          ))}
        </div>
        {rest.map((block, index) => (
          <CourseBlockCard key={block.label} block={block} index={index + 2} />
        ))}
      </div>
    );
  }

  if (layout === 'row-end') {
    const head = blocks.slice(0, -2);
    const pair = blocks.slice(-2);
    const pairStartIndex = Math.max(blocks.length - 2, 0);

    return (
      <div className="mt-5 space-y-2.5 md:mt-6 md:space-y-3">
        {head.map((block, index) => (
          <CourseBlockCard key={block.label} block={block} index={index} />
        ))}
        <div className="grid grid-cols-2 gap-2.5 md:gap-3">
          {pair.map((block, index) => (
            <CourseBlockCard
              key={block.label}
              block={block}
              index={pairStartIndex + index}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 grid gap-2.5 md:mt-6 md:gap-3">
      {blocks.map((block, index) => (
        <CourseBlockCard key={block.label} block={block} index={index} />
      ))}
    </div>
  );
}

function CourseBlockCard({
  block,
  index,
}: {
  block: ProgramCourseLanding['blocks'][number];
  index: number;
}) {
  const keywords = parseBlockKeywords(block.body);

  return (
    <article className="rounded-[1.25rem] border border-[#5F7C8A]/12 bg-[#FAFAF8] p-4 md:p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5F7C8A]/10 text-[#5F7C8A]">
          <BlockIcon label={block.label} />
        </span>
        <div className="min-w-0">
          <p
            className={
              block.stepLabel
                ? 'text-[11px] font-semibold tracking-[0.04em] text-[#5F7C8A]/70'
                : 'text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5F7C8A]/70'
            }
          >
            {block.stepLabel ?? String(index + 1).padStart(2, '0')}
          </p>
          <h4 className="mt-0.5 text-base font-semibold tracking-[-0.02em] text-gray-900 md:text-lg">
            {block.label}
          </h4>
        </div>
      </div>
      {block.steps && block.steps.length > 0 ? (
        <div
          className={`mt-3 grid gap-2 md:gap-2.5 ${
            block.steps.length === 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'
          }`}
        >
          {block.steps.map((step, stepIndex) => {
            const details =
              step.details ??
              (step.detail
                ? step.detail.split(/\s*,\s*/).map((part) => part.trim()).filter(Boolean)
                : []);

            return (
              <div
                key={`${block.label}-${step.title}`}
                className="rounded-xl border border-[#5F7C8A]/12 bg-white px-3 py-3 md:px-3.5 md:py-3.5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5F7C8A]/60">
                  {String(stepIndex + 1).padStart(2, '0')}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-6 tracking-[-0.01em] text-gray-900 md:text-[15px] md:leading-7">
                  {step.title}
                </p>
                {details.length > 0 ? (
                  <ul className="mt-2 space-y-1 border-t border-[#5F7C8A]/10 pt-2">
                    {details.map((item) => (
                      <li
                        key={`${step.title}-${item}`}
                        className="text-xs leading-5 text-gray-600 md:text-sm md:leading-6"
                      >
                        - {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : block.keywordsStyle === 'boxes' ? (
        <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-2.5">
          {keywords.map((keyword, keywordIndex) => (
            <div
              key={`${block.label}-${keyword}`}
              className="rounded-xl border border-[#5F7C8A]/12 bg-white px-3 py-3"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5F7C8A]/60">
                {String(keywordIndex + 1).padStart(2, '0')}
              </p>
              <p className="mt-1.5 text-sm font-medium leading-6 text-gray-800 md:text-[15px] md:leading-7">
                {keyword}
              </p>
            </div>
          ))}
        </div>
      ) : keywords.length > 0 ? (
        <ul className="mt-3 space-y-0.5">
          {keywords.map((keyword) => (
            <li
              key={`${block.label}-${keyword}`}
              className="text-sm leading-6 text-gray-600 md:text-[15px] md:leading-7"
            >
              - {keyword.replace(/\s+/g, '')}
            </li>
          ))}
        </ul>
      ) : null}
      {'note' in block && block.note ? (
        <p className="mt-3 border-t border-[#5F7C8A]/10 pt-3 text-sm leading-7 text-[#5F7C8A] md:text-[15px] md:leading-8">
          {block.note}
        </p>
      ) : null}
    </article>
  );
}

function extractWonAmount(text: string) {
  const match = text.match(/[\d,]+원/);
  if (match) return match[0];
  if (/별도\s*문의/.test(text)) return '별도 문의';
  return text.trim();
}

function extractTierLabel(text: string, fallback: string) {
  if (/체크다이빙/.test(text) && /1인/.test(text)) return '1인 / 체크다이빙';
  if (/크로스오버/.test(text)) return '크로스오버';
  if (/기존 교육생/.test(text)) return '기존 교육생';
  if (/5회/.test(text) || /10회/.test(text) || /횟수권/.test(text)) return '5회 이상 횟수권 할인';
  if (/(?<!\d)1회/.test(text)) return '1회';
  if (/(?<!\d)2회/.test(text)) return '2회 이상';
  if (/1인/.test(text)) return '1인';
  if (/2인/.test(text)) return '2인 이상';
  return fallback;
}

function parseExtraPriceRows(footnote: string) {
  if (!/원|별도\s*문의|횟수권/.test(footnote)) return [];

  return footnote
    .split(/[·\n]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => ({
      label: extractTierLabel(part, ''),
      amount: extractWonAmount(part),
    }));
}

function buildPriceRows(
  price: string,
  priceNote?: string,
): { rows: { label: string; amount: string }[]; footnote?: string } {
  if (!priceNote) {
    return { rows: [{ label: '', amount: extractWonAmount(price) }] };
  }

  const priceHas1 = /1인|(?<!\d)1회/.test(price);
  const priceHas2 = /2인|(?<!\d)2회/.test(price);
  const noteHas1 = /1인|(?<!\d)1회/.test(priceNote);
  const noteHas2 = /2인|(?<!\d)2회/.test(priceNote);
  const isTiered = (priceHas1 || noteHas1) && (priceHas2 || noteHas2);

  if (!isTiered) {
    if (priceNote && /원/.test(priceNote)) {
      return {
        rows: [
          { label: '', amount: extractWonAmount(price) },
          {
            label: extractTierLabel(priceNote, ''),
            amount: extractWonAmount(priceNote),
          },
        ],
      };
    }

    return {
      rows: [{ label: '', amount: extractWonAmount(price) }],
      footnote: priceNote,
    };
  }

  const noteParts = priceNote
    .split(/[·\n]/)
    .map((part) => part.trim())
    .filter(Boolean);

  const oneFromNote = noteParts.find((part) => /1인|(?<!\d)1회/.test(part));
  const twoFromNote = noteParts.find((part) => /2인|(?<!\d)2회/.test(part));
  const onePersonSource = priceHas1 ? price : (oneFromNote ?? priceNote);
  const twoPersonSource = priceHas2 ? price : (twoFromNote ?? priceNote);
  const rows = [
    {
      label: extractTierLabel(onePersonSource, /(?<!\d)1회/.test(onePersonSource) ? '1회' : '1인'),
      amount: extractWonAmount(onePersonSource),
    },
    {
      label: extractTierLabel(twoPersonSource, /(?<!\d)2회/.test(twoPersonSource) ? '2회 이상' : '2인 이상'),
      amount: extractWonAmount(twoPersonSource),
    },
  ];

  const remainder = noteParts
    .filter((part) => part !== onePersonSource && part !== twoPersonSource)
    .join(' · ')
    .trim();

  const extraRows = parseExtraPriceRows(remainder);
  if (extraRows.length > 0) {
    return { rows: [...rows, ...extraRows] };
  }

  return { rows, footnote: remainder || undefined };
}

function StandardPricePanel({ price, priceNote }: { price: string; priceNote?: string }) {
  const { rows, footnote } = buildPriceRows(price, priceNote);
  const priceClassName = 'shrink-0 text-right tabular-nums font-semibold text-gray-900';

  return (
    <>
      <h4 className="text-lg font-semibold tracking-[-0.03em] text-gray-900 md:text-xl">Price</h4>

      <div className="mt-6 overflow-hidden rounded-[1rem] border border-[#5F7C8A]/10">
        {rows.map((row, index) => (
          <div
            key={`${row.label}-${row.amount}`}
            className={`flex items-center justify-between gap-4 bg-[#FAFAF8] px-4 py-3.5 md:px-5 ${
              index > 0 ? 'border-t border-[#5F7C8A]/10' : ''
            }`}
          >
            {row.label ? (
              <span className="text-sm text-gray-600 md:text-base">{row.label}</span>
            ) : (
              <span className="sr-only">수강료</span>
            )}
            <span
              className={`${priceClassName} ${
                row.label ? 'text-sm md:text-base' : 'text-lg md:text-xl'
              }`}
            >
              {row.amount}
            </span>
          </div>
        ))}
      </div>

      {footnote && (
        <p className="mt-3 text-sm leading-6 text-gray-500">{footnote}</p>
      )}
    </>
  );
}

function PackagePricePanel({
  pricing,
}: {
  pricing: NonNullable<ProgramCourseLanding['packagePricing']>;
}) {
  const priceClassName = 'shrink-0 text-right tabular-nums';

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
            <span className={`text-sm font-semibold text-gray-900 md:text-base ${priceClassName}`}>
              {item.price}
            </span>
          </div>
        ))}

        <div className="flex items-center justify-between gap-4 border-t border-[#5F7C8A]/10 bg-white px-4 py-3.5 md:px-5">
          <span className="text-sm font-medium text-gray-500 md:text-base">합계</span>
          <span
            className={`text-base font-semibold text-gray-400 line-through decoration-2 md:text-lg ${priceClassName}`}
          >
            {pricing.subtotal}
          </span>
        </div>

        <div className="relative border-t border-[#5F7C8A]/10 bg-[#DCECEF]/50 px-4 py-5 md:px-6 md:py-6">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5F7C8A]">
                레벨 1+2 패키지
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#E8C9A0] px-3 py-1 text-xs font-bold text-[#1A1A1A] md:text-sm">
                  {pricing.savingsAmount}
                </span>
                <span className="rounded-full bg-[#5F7C8A] px-3 py-1 text-xs font-bold text-[#FAFAF8] md:text-sm">
                  {pricing.savingsPercent}
                </span>
              </div>
            </div>
            <p
              className={`text-3xl font-semibold tracking-[-0.04em] text-[#1A1A1A] md:text-4xl ${priceClassName}`}
            >
              {pricing.packagePrice}
            </p>
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
      className="border-t border-[#5F7C8A]/12 bg-white px-5 py-6 md:px-8 md:py-8"
    >
      <p className="text-sm font-medium text-[#5F7C8A] md:text-base">{course.duration}</p>
      <ReadableText
        text={course.lead}
        className="mt-3 max-w-3xl"
        gap="xs"
        sentenceClassName="text-base leading-7 text-gray-700 md:text-lg md:leading-8"
      />

      <CourseBlocksGrid blocks={course.blocks} layout={course.blocksLayout} />
      {course.blocksNote ? (
        <ReadableText
          text={course.blocksNote}
          className="mt-4 max-w-3xl"
          gap="xs"
          sentenceClassName="break-keep text-pretty text-base font-medium leading-7 text-gray-800 md:text-lg md:leading-8"
        />
      ) : null}

      <div className="mt-6 border-t border-[#5F7C8A]/12 pt-5">
        {course.packagePricing ? (
          <PackagePricePanel pricing={course.packagePricing} />
        ) : (
          <StandardPricePanel price={course.price} priceNote={course.priceNote} />
        )}
      </div>

      {!course.packagePricing && course.discounts && (
        <div className="mt-4 divide-y divide-[#5F7C8A]/10 overflow-hidden rounded-[1rem] border border-[#5F7C8A]/10">
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
              <span className="shrink-0 text-right text-sm font-semibold text-[#5F7C8A]">
                {discount.value}
              </span>
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
                    {course.badge && (
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.04em] sm:text-xs ${
                          isFeatured
                            ? 'bg-[#E8C9A0]/55 text-[#1A1A1A]'
                            : 'bg-sky-50 text-sky-700'
                        }`}
                      >
                        <svg
                          className="h-3 w-3 shrink-0"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M12 2.5l2.6 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17.8 6.1 20.6l1.6-6.7-5.2-4.5 6.9-.6L12 2.5z" />
                        </svg>
                        {course.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-gray-900 md:text-2xl">
                      {course.title}
                    </h3>
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
