import Link from 'next/link';
import { ReadableText } from '@/components/ui/ReadableText';
import { levelIntroPackage } from '@/lib/content';

type Variant = 'home' | 'compact';

function PackagePricingBreakdown({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="rounded-[1.25rem] border border-[#5F7C8A]/10 bg-white p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            {levelIntroPackage.comparisonLabel}
          </p>
          <div className="mt-4 space-y-2">
            {levelIntroPackage.pricingBreakdown.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 text-sm text-[#6B7280] md:text-base"
              >
                <span>{item.label}</span>
                <span className="font-semibold tabular-nums text-[#1A1A1A]">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#5F7C8A]/10 pt-4">
            <span className="text-sm font-semibold text-[#1A1A1A]">총 비용</span>
            <span className="text-lg font-semibold tabular-nums text-gray-400 line-through md:text-xl">
              {levelIntroPackage.originalPrice}
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.25rem] bg-[#5F7C8A] p-5 text-[#FAFAF8] md:p-6">
          <div
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAFAF8]/70">
            {levelIntroPackage.packageHighlightLabel}
          </p>
          <p
            className={`mt-3 font-semibold tabular-nums tracking-[-0.04em] ${
              compact ? 'text-4xl' : 'text-5xl md:text-6xl'
            }`}
          >
            {levelIntroPackage.price}
          </p>
          <p className="mt-3 inline-block rounded-full bg-[#E8C9A0] px-3 py-1 text-sm font-bold text-[#1A1A1A]">
            {levelIntroPackage.savingsBadge}
          </p>
          <p className="mt-4 text-sm leading-6 text-[#FAFAF8]/80">
            Level 1·2를 연속으로 이수할 때 적용됩니다.
          </p>
        </div>
    </div>
  );
}

export function LevelIntroPackageSection({
  variant = 'compact',
  id,
}: {
  variant?: Variant;
  id?: string;
}) {
  const isHome = variant === 'home';

  return (
    <div
      id={id}
      className={
        isHome
          ? 'overflow-hidden rounded-[2rem] bg-[#DCECEF] p-8 ring-1 ring-[#5F7C8A]/12 md:p-12 lg:p-14'
          : 'col-span-full overflow-hidden rounded-[2rem] bg-white/50 p-7 ring-1 ring-[#5F7C8A]/12 backdrop-blur-sm md:p-10'
      }
    >
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7C8A]">
          {isHome ? levelIntroPackage.packageEyebrow : '추천'}
        </p>
        <h2
          className={
            isHome
              ? 'mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#1A1A1A] md:text-5xl'
              : 'mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#1A1A1A] md:text-3xl'
          }
        >
          {isHome ? levelIntroPackage.title : levelIntroPackage.homeHeadline}
        </h2>
        <ReadableText
          text={levelIntroPackage.summary}
          className={isHome ? 'mt-5' : 'mt-4'}
          gap="sm"
          animate={false}
          sentenceClassName={
            isHome
              ? 'text-base leading-8 text-[#6B7280] md:text-lg md:leading-9'
              : 'text-sm leading-7 text-gray-600 md:text-base md:leading-8'
          }
        />
        {!isHome && (
          <ul className="mt-6 space-y-2">
            {levelIntroPackage.details.map((item) => (
              <li
                key={item}
                className="text-sm leading-7 text-gray-700 md:text-base md:leading-8"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={isHome ? 'mt-8 md:mt-10' : 'mt-6 md:mt-8'}>
        <PackagePricingBreakdown compact={!isHome} />
      </div>

      <div
        className={`flex flex-col gap-3 sm:flex-row ${
          isHome ? 'mt-8 md:mt-10' : 'mt-6'
        }`}
      >
        <Link
          href={levelIntroPackage.bookingHref}
          className={
            isHome
              ? 'inline-block rounded-full bg-[#5F7C8A] px-8 py-3.5 text-center text-sm font-semibold text-[#FAFAF8] transition hover:bg-[#4f6e7c]'
              : 'cta-button inline-block rounded-full px-7 py-3 text-sm font-semibold transition'
          }
        >
          {levelIntroPackage.bookingLabel}
        </Link>
        <Link
          href={levelIntroPackage.detailHref}
          className={
            isHome
              ? 'inline-block rounded-full border border-[#5F7C8A]/15 bg-white px-8 py-3.5 text-center text-sm font-semibold text-[#5F7C8A] transition-colors hover:text-[#4f6e7c]'
              : 'inline-block rounded-full px-7 py-3 text-center text-sm font-semibold text-[#5F7C8A] transition hover:text-[#4f6e7c]'
          }
        >
          {levelIntroPackage.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
