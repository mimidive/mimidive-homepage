'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { api } from '@/lib/api';
import type { Notice } from '@/lib/types';

export default function NoticePage() {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get('id');
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selected, setSelected] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.notices
      .list()
      .then(async (data) => {
        setNotices(data);
        if (selectedId) {
          const notice = data.find((n) => n.id === Number(selectedId));
          if (notice) setSelected(notice);
          else {
            const detail = await api.notices.get(Number(selectedId));
            setSelected(detail);
          }
        }
      })
      .finally(() => setLoading(false));
  }, [selectedId]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Notice</p>
      <h1 className="mt-2 text-3xl font-light text-white">공지사항</h1>

      {loading ? (
        <p className="mt-12 text-white/50">불러오는 중...</p>
      ) : (
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-2 lg:col-span-2">
            {notices.map((notice) => (
              <button
                key={notice.id}
                onClick={() => setSelected(notice)}
                className={`w-full rounded-xl px-4 py-3 text-left transition ${
                  selected?.id === notice.id
                    ? 'bg-cyan-500/20 border border-cyan-400/30'
                    : 'glass-card hover:border-white/20'
                }`}
              >
                <p className="text-sm font-medium text-white">{notice.title}</p>
                <p className="mt-1 text-xs text-white/40">
                  {new Date(notice.createdAt).toLocaleDateString('ko-KR')}
                </p>
              </button>
            ))}
            {notices.length === 0 && (
              <p className="text-white/50">등록된 공지가 없습니다.</p>
            )}
          </div>

          <div className="lg:col-span-3">
            {selected ? (
              <article className="glass-card rounded-2xl p-8">
                <h2 className="text-xl font-medium text-white">{selected.title}</h2>
                <p className="mt-2 text-xs text-white/40">
                  {new Date(selected.createdAt).toLocaleDateString('ko-KR')}
                </p>
                <div className="mt-8 whitespace-pre-line leading-relaxed text-white/80">
                  {selected.content}
                </div>
              </article>
            ) : (
              <div className="glass-card flex h-64 items-center justify-center rounded-2xl">
                <p className="text-white/40">공지를 선택해 주세요</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
