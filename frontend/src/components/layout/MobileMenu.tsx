'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-[#FAFAF8] lg:hidden">
      <div className="h-[4.5rem] shrink-0" aria-hidden />
      <nav className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-6 py-8">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`rounded-2xl px-5 py-4 text-lg font-medium tracking-[-0.02em] transition ${
                isActive ? 'bg-white text-[#5F7C8A] shadow-sm ring-1 ring-[#5F7C8A]/12' : 'text-[#1A1A1A] hover:bg-white/70'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="shrink-0 px-6 pb-10 pt-4">
        <Link
          href="/booking"
          onClick={onClose}
          className="cta-button block rounded-full py-4 text-center text-sm font-semibold"
        >
          교육 문의
        </Link>
      </div>
    </div>
  );
}
