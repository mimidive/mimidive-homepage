import { marketingImages } from '@/lib/marketing-images';

export const BRAND = {
  name: '미미다이브 프리다이빙',
  nameEn: 'MIMIDIVE',
  representative: '김혜미',
  location: '제주특별자치도 서귀포시 말질로170번길 4-1, 1층',
  email: 'mimifreediving@gmail.com',
  phone: '010-3111-4140',
  kakao: '미미다이브',
  /** 카카오 비즈니스 채널 1:1 채팅 URL */
  kakaoChatUrl: 'https://pf.kakao.com/_xkzTMxj/chat',
  instagram: 'mimidive',
  instagramUrl: 'https://www.instagram.com/mimidive',
  youtube: 'mimidive',
  youtubeUrl: 'https://www.youtube.com/@mimidive',
  blogUrl: 'https://m.blog.naver.com/mimidive',
  tagline: '제주 프리다이빙 교육',
  subTagline:
    '대한민국 아시아 신기록·국가대표 김혜미 트레이너의 소수정예 교육. 입문, 자격증, 트레이닝 과정 운영.',
  slogan: 'Breath Better, Dive Deeper.',
} as const;

export const stats = [
  {
    value: '한국 신기록 달성',
    label: '총 12회, 현재 여자 노핀 한국 1등',
    detail: '노핀 종목 기술과 경기 경험 기반 교육.',
  },
  {
    value: '아시아 신기록',
    label: '대한민국 AIDA,CAMS 국가대표 선수',
    detail: 'AIDA, CAMS 대회 경험 기반 수업.',
  },
  {
    value: 'AIDA 트레이너',
    label: 'Instructor Trainer',
    detail: '강사 교육 기준의 이론 및 실습 구성.',
  },
  {
    value: '11년 바다경력',
    label: '무사고 교육 운영',
    detail: '해양 조건과 수강생 컨디션 확인 후 진행.',
  },
] as const;

export const coreBenefits = [
  '발차기, 유선형, 이퀄라이징 개인 피드백',
  '제주도 중심의 제주 해양 조건 확인',
  '호흡 루틴, 버디 시스템, 안전 절차 교육',
  '수업 전 안내와 수업 후 연습 방향 정리',
] as const;

export const trainerProfile = {
  name: '김혜미',
  title: '대표 강사 트레이너 · AIDA Instructor Trainer',
  credentials: [
    '대한민국 AIDA, CMAS 국가대표 선수',
    '프리다이빙 노핀 아시아 신기록 보유',
    '한국 신기록 11회 달성',
    'AIDA Instructor Trainer',
    '11년 무사고 교육 운영',
  ],
} as const;

export const proofCards = [
  {
    icon: '🏅',
    title: '검증된 강사',
    body: '아시아 신기록과 한국 신기록 11회. 경기 경험 기반 자세·호흡 지도.',
  },
  {
    icon: '🛟',
    title: '안전 관리',
    body: '컨디션, 장비, 날씨, 수면 동선 확인 후 수업 진행.',
  },
  {
    icon: '🌊',
    title: '제주 해양 환경',
    body: '조류, 시야, 기상 조건 기준 교육 범위 설정.',
  },
  {
    icon: '📷',
    title: '영상 피드백',
    body: '수중 촬영 기반 자세, 긴장도, 이퀄라이징 타이밍 확인.',
  },
] as const;

export const conversionCards = [
  {
    concern: '입문 가능 여부',
    answer: '수영 실력과 물 공포 여부 확인 후 적합 과정 배정.',
  },
  {
    concern: '안전 기준',
    answer: '버디 시스템, 수면 감시, 장비 점검 우선 교육.',
  },
  {
    concern: '포함 내용',
    answer: '강사 지도, 수중 촬영, 개인 피드백 포함.',
  },
] as const;

export const instructorTimeline = [
  {
    year: '2016',
    title: '프리다이빙 시작',
    body: '프리다이빙 훈련 시작. 호흡과 움직임 기록.',
  },
  {
    year: '2017-2019',
    title: '국내외 대회 출전',
    body: '대회 경험 기반 루틴과 안전 절차 체계화.',
  },
  {
    year: '국가대표',
    title: '대한민국 노핀 국가대표 선발',
    body: '노핀 종목 대한민국 국가대표 선발.',
  },
  {
    year: 'Record',
    title: '아시아 신기록 및 한국 신기록 11회',
    body: '기록 달성 경험 기반 레벨별 교육.',
  },
  {
    year: 'Now',
    title: '제주에서 교육 활동',
    body: '제주도 기반 입문·강사 과정 운영.',
  },
] as const;

export const careerMilestones = [
  { label: '2016', title: '프리다이빙 시작' },
  { label: '2017', title: '다수 대회 경험' },
  { label: 'National', title: 'AIDA·CMAS · 대한민국 노핀 국가대표' },
  { label: 'Record', title: '한국 신기록 12회 · 아시아 신기록' },
  { label: 'World', title: 'AIDA·CMAS 월드챔피언십 국가대표' },
  { label: 'AIDA', title: 'AIDA Instructor Trainer' },
  { label: 'Now', title: '미미다이브 대표 강사' },
] as const;

export const recordHighlights = [
  { label: '아시아 신기록', detail: 'DNF 180m · 2025' },
  { label: '한국 신기록', detail: '노핀·모노핀 종목 12회' },
  { label: '국가대표', detail: 'AIDA · CMAS 월드챔피언십' },
  { label: '교육 자격', detail: 'AIDA Instructor Trainer' },
] as const;

export type CompetitionEntry = {
  event: string;
  result: string;
  highlight?: boolean;
};

export type CompetitionYear = {
  year: number;
  summary?: string;
  entries: readonly CompetitionEntry[];
};

export const competitionHistory: readonly CompetitionYear[] = [
  {
    year: 2026,
    entries: [
      { event: 'AIDA Korea National Championship', result: '2위', highlight: true },
    ],
  },
  {
    year: 2025,
    summary: '아시아 여자 신기록 경신 · JEJU Masters · RAUM 시리즈',
    entries: [
      {
        event: 'AIDA 월간 프리다이빙대회',
        result: '아시아 여자 신기록 수립 (DNF 180m)',
        highlight: true,
      },
      { event: 'AIDA Korea National Championship', result: '출전' },
      { event: '2nd AIDA WCS CUP', result: '출전' },
      { event: '2025 JEJU International Freediving Masters', result: '출전' },
      { event: 'AIDA RAUM Pool Competition 2025', result: '2월~6월 시리즈' },
    ],
  },
  {
    year: 2024,
    summary: 'AIDA·CMAS 월드챔피언십 국가대표 · JEJU Masters STA 1위',
    entries: [
      { event: 'AIDA Freediving World Championship', result: '국가대표 출전', highlight: true },
      { event: 'CMAS Freediving World Championship', result: '국가대표 출전', highlight: true },
      { event: 'DNF 143m', result: '한국 여자 모노핀 신기록 수립', highlight: true },
      { event: 'DYN 209.5m', result: '한국 여자 모노핀 신기록 수립', highlight: true },
      { event: 'JEJU Freediving Masters AIDA Pool Competition', result: 'STA 1위', highlight: true },
      { event: 'AIDA Panglao Pool Championship Season 4 Finale', result: '' },
      { event: '3rd White Balance Pool Competition', result: '' },
    ],
  },
  {
    year: 2023,
    summary: 'Indoor WC 국가대표 · Panglao·Anilao 신기록',
    entries: [
      {
        event: '30th AIDA Indoor World Championship',
        result: '국가대표 출전 · DNF 162m 국내 여자 노핀 신기록 · DYN 214m 국내 여자 모노핀 신기록',
        highlight: true,
      },
      {
        event: 'AIDA Anilao Freediving Pool Cup',
        result: '종합 1위 · 여자부 1위 · 노핀 1위',
        highlight: true,
      },
      {
        event: '14th AIDA Panglao Depth Games',
        result: '한국 여자 신기록 연속 2회 수립 (CNF 54m, CNF 57m)',
        highlight: true,
      },
      {
        event: 'CMAS 국가대표 선발전',
        result: '여자 종합 1위 · DYN 202m 여자 1위 신기록 · DNF 142m 여자 1위 신기록',
        highlight: true,
      },
      { event: '13th AIDA Panglao Depth Games', result: '' },
      { event: 'AIDA Panglao Depth Championship', result: '' },
      { event: '15th AIDA Panglao Depth Games', result: '' },
    ],
  },
  {
    year: 2022,
    entries: [
      {
        event: '9th AIDA Panglao Pool Games',
        result: 'DNF 135m 국내 여자 노핀 신기록',
        highlight: true,
      },
      { event: 'AIDA Panglao Pool Championship', result: '' },
      { event: 'AIDA Panglao Pool Championship S03E04', result: '' },
      { event: 'AIDA Panglao Pool Championship S03 Finale', result: '' },
    ],
  },
  {
    year: 2021,
    entries: [
      { event: 'AIDA Freediving World Cup October', result: '여자 종합 1위', highlight: true },
      { event: 'AIDA Freediving World Cup November', result: '여자 종합 3위 · CWT 3위' },
    ],
  },
  {
    year: 2020,
    entries: [
      {
        event: 'AIDA Indoor Competition',
        result: '여자 종합 1위 · DNF 1위 · STA 2위 · DYN 3위',
        highlight: true,
      },
      { event: 'Blue Ocean Pool Competition', result: '여자 종합 1위', highlight: true },
      { event: 'AIDA Dahab Apnea October Competition', result: '' },
    ],
  },
  {
    year: 2019,
    entries: [
      {
        event: 'CMAS 무호흡 선수권대회',
        result: '여자 종합 2위 · STA 1위 · DYN 2위 · DNF 3위',
        highlight: true,
      },
    ],
  },
  {
    year: 2018,
    entries: [{ event: 'Red C Cup (12th Edition)', result: '' }],
  },
  {
    year: 2017,
    entries: [
      { event: 'Red C Cup (9th Edition)', result: '' },
      { event: '첫 국제대회 출전', result: '국제 대회 데뷔', highlight: true },
    ],
  },
] as const;

