'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Check } from 'lucide-react';

export default function Hero() {
  const router = useRouter();
  const [activeType, setActiveType] = useState<'buy' | 'gated' | 'investment'>('buy');
  const [corridor, setCorridor] = useState('all');
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (corridor !== 'all') params.set('location', corridor);
    if (query.trim()) params.set('q', query.trim());
    router.push(params.toString() ? `/plots?${params.toString()}` : '/plots');
  };

  const handleQuickTag = (tag: string) => {
    setCorridor(tag);
    router.push(`/plots?location=${encodeURIComponent(tag)}`);
  };

  return (
    <section
      suppressHydrationWarning
      className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between"
    >
      {/* 100% Full-Bleed Aerial Photography */}
      <Image
        src="/images/hero-aerial-golden.jpg"
        alt="Vast aerial residential land parcel in Thoothukudi, Tamil Nadu"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Atmospheric Contrast Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/80 pointer-events-none"></div>

      {/* Traced Glowing Demarcation Polygon Overlay (Demarcating plots across the landscape) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Masterplot 1 Wireframe on the sunny rolling hills */}
        <polygon
          points="520,330 800,280 920,440 630,490"
          fill="rgba(183, 228, 54, 0.14)"
          stroke="#D8FF54"
          strokeWidth="2.5"
          strokeDasharray="8 4"
          filter="url(#hero-glow)"
          className="animate-pulse"
        />
        {/* Plot subdivision lines */}
        <line x1="660" y1="305" x2="720" y2="475" stroke="#D8FF54" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="550" y1="410" x2="860" y2="355" stroke="#D8FF54" strokeWidth="1.5" strokeOpacity="0.8" />
      </svg>

      {/* Content Container aligned within Max Width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pb-20 lg:pb-24 flex flex-col justify-between flex-1">
        {/* Top Brand Pill Strip */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B7E436] animate-pulse"></span>
            <span className="tracking-widest uppercase text-[11px]">
              THOOTHUKUDI RESIDENTIAL LAND PORTAL
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-mono border border-white/10">
            <span>8°45&apos;N 78°08&apos;E • TAMIL NADU</span>
          </div>
        </div>

        {/* Central Editorial Search Box matching Reference Screenshot */}
        <div className="max-w-3xl my-auto py-10 sm:py-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-lg">
            Let&apos;s find the land of <br />
            your dreams in Thoothukudi<span className="text-[#B7E436]">.</span>
          </h1>

          {/* Filter Pills Switcher */}
          <div className="mt-7 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveType('buy')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeType === 'buy'
                  ? 'bg-white text-[#1C2618] shadow-md scale-105'
                  : 'bg-black/40 hover:bg-black/60 text-white border border-white/25 backdrop-blur-sm'
              }`}
            >
              {activeType === 'buy' && <Check className="w-3.5 h-3.5 text-[#668F35] stroke-[3]" />}
              <span>Buy Residential Plot</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveType('gated')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeType === 'gated'
                  ? 'bg-white text-[#1C2618] shadow-md scale-105'
                  : 'bg-black/40 hover:bg-black/60 text-white border border-white/25 backdrop-blur-sm'
              }`}
            >
              {activeType === 'gated' && <Check className="w-3.5 h-3.5 text-[#668F35] stroke-[3]" />}
              <span>Gated Townships</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveType('investment')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeType === 'investment'
                  ? 'bg-white text-[#1C2618] shadow-md scale-105'
                  : 'bg-black/40 hover:bg-black/60 text-white border border-white/25 backdrop-blur-sm'
              }`}
            >
              {activeType === 'investment' && <Check className="w-3.5 h-3.5 text-[#668F35] stroke-[3]" />}
              <span>Commercial Frontage</span>
            </button>
          </div>

          {/* Unified Inline Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-4 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-2 border border-white/40 shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          >
            {/* Corridor Dropdown */}
            <div className="flex items-center space-x-2 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-200">
              <MapPin className="w-4 h-4 text-[#668F35] shrink-0" />
              <select
                value={corridor}
                onChange={(e) => setCorridor(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-bold text-[#222222] focus:outline-none cursor-pointer"
              >
                <option value="all">Corridor: All Areas</option>
                <option value="Korampallam">Korampallam (Collectorate)</option>
                <option value="Harbour Bypass Road">Harbour Bypass (Harbour Enclave)</option>
                <option value="Palayamkottai Road">Palayamkottai Road (NH 138)</option>
                <option value="Millerpuram">Millerpuram (City Center)</option>
                <option value="Muthiapuram">Muthiapuram &amp; Port Zone</option>
                <option value="Ettayapuram Road">Ettayapuram Road</option>
              </select>
            </div>

            {/* Text Input */}
            <div className="flex-1 px-4 py-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type corridor, road width, or characteristics (ex: 40ft road, sweet water)..."
                className="w-full bg-transparent text-xs sm:text-sm text-[#222222] placeholder-gray-500 focus:outline-none font-medium"
              />
            </div>

            {/* Vibrant Lime Action Button */}
            <button
              type="submit"
              className="px-8 py-3 rounded-xl sm:rounded-full bg-[#B7E436] hover:bg-[#A3CE2A] text-[#1C2618] text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center space-x-2 shrink-0 cursor-pointer hover:shadow-lg"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Search Plots</span>
            </button>
          </form>

          {/* Quick Tags Row */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span className="text-[11px] text-gray-300 font-medium">Most searched:</span>
            <button
              type="button"
              onClick={() => handleQuickTag('Korampallam')}
              className="px-3 py-1 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-[11px] text-white transition-colors cursor-pointer"
            >
              Korampallam Collectorate
            </button>
            <button
              type="button"
              onClick={() => handleQuickTag('Harbour Bypass Road')}
              className="px-3 py-1 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-[11px] text-white transition-colors cursor-pointer"
            >
              Harbour Enclave Phase 1
            </button>
            <button
              type="button"
              onClick={() => handleQuickTag('Palayamkottai Road')}
              className="px-3 py-1 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-[11px] text-white transition-colors cursor-pointer"
            >
              Palayamkottai Road (NH 138)
            </button>
            <button
              type="button"
              onClick={() => handleQuickTag('Millerpuram')}
              className="px-3 py-1 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-[11px] text-white transition-colors cursor-pointer"
            >
              Millerpuram Central
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
