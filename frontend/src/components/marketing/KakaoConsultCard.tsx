import { BRAND } from '@/lib/content';
import { getKakaoChatUrl, kakaoConsultNote, kakaoConsultTopics } from '@/lib/kakao';
import { KakaoConsultButton } from '@/components/marketing/KakaoConsultButton';

export function KakaoConsultCard() {
  const chatUrl = getKakaoChatUrl();

  return (
    <div className="content-card rounded-[2rem] p-6 md:p-10">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5F7C8A]">
          Kakao Channel
        </p>
        <h3 className="mt-4 break-keep text-pretty text-[clamp(1.375rem,4vw,1.875rem)] font-bold tracking-[-0.04em] text-zinc-900 [word-break:keep-all]">
          {BRAND.kakao} 카카오톡 무료 상담
        </h3>
        <p className="mt-4 text-base leading-8 text-zinc-600">
          아래 내용을 함께 남겨 주시면 더 빠르게 안내해드립니다.
        </p>
      </div>

      <ul className="mx-auto mt-7 grid max-w-lg gap-3 sm:mt-8 sm:grid-cols-2">
        {kakaoConsultTopics.map((topic) => (
          <li
            key={topic}
            className="rounded-2xl bg-white/55 px-4 py-3 text-sm leading-6 text-zinc-700 ring-1 ring-white/70"
          >
            {topic}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col items-center gap-4 md:mt-8">
        <KakaoConsultButton fullWidth label="카카오톡 상담" />
        {!chatUrl && (
          <p className="text-center text-sm leading-6 text-zinc-500">
            카카오톡에서 <span className="font-semibold text-zinc-700">「{BRAND.kakao}」</span> 채널을
            검색해 주세요.
          </p>
        )}
        <p className="text-center text-sm leading-6 text-zinc-500">{kakaoConsultNote}</p>
      </div>
    </div>
  );
}
