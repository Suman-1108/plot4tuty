import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | PLOT FOR THOOTHUKUDI',
  description: 'Terms of Service for PLOT FOR THOOTHUKUDI real estate marketplace.',
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16 bg-[#F4F5F0] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <div className="border-b border-gray-200 pb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Terms &amp; Conditions
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Terms of Service
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Last updated: March 2026 • PLOT FOR THOOTHUKUDI Marketplace
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the PLOT FOR THOOTHUKUDI website and mobile portals, you agree to comply with and be bound by these Terms of Service. If you do not agree, you must discontinue using our marketplace.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">2. Marketplace Role &amp; Property Information</h2>
            <p>
              PLOT FOR THOOTHUKUDI provides a curated digital marketplace connecting residential land buyers with landowners, promoters, and developers in Thoothukudi district, Tamil Nadu. While we enforce strict legal title, Patta, and DTCP verification standards, buyers are strongly encouraged to conduct independent legal verification of original parent deeds prior to executing registration.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">3. Seller Subscription Terms &amp; Quotas</h2>
            <p>
              Sellers subscribing to Starter, Growth, or Developer Pro plans are granted permissions to publish up to their active listing limit. Listing accounts are monitored for authentic property photographs and genuine survey numbers. Fraudulent or misrepresentative listings are suspended immediately without refund.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">4. Payment, Fees &amp; Invoices</h2>
            <p>
              All seller subscription fees are quoted in Indian Rupees (INR) and are subject to 18% Goods and Services Tax (GST). All successful subscription payments generate official GST tax invoices downloadable in the Seller Portal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any legal dispute shall be subject to the exclusive jurisdiction of the competent civil courts in Thoothukudi, Tamil Nadu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
