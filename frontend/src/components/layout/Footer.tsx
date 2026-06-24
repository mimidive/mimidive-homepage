import Link from 'next/link';
import { BRAND } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-800 text-white/72">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">
              {BRAND.name}
              <span className="ml-2 text-sm font-medium text-coral-200">{BRAND.nameEn}</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              대한민국 노핀 국가대표 김혜미 트레이너가 이끄는 제주 프리다이빙 센터
              <br />
              안전하고 깊이 있는 소수정예 프리다이빙 교육
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-coral-200">
              Location
            </p>
            <ul className="space-y-2 text-sm">
              <li>{BRAND.location}</li>
              <li>{BRAND.email}</li>
              <li>카카오톡: {BRAND.kakao}</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-coral-200">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs" className="transition hover:text-coral-200">
                  교육 프로그램
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="transition hover:text-coral-200">
                  수강 후기
                </Link>
              </li>
              <li>
                <Link href="/booking" className="transition hover:text-coral-200">
                  FAQ·예약
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {BRAND.name} ({BRAND.nameEn}). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
