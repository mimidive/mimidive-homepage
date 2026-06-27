import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingKakaoButton } from '@/components/layout/FloatingKakaoButton';
import { BRAND } from '@/lib/content';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '미미다이브 | 국가대표가 직접 운영하는 제주 프리다이빙',
  description: '물속이 처음이어도 괜찮습니다. 처음 시작하는 사람을 위한 안전하고 체계적인 제주 소수정예 프리다이빙 교육. 입문부터 자격증 과정까지 진행됩니다.',
  other: {
    'naver-site-verification': '36fb89103df4adb95eda33fa94b2487e91edf341',
    'google-site-verification': 'mVRD9m5ID3hzywitAqSqDF43WnQk-rct5LWitT2xLDk',
  },
  
  openGraph: {
    title: '미미다이브 | 국가대표가 직접 운영하는 제주 프리다이빙',
    description: '물속이 처음이어도 괜찮습니다. 처음 시작하는 사람을 위한 안전하고 체계적인 제주 소수정예 프리다이빙 교육. 입문부터 자격증 과정까지 진행됩니다.',
    url: 'https://www.mimidive.co.kr',
    type: 'website',
    siteName: '미미다이브',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingKakaoButton />
        <Footer />
      </body>
    </html>
  );
}
