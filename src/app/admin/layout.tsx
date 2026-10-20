'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { AdminProvider, useAdmin } from '@/admin/context/AdminContext';
import {
  LayoutDashboard,
  Home,
  Users,
  ShieldCheck,
  Building,
  MessageSquare,
  CreditCard,
  Receipt,
  BarChart3,
  Settings,
  LogOut,
  Search,
  Bell,
  Menu,
  X,
  ExternalLink,
  CheckCircle2,
  Lock,
} from 'lucide-react';

function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, loading, logout, stats } = useAdmin();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // If on login page, render clean login view
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Redirect to login if unauthenticated after loading
  if (!loading && !isAuthenticated) {
    if (typeof window !== 'undefined') {
      router.push('/admin/login');
    }
    return (
      <div className="min-h-screen bg-[#0B1510] flex items-center justify-center p-4 text-white text-xs">
        <div className="text-center space-y-3">
          <Lock className="w-8 h-8 text-emerald-400 mx-auto animate-pulse" />
          <p>Redirecting to Administrator Login...</p>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Property Listings', href: '/admin/properties', icon: Home, badge: stats?.totalPlots },
    { name: 'Seller Verification', href: '/admin/sellers', icon: ShieldCheck, badge: stats?.totalSellers },
    { name: 'Users & Buyers', href: '/admin/users', icon: Users },
    { name: 'Layout Projects', href: '/admin/projects', icon: Building },
    { name: 'Buyer Enquiries', href: '/admin/enquiries', icon: MessageSquare, badge: stats?.totalEnquiries },
    { name: 'Subscription Plans', href: '/admin/subscriptions', icon: CreditCard },
    { name: 'Payments & Audit', href: '/admin/payments', icon: Receipt },
    { name: 'Analytics & Reports', href: '/admin/reports', icon: BarChart3 },
    { name: 'Platform Settings', href: '/admin/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/admin/dashboard' && pathname === '/admin') return true;
    return pathname === href;
  };

  const getPageTitle = () => {
    const current = navItems.find((item) => isActive(item.href));
    return current ? current.name : 'Platform Administration';
  };

  return (
    <div className="min-h-screen bg-[#F4F6F2] flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0A1A12] text-white shrink-0 border-r border-emerald-950/80">
        {/* Brand */}
        <div className="p-5 border-b border-emerald-950/80 flex items-center space-x-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white border border-emerald-500/50 shrink-0">
            <Image src="/logo-round.png" alt="PLOT 4 TUTY" fill className="object-cover" />
          </div>
          <div>
            <div className="text-sm font-black tracking-tight text-white flex items-center space-x-1.5">
              <span>PLOT 4 TUTY</span>
              <span className="px-1.5 py-0.2 bg-emerald-500 text-gray-950 text-[9px] font-bold rounded">ADMIN</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
              Marketplace Command Center
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                  active
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-emerald-100/70 hover:bg-emerald-900/40 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-emerald-400'}`} />
                  <span>{item.name}</span>
                </div>
                {item.badge !== undefined && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                      active ? 'bg-white text-emerald-900' : 'bg-emerald-950 text-emerald-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Health status & logout */}
        <div className="p-4 border-t border-emerald-950/80 bg-[#07130D]">
          <div className="flex items-center space-x-2 mb-3 text-[11px] text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Platform Core: Online &amp; Healthy</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 w-full px-3 py-2 text-xs font-bold text-gray-400 hover:text-white hover:bg-red-950/40 rounded-xl transition-colors"
          >
            <LogOut className="w-3.5 h-3.5 text-red-400" />
            <span>Sign Out Administrator</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Admin Top Header */}
        <header className="bg-white border-b border-gray-200 h-16 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-base sm:text-lg font-black text-gray-900">{getPageTitle()}</h1>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-1.5 text-xs text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-bold">Super Admin Session</span>
            </div>

            <button
              onClick={logout}
              className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-500 hover:text-red-600 px-2.5 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Admin View Children */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">{children}</main>
      </div>

      {/* Mobile Drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-black/60" onClick={() => setMobileSidebarOpen(false)}></div>
          <div className="relative w-64 bg-[#0A1A12] text-white flex flex-col z-10">
            <div className="p-4 border-b border-emerald-950 flex items-center justify-between">
              <span className="font-bold text-sm text-emerald-400">Admin Control</span>
              <button onClick={() => setMobileSidebarOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold ${
                      active ? 'bg-emerald-600 text-white' : 'text-emerald-100/70 hover:bg-emerald-900/40'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-emerald-400" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-emerald-950">
              <button
                onClick={logout}
                className="flex items-center space-x-2 w-full text-xs text-red-400 font-bold"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <AdminShell>{children}</AdminShell>
    </AdminProvider>
  );
}
