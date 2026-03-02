"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-8">
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">{label}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
    </motion.div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <motion.ul variants={stagger} className="space-y-3">
      {items.map((item) => (
        <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
          <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function ConversionLandingPagesPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Link href="/#services" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-8 hover:gap-3 transition-all">
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Back to Services
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              Service
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Conversion Landing Pages
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Strategically designed landing pages focused on turning traffic into measurable actions — leads, bookings, or inquiries.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/get-started" className="btn-futuristic px-8 py-3 text-sm font-semibold">Get Started</Link>
              <Link href="/book-a-call" className="btn-futuristic-outline px-8 py-3 text-sm font-semibold">Book a Call</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto px-6">
          <div className="glass rounded-2xl p-8 sm:p-10 text-center">
            <motion.p variants={fadeUp} className="text-white text-lg sm:text-xl font-medium leading-relaxed">
              This is not a full website.
            </motion.p>
            <motion.p variants={fadeUp} className="text-accent text-lg sm:text-xl font-bold mt-2">
              It is a focused conversion engine.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Who It's For */}
      <section className="py-16 sm:py-20 bg-navy-900/50">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Ideal For" title="Who It's For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Businesses running ads",
              "Coaching launches",
              "Gym membership campaigns",
              "Clinic appointment drives",
              "Product/service promotions",
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/6">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-5xl mx-auto px-6">
          <SectionHeader label="Deliverables" title="What's Included" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Conversion Strategy */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-accent">01</span> Conversion Strategy
              </h3>
              <CheckList items={[
                "Target audience analysis",
                "Offer positioning",
                "Headline & CTA structuring",
                "Trust signal placement",
              ]} />
            </motion.div>

            {/* Page Structure */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-accent">02</span> Page Structure
              </h3>
              <CheckList items={[
                "Attention-grabbing hero",
                "Problem/solution framework",
                "Benefits breakdown",
                "Social proof placeholders",
                "Objection handling section",
                "Strong CTA placements",
              ]} />
            </motion.div>

            {/* Technical Setup */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-accent">03</span> Technical Setup
              </h3>
              <CheckList items={[
                "Lead capture form integration",
                "CRM connection (if required)",
                "Tracking setup (Meta Pixel / Google Analytics)",
                "Speed optimization",
              ]} />
            </motion.div>

            {/* Conversion Elements */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-accent">04</span> Conversion Elements
              </h3>
              <CheckList items={[
                "Clear value proposition",
                "Urgency triggers",
                "Scarcity elements (if applicable)",
                "Structured content flow",
                "Visual hierarchy optimized for attention",
              ]} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Outcome */}
      <section className="py-16 sm:py-20 bg-navy-900/50">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Results" title="What You Get" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Higher Conversion Rate", desc: "Pages engineered to convert visitors into leads and customers." },
              { title: "Lower Cost Per Inquiry", desc: "Optimized for ad-driven traffic to maximize ROI." },
              { title: "Measurable Performance", desc: "Tracking and analytics for data-driven decisions." },
              { title: "Lead Capture System", desc: "Structured forms and flows to capture every qualified lead." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="p-5 rounded-xl bg-white/3 border border-white/6">
                <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} className="glass rounded-2xl p-10 sm:p-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to convert more visitors?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">Let&apos;s build a landing page that turns your traffic into real business results.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/get-started" className="btn-futuristic px-8 py-3 text-sm font-semibold">Get Started</Link>
              <Link href="/book-a-call" className="btn-futuristic-outline px-8 py-3 text-sm font-semibold">Book a Call</Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
