const marketingBase = '/marketing' as const;

export const marketingImages = {
  heroSharkDive: '/hero-shark-dive.png',
  instructorPortrait: '/instructor-portrait.png',
  instructorRecord: '/instructor-record.png',
  instructorCareerCompetition: '/instructor-career-competition.png',
  instructorEducationTraining: '/instructor-education-training.png',
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
  homeReviewExperience: '/home-review-experience.jpg',
  programsCertHero: '/programs-cert-hero-v2.png',
  programsAdvancedHero: '/programs-advanced-hero.png',
  programsExperienceHero: '/programs-experience-hero-v3.png',
  programsSpecialHero: '/programs-special-hero-v2.png',
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
  instructorCareerCompetition: '김혜미 강사 프리다이빙 국제 대회 경기 장면',
  instructorEducationTraining: '제주 바다 프리다이빙 수심 교육·강사 지도 장면',
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
  homeReviewExperience: '미미다이브 프리다이빙 수강생 교육 후기',
  programsCertHero: 'AIDA 자격증 프리다이빙 수심 트레이닝',
  programsAdvancedHero: '인도어 수심 프리다이빙 트레이닝',
  programsExperienceHero: '제주 바다 체험·펀다이빙 수강 세션',
  programsSpecialHero: '제주 프리다이빙 스페셜 프로그램 수영장 교육',
} as const;

export const programSectionHero = {
  'programs-cert': {
    gallery: [
      {
        image: '/programs-cert-hero-1-v2.png',
        alt: '미미다이브 프리다이빙 교육 팀 활동',
        objectPosition: 'center 30%',
      },
      {
        image: '/programs-cert-hero-2.png',
        alt: '제주 항구 프리다이빙 장비·교육 준비',
        objectPosition: 'center 30%',
      },
      {
        image: '/programs-cert-hero-3.png',
        alt: '제주 바다 AIDA 자격증 프리다이빙 교육',
        objectPosition: 'center center',
      },
    ],
  },
  'programs-advanced': {
    gallery: [
      {
        image: '/programs-advanced-hero-1.png',
        alt: '2025 코리아컵 전국 프리다이빙 선수권대회',
        objectPosition: 'center 30%',
      },
      {
        image: '/programs-advanced-hero-2.png',
        alt: '제주 숨 페스티벌 프리다이빙 행사',
        objectPosition: 'center 35%',
      },
      {
        image: '/programs-advanced-hero-3.png',
        alt: '2025 제주 인도어 프리다이빙 대회',
        objectPosition: 'center center',
      },
    ],
  },
  'programs-experience': {
    gallery: [
      {
        image: '/programs-experience-hero-1-v4.png',
        alt: '제주 바다 프리다이빙·펀다이빙 체험',
        objectPosition: 'center 35%',
      },
      {
        image: '/programs-experience-hero-2-v4.png',
        alt: '제주 바다 펀다이빙·해양 체험',
        objectPosition: 'center center',
      },
    ],
  },
  'programs-special': {
    image: marketingImages.programsSpecialHero,
    alt: imageAlt.programsSpecialHero,
    objectPosition: 'center 40%',
  },
} as const;
