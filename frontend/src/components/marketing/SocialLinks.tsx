import { BRAND } from '@/lib/content';

const iconClassName = 'h-5 w-5';

const linkBaseClassName =
  'inline-flex items-center justify-center rounded-full bg-white/50 p-3 shadow-sm backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-white/80';

const platformLinkClassName = {
  instagram:
    'text-[#E4405F] ring-1 ring-[#E4405F]/30 hover:text-[#C13584] hover:ring-[#C13584]/45',
  youtube: 'text-[#FF0000] ring-1 ring-[#FF0000]/28 hover:text-[#CC0000] hover:ring-[#CC0000]/42',
  naver: 'text-[#03C75A] ring-1 ring-[#03C75A]/30 hover:text-[#02A84A] hover:ring-[#02A84A]/45',
} as const;

function InstagramIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="social-instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="30%" stopColor="#DD2A7B" />
          <stop offset="60%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        stroke="url(#social-instagram-gradient)"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="4.1" stroke="url(#social-instagram-gradient)" strokeWidth="1.75" />
      <circle cx="17.35" cy="6.65" r="1.05" fill="url(#social-instagram-gradient)" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.25 8.2c0-1.45 1.15-2.6 2.6-2.6h10.3c1.45 0 2.6 1.15 2.6 2.6v7.6c0 1.45-1.15 2.6-2.6 2.6H6.85c-1.45 0-2.6-1.15-2.6-2.6V8.2Z"
        stroke="#FF0000"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M11.1 9.75 15.4 12l-4.3 2.25V9.75Z"
        fill="#FF0000"
        stroke="#FF0000"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NaverBlogIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="4.5"
        stroke="#03C75A"
        strokeWidth="1.75"
      />
      <path
        d="M8.25 7.5v9M8.25 7.5 12.75 16.5M12.75 7.5v9"
        stroke="#03C75A"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.25 7.5v9" stroke="#03C75A" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function SocialLinks({
  className = '',
  align = 'center',
}: {
  className?: string;
  align?: 'center' | 'start';
}) {
  return (
    <div
      className={`flex items-center gap-2.5 ${align === 'start' ? 'justify-start' : 'justify-center'} ${className}`}
    >
      <a
        href={BRAND.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram @${BRAND.instagram}`}
        className={`${linkBaseClassName} ${platformLinkClassName.instagram}`}
      >
        <InstagramIcon />
      </a>
      <a
        href={BRAND.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`YouTube @${BRAND.youtube}`}
        className={`${linkBaseClassName} ${platformLinkClassName.youtube}`}
      >
        <YouTubeIcon />
      </a>
      <a
        href={BRAND.blogUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="네이버 블로그 미미다이브"
        className={`${linkBaseClassName} ${platformLinkClassName.naver}`}
      >
        <NaverBlogIcon />
      </a>
    </div>
  );
}
