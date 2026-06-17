'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation, NavItem } from '@/lib/navigation';

function AccordionItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren && item.href) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-white/10 px-6 py-4 text-white/90"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => (hasChildren ? setOpen(!open) : undefined)}
        className="flex w-full items-center justify-between px-6 py-4 text-left text-white/90"
      >
        <span>{item.label}</span>
        {hasChildren && (
          <svg
            className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      {open && item.children && (
        <div className="bg-white/5 pb-2">
          {item.children.map((child) => (
            <AccordionItem key={child.label} item={child} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-ocean-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <span className="text-lg font-light tracking-wider text-white">MENU</span>
          <button onClick={onClose} aria-label="메뉴 닫기" className="text-white/70">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          {navigation.map((item) => (
            <AccordionItem key={item.label} item={item} onNavigate={onClose} />
          ))}
        </nav>
      </div>
    </div>
  );
}
