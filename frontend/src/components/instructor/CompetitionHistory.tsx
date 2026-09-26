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
}: {
  year: number;
  entries: CompetitionYear['entries'];
}) {
  return (
    <ul className="m-0 grid list-none gap-y-4 p-0">
      {entries.map((entry) => {
        const hasResult = entry.result.trim().length > 0;

        return (
          <li
            key={`${year}-${entry.event}`}
            className="grid grid-cols-1 items-start gap-1.5 break-keep text-pretty text-sm leading-7 [word-break:keep-all] md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-8 md:text-[15px] md:leading-8"
          >
            <p className={entry.highlight ? 'font-semibold text-[#1A1A1A]' : 'text-[#1A1A1A]'}>
              <CompetitionResultText text={entry.event} />
            </p>
            {hasResult ? (
              <ResultParts result={entry.result} emphasize={entry.highlight} />
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
      <div className="mx-auto max-w-4xl space-y-10 md:space-y-0">
        {orderedYears.map((item) => (
          <YearBlock key={item.year} item={item} />
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
