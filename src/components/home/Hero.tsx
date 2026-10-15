'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Compass,
  Layers,
  Sparkles,
  PhoneCall,
  MessageSquare,
  Maximize2,
  Droplets,
  Calendar,
  Navigation
} from 'lucide-react';
import SearchFilterBar from './SearchFilterBar';

interface CorridorData {
  id: string;
  name: string;
  tagline: string;
  priceFrom: string;
  sizes: string;
  waterDepth: string;
  roadWidth: string;
  image: string;
  plotNumber: string;
  coordinates: string;
  approval: string;
}

const CORRIDORS: CorridorData[] = [
  {
    id: 'korampallam',
    name: 'Korampallam',
    tagline: 'Adjacent to Thoothukudi District Collectorate',
    priceFrom: '₹22.50 Lakhs',
    sizes: '3.44 – 5.51 Cents',
    waterDepth: 'Sweet Water at 35 ft',
    roadWidth: '40 ft Gated Avenue',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85',
    plotNumber: 'Plot #18 • Pearl Haven',
    coordinates: '8°45\'51"N 78°08\'05"E',
    approval: 'DTCP & TNRERA Approved',
  },
  {
    id: 'palayamkottai',
    name: 'Palayamkottai Rd',
    tagline: 'NH 138 Four-Lane Arterial Growth Corridor',
    priceFrom: '₹19.50 Lakhs',
    sizes: '2.75 – 4.59 Cents',
    waterDepth: 'Borewell Tested Sweet Water',
    roadWidth: '33 ft Blacktop Road',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1600&q=85',
    plotNumber: 'Plot #07 • Palayam Greens',
    coordinates: '8°47\'18"N 78°06\'44"E',
    approval: 'DTCP Approved #84/2024',
  },
  {
    id: 'harbour',
    name: 'Harbour Bypass',
    tagline: 'Direct Expressway Connectivity to VOC Port',
    priceFrom: '₹18.00 Lakhs',
    sizes: '2.75 – 4.13 Cents',
    waterDepth: 'Sweet Groundwater Tested',
    roadWidth: '30 ft Concrete & Tar',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1600&q=85',
    plotNumber: 'Plot #24 • Harbour Enclave',
    coordinates: '8°44\'32"N 78°08\'59"E',
    approval: 'TNRERA/LAYOUT/340/2023',
  },
  {
    id: 'millerpuram',
    name: 'Millerpuram',
    tagline: 'Upscale City Center Residential Neighborhood',
    priceFrom: '₹35.00 Lakhs',
    sizes: '4.00 – 5.51 Cents',
    waterDepth: 'Corporation Water + Sweet Bore',
    roadWidth: '40 ft Corporation Tar',
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1600&q=85',
    plotNumber: 'Plot #03 • Royal Enclave',
    coordinates: '8°48\'12"N 78°08\'15"E',
    approval: 'DTCP Sanctioned #39/2022',
  },
];