export type ProgramCategory = 'intro' | 'cert' | 'training' | 'instructor' | 'special';

export const programNavItems = [
  { id: 'programs-recommended', label: '추천 코스', shortLabel: '추천 코스' },
  { id: 'programs-cert', label: '자격증 코스', shortLabel: '자격증' },
  { id: 'programs-advanced', label: '심화 코스', shortLabel: '심화' },
  { id: 'programs-experience', label: '체험·펀다이빙', shortLabel: '체험·펀다이빙' },
  { id: 'programs-special', label: '스페셜 코스', shortLabel: '스페셜' },
] as const;

export type ProgramNavId = (typeof programNavItems)[number]['id'];

export const programSections = [
  {
    id: 'programs-cert' as const,
    title: '자격증 코스',
    subtitle: '국제공인 자격증이 발급되는 코스 과정입니다.',
    slugs: ['aida1', 'aida2', 'aida3', 'aida4', 'instructor'] as const,
  },
  {
    id: 'programs-advanced' as const,
    title: '심화 코스',
    subtitle: '노핀, 인도어·수심 트레이닝, 온라인 코칭 등 실력 향상 과정',
    slugs: ['nofin', 'training', 'online-coaching'] as const,
  },
  {
    id: 'programs-experience' as const,
    title: '체험·펀다이빙',
    subtitle: '가볍게 체험하거나, 자격 보유 후 제주 바다를 즐기는 세션',
    slugs: ['intro-dive', 'fun'] as const,
  },
  {
    id: 'programs-special' as const,
    title: '스페셜 코스',
    subtitle: '제주살기 패키지와 정기 회원권 — 일정과 목표에 맞춘 맞춤 프로그램',
    slugs: ['long-stay-package', 'membership'] as const,
  },
] as const;

/** @deprecated Use programNavItems — kept for ?tab= URL compatibility */
export const programTabs = [
  { id: 'all', label: '전체' },
  { id: 'intro', label: '입문·초보' },
  { id: 'cert', label: '자격증' },
  { id: 'training', label: '트레이닝' },
  { id: 'instructor', label: '강사' },
] as const;

export type ProgramTabId = (typeof programTabs)[number]['id'];

const tabToSectionId: Record<Exclude<ProgramTabId, 'all'>, ProgramNavId> = {
  intro: 'programs-experience',
  cert: 'programs-cert',
  training: 'programs-advanced',
  instructor: 'programs-cert',
};

export function programTabToSectionId(tab: ProgramTabId): ProgramNavId | 'level-intro-package' | null {
  if (tab === 'all') return null;
  return tabToSectionId[tab];
}

export const PROGRAMS_START_ANCHOR = '/programs#programs-recommended' as const;
export const PROGRAMS_INTRO_HREF = PROGRAMS_START_ANCHOR;

export const programsPage = {
  title: '교육 과정',
  subtitle: '제주 프리다이빙 교육 — 입문부터 심화까지',
  closingConsult:
    '어떤 과정이 맞을지 모르시겠다면, 편하게 상담해 주세요. 상담을 통해 적합한 프로그램을 안내해 드립니다.',
  closingCta: '카카오톡 상담하기',
} as const;

export const HOME_GETTING_STARTED_ANCHOR = PROGRAMS_START_ANCHOR;
export const HOME_PACKAGE_ANCHOR = '/programs#level-intro-package' as const;
export const PROGRAMS_CERT_ANCHOR = '/programs#programs-cert' as const;

export const homeCta = {
  programsEntry: {
    label: '교육 프로그램 바로가기',
    href: PROGRAMS_START_ANCHOR,
  },
  packageInquiry: {
    label: '전체 교육 프로그램 보기',
    href: '/programs',
  },
  freeConsultation: {
    label: '카카오톡 상담하기',
    href: BRAND.kakaoChatUrl,
  },
} as const;

export const concernsBridge = '이 고민, 수준과 관계없이 누구에게나 올 수 있습니다.';

export const homeMoments = {
  eyebrow: 'Jeju Moments',
  title: '같은 고민을 나눈 수강생들',
  subtitle: '수강생들의 리얼 교육 후기',
} as const;

export const courseProgression =
  '체험다이빙 → Level 1 → Level 1+2 패키지(가장 많이 선택) → Level 2~';

export const priceComparison = {
  experience: { label: '체험다이빙', price: '130,000원~' },
  level1: { label: 'Level 1', price: '200,000원' },
  note: '5만원 더 투자하면 정식 레벨교육으로 시작할 수 있습니다.',
} as const;

export const levelIntroPackage = {
  packageEyebrow: '가장 인기',
  packageLead: 'Level 1·2를 연속으로 이수할 때 가장 많이 선택하는 패키지입니다.',
  title: 'Level 1 + 2 패키지',
  price: '600,000원',
  originalPrice: '750,000원',
  discount: '150,000원 할인',
  pricingBreakdown: [
    { label: 'Level 1', price: '200,000원', shortPrice: '20만' },
    { label: 'Level 2', price: '550,000원', shortPrice: '55만' },
  ] as const,
  subtotalLabel: '개별 수강 합계',
  packagePriceLabel: '패키지 한 번에',
  totalShortPrice: '75만',
  packageShortPrice: '60만',
  savingsBadge: '15만원 절약',
  savingsPercent: '20% 할인',
  comparisonLabel: '개별 신청',
  packageHighlightLabel: '패키지 신청',
  summary: '입문부터 초보과정까지 순차적으로 이어가는 프로그램입니다.',
  homeHeadline: '처음 시작하는 분들이 가장 많이 선택하는 과정',
  homeBullets: [
    '수영장 적응부터',
    '제주 바다 교육까지',
    '국제 자격증 취득 가능',
    '대한민국 노핀 국가대표 김혜미 강사 직접 교육',
  ],
  details: [
    'Level 1 — 제한수역에서 호흡·이완·안전',
    'Level 2 — 개방수역 12~20m 자격 과정',
  ],
  href: '/programs#level-intro-package',
  detailHref: '/courses/level/aida2',
  ctaLabel: '과정 상세 보기',
  bookingHref: '/booking',
  bookingLabel: '패키지 문의',
} as const;

