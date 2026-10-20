'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  ArrowRight,
  Heart,
  Scale,
  User,
  Search,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    // Check saved plots count from localStorage
    try {
      const saved = JSON.parse(localStorage.getItem('saved_plots') || '[]');
      setSavedCount(Array.isArray(saved) ? saved.length : 0);
    } catch {
      setSavedCount(0);
    }
  }, [pathname]);

  // Customer navigation links matching prompt requirements
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Search', href: '/plots' },
    { name: 'Projects', href: '/projects' },
    { name: 'Compare', href: '/compare' },
    { name: 'Locations', href: '/locations' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F4F5F0]/95 backdrop-blur-md border-b border-[#DADDD5]">
      {/* Top Utility Bar (Customer Trust & Quick Contact) */}
      <div className="bg-[#14532D] text-[#F0FDF4] text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 sm:space-x-6 text-[11px] sm:text-xs">
            <span className="flex items-center space-x-1.5 text-emerald-100">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium">100% DTCP Approved &amp; Verified Residential Plots in Thoothukudi, Tamil Nadu</span>
            </span>
            <span className="hidden md:inline text-emerald-300/50">|</span>
            <span className="hidden md:inline text-emerald-200">Palayamkottai Road • Millerpuram • ECR Corridor</span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <a
              href="tel:+919842155678"
              className="flex items-center space-x-1.5 text-emerald-100 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>+91 98421 55678</span>
            </a>

            <div className="hidden sm:flex items-center space-x-3 border-l border-emerald-700/60 pl-4">
              <Link
                href="/account"
                className="flex items-center space-x-1 text-emerald-200 hover:text-white transition-colors"
              >
                <User className="w-3 h-3 text-emerald-300" />
                <span>Buyer Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center space-x-3 group py-1">
            <div className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-full overflow-hidden bg-white border-2 border-emerald-600/30 group-hover:border-emerald-600 shadow-sm transition-all duration-200 group-hover:scale-105 shrink-0">
              <Image
                src="/logo-round.png"
                alt="PLOT FOR THOOTHUKUDI"
                fill
                priority
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#111827] leading-none group-hover:text-emerald-700 transition-colors">
                  PLOT 4 TUTY
                </span>
                <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  TN RERA / DTCP
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#4B5563] tracking-wider uppercase mt-1">
                RESIDENTIAL LAND MARKETPLACE • THOOTHUKUDI
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold transition-all relative rounded-full ${
                    active
                      ? 'text-emerald-900 font-bold bg-emerald-100/60'
                      : 'text-gray-700 hover:text-emerald-800 hover:bg-gray-200/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-emerald-600 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Wishlist Link */}
            <Link
              href="/account"
              className="relative p-2 text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
              title="Saved Plots"
            >
              <Heart className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </Link>

            {/* Compare Link */}
            {/* <Link
              href="/compare"
              className="p-2 text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
              title="Compare Plots"
            >
              <Scale className="w-4 h-4" />
            </Link> */}

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/919842155678?text=Hello%20Plot%20for%20Thoothukudi,%20I%20am%20interested%20in%20verified%20residential%20plots."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-full transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Find Your Plot CTA Button */}
            <Link
              href="/plots"
              className="inline-flex items-center space-x-1.5 px-4.5 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-full transition-all shadow-sm shadow-emerald-700/20"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Find Your Plot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="https://wa.me/919842155678"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-gray-800 hover:bg-gray-200 border border-gray-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4F5F0] border-b border-[#DADDD5] px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive(link.href)
                    ? 'bg-emerald-100/80 text-emerald-900 border-l-4 border-emerald-700'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs px-2">
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center space-x-1.5 p-2 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold"
            >
              <User className="w-3.5 h-3.5 text-emerald-700" />
              <span>Buyer Account</span>
            </Link>
            <Link
              href="/compare"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center space-x-1.5 p-2 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold"
            >
              <Scale className="w-3.5 h-3.5 text-emerald-700" />
              <span>Compare ({savedCount})</span>
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/plots"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold shadow-md"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Find Your Plot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
