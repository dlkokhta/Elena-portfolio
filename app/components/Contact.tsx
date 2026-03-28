"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const up = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  });

  const fi = (delay: number) => ({
    initial: { opacity: 0 },
    animate: inView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with real API call later
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 md:px-12 py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-20">
          <motion.span {...up(0)} className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
            Contact
          </motion.span>
          <motion.h2
            {...up(0.1)}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white"
          >
            Let&apos;s work{" "}
            <br className="md:hidden" />
            <span className="italic text-white/50">together.</span>
          </motion.h2>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ originX: 0 }}
          className="w-full h-px bg-white/10 mb-20"
        />

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

          {/* Left: form */}
          <div className="flex flex-col gap-8">
            <motion.p {...fi(0.3)} className="text-sm text-white/50 font-light leading-relaxed max-w-sm">
              Available for fine art commissions, editorial assignments, and
              commercial collaborations worldwide.
            </motion.p>

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-3 py-8"
              >
                <span className="font-serif text-3xl text-white font-light">Thank you.</span>
                <p className="text-sm text-white/50 font-light">I&apos;ll be in touch shortly.</p>
              </motion.div>
            ) : (
              <motion.form
                {...fi(0.4)}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-white/80 text-sm font-light py-2 placeholder:text-white/20 transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-white/80 text-sm font-light py-2 placeholder:text-white/20 transition-colors duration-300"
                  />
                </div>

                {/* Project type */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
                    Project type
                  </label>
                  <select
                    className="bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-white/80 text-sm font-light py-2 transition-colors duration-300 cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-zinc-900">Select type</option>
                    <option value="fine-art" className="bg-zinc-900">Fine Art</option>
                    <option value="portrait" className="bg-zinc-900">Portrait</option>
                    <option value="editorial" className="bg-zinc-900">Editorial</option>
                    <option value="wedding" className="bg-zinc-900">Wedding</option>
                    <option value="commercial" className="bg-zinc-900">Commercial</option>
                    <option value="other" className="bg-zinc-900">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-white/80 text-sm font-light py-2 placeholder:text-white/20 transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors duration-300 group disabled:opacity-40"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                    <span className="block w-8 h-px bg-white/30 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
                  </button>
                </div>
              </motion.form>
            )}
          </div>

          {/* Right: location + availability + socials */}
          <div className="flex flex-col gap-12">
            <motion.div {...fi(0.7)} className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/25 font-light">
                  Based in
                </span>
                <span className="text-sm text-white/60 font-light">Milan, Italy</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/25 font-light">
                  Available for travel
                </span>
                <span className="text-sm text-white/60 font-light">Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-light">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Social media */}
            <motion.div {...up(0.8)} className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 font-light">
                Follow
              </span>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {[
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "Pinterest", href: "https://pinterest.com" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                  { label: "Behance", href: "https://behance.net" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Footer */}
        <motion.div
          {...fi(0.9)}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <span className="font-serif text-white/20 text-sm tracking-widest uppercase">Elena</span>
          <span className="text-[11px] text-white/20 font-light tracking-wider">
            © {new Date().getFullYear()} — All rights reserved
          </span>
        </motion.div>

      </div>
    </section>
  );
}
