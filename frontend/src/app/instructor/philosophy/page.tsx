import { PageTemplate } from '../intro/page';

export default function PhilosophyPage() {
  return (
    <PageTemplate
      title="교육 철학"
      sections={[
        {
          heading: '안전이 최우선',
          body: `모든 교육의 기반은 안전입니다. AIDA 국제 안전 기준을 철저히 준수하며,
Buddy System, Emergency Protocol을 모든 세션에 적용합니다.`,
        },
        {
          heading: '개인의 페이스 존중',
          body: `프리다이빙은 경쟁이 아닌 자기 발견의 여정입니다.
각 수강생의 신체 조건과 심리 상태에 맞춘 맞춤형 교육을 제공합니다.`,
        },
        {
          heading: '바다와의 연결',
          body: `기술 습득을 넘어, 바다와 호흡을 통해 자신과 연결되는 경험을
교육의 핵심 가치로 삼습니다.`,
        },
      ]}
    />
  );
}
