'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import type { Course } from '@/lib/types';

export default function ApplyPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    api.courses.list().then(setCourses).catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await api.applications.create(form);
      setStatus('success');
      setForm({ name: '', phone: '', email: '', course: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : '신청에 실패했습니다.');
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Apply</p>
      <h1 className="mt-2 text-3xl font-light text-white">교육신청</h1>
      <p className="mt-4 text-white/60">
        아래 양식을 작성해 주시면 24시간 내 연락드립니다.
      </p>

      {status === 'success' && (
        <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-300">
          신청이 완료되었습니다. 감사합니다!
        </div>
      )}

      {status === 'error' && (
        <div className="mt-6 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <Field label="이름" required>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input-field"
          />
        </Field>
        <Field label="연락처" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="input-field"
          />
        </Field>
        <Field label="이메일" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input-field"
          />
        </Field>
        <Field label="희망 과정" required>
          <select
            required
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="input-field"
          >
            <option value="">과정을 선택하세요</option>
            {courses.map((c) => (
              <option key={c.id} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="문의 내용">
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input-field resize-none"
          />
        </Field>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-full bg-cyan-500 py-3 text-sm font-medium text-ocean-950 transition hover:bg-cyan-400 disabled:opacity-50"
        >
          {status === 'loading' ? '제출 중...' : '신청하기'}
        </button>
      </form>

      <style jsx global>{`
        .input-field {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1rem;
          color: white;
          outline: none;
        }
        .input-field:focus {
          border-color: rgba(34, 211, 238, 0.5);
        }
        .input-field option {
          background: #0f172a;
          color: white;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/70">
        {label}
        {required && <span className="text-cyan-400"> *</span>}
      </label>
      {children}
    </div>
  );
}
