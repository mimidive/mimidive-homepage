import { BRAND } from '@/lib/content';

export const kakaoConsultTopics = [
  '수영 실력·물 공포 여부',
  '희망 일정·체류 기간',
  '관심 과정 (체험 / 자격증 / 트레이닝)',
  '동반 인원·목표 수심',
] as const;

export function getKakaoChatUrl(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_KAKAO_CHAT_URL;
  if (fromEnv?.startsWith('http')) return fromEnv;

  if (BRAND.kakaoChatUrl.startsWith('http')) return BRAND.kakaoChatUrl;

  return null;
}

export const kakaoConsultNote =
  '교육 중에는 답변이 늦을 수 있습니다. 메시지를 남겨 주시면 순차적으로 연락드립니다.';
