import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, MapPin, CheckCircle, FileCheck, Users, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About PLOT FOR THOOTHUKUDI | Trusted Residential Land Experts',
  description:
    'PLOT FOR THOOTHUKUDI is the premier residential land marketplace dedicated exclusively to Thoothukudi district, Tamil Nadu. DTCP approved layouts, verified legal titles, and sweet groundwater.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Zero-Brokerage Direct Marketplace',
      desc: 'We connect land buyers directly to approved plotted layouts with clear per-cent and per-sq.ft pricing, eliminating inflated third-party agent markups.',
    },
    {
      title: '30-Year Title Search & Patta Scrutiny',
      desc: 'Every layout parcel is scrutinized by independent property legal advocates to verify unencumbered mother deeds, sub-division pattas, and lineage records.',
    },
    {
      title: 'Ready Physical Infrastructure',
      desc: 'We do not sell raw barren acreage. Every project features finished blacktop tar roads, underground stormwater drains, demarcation pillars, and potable water testing.',
    },
    {
      title: 'Turnkey Registration & Loan Desk',
      desc: 'From initial site visit to patta transfer at the Sub-Registrar Office, our team assists you with registration, guideline values, and bank housing loan sanctions.',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. S. Karthikeyan',
      role: 'Consultant Surgeon, Thoothukudi',
      text: 'Purchased a 4.95 Cents corner plot at AP Rajan Garden near the coastal corridor. The entire DTCP approval paper trail, legal opinion, and registration took less than 10 days. Exceptional professionalism.',
    },
    {
      name: 'M. Anandha Kumar',
      role: 'Port Logistics Executive (VOC Port)',
      text: 'Having worked in maritime logistics, I needed a plot near Harbour Bypass with high sweet water quality and good road width. PLOT FOR THOOTHUKUDI showed me clear layout maps and handled the patta name transfer seamlessly.',
    },
    {
      name: 'R. Meenakshi Sundaram',
      role: 'NRI Investor (Singapore / Native Tuticorin)',
      text: 'Living overseas, investing in real estate back home in Tamil Nadu is usually stressful. PLOT FOR THOOTHUKUDI provided layout blueprints, RERA certificates, and video call legal review before booking. Highly recommended.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#F4F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Local Real Estate Authority</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            FIND YOUR LAND. <br />
            <span className="text-emerald-700">BUILD YOUR FUTURE.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            PLOT FOR THOOTHUKUDI was established with a singular vision: to bring institutional transparency, legal rigor, and modern planning to residential land acquisition across Thoothukudi district, Tamil Nadu.
          </p>
        </div>

        {/* Editorial Story Grid */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-12 shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-wider text-emerald-800 font-extrabold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Our Heritage &amp; Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Rooted in the Pearl City of Tamil Nadu
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Thoothukudi is undergoing unprecedented infrastructure modernization—from the expansion of the V.O. Chidambaranar Port and the upcoming Green Hydrogen Corridor to the fast-growing industrial manufacturing zones along Palayamkottai Road and NH 38.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Amidst this growth, finding authentic, legally unencumbered land with sweet groundwater and sanctioned DTCP layout approvals can be challenging. PLOT FOR THOOTHUKUDI bridges this gap. We curate only fully vetted, ready-to-build residential plots in premier residential enclaves.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <strong className="block text-2xl font-black text-emerald-800">450+</strong>
                <span className="text-gray-600">Satisfied Plot Owners in Thoothukudi</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <strong className="block text-2xl font-black text-gray-900">100%</strong>
                <span className="text-gray-600">Clear Title &amp; Patta Guarantee</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <Image
              src="/images/plots/aerial-layout-grid.jpg"
              alt="Plotted land layouts in Thoothukudi"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Pillars of Integrity */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Our Guiding Principles
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              How we protect every rupee you invest into residential land.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-emerald-800 block mb-2">0{i + 1}.</span>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-wider text-emerald-800 font-extrabold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Client Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Stories from Our Plot Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
                <p className="text-xs text-gray-700 leading-relaxed italic mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-gray-900 text-xs">{t.name}</div>
                  <div className="text-[11px] text-emerald-700">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-emerald-800 text-white rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black">
              Ready to Secure Your Plot in Thoothukudi?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Schedule a site inspection this week with free cab pickup.
            </p>
          </div>
          <Link
            href="/plots"
            className="py-3 px-6 bg-white text-emerald-900 font-black rounded-xl text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow-sm shrink-0"
          >
            Explore Available Plots →
          </Link>
        </div>
      </div>
    </div>
  );
}
