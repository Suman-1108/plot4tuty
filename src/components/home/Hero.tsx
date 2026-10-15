import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, MapPin, CheckCircle, ArrowRight, Compass } from 'lucide-react';
import SearchFilterBar from './SearchFilterBar';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#DADDD5]">
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 bg-[#F4F5F0] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DADDD5] text-xs font-semibold text-[#55594D] editorial-shadow">
            <span className="w-2 h-2 rounded-full bg-[#668F35]"></span>
            <span className="tracking-widest uppercase text-[11px] text-[#222222]">
              FIND YOUR LAND. BUILD YOUR FUTURE.
            </span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#222222] tracking-tight leading-[1.15] mb-5">
            FIND YOUR PLACE IN <br className="hidden sm:inline" />
            <span className="text-[#668F35]">THOOTHUKUDI</span>
          </h1>
          <p className="text-base sm:text-lg text-[#666A5D] max-w-2xl mx-auto leading-relaxed">
            Your Land. Your Future. Explore verified residential plots, compare prime development corridors, and secure clear-title land for your family home or high-growth investment.
          </p>

          {/* Key Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-[#222222]">
            <span className="flex items-center space-x-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#668F35]" />
              <span>DTCP & TNRERA Approved</span>
            </span>
            <span className="hidden sm:inline text-[#DADDD5]">•</span>
            <span className="flex items-center space-x-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#668F35]" />
              <span>100% Legal Title Search</span>
            </span>
            <span className="hidden sm:inline text-[#DADDD5]">•</span>
            <span className="flex items-center space-x-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#668F35]" />
              <span>Ready for Immediate Construction</span>
            </span>
          </div>
        </div>

        {/* Hero Visual Banner (Realistic Plotted Development Photography) */}
        <div className="relative rounded-2xl overflow-hidden border border-[#DADDD5] editorial-shadow-lg mb-8 aspect-[21/9] max-h-[460px] bg-[#EAECE4]">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85"
            alt="Residential land plots layout in Thoothukudi, Tamil Nadu"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Floating Layout Stats Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-4 text-white">
            <div className="max-w-md">
              <div className="inline-block px-2.5 py-1 rounded bg-[#668F35] text-[11px] font-semibold uppercase tracking-wider mb-2">
                Prime Location Corridor
              </div>
              <h2 className="text-lg sm:text-2xl font-bold">Korampallam & Palayamkottai Road Enclaves</h2>
              <p className="text-xs sm:text-sm text-gray-200 line-clamp-1 sm:line-clamp-none">
                40 ft blacktop roads, sweet groundwater, avenue plantations, and instant registry.
              </p>
            </div>

            <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-md text-[#222222] p-2 sm:p-3 rounded-lg border border-[#DADDD5] text-xs">
              <div className="border-r border-gray-200 pr-3">
                <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Prices From</span>
                <span className="text-sm sm:text-base font-bold text-[#668F35]">₹14.20 Lakhs</span>
              </div>
              <div className="pl-1">
                <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Plot Sizes</span>
                <span className="text-xs sm:text-sm font-semibold">2.75 to 5.5 Cents</span>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Search Panel */}
        <div className="relative -mt-16 sm:-mt-20 z-20 px-2 sm:px-4">
          <SearchFilterBar />
        </div>
      </div>
    </section>
  );
}
