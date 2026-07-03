import type { ResponsiveLine } from '@/components/ui/ResponsiveText';

export const homeHeroCopy = {
  eyebrow: 'Jeju Ocean · Breath · Trust',
  title: {
    mobile: ['숨을 참고,', '바다와 마주하는 시간.'],
    desktop: '숨을 참고, 바다와 마주하는 시간.',
  } satisfies ResponsiveLine,
  lead: {
    mobile: ['대한민국 국가대표와', '함께하는 프리다이빙'],
    desktop: '대한민국 국가대표와 함께하는 프리다이빙',
  } satisfies ResponsiveLine,
  tagline: {
    mobile: ['제주 프리다이빙 전문 교육센터'],
    desktop: '제주 프리다이빙 전문 교육센터',
  } satisfies ResponsiveLine,
} as const;

export const homeTruthCopy = {
  title: {
    mobile: ['물속에서', '사람은 정직합니다.'],
    desktop: '물속에서 사람은 정직합니다.',
  } satisfies ResponsiveLine,
  body: {
    mobile: [
      '긴장, 호흡, 두려움, 욕심이 모두 드러납니다.',
      '미미다이브는 더 깊이 내려가기 전에,',
      '물속에서 스스로를 믿는 감각을 먼저 만듭니다.',
    ],
    desktop:
      '긴장, 호흡, 두려움, 욕심이 모두 드러납니다. 미미다이브는 더 깊이 내려가기 전에, 물속에서 스스로를 믿는 감각을 먼저 만듭니다.',
  } satisfies ResponsiveLine,
} as const;

export const homeInstructorCopy = {
  title: {
    mobile: ['아시아 기록 보유자', '김혜미 강사'],
    desktop: '아시아 기록 보유자 김혜미 강사',
  } satisfies ResponsiveLine,
  body: {
    mobile: ['선수의 경험과 강사의 책임감으로 가르칩니다.'],
    desktop: '선수의 경험과 강사의 책임감으로 가르칩니다.',
  } satisfies ResponsiveLine,
  link: {
    mobile: ['미미다이브 강사 소개 더 자세히 보기 →'],
    desktop: '미미다이브 강사 소개 더 자세히 보기 →',
  } satisfies ResponsiveLine,
  storyMarks: [
    {
      year: 'since 2016~',
      text: {
        mobile: ['10년 이상의 물 속  경험'],
        desktop: '10년 이상의 물 속  경험',
      } satisfies ResponsiveLine,
    },
    {
      year: 'National Team',
      text: {
        mobile: ['CMAS·AIDA 대한민국 국가대표 선발'],
        desktop: 'CMAS·AIDA 대한민국 국가대표 선발',
      } satisfies ResponsiveLine,
    },
    {
      year: 'Asian Record',
      text: {
        mobile: ['노핀 DNF 180m 아시아 신기록', '한국 신기록 12회 수립'],
        desktop: '노핀 DNF 180m 아시아 신기록 · 한국 신기록 12회 수립',
      } satisfies ResponsiveLine,
    },
    {
      year: 'AIDA Instructor Trainer',
      text: {
        mobile: ['초보자부터 전문가 과정까지 교육 가능한 센터'],
        desktop: '초보자부터 전문가 과정까지 교육 가능한 센터',
      } satisfies ResponsiveLine,
    },
  ] as const,
} as const;

export const homeConcernsCopy = {
  title: {
    mobile: ['혹시 이런 고민이', '있으신가요?'],
    desktop: '혹시 이런 고민이 있으신가요?',
  } satisfies ResponsiveLine,
  items: [
    { mobile: ['물이 무섭다'], desktop: '물이 무섭다' },
    { mobile: ['이퀄라이징이 안 된다'], desktop: '이퀄라이징이 안 된다' },
    { mobile: ['수심이 늘지 않는다'], desktop: '수심이 늘지 않는다' },
    { mobile: ['자격증만 따고 멈춰 있다'], desktop: '자격증만 따고 멈춰 있다' },
    { mobile: ['무엇을 연습해야 할지 모르겠다'], desktop: '무엇을 연습해야 할지 모르겠다' },
    { mobile: ['강사가 될 수 있을지 자신이 없다'], desktop: '강사가 될 수 있을지 자신이 없다' },
  ] as const satisfies readonly ResponsiveLine[],
  bridge: {
    mobile: ['이 고민, 수준과 관계없이 누구에게나 올 수 있습니다.'],
    desktop: '이 고민, 수준과 관계없이 누구에게나 올 수 있습니다.',
  } satisfies ResponsiveLine,
} as const;

