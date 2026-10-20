'use client';

import Link from 'next/link';
import { Maximize2, IndianRupee, Map, ShieldCheck, ArrowRight, FileText } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      icon: Maximize2,
      value: '645 – 2,966 sq.ft',
      sub: '1.48 to 6.8 Cents',
      label: 'Plot Dimensions',
      desc: 'Compact villas to sprawling corner luxury plots'
    },
    {
      icon: IndianRupee,
      value: '₹4.10 Lakhs*',
      sub: '₹630 / sq.ft onwards',
      label: 'Starting Price',
      desc: 'Transparent pricing with zero hidden brokerage'
    },
    {
      icon: Map,
      value: '36 & 40 Ft Roads',
      sub: 'Asphalt Blacktop Tar',
      label: 'Layout Infrastructure',
      desc: 'LED streetlights & sweet water at 22 ft'
    },
    {
      icon: ShieldCheck,
      value: 'DTCP & TNRERA',
      sub: '100% Clear Patta',
      label: 'Legal Verification',
      desc: 'Bank loan approved up to 90% from SBI & HDFC'
    }
  ];

  return (
    <section className="bg-white border-b border-[#DADDD5] py-12 lg:py-14 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-extrabold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Thoothukudi Real Estate Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 tracking-tight">
            Key Features of Verified Land Parcels
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Carefully curated, legally audited residential plots with ready-to-build infrastructure.
          </p>
        </div>

        {/* 4 Overview Boxes (Aura Phase II style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAF6] p-6 rounded-2xl border border-emerald-100 hover:border-emerald-500 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    {s.value}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {s.sub}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200/80 mt-4">
                  <div className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                    {s.label}
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-gray-600">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span>Immediate site visit arranged 7 days a week with free pickup in Thoothukudi.</span>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-700" />
              <span>View Layout Drawings</span>
            </Link>

            <Link
              href="/plots"
              className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
            >
              <span>Explore All Plots</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
