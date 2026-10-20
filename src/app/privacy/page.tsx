import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | PLOT FOR THOOTHUKUDI',
  description: 'Privacy Policy for PLOT FOR THOOTHUKUDI real estate marketplace.',
};

export default function PrivacyPage() {
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
              Legal Compliance
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Last updated: March 2026 • PLOT FOR THOOTHUKUDI Marketplace
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you register for an account, submit a property enquiry, request a site visit, or subscribe to a seller membership plan. This includes your name, mobile phone number, email address, preferred property locality in Thoothukudi, and budget requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">2. How We Use Your Information</h2>
            <p>
              Your contact details are used strictly to coordinate on-site land inspections, deliver certified revenue Patta and DTCP layout drawings, issue subscription tax invoices, and connect you directly with verified land promoters. We never sell or rent your personal information to third-party telemarketers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">3. WhatsApp &amp; SMS Communication</h2>
            <p>
              Where you opt in, we send transactional updates regarding scheduled site visits, layout price revisions, and document verification status via WhatsApp Business. You may revoke consent at any time from your Buyer Portal settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">4. Payment &amp; Transaction Security</h2>
            <p>
              Subscription and listing payments are processed through secure, PCI-DSS compliant payment gateways with server-side signature verification. We do not store credit card or net banking credentials on our local servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">5. Contact Information</h2>
            <p>
              For questions concerning this Privacy Policy, please contact our Legal Officer at <a href="mailto:privacy@plot4tuty.com" className="text-emerald-700 underline font-bold">privacy@plot4tuty.com</a> or visit our office at Palayamkottai Road, Thoothukudi, Tamil Nadu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
