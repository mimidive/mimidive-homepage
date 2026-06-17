const content = {
  title: '강사소개',
  sections: [
    {
      heading: '대표 강사',
      body: `Deep Blue Freediving 대표 강사로, AIDA Master Instructor 자격을 보유하고 있습니다.

10년 이상의 프리다이빙 교육 경력을 바탕으로, 입문자부터 강사 과정까지
체계적이고 안전한 교육을 제공합니다.

"바다는 두려움이 아닌, 자신을 발견하는 공간"이라는 믿음으로
수강생 한 분 한 분의 성장을 함께합니다.`,
    },
  ],
};

export default function InstructorIntroPage() {
  return (
    <PageTemplate {...content} />
  );
}

function PageTemplate({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <section
        className="relative flex min-h-[40vh] items-end bg-cover bg-center pb-12 pt-32"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544551763-77ef2d0cfb6b?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        <div className="section-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-light text-white">{title}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {sections.map((s) => (
            <div key={s.heading} className="glass-card mb-8 rounded-2xl p-8 md:p-12">
              <h2 className="text-lg font-medium text-cyan-400">{s.heading}</h2>
              <p className="mt-6 whitespace-pre-line leading-relaxed text-white/80">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export { PageTemplate };
