import { PageTemplate } from '../intro/page';

export default function PhilosophyPage() {
  return (
    <PageTemplate
      title="교육 철학"
      sections={[
        {
          heading: '안전이 최우선',
          body: `AIDA 국제 안전 기준 준수.
Buddy System, Emergency Protocol 전 세션 적용.`,
        },
        {
          heading: '개인의 페이스 존중',
          body: `신체 조건과 심리 상태 확인.
수강생별 단계 조정.`,
        },
        {
          heading: '바다와의 연결',
          body: `호흡, 이완, 안전 습관 중심 교육.`,
        },
      ]}
    />
  );
}
