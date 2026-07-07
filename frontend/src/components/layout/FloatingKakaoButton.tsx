import Link from 'next/link';
import { getKakaoChatUrl } from '@/lib/kakao';

const chatUrl = getKakaoChatUrl();
const href = chatUrl ?? '/booking#kakao-consult';
const isExternal = Boolean(chatUrl);

export function FloatingKakaoButton() {
  const className =
    'floating-kakao fixed bottom-5 right-5 z-50 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#FEE500] text-[10px] font-black text-[#191919] shadow-[0_14px_34px_rgba(15,23,42,0.16)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.06] hover:bg-[#ffeb33] focus:outline-none focus:ring-2 focus:ring-[#191919]/20 focus:ring-offset-2 focus:ring-offset-white';

  const content = (
    <>
      <img src="/kakao-talk-icon.svg" alt="카카오톡 상담" className="mb-0.5 h-4 w-4" />
      <span className="leading-none">무료상담</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label="카카오톡 상담 새 창으로 열기"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label="카카오톡 상담하기">
      {content}
    </Link>
  );
}
