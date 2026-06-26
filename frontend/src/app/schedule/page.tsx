'use client';

import { useEffect, useState, useMemo } from 'react';
import { api } from '@/lib/api';
import { ReadableText } from '@/components/ui/ReadableText';
import type { Schedule } from '@/lib/types';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [current, setCurrent] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const monthKey = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}`;

  useEffect(() => {
    api.schedules
      .list(monthKey)
      .then(setSchedules)
      .catch(() => setSchedules([]))
      .finally(() => setLoading(false));
  }, [monthKey]);

  const calendarDays = useMemo(() => {
    const year = current.getFullYear();
    const month = current.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [current]);

  const schedulesByDay = useMemo(() => {
    const map: Record<number, Schedule[]> = {};
    schedules.forEach((s) => {
      const d = new Date(s.date).getDate();
      if (!map[d]) map[d] = [];
      map[d].push(s);
    });
    return map;
  }, [schedules]);

  const prevMonth = () => {
    setLoading(true);
    setCurrent(new Date(current.getFullYear(), current.getMonth() - 1));
  };
  const nextMonth = () => {
    setLoading(true);
    setCurrent(new Date(current.getFullYear(), current.getMonth() + 1));
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">Schedule</p>
      <h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-gray-900 md:text-6xl">
        교육 일정
      </h1>
      <ReadableText
        text="월별 교육 일정을 확인할 수 있습니다."
        className="mt-6 max-w-2xl"
        sentenceClassName="text-[15px] leading-8 text-gray-600 md:text-lg md:leading-9"
      />

      <div className="content-card mt-14 rounded-[2rem] p-6 md:p-9">
        <div className="mb-8 flex items-center justify-between">
          <button onClick={prevMonth} className="rounded-full bg-sky-50 px-4 py-2 text-gray-600 transition hover:text-sky-700">
            ←
          </button>
          <h2 className="text-lg font-semibold tracking-[-0.03em] text-gray-900">
            {current.getFullYear()}년 {current.getMonth() + 1}월
          </h2>
          <button onClick={nextMonth} className="rounded-full bg-sky-50 px-4 py-2 text-gray-600 transition hover:text-sky-700">
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-400">
          {WEEKDAYS.map((d) => (
            <div key={d} className="py-3">
              {d}
            </div>
          ))}
        </div>

        {loading ? (
          <p className="py-12 text-center text-gray-400">불러오는 중...</p>
        ) : (
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, i) => (
              <div
                key={i}
                className={`min-h-[88px] rounded-[1.25rem] p-2 ${
                  day ? 'bg-white/[0.07] shadow-sm ring-1 ring-white/10' : ''
                }`}
              >
                {day && (
                  <>
                    <span className="text-xs font-medium text-gray-500">{day}</span>
                    {schedulesByDay[day]?.map((s) => (
                      <div
                        key={s.id}
                        className="mt-2 truncate rounded-full bg-sky-50 px-2 py-1 text-[10px] font-medium text-sky-700"
                        title={s.title}
                      >
                        {s.title}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 space-y-4">
        <h3 className="text-sm font-semibold text-gray-700">이번 달 일정</h3>
        {schedules.length === 0 ? (
          <p className="text-sm text-gray-400">등록된 일정이 없습니다.</p>
        ) : (
          schedules.map((s) => (
            <div key={s.id} className="content-card rounded-[1.5rem] px-6 py-5">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-sky-700">
                  {new Date(s.date).toLocaleDateString('ko-KR')}
                </span>
                <span className="font-medium text-gray-900">{s.title}</span>
              </div>
              {s.description && (
                <ReadableText
                  text={s.description}
                  className="mt-3"
                  gap="sm"
                  sentenceClassName="text-sm leading-7 text-gray-600"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
