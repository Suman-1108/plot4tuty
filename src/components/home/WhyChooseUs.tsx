import { ShieldCheck, FileCheck, Compass, Landmark, Users, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% DTCP & TNRERA Verified',
      description: 'Every layout listed on Plot 4 Tuty has valid Directorate of Town & Country Planning approvals and active TNRERA registrations with verified survey numbers.'
    },
    {
      icon: FileCheck,
      title: '30-Year Legal Title Search',
      description: 'Our senior real estate legal advocates verify mother deeds, parent documents, encumbrance certificates (EC), and patta sub-divisions prior to publishing.'
    },
    {
      icon: Compass,
      title: 'On-Ground Demarcation & Infrastructure',
      description: 'Permanent boundary stone pillars, 40ft & 33ft blacktop metal roads, street solar illumination, and tested potable sweet groundwater at safe depths.'
    },
    {
      icon: Landmark,
      title: 'Direct Bank Loan Approvals',
      description: 'Pre-approved plot purchase and villa construction loans with top nationalized and private banks (SBI, HDFC, Canara, Indian Bank) at standard residential rates.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#DADDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#668F35] mb-2">
            <CheckCircle className="w-4 h-4" />
            <span>The Plot 4 Tuty Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222]">
            Why Land Buyers in Thoothukudi Trust Us
          </h2>
          <p className="text-sm sm:text-base text-[#666A5D] mt-2 leading-relaxed">
            Buying land is your most significant generational investment. We eliminate legal uncertainty, brokerage markups, and development delays.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-[#F4F5F0] rounded-xl border border-[#DADDD5] p-6 editorial-shadow hover:border-[#668F35] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#EDF3E4] border border-[#668F35]/30 flex items-center justify-center text-[#668F35] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#222222] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#666A5D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DADDD5]/50 flex items-center space-x-1.5 text-[11px] font-semibold text-[#668F35]">
                  <span>Verified Standard</span>
                  <span>✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Growth Stats Bar */}
        <div className="mt-14 bg-[#222222] text-[#F4F5F0] rounded-xl p-8 editorial-shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-2xl sm:text-4xl font-extrabold text-[#668F35]">15+</span>
            <span className="text-xs text-gray-300 uppercase tracking-wider mt-1 block">Years Local Expertise</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-4xl font-extrabold text-white">450+</span>
            <span className="text-xs text-gray-300 uppercase tracking-wider mt-1 block">Plots Registered</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-4xl font-extrabold text-[#668F35]">100%</span>
            <span className="text-xs text-gray-300 uppercase tracking-wider mt-1 block">Clean Title Records</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-4xl font-extrabold text-white">4 Corridors</span>
            <span className="text-xs text-gray-300 uppercase tracking-wider mt-1 block">High Growth Zones</span>
          </div>
        </div>
      </div>
    </section>
  );
}
