'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Search,
  MapPin,
  CheckCircle2,
  Phone,
  FileCheck,
  Send,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers
} from 'lucide-react';

export default function Hero() {
  const router = useRouter();

  // Search Bar State
  const [locality, setLocality] = useState('all');
  const [budget, setBudget] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Top Lead Form State (Aura Phase II style lead box)
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    locality: 'Tharuvaikulam',
    budget: 'under-15',
  });
  const [submittingLead, setSubmittingLead] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (locality !== 'all') params.set('location', locality);
    if (budget !== 'all') params.set('budgetRange', budget);
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    router.push(`/plots?${params.toString()}`);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;

    setSubmittingLead(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadForm.name,
          phone: leadForm.phone,
          preferredLocation: leadForm.locality,
          budget: leadForm.budget,
          message: `Hero enquiry: Requesting plot pricing and layout masterplan for ${leadForm.locality} with budget ${leadForm.budget}.`,
          enquiryType: 'Price Quote',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setLeadSuccess(true);
        if (data.whatsappUrl) {
          // Open WhatsApp in new tab for direct consultation
          window.open(data.whatsappUrl, '_blank');
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmittingLead(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[660px] lg:min-h-[720px] flex items-center bg-[#0C1E14]">
      {/* 1. Authentic Aerial Plotted Layout Drone Photography */}
      <div className="absolute inset-0">
        <Image
          src="/images/plots/aerial-layout-grid.jpg"
          alt="Aerial view of DTCP approved plotted residential land in Thoothukudi, Tamil Nadu"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        {/* Editorial Emerald Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E14]/95 via-[#0C1E14]/85 to-[#0C1E14]/70 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E14] via-transparent to-black/40"></div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Headline & Search (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Verified Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>EXCLUSIVE TO THOOTHUKUDI DISTRICT</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>DTCP Approved &amp; 100% Clear Patta</span>
              </span>
            </div>

            {/* Main Editorial Headline (Aura Phase II inspired) */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Land That Grows in Value<span className="text-emerald-400">.</span> <br />
                <span className="text-emerald-200 text-2xl sm:text-4xl lg:text-4xl font-extrabold">
                  Premium Residential Plots in Thoothukudi
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl font-normal pt-1">
                Verified residential land parcels in Tharuvaikulam, Millerpuram, Korampallam, and Harbour Expressway. Direct tar road access, sweet groundwater, and immediate registration.
              </p>
            </div>

            {/* Quick Metrics Bar (Aura style highlights) */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <div className="text-lg sm:text-xl font-black text-emerald-300">₹4.10 L</div>
                <div className="text-[11px] text-gray-300">Starting Plot Price</div>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <div className="text-lg sm:text-xl font-black text-white">36 &amp; 40 Ft</div>
                <div className="text-[11px] text-gray-300">Tar Layout Roads</div>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <div className="text-lg sm:text-xl font-black text-emerald-300">100%</div>
                <div className="text-[11px] text-gray-300">Patta Guaranteed</div>
              </div>
            </div>

            {/* Search Filter Strip */}
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/30 max-w-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                <div className="sm:col-span-5 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-700" />
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    <option value="all">All Thoothukudi Corridors</option>
                    <option value="Tharuvaikulam">Tharuvaikulam (ECR)</option>
                    <option value="Millerpuram">Millerpuram</option>
                    <option value="Korampallam">Korampallam (Collectorate)</option>
                    <option value="Harbour">Harbour Express Highway</option>
                    <option value="Palayamkottai">Palayamkottai Road</option>
                  </select>
                </div>

                <div className="sm:col-span-4">
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    <option value="all">Any Budget Range</option>
                    <option value="under-10">Under ₹10 Lakhs</option>
                    <option value="10-20">₹10 L – ₹20 Lakhs</option>
                    <option value="20-35">₹20 L – ₹35 Lakhs</option>
                    <option value="above-35">Above ₹35 Lakhs</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Aura Phase II Style Lead Capture Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600"></div>

              <div className="text-center mb-5">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-1.5">
                  Direct Promoter Enquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  Check Plot Pricing &amp; Avail Best Offer
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Get official DTCP masterplan, price breakdown, and site visit booking.
                </p>
              </div>

              {leadSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Our verified Thoothukudi land coordinator is contacting you right away. A detailed brochure and price list have been prepared.
                  </p>
                  <button
                    onClick={() => setLeadSuccess(false)}
                    className="text-xs text-emerald-800 font-semibold underline hover:text-emerald-900"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Ganesan"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98421 55678"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="w-full pl-11 pr-3.5 py-2.5 text-xs text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Preferred Area
                      </label>
                      <select
                        value={leadForm.locality}
                        onChange={(e) => setLeadForm({ ...leadForm, locality: e.target.value })}
                        className="w-full px-2.5 py-2.5 text-xs text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                      >
                        <option value="Tharuvaikulam">Tharuvaikulam</option>
                        <option value="Millerpuram">Millerpuram</option>
                        <option value="Korampallam">Korampallam</option>
                        <option value="Harbour Highway">Harbour Highway</option>
                        <option value="Palayamkottai Road">Palayamkottai Rd</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Budget Range
                      </label>
                      <select
                        value={leadForm.budget}
                        onChange={(e) => setLeadForm({ ...leadForm, budget: e.target.value })}
                        className="w-full px-2.5 py-2.5 text-xs text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                      >
                        <option value="under-10">Under ₹10 Lakhs</option>
                        <option value="10-20">₹10 L – ₹20 Lakhs</option>
                        <option value="20-35">₹20 L – ₹35 Lakhs</option>
                        <option value="above-35">Above ₹35 Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submittingLead}
                    className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-emerald-700/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{submittingLead ? 'Checking Offers...' : 'Check Plot Pricing &amp; Get Blueprint'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-gray-500 text-center flex items-center justify-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instant callback • No spam • Direct seller connection</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
