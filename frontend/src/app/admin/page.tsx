'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { api } from '@/lib/api';

export default function AdminPage() {
  const router = useRouter();
  const { token, isAdmin } = useAuthStore();

  useEffect(() => {
    if (token && isAdmin()) {
      router.replace('/admin/dashboard');
    }
  }, [token, isAdmin, router]);

  return <LoginForm />;
}

function LoginForm() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await api.auth.login(email, password);
      if (res.user.role !== 'ADMIN') {
        setError('관리자 권한이 없습니다.');
        return;
      }
      setAuth(res.accessToken, res.user);
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : '로그인 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="glass-card w-full max-w-md rounded-2xl p-8">
        <h1 className="text-2xl font-light text-white">Admin Login</h1>
        <p className="mt-2 text-sm text-white/50">관리자 계정으로 로그인하세요</p>
        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300">
            {error}
          </p>
        )}
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400/50"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400/50"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-cyan-500 py-3 text-sm font-medium text-ocean-950 hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>
      </div>
    </div>
  );
}
