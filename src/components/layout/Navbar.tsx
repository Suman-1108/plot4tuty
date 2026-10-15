'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore Plots', href: '/plots' },
    { name: 'Projects', href: '/projects' },
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
      <div className="hidden lg:block bg-[#222222] text-[#F4F5F0] text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-gray-300">
              <span className="inline-block w-2 h-2 rounded-full bg-[#668F35]"></span>
              <span>100% DTCP Approved & RERA Verified Plots in Thoothukudi</span>
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">Office: Palayamkottai Road, Thoothukudi</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="tel:+919842155678"
              className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#668F35]" />
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

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Round Logo */}
          <Link href="/" className="flex items-center space-x-3 group py-1">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden bg-white border-2 border-[#DADDD5] group-hover:border-[#668F35] shadow-xs transition-all duration-200 group-hover:scale-105 shrink-0">
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
                PLOT 4 TUTY<span className="text-[#668F35]"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#666A5D] tracking-wider uppercase mt-1">
                FIND YOUR LAND. BUILD YOUR FUTURE.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-md ${
                    active
                      ? 'text-[#222222] font-semibold border-b-2 border-[#668F35] rounded-none'
                      : 'text-[#55594D] hover:text-[#222222] hover:bg-[#EAECE4]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/919842155678?text=Hello%20Plot%204%20Tuty,%20I%20am%20interested%20in%20residential%20plots%20in%20Thoothukudi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-medium text-[#222222] bg-[#FFFFFF] border border-[#DADDD5] hover:border-[#668F35] hover:bg-white rounded-md transition-all editorial-shadow"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#668F35]" />
              <span>WhatsApp Chat</span>
            </a>

            <Link
              href="/plots"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-white bg-[#668F35] hover:bg-[#53752A] rounded-md transition-all shadow-sm"
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
              className="p-2 text-[#668F35] bg-white border border-[#DADDD5] rounded-md"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#222222] hover:bg-[#EAECE4] border border-[#DADDD5]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'bg-[#FFFFFF] text-[#222222] border-l-4 border-[#668F35] font-semibold'
                    : 'text-[#55594D] hover:bg-[#EAECE4] hover:text-[#222222]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#DADDD5] space-y-2">
            <a
              href="tel:+919842155678"
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 bg-white border border-[#DADDD5] rounded-md text-sm font-medium text-[#222222]"
            >
              <Phone className="w-4 h-4 text-[#668F35]" />
              <span>Call: +91 98421 55678</span>
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2 px-4 text-xs text-[#666A5D] hover:text-[#222222]"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Management</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
