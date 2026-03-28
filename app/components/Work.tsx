"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Luminescence",
    category: "Fine Art",
    year: "2025",
    size: "large",
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80&fit=crop",
  },
  {
    id: "02",
    title: "Solitude",
    category: "Landscape",
    year: "2025",
    size: "small",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80&fit=crop",
  },
  {
    id: "03",
    title: "Milanese Dusk",
    category: "Architecture",
    year: "2024",
    size: "small",
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&fit=crop",
  },
  {
    id: "04",
    title: "Veil",
    category: "Nature",
    year: "2024",
    size: "small",
    src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80&fit=crop",
  },
  {
    id: "05",
    title: "Untitled Series",
    category: "Fine Art",
    year: "2024",
    size: "large",
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&q=80&fit=crop",
  },
  {
    id: "06",
    title: "Still Life No. 7",
    category: "Still Life",
    year: "2023",
    size: "small",
    src: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80&fit=crop",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="work"
      ref={ref}
      className="px-6 md:px-12 py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xs tracking-[0.3em] uppercase text-white/40 font-light"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white"
            >
              Portfolio
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="text-sm text-white/40 font-light max-w-xs leading-relaxed pb-2"
          >
            A curated selection of projects spanning fine art, editorial,
            portraiture, and commercial work.
          </motion.p>
        </div>

        {/* Full-width divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ originX: 0 }}
          className="w-full h-px bg-white/10 mb-14"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[320px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 + i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${
                project.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Photo */}
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Noise texture overlay */}
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] mix-blend-overlay" />

              {/* Bottom fade overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Always-visible bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-light">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl font-light text-white/90 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <span className="text-[11px] text-white/30 font-light tabular-nums self-end pb-0.5">
                  {project.year}
                </span>
              </div>

              {/* ID watermark top-left */}
              <div className="absolute top-5 left-6">
                <span className="text-[10px] text-white/20 tracking-widest font-light tabular-nums">
                  {project.id}
                </span>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <span className="text-[11px] text-white/50 tracking-[0.15em] uppercase">
                  View →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors duration-300 group"
          >
            <span className="block w-8 h-px bg-white/20 group-hover:w-0 transition-all duration-300" />
            Commission a project
            <span className="block w-8 h-px bg-white/20 group-hover:w-0 transition-all duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
