'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Maximize2, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PlotItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  areaCents: string;
  areaSqFt: string;
  ratePerSqft: string;
  price: string;
  image: string;
  badge: string;
  facing: string;
  roadWidth: string;
}

const featuredListings: PlotItem[] = [
  {
    id: 'plot-tkd-01',
    slug: 'ap-rajan-garden-plot-07-compact-villa',
    title: 'AP Rajan Garden – Plot #07',
    location: 'Tharuvaikulam, ECR Corridor',
    areaCents: '1.48 Cents',
    areaSqFt: '645 sq.ft',
    ratePerSqft: '₹635 / sq.ft',
    price: '₹ 4.10 Lakhs',
    image: '/images/plots/demarcated-plot.jpg',
    badge: 'Panchayat Approved',
    facing: 'East Facing',
    roadWidth: '36 ft Tar Road'
  },
  {
    id: 'plot-tkd-02',
    slug: 'ap-rajan-garden-plot-30-prime-residential',
    title: 'AP Rajan Garden – Plot #30',
    location: 'Tharuvaikulam, Thoothukudi',
    areaCents: '2.64 Cents',
    areaSqFt: '1,148 sq.ft',
    ratePerSqft: '₹631 / sq.ft',
    price: '₹ 7.25 Lakhs',
    image: '/images/plots/ready-to-build-plot.jpg',
    badge: 'Fast Selling',
    facing: 'South Facing',
    roadWidth: '36 ft Tar Road'
  },
  {
    id: 'plot-tkd-03',
    slug: 'ap-rajan-garden-corner-plot-76',
    title: 'AP Rajan Garden – Corner Plot #76',
    location: 'Tharuvaikulam Main Avenue',
    areaCents: '4.95 Cents',
    areaSqFt: '2,156 sq.ft',
    ratePerSqft: '₹630 / sq.ft',
    price: '₹ 13.60 Lakhs',
    image: '/images/plots/corner-plot-avenue.jpg',
    badge: 'Corner Plot',
    facing: 'North-East',
    roadWidth: '40 & 36 ft Roads'
  },
  {
    id: 'plot-tkd-04',
    slug: 'pearl-city-enclave-plot-14-millerpuram',
    title: 'Pearl City Enclave – Plot #14',
    location: 'Millerpuram Upscale Area',
    areaCents: '3.00 Cents',
    areaSqFt: '1,307 sq.ft',
    ratePerSqft: '₹1,606 / sq.ft',
    price: '₹ 21.00 Lakhs',
    image: '/images/plots/aerial-layout-grid.jpg',
    badge: 'DTCP Approved',
    facing: 'North Facing',
    roadWidth: '30 ft Paver Road'
  },
];

export default function ExploreCategories() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              VERIFIED RESIDENTIAL PARCELS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-1">
              Featured Land Parcels Ready for Registration
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Explore authentic plot photographs, clear dimensions, and verified approval numbers.
            </p>
          </div>
          <Link
            href="/plots"
            className="mt-3 sm:mt-0 inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <span>Browse All {featuredListings.length}+ Plots</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((plot) => (
            <Link
              key={plot.id}
              href={`/plots/${plot.slug}`}
              className="group bg-[#F9FAF8] rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-600 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Authentic Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={plot.image}
                    alt={plot.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-emerald-700 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                    {plot.badge}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {plot.facing}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center space-x-1 text-[11px] text-gray-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{plot.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {plot.title}
                  </h3>

                  <div className="mt-3 pt-3 border-t border-gray-200 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-semibold">Area</span>
                      <div className="font-extrabold text-gray-900">{plot.areaCents}</div>
                      <div className="text-[10px] text-gray-500">{plot.areaSqFt}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-semibold">Road Width</span>
                      <div className="font-bold text-gray-900">{plot.roadWidth}</div>
                      <div className="text-[10px] text-emerald-700 font-semibold">{plot.ratePerSqft}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Strip */}
              <div className="px-4 sm:px-5 py-3 bg-white border-t border-gray-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold block leading-none">
                    Total Price
                  </span>
                  <span className="text-base font-black text-emerald-800">
                    {plot.price}
                  </span>
                </div>
                <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
