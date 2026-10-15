import { getPlots, getProjects } from '@/lib/storage';
import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedPlots from '@/components/home/FeaturedPlots';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import HowItWorks from '@/components/home/HowItWorks';
import MasterplanInteractive from '@/components/home/MasterplanInteractive';
import ContactCTA from '@/components/home/ContactCTA';
import UnitConverter from '@/components/plots/UnitConverter';

export default async function HomePage() {
  const plots = await getPlots();
  const projects = await getProjects();

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F5F0]">
      {/* 1. Immersive Hero with Curved Landscape Card & Dual Pill Action Buttons */}
      <Hero />

      {/* 2. Why Choose Us (Dual-Column: Stats on Left + 3 Stacked Feature Cards on Right) */}
      <WhyChooseUs />

      {/* 3. Top Land Corridors & Featured Plots (Harbour Enclave Phase 1 Showcase Container) */}
      <FeaturedPlots plots={plots} />

      {/* 4. Plotted Layout Packages (Asymmetric 3-Card Block) */}
      <ProjectShowcase projects={projects} />

      {/* 5. Booking Made as Easy as 1-2-3 Stepper */}
      <HowItWorks />

      {/* 6. Interactive Masterplan Blueprint Inspector */}
      <MasterplanInteractive />

      {/* 7. Tamil Nadu Land Area Unit Converter */}
      <section className="py-14 sm:py-16 bg-white border-y border-[#DADDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-wider text-[#668F35] font-semibold">
                Tamil Nadu Land Area Utility
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#222222] mt-1">
                Calculate &amp; Convert Plot Dimensions
              </h3>
            </div>
            <UnitConverter />
          </div>
        </div>
      </section>

      {/* 8. Contact & Site Inspection Booking */}
      <ContactCTA />
    </div>
  );
}
