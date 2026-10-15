'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { Plot } from '@/lib/types';
import PlotCard from '@/components/plots/PlotCard';

interface FeaturedPlotsProps {
  plots: Plot[];
}

export default function FeaturedPlots({ plots }: FeaturedPlotsProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const filteredPlots =
    selectedLocation === 'all'
      ? plots
      : plots.filter((p) => p.location.toLowerCase() === selectedLocation.toLowerCase());

  const featured = filteredPlots.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-[#F4F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#668F35] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Properties</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222]">
              Featured Residential Plots
            </h2>
            <p className="text-sm sm:text-base text-[#666A5D] mt-1.5 max-w-xl">
              Explore selected residential land listings with verified DTCP approvals, sweet groundwater, and immediate registration in Thoothukudi.
            </p>
          </div>

          {/* Location Quick Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-lg border border-[#DADDD5] editorial-shadow text-xs">
            <button
              onClick={() => setSelectedLocation('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedLocation === 'all'
                  ? 'bg-[#668F35] text-white shadow-xs'
                  : 'text-[#55594D] hover:text-[#222222]'
              }`}
            >
              All Locations
            </button>
            <button
              onClick={() => setSelectedLocation('Korampallam')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedLocation === 'Korampallam'
                  ? 'bg-[#668F35] text-white shadow-xs'
                  : 'text-[#55594D] hover:text-[#222222]'
              }`}
            >
              Korampallam
            </button>
            <button
              onClick={() => setSelectedLocation('Palayamkottai Road')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedLocation === 'Palayamkottai Road'
                  ? 'bg-[#668F35] text-white shadow-xs'
                  : 'text-[#55594D] hover:text-[#222222]'
              }`}
            >
              Palayamkottai Rd
            </button>
            <button
              onClick={() => setSelectedLocation('Harbour Bypass Road')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedLocation === 'Harbour Bypass Road'
                  ? 'bg-[#668F35] text-white shadow-xs'
                  : 'text-[#55594D] hover:text-[#222222]'
              }`}
            >
              Harbour Bypass
            </button>
          </div>
        </div>

        {/* Plots Grid */}
        {featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featured.map((plot) => (
              <PlotCard key={plot.id} plot={plot} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-[#DADDD5]">
            <p className="text-gray-500 text-sm">No featured plots match this location filter.</p>
            <button
              onClick={() => setSelectedLocation('all')}
              className="mt-3 text-xs font-semibold text-[#668F35] underline"
            >
              View all listings
            </button>
          </div>
        )}

        {/* View All Plots Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/plots"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#222222] hover:bg-[#668F35] text-white text-sm font-semibold rounded-lg transition-colors editorial-shadow"
          >
            <span>View All {plots.length} Available Listings in Thoothukudi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
