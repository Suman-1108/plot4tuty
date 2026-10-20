import Link from 'next/link';
import {
  MapPin,
  Compass,
  ArrowRight,
  ShieldCheck,
  Building,
  Plane,
  Train,
  Anchor,
  Car,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'Thoothukudi Residential Land Locations & Growth Corridors | PLOT 4 TUTY',
  description:
    'Explore prime residential plot locations across Thoothukudi: Korampallam, Millerpuram, Palayamkottai Road, Harbour Express Highway, and Tharuvaikulam ECR corridor.',
};

const PRIME_LOCATIONS = [
  {
    name: 'Korampallam',
    tag: 'Administrative & Collectorate Epicenter',
    description:
      'Home to the Thoothukudi District Collectorate, Sub-Registrar Office, District Combined Court, and government administrative institutions. Rapidly appreciating residential zone with modern wide roads and sweet drinking groundwater.',
    priceRange: '₹6.5L – ₹14L / Cent',
    growthRate: '+14.2% YoY',
    highlights: [
      'District Collectorate & Courts (3-5 mins)',
      'Sub-Registrar Registration Office',
      'Sweet groundwater at 25-30 ft depth',
      'Direct 4-lane bypass road access',
    ],
    plotsCount: '12 Plots Available',
    filterUrl: '/plots?location=Korampallam',
  },
  {
    name: 'Millerpuram',
    tag: 'Premium Core Residential Neighborhood',
    description:
      'Thoothukudi’s most prestigious and established residential locale. Renowned for premier schools like The Vikasa School, multi-specialty hospitals, serene leafy residential streets, and peaceful family lifestyle.',
    priceRange: '₹12L – ₹24L / Cent',
    growthRate: '+11.8% YoY',
    highlights: [
      'The Vikasa School & premier ICSE academies',
      'Private hospitals and healthcare centers',
      'Highest demand for independent villa construction',
      '5 minutes from Tuticorin Old Town',
    ],
    plotsCount: '8 Plots Available',
    filterUrl: '/plots?location=Millerpuram',
  },
  {
    name: 'Palayamkottai Road Corridor',
    tag: 'Major Arterial Highway & Educational Hub',
    description:
      'The primary 4-lane commercial and educational highway connecting Thoothukudi to Tirunelveli. Lined with top engineering colleges, luxury car showrooms, logistics parks, and sprawling DTCP approved residential gated layouts.',
    priceRange: '₹8.5L – ₹18L / Cent',
    growthRate: '+16.5% YoY',
    highlights: [
      'Fastest expanding 4-lane highway belt',
      'VOC Arts & Science College, Kamaraj College',
      'Direct link to Thoothukudi Domestic Airport',
      'Bank branch & ATM density',
    ],
    plotsCount: '15 Plots Available',
    filterUrl: '/plots?location=Palayamkottai',
  },
  {
    name: 'Tharuvaikulam (ECR Corridor)',
    tag: 'East Coast Highway & Beachside Appreciation',
    description:
      'Peaceful coastal corridor on the East Coast Road with fresh sea breezes, lush coconut groves, and booming tourism/resort investment potential. Ideal for long-term high ROI land banking and holiday homes.',
    priceRange: '₹3.8L – ₹7.5L / Cent',
    growthRate: '+18.0% YoY',
    highlights: [
      'Direct East Coast Road (ECR) frontage',
      'Scenic clean environment with high water table',
      'Low entry ticket size for first-time buyers',
      'Direct state highway bus routes',
    ],
    plotsCount: '10 Plots Available',
    filterUrl: '/plots?location=Tharuvaikulam',
  },
  {
    name: 'Harbour Express Bypass & VOC Port Hub',
    tag: 'Industrial Growth & Logistics Heartland',
    description:
      'Directly adjacent to the ₹7,000 Cr VOC Port Outer Harbour and Green Hydrogen export corridor. Massive employment generation creates consistent rental yields and commercial plot appreciation.',
    priceRange: '₹5.5L – ₹11L / Cent',
    growthRate: '+15.1% YoY',
    highlights: [
      'VOC Container Terminal & Port Trust (10 mins)',
      'Upcoming Green Ammonia & Industrial SEZ',
      'Heavy container vehicle free bypass routes',
      'Ideal for warehouse and residential rental plots',
    ],
    plotsCount: '7 Plots Available',
    filterUrl: '/plots?location=Harbour',
  },
  {
    name: 'Ettayapuram Road & North Corridor',
    tag: 'Affordable Gated Layouts & Outer Ring',
    description:
      'The gateway to northern Tamil Nadu, offering well-demarcated DTCP approved plotted layouts with wide concrete roads, LED street lights, and clear individual patta documentation at budget-friendly price points.',
    priceRange: '₹4.2L – ₹8.0L / Cent',
    growthRate: '+13.0% YoY',
    highlights: [
      'Outer ring road connectivity',
      'Upcoming industrial warehousing zone',
      'DTCP layout approval with full amenities',
      'Easy bank financing with up to 90% loan',
    ],
    plotsCount: '9 Plots Available',
    filterUrl: '/plots?location=Ettayapuram',
  },
];

