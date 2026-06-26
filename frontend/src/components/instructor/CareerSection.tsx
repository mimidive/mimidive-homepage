'use client';

import { useState } from 'react';
import { CompetitionHistoryModal } from '@/components/instructor/CompetitionHistoryModal';
import { careerMilestones } from '@/lib/content';

export function CareerSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {careerMilestones.map((item) => (
          <article key={`${item.label}-${item.title}`} className="content-card rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold text-zinc-400">{item.label}</p>
            <h3 className="mt-4 text-xl font-bold leading-8 tracking-[-0.035em] text-zinc-900">
              {item.title}
            </h3>
            {item.label === '2017' && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-5 inline-flex items-center rounded-full bg-[#5F7C8A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#4f6e7c] hover:shadow-md"
              >
                대회 경력 자세히보기
              </button>
            )}
          </article>
        ))}
      </div>
      <CompetitionHistoryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
