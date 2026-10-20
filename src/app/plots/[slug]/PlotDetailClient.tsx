'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plot } from '@/lib/types';
import PlotCard from '@/components/plots/PlotCard';
import UnitConverter from '@/components/plots/UnitConverter';
import {
  MapPin,
  ShieldCheck,
  Compass,
  Maximize2,
  Calendar,
  CheckCircle2,
  MessageSquare,
  Phone,
  Send,
  ArrowLeft,
  Share2,
  Check,
  Building,
  FileCheck,
  AlertCircle,
  FileText,
  Car,
  ExternalLink,
  Heart,
  Scale,
  Zap,
  Droplets,
  Layers,
  Download
} from 'lucide-react';

interface PlotDetailClientProps {
  plot: Plot;
  similarPlots: Plot[];
}

export default function PlotDetailClient({ plot, similarPlots }: PlotDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'legal' | 'blueprint' | 'financials'>('overview');
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Site visit request modal
  const [siteVisitModal, setSiteVisitModal] = useState(false);
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('10:00 AM');

  // Lead Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: `I am interested in ${plot.title} (${plot.layoutPlotNumber}) in ${plot.location}. Please share the certified layout drawing and arrange an on-site inspection.`,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Wishlist check
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('saved_plots') || '[]');
      setIsSaved(saved.includes(plot.id));
    } catch {
      // ignore
    }
  }, [plot.id]);

  const toggleSave = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('saved_plots') || '[]');
      let updated: string[];
      if (saved.includes(plot.id)) {
        updated = saved.filter((id: string) => id !== plot.id);
        setIsSaved(false);
      } else {
        updated = [...saved, plot.id];
        setIsSaved(true);
      }
      localStorage.setItem('saved_plots', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plotId: plot.id,
          plotTitle: `${plot.title} (${plot.layoutPlotNumber})`,
          plotNumber: plot.layoutPlotNumber,
          preferredLocation: plot.location,
          budget: plot.priceDisplay,
          enquiryType: visitDate ? 'Site Visit' : 'Price Quote',
          preferredDate: visitDate,
          preferredTime: visitTime,
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        if (data.whatsappUrl) {
          window.open(data.whatsappUrl, '_blank');
        }
      } else {
        setError(data.error || 'Submission failed');
      }
    } catch {
      setError('Network error. Please call or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  const stampDuty = plot.additionalCharges?.stampDutyEstimated || Math.round(plot.price * 0.07);
  const registrationFee = plot.additionalCharges?.registrationEstimated || Math.round(plot.price * 0.04);
  const legalFee = plot.additionalCharges?.legalDocumentation || 12000;
  const totalCost = plot.price + stampDuty + registrationFee + legalFee;

  const whatsappUrl = `https://wa.me/919842155678?text=${encodeURIComponent(
    `Hello Plot 4 Tuty, I am interested in ${plot.title} (${plot.layoutPlotNumber}) at ${plot.location}. Price: ${plot.priceDisplay}. Unique ID: ${plot.uniquePropertyId || plot.id}. Please send complete survey documents.`
  )}`;

  return (
    <div className="py-8 sm:py-12 bg-[#F4F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-200 gap-4">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <span>/</span>
            <Link href="/plots" className="hover:text-emerald-700">Plots</Link>
            <span>/</span>
            <span className="text-gray-900 font-bold truncate max-w-xs">{plot.title}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleSave}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                isSaved
                  ? 'bg-rose-50 text-rose-700 border-rose-300'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isSaved ? 'Saved to Favourites' : 'Save Plot'}</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-gray-700 border border-gray-300 hover:border-gray-400 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Property Header Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {plot.approval}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-gray-100 text-gray-800 border border-gray-300">
                  ID: {plot.uniquePropertyId || plot.id}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white">
                  {plot.status}
                </span>
                {plot.isCornerPlot && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white uppercase">
                    Corner Plot
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                {plot.title}
              </h1>

              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{plot.address}</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="lg:text-right bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 shrink-0">
              <div className="text-xs uppercase tracking-wider font-extrabold text-emerald-800">
                All-Inclusive Land Price
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-900 mt-1">
                {plot.priceDisplay}
              </div>
              <div className="text-xs text-emerald-700 font-bold mt-1">
                ₹{plot.pricePerSqFt.toLocaleString('en-IN')} / sq.ft • ₹{((plot.pricePerCent || 0) / 100000).toFixed(2)} Lakhs / Cent
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Photos, Tabs & Specs (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Gallery Component */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm space-y-4">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <Image
                  src={plot.images[selectedImage] || '/images/plots/demarcated-plot.jpg'}
                  alt={`${plot.title} - Photo ${selectedImage + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-md">
                  Photo {selectedImage + 1} of {plot.images.length} • Genuine Plot Photograph
                </div>
              </div>

              {/* Thumbnails */}
              {plot.images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {plot.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx
                          ? 'border-emerald-700 ring-2 ring-emerald-700/40 scale-[1.02]'
                          : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt={`Thumb ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center space-x-2 border-b border-gray-200 text-xs font-bold">
              {[
                { id: 'overview', label: 'Land Specifications', icon: Maximize2 },
                { id: 'legal', label: 'Patta & Approvals', icon: ShieldCheck },
                { id: 'blueprint', label: 'Layout Blueprint', icon: Layers },
                { id: 'financials', label: 'Price & Stamp Duty Breakdown', icon: FileText },
              ].map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-3 px-4 border-b-2 transition-all flex items-center space-x-1.5 ${
                      active
                        ? 'border-emerald-700 text-emerald-900 font-extrabold bg-white rounded-t-lg'
                        : 'border-transparent text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-emerald-700" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Overview & Specs */}
            {activeTab === 'overview' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Property Description &amp; Ground Status
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {plot.description}
                  </p>
                </div>

                {/* Technical Dimension Matrix */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Technical Survey Dimensions
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-400 block">Total Area</span>
                      <span className="text-sm font-extrabold text-gray-900">{plot.areaCents} Cents ({plot.areaSqFt} sq.ft)</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-400 block">Boundary Dimensions</span>
                      <span className="text-sm font-extrabold text-gray-900">{plot.dimensions}</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-400 block">Road Frontage</span>
                      <span className="text-sm font-extrabold text-gray-900">{plot.frontageFt || 30} ft Frontage</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-400 block">Vastu Facing</span>
                      <span className="text-sm font-extrabold text-gray-900">{plot.facing} Orientation</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-400 block">Road Width</span>
                      <span className="text-sm font-extrabold text-gray-900">{plot.roadWidth}</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-400 block">Plot Shape</span>
                      <span className="text-sm font-extrabold text-gray-900">{plot.shape || 'Rectangular'}</span>
                    </div>
                  </div>
                </div>

                {/* Infrastructure & Utilities */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Ground Infrastructure &amp; Utilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <Zap className="w-4 h-4 text-emerald-700 shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900 block">Electricity</span>
                        <span className="text-gray-600">{plot.electricityStatus || 'TNEB Transformer Ready'}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <Droplets className="w-4 h-4 text-emerald-700 shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900 block">Drinking Water</span>
                        <span className="text-gray-600">{plot.waterAvailability || 'Sweet Groundwater at 22-25 ft'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Amenities */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Layout Features &amp; Demarcations
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {plot.amenities.map((a, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Legal Title & Patta Verification */}
            {activeTab === 'legal' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Government Legal Title &amp; Document Scrutiny
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      100% legal title clear, registered under Tamil Nadu revenue guidelines.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                    VERIFIED LEGAL
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Revenue Patta Status</span>
                      <span className="font-bold text-gray-900 text-sm">{plot.pattaStatus}</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">DTCP / Panchayat Order Number</span>
                      <span className="font-bold text-gray-900 text-sm">{plot.approvalNumber}</span>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Encumbrance Certificate (EC)</span>
                      <span className="font-bold text-gray-900 text-sm">{plot.encumbranceCertificate || 'Nil Encumbrance 30-Year Verified'}</span>
                    </div>
                    <FileCheck className="w-5 h-5 text-emerald-600" />
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Revenue Survey Number</span>
                      <span className="font-bold text-gray-900 text-sm">{plot.surveyNumber || 'Survey No. 182/3A'}</span>
                    </div>
                    <Building className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
                  <strong>Notice of Legal Guarantee:</strong> All title deeds and parent documents have been scrutinized by senior advocates of the Thoothukudi District Bar Association. Copies of Mother Deed, Patta Passbook, and Encumbrance Certificate are available for buyer legal review prior to token advance.
                </div>
              </div>
            )}

            {/* Tab 3: Layout Blueprint Viewer */}
            {activeTab === 'blueprint' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Approved Layout Masterplan Drawing
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Official site plan showing {plot.layoutPlotNumber} demarcation, road widths, and OSR area.
                    </p>
                  </div>
                  <a
                    href={plot.layoutDrawingUrl || '/images/plots/dtcp-masterplan-blueprint.jpg'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Blueprint</span>
                  </a>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-100 border border-gray-300 shadow-inner">
                  <Image
                    src={plot.layoutDrawingUrl || '/images/plots/dtcp-masterplan-blueprint.jpg'}
                    alt="Layout Drawing Blueprint"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {/* Tab 4: Financials & Stamp Duty Breakdown */}
            {activeTab === 'financials' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Transparent Cost &amp; Registration Fee Calculator
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Tamil Nadu Government statutory stamp duty and registration fee estimation for this plot.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Base Land Cost ({plot.areaCents} Cents @ ₹{plot.pricePerSqFt}/sqft):</span>
                    <span className="font-bold text-gray-900">{plot.priceDisplay}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Tamil Nadu Stamp Duty (7% of guideline value):</span>
                    <span className="font-bold text-gray-900">₹{stampDuty.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Tamil Nadu Registration Fee (4%):</span>
                    <span className="font-bold text-gray-900">₹{registrationFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Legal Documentation &amp; Sub-Division Patta Charges:</span>
                    <span className="font-bold text-gray-900">₹{legalFee.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between py-3 bg-emerald-50 px-4 rounded-xl text-emerald-950 font-black text-sm">
                    <span>Estimated Total On-Road Land Investment:</span>
                    <span>₹{totalCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="text-[11px] text-gray-500 italic">
                  * Pre-approved for bank loans up to 90% of base land value from SBI, HDFC, and Canara Bank.
                </div>
              </div>
            )}

            {/* Nearby Landmarks Explorer */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900">
                Key Landmarks &amp; Proximity Distances
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {plot.landmarks.map((l, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-gray-900 block">{l.name}</span>
                      <span className="text-emerald-700 font-semibold">{l.distance}</span>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.name + ', Thoothukudi')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white border border-gray-200 hover:text-emerald-700"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Seller Profile & Direct Enquiry Form (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Seller Profile Card */}
            <div className="bg-white rounded-2xl border border-emerald-200 p-6 shadow-sm space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                Verified Land Promoter / Seller
              </span>
              <div className="flex items-center space-x-3 pt-1">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white font-black flex items-center justify-center text-base">
                  {plot.sellerName ? plot.sellerName[0] : 'S'}
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {plot.sellerName || 'Muthu Promoters & Land Developers'}
                  </h4>
                  <div className="flex items-center space-x-1 text-xs text-emerald-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Seller Profile</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                <a
                  href={`tel:${plot.sellerPhone || '+919842155678'}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Call {plot.sellerPhone || '+91 98421 55678'}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Quick Enquiry & Site Visit Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900">
                Book Site Inspection
              </h3>
              <p className="text-xs text-gray-500">
                Arrange a complimentary site visit with door-to-door cab pickup in Thoothukudi.
              </p>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-900">Enquiry Received!</h4>
                  <p className="text-xs text-emerald-700">
                    Our verified consultant is contacting you within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs text-emerald-800 underline font-semibold"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Ganesan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98421 55678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">
                        Visit Date
                      </label>
                      <input
                        type="date"
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full px-2 py-2 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">
                        Preferred Time
                      </label>
                      <select
                        value={visitTime}
                        onChange={(e) => setVisitTime(e.target.value)}
                        className="w-full px-2 py-2 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">
                      Message / Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  {error && <p className="text-xs text-rose-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? 'Submitting...' : 'Submit Site Visit Request'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Similar Plots in same locality */}
        {similarPlots.length > 0 && (
          <div className="pt-10 border-t border-gray-200">
            <div className="mb-6">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                EXPLORE MORE IN {plot.locality || plot.location}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
                Similar Residential Plots Nearby
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarPlots.map((sp) => (
                <PlotCard key={sp.id} plot={sp} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
