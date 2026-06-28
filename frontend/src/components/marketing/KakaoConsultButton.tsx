import { BRAND } from '@/lib/content';
import { getKakaoChatUrl } from '@/lib/kakao';

type Props = {
  className?: string;
  label?: string;
  fullWidth?: boolean;
};

export function KakaoConsultButton({
  className = '',
  label = '카카오톡으로 문의하기',
  fullWidth = false,
}: Props) {
  const chatUrl = getKakaoChatUrl();
  const baseClassName = [
    'inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FEE500] px-8 py-4 text-sm font-bold text-[#191919] shadow-[0_14px_34px_rgba(254,229,0,0.28)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#ffeb33] hover:shadow-[0_18px_40px_rgba(254,229,0,0.34)]',
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <img src="/kakao-talk-icon.svg" alt="" className="h-5 w-5" aria-hidden="true" />
      {label}
    </>
  );

  if (chatUrl) {
    return (
      <a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
        aria-label={`${BRAND.kakao} 카카오톡 채널 상담 새 창으로 열기`}
      >
        {content}
      </a>
    );
  }

  return (
    <a href="/booking#kakao-consult" className={baseClassName}>
      {content}
    </a>
  );
}
