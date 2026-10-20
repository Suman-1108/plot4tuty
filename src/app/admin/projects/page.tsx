'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import {
  Building,
  PlusCircle,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Layers,
  Search,
} from 'lucide-react';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (data.success && Array.isArray(data.projects)) {
        setProjects(data.projects);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const filtered = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Residential Masterplan Layouts ({projects.length})
          </h1>
          <p className="text-xs text-gray-500">
            DTCP approved multi-plot layouts, gated townships, and plotted blueprints in Thoothukudi
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name, location..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-500 text-xs">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full bg-gray-200">
                  <Image
                    src={proj.image || '/images/plots/dtcp-masterplan-blueprint.jpg'}
                    alt={proj.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-950/80 text-emerald-300 px-2.5 py-0.5 rounded text-[10px] font-bold border border-emerald-500/40">
                    {proj.approval}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center space-x-1 text-xs text-gray-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{proj.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{proj.tagline}</p>

                  <div className="grid grid-cols-3 gap-2 bg-[#FAFBF9] p-2.5 rounded-xl text-center text-xs border border-gray-100 mb-3">
                    <div>
                      <span className="text-[10px] text-gray-400 block">Total</span>
                      <span className="font-bold text-gray-900">{proj.totalPlots}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block">Available</span>
                      <span className="font-bold text-emerald-700">{proj.availablePlots}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block">Sold</span>
                      <span className="font-bold text-gray-500">{proj.soldPlots}</span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-[10px] text-gray-400 block">Price Range</span>
                    <span className="font-bold text-emerald-800">{proj.priceRange}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-gray-500">Plots: {proj.plotSizes}</span>
                <Link
                  href="/projects"
                  target="_blank"
                  className="inline-flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 font-bold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Public View</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
