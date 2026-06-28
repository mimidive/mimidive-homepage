'use client';

import type { CompetitionYear } from '@/lib/content';
import { useState } from 'react';

type Props = {
  years: readonly CompetitionYear[];
  defaultOpenCount?: number;
  collapsible?: boolean;
  layout?: 'stack' | 'overview';
};

function EntryList({
  year,
  entries,
  compact = false,
}: {
  year: number;
  entries: CompetitionYear['entries'];
  compact?: boolean;
}) {
  return (
    <ul className={compact ? 'space-y-2' : 'space-y-3.5'}>
      {entries.map((entry) => (
        <li
          key={`${year}-${entry.event}`}
          className={
            compact
              ? 'space-y-0.5'
              : 'grid gap-1.5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-x-8 md:gap-y-1'
          }
        >
          <p
            className={`${
              compact ? 'text-xs leading-5' : 'text-sm leading-7 md:text-[15px] md:leading-8'
            } ${entry.highlight ? 'font-semibold text-[#1A1A1A]' : 'text-[#1A1A1A]'}`}
          >
            {entry.event}
          </p>
          <p
            className={`${
              compact ? 'text-xs leading-5' : 'text-sm leading-7 md:text-[15px] md:leading-8'
            } ${entry.highlight ? 'font-medium text-[#5F7C8A]' : 'text-[#6B7280]'}`}
          >
            {entry.result}
          </p>
        </li>
      ))}
    </ul>
  );
}

function YearBlock({ item, compact = false }: { item: CompetitionYear; compact?: boolean }) {
  if (compact) {
    return (
      <section className="content-card h-full rounded-2xl p-4">
        <p className="text-lg font-bold tracking-[-0.04em] text-[#1A1A1A]">{item.year}</p>
        {item.summary && (
          <p className="mt-1 text-[11px] leading-5 text-[#6B7280]">{item.summary}</p>
        )}
        <div className="mt-3">
          <EntryList year={item.year} entries={item.entries} compact />
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="border-b border-[#5F7C8A]/14 pb-4">
        <p className="text-2xl font-bold tracking-[-0.04em] text-[#1A1A1A] md:text-3xl">
          {item.year}
        </p>
        {item.summary && (
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6B7280] md:text-[15px] md:leading-8">
            {item.summary}
          </p>
        )}
      </div>
      <div className="mt-5">
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
  const [openYears, setOpenYears] = useState<Set<number>>(
    () => new Set(years.slice(0, defaultOpenCount).map((item) => item.year)),
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
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {years.map((item) => (
          <YearBlock key={item.year} item={item} compact />
        ))}
      </div>
    );
  }

  if (!collapsible) {
    return (
      <div className="space-y-10 md:space-y-12">
        {years.map((item) => (
          <YearBlock key={item.year} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {years.map((item) => {
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
                    {item.summary}
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
