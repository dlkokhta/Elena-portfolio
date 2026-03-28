"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const specialties = [
  "Fine Art Photography",
  "Portrait & Editorial",
  "Wedding & Intimate Events",
  "Commercial & Brand",
];

const stats = [
  { value: "10+", label: "Years" },
  { value: "300+", label: "Clients" },
  { value: "12", label: "Awards" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const up = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  });

  const fi = (delay: number) => ({
    initial: { opacity: 0 },
    animate: inView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  });

  return (
    <section
      id="about"
      ref={ref}
      className="px-6 md:px-12 py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Top row: label + heading + stats */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div className="flex flex-col gap-4">
            <motion.span
              {...up(0)}
              className="text-xs tracking-[0.3em] uppercase text-white/40 font-light"
            >
              About
            </motion.span>
            <motion.h2
              {...up(0.1)}
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white"
            >
              Elena
            </motion.h2>
          </div>

          <div className="flex gap-12 pb-2">
            {stats.map(({ value, label }, i) => (
              <motion.div key={label} {...up(0.2 + i * 0.1)} className="flex flex-col gap-1">
                <span className="font-serif text-4xl font-light text-white">{value}</span>
                <span className="text-[11px] tracking-[0.25em] uppercase text-white/40">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{ originX: 0 }}
          className="w-full h-px bg-white/10 mb-20"
        />

        {/* Main two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

          {/* Left: bio */}
          <div className="flex flex-col gap-6 text-white/60 font-light leading-[1.9] text-[15px]">
            {[
              "I am a fine art and portrait photographer based in Milan, Italy — with over a decade of experience capturing the quiet poetry of human connection and light.",
              "My work lives in the space between documentary and art: raw, unhurried, and deeply personal. I believe every frame should feel like a memory worth keeping.",
              "Rooted in film tradition and refined through years of analog practice, I bring a timeless sensitivity to every project — whether an intimate portrait session or a large-scale commercial campaign.",
            ].map((text, i) => (
              <motion.p key={i} {...fi(0.5 + i * 0.15)}>
                {text}
              </motion.p>
            ))}

            <motion.div {...up(0.9)} className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors duration-300 group"
              >
                Work with me
                <span className="block w-8 h-px bg-white/40 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right: specialties + quote */}
          <div className="flex flex-col gap-12">

            <div className="flex flex-col gap-4">
              <motion.span
                {...fi(0.5)}
                className="text-[11px] tracking-[0.3em] uppercase text-white/30 font-light mb-1"
              >
                Specialties
              </motion.span>
              <ul className="flex flex-col">
                {specialties.map((item, i) => (
                  <motion.li
                    key={item}
                    {...up(0.55 + i * 0.1)}
                    className="flex items-center justify-between py-4 border-b border-white/8 group cursor-default"
                  >
                    <span className="text-sm tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                    <span className="text-[11px] text-white/20 font-light tabular-nums">
                      0{i + 1}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              {...fi(1)}
              className="flex flex-col gap-3 pl-5 border-l border-white/15"
            >
              <p className="font-serif text-xl text-white/80 font-light leading-relaxed italic">
                &ldquo;Light is not something I chase — it is something I wait for.&rdquo;
              </p>
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">
                — Elena
              </span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
