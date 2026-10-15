'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, IndianRupee, Layers, ShieldCheck, Search } from 'lucide-react';

export default function SearchFilterBar() {
  const router = useRouter();
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

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white rounded-xl border border-[#DADDD5] p-3 sm:p-4 editorial-shadow-lg max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Location Filter */}
        <div className="p-2.5 rounded-lg bg-[#F4F5F0]/70 border border-[#DADDD5]/60 hover:border-[#668F35] transition-colors">
          <label className="flex items-center space-x-1.5 text-xs font-semibold text-[#666A5D] mb-1">
            <MapPin className="w-3.5 h-3.5 text-[#668F35]" />
            <span>Location</span>
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-[#222222] focus:outline-none cursor-pointer"
          >
            <option value="all">Thoothukudi & All Corridors</option>
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
        <div className="p-2.5 rounded-lg bg-[#F4F5F0]/70 border border-[#DADDD5]/60 hover:border-[#668F35] transition-colors">
          <label className="flex items-center space-x-1.5 text-xs font-semibold text-[#666A5D] mb-1">
            <IndianRupee className="w-3.5 h-3.5 text-[#668F35]" />
            <span>Budget Range</span>
          </label>
          <select
            value={budgetRange}
            onChange={(e) => setBudgetRange(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-[#222222] focus:outline-none cursor-pointer"
          >
            <option value="all">Any Price Range</option>
            <option value="under-15">Under ₹15 Lakhs</option>
            <option value="15-25">₹15 Lakhs – ₹25 Lakhs</option>
            <option value="25-35">₹25 Lakhs – ₹35 Lakhs</option>
            <option value="above-35">Above ₹35 Lakhs</option>
          </select>
        </div>

        {/* Plot Area Filter */}
        <div className="p-2.5 rounded-lg bg-[#F4F5F0]/70 border border-[#DADDD5]/60 hover:border-[#668F35] transition-colors">
          <label className="flex items-center space-x-1.5 text-xs font-semibold text-[#666A5D] mb-1">
            <Layers className="w-3.5 h-3.5 text-[#668F35]" />
            <span>Plot Area (Cents / Sq.Ft)</span>
          </label>
          <select
            value={plotSize}
            onChange={(e) => setPlotSize(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-[#222222] focus:outline-none cursor-pointer"
          >
            <option value="all">Any Size Range</option>
            <option value="under-3-cents">Under 3 Cents (&lt; 1,300 sq.ft)</option>
            <option value="3-5-cents">3 to 5 Cents (1,300 - 2,200 sq.ft)</option>
            <option value="above-5-cents">Above 5 Cents (&gt; 1 Ground)</option>
          </select>
        </div>

        {/* Approval Filter */}
        <div className="p-2.5 rounded-lg bg-[#F4F5F0]/70 border border-[#DADDD5]/60 hover:border-[#668F35] transition-colors">
          <label className="flex items-center space-x-1.5 text-xs font-semibold text-[#666A5D] mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#668F35]" />
            <span>Legal Approvals</span>
          </label>
          <select
            value={approval}
            onChange={(e) => setApproval(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-[#222222] focus:outline-none cursor-pointer"
          >
            <option value="all">All Verified Approvals</option>
            <option value="DTCP">DTCP Approved</option>
            <option value="RERA">TNRERA Registered</option>
            <option value="Panchayat">Panchayat Approved</option>
          </select>
        </div>
      </div>

      <div className="mt-3.5 pt-3 border-t border-[#DADDD5] flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center space-x-2 text-xs text-[#666A5D]">
          <span className="w-2 h-2 rounded-full bg-[#668F35] animate-pulse"></span>
          <span>Instant Patta Transfer & Bank Loan Assistance Available</span>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 bg-[#668F35] hover:bg-[#53752A] text-white text-sm font-semibold rounded-lg flex items-center justify-center space-x-2 transition-all shadow-sm"
        >
          <Search className="w-4 h-4" />
          <span>Explore Plots</span>
        </button>
      </div>
    </form>
  );
}
