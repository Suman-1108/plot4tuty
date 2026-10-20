'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Compass,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Maximize2,
  Heart,
  Scale,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Plot } from '@/lib/types';

interface PlotCardProps {
  plot: Plot;
}

export default function PlotCard({ plot }: PlotCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('saved_plots') || '[]');
      setIsSaved(saved.includes(plot.id));

      const compared = JSON.parse(localStorage.getItem('compare_plots') || '[]');
      setIsCompared(compared.includes(plot.id));
    } catch {
      // ignore
    }
  }, [plot.id]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const compared = JSON.parse(localStorage.getItem('compare_plots') || '[]');
      let updated: string[];
      if (compared.includes(plot.id)) {
        updated = compared.filter((id: string) => id !== plot.id);
        setIsCompared(false);
      } else {
        if (compared.length >= 3) {
          alert('You can compare a maximum of 3 plots side by side.');
          return;
        }
        updated = [...compared, plot.id];
        setIsCompared(true);
      }
      localStorage.setItem('compare_plots', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  const whatsappUrl = `https://wa.me/919842155678?text=${encodeURIComponent(
    `Hello Plot 4 Tuty, I am interested in ${plot.title} (${plot.layoutPlotNumber}) located at ${plot.location}. Price: ${plot.priceDisplay}. Please share survey documents.`
  )}`;

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-600 transition-all duration-300 flex flex-col h-full relative">
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
        <Image
          src={plot.images[0] || '/images/plots/demarcated-plot.jpg'}
          alt={plot.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 text-[11px] font-bold bg-white/95 backdrop-blur-sm text-gray-900 rounded-full border border-gray-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>{plot.approval}</span>
            </span>

            {plot.isCornerPlot && (
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-amber-500 text-white rounded-full uppercase tracking-wider">
                Corner Plot
              </span>
            )}
          </div>

          {/* Quick Action Heart & Compare Icons */}
          <div className="flex items-center space-x-1">
            <button
              onClick={toggleCompare}
              className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
                isCompared
                  ? 'bg-emerald-700 text-white'
                  : 'bg-white/80 text-gray-700 hover:bg-white'
              }`}
              title={isCompared ? 'Remove from Compare' : 'Add to Compare'}
            >
              <Scale className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={toggleSave}
              className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
                isSaved
                  ? 'bg-rose-500 text-white'
                  : 'bg-white/80 text-gray-700 hover:bg-white'
              }`}
              title={isSaved ? 'Remove from Favourites' : 'Save Plot'}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Property Tag */}
        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md font-mono flex items-center space-x-1">
          <span>{plot.uniquePropertyId || plot.layoutPlotNumber}</span>
          <span>•</span>
          <span className="text-emerald-300">{plot.status}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center space-x-1.5 text-xs text-gray-500 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="truncate">{plot.location}</span>
          </div>

          {/* Title */}
          <Link href={`/plots/${plot.slug}`}>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
              {plot.title}
            </h3>
          </Link>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 my-3 border-y border-gray-100 text-xs">
            <div>
              <span className="text-[10px] text-gray-400 uppercase font-semibold block">Area</span>
              <span className="font-extrabold text-gray-900">{plot.areaCents} Cents</span>
              <span className="text-[10px] text-gray-500 block">{plot.areaSqFt} sq.ft</span>
            </div>

            <div>
              <span className="text-[10px] text-gray-400 uppercase font-semibold block">Facing</span>
              <span className="font-bold text-gray-900">{plot.facing}</span>
              <span className="text-[10px] text-emerald-700 font-semibold block">{plot.roadWidth.split(' ')[0]} ft Road</span>
            </div>

            <div>
              <span className="text-[10px] text-gray-400 uppercase font-semibold block">Rate</span>
              <span className="font-bold text-gray-900">₹{plot.pricePerSqFt}/sqft</span>
              <span className="text-[10px] text-gray-500 block">₹{((plot.pricePerCent || 0) / 100000).toFixed(1)}L / Cent</span>
            </div>
          </div>

          {/* Patta & Seller Verification Status */}
          <div className="flex items-center justify-between text-[11px] text-gray-600 mb-3">
            <span className="flex items-center space-x-1 text-emerald-800 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{plot.pattaStatus.split('&')[0]}</span>
            </span>
            <span className="text-gray-400 text-[10px]">
              By {plot.sellerName?.split(' ')[0] || 'Promoter'}
            </span>
          </div>
        </div>

        {/* Footer Price & CTAs */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] text-gray-400 uppercase font-semibold block">Total Price</span>
              <span className="text-xl font-black text-gray-900">
                {plot.priceDisplay}
              </span>
            </div>
            <span className="text-[11px] text-gray-500 font-medium">
              Ready to Register
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all flex items-center justify-center space-x-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span>WhatsApp</span>
            </a>

            <Link
              href={`/plots/${plot.slug}`}
              className="py-2 px-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all flex items-center justify-center space-x-1 shadow-xs"
            >
              <span>View Land</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
