import Hero from '@/components/home/Hero';
import StatsBanner from '@/components/home/StatsBanner';
import PopularBentoGrid from '@/components/home/PopularBentoGrid';
import ExploreCategories from '@/components/home/ExploreCategories';
import MasterplanInteractive from '@/components/home/MasterplanInteractive';
import LocationAdvantages from '@/components/home/LocationAdvantages';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsFaq from '@/components/home/TestimonialsFaq';
import UnitConverter from '@/components/plots/UnitConverter';
import ContactCTA from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F5F0]">
      {/* 1. Jain Housing Aura Phase II inspired Aerial Hero with Lead Form */}
      <Hero />

      {/* 2. 4-Box Key Feature Overview Banner */}
      <StatsBanner />

      {/* 3. Most Popular Residential Land Bento Grid */}
      <PopularBentoGrid />

      {/* 4. Verified Land Parcels 4-Card Row */}
      <ExploreCategories />

      {/* 5. 3-Level Interactive Map & Plotted Layout Masterplan Layer */}
      <MasterplanInteractive />

      {/* 6. Strategic Location Advantages & Distance Explorer */}
      <LocationAdvantages />

      {/* 7. Why Choose PLOT FOR THOOTHUKUDI & Trust Indicators */}
      <WhyChooseUs />

      {/* 8. Tamil Nadu Land Area Unit Converter */}
      <section className="py-14 sm:py-16 bg-white border-y border-[#DADDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-wider text-emerald-800 font-extrabold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Tamil Nadu Land Area Utility
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
                Calculate &amp; Convert Plot Dimensions
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Instantly convert between Cents, Square Feet, Kuzhi, Grounds, and Acres.
              </p>
            </div>
            <UnitConverter />
          </div>
        </div>
      </section>

      {/* 9. Buyer Testimonials & Comprehensive FAQs */}
      <TestimonialsFaq />

      {/* 10. Direct Contact & Site Inspection Booking */}
      <ContactCTA />
    </div>
  );
}
