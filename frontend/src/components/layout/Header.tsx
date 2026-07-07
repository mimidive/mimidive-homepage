'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { navigation } from '@/lib/navigation';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    if (mobileOpen) {
      document.body.dataset.mobileMenuOpen = 'true';
    } else {
      delete document.body.dataset.mobileMenuOpen;
    }

    return () => {
      document.body.style.overflow = '';
      delete document.body.dataset.mobileMenuOpen;
    };
  }, [mobileOpen]);

  const mobileMenu =
    mobileOpen && typeof document !== 'undefined'
      ? createPortal(
          <div className="fixed inset-x-0 bottom-0 top-[4.5rem] z-[65] flex flex-col bg-[#FAFAF8] lg:hidden">
            <nav className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-6 py-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-2xl px-5 py-4 text-lg font-medium tracking-[-0.02em] transition ${
                      isActive
                        ? 'bg-white text-[#5F7C8A] shadow-sm ring-1 ring-[#5F7C8A]/12'
                        : 'text-[#1A1A1A] hover:bg-white/70'
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
                onClick={() => setMobileOpen(false)}
                className="cta-button block rounded-full py-4 text-center text-sm font-semibold"
              >
                교육 문의
              </Link>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 z-[70] w-full border-b transition-colors duration-300 ${
          scrolled
            ? 'border-[#5F7C8A]/12 bg-[#FAFAF8] shadow-sm'
            : 'border-transparent bg-[#FAFAF8] shadow-none'
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <Link href="/" className="min-w-0 shrink">
            <span className="block text-sm font-semibold leading-tight tracking-[-0.03em] transition-colors duration-700 sm:text-base lg:text-lg">
              <span className="text-[#5F7C8A]">미미다이브</span>
              <span className="text-[#1A1A1A]"> 프리다이빙</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'text-[#5F7C8A]' : 'text-[#6B7280] hover:text-[#5F7C8A]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/booking"
              className="inline-flex shrink-0 rounded-full bg-[#5F7C8A] px-3.5 py-2 text-xs font-semibold text-[#FAFAF8] shadow-[0_12px_32px_rgba(95,124,138,0.2)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.018] hover:bg-[#4f6e7c] sm:px-5 sm:py-2.5 sm:text-sm lg:inline-flex"
            >
              교육 문의
            </Link>
            <button
              className="rounded-full bg-white/70 p-2 text-[#1A1A1A] shadow-sm ring-1 ring-[#5F7C8A]/15 transition-colors duration-700 lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
