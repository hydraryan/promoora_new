"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience, and goals — so every design decision is rooted in strategy, not guesswork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design with Conversion",
    description:
      "We create modern layouts focused on turning visitors into customers — with clear CTAs, trust signals, and mobile-first design.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M12 19l7-7 3 3-7 7-3-3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Develop & Optimize",
    description:
      "We build with Next.js and modern tooling — optimized for speed, SEO, and clean code you can rely on long-term.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy, test, and hand over your site — then stay available for maintenance, updates, and growth support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3M22 2l-7.5 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 9.7L5 9a7 7 0 016-6l.7 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.3 14.5L15 19a7 7 0 006-6l-4.5-.7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-accent/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Our Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            How We Build Your Site
          </motion.h2>
        </div>

        {/* Steps — Desktop horizontal timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden lg:grid grid-cols-4 gap-0 relative"
        >
          {/* Connecting line */}
          <div className="absolute top-14 left-[12.5%] right-[12.5%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="h-full bg-linear-to-r from-accent/40 via-accent to-accent/40 origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div key={step.number} variants={itemVariants} className="relative flex flex-col items-center text-center px-4">
              {/* Step circle */}
              <div className="relative z-10 w-18 h-18 rounded-2xl bg-navy-900 border-2 border-accent/30 text-accent flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                {step.icon}
              </div>

              {/* Number badge */}
              <span className="text-xs font-bold text-accent/60 tracking-widest mb-2">
                STEP {step.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed max-w-55">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Steps — Mobile/Tablet vertical layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:hidden space-y-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="flex gap-5"
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-navy-900 border-2 border-accent/30 text-accent flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 mt-3 bg-linear-to-b from-accent/30 to-transparent" />
                )}
              </div>

              {/* Right: content */}
              <div className="pt-2 pb-6">
                <span className="text-xs font-bold text-accent/60 tracking-widest">
                  STEP {step.number}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
