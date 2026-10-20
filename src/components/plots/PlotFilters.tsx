'use client';

import { Search, RotateCcw, MapPin, IndianRupee, Layers, ShieldCheck, CheckCircle2, Compass } from 'lucide-react';
import { SearchFilterState } from '@/lib/types';

interface PlotFiltersProps {
  filters: SearchFilterState;
  onChange: (filters: SearchFilterState) => void;
  onReset: () => void;
  totalCount: number;
}

export default function PlotFilters({ filters, onChange, onReset, totalCount }: PlotFiltersProps) {
  const handleChange = (key: keyof SearchFilterState, value: any) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  const isFiltered =
    filters.location !== 'all' ||
    filters.budgetRange !== 'all' ||
    filters.plotSize !== 'all' ||
    filters.facing !== 'all' ||
    filters.approval !== 'all' ||
    filters.status !== 'all' ||
    !!filters.verifiedOnly ||
    filters.searchQuery.trim() !== '';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm mb-8 space-y-4">
      {/* Search Input & Quick Info */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => handleChange('searchQuery', e.target.value)}
            placeholder="Search by plot number, layout project, road width, or survey number..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-gray-900"
          />
        </div>

        <div className="flex items-center justify-between md:justify-end space-x-3 text-xs text-gray-600">
          <span className="font-bold text-gray-900 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
            Found <span className="text-emerald-800 font-black">{totalCount}</span> Verified Plots
          </span>

          {isFiltered && (
            <button
              onClick={onReset}
              className="inline-flex items-center space-x-1 px-3 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Selects Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 border-t border-gray-100">
        {/* Locality */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
            Locality Corridor
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-2.5 py-2 text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          >
            <option value="all">All Thoothukudi</option>
            <option value="Tharuvaikulam">Tharuvaikulam (ECR)</option>
            <option value="Millerpuram">Millerpuram</option>
            <option value="Korampallam">Korampallam</option>
            <option value="Harbour">Harbour Expressway</option>
            <option value="Palayamkottai">Palayamkottai Road</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
            Budget Range
          </label>
          <select
            value={filters.budgetRange}
            onChange={(e) => handleChange('budgetRange', e.target.value)}
            className="w-full px-2.5 py-2 text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          >
            <option value="all">Any Budget</option>
            <option value="under-10">Under ₹10 Lakhs</option>
            <option value="10-20">₹10 L – ₹20 Lakhs</option>
            <option value="20-35">₹20 L – ₹35 Lakhs</option>
            <option value="above-35">Above ₹35 Lakhs</option>
          </select>
        </div>

        {/* Plot Size */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
            Plot Area (Cents)
          </label>
          <select
            value={filters.plotSize}
            onChange={(e) => handleChange('plotSize', e.target.value)}
            className="w-full px-2.5 py-2 text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          >
            <option value="all">All Sizes</option>
            <option value="under-2-cents">Compact (Under 2 Cents)</option>
            <option value="under-3-cents">Standard (2 - 3 Cents)</option>
            <option value="3-5-cents">Spacious (3 - 5 Cents)</option>
            <option value="above-5-cents">Large (5+ Cents)</option>
          </select>
        </div>

        {/* Facing */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
            Vastu Facing
          </label>
          <select
            value={filters.facing || 'all'}
            onChange={(e) => handleChange('facing', e.target.value)}
            className="w-full px-2.5 py-2 text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          >
            <option value="all">Any Facing</option>
            <option value="East">East</option>
            <option value="North">North</option>
            <option value="North-East">North-East (Corner)</option>
            <option value="South">South</option>
            <option value="West">West</option>
          </select>
        </div>

        {/* Approval */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
            Approval Body
          </label>
          <select
            value={filters.approval}
            onChange={(e) => handleChange('approval', e.target.value)}
            className="w-full px-2.5 py-2 text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          >
            <option value="all">All Approvals</option>
            <option value="DTCP">DTCP Approved</option>
            <option value="RERA">TNRERA Registered</option>
            <option value="Panchayat">Panchayat Approved</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
            Availability
          </label>
          <select
            value={filters.status}
            onChange={(e) => handleChange('status', e.target.value)}
            className="w-full px-2.5 py-2 text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="Available">Available</option>
            <option value="Fast Selling">Fast Selling</option>
            <option value="Reserved">Reserved</option>
          </select>
        </div>
      </div>
    </div>
  );
}
