'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F291E] text-[#DCE6CE] pt-16 pb-10 border-t border-[#1C3D2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1C3D2E]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white border border-emerald-600/40 group-hover:border-emerald-400 shadow-sm shrink-0 transition-all">
                <Image
                  src="/logo-round.png"
                  alt="PLOT FOR THOOTHUKUDI"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  PLOT 4 TUTY<span className="text-emerald-400">.</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-300 tracking-widest uppercase mt-1">
                  FIND YOUR LAND. BUILD YOUR FUTURE.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              The premier subscription-based residential land marketplace dedicated exclusively to Thoothukudi district, Tamil Nadu. Delivering 100% DTCP-approved layouts, Patta-verified plots, and high-growth land investments with transparent documentation.
            </p>

            <div className="flex items-center space-x-2 text-xs text-emerald-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>TN RERA Registered • DTCP Approved • Clear Title Guarantee</span>
            </div>
          </div>

          {/* Key Locality Corridors */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Thoothukudi Corridors
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <Link href="/plots?location=Tharuvaikulam" className="hover:text-white transition-colors">
                  Tharuvaikulam (ECR Corridor)
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Millerpuram" className="hover:text-white transition-colors">
                  Millerpuram Residential
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Korampallam" className="hover:text-white transition-colors">
                  Korampallam Collectorate Hub
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Harbour" className="hover:text-white transition-colors">
                  Harbour Express Highway
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Palayamkottai" className="hover:text-white transition-colors">
                  Palayamkottai Road Corridor
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Ettayapuram" className="hover:text-white transition-colors">
                  Ettayapuram Road Junction
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Directory
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <Link href="/plots" className="hover:text-white transition-colors">
                  Browse All Plots
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Layout Masterplans
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  Compare Land Plots
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Prime Locations &amp; Corridors
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  Buyer Saved Plots &amp; Enquiries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Free Site Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Thoothukudi Office
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/80">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  No. 42/B, Palayamkottai Road, Near Collectorate, Thoothukudi – 628003, Tamil Nadu
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919842155678" className="hover:text-white">
                  +91 98421 55678
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:contact@plot4tuty.com" className="hover:text-white">
                  contact@plot4tuty.com
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 bg-emerald-950/80 border border-emerald-700/50 rounded text-[11px] text-emerald-300">
                  Site Visits: Mon - Sun (7 AM - 6 PM)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-emerald-200/60 space-y-4 sm:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} PLOT FOR THOOTHUKUDI. All rights reserved. TN RERA &amp; DTCP compliant residential land marketplace.
          </p>
          <div className="flex items-center space-x-6 text-xs">
            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact &amp; Support
            </Link>
            <Link href="/locations" className="hover:text-white">
              Locations
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