export const gettingStarted = {
  title: '어디서부터 시작할까요?',
  subtitle: '나에게 맞는 방식으로 시작해보세요.',
  bridge: '세 가지 길. 하나의 바다.',
  beat1Eyebrow: '시작하기',
  scrollEyebrow: '심화 과정',
  experiencePath: {
    intent: '제주 바다를 가볍게 경험해보고 싶다',
    title: '체험다이빙',
    href: '/courses/intro-dive',
    cta: '체험다이빙 보기',
    image: marketingImages.gettingStartedExperience,
  },
  packagePath: {
    intent: '프리다이빙을 체계적으로 배워보고 싶다',
    badge: '추천',
    title: '자격증 입문 코스',
    href: PROGRAMS_CERT_ANCHOR,
    cta: '자격증코스 보기',
    note: '레벨교육은 제주 바다를 스스로 즐길 수 있는 프리다이버가 되는 과정입니다.',
    image: marketingImages.gettingStartedFeatured,
  },
  funPath: {
    intent: '이미 자격증이 있는데 제주 바다를 즐기고 싶다',
    title: '펀다이빙',
    href: '/courses/fun',
    cta: '펀다이빙 보기',
    image: marketingImages.programFun,
  },
  trainingPath: {
    intent: '수심과 기술을 체계적으로 끌어올리고 싶다',
    title: '인도어*수심 트레이닝',
    href: '/courses/training/depth',
    cta: '인도어·수심 트레이닝 보기',
    image: marketingImages.programTraining,
  },
  nofinPath: {
    intent: '아시아 기록 보유자의 노핀 기술을 배우고 싶다',
    title: '노핀 코스',
    href: '/courses/training/nofin',
    cta: '노핀 코스 보기',
    image: marketingImages.programNofin,
  },
  comparison: {
    leadLine:
      '레벨교육은 제주 바다를 스스로 즐길 수 있는 프리다이버가 되는 과정입니다.',
  },
  footerLink: {
    href: '/programs#programs-cert',
    label: '전체 프로그램 보기',
  },
  closingLine: '아직 모르겠다면, 천천히 둘러보셔도 괜찮습니다.',
} as const;

export const introDiveLevelUpsell = {
  title: '이런 분들은 레벨교육이 더 적합합니다.',
  audience: [
    '프리다이빙을 꾸준히 배우고 싶은 분',
    '제주 바다를 자유롭게 즐기고 싶은 분',
    '국제 자격증 취득을 원하는 분',
    '안전하게 실력을 키우고 싶은 분',
  ],
  packageLabel: '가장 많이 선택하는 과정',
  level1Cta: {
    label: '레벨1 교육 바로가기',
    href: '/courses/level/aida1',
  },
} as const;

export const funDiveTarget = {
  target: '프리다이빙 자격증 보유자',
  note: '*다이빙 자격증이 없을 시에는 체험 다이빙 or 레벨교육을 먼저 이용해주세요.',
  levelCta: {
    label: '레벨교육 바로가기',
    href: PROGRAMS_CERT_ANCHOR,
  },
  includes: ['포인트 브리핑', '수중 촬영'],
  excludes: [
    '보팅비(섬 다이빙시)',
    '프리다이빙 장비(렌탈장비 원하시면 미리 신청해주세요)',
  ],
  faqs: [
    {
      question: '프리다이빙 자격증이 없어도 참여할 수 있나요?',
      answer:
        '펀다이빙은 자격 보유자 대상 세션입니다. 자격증이 없다면 체험다이빙 또는 레벨교육을 먼저 이용해 주세요.',
    },
    {
      question: '어떤 자격증이 필요한가요?',
      answer:
        'AIDA 등 국제 프리다이빙 자격증 보유자라면 참여 가능합니다. 보유 자격과 경험을 확인한 뒤 안전 범위 내에서 진행합니다.',
    },
    {
      question: '장비는 제공되나요?',
      answer:
        '프리다이빙 장비는 포함되지 않습니다. 렌탈이 필요하시면 미리 신청해 주세요.',
    },
    {
      question: '섬 다이빙 시 추가 비용이 있나요?',
      answer: '섬 다이빙 진행 시 보팅비는 별도입니다. 일정과 포인트에 따라 안내드립니다.',
    },
    {
      question: '바다 상태가 안 좋으면 어떻게 되나요?',
      answer:
        '바다 상황과 해양조건을 확인한 뒤 안전한 장소를 선정합니다. 상황에 따라 일정 조정이 있을 수 있습니다.',
    },
  ],
} as const;

export const programs = [
  {
    slug: 'aida1',
    category: 'intro' as const,
    title: 'Level 1',
    summary:
      '프리다이빙에 대한 기초 이론을 배우고, 실습하는 입문 과정. 5미터 수영장에서 진행',
    href: '/courses/level/aida1',
    badge: '레벨교육',
    price: '200,000원',
  },
  {
    slug: 'aida2',
    category: 'cert' as const,
    title: 'Level 2',
    summary: '12미터 바다에서 진행하는 초급과정',
    href: '/courses/level/aida2',
    badge: '초보',
    price: '550,000원',
  },
  {
    slug: 'aida3',
    category: 'cert' as const,
    title: 'Level 3',
    summary:
      '프리폴, 이퀄라이징, 중급 안전 절차 과정.',
    href: '/courses/level/aida3',
    badge: '중급',
    price: '650,000원',
  },
  {
    slug: 'aida4',
    category: 'cert' as const,
    title: 'Level 4',
    summary:
      '버디 리드, 구조 절차, 상급 이론 중심 마스터 과정.',
    href: '/courses/level/aida4',
    badge: '상급/마스터',
    price: '800,000원',
  },
  {
    slug: 'instructor',
    category: 'instructor' as const,
    title: 'AIDA 강사과정',
    summary:
      'AIDA 강사 준비 과정. 티칭, 안전 판단, 수업 운영.',
    href: '/courses/level/instructor',
    badge: '프로 과정',
    price: '2,000,000원',
    priceNote: '크로스오버 1,200,000원',
  },
  {
    slug: 'nofin',
    category: 'training' as const,
    title: '노핀 코스',
    summary:
      '핀 없이 진행하는 노핀 특화 과정.',
    href: '/courses/training/nofin',
    badge: '노핀 집중',
    price: '450,000원 (2인이상)',
    priceNote: '550,000원 (1인)',
  },
  {
    slug: 'training',
    category: 'training' as const,
    title: '인도어·수심 트레이닝',
    summary:
      '자세, 핀 영법, 이퀄라이징, 수심 적응 맞춤 트레이닝.',
    href: '/courses/training/depth',
    badge: '집중 코칭',
    price: '120,000원 (2인이상)',
    priceNote: '150,000원 (체크다이빙 or 1인 수업)\n100,000원 (기존 교육생 대상 한정)',
  },
  {
    slug: 'intro-dive',
    category: 'intro' as const,
    title: '체험다이빙',
    summary: '프리다이빙을 가볍게 경험해보는 과정.',
    href: '/courses/intro-dive',
    badge: '체험',
    price: '130,000원 (2인이상)',
    priceNote: '1인 150,000원',
  },
  {
    slug: 'fun',
    category: 'training' as const,
    title: '펀다이빙',
    summary:
      '자격 보유자 대상 제주 펀다이빙 세션.',
    href: '/courses/fun',
    badge: '제주 여행',
    price: '130,000원 (2인이상)',
    priceNote: '150,000원 (1인)',
  },
  {
    slug: 'online-coaching',
    category: 'training' as const,
    title: '온라인 코칭',
    summary:
      '비대면 1:1 코칭. 호흡, 드라이 훈련, 이퀄라이징.',
    href: '/courses/online-coaching',
    badge: '비대면',
    price: '별도 문의 / 월',
  },
  {
    slug: 'long-stay-package',
    category: 'special' as const,
    title: '제주살기 패키지',
    summary:
      '제주에 길게 여행 오시는 분들을 위한 패키지 프로그램. 트레이닝과 숙식을 함께 구성합니다.',
    href: '/courses/special/long-stay-package',
    badge: '트레이닝+숙식',
    price: '별도 문의',
  },
  {
    slug: 'membership',
    category: 'special' as const,
    title: '정기 회원권',
    summary:
      '제주에 살면서 꾸준히 트레이닝을 받으시는 정기 회원 프로그램.',
    href: '/courses/special/membership',
    badge: '정기 회원',
    price: '별도 문의',
  },
] as const;

