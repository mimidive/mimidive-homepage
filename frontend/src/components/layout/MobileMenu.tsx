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
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-3 top-3 flex h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] max-w-sm flex-col rounded-[2rem] bg-white/70 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-2xl ring-1 ring-white/60">
        <div className="flex items-center justify-between px-7 py-6">
          <span className="text-sm font-semibold text-gray-900">메뉴</span>
          <button onClick={onClose} aria-label="메뉴 닫기" className="rounded-full bg-white/50 p-2 text-zinc-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 space-y-2 overflow-y-auto px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`block rounded-2xl px-4 py-4 text-sm font-medium transition ${
                  isActive ? 'bg-white/70 text-zinc-900' : 'text-zinc-600 hover:bg-white/50'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-6">
          <Link
            href="/booking"
            onClick={onClose}
            className="cta-button block rounded-full py-3 text-center text-sm font-semibold"
          >
            교육 문의
          </Link>
        </div>
      </div>
    </div>
  );
}