export const homeMomentsCopy = {
  eyebrow: 'Voices',
  title: {
    mobile: ['같은 고민을', '나눈 수강생들'],
    desktop: '같은 고민을 나눈 수강생들',
  } satisfies ResponsiveLine,
  subtitle: {
    mobile: ['입문부터 바다까지'],
    desktop: '입문부터 바다까지',
  } satisfies ResponsiveLine,
  summary: {
    mobile: ['걱정을 나누고, 편안함을 찾은 순간들입니다.'],
    desktop: '걱정을 나누고, 편안함을 찾은 순간들입니다.',
  } satisfies ResponsiveLine,
  reviews: [
    {
      category: '체험다이빙',
      profile: '바다는 생애 처음이라',
      quote: {
        mobile: ['처음이라 잘 할 수 있을지 걱정했는데,', '제 속도에 맞춰 알려주셔서 부담이 없었습니다.'],
        desktop: '처음이라 잘 할 수 있을지 걱정했는데, 제 속도에 맞춰 알려주셔서 부담이 없었습니다.',
      },
      highlight: '제 속도에 맞춰 알려주셔서 부담이 없었습니다.',
    },
    {
      category: '자격증 레벨 교육',
      profile: '레벨1+2 초보자 입문 코스 수강',
      quote: {
        mobile: [
          '물에 대한 두려움이 있었는데,',
          '교육이 끝날 때쯤에는',
          '바다가 편안하게 느껴졌어요.',
        ],
        desktop: '물에 대한 두려움이 있었는데, 교육이 끝날 때쯤에는 바다가 편안하게 느껴졌어요.',
      },
      highlight: '바다가 편안하게 느껴졌어요.',
    },
    {
      category: '트레이닝 코칭',
      profile: '이퀄라이징(프렌젤,마우스필) 수강',
      quote: {
        mobile: ['깊이 내려가는 것보다', '편안하게 머무르는 방법을 배운 시간이었어요.'],
        desktop: '깊이 내려가는 것보다 편안하게 머무르는 방법을 배운 시간이었어요.',
      },
      highlight: '편안하게 머무르는 방법을 배운 시간이었어요.',
    },
    {
      category: '노핀코스',
      profile: '취미로 시작해 대회 출전까지',
      quote: {
        mobile: [
          '핀 없이는 앞으로 나가지 못했는데,',
          '방향을 잡아 주시고 차근차근 알려주셔서',
          '연습하다가 대회까지 나가게 됐어요.',
        ],
        desktop:
          '핀 없이는 앞으로 나가지 못했는데, 방향을 잡아 주시고 차근차근 알려주셔서 연습하다가 대회까지 나가게 됐어요.',
      },
      highlight: '대회까지 나가게 됐어요.',
    },
  ] as const,
} as const;

export const homeClosingCopy = {
  title: {
    mobile: ['혼자 고민하지 마세요.'],
    desktop: '혼자 고민하지 마세요.',
  } satisfies ResponsiveLine,
  lines: [
    {
      mobile: ['상담만 받아봐도 괜찮습니다.'],
      desktop: '상담만 받아봐도 괜찮습니다.',
    },
    {
      mobile: ['부담 없이 문의해 주세요.'],
      desktop: '부담 없이 문의해 주세요.',
    },
  ] as const satisfies readonly ResponsiveLine[],
  footnote: {
    mobile: ['현재 수준과 목표에 맞는 교육 과정을 함께 찾아드립니다.'],
    desktop: '현재 수준과 목표에 맞는 교육 과정을 함께 찾아드립니다.',
  } satisfies ResponsiveLine,
} as const;

export const homeCtaCopy = {
  programsEntry: {
    mobile: ['교육 프로그램 바로가기'],
    desktop: '교육 프로그램 바로가기',
  } satisfies ResponsiveLine,
  freeConsultation: {
    mobile: ['무료 교육 상담하기'],
    desktop: '무료 교육 상담하기',
  } satisfies ResponsiveLine,
  packageInquiry: {
    mobile: ['전체 교육 프로그램 보기'],
    desktop: '전체 교육 프로그램 보기',
  } satisfies ResponsiveLine,
} as const;

export const instructorIntroCopy = {
  title: {
    mobile: ['대한민국 ', 'AIDA CMAS 국가 대표', '김혜미 선수 · 강사 트레이너'],
    desktop: '대한민국 · AIDA CMAS 국가 대표 · 김혜미 선수 · 강사 트레이너',
  } satisfies ResponsiveLine,
  subtitle: {
    mobile: ['노핀 아시아 신기록 보유', '한국 여자 노핀 1등', '한국 신기록 12회 수립'],
    desktop: '노핀 아시아 신기록 보유 · 한국 여자 노핀 1등 · 한국 신기록 12회 수립',
  } satisfies ResponsiveLine,
  quote: {
    mobile: ['기록보다', '안전이 먼저입니다.'],
    desktop: '기록보다 안전이 먼저입니다.',
  } satisfies ResponsiveLine,
  closing: {
    mobile: ['더 깊이보다,', '더 안전하게.'],
    desktop: '더 깊이보다, 더 안전하게.',
  } satisfies ResponsiveLine,
} as const;
