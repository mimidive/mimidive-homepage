'use client';

import { useEffect, useState, useMemo } from 'react';
import { api } from '@/lib/api';
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
    <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Schedule</p>
      <h1 className="mt-2 text-3xl font-light text-white">교육일정</h1>

      <div className="mt-12 glass-card rounded-2xl p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <button onClick={prevMonth} className="text-white/60 hover:text-cyan-400">
            ←
          </button>
          <h2 className="text-lg font-medium text-white">
            {current.getFullYear()}년 {current.getMonth() + 1}월
          </h2>
          <button onClick={nextMonth} className="text-white/60 hover:text-cyan-400">
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/50">
          {WEEKDAYS.map((d) => (
            <div key={d} className="py-2">
              {d}
            </div>
          ))}
        </div>

        {loading ? (
          <p className="py-12 text-center text-white/50">불러오는 중...</p>
        ) : (
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, i) => (
              <div
                key={i}
                className={`min-h-[80px] rounded-lg border border-white/5 p-1 ${
                  day ? 'bg-white/5' : ''
                }`}
              >
                {day && (
                  <>
                    <span className="text-xs text-white/60">{day}</span>
                    {schedulesByDay[day]?.map((s) => (
                      <div
                        key={s.id}
                        className="mt-1 truncate rounded bg-cyan-500/20 px-1 py-0.5 text-[10px] text-cyan-300"
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

      <div className="mt-8 space-y-3">
        <h3 className="text-sm font-medium text-white/70">이번 달 일정 목록</h3>
        {schedules.length === 0 ? (
          <p className="text-white/40">등록된 일정이 없습니다.</p>
        ) : (
          schedules.map((s) => (
            <div key={s.id} className="glass-card rounded-xl px-6 py-4">
              <div className="flex items-center gap-4">
                <span className="text-cyan-400">
                  {new Date(s.date).toLocaleDateString('ko-KR')}
                </span>
                <span className="font-medium text-white">{s.title}</span>
              </div>
              {s.description && (
                <p className="mt-2 text-sm text-white/60">{s.description}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
