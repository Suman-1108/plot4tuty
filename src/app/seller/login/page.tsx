'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSeller } from '@/seller/context/SellerContext';
import {
  Briefcase,
  Phone,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building,
  Sparkles,
} from 'lucide-react';

export default function SellerLoginPage() {
  const [identifier, setIdentifier] = useState('muthu@plot4tuty.com');
  const [password, setPassword] = useState('seller123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useSeller();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role: 'seller',
          email: identifier.includes('@') ? identifier : undefined,
          phone: !identifier.includes('@') ? identifier : undefined,
          password,
        }),
      });

      const data = await res.json();
      if (data.success && data.seller) {
        login(data.seller);
        router.push('/seller/dashboard');
      } else {
        setError(data.error || 'Failed to authenticate seller account');
      }
    } catch {
      setError('Unable to connect to authentication service.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemoLogin = (sellerId: string, email: string) => {
    setIdentifier(email);
    setPassword('seller123');
    fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: 'seller', sellerId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.seller) {
          login(data.seller);
          router.push('/seller/dashboard');
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F291E] to-[#14532D] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-block relative h-16 w-16 rounded-full overflow-hidden bg-white border-2 border-emerald-400 shadow-md mb-4">
          <Image src="/logo-round.png" alt="PLOT 4 TUTY" fill className="object-cover" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Seller &amp; Developer Portal
        </h2>
        <p className="mt-1 text-xs text-emerald-200">
          Manage your residential plot listings, buyer leads, and subscriptions in Thoothukudi
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-2xl rounded-2xl sm:px-10 border border-emerald-100">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center space-x-2">
              <span className="font-semibold">{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Email Address or Phone
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="e.g. muthu@plot4tuty.com or 98421 55678"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="text-emerald-700">Demo test password: seller123</span>
              <a href="#" className="text-emerald-700 hover:underline font-semibold">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2 shadow-md shadow-emerald-700/20 disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In to Seller Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Switcher */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2 text-center">
              Or Quick Sign-In as Registered Partner
            </span>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('sel-1', 'muthu@plot4tuty.com')}
                className="text-left p-2.5 rounded-lg border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors text-xs"
              >
                <div className="font-bold text-gray-900">S. Muthuraman (Promoter)</div>
                <div className="text-[11px] text-gray-500">Muthu Promoters &bull; Developer Pro Plan</div>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('sel-2', 'senthil@pearlcityplots.com')}
                className="text-left p-2.5 rounded-lg border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors text-xs"
              >
                <div className="font-bold text-gray-900">K. Senthil Nathan (Broker)</div>
                <div className="text-[11px] text-gray-500">Pearl City Land Holdings &bull; Growth Plan</div>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-600">
            <span>Don&apos;t have a seller account? </span>
            <Link href="/seller/register" className="font-bold text-emerald-700 hover:underline">
              Register as Seller / Landowner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
