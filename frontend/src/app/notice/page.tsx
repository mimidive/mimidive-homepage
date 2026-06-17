import { Suspense } from 'react';
import NoticePage from './NoticeContent';

export default function NoticeRoute() {
  return (
    <Suspense fallback={<div className="px-4 py-16 text-white/50">불러오는 중...</div>}>
      <NoticePage />
    </Suspense>
  );
}
