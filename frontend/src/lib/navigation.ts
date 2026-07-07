export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '센터 소개', href: '/instructor/intro' },
  { label: '교육 과정', href: '/programs' },
  { label: '숙소안내', href: '/accommodation' },
  { label: '문의', href: '/booking' },
];
