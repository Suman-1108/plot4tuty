'use client';

import { useState } from 'react';
import { Star, ChevronDown, ChevronUp, ShieldCheck, HelpCircle, Quote } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'What is the difference between DTCP and Panchayat approved plots in Thoothukudi?',
    a: 'DTCP (Directorate of Town and Country Planning) approval guarantees the layout adheres strictly to state zoning laws, mandatory 30-40 ft road widths, OSR park reservation, and infrastructure regulations, making it 100% eligible for nationalized bank loans (SBI, HDFC). Panchayat approval is granted by the local village body and is cost-effective for smaller village developments. On PLOT FOR THOOTHUKUDI, every listing clearly states its exact approval classification and verification order number.'
  },
  {
    q: 'How is the Patta transfer verified for residential plots in Tamil Nadu?',
    a: 'In Tamil Nadu, Patta is the government revenue document proving legal ownership. When you purchase a sub-divided residential plot through our verified developers, an individual sub-division Patta application is submitted directly to the Taluk Tahsildar office. We provide certified copies of the Mother Deed, 30-year Encumbrance Certificate (EC), and Town Survey Land Register (TSLR) extract before any advance payment.'
  },
  {
    q: 'What are the current stamp duty and registration fees in Tamil Nadu for 2026?',
    a: 'In Tamil Nadu, property registration charges comprise 7% Stamp Duty on the guideline value (or purchase price, whichever is higher) plus 4% Registration Fee, amounting to an approximate total of 11% in statutory state government charges. Our plot details provide an automated transparent breakdown of these estimated statutory fees.'
  },
  {
    q: 'Can NRIs and out-of-station buyers purchase residential land in Thoothukudi?',
    a: 'Yes! Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs) can legally purchase residential vacant land in India under FEMA regulations. We provide end-to-end video layout tours, Power of Attorney (POA) registration guidance, certified document courier services, and online NRI bank payment assistance.'
  },
  {
    q: 'What makes Thoothukudi a prime land investment hub right now?',
    a: 'Thoothukudi is witnessing massive infrastructure tailwinds: the ₹7,000 Crore V.O.C. Port Outer Harbour container terminal expansion, Tamil Nadu’s first Green Hydrogen and Offshore Wind Energy hub, and the Tuticorin Airport runway expansion for night landing commercial jets. Plotted land prices in Tharuvaikulam, Millerpuram, and Harbour Expressway have demonstrated consistent 12-18% annual capital appreciation.'
  }
];

const TESTIMONIALS = [
  {
    name: 'Dr. K. Joseph Raj',
    role: 'Orthopedic Surgeon, Tuticorin Govt Hospital',
    location: 'Purchased Plot #76 in AP Rajan Garden',
    text: 'I wanted a high-ventilation North-East corner plot near the coastal corridor for building a retirement villa. PLOT FOR THOOTHUKUDI verified the 30-year EC and revenue patta thoroughly. Registration went smoothly at the Sub-Registrar Office.',
    stars: 5,
  },
  {
    name: 'S. Ganesan & Family',
    role: 'Logistics Manager, VOC Port Terminal',
    location: 'Purchased 2.64 Cents in Tharuvaikulam',
    text: 'The best part was finding authentic photographs of the actual plot demarcation stones and the 36-ft tar road instead of generic internet pictures. Sweet groundwater was tested and found at just 22 feet depth!',
    stars: 5,
  },
  {
    name: 'P. Mariappan',
    role: 'NRI Investor (Dubai / native of Millerpuram)',
    location: 'Purchased Plot #14 in Millerpuram',
    text: 'Being in Dubai, verifying property legality in Tamil Nadu is usually stressful. The team shared high-resolution DTCP layout blueprints and coordinated with HDFC for my land loan seamlessly. Highly recommended!',
    stars: 5,
  }
];

export default function TestimonialsFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-[#F4F5F0] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-extrabold bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Verified Buyer Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 tracking-tight">
              Trusted by Hundreds of Land Owners
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Hear genuine reviews from doctors, port executives, and NRI families who found their plots with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-[11px] text-emerald-800 font-semibold">{t.role}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Block */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-extrabold bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Legal &amp; Regulatory Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 tracking-tight">
              Frequently Asked Questions About Land in Thoothukudi
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-5 text-left font-bold text-xs sm:text-sm text-gray-900 flex items-center justify-between hover:text-emerald-800 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-3" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F9FAF8]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
