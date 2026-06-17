'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation, NavItem } from '@/lib/navigation';
import { MobileMenu } from './MobileMenu';

function MegaMenuColumn({ items }: { items: NavItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.label}>
          {item.href ? (
            <Link
              href={item.href}
              className="block text-sm font-medium text-white/90 transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ) : (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400/80">
              {item.label}
            </p>
          )}
          {item.children && (
            <ul className="mt-2 space-y-1.5 border-l border-white/10 pl-3">
              {item.children.map((child) => (
                <li key={child.label}>
                  {child.href ? (
                    <Link
                      href={child.href}
                      className="text-sm text-white/70 transition hover:text-cyan-300"
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-white/50">{child.label}</span>
                  )}
                  {child.children && (
                    <ul className="mt-1 space-y-1 pl-3">
                      {child.children.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href!}
                            className="text-sm text-white/60 transition hover:text-cyan-300"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ocean-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-light tracking-[0.2em] text-white">
              DEEP<span className="font-semibold text-cyan-400">BLUE</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-white/80 transition hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-4 py-2 text-sm font-medium text-white/80 transition hover:text-cyan-300">
                    {item.label}
                  </button>
                )}

                {item.children && activeMenu === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[520px] rounded-xl border border-white/10 bg-ocean-950/95 p-8 shadow-2xl backdrop-blur-xl">
                      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                        {item.label === '수업안내' ? (
                          <>
                            <MegaMenuColumn items={[item.children[0]]} />
                            <MegaMenuColumn items={[item.children[1]]} />
                            <MegaMenuColumn items={item.children.slice(2)} />
                          </>
                        ) : (
                          <MegaMenuColumn items={item.children} />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="hidden text-xs text-white/40 transition hover:text-white/70 sm:block"
            >
              Admin
            </Link>
            <button
              className="rounded-lg p-2 text-white lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="메뉴 열기"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
