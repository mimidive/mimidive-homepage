export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: '공지사항', href: '/notice' },
  {
    label: '강사소개',
    children: [
      { label: '강사소개', href: '/instructor/intro' },
      { label: '교육 철학', href: '/instructor/philosophy' },
      { label: '경력 및 신기록', href: '/instructor/achievement' },
    ],
  },
  {
    label: '수업안내',
    children: [
      { label: '체험다이빙', href: '/courses/intro-dive' },
      {
        label: '레벨 교육',
        children: [
          { label: 'AIDA 1', href: '/courses/level/aida1' },
          { label: 'AIDA 2', href: '/courses/level/aida2' },
          { label: 'AIDA 3', href: '/courses/level/aida3' },
          { label: 'AIDA 4', href: '/courses/level/aida4' },
          { label: '강사 과정', href: '/courses/level/instructor' },
        ],
      },
      {
        label: '트레이닝',
        children: [
          { label: '수심 트레이닝', href: '/courses/training/depth' },
          { label: '인도어 트레이닝', href: '/courses/training/indoor' },
          { label: '노핀 코스', href: '/courses/training/nofin' },
        ],
      },
      { label: '펀다이빙', href: '/courses/fun' },
      { label: '온라인 코칭', href: '/courses/online-coaching' },
    ],
  },
  { label: '교육일정', href: '/schedule' },
  { label: '교육신청', href: '/apply' },
];
