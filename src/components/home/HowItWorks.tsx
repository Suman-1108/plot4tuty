import { Compass, FileSearch, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: Compass,
      title: 'Pick Your Plot & Corridor',
      description: 'Explore verified DTCP layouts in Harbour Enclave, Korampallam, or Palayamkottai Road and compare Cents, Sq.Ft, and Vastu facings.',
    },
    {
      num: '02',
      icon: FileSearch,
      title: 'Free On-Site Inspection',
      description: 'We arrange private car transport to the site. Inspect on-ground boundary stones, test sweet groundwater, and review 30-year mother deed records.',
    },
    {
      num: '03',
      icon: CheckCircle2,
      title: 'Registry & Patta Handover',
      description: 'Complete smooth Sub-Registrar registration with zero brokerage, immediate individual patta application, and nationalized bank loan disbursal.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#DADDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title (matching "Booking made as easy as 1-2-3." in reference) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#668F35] font-bold block mb-1">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            Booking made as easy as 1-2-3.
          </h2>
          <p className="text-xs sm:text-sm text-[#55594D] mt-2">
            No convoluted paperwork or unexpected broker commissions. Just transparent, secure land ownership in Thoothukudi.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#F4F5F0] rounded-3xl p-8 border border-[#DADDD5] editorial-shadow flex flex-col justify-between hover:border-[#668F35] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#DADDD5] flex items-center justify-center text-[#668F35] shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-[#668F35]/40 font-mono">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55594D] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DADDD5]/60 flex items-center text-xs font-semibold text-[#668F35] space-x-1">
                  <span>Guaranteed Safe</span>
                  <span>✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
