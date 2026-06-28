import { BRAND } from '@/lib/content';

const iconClassName = 'h-6 w-6';

const linkBaseClassName =
  'inline-flex items-center justify-center p-2 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5';

const platformLinkClassName = {
  instagram: 'text-[#E4405F] hover:text-[#C13584]',
  youtube: 'text-[#FF0000] hover:text-[#CC0000]',
  naver: 'text-[#03C75A] hover:text-[#02A84A]',
} as const;

function InstagramIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function NaverBlogIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.273 3.098v8.836L7.451 3.098H3.091v17.804h4.36V12.066l8.822 8.836h4.36V3.098z" />
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
      className={`flex items-center gap-3 ${align === 'start' ? 'justify-start' : 'justify-center'} ${className}`}
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
