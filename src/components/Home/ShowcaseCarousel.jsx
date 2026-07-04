import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const showcaseItems = [
  {
    id: 1,
    title: "3rd Place Winner",
    subtitle: "2025 Meralco IDOL Hackathon",
    description: "Recognized for innovative solution in the national hackathon",
    color: "from-emerald-600/20 to-emerald-400/20",
  },
  {
    id: 2,
    title: "Gov-Funded Platform",
    subtitle: "ESCA - Agricultural Innovation",
    description: "Built a scalable agtech platform used by farming communities",
    color: "from-emerald-400/20 to-emerald-600/20",
  },
  {
    id: 3,
    title: "University CMS",
    subtitle: "Panpacific University Systems",
    description: "Developed comprehensive content management system for education",
    color: "from-emerald-500/20 to-emerald-700/20",
  },
  {
    id: 4,
    title: "Microservices Architecture",
    subtitle: "Cache Game - 6 Service Platform",
    description: "Engineered distributed system with real-time cache management",
    color: "from-emerald-700/20 to-emerald-500/20",
  },
  {
    id: 5,
    title: "Dean's Lister",
    subtitle: "7 out of 8 Semesters",
    description: "Consistent academic excellence throughout university career",
    color: "from-emerald-500/20 to-emerald-300/20",
  },
];

export default function ShowcaseCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", duration: 45 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
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
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className="flex-[0_0_100%] sm:flex-[0_0_90%] lg:flex-[0_0_70%] px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl border border-emerald/30 bg-gradient-to-br ${item.color} backdrop-blur-md p-6 md:p-8 lg:p-10 h-full min-h-64 flex flex-col justify-between transition-all duration-500 hover:border-emerald hover:shadow-emerald-glow`}
              >
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-emerald rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-emerald text-sm font-semibold uppercase tracking-wider mb-2">
                      {item.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Index indicator */}
                <div className="relative z-10 text-emerald/60 font-bold text-sm">
                  {String(idx + 1).padStart(2, "0")} / {String(showcaseItems.length).padStart(2, "0")}
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
          {showcaseItems.map((_, idx) => (
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
