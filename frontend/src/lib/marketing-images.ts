const marketingBase = '/marketing' as const;

export const marketingImages = {
  heroSharkDive: `${marketingBase}/hero-shark-dive.svg`,
  instructorCompetition: `${marketingBase}/instructor-competition.svg`,
  programTraining: `${marketingBase}/program-training.svg`,
  programIntro: `${marketingBase}/program-intro.svg`,
  momentTrainee: `${marketingBase}/moment-trainee.svg`,
  programLevel: `${marketingBase}/program-level.svg`,
  momentLevel: `${marketingBase}/moment-level.svg`,
  programNofin: `${marketingBase}/program-nofin.svg`,
  programFun: `${marketingBase}/program-fun.svg`,
  momentFun: `${marketingBase}/moment-fun.svg`,
  programOnline: `${marketingBase}/program-online.svg`,
  gettingStartedFeatured: `${marketingBase}/getting-started-featured.svg`,
  gettingStartedExperience: `${marketingBase}/getting-started-experience.svg`,
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
