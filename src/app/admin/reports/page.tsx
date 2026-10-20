'use client';

import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  MapPin,
  Users,
  Home,
  CheckCircle2,
  Calendar,
  Download,
} from 'lucide-react';

export default function AdminReportsPage() {
  const localities = [
    { name: 'Palayamkottai Road Corridor', share: '38%', count: '24 Enquiries', growth: '+22%' },
    { name: 'Korampallam Collectorate Hub', share: '29%', count: '18 Enquiries', growth: '+15%' },
    { name: 'Millerpuram Residential', share: '18%', count: '11 Enquiries', growth: '+8%' },
    { name: 'Harbour Bypass & VOC Port', share: '10%', count: '6 Enquiries', growth: '+18%' },
    { name: 'Tharuvaikulam ECR Beachside', share: '5%', count: '3 Enquiries', growth: '+12%' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Marketplace Analytics &amp; Reports
          </h1>
          <p className="text-xs text-gray-500">
            Locality search trends, conversion funnel, and real estate market appreciation in Thoothukudi
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Locality Demand Distribution */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
          <h3 className="text-sm font-black text-gray-900 mb-1">
            Buyer Demand by Thoothukudi Locality
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            Based on customer search volume, filter clicks, and enquiry submissions
          </p>

          <div className="space-y-4">
            {localities.map((loc) => (
              <div key={loc.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-gray-700">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{loc.name}</span>
                  </span>
                  <span>
                    {loc.count} ({loc.share}) &bull;{' '}
                    <span className="text-emerald-700 font-bold">{loc.growth}</span>
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-600"
                    style={{ width: loc.share }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Funnel */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
          <h3 className="text-sm font-black text-gray-900 mb-1">
            Buyer Lead Conversion Funnel
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            Stage progression from public plot discovery to closed property registrations
          </p>

          <div className="space-y-3">
            {[
              { stage: '1. Total Plot Views & Impressions', count: '4,820 Views', percent: '100%', bg: 'bg-emerald-800' },
              { stage: '2. Enquiries & WhatsApp Clicks', count: '142 Leads', percent: '65%', bg: 'bg-emerald-700' },
              { stage: '3. Seller Contact & Follow-ups', count: '86 Contacted', percent: '44%', bg: 'bg-emerald-600' },
              { stage: '4. Physical Site Visits Scheduled', count: '38 Layout Tours', percent: '28%', bg: 'bg-emerald-500' },
              { stage: '5. Sale Deed Registrations Done', count: '14 Deals Closed', percent: '12%', bg: 'bg-emerald-400' },
            ].map((s) => (
              <div key={s.stage} className="p-3 bg-[#FAFBF9] rounded-xl border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-gray-900">{s.stage}</div>
                  <div className="text-[11px] text-gray-500">{s.count}</div>
                </div>
                <div className="w-24 text-right">
                  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-1">
                    <div className={`h-full ${s.bg}`} style={{ width: s.percent }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600">{s.percent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
