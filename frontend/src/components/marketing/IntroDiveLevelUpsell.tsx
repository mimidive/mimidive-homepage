import Link from 'next/link';
import { introDiveLevelUpsell, levelIntroPackage } from '@/lib/content';

export function IntroDiveLevelUpsell() {
  return (
    <div className="mt-12 space-y-8">
      <div className="content-card rounded-[2rem] p-8 md:p-10">
        <h2 className="text-xl font-semibold tracking-[-0.03em] text-gray-900 md:text-2xl">
          {introDiveLevelUpsell.title}
        </h2>
        <ul className="mt-6 space-y-3">
          {introDiveLevelUpsell.audience.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-7 text-gray-700 md:text-base md:leading-8"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5F7C8A]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-[#DCECEF]/50 p-8 ring-1 ring-[#5F7C8A]/12 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7C8A]">
          {introDiveLevelUpsell.packageLabel}
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-gray-900">
          {levelIntroPackage.title}
        </h3>
        <ul className="mt-6 space-y-2">
          {levelIntroPackage.homeBullets.map((item) => (
            <li key={item} className="text-sm leading-7 text-gray-700 md:text-base md:leading-8">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4 border-t border-[#5F7C8A]/16 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-gray-400 line-through">{levelIntroPackage.originalPrice}</p>
            <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-gray-900">
              {levelIntroPackage.price}
            </p>
            <p className="mt-1 text-sm font-semibold text-[#5F7C8A]">
              {levelIntroPackage.discount}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={levelIntroPackage.href}
              className="cta-button rounded-full px-7 py-3 text-center text-sm font-semibold transition"
            >
              {levelIntroPackage.ctaLabel}
            </Link>
            <Link
              href={levelIntroPackage.bookingHref}
              className="rounded-full bg-white/60 px-7 py-3 text-center text-sm font-semibold text-gray-900 ring-1 ring-[#5F7C8A]/15 transition hover:bg-white/80"
            >
              {levelIntroPackage.bookingLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
