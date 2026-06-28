const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

type RequestOptions = {
  method?: string;
  body?: unknown;
  token?: string | null;
};

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, token } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: '요청 실패' }));
    throw new Error(error.message || `HTTP ${res.status}`);
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return res.json();
}

export const api = {
  auth: {
    login: (email: string, password: string) =>
      request<{ accessToken: string; user: { id: number; email: string; role: string } }>(
        '/auth/login',
        { method: 'POST', body: { email, password } },
      ),
  },
  notices: {
    list: () => request<import('./types').Notice[]>('/notices'),
    get: (id: number) => request<import('./types').Notice>(`/notices/${id}`),
    create: (data: { title: string; content: string }, token: string) =>
      request<import('./types').Notice>('/notices', { method: 'POST', body: data, token }),
    update: (id: number, data: { title: string; content: string }, token: string) =>
      request<import('./types').Notice>(`/notices/${id}`, { method: 'PUT', body: data, token }),
    delete: (id: number, token: string) =>
      request<void>(`/notices/${id}`, { method: 'DELETE', token }),
  },
  courses: {
    list: (category?: string) =>
      request<import('./types').Course[]>(
        category ? `/courses?category=${category}` : '/courses',
      ),
    getBySlug: (slug: string) =>
      request<import('./types').Course>(`/courses/slug/${slug}`),
  },
  schedules: {
    list: (month?: string) =>
      request<import('./types').Schedule[]>(
        month ? `/schedules?month=${month}` : '/schedules',
      ),
    create: (
      data: { title: string; date: string; description?: string },
      token: string,
    ) => request<import('./types').Schedule>('/schedules', { method: 'POST', body: data, token }),
    update: (
      id: number,
      data: { title: string; date: string; description?: string },
      token: string,
    ) =>
      request<import('./types').Schedule>(`/schedules/${id}`, {
        method: 'PUT',
        body: data,
        token,
      }),
    delete: (id: number, token: string) =>
      request<void>(`/schedules/${id}`, { method: 'DELETE', token }),
  },
  applications: {
    list: (token: string) =>
      request<import('./types').Application[]>('/applications', { token }),
    delete: (id: number, token: string) =>
      request<void>(`/applications/${id}`, { method: 'DELETE', token }),
  },
};
