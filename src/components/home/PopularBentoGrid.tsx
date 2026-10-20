'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, ShieldCheck, Maximize2 } from 'lucide-react';

export default function PopularBentoGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#F4F5F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span className="w-4 h-0.5 bg-emerald-700"></span>
              <span>MOST POPULAR RESIDENTIAL PLOTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mt-1">
              High-Demand Plotted Properties
            </h2>
          </div>
          <Link
            href="/plots"
            className="mt-3 sm:mt-0 inline-flex items-center space-x-1 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <span>View All Plots</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Large Bento Card (7 cols) */}
          <Link
            href="/plots/ap-rajan-garden-plot-30-prime-residential"
            className="group relative lg:col-span-7 rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[500px] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 sm:p-8"
          >
            <Image
              src="/images/plots/aerial-layout-grid.jpg"
              alt="AP Rajan Garden Plotted Township in Thoothukudi"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

            <div className="relative z-10 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-xs">
                  ★ Most Inquired Villa Plot
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                  36-ft Blacktop Road
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                  AP Rajan Garden – Plot #30 (2.64 Cents)
                </h3>
                <div className="flex items-center space-x-1.5 text-xs text-gray-300 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tharuvaikulam, ECR Highway Corridor, Thoothukudi</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/20">
                <div>
                  <div className="text-xs text-gray-300">Total Price</div>
                  <div className="text-2xl font-black text-white">
                    ₹7.25 Lakhs <span className="text-xs font-normal text-emerald-300">(₹2.75 L / Cent)</span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Right Column (5 cols): 2 Stacked Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* Top Right Card: Corner Plot */}
            <Link
              href="/plots/ap-rajan-garden-corner-plot-76"
              className="group relative rounded-3xl overflow-hidden min-h-[240px] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-5 sm:p-6"
            >
              <Image
                src="/images/plots/corner-plot-avenue.jpg"
                alt="Corner Residential Plot with Dual Road Frontage in Thoothukudi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-white">
                  Prime Corner Plot (40ft &amp; 36ft Roads)
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white leading-tight group-hover:text-emerald-300 transition-colors">
                  Corner Plot #76 – 4.95 Cents Luxury Parcel
                </h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-base sm:text-lg font-black text-white">
                    ₹13.60 Lakhs
                  </span>
                  <span className="text-xs text-gray-300 flex items-center space-x-1">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>44 x 49 ft</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Bottom Right Card: Ready-to-build Plot */}
            <Link
              href="/plots/pearl-city-enclave-plot-14-millerpuram"
              className="group relative rounded-3xl overflow-hidden min-h-[240px] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-5 sm:p-6"
            >
              <Image
                src="/images/plots/ready-to-build-plot.jpg"
                alt="Ready to build residential plot in Millerpuram Thoothukudi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-600 text-white">
                  DTCP Approved • Millerpuram
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white leading-tight group-hover:text-emerald-300 transition-colors">
                  Pearl City Enclave – 3.0 Cent Urban Plot
                </h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-base sm:text-lg font-black text-white">
                    ₹21.00 Lakhs
                  </span>
                  <span className="text-xs text-emerald-300 font-semibold flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Individual Patta Ready</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
