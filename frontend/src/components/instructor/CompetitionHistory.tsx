'use client';

import type { CompetitionYear } from '@/lib/content';
import { useState } from 'react';

type Props = {
  years: readonly CompetitionYear[];
  defaultOpenCount?: number;
};

export function CompetitionHistory({ years, defaultOpenCount = 2 }: Props) {
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
                <ul className="space-y-4">
                  {item.entries.map((entry) => (
                    <li
                      key={`${item.year}-${entry.event}`}
                      className="grid gap-2 border-b border-[#5F7C8A]/10 pb-4 last:border-0 last:pb-0 md:grid-cols-[1.1fr_1fr] md:gap-6"
                    >
                      <p
                        className={`text-sm leading-7 md:text-base md:leading-8 ${
                          entry.highlight ? 'font-semibold text-[#1A1A1A]' : 'text-[#1A1A1A]'
                        }`}
                      >
                        {entry.event}
                      </p>
                      <p
                        className={`text-sm leading-7 md:text-base md:leading-8 ${
                          entry.highlight ? 'font-medium text-[#5F7C8A]' : 'text-[#6B7280]'
                        }`}
                      >
                        {entry.result}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
