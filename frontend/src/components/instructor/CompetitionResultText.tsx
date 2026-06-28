import type { ReactNode } from 'react';

const iconClassName = 'inline-block h-3.5 w-3.5 shrink-0 align-[-0.12em]';

function RankMedal({ rank }: { rank: 1 | 2 | 3 }) {
  const palette = {
    1: { fill: '#FACC15', stroke: '#CA8A04', star: '#CA8A04' },
    2: { fill: '#E2E8F0', stroke: '#94A3B8', star: '#64748B' },
    3: { fill: '#FDBA74', stroke: '#EA580C', star: '#C2410C' },
  }[rank];

  return (
    <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="13" r="6.5" fill={palette.fill} stroke={palette.stroke} strokeWidth="1.1" />
      <path
        d="M12 10.2 12.8 12.4 15.1 12.4 13.2 13.8 14 16 12 14.7 10 16 10.8 13.8 8.9 12.4 11.2 12.4Z"
        fill={palette.star}
      />
      <path d="M9 3.5 10.2 7.2 6.8 9.4l3.9.3L12 13l1.3-3.3 3.9-.3-3.4-2.2L15 3.5 12 5.8 9 3.5z" fill={palette.stroke} opacity="0.85" />
    </svg>
  );
}

function RecordStar() {
  return (
    <svg className={`${iconClassName} text-amber-500`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.4 14.2 8.2 20.5 8.6 15.6 12.4 17.2 18.6 12 15.1 6.8 18.6 8.4 12.4 3.5 8.6 9.8 8.2 12 2.4z" />
    </svg>
  );
}

function TaegeukMark() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#fff" stroke="#E4E4E7" strokeWidth="0.8" />
      <circle cx="12" cy="12" r="4.5" fill="#CD2E3A" />
      <path d="M12 7.5a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 1 0-9Z" fill="#0047A0" />
    </svg>
  );
}

const decorationPattern = /(\d+등|\d+위|신기록|국가대표)/g;

function getRank(token: string): 1 | 2 | 3 | null {
  if (token === '1등' || token === '1위') return 1;
  if (token === '2등' || token === '2위') return 2;
  if (token === '3등' || token === '3위') return 3;
  return null;
}

function decorateToken(token: string, index: number): ReactNode {
  const rank = getRank(token);

  if (rank) {
    const emphasisClass =
      rank === 1
        ? 'font-semibold text-amber-700'
        : rank === 2
          ? 'font-semibold text-slate-600'
          : 'font-semibold text-orange-700';

    return (
      <span key={`${token}-${index}`} className="inline-flex items-center gap-0.5">
        <RankMedal rank={rank} />
        <span className={emphasisClass}>{token}</span>
      </span>
    );
  }

  if (token === '신기록') {
    return (
      <span key={`${token}-${index}`} className="inline-flex items-center gap-0.5">
        <RecordStar />
        <span className="font-medium text-amber-600">{token}</span>
      </span>
    );
  }

  if (token === '국가대표') {
    return (
      <span key={`${token}-${index}`} className="inline-flex items-center gap-0.5">
        <TaegeukMark />
        <span className="font-medium text-[#B91C1C]">{token}</span>
      </span>
    );
  }

  return <span key={`${token}-${index}`}>{token}</span>;
}

export function CompetitionResultText({ text }: { text: string }) {
  const parts = text.split(decorationPattern).filter((part) => part.length > 0);

  return <>{parts.map((part, index) => decorateToken(part, index))}</>;
}
