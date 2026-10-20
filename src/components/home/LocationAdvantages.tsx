'use client';

import { useState } from 'react';
import {
  Plane,
  Train,
  Anchor,
  Building,
  GraduationCap,
  HeartPulse,
  Compass,
  MapPin,
  ExternalLink,
  Car
} from 'lucide-react';

interface LandmarkItem {
  name: string;
  distance: string;
  time: string;
  category: 'transport' | 'healthcare' | 'education' | 'governance';
  description: string;
  mapQuery: string;
}

const LANDMARKS: LandmarkItem[] = [
  {
    name: 'Tuticorin Domestic Airport (TCR / VOFM)',
    distance: '14.5 km',
    time: '18 mins drive',
    category: 'transport',
    description: 'Upcoming runway expansion for A320 night flight operations connecting Chennai, Bengaluru, and Hyderabad.',
    mapQuery: 'Tuticorin Airport, Tamil Nadu'
  },
  {
    name: 'V.O. Chidambaranar Port Trust (Tuticorin Sea Port)',
    distance: '8.5 km',
    time: '12 mins drive',
    category: 'transport',
    description: 'Major container seaport in South India with ₹7,000 Cr Outer Harbour & Green Hydrogen development underway.',
    mapQuery: 'VOC Port Trust, Tuticorin'
  },
  {
    name: 'Thoothukudi Main Railway Junction (TN)',
    distance: '11.0 km',
    time: '15 mins drive',
    category: 'transport',
    description: 'Daily express connectivity to Chennai Egmore, Mysuru, Coimbatore, Tirunelveli, and Mumbai.',
    mapQuery: 'Tuticorin Railway Station'
  },
  {
    name: 'Thoothukudi District Collectorate & Court Complex',
    distance: '7.8 km',
    time: '10 mins drive',
    category: 'governance',
    description: 'Administrative epicenter of Thoothukudi district housing all revenue, registration, and judicial offices.',
    mapQuery: 'Thoothukudi District Collector Office, Korampallam'
  },
  {
    name: 'Government Thoothukudi Medical College & Hospital',
    distance: '9.2 km',
    time: '12 mins drive',
    category: 'healthcare',
    description: 'Multi-specialty 1,000+ bed tertiary government hospital and trauma care center on Kamaraj College Road.',
    mapQuery: 'Government Thoothukudi Medical College'
  },
  {
    name: 'Vikasa School & ICSE Campus',
    distance: '8.0 km',
    time: '11 mins drive',
    category: 'education',
    description: 'Premier English medium ICSE co-educational boarding institution in Millerpuram.',
    mapQuery: 'The Vikasa School, Millerpuram, Thoothukudi'
  },
  {
    name: 'East Coast Road (ECR Thoothukudi – Rameswaram Corridor)',
    distance: '300 meters',
    time: '1 min walk',
    category: 'transport',
    description: 'Scenic 4-lane coastal highway with 24-hour bus service connecting directly into Thoothukudi town.',
    mapQuery: 'East Coast Road, Tharuvaikulam'
  },
  {
    name: 'V.O.C. College of Arts and Science',
    distance: '8.8 km',
    time: '12 mins drive',
    category: 'education',
    description: 'A-Grade accredited institution offering premier collegiate programs in Thoothukudi.',
    mapQuery: 'VOC College, Thoothukudi'
  }
];

export default function LocationAdvantages() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'transport' | 'healthcare' | 'education' | 'governance'>('all');

  const filtered = activeCategory === 'all'
    ? LANDMARKS
    : LANDMARKS.filter((l) => l.category === activeCategory);

  return (
    <section id="locations" className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-extrabold bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300">
            Connectivity &amp; Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Strategic Location Advantages of Thoothukudi
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Every plot in our marketplace is vetted for accurate distance, highway connectivity, and public transport access.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Landmarks', icon: Compass },
            { id: 'transport', label: 'Air, Rail & Port Transport', icon: Plane },
            { id: 'governance', label: 'Collectorate & Govt', icon: Building },
            { id: 'healthcare', label: 'Hospitals & Medical Care', icon: HeartPulse },
            { id: 'education', label: 'Schools & Colleges', icon: GraduationCap },
          ].map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 border ${
                  active
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F9FAF8] rounded-2xl p-5 border border-gray-200 hover:border-emerald-600 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-black text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                    {item.distance}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-gray-900 leading-snug">
                  {item.name}
                </h3>
                <div className="text-[11px] font-semibold text-emerald-800 mt-1 flex items-center space-x-1">
                  <Car className="w-3 h-3" />
                  <span>{item.time}</span>
                </div>

                <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-gray-200/80">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
