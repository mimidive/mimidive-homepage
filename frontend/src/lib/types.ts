export interface User {
  id: number;
  email: string;
  role: string;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: number;
  category: string;
  title: string;
  description: string;
  level: string | null;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface Schedule {
  id: number;
  title: string;
  date: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: number;
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string | null;
  createdAt: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
