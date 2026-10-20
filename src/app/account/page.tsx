'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plot, Enquiry, User } from '@/lib/types';
import {
  User as UserIcon,
  Heart,
  Calendar,
  Search,
  Bell,
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Trash2,
  ShieldCheck,
  LogOut,
  Sparkles
} from 'lucide-react';

export default function AccountPage() {
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: 'usr-customer-1',
    name: 'K. Arumugam',
    email: 'buyer@thoothukudi.com',
    phone: '+91 98421 98765',
    role: 'customer',
    savedPlotIds: [],
    createdAt: '2026-03-05'
  });

  const [activeTab, setActiveTab] = useState<'saved' | 'enquiries' | 'searches' | 'profile'>('saved');
  const [allPlots, setAllPlots] = useState<Plot[]>([]);
  const [userEnquiries, setUserEnquiries] = useState<Enquiry[]>([]);
  const [savedPlots, setSavedPlots] = useState<Plot[]>([]);
  const [loading, setLoading] = useState(true);

  // Profile Form state
  const [profileName, setProfileName] = useState('K. Arumugam');
  const [profilePhone, setProfilePhone] = useState('+91 98421 98765');
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [profileSaved, setProfileSaved] = useState(false);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [plotsRes, enqRes] = await Promise.all([
        fetch('/api/plots'),
        fetch('/api/enquiries')
      ]);

      const plotsData = await plotsRes.json();
      const enqData = await enqRes.json();

      if (plotsData.success) {
        setAllPlots(plotsData.plots);
        // Get saved IDs from localStorage
        const savedIds: string[] = JSON.parse(localStorage.getItem('saved_plots') || '[]');
        if (savedIds.length === 0 && plotsData.plots.length >= 2) {
          // default demonstration saved plots
          const defaultSaved = [plotsData.plots[0].id, plotsData.plots[1].id];
          localStorage.setItem('saved_plots', JSON.stringify(defaultSaved));
          setSavedPlots(plotsData.plots.filter((p: Plot) => defaultSaved.includes(p.id)));
        } else {
          setSavedPlots(plotsData.plots.filter((p: Plot) => savedIds.includes(p.id)));
        }
      }

      if (enqData.success) {
        setUserEnquiries(enqData.enquiries);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeSavedPlot = (plotId: string) => {
    const savedIds: string[] = JSON.parse(localStorage.getItem('saved_plots') || '[]');
    const updated = savedIds.filter((id) => id !== plotId);
    localStorage.setItem('saved_plots', JSON.stringify(updated));
    setSavedPlots(allPlots.filter((p) => updated.includes(p.id)));
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        name: profileName,
        phone: profilePhone,
      });
    }
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  return (
    <div className="py-10 sm:py-14 bg-[#F4F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* User Welcome Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full bg-emerald-700 text-white font-black text-xl flex items-center justify-center shrink-0">
              {currentUser?.name[0] || 'K'}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black text-gray-900">
                  Welcome, {currentUser?.name}
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase">
                  Verified Buyer
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1 flex flex-wrap items-center gap-3">
                <span>{currentUser?.email}</span>
                <span>•</span>
                <span>{currentUser?.phone}</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">Thoothukudi Resident Account</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/plots"
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
            >
              Browse New Plots
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 border-b border-gray-200 text-xs font-bold mb-8 overflow-x-auto pb-1">
          {[
            { id: 'saved', label: `Saved Favourites (${savedPlots.length})`, icon: Heart },
            { id: 'enquiries', label: `Enquiries & Site Visits (${userEnquiries.length})`, icon: Calendar },
            { id: 'searches', label: 'Saved Corridors & Alerts', icon: Search },
            { id: 'profile', label: 'Profile & Notifications', icon: UserIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 border-b-2 transition-all flex items-center space-x-1.5 shrink-0 ${
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

        {/* Tab 1: Saved Favourites */}
        {activeTab === 'saved' && (
          <div>
            {savedPlots.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedPlots.map((plot) => (
                  <div key={plot.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs relative group">
                    <div className="relative aspect-[16/10] w-full bg-gray-100">
                      <Image
                        src={plot.images[0] || '/images/plots/demarcated-plot.jpg'}
                        alt={plot.title}
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={() => removeSavedPlot(plot.id)}
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 hover:bg-rose-100 text-gray-500 hover:text-rose-600 transition-colors shadow-xs"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{plot.location}</span>
                      </div>

                      <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-1">
                        {plot.title}
                      </h3>

                      <div className="flex justify-between items-baseline pt-2 border-t border-gray-100">
                        <span className="text-base font-black text-gray-900">{plot.priceDisplay}</span>
                        <span className="text-xs text-gray-500 font-semibold">{plot.areaCents} Cents</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <Link
                          href={`/plots/${plot.slug}`}
                          className="py-2 text-center text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors"
                        >
                          View Land
                        </Link>
                        <a
                          href={`https://wa.me/919842155678?text=${encodeURIComponent(
                            `Hello Plot 4 Tuty, I am inquiring about my saved plot ${plot.title}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 text-center text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-md mx-auto space-y-3">
                <Heart className="w-10 h-10 text-gray-300 mx-auto" />
                <h3 className="text-base font-bold text-gray-900">No Saved Plots Yet</h3>
                <p className="text-xs text-gray-500">
                  Tap the heart icon on any plot card to save it for quick review and comparison.
                </p>
                <Link
                  href="/plots"
                  className="inline-block py-2 px-4 rounded-xl text-xs font-bold bg-emerald-700 text-white"
                >
                  Explore Plots
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Enquiries & Site Visits */}
        {activeTab === 'enquiries' && (
          <div className="space-y-4">
            {userEnquiries.map((enq) => (
              <div
                key={enq.id}
                className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                        enq.status === 'Site Visit'
                          ? 'bg-purple-100 text-purple-800'
                          : enq.status === 'Contacted'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {enq.status}
                    </span>
                    <span className="text-[11px] text-gray-400 font-mono">
                      Ref: {enq.id}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      • {new Date(enq.createdAt).toLocaleDateString('en-IN')}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base">
                    {enq.plotTitle || 'Residential Plot Discovery Enquiry'}
                  </h3>

                  <p className="text-xs text-gray-600">
                    &ldquo;{enq.message}&rdquo;
                  </p>

                  {enq.preferredDate && (
                    <div className="flex items-center space-x-1.5 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-lg w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Scheduled Visit Date: {enq.preferredDate}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <a
                    href="tel:+919842155678"
                    className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold flex items-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Call Coordinator</span>
                  </a>

                  <a
                    href={`https://wa.me/919842155678?text=${encodeURIComponent(
                      `Hello Plot 4 Tuty, following up on my enquiry ${enq.id} for ${enq.plotTitle}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Update</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Saved Searches */}
        {activeTab === 'searches' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Tharuvaikulam Budget Plots', query: 'location=Tharuvaikulam&budgetRange=under-10', count: '14 Plots' },
              { title: 'Millerpuram DTCP Gated Layouts', query: 'location=Millerpuram&approval=DTCP', count: '6 Plots' },
              { title: 'Harbour Expressway Commercial/Corner', query: 'location=Harbour&isCorner=true', count: '4 Plots' },
            ].map((search, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{search.title}</h4>
                  <span className="text-xs text-emerald-700 font-semibold">{search.count} Active</span>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Link
                    href={`/plots?${search.query}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                  >
                    <span>Run Search</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Profile & Preferences */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 max-w-xl shadow-xs">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Buyer Profile &amp; Notification Settings
            </h3>

            {profileSaved && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-semibold mb-4 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Preferences updated successfully!</span>
              </div>
            )}

            <form onSubmit={handleProfileUpdate} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Contact Mobile Number
                </label>
                <input
                  type="tel"
                  value={profilePhone}
                  onChange={(e) => setProfilePhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-gray-900 block">WhatsApp Notification Consent</span>
                  <span className="text-[11px] text-gray-500">
                    Receive price drop alerts, DTCP approval notifications, and site inspection confirmations.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={whatsappConsent}
                  onChange={(e) => setWhatsappConsent(e.target.checked)}
                  className="w-4 h-4 text-emerald-700 rounded focus:ring-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="py-2.5 px-5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                Save Settings
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
