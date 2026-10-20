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
  Building,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function SellerRegisterPage() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Korampallam, Thoothukudi');
  const [planId, setPlanId] = useState('starter');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useSeller();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role: 'seller',
          action: 'register',
          name,
          companyName,
          email,
          phone,
          locality,
          subscriptionPlanId: planId,
        }),
      });

      const data = await res.json();
      if (data.success && data.seller) {
        login(data.seller);
        router.push('/seller/dashboard');
      } else {
        setError(data.error || 'Failed to create seller profile.');
      }
    } catch {
      setError('Registration service currently unreachable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F291E] to-[#14532D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block relative h-16 w-16 rounded-full overflow-hidden bg-white border-2 border-emerald-400 shadow-md mb-3">
            <Image src="/logo-round.png" alt="PLOT 4 TUTY" fill className="object-cover" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Register as a Verified Seller
          </h1>
          <p className="text-xs text-emerald-200 mt-1">
            Join Thoothukudi&apos;s dedicated residential land marketplace and connect directly with verified buyers
          </p>
        </div>

        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl shadow-2xl border border-emerald-100">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name / Landowner *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. S. Muthuraman"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Company / Agency Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Muthu Promoters or Individual"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98421 55678"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@plot4tuty.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Primary Locality / Corridor
              </label>
              <select
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-emerald-600 outline-none bg-white"
              >
                <option value="Korampallam, Thoothukudi">Korampallam, Thoothukudi</option>
                <option value="Millerpuram, Thoothukudi">Millerpuram, Thoothukudi</option>
                <option value="Palayamkottai Road, Thoothukudi">Palayamkottai Road, Thoothukudi</option>
                <option value="Tharuvaikulam (ECR Corridor)">Tharuvaikulam (ECR Corridor)</option>
                <option value="Harbour Bypass & VOC Port Area">Harbour Bypass &amp; VOC Port Area</option>
                <option value="Ettayapuram Road, Thoothukudi">Ettayapuram Road, Thoothukudi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Initial Listing Plan
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'starter', name: 'Starter', limit: '2 Plots', price: '₹999/mo' },
                  { id: 'growth', name: 'Growth', limit: '10 Plots', price: '₹2,499/mo' },
                  { id: 'developer-pro', name: 'Developer Pro', limit: '50 Plots', price: '₹6,999/mo' },
                ].map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setPlanId(p.id)}
                    className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${
                      planId === p.id
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-600/30'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="font-bold text-xs">{p.name}</div>
                    <div className="text-[10px] text-gray-500">{p.limit}</div>
                    <div className="text-xs font-black text-emerald-700 mt-1">{p.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2 shadow-md disabled:opacity-50"
              >
                <span>{loading ? 'Creating Account...' : 'Complete Seller Registration'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-xs text-gray-600">
            <span>Already have a seller account? </span>
            <Link href="/seller/login" className="font-bold text-emerald-700 hover:underline">
              Sign In here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
