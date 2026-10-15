'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, IndianRupee, Layers, ShieldCheck, Search, Sparkles, Compass } from 'lucide-react';

export default function SearchFilterBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'residential' | 'gated' | 'investment'>('residential');
  const [location, setLocation] = useState('all');
  const [budgetRange, setBudgetRange] = useState('all');
  const [plotSize, setPlotSize] = useState('all');
  const [approval, setApproval] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location !== 'all') params.set('location', location);
    if (budgetRange !== 'all') params.set('budgetRange', budgetRange);
    if (plotSize !== 'all') params.set('plotSize', plotSize);
    if (approval !== 'all') params.set('approval', approval);

    const queryString = params.toString();
    router.push(queryString ? `/plots?${queryString}` : '/plots');
  };

  const handleQuickChip = (loc: string, budget: string = 'all') => {
    setLocation(loc);
    if (budget !== 'all') setBudgetRange(budget);
    const params = new URLSearchParams();
    if (loc !== 'all') params.set('location', loc);
    if (budget !== 'all') params.set('budgetRange', budget);
    router.push(`/plots?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#DADDD5] p-4 sm:p-6 editorial-shadow-lg max-w-5xl mx-auto">
      {/* Top Segmented Intent Tabs */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-[#DADDD5] gap-2">
        <div className="flex space-x-1 sm:space-x-2 bg-[#F4F5F0] p-1 rounded-lg border border-[#DADDD5]">
          <button
            type="button"
            onClick={() => setActiveTab('residential')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              activeTab === 'residential'
                ? 'bg-[#668F35] text-white shadow-xs'
                : 'text-[#55594D] hover:text-[#222222]'
            }`}
          >
            Residential Villa Plots
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('gated');
              setLocation('Korampallam');
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              activeTab === 'gated'
                ? 'bg-[#668F35] text-white shadow-xs'
                : 'text-[#55594D] hover:text-[#222222]'
            }`}
          >
            Gated Townships
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('investment');
              setBudgetRange('under-15');
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              activeTab === 'investment'
                ? 'bg-[#668F35] text-white shadow-xs'
                : 'text-[#55594D] hover:text-[#222222]'
            }`}
          >
            High-Growth Corridors
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-2 text-xs text-[#55594D]">
          <span className="font-semibold text-[#668F35] flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updated Inventory 2026</span>
          </span>
        </div>
      </div>

      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Location Filter */}
          <div className="p-2.5 rounded-xl bg-[#F4F5F0] border border-[#DADDD5] hover:border-[#668F35] transition-colors">
            <label className="flex items-center space-x-1.5 text-xs font-bold text-[#666A5D] mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#668F35]" />
              <span>Location Corridor</span>
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#222222] focus:outline-none cursor-pointer"
            >
              <option value="all">Thoothukudi (All Zones)</option>
              <option value="Korampallam">Korampallam (Collectorate)</option>
              <option value="Millerpuram">Millerpuram (City Center)</option>
              <option value="Palayamkottai Road">Palayamkottai Road (NH 138)</option>
              <option value="Harbour Bypass Road">Harbour Bypass Road</option>
              <option value="Muthiapuram">Muthiapuram & Port Area</option>
              <option value="Spic Nagar">Spic Nagar Green Belt</option>
              <option value="Ettayapuram Road">Ettayapuram Road</option>
            </select>
          </div>

          {/* Budget Filter */}
          <div className="p-2.5 rounded-xl bg-[#F4F5F0] border border-[#DADDD5] hover:border-[#668F35] transition-colors">
            <label className="flex items-center space-x-1.5 text-xs font-bold text-[#666A5D] mb-1">
              <IndianRupee className="w-3.5 h-3.5 text-[#668F35]" />
              <span>Target Budget</span>
            </label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#222222] focus:outline-none cursor-pointer"
            >
              <option value="all">Any Price Range</option>
              <option value="under-15">Under ₹15 Lakhs</option>
              <option value="15-25">₹15 Lakhs – ₹25 Lakhs</option>
              <option value="25-35">₹25 Lakhs – ₹35 Lakhs</option>
              <option value="above-35">Above ₹35 Lakhs</option>
            </select>
          </div>

          {/* Plot Area Filter */}
          <div className="p-2.5 rounded-xl bg-[#F4F5F0] border border-[#DADDD5] hover:border-[#668F35] transition-colors">
            <label className="flex items-center space-x-1.5 text-xs font-bold text-[#666A5D] mb-1">
              <Layers className="w-3.5 h-3.5 text-[#668F35]" />
              <span>Plot Area (Cents)</span>
            </label>
            <select
              value={plotSize}
              onChange={(e) => setPlotSize(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#222222] focus:outline-none cursor-pointer"
            >
              <option value="all">Any Size Range</option>
              <option value="under-3-cents">Under 3 Cents (&lt; 1,300 sq.ft)</option>
              <option value="3-5-cents">3 to 5 Cents (1,300 - 2,200 sq.ft)</option>
              <option value="above-5-cents">Above 5 Cents (&gt; 1 Ground)</option>
            </select>
          </div>

          {/* Approval Filter */}
          <div className="p-2.5 rounded-xl bg-[#F4F5F0] border border-[#DADDD5] hover:border-[#668F35] transition-colors">
            <label className="flex items-center space-x-1.5 text-xs font-bold text-[#666A5D] mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#668F35]" />
              <span>Legal Certification</span>
            </label>
            <select
              value={approval}
              onChange={(e) => setApproval(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#222222] focus:outline-none cursor-pointer"
            >
              <option value="all">All Verified Approvals</option>
              <option value="DTCP">DTCP Approved</option>
              <option value="RERA">TNRERA Registered</option>
              <option value="Panchayat">Panchayat Approved</option>
            </select>
          </div>
        </div>

        {/* Quick Filter Tag Chips */}
        <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#666A5D] text-[11px] font-semibold">Popular Searches:</span>
          <button
            type="button"
            onClick={() => handleQuickChip('Korampallam')}
            className="px-2.5 py-1 bg-[#F4F5F0] hover:bg-white text-[#222222] rounded-md border border-[#DADDD5] text-[11px] font-medium transition-colors"
          >
            📍 Near Collectorate (Korampallam)
          </button>
          <button
            type="button"
            onClick={() => handleQuickChip('Palayamkottai Road')}
            className="px-2.5 py-1 bg-[#F4F5F0] hover:bg-white text-[#222222] rounded-md border border-[#DADDD5] text-[11px] font-medium transition-colors"
          >
            🛣️ NH 138 Four-Lane Frontage
          </button>
          <button
            type="button"
            onClick={() => handleQuickChip('all', '15-25')}
            className="px-2.5 py-1 bg-[#F4F5F0] hover:bg-white text-[#222222] rounded-md border border-[#DADDD5] text-[11px] font-medium transition-colors"
          >
            🏷️ Budget ₹15L – ₹25L
          </button>
          <button
            type="button"
            onClick={() => handleQuickChip('Harbour Bypass Road')}
            className="px-2.5 py-1 bg-[#F4F5F0] hover:bg-white text-[#222222] rounded-md border border-[#DADDD5] text-[11px] font-medium transition-colors"
          >
            ⚓ Harbour Coastal Zone
          </button>
        </div>

        {/* Action Row */}
        <div className="mt-3.5 pt-3.5 border-t border-[#DADDD5] flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center space-x-2 text-xs text-[#55594D]">
            <span className="w-2 h-2 rounded-full bg-[#668F35] animate-pulse"></span>
            <span>Immediate On-Site Registration & SBI/HDFC Loan Support</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-2.5 bg-[#668F35] hover:bg-[#53752A] text-white text-xs sm:text-sm font-bold rounded-lg flex items-center justify-center space-x-2 transition-all shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Search Verified Plots</span>
          </button>
        </div>
      </form>
    </div>
  );
}
