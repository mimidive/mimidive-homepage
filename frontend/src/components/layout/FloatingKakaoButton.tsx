import Link from 'next/link';

const KAKAO_CHAT_URL = process.env.NEXT_PUBLIC_KAKAO_CHAT_URL || '/booking';
const isExternal = KAKAO_CHAT_URL.startsWith('http');

export function FloatingKakaoButton() {
  const className =
    'fixed bottom-5 right-5 z-50 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#FEE500] text-[10px] font-black text-[#191919] shadow-[0_14px_34px_rgba(15,23,42,0.16)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.06] hover:bg-[#ffeb33] focus:outline-none focus:ring-2 focus:ring-[#191919]/20 focus:ring-offset-2 focus:ring-offset-white';

  const content = (
    <>
      <img src="/kakao-talk-icon.svg" alt="" className="mb-0.5 h-4 w-4" aria-hidden="true" />
      <span className="leading-none">
        무료상담
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={KAKAO_CHAT_URL}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label="카카오톡 상담 새 창으로 열기"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={KAKAO_CHAT_URL} className={className} aria-label="카카오톡 상담하기">
      {content}
    </Link>
  );
}
