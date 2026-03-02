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

export default function SubscriptionPlansPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-accent/5 rounded-full blur-[200px]" />
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
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Service
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Subscription Website Plans
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Ongoing website management, optimization, and technical support under a structured monthly model.
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
              This transforms your website into a maintained digital system —
            </motion.p>
            <motion.p variants={fadeUp} className="text-accent text-lg sm:text-xl font-bold mt-2">
              not a one-time project.
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
              "Growing businesses",
              "Founders without internal tech team",
              "Brands running regular campaigns",
              "Businesses that need ongoing updates",
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
            {/* Continuous Optimization */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-accent">01</span> Continuous Optimization
              </h3>
              <CheckList items={[
                "Monthly performance monitoring",
                "Speed improvements",
                "UX refinements",
                "Conversion optimization adjustments",
              ]} />
            </motion.div>

            {/* Technical Maintenance */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-accent">02</span> Technical Maintenance
              </h3>
              <CheckList items={[
                "Security updates",
                "Plugin/theme updates",
                "Backup management",
                "Bug fixes",
              ]} />
            </motion.div>

            {/* Content Updates */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-accent">03</span> Content Updates
              </h3>
              <CheckList items={[
                "Minor content modifications",
                "Banner updates",
                "Landing page additions (based on plan)",
              ]} />
            </motion.div>

            {/* Reporting */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <span className="text-accent">04</span> Reporting
              </h3>
              <CheckList items={[
                "Monthly performance summary",
                "Traffic overview",
                "Conversion insights (if tracking integrated)",
              ]} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-navy-900/50">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto px-6">
          <SectionHeader label="Results" title="Why Subscribe" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "No In-House Developer Needed", desc: "We handle everything technical so you can focus on your business." },
              { title: "Consistent Performance", desc: "Monthly optimization keeps your site fast and reliable." },
              { title: "Reduced Downtime Risk", desc: "Proactive monitoring and maintenance prevent issues before they happen." },
              { title: "Evolves With Your Business", desc: "Your website grows and adapts as your business scales." },
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for hassle-free website management?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">Choose a subscription plan and let us keep your website performing at its best.</p>
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
