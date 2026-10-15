import { getPlots, getProjects } from '@/lib/storage';
import Hero from '@/components/home/Hero';
import FeaturedPlots from '@/components/home/FeaturedPlots';
import MasterplanInteractive from '@/components/home/MasterplanInteractive';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ContactCTA from '@/components/home/ContactCTA';
import UnitConverter from '@/components/plots/UnitConverter';
import { Calculator } from 'lucide-react';

export default async function HomePage() {
  const plots = await getPlots();
  const projects = await getProjects();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero with Search Filter Bar */}
      <Hero />

      {/* Featured Properties */}
      <FeaturedPlots plots={plots} />

      {/* Interactive Masterplan Layout */}
      <MasterplanInteractive />

      {/* Layout Projects Showcase */}
      <ProjectShowcase projects={projects} />

      {/* Unit Converter Section */}
      <section className="py-12 bg-white border-y border-[#DADDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-wider text-[#668F35] font-semibold">
                Tamil Nadu Land Area Utility
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#222222] mt-1">
                Calculate & Convert Plot Dimensions
              </h3>
            </div>
            <UnitConverter />
          </div>
        </div>
      </section>

      {/* Why Choose Us & Guarantees */}
      <WhyChooseUs />

      {/* Contact & Enquiry CTA */}
      <ContactCTA />
    </div>
  );
}
