'use client';

import { useEffect, useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
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
        title="예약 전 불안을 먼저 해결해 드립니다"
        description="수영 실력, 물 공포, 일정, 날씨, 환불 규정까지. 궁금한 점을 남기면 24시간 이내에 가장 적합한 과정을 안내합니다."
        ctas={[
          { label: '예약 양식 작성하기', href: '#booking-form' },
          { label: 'FAQ 먼저 보기', href: '#faq', variant: 'secondary' },
        ]}
        compact
      />

      <section className="section-bridge bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="상담부터 사후 케어까지 이렇게 진행됩니다"
            description="처음 오시는 분도 다음 단계가 명확하도록 모든 과정을 짧고 선명하게 안내합니다."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="content-card rounded-2xl p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="자주 묻는 질문"
            description="결정 전 가장 많이 망설이는 부분을 먼저 정리했습니다."
          />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="content-card group rounded-2xl">
                <summary className="cursor-pointer list-none p-6 font-medium text-gray-900 md:p-8">
                  <span className="flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-coral-600 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="border-t border-gray-100 px-6 pb-6 pt-4 md:px-8 md:pb-8">
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {policies.map((policy) => (
              <div key={policy} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm leading-relaxed text-white/74">{policy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking-form" className="border-t border-gray-200 bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <SectionTitle
            title="무료 상담 및 예약 신청"
            description="지금 바로 결제하지 않아도 괜찮습니다. 먼저 현재 상태와 목표를 알려주시면 가장 안전한 시작점을 제안해 드립니다."
            align="center"
          />

          {status === 'success' && (
            <div className="mt-8 rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-sm text-navy-700">
              예약 신청이 완료되었습니다. 24시간 이내에 연락드리겠습니다.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="content-card mt-10 rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
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
              className="cta-button mt-8 w-full rounded-full py-4 text-sm font-semibold text-white transition disabled:opacity-50"
            >
              {status === 'loading' ? '제출 중...' : '무료 상담 신청하기'}
            </button>
          </form>

          <div className="mt-8 text-center">
            {isKakaoExternal ? (
              <a
                href={KAKAO_CHAT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-6 py-3 text-sm font-semibold text-[#191919] transition hover:bg-[#f6dc00]"
              >
                  예약 전, 국가대표 트레이너와 실시간 1:1 카카오톡 무료 상담하기
              </a>
            ) : (
              <p className="text-sm text-gray-600">
                급하신 경우 화면 우측 하단{' '}
                <span className="font-semibold text-coral-600">카카오톡 상담</span> 버튼을
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
