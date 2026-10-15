import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#DADDD5] text-[#222222] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#DADDD5]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-14 w-14 rounded-full overflow-hidden bg-white border-2 border-[#DADDD5] group-hover:border-[#668F35] shadow-xs shrink-0 transition-all">
                <Image
                  src="/logo-round.png"
                  alt="PLOT 4 TUTY"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-[#222222] leading-none group-hover:text-[#668F35] transition-colors">
                  PLOT 4 TUTY<span className="text-[#668F35]">.</span>
                </span>
                <span className="text-[10px] font-bold text-[#668F35] tracking-widest uppercase mt-1">
                  FIND YOUR LAND. BUILD YOUR FUTURE.
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#666A5D] leading-relaxed max-w-sm">
              Thoothukudi&apos;s premier land discovery platform for DTCP-approved and RERA-registered residential plots. We ensure 100% legal title clearance, transparent registration support, and prime plotted communities.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://wa.me/919842155678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-medium px-3 py-1.5 bg-[#EDF3E4] text-[#53752A] rounded border border-[#668F35]/30 hover:bg-[#668F35] hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Help</span>
              </a>
              <span className="text-xs text-[#666A5D] flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-[#668F35]" />
                <span>Verified Documentation</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#222222] tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#666A5D]">
              <li>
                <Link href="/plots" className="hover:text-[#668F35] transition-colors flex items-center space-x-1">
                  <span>All Plot Listings</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#668F35] transition-colors flex items-center space-x-1">
                  <span>Layout Projects</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#668F35] transition-colors">
                  About Plot 4 Tuty
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#668F35] transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#668F35] transition-colors text-xs text-gray-400">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Prime Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#222222] tracking-wider uppercase">
              Key Locations
            </h4>
            <ul className="space-y-2.5 text-sm text-[#666A5D]">
              <li>
                <Link href="/plots?location=Korampallam" className="hover:text-[#668F35] transition-colors">
                  Korampallam (Collectorate)
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Millerpuram" className="hover:text-[#668F35] transition-colors">
                  Millerpuram (City Center)
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Palayamkottai+Road" className="hover:text-[#668F35] transition-colors">
                  Palayamkottai Road (NH 138)
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Harbour+Bypass+Road" className="hover:text-[#668F35] transition-colors">
                  Harbour Bypass Road
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Muthiapuram" className="hover:text-[#668F35] transition-colors">
                  Muthiapuram & Spic Nagar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#222222] tracking-wider uppercase">
              Thoothukudi Office
            </h4>
            <div className="space-y-3 text-sm text-[#666A5D]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#668F35] shrink-0 mt-0.5" />
                <span>
                  Plot 4 Tuty Property Enclave, Opposite District Collectorate, Palayamkottai Road, Thoothukudi, Tamil Nadu 628101
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#668F35] shrink-0" />
                <a href="tel:+919842155678" className="hover:text-[#222222]">
                  +91 98421 55678
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#668F35] shrink-0" />
                <a href="mailto:enquiry@plot4tuty.com" className="hover:text-[#222222]">
                  enquiry@plot4tuty.com
                </a>
              </div>
              <p className="text-xs text-gray-500 pt-1">
                Mon - Sat: 9:00 AM – 7:30 PM <br />
                Sunday: On-Site Plot Visits by Appointment
              </p>
            </div>
          </div>
        </div>

        {/* Land Measurement Reference Note */}
        <div className="py-6 border-b border-[#DADDD5] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#666A5D]">
          <div className="bg-[#F4F5F0] p-2.5 rounded border border-[#DADDD5]">
            <span className="font-semibold text-[#222222]">1 Cent:</span> 435.6 Sq. Ft. (40.47 Sq. Mtrs)
          </div>
          <div className="bg-[#F4F5F0] p-2.5 rounded border border-[#DADDD5]">
            <span className="font-semibold text-[#222222]">1 Ground:</span> 2,400 Sq. Ft. (~5.51 Cents)
          </div>
          <div className="bg-[#F4F5F0] p-2.5 rounded border border-[#DADDD5]">
            <span className="font-semibold text-[#222222]">1 Acre:</span> 100 Cents (43,560 Sq. Ft.)
          </div>
          <div className="bg-[#F4F5F0] p-2.5 rounded border border-[#DADDD5]">
            <span className="font-semibold text-[#222222]">Legal Verification:</span> DTCP & TNRERA Certified
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#666A5D] space-y-3 sm:space-y-0">
          <p>© 2026 PLOT 4 TUTY. All rights reserved. Tamil Nadu Real Estate Discovery Platform.</p>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-[#222222]">Legal Disclaimers</Link>
            <Link href="/about" className="hover:text-[#222222]">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-[#222222]">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
