'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/admin/context/AdminContext';
import { ShieldCheck, Lock, ArrowRight, AlertCircle, KeyRound } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('plot4tuty2026');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAdmin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await login(password);
    if (res.success) {
      router.push('/admin/dashboard');
    } else {
      setError(res.error || 'Invalid administrator password.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07130D] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-block relative h-16 w-16 rounded-full overflow-hidden bg-white border-2 border-emerald-500 shadow-xl mb-4">
          <Image src="/logo-round.png" alt="PLOT 4 TUTY" fill className="object-cover" />
        </div>
        <div className="flex items-center justify-center space-x-1.5 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Restricted Admin Portal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          PLOT FOR THOOTHUKUDI
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          Sign in to access platform moderation, seller verifications, and financial audits
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#0F291E] border border-emerald-800/60 py-8 px-6 shadow-2xl rounded-2xl sm:px-10">
          {error && (
            <div className="mb-4 p-3 bg-red-950/80 border border-red-700 text-red-200 text-xs rounded-xl flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2">
                Master Administrator Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator password"
                  className="w-full px-4 py-3 rounded-xl bg-[#081710] border border-emerald-700/60 text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-800/40 text-[11px] text-emerald-300">
              <span className="font-bold">Authorized Default Credentials:</span>
              <div className="mt-0.5 text-emerald-200/80">Use <code>plot4tuty2026</code> or <code>admin123</code></div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-gray-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-emerald-400/20 disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{loading ? 'Verifying Access...' : 'Authenticate & Enter Admin Portal'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
