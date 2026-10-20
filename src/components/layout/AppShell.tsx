'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isSellerPortal = pathname?.startsWith('/seller');
  const isAdminPortal = pathname?.startsWith('/admin');

  // Dedicated interfaces: Seller and Admin portals have their own independent layouts
  if (isSellerPortal || isAdminPortal) {
    return <div className="min-h-screen flex flex-col">{children}</div>;
  }

  // Customer Public Interface
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
