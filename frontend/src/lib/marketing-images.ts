const marketingBase = '/marketing' as const;

export const marketingImages = {
  heroSharkDive: '/hero-shark-dive.png',
  instructorPortrait: '/instructor-portrait.png',
  instructorRecord: '/instructor-record.png',
  programTraining: '/program-training.png',
  programIntro: `${marketingBase}/program-intro.svg`,
  momentTrainee: `${marketingBase}/moment-review-1.svg`,
  programLevel: `${marketingBase}/program-level.svg`,
  momentLevel: `${marketingBase}/moment-review-2.svg`,
  programNofin: '/program-nofin.png',
  programFun: '/program-fun.png',
  momentFun: `${marketingBase}/moment-review-3.svg`,
  programOnline: `${marketingBase}/program-online.svg`,
  gettingStartedFeatured: '/getting-started-featured.png',
  gettingStartedExperience: '/getting-started-experience.png',
} as const;

export const oceanImages = {
  hero: marketingImages.heroSharkDive,
  instructor: marketingImages.instructorPortrait,
  instructorRecord: marketingImages.instructorRecord,
  breathing: marketingImages.programTraining,
  intro: marketingImages.programIntro,
  trainee: marketingImages.momentTrainee,
  level: marketingImages.programLevel,
  momentLevel: marketingImages.momentLevel,
  nofin: marketingImages.programNofin,
  fun: marketingImages.programFun,
  momentFun: marketingImages.momentFun,
  online: marketingImages.programOnline,
} as const;

export const imageAlt = {
  hero: '제주 바다 프리다이빙 체험 미미다이브',
  instructor: '미미다이브 대표 강사 김혜미 프리다이빙',
  instructorRecord: '김혜미 강사 프리다이빙 대회 경력',
  breathing: '제주 프리다이빙 호흡 트레이닝',
  intro: '제주 프리다이빙 체험다이빙 프로그램',
  trainee: '미미다이브 프리다이빙 수강생 교육 후기',
  level: 'AIDA 프리다이빙 자격증 레벨 교육',
  momentLevel: '프리다이빙 레벨 교육 수강 후기',
  nofin: '제주 노핀 프리다이빙 교육',
  fun: '제주 펀다이빙 세션',
  momentFun: '제주 펀다이빙 수강 후기',
  online: '프리다이빙 온라인 코칭',
  gettingStartedFeatured: '미미다이브 프리다이빙 입문 과정',
  gettingStartedExperience: '제주 체험다이빙 프로그램',
} as const;
