'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Plot, SearchFilterState } from '@/lib/types';
import PlotCard from '@/components/plots/PlotCard';
import PlotFilters from '@/components/plots/PlotFilters';
import UnitConverter from '@/components/plots/UnitConverter';
import { Layers, ShieldCheck, MapPin, Sparkles, Filter, Scale, ArrowRight, Grid, Map } from 'lucide-react';

interface PlotsClientProps {
  initialPlots: Plot[];
}

export default function PlotsClient({ initialPlots }: PlotsClientProps) {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<SearchFilterState>({
    location: searchParams.get('location') || searchParams.get('locality') || 'all',
    budgetRange: searchParams.get('budgetRange') || 'all',
    plotSize: searchParams.get('plotSize') || 'all',
    facing: searchParams.get('facing') || 'all',
    approval: searchParams.get('approval') || 'all',
    status: searchParams.get('status') || 'all',
    searchQuery: searchParams.get('q') || '',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [comparedPlotIds, setComparedPlotIds] = useState<string[]>([]);

  // Sync compared plots from localStorage
  useEffect(() => {
    const updateCompared = () => {
      try {
        const stored = JSON.parse(localStorage.getItem('compare_plots') || '[]');
        setComparedPlotIds(stored);
      } catch {
        setComparedPlotIds([]);
      }
    };
    updateCompared();
    window.addEventListener('storage', updateCompared);
    return () => window.removeEventListener('storage', updateCompared);
  }, []);

  // Keep filters in sync if URL params change
  useEffect(() => {
    setFilters({
      location: searchParams.get('location') || searchParams.get('locality') || 'all',
      budgetRange: searchParams.get('budgetRange') || 'all',
      plotSize: searchParams.get('plotSize') || 'all',
      facing: searchParams.get('facing') || 'all',
      approval: searchParams.get('approval') || 'all',
      status: searchParams.get('status') || 'all',
      searchQuery: searchParams.get('q') || '',
    });
  }, [searchParams]);

  const filteredPlots = useMemo(() => {
    return initialPlots.filter((p) => {
      // Locality / Location
      if (filters.location !== 'all') {
        const locMatch =
          p.location.toLowerCase().includes(filters.location.toLowerCase()) ||
          (p.locality && p.locality.toLowerCase().includes(filters.location.toLowerCase()));
        if (!locMatch) return false;
      }

      // Budget Range
      if (filters.budgetRange !== 'all') {
        if (filters.budgetRange === 'under-10' && p.price >= 1000000) return false;
        if (filters.budgetRange === 'under-15' && p.price >= 1500000) return false;
        if (filters.budgetRange === '10-20' && (p.price < 1000000 || p.price > 2000000)) return false;
        if (filters.budgetRange === '15-25' && (p.price < 1500000 || p.price > 2500000)) return false;
        if (filters.budgetRange === '20-35' && (p.price < 2000000 || p.price > 3500000)) return false;
        if (filters.budgetRange === 'above-35' && p.price <= 3500000) return false;
      }

      // Plot Area (Cents)
      if (filters.plotSize !== 'all') {
        if (filters.plotSize === 'under-2-cents' && p.areaCents >= 2) return false;
        if (filters.plotSize === 'under-3-cents' && p.areaCents >= 3) return false;
        if (filters.plotSize === '3-5-cents' && (p.areaCents < 3 || p.areaCents > 5)) return false;
        if (filters.plotSize === 'above-5-cents' && p.areaCents <= 5) return false;
      }

      // Facing
      if (filters.facing && filters.facing !== 'all') {
        if (!p.facing.toLowerCase().includes(filters.facing.toLowerCase())) return false;
      }

      // Approval
      if (filters.approval !== 'all') {
        if (!p.approval.toLowerCase().includes(filters.approval.toLowerCase())) return false;
      }

      // Status
      if (filters.status !== 'all') {
        if (p.status.toLowerCase() !== filters.status.toLowerCase()) return false;
      }

      // Search Query
      if (filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase();
        const matches =
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.project.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.uniquePropertyId && p.uniquePropertyId.toLowerCase().includes(q)) ||
          p.layoutPlotNumber.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [initialPlots, filters]);

  const handleReset = () => {
    setFilters({
      location: 'all',
      budgetRange: 'all',
      plotSize: 'all',
      facing: 'all',
      approval: 'all',
      status: 'all',
      searchQuery: '',
    });
  };

  return (
    <div className="py-8 sm:py-12 bg-[#F4F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <span>/</span>
              <span className="text-gray-900 font-bold">Thoothukudi Residential Plots</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Residential Land for Sale in Thoothukudi
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Browse authentic residential plots with clear revenue Patta and DTCP approval.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-white p-1 rounded-xl border border-gray-200 shadow-xs self-start sm:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'grid'
                  ? 'bg-emerald-700 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'map'
                  ? 'bg-emerald-700 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Map View</span>
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <PlotFilters
          filters={filters}
          onChange={setFilters}
          onReset={handleReset}
          totalCount={filteredPlots.length}
        />

        {/* Interactive Map View */}
        {viewMode === 'map' && (
          <div className="mb-8 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-900">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Thoothukudi District Geographic Explorer (Active Plots)</span>
              </div>
              <span className="text-[11px] text-gray-500">
                Lat: 8.80°N, Lng: 78.14°E
              </span>
            </div>

            {/* Visual Corridor Coordinates Map */}
            <div className="relative aspect-[16/7] w-full bg-emerald-950 rounded-xl overflow-hidden border border-emerald-900 flex items-center justify-center p-6 text-center text-white">
              <div className="space-y-4 max-w-xl z-10">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Interactive Geographic Plot Coordinates
                </span>
                <h3 className="text-xl font-black">
                  Explore {filteredPlots.length} Verified Plots Across Thoothukudi
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {filteredPlots.map((p) => (
                    <Link
                      key={p.id}
                      href={`/plots/${p.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-emerald-700 text-xs font-bold text-white border border-white/20 transition-all flex items-center space-x-1.5"
                    >
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{p.locality || p.location.split(',')[0]} ({p.priceDisplay})</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plots Grid */}
        {filteredPlots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlots.map((plot) => (
              <PlotCard key={plot.id} plot={plot} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-lg mx-auto space-y-4">
            <Filter className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">
              No Plots Match Your Filters
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We couldn&apos;t find any residential land matching the selected locality, price, or facing criteria in Thoothukudi. Try widening your filters.
            </p>
            <button
              onClick={handleReset}
              className="py-2.5 px-5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold transition-all shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Floating Compare Bar */}
        {comparedPlotIds.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-gray-900 text-white px-5 py-3 rounded-full shadow-2xl border border-gray-700 flex items-center space-x-4 animate-bounce-once">
            <div className="flex items-center space-x-2 text-xs font-bold">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span>{comparedPlotIds.length} Plot{comparedPlotIds.length > 1 ? 's' : ''} Selected for Comparison</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link
                href="/compare"
                className="py-1.5 px-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-colors flex items-center space-x-1"
              >
                <span>Compare Now</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('compare_plots');
                  setComparedPlotIds([]);
                }}
                className="text-[11px] text-gray-400 hover:text-white underline pl-1"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
