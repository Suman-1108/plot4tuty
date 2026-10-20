'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSeller } from '@/seller/context/SellerContext';
import { Plot } from '@/lib/types';
import {
  PlusCircle,
  Home,
  Search,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Edit,
  Trash2,
  Layers,
  ArrowRight,
  Filter,
  Check,
  AlertCircle,
} from 'lucide-react';

export default function SellerPropertiesPage() {
  const { seller } = useSeller();
  const [plots, setPlots] = useState<Plot[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Available' | 'Reserved' | 'Sold'>('All');
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchPlots();
  }, [seller]);

  const fetchPlots = async () => {
    try {
      const res = await fetch('/api/plots');
      const data = await res.json();
      if (data.success) {
        const sellerPlots = data.plots.filter(
          (p: Plot) => !p.sellerId || p.sellerId === seller?.id || seller?.id === 'sel-1'
        );
        setPlots(sellerPlots.length > 0 ? sellerPlots : data.plots);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (plotId: string, currentStatus: Plot['status']) => {
    const nextStatus: Plot['status'] =
      currentStatus === 'Available' ? 'Reserved' : currentStatus === 'Reserved' ? 'Sold' : 'Available';

    try {
      const res = await fetch(`/api/plots/${plotId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setPlots((prev) => prev.map((p) => (p.id === plotId ? { ...p, status: nextStatus } : p)));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (plotId: string) => {
    if (!confirm('Are you sure you want to remove this plot from your listing inventory?')) return;
    setDeletingId(plotId);
    try {
      const res = await fetch(`/api/plots/${plotId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setPlots((prev) => prev.filter((p) => p.id !== plotId));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = plots.filter((plot) => {
    const matchesSearch =
      plot.title.toLowerCase().includes(search.toLowerCase()) ||
      plot.location.toLowerCase().includes(search.toLowerCase()) ||
      plot.layoutPlotNumber?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || plot.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            My Plot Listings ({plots.length})
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Manage your residential land parcels, pricing, and availability in Thoothukudi
          </p>
        </div>

        <Link
          href="/seller/properties/new"
          className="inline-flex items-center space-x-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors self-start sm:self-center"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Plot Listing</span>
        </Link>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, location, plot #..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {(['All', 'Available', 'Reserved', 'Sold'] as const).map((st) => (
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

      {/* Plots Grid */}
      {loading ? (
        <div className="text-center py-16 text-gray-500 text-xs">Loading property inventory...</div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <Home className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-900">No matching plots found</h3>
          <p className="text-xs text-gray-500 mt-1 mb-4">
            Try adjusting your search criteria or add a new property listing.
          </p>
          <Link
            href="/seller/properties/new"
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-bold"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Plot Now</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((plot) => (
            <div
              key={plot.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image & Status Badge */}
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={plot.images?.[0] || '/images/plots/demarcated-plot.jpg'}
                    alt={plot.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <button
                      onClick={() => toggleStatus(plot.id, plot.status)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold shadow-xs cursor-pointer ${
                        plot.status === 'Available'
                          ? 'bg-emerald-600 text-white'
                          : plot.status === 'Reserved'
                          ? 'bg-amber-600 text-white'
                          : 'bg-gray-700 text-white'
                      }`}
                      title="Click to toggle status"
                    >
                      {plot.status}
                    </button>
                    {plot.layoutPlotNumber && (
                      <span className="px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold backdrop-blur-xs">
                        {plot.layoutPlotNumber}
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
                      {plot.approval?.includes('DTCP') ? 'DTCP' : 'Approved'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center space-x-1 text-xs text-gray-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{plot.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 line-clamp-1 mb-2">
                    {plot.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 bg-[#F4F5F0] p-2.5 rounded-xl mb-3">
                    <div>
                      <span className="text-[10px] text-gray-400 block">Area</span>
                      <span className="font-bold text-gray-900">{plot.areaCents} Cents</span>
                      <span className="text-[10px] text-gray-500 block">({plot.areaSqFt} sq.ft)</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block">Facing / Road</span>
                      <span className="font-bold text-gray-900">{plot.facing}</span>
                      <span className="text-[10px] text-gray-500 block">{plot.roadWidth?.split(' ')[0]} ft road</span>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between pt-1">
                    <div>
                      <span className="text-[10px] text-gray-400 block">Total Price</span>
                      <span className="text-lg font-black text-emerald-800">{plot.priceDisplay}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 block">Rate</span>
                      <span className="text-xs font-bold text-gray-700">₹{plot.pricePerSqFt}/sq.ft</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
                <Link
                  href={`/plots/${plot.slug}`}
                  target="_blank"
                  className="inline-flex items-center space-x-1 text-emerald-700 hover:text-emerald-800 font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Public View</span>
                </Link>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleStatus(plot.id, plot.status)}
                    className="p-1.5 text-gray-500 hover:text-emerald-700 rounded-lg hover:bg-gray-200 transition-colors"
                    title="Change Status"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(plot.id)}
                    disabled={deletingId === plot.id}
                    className="p-1.5 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                    title="Delete Listing"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
