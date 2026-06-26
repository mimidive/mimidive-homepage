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
  title: `${BRAND.name} | ${BRAND.nameEn} 국가대표 프리다이빙 센터`,
  description: BRAND.subTagline,
  other: {
    'naver-site-verification': '36fb89103df4adb95eda33fa94b2487e91edf341',
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
