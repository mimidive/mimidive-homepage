import type { Metadata } from 'next';
import { courseDetails, programsPage } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

export const SITE_NAME = '제주프리다이빙 미미다이브';
export const DEFAULT_TITLE =
  '미미다이브 | 제주 프리다이빙 교육센터 · 체험다이빙·AIDA자격증 · 아시아 신기록 선수 운영';
export const DEFAULT_DESCRIPTION =
  '아시아 신기록·대한민국 노핀 국가대표 김혜미가 운영하는 제주 프리다이빙 교육센터 미미다이브. 체험다이빙, AIDA 자격증, 심화 트레이닝까지 소수정예·안전 중심 맞춤 교육. 카카오톡으로 상담해 보세요.';
export const OG_IMAGE = '/og-image.png';

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function absoluteUrl(path: string) {
  if (path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

function formatTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
}: PageMeta): Metadata {
  const fullTitle = formatTitle(title);
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path === '/' ? '/' : path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'website',
      siteName: SITE_NAME,
      locale: 'ko_KR',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function courseMetadata(
  slug: keyof typeof courseDetails,
  path: string,
): Metadata {
  const detail = courseDetails[slug];
  if (!detail) {
    return createPageMetadata({
      title: '교육 프로그램',
      description: DEFAULT_DESCRIPTION,
      path,
    });
  }

  return createPageMetadata({
    title: `${detail.title} (${detail.level})`,
    description: detail.description,
    path,
  });
}

export const staticPageMetadata = {
  home: createPageMetadata({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: '/',
  }),
  programs: createPageMetadata({
    title: '교육 과정',
    description: programsPage.subtitle,
    path: '/programs',
  }),
  booking: createPageMetadata({
    title: '카카오톡 상담',
    description:
      '미미다이브 카카오톡 채널로 제주 프리다이빙 교육 상담. 체험다이빙, AIDA 자격증, 트레이닝 과정을 맞춤 안내합니다.',
    path: '/booking',
  }),
  accommodation: createPageMetadata({
    title: '숙소안내',
    description:
      '미미다이브 교육 일정에 맞춘 제주 숙소·한달살기 안내. 연동 숙소 연결 상담. 서귀포 강정·법환포구 인근.',
    path: '/accommodation',
  }),
  about: createPageMetadata({
    title: '미미다이브 소개',
    description:
      '김혜미 강사가 운영하는 제주 프리다이빙 교육 센터. 입문, 자격증, 트레이닝, 강사 과정을 안전하고 체계적으로 운영합니다.',
    path: '/about',
  }),
  instructorIntro: createPageMetadata({
    title: '강사 소개',
    description:
      'AIDA·CMAS 국가대표 김혜미 강사 프로필. 아시아 신기록 보유, 제주 프리다이빙 전문 교육 및 트레이닝을 진행합니다.',
    path: '/instructor/intro',
  }),
  instructorAchievement: createPageMetadata({
    title: '경력 및 신기록',
    description:
      '김혜미 강사의 국제대회 경력, 아시아 신기록, 한국 신기록 수립 이력을 연도별로 확인할 수 있습니다.',
    path: '/instructor/achievement',
  }),
  instructorPhilosophy: createPageMetadata({
    title: '교육 철학',
    description:
      '미미다이브의 프리다이빙 교육 철학. 안전 우선, 개인별 페이스 존중, 체계적인 기술 지도를 바탕으로 교육합니다.',
    path: '/instructor/philosophy',
  }),
  instructor: createPageMetadata({
    title: '강사소개',
    description:
      '미미다이브 대표 강사 김혜미의 프로필, 교육 철학, 경력 및 신기록을 소개합니다.',
    path: '/instructor',
  }),
  schedule: createPageMetadata({
    title: '교육 일정',
    description: '미미다이브 제주 프리다이빙 교육 일정을 확인하고 예약하세요.',
    path: '/schedule',
  }),
  notice: createPageMetadata({
    title: '공지사항',
    description: '미미다이브 공지사항 및 교육 안내를 확인하세요.',
    path: '/notice',
  }),
} as const;

export const sitemapRoutes = [
  '/',
  '/programs',
  '/booking',
  '/accommodation',
  '/about',
  '/instructor',
  '/instructor/intro',
  '/instructor/achievement',
  '/instructor/philosophy',
  '/schedule',
  '/notice',
  '/courses/intro-dive',
  '/courses/fun',
  '/courses/online-coaching',
  '/courses/level/aida1',
  '/courses/level/aida2',
  '/courses/level/aida3',
  '/courses/level/aida4',
  '/courses/level/instructor',
  '/courses/training/nofin',
  '/courses/training/depth',
  '/courses/training/indoor',
  '/courses/special/long-stay-package',
  '/courses/special/membership',
] as const;
