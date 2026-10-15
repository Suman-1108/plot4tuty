import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import { ShieldCheck, MapPin, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#F4F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#668F35] mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Gated Plotted Communities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222]">
              Signature Layout Projects
            </h2>
            <p className="text-sm sm:text-base text-[#666A5D] mt-1.5 max-w-xl">
              Engineered residential townships with wide blacktop roads, integrated underground stormwater drains, dedicated sweet water connections, and complete DTCP approvals.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#668F35] hover:text-[#53752A] transition-colors"
          >
            <span>View All Layout Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Editorial Cards */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl border border-[#DADDD5] overflow-hidden editorial-shadow flex flex-col ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Image side */}
              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[420px] bg-[#EAECE4]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#222222] text-xs font-semibold px-3 py-1.5 rounded border border-[#DADDD5] flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#668F35]" />
                  <span>{project.approval}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white p-3 rounded-lg flex items-center justify-between text-xs">
                  <span>Available Plots: <strong className="text-[#668F35]">{project.availablePlots}</strong> / {project.totalPlots}</span>
                  <span>Sizes: <strong>{project.plotSizes}</strong></span>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#666A5D] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#668F35]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#222222] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#668F35] font-semibold mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-[#666A5D] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-6">
                    {project.amenities.slice(0, 4).map((amenity, i) => (
                      <div key={i} className="flex items-center space-x-2 text-[#55594D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#668F35] shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Link */}
                <div className="pt-4 border-t border-[#DADDD5] flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] text-[#666A5D] uppercase tracking-wider">Price Range</span>
                    <span className="text-lg sm:text-xl font-bold text-[#222222]">{project.priceRange}</span>
                  </div>

                  <Link
                    href={`/projects#${project.slug}`}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-[#668F35] hover:bg-[#53752A] text-white text-xs font-semibold rounded-md transition-colors"
                  >
                    <span>Inspect Layout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
