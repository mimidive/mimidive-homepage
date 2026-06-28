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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-5">
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
        className="relative flex h-[min(96vh,920px)] w-full max-w-[88rem] flex-col overflow-hidden rounded-[2rem] bg-[#FAFAF8] shadow-[0_40px_120px_rgba(26,26,26,0.18)]"
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[#5F7C8A]/12 px-5 py-4 md:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
              Career Detail
            </p>
            <h2
              id="competition-history-title"
              className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[#1A1A1A] md:text-2xl"
            >
              대회 경력
            </h2>
            <p className="mt-1 text-xs leading-6 text-[#6B7280] md:text-sm">
              2017년 첫 국제대회부터 최근 대회까지, 연도별 활동 이력입니다.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5F7C8A]/10 text-xl text-[#5F7C8A] transition hover:bg-[#5F7C8A]/18"
            aria-label="닫기"
          >
            ×
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-5">
          <CompetitionHistory
            years={competitionHistory}
            collapsible={false}
            layout="overview"
          />
        </div>
      </div>
    </div>
  );
}
