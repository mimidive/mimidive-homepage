'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { api } from '@/lib/api';
import type { Notice, Schedule, Application, SafetyWaiver } from '@/lib/types';

type Tab = 'notices' | 'schedules' | 'applications' | 'waivers';

export default function AdminDashboard() {
  const router = useRouter();
  const { token, logout, isAdmin } = useAuthStore();
  const [tab, setTab] = useState<Tab>('notices');
  const [notices, setNotices] = useState<Notice[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [waivers, setWaivers] = useState<SafetyWaiver[]>([]);

  useEffect(() => {
    if (!token || !isAdmin()) {
      router.replace('/admin');
    }
  }, [token, isAdmin, router]);

  useEffect(() => {
    if (!token) return;
    if (tab === 'notices') api.notices.list().then(setNotices);
    if (tab === 'schedules') api.schedules.list().then(setSchedules);
    if (tab === 'applications') api.applications.list(token).then(setApplications);
    if (tab === 'waivers') api.waivers.list(token).then(setWaivers);
  }, [tab, token]);

  if (!token) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-light text-white">관리자 대시보드</h1>
        <button
          onClick={() => {
            logout();
            router.push('/admin');
          }}
          className="text-sm text-white/50 hover:text-white"
        >
          로그아웃
        </button>
      </div>

      <div className="mt-8 flex gap-2 border-b border-white/10">
        {(
          [
            ['notices', '공지사항'],
            ['schedules', '교육일정'],
            ['applications', '교육신청'],
            ['waivers', '서약서'],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-3 text-sm transition ${
              tab === key
                ? 'border-b-2 border-cyan-400 text-cyan-400'
                : 'text-white/50 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === 'notices' && (
          <NoticesAdmin token={token} notices={notices} onRefresh={() => api.notices.list().then(setNotices)} />
        )}
        {tab === 'schedules' && (
          <SchedulesAdmin token={token} schedules={schedules} onRefresh={() => api.schedules.list().then(setSchedules)} />
        )}
        {tab === 'applications' && (
          <ApplicationsAdmin
            token={token}
            applications={applications}
            onRefresh={() => api.applications.list(token).then(setApplications)}
          />
        )}
        {tab === 'waivers' && (
          <WaiversAdmin
            token={token}
            waivers={waivers}
            onRefresh={() => api.waivers.list(token).then(setWaivers)}
          />
        )}
      </div>
    </div>
  );
}

function NoticesAdmin({
  token,
  notices,
  onRefresh,
}: {
  token: string;
  notices: Notice[];
  onRefresh: () => void;
}) {
  const [form, setForm] = useState({ title: '', content: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await api.notices.update(editId, form, token);
    } else {
      await api.notices.create(form, token);
    }
    setForm({ title: '', content: '' });
    setEditId(null);
    onRefresh();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={submit} className="glass-card space-y-4 rounded-2xl p-6">
        <h2 className="font-medium text-white">{editId ? '공지 수정' : '공지 작성'}</h2>
        <input
          placeholder="제목"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="admin-input"
        />
        <textarea
          placeholder="내용"
          rows={6}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
          className="admin-input resize-none"
        />
        <div className="flex gap-2">
          <button type="submit" className="admin-btn">
            {editId ? '수정' : '등록'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setForm({ title: '', content: '' });
              }}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70"
            >
              취소
            </button>
          )}
        </div>
      </form>
      <div className="space-y-3">
        {notices.map((n) => (
          <div key={n.id} className="glass-card rounded-xl p-4">
            <h3 className="font-medium text-white">{n.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-white/60">{n.content}</p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => {
                  setEditId(n.id);
                  setForm({ title: n.title, content: n.content });
                }}
                className="text-xs text-cyan-400"
              >
                수정
              </button>
              <button
                onClick={async () => {
                  await api.notices.delete(n.id, token);
                  onRefresh();
                }}
                className="text-xs text-red-400"
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .admin-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1rem;
          color: white;
          outline: none;
        }
        .admin-btn {
          border-radius: 9999px;
          background: #06b6d4;
          padding: 0.5rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #020617;
        }
      `}</style>
    </div>
  );
}

function SchedulesAdmin({
  token,
  schedules,
  onRefresh,
}: {
  token: string;
  schedules: Schedule[];
  onRefresh: () => void;
}) {
  const [form, setForm] = useState({ title: '', date: '', description: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await api.schedules.update(editId, form, token);
    } else {
      await api.schedules.create(form, token);
    }
    setForm({ title: '', date: '', description: '' });
    setEditId(null);
    onRefresh();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={submit} className="glass-card space-y-4 rounded-2xl p-6">
        <h2 className="font-medium text-white">{editId ? '일정 수정' : '일정 등록'}</h2>
        <input
          placeholder="제목"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="admin-input"
        />
        <input
          type="datetime-local"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
          className="admin-input"
        />
        <input
          placeholder="설명"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="admin-input"
        />
        <button type="submit" className="admin-btn">
          {editId ? '수정' : '등록'}
        </button>
      </form>
      <div className="space-y-3">
        {schedules.map((s) => (
          <div key={s.id} className="glass-card rounded-xl p-4">
            <h3 className="font-medium text-white">{s.title}</h3>
            <p className="text-sm text-cyan-400">
              {new Date(s.date).toLocaleString('ko-KR')}
            </p>
            {s.description && <p className="mt-1 text-sm text-white/60">{s.description}</p>}
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => {
                  setEditId(s.id);
                  setForm({
                    title: s.title,
                    date: new Date(s.date).toISOString().slice(0, 16),
                    description: s.description || '',
                  });
                }}
                className="text-xs text-cyan-400"
              >
                수정
              </button>
              <button
                onClick={async () => {
                  await api.schedules.delete(s.id, token);
                  onRefresh();
                }}
                className="text-xs text-red-400"
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApplicationsAdmin({
  token,
  applications,
  onRefresh,
}: {
  token: string;
  applications: Application[];
  onRefresh: () => void;
}) {
  return (
    <div className="space-y-3">
      {applications.length === 0 ? (
        <p className="text-white/50">신청 내역이 없습니다.</p>
      ) : (
        applications.map((a) => (
          <div key={a.id} className="glass-card rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-white">{a.name}</h3>
                <p className="mt-1 text-sm text-cyan-400">{a.course}</p>
                <p className="mt-2 text-sm text-white/60">
                  {a.phone} · {a.email}
                </p>
                {a.message && <p className="mt-2 text-sm text-white/50">{a.message}</p>}
                <p className="mt-2 text-xs text-white/30">
                  {new Date(a.createdAt).toLocaleString('ko-KR')}
                </p>
              </div>
              <button
                onClick={async () => {
                  await api.applications.delete(a.id, token);
                  onRefresh();
                }}
                className="text-xs text-red-400"
              >
                삭제
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function WaiversAdmin({
  token,
  waivers,
  onRefresh,
}: {
  token: string;
  waivers: SafetyWaiver[];
  onRefresh: () => void;
}) {
  return (
    <div className="space-y-3">
      {waivers.length === 0 ? (
        <p className="text-white/50">제출된 서약서가 없습니다.</p>
      ) : (
        waivers.map((waiver) => (
          <div key={waiver.id} className="glass-card rounded-xl p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium text-white">{waiver.name}</h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs ${
                      waiver.emailSent
                        ? 'bg-emerald-400/10 text-emerald-300'
                        : 'bg-amber-400/10 text-amber-300'
                    }`}
                  >
                    {waiver.emailSent ? '이메일 전송 완료' : '이메일 미전송'}
                  </span>
                </div>
                <p className="mt-2 text-sm text-cyan-400">
                  {waiver.phone} · 비상연락망 {waiver.emergencyContact}
                </p>
                <p className="mt-2 text-xs text-white/30">
                  {new Date(waiver.createdAt).toLocaleString('ko-KR')}
                </p>
                {waiver.emailError && (
                  <p className="mt-2 text-sm text-red-300">{waiver.emailError}</p>
                )}
                <div className="mt-4 max-w-sm rounded-xl bg-white p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={waiver.signatureDataUrl}
                    alt={`${waiver.name} 서명`}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <button
                onClick={async () => {
                  await api.waivers.delete(waiver.id, token);
                  onRefresh();
                }}
                className="self-start text-xs text-red-400"
              >
                삭제
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
