'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plot } from '@/lib/types';
import {
  Home,
  Search,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Trash2,
  Star,
  MapPin,
  ShieldCheck,
  Edit,
  AlertCircle,
  Filter,
} from 'lucide-react';

export default function AdminPropertiesPage() {
  const [plots, setPlots] = useState<Plot[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchPlots();
  }, []);

  const fetchPlots = async () => {
    try {
      const res = await fetch('/api/plots');
      const data = await res.json();
      if (data.success) {
        setPlots(data.plots);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const toggleVerification = async (plot: Plot) => {
    const nextStatus = plot.verificationStatus === 'Verified' ? 'Pending Verification' : 'Verified';
    setActionLoading(plot.id);
    try {
      const res = await fetch(`/api/plots/${plot.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          verificationStatus: nextStatus,
          sellerVerified: nextStatus === 'Verified',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setPlots((prev) =>
          prev.map((p) =>
            p.id === plot.id
              ? { ...p, verificationStatus: nextStatus, sellerVerified: nextStatus === 'Verified' }
              : p
          )
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(null);
    }
  };

  const toggleFeatured = async (plot: Plot) => {
    setActionLoading(plot.id);
    try {
      const res = await fetch(`/api/plots/${plot.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isFeatured: !plot.isFeatured }),
      });
      const data = await res.json();
      if (data.success) {
        setPlots((prev) =>
          prev.map((p) => (p.id === plot.id ? { ...p, isFeatured: !p.isFeatured } : p))
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (plotId: string) => {
    if (!confirm('Are you sure you want to permanently delete this listing from the platform?')) return;
    setActionLoading(plotId);
    try {
      const res = await fetch(`/api/plots/${plotId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setPlots((prev) => prev.filter((p) => p.id !== plotId));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(null);
    }
  };

  const filtered = plots.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      (p.sellerName && p.sellerName.toLowerCase().includes(search.toLowerCase())) ||
      (p.surveyNumber && p.surveyNumber.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Platform Property Moderation ({plots.length})
          </h1>
          <p className="text-xs text-gray-500">
            Review, verify, feature, or suspend residential plot listings across Thoothukudi
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, location, seller, survey #..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {['All', 'Available', 'Reserved', 'Sold'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 ${
                statusFilter === st
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Listings Table */}
      {loading ? (
        <div className="text-center py-16 text-gray-500 text-xs">Loading listings...</div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAFBF9] border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-5 py-3.5">Property</th>
                  <th className="px-5 py-3.5">Seller / Promoter</th>
                  <th className="px-5 py-3.5">Location &amp; Area</th>
                  <th className="px-5 py-3.5">Price</th>
                  <th className="px-5 py-3.5">Verification</th>
                  <th className="px-5 py-3.5">Status</th>
                  <th className="px-5 py-3.5 text-right">Moderation Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filtered.map((plot) => (
                  <tr key={plot.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                          <Image
                            src={plot.images?.[0] || '/images/plots/demarcated-plot.jpg'}
                            alt={plot.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 line-clamp-1">{plot.title}</div>
                          <div className="text-[10px] text-gray-400">
                            {plot.approval} &bull; {plot.surveyNumber || 'Survey verified'}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="font-semibold text-gray-800">{plot.sellerName || 'Direct Owner'}</div>
                      <div className="text-[10px] text-gray-400">{plot.sellerPhone || 'Contact verified'}</div>
                    </td>

                    <td className="px-5 py-4">
                      <div>{plot.location}</div>
                      <div className="text-[10px] text-gray-500">{plot.areaCents} Cents ({plot.areaSqFt} sq.ft)</div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="font-black text-emerald-800">{plot.priceDisplay}</div>
                      <div className="text-[10px] text-gray-400">₹{plot.pricePerSqFt}/sq.ft</div>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => toggleVerification(plot)}
                        disabled={actionLoading === plot.id}
                        className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-colors ${
                          plot.verificationStatus === 'Verified' || plot.sellerVerified
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200'
                        }`}
                        title="Click to toggle verification status"
                      >
                        <ShieldCheck className="w-3 h-3" />
                        <span>{plot.verificationStatus === 'Verified' || plot.sellerVerified ? 'Verified' : 'Pending Verification'}</span>
                      </button>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          plot.status === 'Available'
                            ? 'bg-emerald-50 text-emerald-700'
                            : plot.status === 'Reserved'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {plot.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => toggleFeatured(plot)}
                          disabled={actionLoading === plot.id}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            plot.isFeatured
                              ? 'bg-amber-100 text-amber-700 border-amber-300'
                              : 'bg-gray-50 text-gray-400 border-gray-200 hover:text-amber-600'
                          }`}
                          title={plot.isFeatured ? 'Featured on Homepage' : 'Promote to Featured'}
                        >
                          <Star className="w-3.5 h-3.5" />
                        </button>

                        <Link
                          href={`/plots/${plot.slug}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-gray-50 text-gray-600 hover:text-emerald-700 border border-gray-200 hover:bg-emerald-50 transition-colors"
                          title="View on Customer Site"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>

                        <button
                          onClick={() => handleDelete(plot.id)}
                          disabled={actionLoading === plot.id}
                          className="p-1.5 rounded-lg bg-gray-50 text-red-500 hover:text-red-700 border border-gray-200 hover:bg-red-50 transition-colors"
                          title="Delete Listing"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
