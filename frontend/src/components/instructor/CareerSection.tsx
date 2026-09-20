import { CompetitionHistory } from '@/components/instructor/CompetitionHistory';
import { careerMilestones, competitionHistory } from '@/lib/content';

export function CareerSection() {
  return (
    <div className="mt-14 space-y-12 md:space-y-14">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {careerMilestones.map((item) => (
          <article key={`${item.label}-${item.title}`} className="content-card rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold text-zinc-400">{item.label}</p>
            <h3 className="mt-4 text-xl font-bold leading-8 tracking-[-0.035em] text-zinc-900">
              {item.title}
            </h3>
          </article>
        ))}
      </div>

      <div>
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#5F7C8A]">
            Career Detail
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1A1A1A] md:text-3xl">
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
