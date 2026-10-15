'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageSquare, ShieldCheck, ArrowRight, Compass } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Residential Plots', href: '/plots' },
    { name: 'Projects & Layouts', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F4F5F0]/95 backdrop-blur-md border-b border-[#DADDD5]">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-[#1F271B] text-[#F4F5F0] text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-gray-300">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B7E436]"></span>
              <span>100% DTCP Approved &amp; TNRERA Verified Plots in Thoothukudi, Tamil Nadu</span>
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">Office: Palayamkottai Road, Thoothukudi</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="tel:+919842155678"
              className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B7E436]" />
              <span>+91 98421 55678</span>
            </a>
            <Link
              href="/admin"
              className="flex items-center space-x-1 text-gray-400 hover:text-white text-xs transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation (Clean Pill Style matching Reference) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Round Logo + Brand Title */}
          <Link href="/" className="flex items-center space-x-3 group py-1">
            <div className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-full overflow-hidden bg-white border-2 border-[#DADDD5] group-hover:border-[#668F35] shadow-xs transition-all duration-200 group-hover:scale-105 shrink-0">
              <Image
                src="/logo-round.png"
                alt="PLOT 4 TUTY"
                fill
                priority
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-[#222222] leading-none group-hover:text-[#668F35] transition-colors">
                PLOT 4 TUTY<span className="text-[#668F35]">.</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#666A5D] tracking-wider uppercase mt-1">
                FIND YOUR LAND. BUILD YOUR FUTURE.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with subtle active underline */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs lg:text-sm font-semibold transition-all relative ${
                    active
                      ? 'text-[#222222] font-bold'
                      : 'text-[#55594D] hover:text-[#222222] hover:bg-[#EAECE4] rounded-full'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#668F35] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button (Clean Pill with Arrow matching reference) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/919842155678?text=Hello%20Plot%204%20Tuty,%20I%20am%20interested%20in%20residential%20plots."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-[#222222] bg-white border border-[#DADDD5] hover:border-[#668F35] rounded-full transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#668F35]" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/plots"
              className="inline-flex items-center space-x-2 px-5 py-2 text-xs font-bold text-[#1C2618] bg-[#B7E436] hover:bg-[#A3CE2A] rounded-full transition-all shadow-xs"
            >
              <span>Explore Plots</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="https://wa.me/919842155678"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#668F35] bg-white border border-[#DADDD5] rounded-full"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#222222] hover:bg-[#EAECE4] border border-[#DADDD5]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F5F0] border-b border-[#DADDD5] px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive(link.href)
                    ? 'bg-white text-[#222222] border-l-4 border-[#668F35]'
                    : 'text-[#55594D] hover:bg-[#EAECE4]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#DADDD5] space-y-2">
            <Link
              href="/plots"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 bg-[#B7E436] text-[#1C2618] rounded-full text-xs font-bold"
            >
              <span>Explore All Plots</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
