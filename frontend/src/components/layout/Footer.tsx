import Link from 'next/link';
import { BRAND } from '@/lib/content';
import { getKakaoChatUrl } from '@/lib/kakao';

export function Footer() {
  const kakaoChatUrl = getKakaoChatUrl();
  return (
    <footer className="bg-white text-zinc-600">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-zinc-900">
              {BRAND.name}
              <span className="ml-2 text-sm font-medium text-sky-200">{BRAND.nameEn}</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              제주 프리다이빙 교육 센터
              <br />
              입문 · 자격증 · 트레이닝 · 강사 과정
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
              Location
            </p>
            <ul className="space-y-3 text-sm">
              <li>{BRAND.location}</li>
              <li>{BRAND.email}</li>
              <li>
                {kakaoChatUrl ? (
                  <a
                    href={kakaoChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-sky-200"
                  >
                    카카오톡: {BRAND.kakao}
                  </a>
                ) : (
                  <>카카오톡: {BRAND.kakao}</>
                )}
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
              Quick Links
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/instructor/intro" className="transition hover:text-sky-200">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/programs" className="transition hover:text-sky-200">
                  교육과정
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="transition hover:text-sky-200">
                  숙소안내
                </Link>
              </li>
              <li>
                <Link href="/booking" className="transition hover:text-sky-200">
                  문의
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-900/10 pt-8 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} {BRAND.name} ({BRAND.nameEn}). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
