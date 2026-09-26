'use client';

import { useEffect, useRef, useState, type FormEvent, type PointerEvent } from 'react';
import { api } from '@/lib/api';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function SafetyWaiverForm() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    emergencyContact: '',
    agreed: false,
  });
  const [hasSignature, setHasSignature] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const scale = window.devicePixelRatio || 1;
      canvas.width = rect.width * scale;
      canvas.height = rect.height * scale;

      const context = canvas.getContext('2d');
      if (!context) return;

      context.scale(scale, scale);
      context.lineWidth = 2.4;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = '#1A1A1A';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const getPoint = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const point = getPoint(event);
    const context = canvas?.getContext('2d');
    if (!canvas || !point || !context) return;

    drawingRef.current = true;
    canvas.setPointerCapture(event.pointerId);
    context.beginPath();
    context.moveTo(point.x, point.y);
  };

  const draw = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;

    const point = getPoint(event);
    const context = canvasRef.current?.getContext('2d');
    if (!point || !context) return;

    context.lineTo(point.x, point.y);
    context.stroke();
    setHasSignature(true);
  };

  const stopDrawing = () => {
    drawingRef.current = false;
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hasSignature) {
      setStatus('error');
      setMessage('서명을 입력해 주세요.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const signatureDataUrl = canvasRef.current?.toDataURL('image/png');
      if (!signatureDataUrl) throw new Error('서명을 읽을 수 없습니다.');

      const result = await api.waivers.create({
        ...form,
        signatureDataUrl,
      });

      setStatus('success');
      setMessage(
        result.emailSent
          ? '서약서가 제출되고 이메일로 전송되었습니다.'
          : '서약서는 저장되었습니다. 이메일 전송 설정은 관리자에게 확인해 주세요.',
      );
      setForm({ name: '', phone: '', emergencyContact: '', agreed: false });
      clearSignature();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : '서약서 제출에 실패했습니다.');
    }
  };

  return (
    <form onSubmit={submit} className="content-card rounded-[1.75rem] p-5 md:p-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5F7C8A]">
          Safety Waiver
        </p>
        <h2 className="mt-2 break-keep text-pretty text-2xl font-semibold tracking-[-0.04em] text-gray-900 [word-break:keep-all]">
          안전 교육 서약서
        </h2>
        <p className="mt-3 break-keep text-pretty text-sm leading-7 text-gray-600 [word-break:keep-all]">
          안전 안내를 확인한 뒤 이름, 연락처, 비상연락망과 서명을 남겨 주세요.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <label className="block text-sm font-semibold text-gray-900">
          이름
          <input
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            required
            className="mt-2 w-full rounded-2xl border border-[#5F7C8A]/15 bg-white px-4 py-3 text-base font-normal text-gray-900 outline-none transition focus:border-[#5F7C8A] focus:ring-4 focus:ring-[#5F7C8A]/10"
            placeholder="홍길동"
          />
        </label>
        <label className="block text-sm font-semibold text-gray-900">
          휴대폰 번호
          <input
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            required
            className="mt-2 w-full rounded-2xl border border-[#5F7C8A]/15 bg-white px-4 py-3 text-base font-normal text-gray-900 outline-none transition focus:border-[#5F7C8A] focus:ring-4 focus:ring-[#5F7C8A]/10"
            placeholder="010-0000-0000"
          />
        </label>
        <label className="block text-sm font-semibold text-gray-900">
          비상연락망
          <input
            value={form.emergencyContact}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, emergencyContact: event.target.value }))
            }
            required
            className="mt-2 w-full rounded-2xl border border-[#5F7C8A]/15 bg-white px-4 py-3 text-base font-normal text-gray-900 outline-none transition focus:border-[#5F7C8A] focus:ring-4 focus:ring-[#5F7C8A]/10"
            placeholder="보호자 연락처"
          />
        </label>
      </div>

      <label className="mt-5 flex gap-3 rounded-2xl bg-[#FAFAF8] p-4 text-sm leading-7 text-gray-700 ring-1 ring-[#5F7C8A]/10">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={(event) => setForm((prev) => ({ ...prev, agreed: event.target.checked }))}
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#5F7C8A]"
        />
        <span>
          수업 전 안전 안내와 개인 컨디션 관련 주의사항을 읽었으며, 안전한 교육 진행을
          위해 강사의 안내를 따르겠습니다.
        </span>
      </label>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-gray-900">서명</p>
          <button
            type="button"
            onClick={clearSignature}
            className="text-sm font-semibold text-[#5F7C8A]"
          >
            지우기
          </button>
        </div>
        <canvas
          ref={canvasRef}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerCancel={stopDrawing}
          className="mt-2 h-40 w-full touch-none rounded-2xl bg-white ring-1 ring-[#5F7C8A]/15"
          aria-label="서명 입력 영역"
        />
      </div>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === 'success' ? 'text-[#4f6e7c]' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full rounded-full bg-[#5F7C8A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4f6e7c] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? '제출 중...' : '서약서 제출'}
      </button>
    </form>
  );
}