export default function LocationsPage() {
  return (
    <div className="bg-[#F4F5F0] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Locations &amp; Corridors</span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-[#14532D] to-[#0F291E] rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
            <Compass className="w-80 h-80 text-white" />
          </div>
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
              <Compass className="w-3.5 h-3.5" />
              <span>Thoothukudi Real Estate Guide</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Prime Residential Locations &amp; Growth Corridors in Thoothukudi
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
              Every plotted layout in our marketplace is verified for revenue survey numbers, DTCP approval, flood-safety elevation, sweet drinking water availability, and proximity to major highways.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-emerald-200">
              <span className="flex items-center space-x-1.5 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% DTCP Approved</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Clear Individual Patta</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>High Capital Appreciation</span>
              </span>
            </div>
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {PRIME_LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-2xl border border-[#DADDD5] p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {loc.name}
                      </h3>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        {loc.growthRate}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {loc.plotsCount}
                  </span>
                </div>

                <p className="text-xs font-semibold text-emerald-900 mb-2">
                  {loc.tag}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {loc.description}
                </p>

                <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 mb-4">
                  <div className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-1">
                    Indicative Price Range
                  </div>
                  <div className="text-lg font-black text-emerald-800">
                    {loc.priceRange}
                  </div>
                </div>

                <div className="space-y-1.5 mb-6">
                  {loc.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={loc.filterUrl}
                className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-xs"
              >
                <span>Explore Plots in {loc.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Connectivity Infographic Box */}
        <div className="bg-white rounded-2xl border border-[#DADDD5] p-8 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-emerald-800 font-extrabold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Strategic Transport Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Why Thoothukudi Is Tamil Nadu’s Fastest Growing Land Market
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#F4F5F0] border border-gray-200">
              <Plane className="w-6 h-6 text-emerald-700 mb-2" />
              <h4 className="text-sm font-bold text-gray-900">Tuticorin Airport (TCR)</h4>
              <p className="text-xs text-gray-600 mt-1">
                Active expansion with 3,115m runway for A320 night flight operations to Chennai &amp; Bengaluru.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#F4F5F0] border border-gray-200">
              <Anchor className="w-6 h-6 text-emerald-700 mb-2" />
              <h4 className="text-sm font-bold text-gray-900">VOC Deep Sea Port</h4>
              <p className="text-xs text-gray-600 mt-1">
                ₹7,000 Cr outer harbour project and India&apos;s premier Green Hydrogen coastal export hub.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#F4F5F0] border border-gray-200">
              <Train className="w-6 h-6 text-emerald-700 mb-2" />
              <h4 className="text-sm font-bold text-gray-900">Railway Expansion</h4>
              <p className="text-xs text-gray-600 mt-1">
                Direct electrified double line express trains to Chennai Egmore, Coimbatore, and Mysuru.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#F4F5F0] border border-gray-200">
              <Car className="w-6 h-6 text-emerald-700 mb-2" />
              <h4 className="text-sm font-bold text-gray-900">4-Lane Highway Grid</h4>
              <p className="text-xs text-gray-600 mt-1">
                Direct NH-138, NH-7A, and ECR coastal corridors ensuring rapid intra-city transit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
