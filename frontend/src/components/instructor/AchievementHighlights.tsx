import type { ReactElement } from 'react';
import { instructorIntroCopy } from '@/lib/responsiveCopy';

const iconClassName = 'h-5 w-5 shrink-0';

function TrophyIcon() {
  return (
    <svg className={`${iconClassName} text-amber-500`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 3h12v2c0 2.8-1.6 5.2-4 6.4V15h3v2H7v-2h3v-3.6C7.6 10.2 6 7.8 6 5V3zm2 2v.2c0 1.9 1.2 3.6 3 4.3 1.8-.7 3-2.4 3-4.3V5H8zm1 14h6v2H9v-2z" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.5 3 10 8.2 6 11.5l5.2.4L12 17l.8-5.1 5.2-.4-4-3.3L15.5 3 12 6.2 8.5 3z" fill="#EAB308" />
      <circle cx="12" cy="15.5" r="5.5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.2" />
      <path
        d="M12 13.2 12.9 15.5 15.4 15.5 13.3 17 14.1 19.3 12 17.9 9.9 19.3 10.7 17 8.6 15.5 11.1 15.5Z"
        fill="#CA8A04"
      />
    </svg>
  );
}

function KoreaFlagIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill="#fff" stroke="#E4E4E7" strokeWidth="0.8" />
      <circle cx="12" cy="12" r="4.2" fill="#CD2E3A" />
      <path d="M12 7.8a4.2 4.2 0 0 1 0 8.4 4.2 4.2 0 0 1 0-8.4Z" fill="#0047A0" />
      <g fill="#0F172A" opacity="0.85">
        <rect x="3.2" y="4.2" width="1.1" height="3.2" />
        <rect x="2.1" y="5.3" width="3.2" height="1.1" />
        <rect x="19.7" y="4.2" width="1.1" height="3.2" />
        <rect x="18.6" y="5.3" width="3.2" height="1.1" />
        <rect x="3.2" y="16.6" width="1.1" height="3.2" />
        <rect x="2.1" y="17.7" width="3.2" height="1.1" />
        <rect x="19.7" y="16.6" width="1.1" height="3.2" />
        <rect x="18.6" y="17.7" width="3.2" height="1.1" />
      </g>
    </svg>
  );
}

const highlights = [
  { text: instructorIntroCopy.subtitle.mobile[0], Icon: TrophyIcon },
  { text: instructorIntroCopy.subtitle.mobile[1], Icon: MedalIcon },
  { text: instructorIntroCopy.subtitle.mobile[2], Icon: KoreaFlagIcon },
] as const;

function HighlightLine({ text, Icon }: { text: string; Icon: () => ReactElement }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Icon />
      <span>{text}</span>
    </span>
  );
}

export function AchievementHighlights({ className = '' }: { className?: string }) {
  return (
    <span
      className={`break-keep text-pretty [word-break:keep-all] [overflow-wrap:normal] ${className}`}
    >
      <span className="flex flex-col gap-2.5 md:hidden">
        {highlights.map(({ text, Icon }) => (
          <HighlightLine key={text} text={text} Icon={Icon} />
        ))}
      </span>
      <span className="hidden md:inline">
        {highlights.map(({ text, Icon }, index) => (
          <span key={text}>
            {index > 0 ? <span className="mx-2 text-zinc-400">·</span> : null}
            <HighlightLine text={text} Icon={Icon} />
          </span>
        ))}
      </span>
    </span>
  );
}
