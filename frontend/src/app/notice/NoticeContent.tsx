'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { ReadableText } from '@/components/ui/ReadableText';
import { SafetyWaiverForm } from '@/components/student/SafetyWaiverForm';

const STUDENT_PASSWORD = '1004';

type CommunityLink = {
  label: string;
  href: string;
  note: string;
  icon: 'kakao' | 'carrot';
};

type NoticeImage = {
  src: string;
  alt: string;
};

type NoticeSection = {
  title: string;
  items: string[];
};

type StudentNotice = {
  id: number;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  links: CommunityLink[];
  images: NoticeImage[];
  sections: NoticeSection[];
};

function CommunityIcon({ type }: { type: 'kakao' | 'carrot' }) {
  if (type === 'kakao') {
    return (
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FEE500] text-[#191919]">
        <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 4C6.9 4 2.8 7.2 2.8 11.2c0 2.5 1.6 4.7 4 6L6 20.3a.6.6 0 0 0 .9.6l3.6-2.1c.5.1 1 .1 1.5.1 5.1 0 9.2-3.2 9.2-7.2S17.1 4 12 4Z" />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 ring-1 ring-orange-200">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9.6 8.8c1.5-1.5 4.5-.9 6.6 1.2s2.7 5.1 1.2 6.6l-2.8 2.8c-1.5 1.5-4.5.9-6.6-1.2s-2.7-5.1-1.2-6.6l2.8-2.8Z"
          fill="#FF6F0F"
        />
        <path
          d="M14 8.6c.2-2.3 1.6-4 4.4-5-.1 2.6-1.1 4.5-3.3 5.9"
          stroke="#22C55E"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3 8.1C10.4 6.2 8.8 5.2 6.6 5c.5 2.1 1.6 3.6 3.5 4.5"
          stroke="#16A34A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 13.2h4.7M11.6 15.5h4" stroke="#FFE4CC" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

const notices: StudentNotice[] = [
  {
    id: 1,
    category: '커뮤니티',
    title: '미미다이브 커뮤니티 공유',
    date: '2026.09.26',
    excerpt: '다이빙 정보를 공유하고, 연습과 모임에 함께 참여할 수 있는 학생전용 커뮤니티 안내입니다.',
    content:
      '다이빙에 대한 정보를 공유하며, 언제든 연습과 모임에 참여할 수 있습니다. 미미다이브 카톡방은 미미다이브 학생전용 톡방으로, 다이빙 전반의 정보를 공유하는 공간입니다. 오픈채팅방 비밀번호는 1004입니다.',
    links: [
      {
        label: '미미다이브 카톡방 입장',
        href: 'https://open.kakao.com/o/gcWmAUsf',
        note: '비밀번호 1004',
        icon: 'kakao',
      },
      {
        label: '당근 모임 보기',
        href: 'https://daangn.com/kr/share/community/ref/invite-group/9iUYKQplXV',
        note: '제주도 프리다이빙 클럽',
        icon: 'carrot',
      },
    ],
    images: [],
    sections: [],
  },
  {
    id: 2,
    category: '컨디션',
    title: '최상의 컨디션으로 수업 받는 방법',
    date: '2026.09.26',
    excerpt: '식사, 음주, 멀미, 컨디션, 이퀄라이징 등 수업 전 흔하게 생기는 이슈를 미리 확인해 주세요.',
    content:
      '즐겁고 안전한 수업을 위해 수업 전 컨디션 관리가 중요합니다. 아래 안내를 꼭 확인하고 준비해 주세요.',
    links: [],
    images: [],
    sections: [
      {
        title: '식사',
        items: [
          '식사는 수업 2시간 전까지 마쳐주시고 충분히 소화 후 입수해주세요.',
          '가볍고 소화 잘 되는 식사를 추천드립니다.',
          '너무 안 먹고 오시면 체력 저하로 힘을 쓰기 어렵고 집중력이 떨어질 수 있습니다.',
          '우유, 요거트, 라떼 등 유제품은 사람에 따라 가래 생성이나 이퀄라이징 저하, 속 불편함을 유발할 수 있습니다.',
          '다이빙 중 목 이물감, 답답함, 메스꺼움으로 이어질 수 있어 예민하신 분들은 수업 전 과한 유제품 섭취를 피하는 것을 추천드립니다.',
        ],
      },
      {
        title: '음주',
        items: [
          '전날 음주는 금지입니다.',
          '음주는 탈수와 산소 소모를 증가시켜 더 빨리 피로해질 수 있으며, 이퀄라이징과 컨디션 유지에도 영향을 줄 수 있습니다.',
          '숙취 상태에서는 압력 적응이 어려워져 두통, 어지러움 등이 발생할 수 있습니다.',
        ],
      },
      {
        title: '멀미',
        items: [
          '프리다이빙은 물 위에서 떠 있는 시간이 많아 바다 상황에 따라 멀미가 발생할 수 있습니다.',
          '특히 이완호흡 중 멀미를 느끼는 경우가 많습니다.',
          '수업 30분 전 멀미약 복용을 권장드립니다.',
          '멀미로 인해 단축된 수업은 보강이 어려우니 멀미약을 꼭 준비해주세요.',
        ],
      },
      {
        title: '컨디션',
        items: [
          '감기, 몸살, 숙취, 수면 부족, 생리통 등 컨디션 난조는 이퀄라이징 실패 및 압력 적응 문제로 이어질 수 있습니다.',
          '컨디션이 좋지 않은 상태에서 무리하게 입수할 경우 어지러움, 두통, 압착(스퀴즈) 등의 위험이 커질 수 있습니다.',
          '개인 컨디션으로 인해 단축된 수업은 보강이 어렵습니다.',
          '수업 시작 2시간 전에는 꼭 미리 연락 주셔서 강사님과 상의해주세요.',
          '시작된 수업은 정상 수업일 수에 포함됩니다.',
        ],
      },
      {
        title: '부비동(사이너스)',
        items: [
          '코막힘, 비염, 축농증, 감기 증상이 있을 경우 압력 평형이 원활하지 않아 통증이 발생할 수 있습니다.',
          '억지로 다이빙을 진행하면 부비동 압착(Sinus Squeeze)으로 인해 심한 통증, 출혈, 두통이 생길 수 있습니다.',
          '귀가 잘 안 풀리거나 얼굴 압박감이 느껴질 경우 참지 말고 즉시 강사님께 말씀해주세요.',
        ],
      },
      {
        title: '귀(이퀄라이징)',
        items: [
          '이퀄라이징은 연습하지 않으면 절대 늘지 않습니다. 하루에 500번 연습 필수.',
          '귀 통증이 있거나 최근 중이염 증상이 있었던 경우 반드시 미리 말씀해주세요.',
          '귀가 잘 안 풀리는 상태에서 무리하게 하강하면 귀 압착(Ear Squeeze) 또는 고막 손상이 발생할 수 있습니다.',
          '통증이 느껴질 경우 절대 참지 말고 즉시 상승 및 강사님께 신호해주세요.',
          '한순간의 욕심으로 다이빙을 못할 수 있습니다.',
        ],
      },
      {
        title: '화장실',
        items: [
          '바다에서는 화장실 이용이 제한적일 수 있으니 출발 전 미리 다녀와주세요.',
          '배 이동 시간 및 입수 중에는 바로 이용이 어려울 수 있습니다.',
        ],
      },
      {
        title: '수면',
        items: [
          '수면 부족은 컨디션 저하와 이퀄라이징 실패의 원인이 될 수 있습니다.',
          '충분한 수면을 취하지 못하면 호흡 이완과 집중력이 떨어져 다이빙 수행 능력에도 영향을 줄 수 있습니다.',
        ],
      },
    ],
  },
  {
    id: 3,
    category: '장소',
    title: '수업 장소 안내',
    date: '2026.09.26',
    excerpt: '문섬, 섶섬, 범섬 수업별 주요 집결 장소 안내입니다.',
    content:
      '미미다이브 수업은 제주 서귀포권을 중심으로 진행됩니다. 문섬 수업은 서귀포항, 섶섬 수업은 보목항, 범섬 수업은 법환포구를 기준으로 안내드립니다. 바다 수업은 날씨, 파도, 시야, 조류에 따라 안전한 포인트로 조정될 수 있습니다. 정확한 집결 장소와 시간은 예약 확정 후 카카오톡으로 안내드립니다.',
    links: [],
    images: [
      {
        src: '/student-guide-seogwipo-port.png',
        alt: '서귀포항 오시는 길 안내',
      },
    ],
    sections: [],
  },
  {
    id: 4,
    category: '준비',
    title: '교육 전 준비사항 안내',
    date: '2026.09.26',
    excerpt: '수영복, 세면도구, 개인 컨디션 관리 등 교육 전 확인사항입니다.',
    content:
      '교육 전날은 과음과 무리한 운동을 피하고 충분히 쉬어 주세요. 수영복, 세면도구, 개인 타월, 편한 여벌 옷을 준비해 주세요. 장비가 없는 경우 사전에 알려 주시면 대여 가능 여부를 안내드립니다. 귀 통증, 감기, 컨디션 저하가 있으면 반드시 수업 전 말씀해 주세요.',
    links: [],
    images: [
      {
        src: '/student-guide-pool.png',
        alt: '프리다이빙 수업 안내 이론 및 수영장 준비사항',
      },
      {
        src: '/student-guide-ocean.png',
        alt: '바다 수업 안내 준비물 및 주의사항',
      },
    ],
    sections: [],
  },
];

export default function NoticePage() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [selectedNoticeId, setSelectedNoticeId] = useState(notices[0].id);

  const selectedNotice =
    notices.find((notice) => notice.id === selectedNoticeId) ?? notices[0];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === STUDENT_PASSWORD) {
      setUnlocked(true);
      setError('');
      return;
    }

    setError('비밀번호가 맞지 않습니다. 다시 입력해 주세요.');
  };

  return (
    <>
      <section className="bg-[#FAFAF8] pb-10 pt-[calc(var(--header-h)+3rem)] md:pb-12 md:pt-[calc(var(--header-h)+4rem)]">
        <div className="page-shell">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5F7C8A]">
            Student Only
          </p>
          <h1 className="mt-5 break-keep text-pretty text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.16] tracking-[-0.04em] text-gray-900 [word-break:keep-all] md:leading-[1.1]">
            미미다이브 수강생 전용
          </h1>
          <p className="mt-5 max-w-2xl break-keep text-pretty text-base leading-8 text-gray-600 [word-break:keep-all] md:text-lg md:leading-9">
            수강생에게 필요한 교육 안내와 공지사항을 확인할 수 있는 공간입니다.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="page-shell">
          {!unlocked ? (
            <form
              onSubmit={handleSubmit}
              className="content-card mx-auto max-w-md rounded-[1.75rem] p-6 md:p-8"
            >
              <label htmlFor="student-password" className="block text-sm font-semibold text-gray-900">
                수강생 전용 비밀번호
              </label>
              <input
                id="student-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-3 w-full rounded-2xl border border-[#5F7C8A]/15 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-[#5F7C8A] focus:ring-4 focus:ring-[#5F7C8A]/10"
                placeholder="비밀번호 입력"
              />
              {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-[#5F7C8A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4f6e7c]"
              >
                입장하기
              </button>
            </form>
          ) : (
            <div className="mx-auto max-w-5xl space-y-8">
              <SafetyWaiverForm />

              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)]">
                <div className="overflow-hidden rounded-[1.5rem] border border-[#5F7C8A]/12 bg-white">
                  {notices.map((notice) => {
                    const isSelected = notice.id === selectedNotice.id;

                    return (
                      <button
                        key={notice.id}
                        type="button"
                        onClick={() => setSelectedNoticeId(notice.id)}
                        className={`block w-full border-b border-[#5F7C8A]/10 px-4 py-4 text-left transition last:border-b-0 ${
                          isSelected ? 'bg-[#5F7C8A]/8' : 'hover:bg-[#5F7C8A]/5'
                        }`}
                      >
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{notice.category}</span>
                          <span aria-hidden="true">·</span>
                          <time>{notice.date}</time>
                        </div>
                        <p className="mt-2 break-keep text-pretty text-sm font-semibold leading-6 text-gray-900 [word-break:keep-all]">
                          {notice.title}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <article className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                  <span>{selectedNotice.category}</span>
                  <span aria-hidden="true">·</span>
                  <time>{selectedNotice.date}</time>
                </div>
                <h2 className="mt-3 break-keep text-pretty text-2xl font-semibold tracking-[-0.035em] text-gray-900 [word-break:keep-all] md:text-3xl">
                  {selectedNotice.title}
                </h2>
                <p className="mt-3 break-keep text-pretty text-sm leading-7 text-gray-500 [word-break:keep-all] md:text-base">
                  {selectedNotice.excerpt}
                </p>
                <ReadableText
                  text={selectedNotice.content}
                  className="mt-6"
                  sentenceClassName="break-keep text-pretty text-base leading-8 text-gray-700 [word-break:keep-all]"
                />
                {selectedNotice.sections.length > 0 ? (
                  <div className="mt-6 space-y-4">
                    {selectedNotice.sections.map((section) => (
                      <section
                        key={section.title}
                        className="rounded-2xl bg-[#FAFAF8] p-4 ring-1 ring-[#5F7C8A]/10"
                      >
                        <h3 className="text-base font-semibold text-[#4f6e7c]">
                          {section.title}
                        </h3>
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="break-keep text-pretty text-sm leading-7 text-gray-700 [word-break:keep-all]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                ) : null}
                {selectedNotice.links.length > 0 ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {selectedNotice.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl bg-[#5F7C8A]/8 px-4 py-3 text-sm font-semibold text-[#4f6e7c] ring-1 ring-[#5F7C8A]/12 transition hover:bg-[#5F7C8A]/12"
                      >
                        <CommunityIcon type={link.icon} />
                        <span className="min-w-0">
                          <span className="block">{link.label}</span>
                          <span className="mt-1 block text-xs font-medium text-gray-500">
                            {link.note}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                ) : null}
                {selectedNotice.images.length > 0 ? (
                  <div className="mx-auto mt-6 max-w-xl space-y-4">
                    {selectedNotice.images.map((image) => (
                      <div
                        key={image.src}
                        className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#5F7C8A]/12"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={768}
                          height={1024}
                          sizes="(max-width: 768px) 100vw, 36rem"
                          className="h-auto w-full"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                </article>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