export default function Hero() {
  const [selectedCorridor, setSelectedCorridor] = useState<CorridorData>(CORRIDORS[0]);

  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden border-b border-[#DADDD5] bg-[#F4F5F0]">
      {/* Blueprint Subtitle Grid Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Architectural Geo-Coordinate Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#DADDD5] text-xs text-[#666A5D] gap-2">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-[11px] tracking-wider text-[#222222] bg-white px-2.5 py-1 rounded border border-[#DADDD5]">
              THOOTHUKUDI • 8°45&apos;N 78°08&apos;E
            </span>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline font-medium">TAMIL NADU RESIDENTIAL LAND DISCOVERY PLATFORM</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1.5 text-[#53752A] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#668F35] animate-ping"></span>
              <span>Direct Developer Pricing • Zero Brokerage</span>
            </span>
          </div>
        </div>

        {/* Split Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Bold Editorial Headline, Mission & Corridor Selector */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DADDD5] text-xs font-semibold text-[#222222] editorial-shadow">
              <span className="w-2 h-2 rounded-full bg-[#668F35]"></span>
              <span className="tracking-widest uppercase text-[11px]">
                FIND YOUR LAND. BUILD YOUR FUTURE.
              </span>
            </div>

            {/* Typography */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#222222] tracking-tight leading-[1.12]">
                Your Future Begins <br />
                On Ground in <br />
                <span className="text-[#668F35] italic font-serif font-normal">
                  Thoothukudi.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#55594D] mt-4 leading-relaxed max-w-xl">
                Explore sanctioned DTCP & TNRERA residential plots in Thoothukudi’s prime investment corridors. 40ft blacktop avenues, tested sweet groundwater at 35 feet, clear parent deeds, and on-ground demarcation ready for immediate villa construction.
              </p>
            </div>

            {/* Interactive Corridor Selector Pills */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] uppercase tracking-wider text-[#666A5D] font-bold block">
                Select Growth Corridor to Preview
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {CORRIDORS.map((c) => {
                  const isActive = selectedCorridor.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCorridor(c)}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all border ${
                        isActive
                          ? 'bg-[#222222] text-white border-[#222222] shadow-sm'
                          : 'bg-white text-[#222222] border-[#DADDD5] hover:border-[#668F35]'
                      }`}
                    >
                      <span className="block truncate">{c.name}</span>
                      <span
                        className={`text-[10px] block font-normal ${
                          isActive ? 'text-[#668F35]' : 'text-[#666A5D]'
                        }`}
                      >
                        From {c.priceFrom.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Key Trust Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#DADDD5]/80 text-xs text-[#55594D]">
              <div className="bg-white p-3 rounded-lg border border-[#DADDD5] editorial-shadow">
                <span className="block text-[11px] text-[#666A5D]">Starting Price</span>
                <span className="text-base font-bold text-[#668F35]">{selectedCorridor.priceFrom}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#DADDD5] editorial-shadow">
                <span className="block text-[11px] text-[#666A5D]">Plot Dimensions</span>
                <span className="text-base font-bold text-[#222222]">{selectedCorridor.sizes}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#DADDD5] editorial-shadow">
                <span className="block text-[11px] text-[#666A5D]">Legal Status</span>
                <span className="text-base font-bold text-[#222222]">100% DTCP</span>
              </div>
            </div>

            {/* CTA Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/plots"
                className="px-6 py-3 bg-[#668F35] hover:bg-[#53752A] text-white text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center space-x-2 shadow-sm"
              >
                <span>Browse All Available Plots</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/919842155678?text=${encodeURIComponent(
                  `Hello Plot 4 Tuty, I would like to schedule a free site inspection for plots in ${selectedCorridor.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white hover:bg-[#EDF3E4] border border-[#DADDD5] hover:border-[#668F35] text-[#222222] text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center space-x-2 editorial-shadow"
              >
                <MessageSquare className="w-4 h-4 text-[#668F35]" />
                <span>Book Free Site Cab</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Photography Showcase with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#DADDD5] bg-[#EAECE4] aspect-[4/3] sm:aspect-[16/11] editorial-shadow-lg group">
              <Image
                src={selectedCorridor.image}
                alt={`${selectedCorridor.name} residential plots in Thoothukudi`}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Crosshair Survey Corner Markers */}
              <div className="absolute top-3 left-3 text-white/70 font-mono text-xs select-none pointer-events-none">
                + {selectedCorridor.coordinates}
              </div>
              <div className="absolute top-3 right-3 text-white/70 font-mono text-xs select-none pointer-events-none">
                +
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-10 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#222222] text-xs font-bold border border-[#DADDD5] shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#668F35]" />
                  <span>{selectedCorridor.approval}</span>
                </span>

                <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#222222]/90 backdrop-blur-md text-white text-xs font-mono">
                  <Compass className="w-3.5 h-3.5 text-[#668F35]" />
                  <span>East / North Facing</span>
                </span>
              </div>

              {/* Bottom Floating Parcel Specs Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#DADDD5] editorial-shadow text-[#222222]">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#668F35] tracking-wider block">
                      Featured Plot Highlight
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#222222]">
                      {selectedCorridor.plotNumber}
                    </h3>
                    <p className="text-xs text-[#666A5D]">
                      {selectedCorridor.tagline}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-gray-500 uppercase block">Starting</span>
                    <span className="text-base sm:text-lg font-extrabold text-[#668F35]">
                      {selectedCorridor.priceFrom}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200 text-[11px] text-[#55594D]">
                  <div className="flex items-center space-x-1.5">
                    <Droplets className="w-3.5 h-3.5 text-[#668F35] shrink-0" />
                    <span>{selectedCorridor.waterDepth}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#668F35] shrink-0" />
                    <span>{selectedCorridor.roadWidth}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative survey stamp outside container */}
            <div className="hidden sm:flex items-center justify-between mt-3 px-2 text-[11px] text-[#666A5D]">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#668F35]" />
                <span>On-Ground Survey Demarcation Stones Placed</span>
              </span>
              <span className="font-mono">DTCP SEC 49 REGISTERED</span>
            </div>
          </div>
        </div>

        {/* Seamless Search Filter Bar with Enhanced Container */}
        <div className="relative z-20">
          <div className="text-center mb-3">
            <span className="text-xs uppercase tracking-widest text-[#668F35] font-bold">
              Instant Property Search & Discovery
            </span>
          </div>
          <SearchFilterBar />
        </div>
      </div>
    </section>
  );
}