export const courseDetails = {
  'intro-dive': {
    title: '체험다이빙',
    level: 'Intro',
    price: '130,000원 (2인이상)',
    priceNote: '1인 150,000원',
    duration: '2.5시간',
    target: `프리다이빙이 궁금한 분
자격증 과정이 부담스러운 분
제주 여행 중 특별한 경험을 원하는 분
바다를 좋아하는 분`,
    description:
      '체험을 해보고 레벨교육을 받을 경우 이중으로 교육비를 지불하실 수도 있습니다. [[이왕 처음에 제대로 배우고 싶다면 체험보다는 레벨교육을 추천드립니다.]]',
    curriculum: ['장비 착용 및 기본 안전 안내', '호흡과 이완 연습', '얕은 수심 적응', '수중 촬영 및 피드백'],
    includes: ['기본 장비 대여', '수중 촬영', '개인 피드백'],
  },
  aida1: {
    title: 'Level 1',
    level: 'AIDA 1',
    price: '200,000원',
    duration: '1일 과정',
    target: '프리다이빙 기초를 배우려는 입문자',
    description:
      '프리다이빙의 기본 원리와 안전 개념을 배우는 입문 과정. 호흡, 이완, 버디 시스템, 기본 수중 적응을 다룹니다.',
    curriculum: ['프리다이빙 이론', '호흡과 이완', '버디 안전', '제한수역 또는 얕은 수심 실습'],
    includes: [
      'AIDA 국제공인 자격증 발급',
      '온라인 이론교재',
      '렌탈장비(스노클, 마스크, 롱핀, 프리다이빙 슈트 대여)',
    ],
  },
  aida2: {
    title: 'Level 2',
    level: 'AIDA 2',
    price: '550,000원',
    priceNote: 'Level 1+2 패키지 600,000원. Level 2 수강료에 50,000원 추가 시 Level 1 포함.',
    duration: '2~3일 과정',
    target: '개방수역 프리다이빙 자격 취득 희망자',
    description:
      '개방수역에서 12~20m 수심을 경험하는 초급 자격 과정. 이론, 제한수역, 개방수역 실습을 단계별로 진행합니다.',
    curriculum: ['이론 및 안전 절차', 'STA/DYN 기초', '개방수역 하강', '구조 절차와 버디 시스템'],
    includes: ['AIDA 자격 과정', '수중 촬영', '개인 자세 피드백'],
  },
  aida3: {
    title: 'Level 3',
    level: 'AIDA 3',
    price: '650,000원',
    duration: '2~3일 과정',
    target: '수심과 기술을 확장하려는 자격 보유자',
    description:
      '프리폴, 중급 이퀄라이징, 효율적인 하강 자세를 다루는 중급 과정. 안정적인 다이빙 루틴을 구축합니다.',
    curriculum: ['프리폴 자세', '이퀄라이징 점검', '수심 적응', '중급 안전 절차'],
    includes: ['수심 트레이닝', '수중 영상 분석', '개인별 과제 정리'],
  },
  aida4: {
    title: 'Level 4',
    level: 'AIDA 4',
    price: '800,000원',
    duration: '3일 이상',
    target: '상급 다이버 및 마스터 과정 준비자',
    description:
      '버디 리드, 구조 절차, 상급 이론을 다루는 마스터 과정. 안전 판단과 다이빙 운영 능력을 강화합니다.',
    curriculum: ['상급 이론', '구조 시나리오', '버디 리드', '수심 및 컨디션 관리'],
    includes: ['상급 안전 훈련', '기술 피드백', '다음 단계 상담'],
  },
  instructor: {
    title: 'AIDA 강사과정',
    level: 'Instructor',
    price: '2,000,000원',
    priceNote: '크로스오버 1,200,000원',
    duration: '상담 후 확정',
    target: 'AIDA 강사 과정을 준비하는 다이버',
    description:
      '강사 과정을 준비하는 프로 과정. 티칭 구성, 브리핑, 안전 판단, 수업 운영을 실전 기준으로 점검합니다.',
    curriculum: ['브리핑 구성', '티칭 시나리오', '구조 및 안전 판단', '모의 수업 피드백'],
    includes: ['강사 과정 준비 상담', '모의 티칭 피드백', '체크리스트 제공'],
  },
  nofin: {
    title: '노핀 코스',
    level: 'No-Fins',
    price: '450,000원 (2인이상)',
    priceNote: '550,000원 (1인)',
    duration: '3섹션 (이론+실습 2회 2시간씩)',
    target: '노핀 기술을 배우려는 다이버',
    description:
      '핀 없이 진행하는 프리다이빙 특화 과정. 몸의 정렬, 추진 효율, 리듬, 안전한 상승과 하강을 다룹니다.',
    curriculum: ['노핀 기본 자세', '암풀과 킥 리듬', '수중 정렬', '영상 분석'],
    includes: ['노핀 기술 피드백', '수중 촬영', '개인 연습 과제'],
  },
  depth: {
    title: '인도어*수심 트레이닝',
    level: 'Training',
    price: '120,000원 (2인이상)',
    priceNote: '150,000원 (1인) · 100,000원 (기존 교육생 대상 한정)',
    duration: '1일 집중',
    target: '수심 정체 또는 자세 교정이 필요한 다이버',
    description:
      '자세, 핀 영법, 이퀄라이징, 수심 적응을 점검하는 맞춤 트레이닝. 현재 문제 지점을 기준으로 세션을 구성합니다.',
    curriculum: ['목표 확인', '하강 자세 분석', '이퀄라이징 점검', '수심별 피드백'],
    includes: ['1:1 또는 소수정예 피드백', '수중 영상 분석', '훈련 방향 정리'],
  },
  indoor: {
    title: '인도어 트레이닝',
    level: 'Indoor',
    price: '120,000원 (2인이상)',
    priceNote: '150,000원 (1인) · 100,000원 (기존 교육생 대상 한정)',
    duration: '1일 또는 정기 세션',
    target: '풀장에서 기술과 호흡을 점검하려는 수강생',
    description:
      '실내 풀에서 호흡, 이완, 정적·동적 어프니아, 자세를 점검하는 트레이닝 세션입니다.',
    curriculum: ['호흡 루틴', 'STA/DYN 연습', '자세 점검', '개인별 피드백'],
    includes: ['실내 기술 훈련', '호흡 과제', '연습 계획'],
  },
  fun: {
    title: '펀다이빙',
    level: 'Fun Diving',
    price: '130,000원 (2인이상)',
    priceNote: '150,000원 (1인)',
    duration: '2시간',
    target: '프리다이빙 자격증 보유자',
    description:
      '자격 보유자를 위한 제주 펀다이빙 세션. 바다 상황과 해양조건을 확인 후 안전한 장소를 선정해 진행합니다.',
    curriculum: [],
    includes: ['포인트 브리핑', '수중 촬영'],
    excludes: [
      '보팅비(섬 다이빙시)',
      '프리다이빙 장비(렌탈장비 원하시면 미리 신청해주세요)',
    ],
  },
  'online-coaching': {
    title: '온라인 코칭',
    level: 'Online',
    price: '별도 문의 / 월',
    duration: '상담 후 확정',
    target: '원격으로 호흡과 이퀄라이징을 점검하려는 수강생',
    description:
      '비대면 1:1 코칭. 호흡, 드라이 훈련, 이퀄라이징 문제, 멘탈 루틴을 영상과 체크리스트로 점검합니다.',
    curriculum: ['목표 상담', '드라이 훈련 점검', '이퀄라이징 문제 분석', '훈련 계획 제공'],
    includes: ['온라인 피드백', '개인 훈련 과제', '후속 점검'],
  },
  'long-stay-package': {
    title: '제주살기 패키지',
    level: 'Special',
    price: '별도 문의',
    duration: '상담 후 확정',
    target: `제주에 일정 기간 머물며 프리다이빙을 집중적으로 배우려는 분
트레이닝과 숙소·식사를 한 번에 정리하고 싶은 분
장기 여행 일정에 맞춘 맞춤 코스를 원하는 분`,
    description:
      '제주에 길게 여행 오시는 분들을 위한 패키지 프로그램입니다. 프리다이빙 트레이닝과 숙식을 함께 구성해, 교육 동선에 맞는 일정으로 진행합니다.',
    curriculum: ['목표·체류 기간 상담', '트레이닝 세션 구성', '숙소·식사 연계 안내', '기간별 진도 점검'],
    includes: ['맞춤 트레이닝 일정', '숙식 연계 상담', '수중 촬영·개인 피드백', '기간별 코스 조정'],
  },
  membership: {
    title: '정기 회원권',
    level: 'Membership',
    price: '별도 문의',
    duration: '월·분기 단위',
    target: `제주에 거주하며 꾸준히 트레이닝을 이어가려는 분
정기적인 수업·세션을 희망하는 분
실력 향상을 장기적으로 관리받고 싶은 분`,
    description:
      '제주에 살면서 꾸준히 프리다이빙 트레이닝을 받으시는 정기 회원 프로그램입니다. 출석 빈도와 목표에 맞춰 세션을 운영합니다.',
    curriculum: ['회원권 유형 상담', '정기 세션 배정', '월별 목표 설정', '진도·컨디션 점검'],
    includes: ['정기 트레이닝 세션', '개인 훈련 방향 관리', '우선 예약 안내', '회원 전용 혜택 상담'],
  },
} as const;

