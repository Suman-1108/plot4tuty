'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProjectLayoutPlot } from '@/lib/types';
import { ShieldCheck, MapPin, CheckCircle, MessageSquare, ArrowRight, Info } from 'lucide-react';

const SAMPLE_LAYOUT: ProjectLayoutPlot[] = [
  { number: 1, size: '2400 sq.ft', cents: 5.51, facing: 'North', status: 'Sold', price: '₹42.0 L' },
  { number: 2, size: '1800 sq.ft', cents: 4.13, facing: 'North', status: 'Sold', price: '₹31.5 L' },
  { number: 3, size: '1800 sq.ft', cents: 4.13, facing: 'North', status: 'Reserved', price: '₹31.5 L' },
  { number: 4, size: '1500 sq.ft', cents: 3.44, facing: 'East', status: 'Available', price: '₹26.2 L' },
  { number: 5, size: '1500 sq.ft', cents: 3.44, facing: 'East', status: 'Available', price: '₹26.2 L' },
  { number: 6, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Sold', price: '₹21.0 L' },
  { number: 7, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Available', price: '₹21.0 L' },
  { number: 8, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Sold', price: '₹26.2 L' },
  { number: 9, size: '1800 sq.ft', cents: 4.13, facing: 'North', status: 'Sold', price: '₹31.5 L' },
  { number: 10, size: '2400 sq.ft', cents: 5.51, facing: 'North-East', status: 'Available', price: '₹43.5 L' },
  { number: 11, size: '1500 sq.ft', cents: 3.44, facing: 'South', status: 'Sold', price: '₹25.8 L' },
  { number: 12, size: '1200 sq.ft', cents: 2.75, facing: 'South', status: 'Available', price: '₹20.8 L' },
  { number: 13, size: '1500 sq.ft', cents: 3.44, facing: 'South', status: 'Available', price: '₹25.8 L' },
  { number: 14, size: '1800 sq.ft', cents: 4.13, facing: 'South', status: 'Sold', price: '₹31.0 L' },
  { number: 15, size: '1500 sq.ft', cents: 3.44, facing: 'East', status: 'Reserved', price: '₹26.2 L' },
  { number: 16, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Sold', price: '₹21.0 L' },
  { number: 17, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Sold', price: '₹26.2 L' },
  { number: 18, size: '1800 sq.ft', cents: 4.13, facing: 'North-East', status: 'Available', price: '₹32.0 L' },
];

export default function MasterplanInteractive() {
  const [selectedPlot, setSelectedPlot] = useState<ProjectLayoutPlot>(SAMPLE_LAYOUT[17]); // default to Plot #18

  const availableCount = SAMPLE_LAYOUT.filter((p) => p.status === 'Available').length;
  const reservedCount = SAMPLE_LAYOUT.filter((p) => p.status === 'Reserved').length;
  const soldCount = SAMPLE_LAYOUT.filter((p) => p.status === 'Sold').length;

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#DADDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#668F35] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive Masterplan Layout</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222]">
            Pearl Haven Layout — Phase 1 Master Plan
          </h2>
          <p className="text-sm sm:text-base text-[#666A5D] mt-2">
            Explore individual demarcated plot boundaries, road widths, and live availability. Click on any plot number to view dimensions, facing, and request an immediate on-site visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layout Grid Box */}
          <div className="lg:col-span-8 bg-[#F4F5F0] rounded-xl border border-[#DADDD5] p-5 sm:p-7 editorial-shadow">
            {/* Top Road Marker */}
            <div className="bg-[#222222] text-white text-xs font-semibold py-2 px-4 rounded mb-5 text-center flex items-center justify-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#668F35]"></span>
              <span>40 FT MAIN AVENUE BLACKTOP ROAD (CONNECTING TO COLLECTORATE HIGHWAY)</span>
            </div>

            {/* Layout Grid Blueprint */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-5">
              {SAMPLE_LAYOUT.map((plot) => {
                const isSelected = selectedPlot.number === plot.number;
                return (
                  <button
                    key={plot.number}
                    onClick={() => setSelectedPlot(plot)}
                    className={`p-3 rounded-lg border text-left transition-all relative ${
                      isSelected
                        ? 'ring-2 ring-[#668F35] shadow-md border-transparent bg-white'
                        : 'bg-white hover:border-[#668F35] border-[#DADDD5]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#222222]">#{plot.number}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          plot.status === 'Available'
                            ? 'bg-[#668F35]'
                            : plot.status === 'Reserved'
                            ? 'bg-[#B45309]'
                            : 'bg-gray-400'
                        }`}
                      ></span>
                    </div>
                    <div className="text-[11px] font-semibold text-[#55594D] line-clamp-1">
                      {plot.cents} Cents
                    </div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{plot.facing}</div>
                  </button>
                );
              })}
            </div>

            {/* Internal 33ft Cross Road */}
            <div className="bg-[#DADDD5] text-[#222222] text-[11px] font-medium py-1.5 px-3 rounded mb-5 text-center tracking-wide">
              33 FT INTERNAL ACCESS ROAD WITH UNDERGROUND DRAINAGE & SOLAR LIGHTS
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#DADDD5] text-xs">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#668F35]"></span>
                  <span className="text-[#222222] font-medium">Available ({availableCount})</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B45309]"></span>
                  <span className="text-[#222222] font-medium">Reserved ({reservedCount})</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                  <span className="text-[#222222] font-medium">Sold ({soldCount})</span>
                </span>
              </div>

              <div className="text-[#666A5D] text-[11px] flex items-center space-x-1">
                <Info className="w-3.5 h-3.5 text-[#668F35]" />
                <span>Total 18 Plots in Phase 1 (DTCP No. 128/2023)</span>
              </div>
            </div>
          </div>

          {/* Selected Plot Detail Card */}
          <div className="lg:col-span-4 bg-[#F4F5F0] rounded-xl border border-[#DADDD5] p-6 editorial-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DADDD5]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666A5D]">Selected Parcel</span>
                  <h3 className="text-2xl font-bold text-[#222222]">Plot #{selectedPlot.number}</h3>
                </div>
                <span
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    selectedPlot.status === 'Available'
                      ? 'bg-[#668F35] text-white'
                      : selectedPlot.status === 'Reserved'
                      ? 'bg-[#B45309] text-white'
                      : 'bg-gray-600 text-white'
                  }`}
                >
                  {selectedPlot.status}
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-[#55594D]">
                <div className="flex justify-between py-1.5 border-b border-[#DADDD5]/50">
                  <span className="text-[#666A5D]">Layout Project:</span>
                  <span className="font-semibold text-[#222222]">Pearl Haven (Korampallam)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DADDD5]/50">
                  <span className="text-[#666A5D]">Plot Area:</span>
                  <span className="font-semibold text-[#222222]">{selectedPlot.cents} Cents ({selectedPlot.size})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DADDD5]/50">
                  <span className="text-[#666A5D]">Vastu Facing:</span>
                  <span className="font-semibold text-[#222222]">{selectedPlot.facing} Facing</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DADDD5]/50">
                  <span className="text-[#666A5D]">Road Width:</span>
                  <span className="font-semibold text-[#222222]">40 ft Main Blacktop Road</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DADDD5]/50">
                  <span className="text-[#666A5D]">Approval Status:</span>
                  <span className="font-semibold text-[#668F35]">DTCP & TNRERA Verified</span>
                </div>
                <div className="flex justify-between py-2 items-baseline">
                  <span className="text-sm font-semibold text-[#222222]">Estimated Price:</span>
                  <span className="text-xl font-bold text-[#668F35]">{selectedPlot.price}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-2.5">
              <a
                href={`https://wa.me/919842155678?text=${encodeURIComponent(
                  `Hello Plot 4 Tuty, I would like to enquire about Pearl Haven Plot #${selectedPlot.number} (${selectedPlot.cents} Cents, ${selectedPlot.facing} facing). Is it available for an on-site visit?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#668F35] hover:bg-[#53752A] text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire Plot #{selectedPlot.number} on WhatsApp</span>
              </a>

              <Link
                href="/projects"
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-white border border-[#DADDD5] hover:border-[#668F35] text-[#222222] rounded-lg text-xs font-semibold transition-colors"
              >
                <span>View Full Layout Specifications</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
