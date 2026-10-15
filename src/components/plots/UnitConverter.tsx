'use client';

import { useState } from 'react';
import { Calculator, ArrowRightLeft, Info } from 'lucide-react';

export default function UnitConverter() {
  const [val, setVal] = useState<number>(3.5);
  const [unit, setUnit] = useState<'cents' | 'sqft' | 'ground' | 'sqm'>('cents');

  // Convert everything to square feet as base
  let baseSqFt = 0;
  if (unit === 'cents') {
    baseSqFt = val * 435.6;
  } else if (unit === 'sqft') {
    baseSqFt = val;
  } else if (unit === 'ground') {
    baseSqFt = val * 2400;
  } else if (unit === 'sqm') {
    baseSqFt = val * 10.7639;
  }

  const cents = (baseSqFt / 435.6).toFixed(2);
  const sqft = Math.round(baseSqFt).toLocaleString('en-IN');
  const grounds = (baseSqFt / 2400).toFixed(2);
  const sqm = Math.round(baseSqFt / 10.7639).toLocaleString('en-IN');

  return (
    <div className="bg-[#FFFFFF] border border-[#DADDD5] rounded-lg p-5 editorial-shadow">
      <div className="flex items-center space-x-2 pb-3 mb-4 border-b border-[#DADDD5]">
        <div className="p-1.5 bg-[#EDF3E4] rounded text-[#668F35]">
          <Calculator className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#222222]">Tamil Nadu Land Measurement Converter</h4>
          <p className="text-xs text-[#666A5D]">Instant conversion across Cents, Grounds & Square Feet</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-[#222222] mb-1">Enter Area Value</label>
          <input
            type="number"
            value={val || ''}
            onChange={(e) => setVal(parseFloat(e.target.value) || 0)}
            step="0.1"
            min="0"
            className="w-full px-3 py-2 text-sm bg-[#F4F5F0] border border-[#DADDD5] rounded focus:outline-none focus:border-[#668F35] font-semibold"
            placeholder="e.g. 3.5"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#222222] mb-1">Select Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as any)}
            className="w-full px-3 py-2 text-sm bg-[#F4F5F0] border border-[#DADDD5] rounded focus:outline-none focus:border-[#668F35]"
          >
            <option value="cents">Cents (Standard TN Unit)</option>
            <option value="sqft">Square Feet (Sq.Ft)</option>
            <option value="ground">Ground (2,400 sq.ft)</option>
            <option value="sqm">Square Meters (Sq.M)</option>
          </select>
        </div>
      </div>

      {/* Result Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-[#F4F5F0] p-3 rounded border border-[#DADDD5]/60 text-center">
        <div className="bg-white p-2 rounded border border-[#DADDD5]/50">
          <span className="block text-[11px] text-[#666A5D]">Cents</span>
          <span className="text-base font-bold text-[#668F35]">{cents}</span>
        </div>
        <div className="bg-white p-2 rounded border border-[#DADDD5]/50">
          <span className="block text-[11px] text-[#666A5D]">Square Feet</span>
          <span className="text-base font-bold text-[#222222]">{sqft}</span>
        </div>
        <div className="bg-white p-2 rounded border border-[#DADDD5]/50">
          <span className="block text-[11px] text-[#666A5D]">Grounds</span>
          <span className="text-base font-bold text-[#222222]">{grounds}</span>
        </div>
        <div className="bg-white p-2 rounded border border-[#DADDD5]/50">
          <span className="block text-[11px] text-[#666A5D]">Sq. Meters</span>
          <span className="text-base font-bold text-[#222222]">{sqm}</span>
        </div>
      </div>

      <div className="flex items-center space-x-1.5 mt-3 text-[11px] text-[#666A5D]">
        <Info className="w-3.5 h-3.5 text-[#668F35] shrink-0" />
        <span>1 Cent = 435.6 sq.ft | 1 Ground = 2,400 sq.ft (~5.51 cents)</span>
      </div>
    </div>
  );
}