export const caseStudies = [
  {
    title: '물 공포 입문자',
    client: '30대 직장인 · 제주 여행 중 체험',
    before:
      '구명조끼 없이는 발이 닿지 않는 풀장도 불안했고, 스노클에 물이 들어오면 바로 수면으로 올라왔습니다.',
    solution:
      '얕은 수심에서 호흡 리듬, 마스크 클리어, 버디 신호를 반복하고 수중 촬영으로 몸의 긴장을 확인했습니다.',
    after:
      '2일차 서귀포 바다 15m 완료. 수면 휴식 중 불안 호소 감소.',
  },
  {
    title: '20m 정체 다이버',
    client: 'AIDA 2 다이버 · 1년 정체',
    before:
      '20m 전후에서 목과 어깨에 힘이 들어가고, 이퀄라이징 타이밍이 늦어져 하강을 중단했습니다.',
    solution:
      '드라이 이퀄라이징, 하강 속도 조절, 프리폴 자세를 1:1로 분석하고 수중 영상을 보며 바로 교정했습니다.',
    after:
      '2회 세션 후 30m 다이브 완료. 하강 중 불필요한 킥 감소.',
  },
  {
    title: '강사 과정을 준비하던 예비 프로',
    client: '프리다이빙 경력 3년 · 강사 준비',
    before:
      '기술은 충분했지만 브리핑, 구조 시나리오, 수강생 관찰 포인트가 정리되지 않아 강사 과정에 불안이 있었습니다.',
    solution:
      'AIDA Instructor Trainer 기준으로 브리핑 스크립트, 위험 상황 대응, 피드백 언어를 세션별로 훈련했습니다.',
    after:
      '모의 티칭 체크리스트 완료. 실제 교육 상황 대응 안정화.',
  },
] as const;

export const processSteps = [
  {
    title: '상담',
    body: '수영 실력, 물 공포, 일정, 목표 수심 확인.',
  },
  {
    title: '사전 안내',
    body: '준비물, 집합 장소, 날씨, 컨디션 관리법 안내.',
  },
  {
    title: '교육 진행',
    body: '이론, 호흡, 제한수역, 개방수역 단계별 진행.',
  },
  {
    title: '피드백',
    body: '촬영본 기반 자세, 긴장도, 이퀄라이징 타이밍 확인.',
  },
  {
    title: '사후 안내',
    body: '교육 후 단톡방에 초대해 드리며, 연습 방향·장비·다음 과정을 안내해 드립니다. 제주와 제주 이외 지역에서 수강생끼리 함께 다이빙할 수 있는 커뮤니티 참여도 가능합니다.',
  },
] as const;

export const faqs = [
  {
    question: '수영을 못 하거나 물이 무서워도 다이빙을 배울 수 있나요?',
    answer:
      '네, 가능합니다. 수영 실력과 물에 대한 부담을 먼저 확인한 뒤, 체험다이빙 또는 입문 과정으로 편하게 안내해 드립니다.',
  },
  {
    question: '제주 날씨나 바다 상태가 안 좋으면 교육은 취소되나요?',
    answer:
      '안전을 최우선으로 확인합니다. 바다·기상 상황에 따라 제한수역 교육으로 대체하거나 일정을 조율해 드립니다. 상황이 애매할 때는 상담 때 함께 안내해 드릴게요.',
  },
  {
    question: '트레이너에게 직접 교육을 받으면 비용이 더 비싼가요?',
    answer:
      '아니요, 비용은 동일합니다. 미미다이브 교육은 대표 강사가 직접 진행하며, 별도 추가 비용 없이 안내해 드립니다.',
  },
  {
    question: '준비물은 무엇이 필요한가요?',
    answer:
      '수영복, 수모, 수건을 개인적으로 준비해 주시면 됩니다. 마스크, 스노클, 롱핀, 슈트 등 기본 교육 장비는 과정에 따라 대여 가능하니, 상담 때 함께 안내해 드릴게요.',
  },
  {
    question: '자격증 취득 후에도 계속 케어를 받을 수 있나요?',
    answer:
      '네, 가능합니다. 자격 취득 후 단톡방에 초대해 드리며, 이후 프로그램 참여도 함께 안내해 드립니다.',
  },
  {
    question: '예약 취소나 환불은 어떻게 진행되나요?',
    answer:
      '예약 규정에 따라 안내해 드립니다. 기상 악화 등 안전상의 이유가 있으면 취소보다 일정 변경을 먼저 제안드려요. 궁금한 점은 상담 때 편하게 말씀해 주세요.',
  },
  {
    question: '장비가 없어도 참여하셔도 될까요?',
    answer:
      '네, 가능합니다. 과정과 환경에 따라 마스크, 스노클, 웻슈트 등이 필요할 수 있는데, 대여도 가능하니 상담 때 준비물을 함께 안내해 드립니다.',
  },
  {
    question: '혼자 신청해도 괜찮나요?',
    answer:
      '네, 혼자 신청하셔도 괜찮습니다. 일정에 따라 단독 또는 그룹 수업으로 배정해 드리니, 편하게 문의해 주세요.',
  },
  {
    question: '교육 사진이나 영상도 받을 수 있나요?',
    answer:
      '네, 수업 중 촬영한 영상으로 자세·호흡·이퀄라이징 타이밍을 함께 확인해 드립니다. 과정과 학습 진도, 당일 컨디션에 따라 제공 내용이 달라질 수 있으니 참고해 주세요.',
  },
  {
    question: '노핀을 처음 해도 배울 수 있나요?',
    answer:
      '네, 처음이셔도 괜찮습니다. 노핀 기본 자세, 호흡, 수중 적응부터 차근차근 함께 배워 나갑니다. 수영 실력과 이퀄라이징 상태를 먼저 확인한 뒤, 본인에게 맞는 단계와 속도로 진행해 드립니다.',
  },
] as const;

