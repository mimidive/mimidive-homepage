# Deep Blue Freediving

프리다이빙 교육 브랜드 풀스택 웹사이트 (Next.js + NestJS + MySQL)

## 기술 스택

| 영역 | 기술 |
|------|------|
| Frontend | Next.js 16 (App Router), TypeScript, Tailwind CSS, Zustand |
| Backend | NestJS, JWT 인증, Prisma ORM |
| Database | MySQL 8 |

## 프로젝트 구조

```
freediving-academy/
├── frontend/          # Next.js 프론트엔드
├── backend/           # NestJS REST API
├── docker-compose.yml # MySQL 컨테이너
└── .env.example
```

## 시작하기

### 1. MySQL 실행

```bash
docker compose up -d
```

### 2. Backend 설정

```bash
cd backend
cp ../.env.example .env   # 또는 backend/.env 사용
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run start:dev
```

API: http://localhost:4000/api

### 3. Frontend 실행

```bash
cd frontend
npm run dev
```

사이트: http://localhost:3000

## 관리자 계정

- **이메일:** admin@freediving.com
- **비밀번호:** admin123456
- **관리 페이지:** http://localhost:3000/admin

## API 엔드포인트

| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| POST | /api/auth/login | 로그인 | Public |
| GET | /api/notices | 공지 목록 | Public |
| GET | /api/notices/:id | 공지 상세 | Public |
| POST/PUT/DELETE | /api/notices | 공지 CRUD | Admin |
| GET | /api/courses | 과정 목록 | Public |
| GET | /api/courses/slug/:slug | 과정 상세 | Public |
| GET | /api/schedules | 일정 목록 | Public |
| POST/PUT/DELETE | /api/schedules | 일정 CRUD | Admin |
| POST | /api/applications | 교육 신청 | Public |
| GET/DELETE | /api/applications | 신청 조회/삭제 | Admin |

## 주요 페이지

- `/` — 메인 (스크롤 스토리텔링)
- `/notice` — 공지사항
- `/instructor/*` — 강사소개
- `/courses/*` — 수업안내 (DB 연동)
- `/schedule` — 교육일정 캘린더
- `/apply` — 교육신청 폼
- `/admin` — 관리자 (JWT)
