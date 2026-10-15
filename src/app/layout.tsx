import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'PLOT 4 TUTY — Find Your Land. Build Your Future. | Residential Plots in Thoothukudi',
  description:
    'Discover DTCP-approved and TNRERA-registered residential land plots in Thoothukudi, Tamil Nadu. Korampallam, Millerpuram, Palayamkottai Road, and Harbour Bypass land layouts with 100% clear legal titles.',
  keywords: [
    'Thoothukudi residential plots',
    'Plots in Tuticorin',
    'DTCP approved plots Thoothukudi',
    'Korampallam plots',
    'Millerpuram residential land',
    'Palayamkottai Road plots',
    'Plot 4 Tuty',
    'Tamil Nadu land for sale',
  ],
  authors: [{ name: 'Plot 4 Tuty' }],
  metadataBase: new URL('https://plot4tuty.com'),
  openGraph: {
    title: 'PLOT 4 TUTY — Find Your Land. Build Your Future.',
    description: 'Verified DTCP Approved residential plots in Thoothukudi, Tamil Nadu.',
    url: 'https://plot4tuty.com',
    siteName: 'Plot 4 Tuty',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'PLOT 4 TUTY Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#F4F5F0] text-[#222222] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
