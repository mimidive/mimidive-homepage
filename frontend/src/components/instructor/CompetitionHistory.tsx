'use client';

import type { CompetitionYear } from '@/lib/content';
import { CompetitionResultText } from '@/components/instructor/CompetitionResultText';
import { FluorescentHighlight } from '@/components/ui/FluorescentHighlight';
import { useState } from 'react';

type Props = {
  years: readonly CompetitionYear[];
  defaultOpenCount?: number;
  collapsible?: boolean;
  layout?: 'stack' | 'overview';
};

function ResultParts({
  result,
  emphasize,
}: {
  result: string;
  emphasize?: boolean;
}) {
  const parts = result
    .split(/\s*·\s*/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
      {parts.map((part) => (
        <li key={part} className="min-w-0">
          {part.includes('신기록') ? (
            <FluorescentHighlight>
              <CompetitionResultText text={part} />
            </FluorescentHighlight>
          ) : (
            <span className={emphasize ? 'font-medium text-[#5F7C8A]' : 'text-[#6B7280]'}>
              <CompetitionResultText text={part} />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function EntryList({
  year,
  entries,
  variant = 'plain',
}: {
  year: number;
  entries: CompetitionYear['entries'];
  variant?: 'plain' | 'cards';
}) {
  return (
    <ul className={`m-0 grid list-none p-0 ${variant === 'cards' ? 'gap-2' : 'gap-y-4'}`}>
      {entries.map((entry) => {
        const hasResult = entry.result.trim().length > 0;

        return (
          <li
            key={`${year}-${entry.event}`}
            className={
              variant === 'cards'
                ? 'grid grid-cols-1 items-start gap-1.5 rounded-2xl border border-[#5F7C8A]/10 bg-white/85 p-3 text-sm leading-6 shadow-sm shadow-[#5F7C8A]/5 [word-break:keep-all] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-x-5 md:px-4 md:py-3.5 md:text-[15px] md:leading-7'
                : 'grid grid-cols-1 items-start gap-1.5 break-keep text-pretty text-sm leading-7 [word-break:keep-all] md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-8 md:text-[15px] md:leading-8'
            }
          >
            <p
              className={
                entry.highlight
                  ? 'break-keep text-pretty font-semibold text-[#1A1A1A]'
                  : 'break-keep text-pretty text-[#1A1A1A]'
              }
            >
              <CompetitionResultText text={entry.event} />
            </p>
            {hasResult ? (
              <div className={variant === 'cards' ? 'border-t border-[#5F7C8A]/10 pt-2 md:border-t-0 md:pt-0' : undefined}>
                <ResultParts result={entry.result} emphasize={entry.highlight} />
              </div>
            ) : (
              <span className="hidden md:block" aria-hidden />
            )}
          </li>
        );
      })}
    </ul>
  );
}

function YearBlock({ item }: { item: CompetitionYear }) {
  return (
    <section className="grid grid-cols-1 gap-4 border-b border-[#5F7C8A]/12 pb-10 last:border-b-0 last:pb-0 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-x-8 md:pb-12">
      <p className="text-2xl font-bold leading-none tracking-[-0.04em] text-[#5F7C8A] md:pt-1 md:text-3xl">
        {item.year}
      </p>
      <div className="min-w-0">
        {item.summary ? (
          <p className="mb-5 break-keep text-pretty text-sm leading-7 text-[#6B7280] [word-break:keep-all] md:text-[15px] md:leading-8">
            <CompetitionResultText text={item.summary} />
          </p>
        ) : null}
        <EntryList year={item.year} entries={item.entries} />
      </div>
    </section>
  );
}

function OverviewYearBlock({ item }: { item: CompetitionYear }) {
  return (
    <section className="relative grid gap-3 rounded-[1.5rem] border border-[#5F7C8A]/12 bg-[#FAFAF8] p-4 shadow-sm shadow-[#5F7C8A]/5 md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-5 md:p-5">
      <div className="md:border-r md:border-[#5F7C8A]/12 md:pr-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5F7C8A]/70">
          Year
        </p>
        <p className="mt-1.5 text-2xl font-extrabold leading-none tracking-[-0.06em] text-[#5F7C8A] md:text-3xl">
          {item.year}
        </p>
      </div>
      <div className="min-w-0">
        {item.summary ? (
          <p className="mb-2.5 rounded-2xl bg-[#5F7C8A]/8 px-3.5 py-2 break-keep text-pretty text-sm font-medium leading-6 text-[#4f6e7c] [word-break:keep-all] md:text-[15px] md:leading-7">
            <CompetitionResultText text={item.summary} />
          </p>
        ) : null}
        <EntryList year={item.year} entries={item.entries} variant="cards" />
      </div>
    </section>
  );
}

export function CompetitionHistory({
  years,
  defaultOpenCount = 2,
  collapsible = true,
  layout = 'stack',
}: Props) {
  const orderedYears = [...years].sort((a, b) => a.year - b.year);

  const [openYears, setOpenYears] = useState<Set<number>>(
    () => new Set(orderedYears.slice(-defaultOpenCount).map((item) => item.year)),
  );

  const toggleYear = (year: number) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  };

  if (!collapsible && layout === 'overview') {
    return (
      <div className="mx-auto max-w-5xl space-y-3 md:space-y-3.5">
        {orderedYears.map((item) => (
          <OverviewYearBlock key={item.year} item={item} />
        ))}
      </div>
    );
  }

  if (!collapsible) {
    return (
      <div className="mx-auto max-w-4xl space-y-10 md:space-y-0">
        {orderedYears.map((item) => (
          <YearBlock key={item.year} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {orderedYears.map((item) => {
        const isOpen = openYears.has(item.year);

        return (
          <div key={item.year} className="content-card rounded-[1.75rem]">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 p-6 text-left md:p-8"
              onClick={() => toggleYear(item.year)}
              aria-expanded={isOpen}
            >
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-[#5F7C8A]">
                  {item.year}
                </p>
                {item.summary && (
                  <p className="mt-2 text-sm leading-7 text-[#6B7280] md:text-base md:leading-8">
                    <CompetitionResultText text={item.summary} />
                  </p>
                )}
              </div>
              <span
                className={`shrink-0 text-xl font-light text-[#5F7C8A] transition ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-[#5F7C8A]/12 px-6 pb-6 pt-2 md:px-8 md:pb-8">
                <EntryList year={item.year} entries={item.entries} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
