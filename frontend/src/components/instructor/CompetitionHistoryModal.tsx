'use client';

import { CompetitionHistory } from '@/components/instructor/CompetitionHistory';
import { competitionHistory } from '@/lib/content';
import { useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CompetitionHistoryModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-5">
      <button
        type="button"
        className="absolute inset-0 bg-[#1A1A1A]/45 backdrop-blur-sm"
        onClick={onClose}
        aria-label="닫기"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="competition-history-title"
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[2rem] bg-[#FAFAF8] shadow-[0_40px_120px_rgba(26,26,26,0.18)] sm:rounded-[2rem]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#5F7C8A]/12 px-6 py-6 md:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
              Career Detail
            </p>
            <h2
              id="competition-history-title"
              className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1A1A1A] md:text-3xl"
            >
              전체 대회 경력
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#6B7280] md:text-base">
              2017년 첫 국제대회부터 최근 대회까지의 활동 이력입니다.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5F7C8A]/10 text-xl text-[#5F7C8A] transition hover:bg-[#5F7C8A]/18"
            aria-label="닫기"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          <CompetitionHistory years={competitionHistory} defaultOpenCount={3} />
        </div>
      </div>
    </div>
  );
}
