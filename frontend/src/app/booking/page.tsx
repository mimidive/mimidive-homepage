'use client';

import { useEffect, useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ReadableText } from '@/components/ui/ReadableText';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { faqs, policies, processSteps, programOptions } from '@/lib/content';
import { api } from '@/lib/api';
import type { Course } from '@/lib/types';

const KAKAO_CHAT_URL = process.env.NEXT_PUBLIC_KAKAO_CHAT_URL;
const isKakaoExternal = KAKAO_CHAT_URL?.startsWith('http');

export default function BookingPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    course: '',
    preferredDate: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    api.courses.list().then(setCourses).catch(() => {});
  }, []);

  const courseOptions =
    courses.length > 0 ? courses.map((c) => c.title) : [...programOptions];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const payload = {
      name: form.name,
      phone: form.phone,
      email: 'booking@mimidive.com',
      course: form.course,
      message: [
        form.preferredDate ? `희망 날짜: ${form.preferredDate}` : null,
        form.message || null,
      ]
        .filter(Boolean)
        .join('\n'),
    };

    try {
      await api.applications.create(payload);
      setStatus('success');
      setForm({ name: '', phone: '', course: '', preferredDate: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : '신청에 실패했습니다.');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="FAQ & Booking"
        title="교육 문의"
        description="수영 실력, 물 공포 여부, 희망 일정, 목표 과정을 남겨 주세요."
        ctas={[
          { label: '문의 작성', href: '#booking-form' },
          { label: 'FAQ 확인', href: '#faq', variant: 'secondary' },
        ]}
        compact
      />

      <section className="section-bridge bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="진행 절차"
            description="상담, 사전 안내, 교육, 피드백, 사후 안내 순서."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="content-card rounded-[1.75rem] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-gray-900">{step.title}</h3>
                <ReadableText
                  text={step.body}
                  className="mt-4"
                  gap="sm"
                  sentenceClassName="text-sm leading-7 text-gray-600"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="FAQ"
            description="교육 전 자주 묻는 질문입니다."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="content-card group rounded-[1.75rem]">
                <summary className="cursor-pointer list-none p-6 font-medium leading-7 text-gray-900 md:p-8">
                  <span className="flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-sky-700 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1 md:px-8 md:pb-8">
                  <ReadableText
                    text={faq.answer}
                    gap="sm"
                    sentenceClassName="text-sm leading-7 text-gray-600 md:text-base md:leading-8"
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-zinc-900 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 md:grid-cols-4">
            {policies.map((policy) => (
              <div key={policy} className="rounded-[1.5rem] bg-white/40 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] ring-1 ring-white/60 backdrop-blur-xl">
                <ReadableText
                  text={policy}
                  gap="sm"
                  sentenceClassName="text-sm leading-7 text-zinc-600"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking-form" className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <SectionTitle
            title="문의 작성"
            description="현재 상태와 희망 과정 입력. 확인 후 연락."
            align="center"
          />

          {status === 'success' && (
            <div className="mt-8 rounded-[1.25rem] bg-sky-50 px-5 py-4 text-sm leading-6 text-navy-700 shadow-sm">
              문의 접수 완료. 24시간 이내 연락.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-8 rounded-[1.25rem] bg-white/10 px-5 py-4 text-sm leading-6 text-gray-700 shadow-sm ring-1 ring-white/10">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="content-card mt-12 rounded-[2rem] p-7 md:p-10">
            <div className="space-y-7">
              <Field label="이름" required>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-field"
                  placeholder="홍길동"
                />
              </Field>
              <Field label="연락처" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input-field"
                  placeholder="010-0000-0000"
                />
              </Field>
              <Field label="희망 프로그램" required>
                <select
                  required
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="input-field"
                >
                  <option value="">프로그램을 선택하세요</option>
                  {courseOptions.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="희망 날짜">
                <input
                  type="date"
                  value={form.preferredDate}
                  onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                  className="input-field"
                />
              </Field>
              <Field label="문의사항">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="수영 실력, 물 공포 여부, 동반 인원, 목표 수심, 기타 문의사항을 자유롭게 적어주세요."
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="cta-button mt-8 w-full rounded-full py-4 text-sm font-semibold transition disabled:opacity-50"
            >
              {status === 'loading' ? '전송 중...' : '교육 문의'}
            </button>
          </form>

          <div className="mt-8 text-center">
            {isKakaoExternal ? (
              <a
                href={KAKAO_CHAT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/40 px-6 py-3 text-sm font-semibold text-zinc-800 shadow-sm ring-1 ring-white/60 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.018] hover:bg-white/70"
              >
                  카카오톡 문의
              </a>
            ) : (
              <p className="text-sm text-gray-600">
                빠른 문의는 화면 우측 하단{' '}
                <span className="font-semibold text-zinc-800">카카오톡 상담</span> 버튼을
                이용해 주세요.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
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
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-navy-600"> *</span>}
      </label>
      {children}
    </div>
  );
}
