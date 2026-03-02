"use client";

import { motion } from "framer-motion";

/* ── Value propositions — no inflated numbers ──── */
const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Performance-First Code",
    description:
      "We build with Next.js and modern tooling so your site loads fast, ranks better, and keeps visitors engaged.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Mobile-Optimized",
    description:
      "Every pixel is designed and tested for flawless mobile experience — because most of your visitors browse on their phones.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Conversion-Focused Design",
    description:
      "Every section, button, and layout decision is made to guide visitors toward taking action — not just looking pretty.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Structured Support",
    description:
      "From launch to growth — we offer ongoing maintenance plans so your site stays updated, secure, and optimized long-term.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/* ── Section ───────────────────────────────────── */
export default function WhyPromoora() {
  return (
    <section id="why-promoora" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Subtle background decor */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-accent/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-dark text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Why Promoora
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950"
          >
            What Makes Us Different
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto"
          >
            We don&apos;t just build websites — we build growth-ready digital
            foundations using modern technology and conversion-driven design.
          </motion.p>
        </div>

        {/* Value Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              className="relative text-center p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-navy-950 mb-3">{value.title}</h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
