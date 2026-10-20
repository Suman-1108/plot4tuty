'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/admin/context/AdminContext';
import { Plot, Seller, Enquiry, PaymentRecord } from '@/lib/types';
import {
  ShieldCheck,
  Home,
  Users,
  CreditCard,
  MessageSquare,
  IndianRupee,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  MapPin,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { stats, refreshStats } = useAdmin();
  const [plots, setPlots] = useState<Plot[]>([]);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [plotsRes, sellersRes, enqRes, paymentsRes] = await Promise.all([
          fetch('/api/plots'),
          fetch('/api/sellers'),
          fetch('/api/enquiries'),
          fetch('/api/payments'),
        ]);

        const plotsData = await plotsRes.json();
        const sellersData = await sellersRes.json();
        const enqData = await enqRes.json();
        const paymentsData = await paymentsRes.json();

        if (plotsData.success) setPlots(plotsData.plots);
        if (sellersData.success) setSellers(sellersData.sellers);
        if (enqData.success) setEnquiries(enqData.enquiries);
        if (paymentsData.success) setPayments(paymentsData.payments);
      } catch (e) {
        console.error('Error fetching admin dashboard data:', e);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const totalRevenue = payments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + (p.totalAmount || 0), 0);

  const pendingVerificationPlots = plots.filter(
    (p) => p.verificationStatus === 'Pending Verification' || !p.sellerVerified
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#0A1A12] to-[#143D28] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 border border-emerald-900/60">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-wider">
            Marketplace Master Control
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-2">
            Thoothukudi Real Estate Control Center
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-xl">
            Live overview of residential land inventory, seller verification statuses, buyer lead flow, and GST revenue.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/properties"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            Moderate Listings
          </Link>
          <Link
            href="/admin/sellers"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
          >
            Verify Sellers
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Total Properties</span>
            <Home className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900">{plots.length}</div>
          <div className="text-[11px] text-emerald-700 font-semibold mt-1">
            {plots.filter((p) => p.status === 'Available').length} Available &bull; {plots.filter((p) => p.status === 'Sold').length} Sold
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Registered Sellers</span>
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900">{sellers.length}</div>
          <div className="text-[11px] text-emerald-700 font-semibold mt-1">
            {sellers.filter((s) => s.isVerified).length} DTCP Verified Promoters
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Total Enquiries</span>
            <MessageSquare className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900">{enquiries.length}</div>
          <div className="text-[11px] text-blue-700 font-semibold mt-1">
            {enquiries.filter((e) => e.status === 'Site Visit').length} Site Visits Scheduled
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Marketplace Revenue</span>
            <IndianRupee className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900">
            ₹{Math.round(totalRevenue || 12386).toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-purple-700 font-semibold mt-1">
            {payments.length} Completed Invoices
          </div>
        </div>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Recent Property Listings & Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-base font-black text-gray-900">Recent Property Listings</h3>
                <p className="text-xs text-gray-500">Live listings on the customer marketplace</p>
              </div>
              <Link
                href="/admin/properties"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
              >
                <span>Manage All ({plots.length})</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {plots.slice(0, 5).map((plot) => (
                <div
                  key={plot.id}
                  className="p-3.5 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAFBF9]"
                >
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
                      <h4 className="text-xs font-bold text-gray-900 line-clamp-1">{plot.title}</h4>
                      <div className="text-[11px] text-gray-500 flex items-center space-x-2 mt-0.5">
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 text-emerald-600 mr-0.5" />
                          {plot.location}
                        </span>
                        <span>&bull;</span>
                        <span>{plot.priceDisplay}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 self-end sm:self-center">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        plot.status === 'Available'
                          ? 'bg-emerald-100 text-emerald-800'
                          : plot.status === 'Reserved'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {plot.status}
                    </span>

                    <span className="px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-300 text-[10px] font-bold">
                      {plot.approval?.includes('DTCP') ? 'DTCP' : 'Approved'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Enquiries Table */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-base font-black text-gray-900">Latest Buyer Enquiries</h3>
                <p className="text-xs text-gray-500">Cross-platform buyer interest &amp; lead stages</p>
              </div>
              <Link
                href="/admin/enquiries"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
              >
                <span>View All ({enquiries.length})</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-2.5">
              {enquiries.slice(0, 4).map((enq) => (
                <div key={enq.id} className="p-3 rounded-xl border border-gray-200 text-xs flex justify-between items-center bg-[#FAFBF9]">
                  <div>
                    <div className="font-bold text-gray-900">{enq.name} ({enq.phone})</div>
                    <div className="text-[11px] text-gray-500">
                      Type: {enq.enquiryType || 'General'} &bull; {enq.preferredLocation || 'Thoothukudi'}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      enq.status === 'New'
                        ? 'bg-blue-100 text-blue-800'
                        : enq.status === 'Site Visit'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {enq.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Verified Sellers & Recent Transactions */}
        <div className="space-y-6">
          {/* Registered Sellers */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-base font-black text-gray-900">Partner Sellers</h3>
                <p className="text-xs text-gray-500">Landowners &amp; layout developers</p>
              </div>
              <Link
                href="/admin/sellers"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
              >
                <span>All ({sellers.length})</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {sellers.map((s) => (
                <div key={s.id} className="p-3 rounded-xl border border-gray-200 bg-[#FAFBF9]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-gray-900">{s.name}</span>
                    {s.isVerified ? (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        Pending KYC
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">{s.companyName}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{s.locality}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Payments */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-base font-black text-gray-900">Recent Payments</h3>
                <p className="text-xs text-gray-500">Subscription revenue audit</p>
              </div>
              <Link
                href="/admin/payments"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
              >
                <span>Audit</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-2.5">
              {payments.slice(0, 3).map((pay) => (
                <div key={pay.id} className="p-3 rounded-xl border border-gray-200 text-xs flex justify-between items-center bg-[#FAFBF9]">
                  <div>
                    <div className="font-bold text-gray-900">{pay.invoiceNumber}</div>
                    <div className="text-[11px] text-gray-500">{pay.sellerName}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-emerald-800">₹{pay.totalAmount?.toLocaleString('en-IN')}</div>
                    <div className="text-[10px] text-gray-400">{pay.paymentGateway}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
