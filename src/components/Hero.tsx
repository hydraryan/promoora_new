"use client";

import { motion } from "framer-motion";

/* ── Animated browser mockup component ─────────── */
function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotateY: -8 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-70 sm:max-w-sm lg:max-w-lg mx-auto perspective-distant"
    >
      {/* Glow behind */}
      <div className="absolute -inset-4 sm:-inset-8 bg-accent/10 rounded-full blur-[60px] sm:blur-[80px] animate-pulse-glow" />

      {/* Browser window */}
      <div className="relative rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-xl shadow-2xl shadow-accent/10 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 border-b border-white/5 bg-navy-950/60">
          <div className="flex gap-1 sm:gap-1.5">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 mx-2 sm:mx-4">
            <div className="h-5 sm:h-6 rounded-lg bg-white/5 flex items-center px-2 sm:px-3">
              <span className="text-[8px] sm:text-[10px] text-slate-500">yourwebsite.com</span>
            </div>
          </div>
        </div>

        {/* Page content mockup */}
        <div className="p-3 sm:p-5 md:p-6 space-y-3 sm:space-y-5">
          {/* Nav mockup */}
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 72 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="h-4 rounded bg-accent/40"
            />
            <div className="flex gap-3">
              {[40, 32, 36].map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="h-2.5 rounded bg-white/10"
                  style={{ width: w }}
                />
              ))}
            </div>
          </div>

          {/* Hero area */}
          <div className="pt-3 space-y-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="h-3.5 sm:h-5 rounded bg-white/20"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="h-3.5 sm:h-5 rounded bg-accent/30"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="h-2 sm:h-2.5 rounded bg-white/8 mt-2"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="h-2 sm:h-2.5 rounded bg-white/8"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 2 }}
              className="inline-block h-7 w-20 sm:h-9 sm:w-28 rounded-md sm:rounded-lg bg-accent/50 mt-2"
            />
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 + i * 0.2 }}
                className="rounded-lg sm:rounded-xl border border-white/5 bg-white/3 p-2 sm:p-3 space-y-1.5 sm:space-y-2"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-accent/15" />
                <div className="h-2.5 w-3/4 rounded bg-white/15" />
                <div className="h-2 w-full rounded bg-white/6" />
                <div className="h-2 w-2/3 rounded bg-white/6" />
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="flex justify-between items-center pt-2 border-t border-white/5 gap-1"
          >
            {[
              { label: "Visitors", color: "bg-accent/40" },
              { label: "Leads", color: "bg-emerald-500/40" },
              { label: "Growth", color: "bg-violet-500/40" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-1 sm:gap-2">
                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${stat.color}`} />
                <span className="text-[7px] sm:text-[9px] text-slate-500 hidden sm:inline">{stat.label}</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 32 + i * 8 }}
                  transition={{ duration: 0.8, delay: 3 + i * 0.15 }}
                  className={`h-1.5 rounded-full ${stat.color}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating elements around browser */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/15 border border-accent/20 backdrop-blur-sm flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 7h4v4" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 backdrop-blur-sm flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [-4, 8, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-3 sm:-right-8 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-violet-500/15 border border-violet-500/20 backdrop-blur-sm flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── Hero Section ──────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-950 animate-gradient" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-[10%] w-75 h-75 bg-accent/8 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-[10%] w-100 h-100 bg-accent/5 rounded-full blur-[120px] animate-float-delayed" />
      <div className="absolute top-[40%] left-[50%] w-62.5 h-62.5 bg-accent-dark/8 rounded-full blur-[80px] animate-float-slow" />
      <div className="absolute top-[10%] right-[20%] w-50 h-50 bg-accent-light/5 rounded-full blur-[90px] animate-float-reverse" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-accent/3 rounded-full blur-[200px]" />

      {/* Content — split layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
          {/* Left — Text & CTAs */}
          <div className="text-center lg:text-left order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs sm:text-sm text-slate-300">
                <span className="hidden sm:inline">Web Development Studio — </span>Now Onboarding Founding Clients
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-5 sm:mb-6"
            >
              Helping Businesses Build a Strong{" "}
              <span className="gradient-text">Online Foundation.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              We design and develop conversion-focused websites for coaches, clinics,
              gyms, and local brands — built to perform from day one.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <motion.a
                href="#founding-client"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-futuristic w-full sm:w-auto text-center"
              >
                Become a Founding Client
              </motion.a>
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-futuristic-outline w-full sm:w-auto text-center"
              >
                View Packages
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Animated visual */}
          <div className="order-2">
            <BrowserMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-navy-950 to-transparent" />
    </section>
  );
}
