import Link from 'next/link';

type Cta = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctas?: Cta[];
  compact?: boolean;
};

export function PageHero({ eyebrow, title, description, ctas, compact }: Props) {
  return (
    <section
      className={`ocean-hero border-b border-navy-100 ${compact ? 'py-16 md:py-20' : 'py-20 md:py-28'}`}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy-600">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">{description}</p>
          )}
          {ctas && ctas.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === 'secondary'
                      ? 'rounded-full border border-navy-200 bg-white/70 px-8 py-4 text-center text-sm font-semibold text-gray-900 transition hover:border-navy-600 hover:text-navy-600'
                      : 'cta-button rounded-full px-8 py-4 text-center text-sm font-semibold text-white transition'
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="photo-card relative hidden rounded-[2rem] p-6 text-white lg:block">
          <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-white/15 blur-2xl" />
          <div className="relative flex h-full min-h-72 flex-col justify-between rounded-[1.5rem] border border-white/25 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-white/80">Jeju Freediving Moment</p>
            <div>
              <p className="text-4xl font-semibold leading-tight">Lawhwan Port</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/78">
                코랄빛 노을과 투명한 바다 위에서 시작하는 안전한 첫 호흡.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
