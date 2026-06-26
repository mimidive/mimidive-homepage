const marketingBase = '/marketing' as const;

export const marketingImages = {
  heroSharkDive: '/hero-shark-dive.png',
  instructorCompetition: '/instructor-portrait.png',
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
  instructor: marketingImages.instructorCompetition,
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
