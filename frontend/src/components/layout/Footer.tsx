import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ocean-950 text-white/60">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-light tracking-[0.2em] text-white">
              DEEP<span className="font-semibold text-cyan-400">BLUE</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              프리다이빙 교육 전문 브랜드
              <br />
              바다와 하나 되는 순간을 함께합니다.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>제주특별자치도 서귀포시</li>
              <li>info@deepblue-freediving.com</li>
              <li>010-0000-0000</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/schedule" className="transition hover:text-cyan-300">
                  교육일정
                </Link>
              </li>
              <li>
                <Link href="/apply" className="transition hover:text-cyan-300">
                  교육신청
                </Link>
              </li>
              <li>
                <Link href="/notice" className="transition hover:text-cyan-300">
                  공지사항
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs">
          © {new Date().getFullYear()} Deep Blue Freediving. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