export const certCourseShared = {
  includesTitle: '포함 사항',
  includes: [
    'AIDA 국제공인 자격증 발급',
    '온라인 이론교재',
    '렌탈장비(스노클, 마스크, 롱핀, 프리다이빙 슈트 대여)',
    '수중 촬영·개인 피드백',
  ],
  faqTitle: '자주 묻는 질문',
} as const;

export const certCourseOrder = [
  'aida1',
  'aida2',
  'level-intro-package',
  'aida3',
  'aida4',
  'instructor',
] as const;

export type CertCourseId = (typeof certCourseOrder)[number];

export const certCourseLandings = {
  aida1: {
    id: 'aida1',
    title: 'Level 1',
    badge: '입문',
    duration: '1일 과정 · 5m 수영장',
    price: '200,000원',
    lead: '프리다이빙에 대한 기초 이론을 배우고, 실습하는 입문 과정입니다. 바다 수업 없이 수영장에서 안전하게 첫 발을 내딛습니다.',
    blocks: [
      {
        label: '이론',
        body: '프리다이빙 기본 원리, 호흡과 이완, 버디 시스템, 안전 개념을 체계적으로 학습합니다. 온라인 이론교재로 사전·복습이 가능합니다.',
      },
      {
        label: '수영장',
        body: '5미터 수영장에서 호흡·이완 연습, STA 입문, 기본 수중 적응을 진행합니다. 차분한 피드백으로 첫 프리다이빙 경험을 완성합니다.',
      },
    ],
    includes: [
      'AIDA 국제공인 자격증 발급',
      '온라인 이론교재',
      '렌탈장비(스노클, 마스크, 롱핀, 프리다이빙 슈트 대여)',
    ],
    href: '/courses/level/aida1',
    bookingLabel: 'Level 1 문의',
  },
  aida2: {
    id: 'aida2',
    title: 'Level 2',
    badge: '초급',
    duration: '2~3일 과정 · 12m 바다',
    price: '550,000원',
    lead: '12미터 바다에서 진행하는 초급 자격 과정입니다. 이론과 수영장 기초를 바탕으로 개방수역에서 자격 요건을 완성합니다.',
    blocks: [
      {
        label: '이론',
        body: '개방수역 안전 절차, 버디 시스템, 구조 기초, 이퀄라이징 원리를 다룹니다. 바다 수업 전 컨디션과 준비 루틴을 정리합니다.',
      },
      {
        label: '수영장',
        body: 'STA/DYN 기초, 하강 자세, 이퀄라이징 타이밍을 수영장에서 점검합니다. 바다 수업 전 기술을 안정화합니다.',
      },
      {
        label: '바다',
        body: '제주 개방수역에서 12~20m 수심을 경험합니다. 안전 범위 내 하강, 버디 체크, 수중 촬영 피드백으로 자격 요건을 완성합니다.',
      },
    ],
    includes: ['AIDA 국제공인 자격증 발급', '수중 촬영', '개인 자세 피드백', '온라인 이론교재'],
    discounts: [
      {
        label: 'Level 1 추가 옵션',
        value: '+50,000원',
        note: 'Level 2만 신청하셔도, 수강료 5만원을 추가하시면 Level 1 입문 과정도 함께 수강하실 수 있습니다.',
      },
    ],
    href: '/courses/level/aida2',
    bookingLabel: 'Level 2 문의',
  },
  'level-intro-package': {
    id: 'level-intro-package',
    title: 'Level 1 + 2 패키지',
    badge: '가장 인기',
    duration: '3~4일 · 수영장 + 바다',
    price: '600,000원',
    lead: '입문부터 초보과정까지 순차적으로 이어가는 프로그램입니다. Level 1·2를 연속으로 이수할 때 가장 많이 선택하는 패키지입니다.',
    packagePricing: {
      items: [
        { label: 'Level 1', price: '200,000원' },
        { label: 'Level 2', price: '550,000원' },
      ],
      subtotal: '750,000원',
      packagePrice: '600,000원',
      savingsAmount: '15만원 절약',
      savingsPercent: '20% OFF',
    },
    blocks: [
      {
        label: '이론',
        body: 'Level 1·2 과정 내용을 단계별로 학습합니다.',
      },
      {
        label: '수영장',
        body: '물에서 뜨는 방법부터 호흡·이완·STA 기초를 익힙니다.',
      },
      {
        label: '바다',
        body: '제주 바다에서 12~20m 개방수역 자격 과정을 완성합니다. 입문부터 초급 자격까지 한 번에 이어갑니다.',
      },
    ],
    includes: [
      'Level 1·2 AIDA 국제공인 자격증',
      '온라인 이론교재',
      '렌탈장비 대여',
      '수중 촬영·개인 피드백',
    ],
    featured: true,
    href: '/courses/level/aida2',
    bookingLabel: '패키지 문의',
  },
  aida3: {
    id: 'aida3',
    title: 'Level 3',
    badge: '중급',
    duration: '2~3일 과정',
    price: '650,000원',
    lead: '수심과 기술을 확장하는 중급 자격 과정입니다. 프리폴, 이퀄라이징, 안정적인 다이빙 루틴을 구축합니다.',
    blocks: [
      {
        label: '이론',
        body: '중급 이퀄라이징, 수심 적응 원리, 컨디션 관리, 안전 판단을 심화 학습합니다.',
      },
      {
        label: '수영장',
        body: '프리폴 자세, 호흡 루틴, DYN 연습으로 수중 효율을 점검합니다.',
      },
      {
        label: '바다',
        body: '더 깊은 수심에서 하강 자세, 이퀄라이징, 프리폴을 실전 적용합니다. 수중 영상 분석으로 개인별 과제를 정리합니다.',
      },
    ],
    includes: ['AIDA 국제공인 자격증 발급', '수중 영상 분석', '개인별 과제 정리'],
    href: '/courses/level/aida3',
    bookingLabel: 'Level 3 문의',
  },
  aida4: {
    id: 'aida4',
    title: 'Level 4',
    badge: '상급',
    duration: '3일 이상',
    price: '800,000원',
    lead: '버디 리드, 구조 절차, 상급 이론 중심의 마스터 과정입니다. 안전 판단과 다이빙 운영 능력을 강화합니다.',
    blocks: [
      {
        label: '이론',
        body: '상급 안전 이론, 구조 시나리오, 버디 리드 원칙, 컨디션·수심 관리 전략을 다룹니다.',
      },
      {
        label: '수영장',
        body: '구조 드릴, 호흡·STA 심화, 기술 점검 세션을 진행합니다.',
      },
      {
        label: '바다',
        body: '실전 수심 환경에서 버디 리드, 구조 대응, 상급 다이빙 루틴을 훈련합니다.',
      },
    ],
    includes: ['AIDA 국제공인 자격증 발급', '상급 안전 훈련', '기술 피드백', '다음 단계 상담'],
    href: '/courses/level/aida4',
    bookingLabel: 'Level 4 문의',
  },
  instructor: {
    id: 'instructor',
    title: 'AIDA 강사과정',
    badge: '프로',
    duration: '상담 후 확정',
    price: '2,000,000원',
    priceNote: '크로스오버 1,200,000원',
    lead: 'AIDA 강사 과정을 준비하는 프로 과정입니다. 티칭, 브리핑, 안전 판단, 수업 운영을 실전 기준으로 점검합니다.',
    blocks: [
      {
        label: '이론',
        body: 'AIDA 강사 기준, 커리큘럼 구성, 브리핑 스크립트, 위험 상황 판단과 대응을 학습합니다.',
      },
      {
        label: '수영장',
        body: '모의 티칭, 구조 시나리오, 수강생 관찰 포인트를 풀장에서 반복 훈련합니다.',
      },
      {
        label: '바다',
        body: '실제 교육 상황에 가까운 브리핑·수업 운영·피드백 언어를 바다 세션에서 점검합니다.',
      },
    ],
    includes: ['강사 과정 준비 상담', '모의 티칭 피드백', '체크리스트 제공', '후속 상담'],
    href: '/courses/level/instructor',
    bookingLabel: '강사과정 문의',
  },
} as const satisfies Record<
  CertCourseId,
  {
    id: CertCourseId;
    title: string;
    badge: string;
    duration: string;
    price: string;
    priceNote?: string;
    lead: string;
    blocks: readonly { label: string; body: string }[];
    includes: readonly string[];
    discounts?: readonly { label: string; value: string; note?: string }[];
    featured?: boolean;
    href: string;
    bookingLabel: string;
    packagePricing?: {
      items: readonly { label: string; price: string }[];
      subtotal: string;
      packagePrice: string;
      savingsAmount: string;
      savingsPercent: string;
    };
  }
