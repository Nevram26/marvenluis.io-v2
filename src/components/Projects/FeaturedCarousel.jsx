import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import escaLogo from "../../assets/projects/esca-logo.svg";
import panpacificLogo from "../../assets/projects/panpacific-logo.webp";

const featuredProjects = [
  {
    id: 1,
    title: "ESCA — Agricultural Trading Platform",
    subtitle: "Government-funded agtech platform",
    description:
      "ESCA connects farmers directly to buyers for fair prices. I build tools for scanning harvests, tracking produce flow, and monitoring greenhouse conditions. Shipping 5+ features weekly over 4 months.",
    logoPath: escaLogo,
    tech: ["React", "TypeScript", "Django", "PostgreSQL"],
    impact: "Used by farming communities daily",
  },
  {
    id: 2,
    title: "Panpacific University CMS",
    subtitle: "Self-service content management system",
    description:
      "A no-code platform for non-technical staff to build pages. Created reusable content blocks for hero sections, FAQs, galleries, and course filters. Delivered sections for Academics, Admissions, and Sustainability over 7 months.",
    logoPath: panpacificLogo,
    tech: ["React", "Node.js", "Supabase", "TailwindCSS"],
    impact: "Empowers staff to manage their own content",
  },
];

export default function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollNext(emblaApi.canScrollNext());
      setCanScrollPrev(emblaApi.canScrollPrev());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const handlePrev = () => emblaApi?.scrollPrev();
  const handleNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="flex-[0_0_100%] px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-emerald/30 bg-gradient-to-br from-emerald-500/10 to-dark-900 backdrop-blur-md p-8 md:p-12 lg:p-16 min-h-96 flex flex-col justify-between transition-all duration-500 hover:border-emerald hover:shadow-emerald-glow">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                  <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-emerald rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Logo */}
                  <div className="mb-8 w-full">
                    {project.logoPath.endsWith(".svg") ? (
                      <img
                        src={project.logoPath}
                        alt={project.title}
                        className="h-12 object-contain"
                      />
                    ) : (
                      <img
                        src={project.logoPath}
                        alt={project.title}
                        className="h-12 object-contain rounded"
                      />
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6 flex-grow"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-emerald text-sm font-semibold uppercase tracking-wider mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Impact Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6"
                  >
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald/20 border border-emerald/50 text-emerald text-xs font-semibold uppercase tracking-wide">
                      ✨ {project.impact}
                    </span>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-dark-800 border border-emerald/30 text-emerald/80 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between">
        {/* Dots indicator */}
        <div className="flex gap-2">
          {featuredProjects.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === selectedIndex
                  ? "bg-emerald w-8"
                  : "bg-emerald/30 w-2 hover:bg-emerald/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3">
          <motion.button
            onClick={handlePrev}
            disabled={!canScrollPrev}
            className="p-2 rounded-lg border border-emerald/30 text-emerald hover:bg-emerald/10 hover:border-emerald transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            disabled={!canScrollNext}
            className="p-2 rounded-lg border border-emerald/30 text-emerald hover:bg-emerald/10 hover:border-emerald transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
