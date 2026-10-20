'use client';

import { useState, useEffect } from 'react';
import { Seller } from '@/lib/types';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Phone,
  Mail,
  Building,
  MapPin,
  Search,
  Star,
  Sparkles,
} from 'lucide-react';

export default function AdminSellersPage() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    try {
      const res = await fetch('/api/sellers');
      const data = await res.json();
      if (data.success) {
        setSellers(data.sellers);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const toggleVerification = async (seller: Seller) => {
    setUpdatingId(seller.id);
    const newStatus = !seller.isVerified;
    try {
      const res = await fetch('/api/sellers', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: seller.id, isVerified: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setSellers((prev) =>
          prev.map((s) => (s.id === seller.id ? { ...s, isVerified: newStatus } : s))
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = sellers.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      (s.companyName && s.companyName.toLowerCase().includes(search.toLowerCase())) ||
      s.phone.includes(search) ||
      (s.locality && s.locality.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Seller &amp; Developer Verification ({sellers.length})
        </h1>
        <p className="text-xs text-gray-500">
          Verify promoter KYC documents, manage subscription tiers, and review seller ratings
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search seller by name, phone, locality..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-500 text-xs">Loading sellers...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((seller) => (
            <div
              key={seller.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white font-black text-lg flex items-center justify-center shrink-0">
                      {seller.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-gray-900">{seller.name}</h3>
                      <p className="text-xs text-gray-500 line-clamp-1">{seller.companyName}</p>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      seller.isVerified
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {seller.isVerified ? 'Verified' : 'Pending KYC'}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-gray-600 bg-[#FAFBF9] p-3 rounded-xl border border-gray-100 mb-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{seller.phone}</span>
                  </div>
                  {seller.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{seller.email}</span>
                    </div>
                  )}
                  {seller.locality && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{seller.locality}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-6 px-1">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Plan Tier</span>
                    <span className="font-bold text-gray-800 capitalize">
                      {seller.subscriptionPlanId || 'Starter'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block">Active Listings</span>
                    <span className="font-bold text-emerald-800">
                      {seller.activeListingsCount || 0} Plots
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <button
                  onClick={() => toggleVerification(seller)}
                  disabled={updatingId === seller.id}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 ${
                    seller.isVerified
                      ? 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                      : 'bg-emerald-700 text-white hover:bg-emerald-800'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    {updatingId === seller.id
                      ? 'Updating...'
                      : seller.isVerified
                      ? 'Revoke KYC Verification'
                      : 'Approve & Mark Verified'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