>;

export const certCourseFaqs = [
  {
    question: '수영을 못 하거나 물이 무서워도 다이빙을 배울 수 있나요?',
    answer:
      '네, 가능합니다. 수영 실력과 물에 대한 부담을 먼저 확인한 뒤, 본인에게 맞는 입문 과정으로 편하게 안내해 드립니다.',
  },
  {
    question: '제주 날씨나 바다 상태가 안 좋으면 교육은 취소되나요?',
    answer:
      '안전을 최우선으로 확인합니다. 바다·기상 상황에 따라 제한수역 교육으로 대체하거나 일정을 조율해 드립니다. 상황이 애매할 때는 상담 때 함께 안내해 드릴게요.',
  },
  {
    question: '준비물은 무엇이 필요한가요?',
    answer:
      '수영복, 수모, 수건을 개인적으로 준비해 주시면 됩니다. 마스크, 스노클, 롱핀, 슈트 등 기본 교육 장비는 과정에 따라 대여 가능하니, 상담 때 함께 안내해 드릴게요.',
  },
  {
    question: '교육 사진이나 영상도 받을 수 있나요?',
    answer:
      '네, 수업 중 촬영한 영상으로 자세·호흡·이퀄라이징 타이밍을 함께 확인해 드립니다. 과정과 학습 진도, 당일 컨디션에 따라 제공 내용이 달라질 수 있으니 참고해 주세요.',
  },
] as const;

export type ProgramCourseLanding = {
  id: string;
  title: string;
  badge?: string;
  duration: string;
  price: string;
  priceNote?: string;
  lead: string;
  blocks: readonly { label: string; body: string }[];
  discounts?: readonly { label: string; value: string; note?: string }[];
  featured?: boolean;
  href: string;
  bookingLabel: string;
  extraCta?: { label: string; href: string };
  anchorId?: string;
  packagePricing?: {
    items: readonly { label: string; price: string }[];
    subtotal: string;
    packagePrice: string;
    savingsAmount: string;
    savingsPercent: string;
  };
};

export const advancedCourseOrder = ['nofin', 'training', 'online-coaching'] as const;
export type AdvancedCourseId = (typeof advancedCourseOrder)[number];

export const advancedCourseLandings: Record<AdvancedCourseId, ProgramCourseLanding> = {
  nofin: {
    id: 'nofin',
    title: '노핀 코스',
    duration: '3섹션 (이론+실습 2회 2시간씩)',
    price: '450,000원 (2인이상)',
    priceNote: '550,000원 (1인)',
    lead: '핀 없이 진행하는 노핀 특화 과정입니다. 몸의 정렬, 추진 효율, 리듬을 집중적으로 다룹니다.',
    blocks: [
      {
        label: '이론',
        body: '노핀 기본 원리, 추진 효율, 상승·하강 안전, 호흡과 이완의 연결을 학습합니다.',
      },
      {
        label: '수영장',
        body: '암풀과 킥 리듬, 수중 정렬을 풀장에서 반복 연습합니다. 영상으로 자세를 확인합니다.',
      },
      {
        label: '바다',
        body: '제주 바다에서 노핀 다이빙을 실전 적용합니다. 개인별 피드백과 연습 과제를 정리합니다.',
      },
    ],
    href: '/courses/training/nofin',
    bookingLabel: '노핀 코스 문의',
  },
  training: {
    id: 'training',
    title: '인도어·수심 트레이닝',
    duration: '1일 집중',
    price: '120,000원 (2인이상)',
    priceNote: '150,000원 (체크다이빙 or 1인) · 100,000원 (기존 교육생 한정)',
    lead: '상담 후 개인별 맞춤 코칭 섹션을 진행합니다.',
    blocks: [
      {
        label: '이론',
        body: '목표와 현재 상태를 확인하고, 호흡·이퀄라이징·자세 교정 포인트를 브리핑합니다.',
      },
      {
        label: '수영장',
        body: '호흡, STA/DYN, 하강 자세를 풀장에서 점검합니다. 인도어 세션으로 기술을 안정화합니다.',
      },
      {
        label: '바다',
        body: '수심 적응과 하강 자세, 이퀄라이징 타이밍을 바다에서 피드백합니다. 수중 영상 분석을 포함합니다.',
      },
    ],
    href: '/courses/training/depth',
    bookingLabel: '트레이닝 문의',
  },
  'online-coaching': {
    id: 'online-coaching',
    title: '온라인 코칭',
    duration: '상담 후 확정',
    price: '별도 문의 / 월',
    lead: '비대면 1:1 코칭입니다. 호흡, 드라이 훈련, 이퀄라이징, 멘탈 루틴을 영상과 체크리스트로 점검합니다.',
    blocks: [
      {
        label: '상담',
        body: '목표와 현재 훈련 상태를 확인하고, 개인 맞춤 코칭 계획을 수립합니다.',
      },
      {
        label: '드라이 훈련',
        body: '호흡, 이완, 이퀄라이징 드라이 연습을 영상으로 점검하고 과제를 제공합니다.',
      },
      {
        label: '후속 점검',
        body: '정기 피드백으로 훈련 방향을 조정합니다. 원격에서도 꾸준히 실력을 끌어올립니다.',
      },
    ],
    href: '/courses/online-coaching',
    bookingLabel: '온라인 코칭 문의',
  },
};

export const advancedCourseShared = {
  includesTitle: '포함 사항',
  includes: ['맞춤 세션 구성', '수중 영상 분석', '개인 훈련 과제', '후속 연습 방향 안내'],
  faqTitle: '자주 묻는 질문',
  faqs: [
    {
      question: '장비가 없어도 참여하셔도 될까요?',
      answer:
        '네, 가능합니다. 노핀 코스는 롱핀이 없어도 참여하실 수 있어요. 수영장·바다 환경에 따라 마스크, 스노클, 웻슈트 등이 필요할 수 있는데, 대여도 가능하니 상담 때 과정별 준비물을 꼼꼼히 안내해 드립니다.',
    },
    {
      question: '교육 사진이나 영상도 받을 수 있나요?',
      answer:
        '네, 수업 중 촬영한 영상으로 자세·호흡·이퀄라이징 타이밍을 함께 확인해 드립니다. 과정과 학습 진도, 당일 컨디션에 따라 제공 내용이 달라질 수 있으니 참고해 주세요.',
    },
    {
      question: '노핀을 처음 해도 배울 수 있나요?',
      answer:
        '네, 처음이셔도 괜찮습니다. 노핀 기본 자세, 호흡, 수중 적응부터 차근차근 함께 배워 나갑니다. 수영 실력과 이퀄라이징 상태를 먼저 확인한 뒤, 본인에게 맞는 단계와 속도로 진행해 드립니다.',
    },
  ] as const,
};

export const experienceCourseOrder = ['intro-dive', 'fun'] as const;
export type ExperienceCourseId = (typeof experienceCourseOrder)[number];

