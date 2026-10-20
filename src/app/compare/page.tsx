'use client';

import { useState, useEffect } from 'react';
import Link from 'next/image';
import NextLink from 'next/link';
import { Plot } from '@/lib/types';
import {
  Scale,
  X,
  Plus,
  ShieldCheck,
  Check,
  MapPin,
  ArrowRight,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export default function ComparePage() {
  const [allPlots, setAllPlots] = useState<Plot[]>([]);
  const [comparedPlotIds, setComparedPlotIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlots();
    try {
      const stored = JSON.parse(localStorage.getItem('compare_plots') || '[]');
      setComparedPlotIds(stored);
    } catch {
      setComparedPlotIds([]);
    }
  }, []);

  const fetchPlots = async () => {
    try {
      const res = await fetch('/api/plots');
      const data = await res.json();
      if (data.success) {
        setAllPlots(data.plots);
        // If no plots in localstorage, pre-fill with first 2 plots for great initial UX!
        const stored = JSON.parse(localStorage.getItem('compare_plots') || '[]');
        if (stored.length === 0 && data.plots.length >= 2) {
          const defaults = [data.plots[0].id, data.plots[1].id];
          setComparedPlotIds(defaults);
          localStorage.setItem('compare_plots', JSON.stringify(defaults));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removePlot = (id: string) => {
    const updated = comparedPlotIds.filter((pId) => pId !== id);
    setComparedPlotIds(updated);
    localStorage.setItem('compare_plots', JSON.stringify(updated));
  };

  const addPlot = (id: string) => {
    if (comparedPlotIds.includes(id)) return;
    if (comparedPlotIds.length >= 3) {
      alert('You can compare a maximum of 3 plots side by side.');
      return;
    }
    const updated = [...comparedPlotIds, id];
    setComparedPlotIds(updated);
    localStorage.setItem('compare_plots', JSON.stringify(updated));
  };

  const selectedPlots = allPlots.filter((p) => comparedPlotIds.includes(p.id));
  const availableToAdd = allPlots.filter((p) => !comparedPlotIds.includes(p.id));

  return (
    <div className="py-10 sm:py-14 bg-[#F4F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
              <Scale className="w-4 h-4" />
              <span>Plot Comparison Matrix</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Compare Residential Land Parcels Side-by-Side
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Analyze pricing per cent, road widths, dimensions, and legal approvals across up to 3 plots.
            </p>
          </div>

          {comparedPlotIds.length > 0 && (
            <button
              onClick={() => {
                localStorage.removeItem('compare_plots');
                setComparedPlotIds([]);
              }}
              className="text-xs font-semibold text-rose-700 hover:text-rose-900 underline self-start sm:self-auto"
            >
              Clear Comparison
            </button>
          )}
        </div>

        {/* Add Plot Selector */}
        {comparedPlotIds.length < 3 && availableToAdd.length > 0 && (
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs mb-8 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-gray-700 flex items-center space-x-1.5">
              <Plus className="w-4 h-4 text-emerald-700" />
              <span>Add another plot to compare ({3 - comparedPlotIds.length} slot available):</span>
            </span>

            <div className="flex items-center space-x-2">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    addPlot(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="px-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Select a plot to add...</option>
                {availableToAdd.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} ({p.areaCents} Cents - {p.priceDisplay})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {selectedPlots.length > 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 sm:p-5 w-48 font-bold text-gray-500 uppercase tracking-wider text-[11px]">
                      Parameter / Spec
                    </th>
                    {selectedPlots.map((plot) => (
                      <th key={plot.id} className="p-4 sm:p-5 min-w-[260px] max-w-[320px] align-top relative">
                        <button
                          onClick={() => removePlot(plot.id)}
                          className="absolute top-3 right-3 p-1 rounded-full bg-gray-100 hover:bg-rose-100 text-gray-500 hover:text-rose-600 transition-colors"
                          title="Remove plot"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>

                        <div className="pr-6 space-y-1.5">
                          <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                            {plot.uniquePropertyId || plot.layoutPlotNumber}
                          </span>
                          <h3 className="font-bold text-gray-900 text-sm leading-snug">
                            {plot.title}
                          </h3>
                          <div className="text-lg font-black text-emerald-800">
                            {plot.priceDisplay}
                          </div>
                          <div className="flex items-center space-x-1 text-[11px] text-gray-500">
                            <MapPin className="w-3 h-3 text-emerald-700" />
                            <span>{plot.location}</span>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Plot Area (Cents &amp; Sq.Ft)</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 font-extrabold text-gray-900">
                        {p.areaCents} Cents ({p.areaSqFt} sq.ft)
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Price per Sq.Ft / Cent</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 font-semibold text-emerald-800">
                        ₹{p.pricePerSqFt} / sq.ft • ₹{((p.pricePerCent || 0) / 100000).toFixed(2)} Lakhs/Cent
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Boundary Dimensions</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 font-semibold text-gray-800">
                        {p.dimensions}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Vastu Facing</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 font-semibold text-gray-900">
                        {p.facing} Facing
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Road Width &amp; Type</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 font-semibold text-gray-900">
                        {p.roadWidth}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Corner Plot Status</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4">
                        {p.isCornerPlot ? (
                          <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                            Yes (Dual Road Frontage)
                          </span>
                        ) : (
                          <span className="text-gray-500">Regular Plot</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Government Approval</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 font-bold text-emerald-800">
                        <span className="inline-flex items-center space-x-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{p.approval}</span>
                        </span>
                        <div className="text-[10px] text-gray-400 font-normal mt-0.5">
                          {p.approvalNumber}
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Revenue Patta Status</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 font-semibold text-gray-900">
                        {p.pattaStatus}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Groundwater Depth</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 text-gray-700">
                        {p.waterAvailability || 'Sweet water at 22-25 ft'}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Availability Status</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            p.status === 'Available'
                              ? 'bg-emerald-100 text-emerald-800'
                              : p.status === 'Fast Selling'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Actions Row */}
                  <tr className="bg-gray-50/50">
                    <td className="p-4 font-bold text-gray-500 bg-gray-50">Direct Action</td>
                    {selectedPlots.map((p) => (
                      <td key={p.id} className="p-4 space-y-2">
                        <NextLink
                          href={`/plots/${p.slug}`}
                          className="block w-full text-center py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold shadow-xs transition-colors"
                        >
                          View Full Land Details
                        </NextLink>
                        <a
                          href={`https://wa.me/919842155678?text=${encodeURIComponent(
                            `Hello Plot 4 Tuty, I am comparing ${p.title} (${p.uniquePropertyId || p.id}). Please share more details.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-1.5 px-3 bg-white border border-gray-300 hover:border-emerald-600 text-emerald-800 rounded-xl font-semibold transition-colors"
                        >
                          Enquire on WhatsApp
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-md mx-auto space-y-4">
            <Scale className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">No Plots Selected for Comparison</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Explore plots from our marketplace and click the &ldquo;Compare&rdquo; scale icon to analyze them side-by-side.
            </p>
            <NextLink
              href="/plots"
              className="inline-block py-2.5 px-5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold transition-all"
            >
              Browse Plots
            </NextLink>
          </div>
        )}
      </div>
    </div>
  );
}
