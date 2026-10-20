'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  MapPin,
  CheckCircle,
  MessageSquare,
  ArrowRight,
  Info,
  Layers,
  ZoomIn,
  Compass,
  Calendar,
  IndianRupee,
  PhoneCall,
  Check
} from 'lucide-react';

interface LayoutPlot {
  number: number;
  size: string;
  cents: number;
  facing: string;
  status: 'Available' | 'Reserved' | 'Sold';
  price: string;
  dimensions: string;
  roadWidth: string;
}

const AP_RAJAN_PLOTS: LayoutPlot[] = [
  { number: 1, size: '1506 sq.ft', cents: 3.46, facing: 'East', status: 'Available', price: '₹9.5 Lakhs', dimensions: '30 x 50.2 ft', roadWidth: '40 ft Tar Road' },
  { number: 2, size: '1506 sq.ft', cents: 3.46, facing: 'East', status: 'Sold', price: '₹9.5 Lakhs', dimensions: '30 x 50.2 ft', roadWidth: '40 ft Tar Road' },
  { number: 3, size: '1506 sq.ft', cents: 3.46, facing: 'East', status: 'Available', price: '₹9.5 Lakhs', dimensions: '30 x 50.2 ft', roadWidth: '40 ft Tar Road' },
  { number: 4, size: '1506 sq.ft', cents: 3.46, facing: 'East', status: 'Available', price: '₹9.5 Lakhs', dimensions: '30 x 50.2 ft', roadWidth: '40 ft Tar Road' },
  { number: 5, size: '1506 sq.ft', cents: 3.46, facing: 'East', status: 'Sold', price: '₹9.5 Lakhs', dimensions: '30 x 50.2 ft', roadWidth: '40 ft Tar Road' },
  { number: 6, size: '1506 sq.ft', cents: 3.46, facing: 'East', status: 'Sold', price: '₹9.5 Lakhs', dimensions: '30 x 50.2 ft', roadWidth: '40 ft Tar Road' },
  { number: 7, size: '645 sq.ft', cents: 1.48, facing: 'East', status: 'Available', price: '₹4.10 Lakhs', dimensions: '21.5 x 30 ft', roadWidth: '36 ft Tar Road' },
  { number: 8, size: '1200 sq.ft', cents: 2.75, facing: 'North', status: 'Sold', price: '₹7.60 Lakhs', dimensions: '30 x 40 ft', roadWidth: '36 ft Tar Road' },
  { number: 9, size: '1200 sq.ft', cents: 2.75, facing: 'North', status: 'Available', price: '₹7.60 Lakhs', dimensions: '30 x 40 ft', roadWidth: '36 ft Tar Road' },
  { number: 10, size: '1800 sq.ft', cents: 4.13, facing: 'North-East', status: 'Reserved', price: '₹11.35 Lakhs', dimensions: '36 x 50 ft', roadWidth: '40 ft Corner' },
  { number: 14, size: '1200 sq.ft', cents: 2.75, facing: 'North', status: 'Reserved', price: '₹7.60 Lakhs', dimensions: '30 x 40 ft', roadWidth: '36 ft Tar Road' },
  { number: 18, size: '1306 sq.ft', cents: 3.00, facing: 'North', status: 'Available', price: '₹8.25 Lakhs', dimensions: '33 x 39.6 ft', roadWidth: '36 ft Tar Road' },
  { number: 22, size: '1200 sq.ft', cents: 2.75, facing: 'South', status: 'Sold', price: '₹7.60 Lakhs', dimensions: '30 x 40 ft', roadWidth: '36 ft Tar Road' },
  { number: 26, size: '1500 sq.ft', cents: 3.44, facing: 'South', status: 'Available', price: '₹9.45 Lakhs', dimensions: '30 x 50 ft', roadWidth: '36 ft Tar Road' },
  { number: 30, size: '1148 sq.ft', cents: 2.64, facing: 'South', status: 'Available', price: '₹7.25 Lakhs', dimensions: '30 x 38.3 ft', roadWidth: '36 ft Tar Road' },
  { number: 36, size: '1400 sq.ft', cents: 3.21, facing: 'East', status: 'Available', price: '₹8.85 Lakhs', dimensions: '35 x 40 ft', roadWidth: '36 ft Tar Road' },
  { number: 42, size: '1200 sq.ft', cents: 2.75, facing: 'West', status: 'Reserved', price: '₹7.50 Lakhs', dimensions: '30 x 40 ft', roadWidth: '30 ft Tar Road' },
  { number: 46, size: '1500 sq.ft', cents: 3.44, facing: 'West', status: 'Available', price: '₹9.45 Lakhs', dimensions: '30 x 50 ft', roadWidth: '30 ft Tar Road' },
  { number: 50, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Sold', price: '₹9.45 Lakhs', dimensions: '30 x 50 ft', roadWidth: '30 ft Tar Road' },
  { number: 76, size: '2156 sq.ft', cents: 4.95, facing: 'North-East', status: 'Available', price: '₹13.60 Lakhs', dimensions: '44 x 49 ft', roadWidth: '40 & 36 ft Roads' },
];

export default function MasterplanInteractive() {
  const [selectedLocality, setSelectedLocality] = useState<'Tharuvaikulam' | 'Millerpuram' | 'Harbour Highway' | 'Korampallam'>('Tharuvaikulam');
  const [viewMode, setViewMode] = useState<'interactive' | 'blueprint'>('interactive');
  const [plots, setPlots] = useState<LayoutPlot[]>(AP_RAJAN_PLOTS);
  const [selectedPlot, setSelectedPlot] = useState<LayoutPlot>(AP_RAJAN_PLOTS[6]); // Plot #07 default
  const [siteVisitModal, setSiteVisitModal] = useState(false);
  const [siteVisitDate, setSiteVisitDate] = useState('');
  const [siteVisitSuccess, setSiteVisitSuccess] = useState(false);

  const availableCount = plots.filter((p) => p.status === 'Available').length;
  const reservedCount = plots.filter((p) => p.status === 'Reserved').length;
  const soldCount = plots.filter((p) => p.status === 'Sold').length;

  const handlePlotStatusChange = (newStatus: 'Available' | 'Reserved' | 'Sold') => {
    const updated = plots.map((p) =>
      p.number === selectedPlot.number ? { ...p, status: newStatus } : p
    );
    setPlots(updated);
    setSelectedPlot({ ...selectedPlot, status: newStatus });
  };

  const handleBookSiteVisit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plotId: `plot-tkd-${selectedPlot.number}`,
          plotTitle: `Plot #${selectedPlot.number} (${selectedPlot.cents} Cents)`,
          plotNumber: `Plot #${selectedPlot.number}`,
          name: 'Site Inspection Customer',
          phone: '+91 98421 55678',
          enquiryType: 'Site Visit',
          preferredDate: siteVisitDate || new Date().toISOString().split('T')[0],
          message: `Requesting on-site inspection for Plot #${selectedPlot.number} in ${selectedLocality}.`,
        }),
      });
      setSiteVisitSuccess(true);
      setTimeout(() => {
        setSiteVisitModal(false);
        setSiteVisitSuccess(false);
      }, 2500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#DADDD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Geographic Level 1 & 2 Selector Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-gray-200 gap-4">
          <div>
            {/* Level 1: State & District Navigator */}
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">Tamil Nadu</span>
              <span className="text-gray-400">/</span>
              <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-extrabold">Thoothukudi District</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{selectedLocality} Plotted Layout</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
              Interactive Plotted Layout &amp; Availability Map
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
              Inspect genuine layout drawings, plot boundaries, road frontages, and live booking status across Thoothukudi residential townships.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center space-x-2 bg-gray-100 p-1.5 rounded-xl border border-gray-200 shrink-0">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'interactive'
                  ? 'bg-white text-emerald-900 shadow-xs border border-gray-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              <span>Interactive Grid</span>
            </button>
            <button
              onClick={() => setViewMode('blueprint')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'blueprint'
                  ? 'bg-white text-emerald-900 shadow-xs border border-gray-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ZoomIn className="w-3.5 h-3.5 text-emerald-700" />
              <span>DTCP Blueprint</span>
            </button>
          </div>
        </div>

        {/* Level 2: Locality Corridor Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {(['Tharuvaikulam', 'Millerpuram', 'Harbour Highway', 'Korampallam'] as const).map((loc) => (
            <button
              key={loc}
              onClick={() => setSelectedLocality(loc)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                selectedLocality === loc
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-300'
              }`}
            >
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{loc}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Main 2-Column Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Layout Map Layer (8 Cols) */}
          <div className="lg:col-span-8 bg-[#F4F6F2] rounded-2xl border border-gray-200 p-5 sm:p-7 shadow-sm">
            
            {viewMode === 'blueprint' ? (
              /* Genuine DTCP Survey Drawing Blueprint Mode */
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-700 pb-2 border-b border-gray-200">
                  <div className="flex items-center space-x-2 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Official DTCP Approved Layout Survey Masterplan (Scale 1:500)</span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-mono">Ref: LP/BD1/592A</span>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-gray-300 shadow-inner bg-stone-100">
                  <Image
                    src="/images/plots/dtcp-masterplan-blueprint.jpg"
                    alt="DTCP Approved Layout Map for Residential Plots in Tamil Nadu"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded">
                    Survey Nos. 101/2, 101/3, 101/4 • Thoothukudi
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  * Technical blueprint showing 40-ft and 30-ft internal layout roads, Open Space Reserve (OSR) park area, water line feeds, and demarcated survey parcels.
                </p>
              </div>
            ) : (
              /* Interactive Clickable Plotted Layout Grid Mode */
              <div>
                {/* 40-ft Main Layout Road Strip */}
                <div className="bg-[#111827] text-white text-xs font-bold py-2.5 px-4 rounded-xl mb-4 text-center flex items-center justify-center space-x-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="tracking-wide">
                    40-FT MAIN AVENUE BLACKTOP ROAD (ECR / HIGHWAY CORRIDOR)
                  </span>
                </div>

                {/* Subdivided Plots Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-4">
                  {plots.map((plot) => {
                    const isSelected = selectedPlot.number === plot.number;
                    const isAvailable = plot.status === 'Available';
                    const isReserved = plot.status === 'Reserved';
                    const isSold = plot.status === 'Sold';

                    return (
                      <button
                        key={plot.number}
                        onClick={() => setSelectedPlot(plot)}
                        className={`p-3 rounded-xl border text-left transition-all relative ${
                          isSelected
                            ? 'ring-2 ring-emerald-700 shadow-md border-emerald-600 bg-white scale-[1.02]'
                            : 'bg-white hover:border-emerald-600 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-black text-gray-900">#{plot.number}</span>
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              isAvailable
                                ? 'bg-emerald-500'
                                : isReserved
                                ? 'bg-amber-500'
                                : 'bg-slate-400'
                            }`}
                            title={plot.status}
                          ></span>
                        </div>
                        <div className="text-[11px] font-bold text-emerald-900">
                          {plot.cents} Cents
                        </div>
                        <div className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
                          {plot.facing} • {plot.dimensions.split('x')[0]}
                        </div>
                        <div className="text-[11px] font-black text-gray-800 mt-1">
                          {plot.price}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* 36-ft Internal Cross Road Strip */}
                <div className="bg-gray-200 text-gray-800 text-[11px] font-bold py-2 px-3 rounded-lg mb-4 text-center tracking-wide">
                  36-FT INTERNAL TAR ROAD • TNEB POWER LINES • SWEET WATER PIPELINE
                </div>

                {/* Live Availability Legend */}
                <div className="flex flex-wrap items-center justify-between pt-3 border-t border-gray-200 text-xs">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      <span className="font-semibold text-gray-700">Available ({availableCount})</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span className="font-semibold text-gray-700">Reserved ({reservedCount})</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                      <span className="font-semibold text-gray-700">Sold ({soldCount})</span>
                    </span>
                  </div>

                  <span className="text-[11px] text-gray-500 italic mt-1 sm:mt-0">
                    Click any plot to view dimensions &amp; schedule visit
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Selected Plot Details Inspector (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-emerald-200 p-6 shadow-md relative">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                Plot Inspector
              </span>
              <span
                className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${
                  selectedPlot.status === 'Available'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : selectedPlot.status === 'Reserved'
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-gray-100 text-gray-700 border border-gray-300'
                }`}
              >
                {selectedPlot.status}
              </span>
            </div>

            <div className="py-4">
              <div className="text-3xl font-black text-gray-900">
                Plot #{selectedPlot.number}
              </div>
              <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                {selectedLocality} Residential Plotted Township
              </p>
              <div className="text-2xl font-black text-emerald-700 mt-2">
                {selectedPlot.price}
              </div>
            </div>

            {/* Detailed Spec List */}
            <div className="space-y-2 text-xs border-y border-gray-100 py-3.5">
              <div className="flex justify-between">
                <span className="text-gray-500">Plot Area:</span>
                <span className="font-bold text-gray-900">{selectedPlot.cents} Cents ({selectedPlot.size})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Boundary Dimensions:</span>
                <span className="font-bold text-gray-900">{selectedPlot.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Vastu Facing:</span>
                <span className="font-bold text-gray-900">{selectedPlot.facing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Road Width:</span>
                <span className="font-bold text-gray-900">{selectedPlot.roadWidth}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Legal Title:</span>
                <span className="font-bold text-emerald-700">100% Clear Patta</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Water Depth:</span>
                <span className="font-bold text-gray-900">Sweet Water at 22 ft</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-2">
              <button
                onClick={() => setSiteVisitModal(true)}
                className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Site Visit for Plot #{selectedPlot.number}</span>
              </button>

              <a
                href={`https://wa.me/919842155678?text=${encodeURIComponent(
                  `Hello Plot 4 Tuty, I am interested in Plot #${selectedPlot.number} (${selectedPlot.cents} Cents) in ${selectedLocality}. Price: ${selectedPlot.price}. Please share survey details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

            {/* Authorized Plot Status Updater (Demo / Seller / Admin action) */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <span className="text-[10px] font-bold text-gray-500 uppercase block mb-1">
                Authorized Seller/Admin Quick Status:
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {(['Available', 'Reserved', 'Sold'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => handlePlotStatusChange(st)}
                    className={`px-2 py-1 text-[10px] font-bold rounded border transition-colors ${
                      selectedPlot.status === st
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Site Visit Booking Modal */}
        {siteVisitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
              <h3 className="text-lg font-black text-gray-900 mb-1">
                Schedule On-Site Inspection
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                Selected: Plot #{selectedPlot.number} ({selectedPlot.cents} Cents) in {selectedLocality}.
              </p>

              {siteVisitSuccess ? (
                <div className="text-center py-6 space-y-2">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-900">Site Visit Request Confirmed!</h4>
                  <p className="text-xs text-emerald-700">
                    Our coordinator will call you to confirm your complimentary pickup in Thoothukudi.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookSiteVisit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={siteVisitDate}
                      onChange={(e) => setSiteVisitDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="text-[11px] text-gray-500 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    ✓ Free cab pickup &amp; drop available anywhere within Thoothukudi town.
                    <br />✓ Genuine Patta and survey documents presented on-site.
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSiteVisitModal(false)}
                      className="flex-1 py-2 rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 rounded-lg text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm"
                    >
                      Confirm Schedule
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
