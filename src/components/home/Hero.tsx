'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  MapPin,
  IndianRupee,
  Layers,
  ArrowRight,
  ShieldCheck,
  Compass,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const [searchLocation, setSearchLocation] = useState('all');
  const [searchBudget, setSearchBudget] = useState('all');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchLocation !== 'all') params.set('location', searchLocation);
    if (searchBudget !== 'all') params.set('budgetRange', searchBudget);
    router.push(params.toString() ? `/plots?${params.toString()}` : '/plots');
  };

  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 bg-[#F4F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Immersive Landscape Card with Curved Edges (matching the reference image) */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] border border-[#DADDD5] editorial-shadow-lg flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {/* Background Realistic Tamil Nadu Land & Hills Photography */}
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85"
            alt="Harbour Enclave and Residential Plots in Thoothukudi, Tamil Nadu"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/75"></div>

          {/* Top Pill Header Bar Inside Card */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#668F35] animate-ping"></span>
              <span className="tracking-widest uppercase text-[11px]">
                HARBOUR ENCLAVE &amp; RESIDENTIAL PLOTS
              </span>
            </div>

            {/* Quick Location Badge */}
            <div className="hidden sm:inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#668F35]" />
              <span>Thoothukudi (Tuticorin), Tamil Nadu</span>
            </div>
          </div>

          {/* Center Immersive Display Typography (matching massive "WANDER" in screenshot) */}
          <div className="relative z-10 text-center my-auto py-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase drop-shadow-md">
              PLOT 4 TUTY<span className="text-[#668F35]">.</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-4 leading-relaxed font-light drop-shadow-sm">
              Discover verified residential land plots across Thoothukudi with curated layout maps, sweet groundwater insights, and hassle-free registration in one platform.
            </p>

            {/* Dual Action Pill Buttons (matching reference style) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/plots"
                className="px-6 sm:px-8 py-3 rounded-full bg-white text-[#222222] hover:bg-[#668F35] hover:text-white font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                Explore All Plots
              </Link>
              <a
                href="https://wa.me/919842155678?text=Hello%20Plot%204%20Tuty,%20I%20would%20like%20to%20plan%20a%20site%20visit%20for%20Harbour%20Enclave%20and%20other%20plots."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 font-bold text-xs sm:text-sm transition-all"
              >
                Plan Site Inspection
              </a>
            </div>
          </div>

          {/* Bottom Integrated Search Strip (matching top search pill in reference) */}
          <div className="relative z-10 max-w-3xl mx-auto w-full">
            <form
              onSubmit={handleQuickSearch}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/50 shadow-2xl flex flex-col sm:flex-row items-center gap-2"
            >
              <div className="flex-1 flex items-center space-x-2 px-3 py-1.5 w-full border-b sm:border-b-0 sm:border-r border-gray-200">
                <MapPin className="w-4 h-4 text-[#668F35] shrink-0" />
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#222222] focus:outline-none cursor-pointer"
                >
                  <option value="all">Search Corridor: Harbour Bypass, Korampallam...</option>
                  <option value="Harbour Bypass Road">Harbour Bypass (Harbour Enclave)</option>
                  <option value="Korampallam">Korampallam (Near Collectorate)</option>
                  <option value="Palayamkottai Road">Palayamkottai Road (NH 138)</option>
                  <option value="Millerpuram">Millerpuram (City Center)</option>
                  <option value="Muthiapuram">Muthiapuram &amp; Spic Nagar</option>
                  <option value="Ettayapuram Road">Ettayapuram Road</option>
                </select>
              </div>

              <div className="flex-1 flex items-center space-x-2 px-3 py-1.5 w-full border-b sm:border-b-0 sm:border-r border-gray-200">
                <IndianRupee className="w-4 h-4 text-[#668F35] shrink-0" />
                <select
                  value={searchBudget}
                  onChange={(e) => setSearchBudget(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#222222] focus:outline-none cursor-pointer"
                >
                  <option value="all">Select Price Range: Any Budget</option>
                  <option value="under-15">Under ₹15 Lakhs</option>
                  <option value="15-25">₹15 Lakhs – ₹25 Lakhs</option>
                  <option value="25-35">₹25 Lakhs – ₹35 Lakhs</option>
                  <option value="above-35">Above ₹35 Lakhs</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#668F35] hover:bg-[#53752A] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-1.5 shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
