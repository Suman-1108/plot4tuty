'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project, ProjectLayoutPlot } from '@/lib/types';
import {
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Layers,
  MessageSquare,
  ArrowRight,
  Info,
  Building,
  Navigation
} from 'lucide-react';

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string>(projects[0]?.slug || '');

  const activeProject = projects.find((p) => p.slug === activeProjectSlug) || projects[0];
  const [selectedPlot, setSelectedPlot] = useState<ProjectLayoutPlot | null>(
    activeProject?.layoutPlots[0] || null
  );

  const handleProjectSelect = (p: Project) => {
    setActiveProjectSlug(p.slug);
    setSelectedPlot(p.layoutPlots[0] || null);
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F4F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#668F35] mb-2">
            <Layers className="w-4 h-4" />
            <span>Master-Planned Plotted Communities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222]">
            Layout Projects & Townships
          </h1>
          <p className="text-sm sm:text-base text-[#666A5D] mt-2">
            Review detailed layout masterplans, plot number availability, road widths, and connectivity across prime growth sectors in Thoothukudi.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {projects.map((proj) => {
            const isCurrent = proj.slug === activeProject.slug;
            return (
              <button
                key={proj.id}
                onClick={() => handleProjectSelect(proj)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white border-[#668F35] ring-2 ring-[#668F35]/30 shadow-md'
                    : 'bg-white/80 border-[#DADDD5] hover:border-[#668F35]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#668F35]">{proj.location.split(',')[0]}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#EDF3E4] text-[#53752A] font-semibold">
                      {proj.availablePlots} Available
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#222222]">{proj.name}</h3>
                  <p className="text-xs text-[#666A5D] mt-1 line-clamp-1">{proj.tagline}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#DADDD5]/50 flex justify-between items-center text-xs text-[#222222]">
                  <span className="font-semibold">{proj.priceRange}</span>
                  <span className="text-[11px] text-[#668F35] font-medium">Inspect ↗</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Comprehensive Detail Section */}
        {activeProject && (
          <div className="bg-white rounded-2xl border border-[#DADDD5] p-6 sm:p-10 editorial-shadow-lg mb-12 space-y-10">
            {/* Project Header Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-[#DADDD5]">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EDF3E4] text-[#53752A] border border-[#668F35]/30">
                    {activeProject.approval}
                  </span>
                  <span className="text-xs text-[#666A5D]">{activeProject.approvalNumber}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
                  {activeProject.name}
                </h2>
                <p className="text-xs uppercase tracking-wider text-[#668F35] font-semibold">
                  {activeProject.tagline}
                </p>
                <div className="flex items-center space-x-1.5 text-xs text-[#666A5D]">
                  <MapPin className="w-4 h-4 text-[#668F35] shrink-0" />
                  <span>{activeProject.address}</span>
                </div>
                <p className="text-sm text-[#55594D] leading-relaxed pt-2">
                  {activeProject.description}
                </p>
              </div>

              {/* Stats Box */}
              <div className="lg:col-span-5 bg-[#F4F5F0] rounded-xl border border-[#DADDD5] p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#222222] pb-2 border-b border-[#DADDD5]">
                  Project Summary
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-2.5 rounded border border-[#DADDD5]">
                    <span className="block text-[11px] text-[#666A5D]">Total Plots</span>
                    <span className="text-lg font-bold text-[#222222]">{activeProject.totalPlots}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-[#DADDD5]">
                    <span className="block text-[11px] text-[#666A5D]">Available</span>
                    <span className="text-lg font-bold text-[#668F35]">{activeProject.availablePlots}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-[#DADDD5]">
                    <span className="block text-[11px] text-[#666A5D]">Sold</span>
                    <span className="text-lg font-bold text-gray-500">{activeProject.soldPlots}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 text-xs text-[#55594D]">
                  <div className="flex justify-between">
                    <span className="text-[#666A5D]">Plot Sizes:</span>
                    <span className="font-semibold text-[#222222]">{activeProject.plotSizes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666A5D]">Price Range:</span>
                    <span className="font-semibold text-[#668F35]">{activeProject.priceRange}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919842155678?text=${encodeURIComponent(
                    `Hello Plot 4 Tuty, I would like to download the layout map and price schedule for ${activeProject.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#668F35] hover:bg-[#53752A] text-white rounded-md text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire for {activeProject.name}</span>
                </a>
              </div>
            </div>

            {/* Layout Blueprint & Individual Plot Grid */}
            <div>
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-[#668F35] font-semibold">
                  Phase Masterplan
                </span>
                <h3 className="text-xl font-bold text-[#222222]">
                  Individual Plot Breakdown ({activeProject.layoutPlots.length} Plots Demarcated)
                </h3>
                <p className="text-xs text-[#666A5D]">
                  Click on any plot to inspect its size, facing, and status.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8 bg-[#F4F5F0] p-4 rounded-xl border border-[#DADDD5]">
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                    {activeProject.layoutPlots.map((plot) => {
                      const isSelected = selectedPlot?.number === plot.number;
                      return (
                        <button
                          key={plot.number}
                          onClick={() => setSelectedPlot(plot)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            isSelected
                              ? 'bg-white ring-2 ring-[#668F35] border-transparent shadow-sm'
                              : 'bg-white hover:border-[#668F35] border-[#DADDD5]'
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-[#222222]">#{plot.number}</span>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                plot.status === 'Available'
                                  ? 'bg-[#668F35]'
                                  : plot.status === 'Reserved'
                                  ? 'bg-amber-500'
                                  : 'bg-gray-400'
                              }`}
                            ></span>
                          </div>
                          <div className="text-[11px] font-semibold text-[#55594D]">{plot.cents} Cents</div>
                          <div className="text-[10px] text-gray-500">{plot.facing}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DADDD5] flex items-center justify-between text-xs text-[#55594D]">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#668F35]"></span>
                        <span>Available</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span>Reserved</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                        <span>Sold</span>
                      </span>
                    </div>
                    <span className="text-[11px] text-[#666A5D]">Direct Blacktop Road Access</span>
                  </div>
                </div>

                {/* Selected Plot Box */}
                {selectedPlot && (
                  <div className="lg:col-span-4 bg-[#F4F5F0] p-5 rounded-xl border border-[#DADDD5] space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-[#DADDD5]">
                      <h4 className="text-base font-bold text-[#222222]">Plot #{selectedPlot.number}</h4>
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-semibold ${
                          selectedPlot.status === 'Available'
                            ? 'bg-[#668F35] text-white'
                            : selectedPlot.status === 'Reserved'
                            ? 'bg-amber-600 text-white'
                            : 'bg-gray-600 text-white'
                        }`}
                      >
                        {selectedPlot.status}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-[#55594D]">
                      <div className="flex justify-between">
                        <span className="text-[#666A5D]">Area:</span>
                        <span className="font-semibold text-[#222222]">{selectedPlot.cents} Cents ({selectedPlot.size})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#666A5D]">Facing:</span>
                        <span className="font-semibold text-[#222222]">{selectedPlot.facing} Facing</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#666A5D]">Price:</span>
                        <span className="font-bold text-[#668F35] text-sm">{selectedPlot.price}</span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919842155678?text=${encodeURIComponent(
                        `Hello Plot 4 Tuty, I want to book an on-site visit for ${activeProject.name} Plot #${selectedPlot.number} (${selectedPlot.cents} Cents, ${selectedPlot.facing} facing).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-1.5 py-2 px-3 bg-[#222222] hover:bg-[#668F35] text-white rounded text-xs font-semibold transition-colors mt-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Book Site Visit for #{selectedPlot.number}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Amenities & Nearby Landmarks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#DADDD5]">
              <div>
                <h4 className="text-sm font-bold text-[#222222] uppercase tracking-wider mb-3">
                  Infrastructure Amenities
                </h4>
                <div className="space-y-2">
                  {activeProject.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-[#55594D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#668F35] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#222222] uppercase tracking-wider mb-3">
                  Proximity to Strategic Key Hubs
                </h4>
                <div className="space-y-2">
                  {activeProject.landmarks.map((l, idx) => (
                    <div key={idx} className="flex justify-between text-xs py-1 border-b border-[#DADDD5]/50">
                      <span className="text-[#222222] font-medium">{l.name}</span>
                      <span className="text-[#668F35] font-semibold">{l.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
