'use client';

import {
  MapPin,
  CalendarCheck,
  Headphones,
  Users,
  Award,
  ShieldCheck,
  Phone,
  MessageSquare,
  FileCheck,
  CheckCircle2,
  TrendingUp,
  Droplets,
  Building2,
  Compass
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: '100% Legal Title & Immediate Patta',
      desc: 'Every single plot undergoes rigorous 30-year legal encumbrance certificate (EC) scrutiny and revenue survey verification. Zero litigation risk.'
    },
    {
      icon: Building2,
      title: '36 & 40 Ft Blacktop Tar Roads',
      desc: 'Engineered internal avenue roads with concrete curbing, overhead TNEB electricity distribution, and solar LED streetlights throughout the layout.'
    },
    {
      icon: Droplets,
      title: 'Sweet Potable Groundwater at 22 Ft',
      desc: 'Rare sweet drinking groundwater available at shallow 20 to 25 ft depths, eliminating expensive water tankers or reverse osmosis requirements.'
    },
    {
      icon: TrendingUp,
      title: 'High Capital Growth Corridors',
      desc: 'Strategic locations along ECR, Harbour Bypass, and Palayamkottai Road, directly benefiting from the VOC Port Outer Harbour & Green Hydrogen projects.'
    },
    {
      icon: Award,
      title: 'Up to 90% Bank Loan Pre-Approved',
      desc: 'Recognized and approved by leading institutional lenders including State Bank of India (SBI), HDFC Bank, Canara Bank, and LIC Housing Finance.'
    },
    {
      icon: CalendarCheck,
      title: 'Free Site Visit & Dedicated Cab Pickup',
      desc: 'We arrange complimentary on-site layout inspection with free door-to-door cab pickup anywhere in Thoothukudi, 7 days a week.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F4F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-extrabold bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300">
            Unmatched Buyer Confidence
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Why Choose PLOT FOR THOOTHUKUDI?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            The standard of excellence in Thoothukudi residential land development, providing generational security and rapid capital appreciation.
          </p>
        </div>

        {/* 6 Grid Cards (Aura Phase II inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-emerald-600 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 font-black text-xl">
              100%
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900">
                DTCP, TNRERA &amp; Revenue Patta Guarantee
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Every layout is registered under Tamil Nadu Directorate of Town &amp; Country Planning.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="tel:+919842155678"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Call +91 98421 55678</span>
            </a>
            <a
              href="https://wa.me/919842155678?text=Hello%20Plot%204%20Tuty,%20I%20would%20like%20to%20verify%20patta%20and%20approval%20documents."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Request Legal Proof</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
