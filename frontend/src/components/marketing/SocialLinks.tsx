import { BRAND } from '@/lib/content';

const linkClassName =
  'inline-flex items-center justify-center rounded-full p-2.5 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-105';

function InstagramIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="30%" stopColor="#DD2A7B" />
          <stop offset="60%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <path
        fill="url(#instagram-gradient)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.153 1.77 4.92 4.92 0 0 1-1.77 1.153c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.77-1.153 4.92 4.92 0 0 1-1.153-1.77c-.163-.457-.349-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.153-1.77 4.92 4.92 0 0 1 1.77-1.153c.457-.163 1.257-.349 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.622c-3.15 0-3.512.012-4.745.069-1.026.047-1.584.218-1.955.363-.492.192-.843.42-1.211.788a3.32 3.32 0 0 0-.788 1.211c-.145.371-.316.929-.363 1.955-.057 1.233-.069 1.595-.069 4.745s.012 3.512.069 4.745c.047 1.026.218 1.584.363 1.955.192.492.42.843.788 1.211.368.368.719.596 1.211.788.371.145.929.316 1.955.363 1.233.057 1.595.069 4.745.069s3.512-.012 4.745-.069c1.026-.047 1.584-.218 1.955-.363.492-.192.843-.42 1.211-.788.368-.368.596-.719.788-1.211.145-.371.316-.929.363-1.955.057-1.233.069-1.595.069-4.745s-.012-3.512-.069-4.745c-.047-1.026-.218-1.584-.363-1.955a3.32 3.32 0 0 0-.788-1.211 3.32 3.32 0 0 0-1.211-.788c-.371-.145-.929-.316-1.955-.363C15.512 3.797 15.15 3.785 12 3.785zm0 3.838a4.377 4.377 0 1 1 0 8.754 4.377 4.377 0 0 1 0-8.754zm0 1.622a2.755 2.755 0 1 0 0 5.51 2.755 2.755 0 0 0 0-5.51zm5.338-2.87a1.024 1.024 0 1 1-2.048 0 1.024 1.024 0 0 1 2.048 0z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

function NaverBlogIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#03C75A" />
      <path
        fill="#FFFFFF"
        d="M5.5 7.2h2.45l2.62 4.52 2.38-4.52H15v9.6h-2.05V11.4l-2.45 4.2h-1.2l-2.45-4.2v5.4H5.5V7.2zm9.55 0h2.05v9.6h-2.05V7.2z"
      />
    </svg>
  );
}

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <a
        href={BRAND.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram @${BRAND.instagram}`}
        className={linkClassName}
      >
        <InstagramIcon />
      </a>
      <a
        href={BRAND.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`YouTube @${BRAND.youtube}`}
        className={linkClassName}
      >
        <YouTubeIcon />
      </a>
      <a
        href={BRAND.blogUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="네이버 블로그 미미다이브"
        className={linkClassName}
      >
        <NaverBlogIcon />
      </a>
    </div>
  );
}
