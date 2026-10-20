'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SellerProvider, useSeller } from '@/seller/context/SellerContext';
import {
  LayoutDashboard,
  Home,
  PlusCircle,
  MessageSquare,
  CreditCard,
  Receipt,
  UserCheck,
  LogOut,
  ShieldCheck,
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Building,
} from 'lucide-react';

function SellerNavigation() {
  const pathname = usePathname();
  const { seller, subscription, logout, loading } = useSeller();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If on login or register, do not show internal navigation bars
  if (pathname === '/seller/login' || pathname === '/seller/register') {
    return null;
  }

  const navLinks = [
    { name: 'Dashboard', href: '/seller/dashboard', icon: LayoutDashboard },
    { name: 'My Properties', href: '/seller/properties', icon: Home },
    { name: 'Add Plot', href: '/seller/properties/new', icon: PlusCircle },
    { name: 'Buyer Enquiries', href: '/seller/enquiries', icon: MessageSquare },
    { name: 'Subscription', href: '/seller/subscription', icon: CreditCard },
    { name: 'Payments & GST', href: '/seller/payments', icon: Receipt },
    { name: 'Profile & KYC', href: '/seller/profile', icon: UserCheck },
  ];

  const isActive = (href: string) => {
    if (href === '/seller/dashboard' && pathname === '/seller') return true;
    return pathname === href;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      {/* Top Seller Bar */}
      <div className="bg-[#0F291E] text-white px-4 sm:px-6 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-emerald-300 uppercase tracking-wider text-[11px] flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Seller Partner Portal</span>
            </span>
            <span className="text-gray-400">|</span>
            <span className="hidden sm:inline text-gray-300">
              Direct Landowner &amp; Broker Listing Engine
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {seller && (
              <div className="flex items-center space-x-2 text-[11px]">
                <span className="hidden md:inline text-gray-300">Logged in as:</span>
                <span className="font-bold text-white bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-700/60">
                  {seller.name} ({seller.companyName || 'Landowner'})
                </span>
                {seller.isVerified && (
                  <span className="inline-flex items-center text-emerald-400 font-semibold" title="DTCP & KYC Verified Seller">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-0.5" />
                    <span className="hidden lg:inline text-[10px]">Verified</span>
                  </span>
                )}
              </div>
            )}

            <button
              onClick={logout}
              className="inline-flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-[11px]"
              title="Logout from Seller Portal"
            >
              <LogOut className="w-3 h-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Seller Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Identity */}
          <Link href="/seller/dashboard" className="flex items-center space-x-3 group">
            <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white border border-emerald-600/40 shadow-xs shrink-0">
              <Image src="/logo-round.png" alt="PLOT 4 TUTY" fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-base font-black tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors">
                  PLOT 4 TUTY
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded uppercase">
                  Seller Portal
                </span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                Partner Inventory &amp; Leads
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    active
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'text-gray-600 hover:text-emerald-700 hover:bg-gray-100/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Plan badge + Add Plot */}
          <div className="hidden sm:flex items-center space-x-3">
            {subscription && (
              <Link
                href="/seller/subscription"
                className="hidden xl:flex items-center space-x-1.5 text-xs bg-amber-50 text-amber-900 px-3 py-1.5 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors"
                title="Manage Subscription"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-bold">{subscription.planName.split(' ')[0]}</span>
                <span className="text-amber-700">({subscription.listingsUsed}/{subscription.listingLimit} Used)</span>
              </Link>
            )}

            <Link
              href="/seller/properties/new"
              className="inline-flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Plot</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 border border-gray-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-bold ${
                  active
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4 text-emerald-700" />
                <span>{link.name}</span>
              </Link>
            );
          })}

          <div className="pt-2 border-t border-gray-100">
            <Link
              href="/seller/properties/new"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-1.5 w-full bg-emerald-700 text-white py-2 rounded-lg text-xs font-bold"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add New Property Listing</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <SellerProvider>
      <div className="min-h-screen bg-[#F8FAF7] text-[#222222] flex flex-col font-sans">
        <SellerNavigation />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 py-4 px-6 text-center text-xs text-gray-500">
          PLOT FOR THOOTHUKUDI &bull; Seller Partner Management Portal &bull; All Rights Reserved
        </footer>
      </div>
    </SellerProvider>
  );
}
