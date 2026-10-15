'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowLeft, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';
import { Plot } from '@/lib/types';

interface FeaturedPlotsProps {
  plots: Plot[];
}

interface DestinationCard {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  priceFrom: string;
  rating: string;
  reviews: string;
  image: string;
  tag: string;
}

const TOP_DESTINATIONS: DestinationCard[] = [
  {
    id: 'harbour-enclave',
    slug: 'harbour-view-enclave-east-facing-muthiapuram',
    title: 'Harbour Enclave Phase 1',
    subtitle: 'Coastal Sea Breeze • 30ft Blacktop Roads',
    location: 'Harbour Bypass, Thoothukudi',
    priceFrom: '₹18.00 Lakhs',
    rating: '4.9',
    reviews: '42 Verified Plots',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1000&q=80',
    tag: 'VOC Port Corridor',
  },
  {
    id: 'pearl-haven',
    slug: 'pearl-haven-corner-villa-plot-korampallam',
    title: 'Pearl Haven Layout',
    subtitle: 'Opp. Collectorate • Sweet Water @ 35ft',
    location: 'Korampallam, Thoothukudi',
    priceFrom: '₹22.50 Lakhs',
    rating: '5.0',
    reviews: '36 Verified Plots',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    tag: 'Collectorate Enclave',
  },
  {
    id: 'palayam-greens',
    slug: 'palayam-greenfield-residential-plot-nh138',
    title: 'Palayam Greens Enclave',
    subtitle: 'Four-Lane Highway Frontage • Gated Entry',
    location: 'Palayamkottai Road (NH 138)',
    priceFrom: '₹19.50 Lakhs',
    rating: '4.8',
    reviews: '28 Verified Plots',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1000&q=80',
    tag: 'NH 138 Arterial',
  },
  {
    id: 'millerpuram-prime',
    slug: 'millerpuram-central-luxury-plot',
    title: 'Millerpuram Prime Central',
    subtitle: 'Corporation Water • UGD Connected',
    location: 'Millerpuram Urban Hub',
    priceFrom: '₹35.00 Lakhs',
    rating: '4.9',
    reviews: '18 Verified Plots',
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1000&q=80',
    tag: 'Upscale City Center',
  },
];

export default function FeaturedPlots({ plots }: FeaturedPlotsProps) {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : TOP_DESTINATIONS.length - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev < TOP_DESTINATIONS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F4F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rounded Light Card Container (matching "Top Destinations" in screenshot) */}
        <div className="bg-[#EAECE4]/70 border border-[#DADDD5] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 editorial-shadow">
          {/* Header Row: Title on Left, Subtitle on Right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#DADDD5]/80 gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#668F35] block mb-1">
                Prime Investment Zones
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222]">
                Top Land Corridors
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#55594D] max-w-md md:text-right leading-relaxed">
              From island sea-breeze coastal enclaves like Harbour Enclave to Collectorate administrative avenues, discover where your next family land belongs.
            </p>
          </div>

          {/* 4 Portrait Cards Grid (matching the 4 destination cards: El Nido, Baguio, Siargao, Vigan) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
            {TOP_DESTINATIONS.map((dest) => (
              <Link
                key={dest.id}
                href={`/plots/${dest.slug}`}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4.2] border border-[#DADDD5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-4"
              >
                {/* Background Photography */}
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40"></div>

                {/* Top Pill Badge (matching "starts at P4,999" in screenshot) */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[#222222] text-[11px] font-bold border border-white/40 shadow-xs">
                    Starts at {dest.priceFrom.split(' ')[0]}
                  </span>

                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#668F35] text-white text-[10px] font-bold uppercase tracking-wider">
                    {dest.tag}
                  </span>
                </div>

                {/* Bottom Overlay Info (matching destination title, rating & location pin) */}
                <div className="relative z-10 text-white space-y-1">
                  <h3 className="text-base sm:text-lg font-bold leading-tight group-hover:text-[#EDF3E4] transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-[11px] text-gray-200 line-clamp-1">
                    {dest.subtitle}
                  </p>

                  <div className="flex items-center space-x-2 pt-1 text-xs">
                    <span className="flex items-center space-x-1 text-amber-300 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      <span>{dest.rating}</span>
                    </span>
                    <span className="text-gray-300 text-[11px]">({dest.reviews})</span>
                  </div>

                  <div className="flex items-center space-x-1 text-[11px] text-gray-300 pt-0.5">
                    <MapPin className="w-3 h-3 text-[#668F35] shrink-0" />
                    <span className="truncate">{dest.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Bar: "View More" on Left, "< >" Carousel Arrows on Right (matching screenshot) */}
          <div className="flex items-center justify-between pt-4 border-t border-[#DADDD5]/80">
            <Link
              href="/plots"
              className="px-6 py-2.5 rounded-full bg-[#222222] hover:bg-[#668F35] text-white text-xs font-bold transition-all shadow-sm"
            >
              View More Plots
            </Link>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-[#DADDD5] flex items-center justify-center text-[#222222] hover:bg-[#668F35] hover:text-white hover:border-[#668F35] transition-all"
                aria-label="Previous Corridor"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-[#DADDD5] flex items-center justify-center text-[#222222] hover:bg-[#668F35] hover:text-white hover:border-[#668F35] transition-all"
                aria-label="Next Corridor"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
