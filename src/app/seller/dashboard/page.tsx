'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSeller } from '@/seller/context/SellerContext';
import { Plot, Enquiry } from '@/lib/types';
import {
  PlusCircle,
  Home,
  MessageSquare,
  Phone,
  Eye,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  MapPin,
  ExternalLink,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';

export default function SellerDashboardPage() {
  const { seller, subscription, loading } = useSeller();
  const [plots, setPlots] = useState<Plot[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [plotsRes, enqRes] = await Promise.all([
          fetch('/api/plots'),
          fetch('/api/enquiries'),
        ]);

        const plotsData = await plotsRes.json();
        const enqData = await enqRes.json();

        if (plotsData.success) {
          // Filter plots belonging to this seller or show all for demo promoter
          const sellerPlots = plotsData.plots.filter(
            (p: Plot) => !p.sellerId || p.sellerId === seller?.id || seller?.id === 'sel-1'
          );
          setPlots(sellerPlots.length > 0 ? sellerPlots : plotsData.plots);
        }

        if (enqData.success) {
          setEnquiries(enqData.enquiries);
        }
      } catch (err) {
        console.error('Error fetching seller dashboard data:', err);
      } finally {
        setFetching(false);
      }
    }

    if (seller) {
      loadData();
    }
  }, [seller]);

  const togglePlotStatus = async (plotId: string, currentStatus: Plot['status']) => {
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
      console.error('Failed to update status', e);
    }
  };

  const availableCount = plots.filter((p) => p.status === 'Available').length;
  const reservedCount = plots.filter((p) => p.status === 'Reserved').length;
  const soldCount = plots.filter((p) => p.status === 'Sold').length;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Welcome Card */}
      <div className="bg-gradient-to-r from-[#14532D] to-[#0F291E] rounded-2xl p-6 sm:p-8 text-white shadow-md mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-wider">
              Seller Partner Dashboard
            </span>
            {seller?.isVerified && (
              <span className="flex items-center text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                <span>Verified Seller</span>
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Welcome back, {seller?.name || 'Partner Seller'}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-xl">
            {seller?.companyName} &bull; {seller?.locality} &bull; Manage your Thoothukudi residential plot inventory and respond directly to buyer leads.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/seller/properties/new"
            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add New Plot</span>
          </Link>

          <Link
            href="/seller/subscription"
            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Manage Plan</span>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Total Properties</span>
            <Home className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900">{plots.length}</div>
          <div className="text-[11px] text-emerald-700 font-semibold mt-1">
            {availableCount} Available &bull; {reservedCount} Reserved
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Buyer Enquiries</span>
            <MessageSquare className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900">{enquiries.length}</div>
          <div className="text-[11px] text-blue-700 font-semibold mt-1">
            {enquiries.filter((e) => e.status === 'New').length} New Leads Pending
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Site Visits Scheduled</span>
            <MapPin className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900">
            {enquiries.filter((e) => e.status === 'Site Visit').length || 3}
          </div>
          <div className="text-[11px] text-amber-700 font-semibold mt-1">
            Physical layout tours in progress
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Active Plan</span>
            <CreditCard className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-lg sm:text-xl font-black text-gray-900 truncate">
            {subscription?.planName ? subscription.planName.split(' ')[0] : 'Developer Pro'}
          </div>
          <div className="text-[11px] text-purple-700 font-semibold mt-1">
            {subscription?.listingsUsed || plots.length} of {subscription?.listingLimit || 50} plots listed
          </div>
        </div>
      </div>

      {/* Two Column Grid: Recent Properties & Recent Enquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Plot Inventory */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-base font-black text-gray-900">Property Inventory</h3>
                <p className="text-xs text-gray-500">Quickly toggle availability or update pricing</p>
              </div>
              <Link
                href="/seller/properties"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
              >
                <span>View All ({plots.length})</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {plots.length === 0 ? (
              <div className="text-center py-10 text-gray-500 text-xs">
                No plots listed yet. Click &quot;Add New Plot&quot; to begin.
              </div>
            ) : (
              <div className="space-y-3">
                {plots.slice(0, 5).map((plot) => (
                  <div
                    key={plot.id}
                    className="p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAFBF9]"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                        <Image
                          src={plot.images?.[0] || '/images/plots/demarcated-plot.jpg'}
                          alt={plot.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1">
                            {plot.title}
                          </h4>
                        </div>
                        <div className="text-[11px] text-gray-500 flex items-center space-x-2 mt-0.5">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 text-emerald-600 mr-0.5" />
                            {plot.location}
                          </span>
                          <span>&bull;</span>
                          <span>{plot.areaCents} Cents ({plot.areaSqFt} sq.ft)</span>
                        </div>
                        <div className="text-xs font-black text-emerald-800 mt-1">
                          {plot.priceDisplay} &bull; <span className="font-normal text-gray-500 text-[10px]">₹{plot.pricePerSqFt}/sq.ft</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 self-end sm:self-center">
                      <button
                        onClick={() => togglePlotStatus(plot.id, plot.status)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
                          plot.status === 'Available'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                            : plot.status === 'Reserved'
                            ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                            : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                        }`}
                        title="Click to cycle status: Available -> Reserved -> Sold"
                      >
                        {plot.status}
                      </button>

                      <Link
                        href={`/plots/${plot.slug}`}
                        target="_blank"
                        className="p-1.5 text-gray-400 hover:text-emerald-700 rounded-lg hover:bg-gray-100 transition-colors"
                        title="View Public Customer Listing"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right 1 Col: Recent Buyer Leads */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-base font-black text-gray-900">Recent Buyer Leads</h3>
                <p className="text-xs text-gray-500">Direct enquiries from verified buyers</p>
              </div>
              <Link
                href="/seller/enquiries"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
              >
                <span>All ({enquiries.length})</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {enquiries.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-xs">No buyer enquiries yet</div>
            ) : (
              <div className="space-y-3">
                {enquiries.slice(0, 4).map((enq) => (
                  <div key={enq.id} className="p-3.5 rounded-xl border border-gray-200 bg-[#FAFBF9] space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs font-bold text-gray-900">{enq.name}</div>
                        <div className="text-[11px] text-gray-500 flex items-center space-x-1">
                          <Phone className="w-3 h-3 text-emerald-600" />
                          <span>{enq.phone}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {enq.enquiryType || 'Site Visit'}
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-600 line-clamp-2 bg-white p-2 rounded border border-gray-100">
                      &quot;{enq.message}&quot;
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-gray-400">
                        {new Date(enq.createdAt).toLocaleDateString('en-IN')}
                      </span>
                      <a
                        href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-700 hover:underline"
                      >
                        <MessageSquare className="w-3 h-3 text-emerald-600" />
                        <span>Reply on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Subscription Banner */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 text-xs text-amber-950">
            <div className="flex items-center space-x-2 font-bold mb-1">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Need More Plot Listings?</span>
            </div>
            <p className="text-amber-800 text-[11px] leading-relaxed mb-3">
              Upgrade to Developer Pro for up to 50 active plot listings, featured priority placement, and direct WhatsApp buyer routing.
            </p>
            <Link
              href="/seller/subscription"
              className="inline-block py-2 px-3.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-center text-xs transition-colors"
            >
              Upgrade Subscription
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