export const experienceCourseLandings: Record<ExperienceCourseId, ProgramCourseLanding> = {
  'intro-dive': {
    id: 'intro-dive',
    title: '체험다이빙',
    duration: '2.5시간',
    price: '130,000원 (2인이상)',
    priceNote: '1인 150,000원',
    lead: '체험을 해보고 레벨교육을 받을 경우 이중으로 교육비를 지불하실 수도 있습니다. 이왕 처음에 제대로 배우고 싶다면 체험보다는 레벨교육을 추천드립니다.',
    blocks: [
      {
        label: '이론',
        body: '호흡, 장비, 수면 안전, 버디 기본 개념을 가볍게 안내합니다.',
      },
      {
        label: '수심 적응',
        body: '얕은 수심에서 호흡·이완 연습, 기본 수중 적응을 차분히 진행합니다. 수중 촬영 피드백을 포함합니다.',
      },
    ],
    href: '/courses/intro-dive',
    bookingLabel: '체험다이빙 문의',
    extraCta: { label: '레벨1 교육 바로가기', href: '/courses/level/aida1' },
  },
  fun: {
    id: 'fun',
    title: '펀다이빙',
    duration: '2시간',
    price: '130,000원 (2인이상)',
    priceNote: '150,000원 (1인)',
    lead: '자격 보유자를 위한 제주 펀다이빙 세션입니다. 바다 상황과 해양조건을 확인 후 안전한 장소를 선정해 진행합니다.',
    blocks: [
      {
        label: '브리핑',
        body: '자격·컨디션 확인, 포인트 안내, 버디 체크를 진행합니다.',
      },
      {
        label: '바다',
        body: '제주 바다에서 펀다이빙을 즐깁니다. 안전 범위 내에서 여유롭게 다이빙합니다.',
      },
    ],
    href: '/courses/fun',
    bookingLabel: '펀다이빙 문의',
  },
};

export const experienceCourseShared = {
  includesTitle: '포함 사항',
  includes: ['기본 장비 대여', '안전 브리핑', '수중 촬영(과정별)', '개인 피드백'],
  faqTitle: '자주 묻는 질문',
  faqs: [
    {
      question: '수영을 못 하거나 물이 무서워도 다이빙을 배울 수 있나요?',
      answer:
        '네, 가능합니다. 수영 실력과 물에 대한 부담을 먼저 확인한 뒤, 체험다이빙 또는 입문 과정으로 편하게 안내해 드립니다.',
    },
    {
      question: '제주 날씨나 바다 상태가 안 좋으면 교육은 취소되나요?',
      answer:
        '안전을 최우선으로 확인합니다. 바다·기상 상황에 따라 제한수역 교육으로 대체하거나 일정을 조율해 드립니다. 상황이 애매할 때는 상담 때 함께 안내해 드릴게요.',
    },
    {
      question: '혼자 신청해도 괜찮나요?',
      answer:
        '네, 혼자 신청하셔도 괜찮습니다. 일정에 따라 단독 또는 그룹 수업으로 배정해 드리니, 편하게 문의해 주세요.',
    },
  ] as const,
};

export const specialCourseOrder = ['long-stay-package', 'membership'] as const;
export type SpecialCourseId = (typeof specialCourseOrder)[number];

export const specialCourseLandings: Record<SpecialCourseId, ProgramCourseLanding> = {
  'long-stay-package': {
    id: 'long-stay-package',
    title: '제주살기 패키지',
    badge: '트레이닝+숙식',
    duration: '상담 후 확정',
    price: '별도 문의',
    lead: '제주에 길게 여행 오시는 분들을 위한 패키지입니다. 프리다이빙 트레이닝과 숙식을 함께 구성해 교육 동선에 맞는 일정으로 진행합니다.',
    blocks: [
      {
        label: '상담',
        body: '체류 기간, 목표, 일정을 확인하고 맞춤 트레이닝 플랜을 구성합니다.',
      },
      {
        label: '트레이닝',
        body: '기간에 맞춰 레벨교육·심화 트레이닝 세션을 배정합니다. 진도별 피드백을 제공합니다.',
      },
      {
        label: '숙식',
        body: '교육 동선에 맞는 숙소·식사 연계를 상담합니다. 제주살기 일정에 맞게 조율합니다.',
      },
    ],
    href: '/courses/special/long-stay-package',
    bookingLabel: '패키지 문의',
  },
  membership: {
    id: 'membership',
    title: '정기 회원권',
    badge: '정기 회원',
    duration: '월·분기 단위',
    price: '별도 문의',
    lead: '제주에 거주하시면서 꾸준히 프리다이빙 트레이닝을 받으시는 정기 회원 프로그램입니다.',
    blocks: [
      {
        label: '상담',
        body: '회원권 유형, 출석 빈도, 목표를 확인하고 맞는 플랜을 제안합니다.',
      },
      {
        label: '정기 세션',
        body: '월별 목표에 맞춰 정기 트레이닝 세션을 운영합니다. 컨디션과 진도를 꾸준히 점검합니다.',
      },
      {
        label: '회원 혜택',
        body: '우선 예약, 개인 훈련 방향 관리, 회원 전용 혜택을 상담해 드립니다.',
      },
    ],
    href: '/courses/special/membership',
    bookingLabel: '회원권 문의',
  },
};

export const specialCourseShared = {
  includesTitle: '포함 사항',
  includes: ['맞춤 일정 상담', '트레이닝 세션 배정', '개인 피드백', '기간별 코스 조정'],
  faqTitle: '자주 묻는 질문',
  faqs: [
    {
      question: '예약 취소나 환불은 어떻게 진행되나요?',
      answer:
        '예약 규정에 따라 안내해 드립니다. 기상 악화 등 안전상의 이유가 있으면 취소보다 일정 변경을 먼저 제안드려요. 궁금한 점은 상담 때 편하게 말씀해 주세요.',
    },
    {
      question: '장비가 없어도 참여하셔도 될까요?',
      answer:
        '네, 가능합니다. 과정과 환경에 따라 마스크, 스노클, 웻슈트 등이 필요할 수 있는데, 대여도 가능하니 상담 때 준비물을 함께 안내해 드립니다.',
    },
    {
      question: '혼자 신청해도 괜찮나요?',
      answer:
        '네, 혼자 신청하셔도 괜찮습니다. 일정에 따라 단독 또는 그룹 수업으로 배정해 드리니, 편하게 문의해 주세요.',
    },
  ] as const,
};

export type ProgramAccordionSectionId =
  | 'programs-cert'
  | 'programs-advanced'
  | 'programs-experience'
  | 'programs-special';

export const programSectionAccordions = {
  'programs-cert': {
    order: certCourseOrder,
    landings: certCourseLandings,
    shared: {
      includesTitle: certCourseShared.includesTitle,
      includes: certCourseShared.includes,
      faqTitle: certCourseShared.faqTitle,
      faqs: certCourseFaqs,
    },
  },
  'programs-advanced': {
    order: advancedCourseOrder,
    landings: advancedCourseLandings,
    shared: advancedCourseShared,
  },
  'programs-experience': {
    order: experienceCourseOrder,
    landings: experienceCourseLandings,
    shared: experienceCourseShared,
  },
  'programs-special': {
    order: specialCourseOrder,
    landings: specialCourseLandings,
    shared: specialCourseShared,
  },
} as const;

export const allAccordionCourseIds = [
  ...certCourseOrder,
  ...advancedCourseOrder,
  ...experienceCourseOrder,
  ...specialCourseOrder,
] as const;

export type AccordionCourseId = (typeof allAccordionCourseIds)[number];

export function isAccordionCourseId(value: string): value is AccordionCourseId {
  return (allAccordionCourseIds as readonly string[]).includes(value);
}

export function getAccordionAnchorId(courseId: string): string {
  if (courseId === 'level-intro-package') return 'level-intro-package';
  return `program-card-${courseId}`;
}

export const programOptions = programs.map((p) => p.title);
