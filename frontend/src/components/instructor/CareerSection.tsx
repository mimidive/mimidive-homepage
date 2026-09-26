import { CompetitionHistory } from '@/components/instructor/CompetitionHistory';
import { careerMilestones, competitionHistory } from '@/lib/content';

export function CareerSection() {
  return (
    <div className="mt-14 space-y-12 md:space-y-14">
      <div className="mx-auto max-w-3xl border-l border-[#5F7C8A]/20 pl-5 md:pl-8">
        <div className="space-y-6 md:space-y-8">
          {careerMilestones.map((item) => (
            <article key={`${item.label}-${item.title}`} className="relative">
              <span
                className="absolute -left-[1.4rem] top-2 h-2.5 w-2.5 rounded-full bg-[#5F7C8A] md:-left-[2.15rem]"
                aria-hidden
              />
              <div className="grid gap-2 sm:grid-cols-[minmax(5.5rem,8.5rem)_1fr] sm:items-baseline sm:gap-6">
                <p className="text-2xl font-bold leading-none tracking-[-0.04em] text-[#5F7C8A] md:text-3xl">
                  {item.label}
                </p>
                <h3 className="break-keep text-pretty text-lg font-bold leading-8 tracking-[-0.035em] text-zinc-900 [word-break:keep-all] md:text-xl">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
            Career Detail
          </p>
          <h3 className="mt-3 break-keep text-pretty font-serif text-[clamp(1.75rem,4.5vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.06em] text-zinc-900 [word-break:keep-all] md:leading-[1.02]">
            대회 경력
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#6B7280] md:text-base md:leading-8">
            2017년 첫 국제대회부터 최근 대회까지, 연도별 활동 이력입니다.
          </p>
        </div>
        <div className="mt-8">
          <CompetitionHistory
            years={competitionHistory}
            collapsible={false}
            layout="overview"
          />
        </div>
      </div>
    </div>
  );
}
