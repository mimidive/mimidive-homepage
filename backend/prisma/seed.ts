import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const courses = [
  {
    category: 'intro',
    title: '체험다이빙',
    slug: 'intro-dive',
    description:
      '프리다이빙의 첫 경험. 수중에서의 호흡과 이완을 배우며, 안전한 환경에서 바다의 깊이를 느껴보는 입문 프로그램입니다.',
  },
  {
    category: 'level',
    title: 'AIDA 1',
    slug: 'aida1',
    level: 'AIDA 1',
    description:
      'AIDA 1 레벨 과정. 이론과 실습을 통해 프리다이빙의 기초 기술과 안전 수칙을 습득합니다.',
  },
  {
    category: 'level',
    title: 'AIDA 2',
    slug: 'aida2',
    level: 'AIDA 2',
    description:
      'AIDA 2 레벨 과정. 정적·동적 어폰nea와 수심 다이빙 기술을 체계적으로 학습합니다.',
  },
  {
    category: 'level',
    title: 'AIDA 3',
    slug: 'aida3',
    level: 'AIDA 3',
    description:
      'AIDA 3 레벨 과정. 중급 다이버를 위한 고급 기술과 안전 관리 능력을 키웁니다.',
  },
  {
    category: 'level',
    title: 'AIDA 4',
    slug: 'aida4',
    level: 'AIDA 4',
    description:
      'AIDA 4 레벨 과정. 마스터 레벨에 가까운 기술과 훈련 방법론을 습득합니다.',
  },
  {
    category: 'level',
    title: '강사 과정',
    slug: 'instructor',
    level: 'Instructor',
    description:
      'AIDA 강사 자격 과정. 교육 방법론, 안전 관리, 실습 지도 능력을 갖춘 강사를 양성합니다.',
  },
  {
    category: 'training',
    title: '수심 트레이닝',
    slug: 'depth',
    description:
      '수심 다이빙 집중 트레이닝. EQ 기법, 바디 포지션, 프리폴 등 수심 기록 향상을 위한 맞춤 훈련.',
  },
  {
    category: 'training',
    title: '인도어 트레이닝',
    slug: 'indoor',
    description:
      '실내 풀에서 진행하는 기술 트레이닝. CO2 테이블, O2 테이블, 정적·동적 어폰nea 집중 훈련.',
  },
  {
    category: 'training',
    title: '노핀 코스',
    slug: 'nofin',
    description:
      '노핀(무핀) 다이빙 전문 코스. 핀 없이 수중을 움직이는 기술과 바디 컨트롤을 마스터합니다.',
  },
  {
    category: 'fun',
    title: '펀다이빙',
    slug: 'fun',
    description:
      '기록에 집착하지 않고 바다를 즐기는 펀다이빙 세션. 아름다운 수중 풍경과 함께하는 여유로운 다이빙.',
  },
  {
    category: 'online',
    title: '온라인 코칭',
    slug: 'online-coaching',
    description:
      '1:1 온라인 코칭 프로그램. 호흡 훈련, 멘탈 트레이닝, 컨디셔닝 등 맞춤형 원격 지도.',
  },
];

async function main() {
  const hashedPassword = await bcrypt.hash('admin123456', 10);

  await prisma.user.upsert({
    where: { email: 'admin@freediving.com' },
    update: {},
    create: {
      email: 'admin@freediving.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  for (const course of courses) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      update: course,
      create: course,
    });
  }

  const noticeCount = await prisma.notice.count();
  if (noticeCount === 0) {
    await prisma.notice.createMany({
      data: [
        {
          title: '2026년 봄 시즌 교육 일정 안내',
          content:
            '따뜻한 봄 바다와 함께하는 프리다이빙 시즌이 시작됩니다.\n\nAIDA 1~4 레벨 과정 및 체험다이빙 모집 중입니다. 교육일정 페이지에서 자세한 일정을 확인하시고, 교육신청 페이지를 통해 신청해 주세요.',
        },
        {
          title: '신규 강사 과정 개설 안내',
          content:
            'AIDA 강사 과정이 7월에 개설됩니다. AIDA 4 자격 보유자 대상이며, 선착순 8명 모집입니다.',
        },
      ],
    });
  }

  const scheduleCount = await prisma.schedule.count();
  if (scheduleCount === 0) {
    const now = new Date();
    await prisma.schedule.createMany({
      data: [
        {
          title: 'AIDA 2 레벨 과정',
          date: new Date(now.getFullYear(), now.getMonth(), 15, 9, 0),
          description: '2일 과정 | 제주 서귀포',
        },
        {
          title: '체험다이빙',
          date: new Date(now.getFullYear(), now.getMonth(), 22, 10, 0),
          description: '반일 과정 | 제주 협재',
        },
        {
          title: '수심 트레이닝',
          date: new Date(now.getFullYear(), now.getMonth() + 1, 5, 8, 0),
          description: '1일 집중 | 제주 문섬',
        },
      ],
    });
  }

  console.log('Seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
