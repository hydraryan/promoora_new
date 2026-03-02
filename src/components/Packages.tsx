"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ── Plan data ─────────────────────────────────── */
type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  period?: string;
  description: string;
  features: { text: string; highlighted?: boolean }[];
  highlighted?: boolean;
  badge?: string;
};

const oneTimePlans: Plan[] = [
  {
    name: "Starter",
    price: "₹9,999",
    description:
      "A clean, professional site to establish your online presence — perfect for getting started.",
    features: [
      { text: "Up to 5 pages" },
      { text: "Mobile responsive design" },
      { text: "Contact form integration" },
      { text: "Basic SEO setup" },
      { text: "1 revision round" },
      { text: "Delivery in 7 days" },
      { text: "1 month free support" },
    ],
  },
  {
    name: "Growth",
    price: "₹19,999",
    description:
      "Built to convert — advanced design, animations, and SEO for businesses ready to grow online.",
    features: [
      { text: "Up to 10 pages" },
      { text: "Advanced animations & micro-interactions", highlighted: true },
      { text: "CMS integration (blog/content)" },
      { text: "On-page SEO optimization", highlighted: true },
      { text: "3 revision rounds" },
      { text: "Performance & speed optimization" },
      { text: "Google Analytics setup" },
      { text: "3 months free support", highlighted: true },
    ],
    highlighted: true,
    badge: "Recommended",
  },
  {
    name: "Premium",
    price: "₹29,999",
    description:
      "The full package — custom everything, e-commerce ready, built for scale and maximum impact.",
    features: [
      { text: "Unlimited pages" },
      { text: "Custom design system", highlighted: true },
      { text: "E-commerce / booking integration", highlighted: true },
      { text: "Full technical SEO suite" },
      { text: "Priority support" },
      { text: "Analytics dashboard" },
      { text: "A/B testing setup" },
      { text: "6 months free support", highlighted: true },
    ],
  },
];

const subscriptionPlans: Plan[] = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/mo",
    description:
      "Essential maintenance to keep your site running smoothly and looking fresh.",
    features: [
      { text: "Website hosting included" },
      { text: "Monthly content updates" },
      { text: "Basic analytics reporting" },
      { text: "Email support" },
      { text: "Uptime monitoring" },
      { text: "SSL certificate" },
    ],
  },
  {
    name: "Growth",
    price: "₹9,999",
    period: "/mo",
    description:
      "Ongoing optimization and growth support to scale your online presence.",
    features: [
      { text: "Everything in Starter" },
      { text: "Weekly content updates", highlighted: true },
      { text: "A/B testing & experiments" },
      { text: "Priority support (< 24h)" },
      { text: "Monthly performance reports", highlighted: true },
      { text: "SEO monitoring & improvements" },
      { text: "Conversion tracking setup", highlighted: true },
    ],
    highlighted: true,
    badge: "Best Value",
  },
  {
    name: "Scale",
    price: "₹18,999",
    period: "/mo",
    description:
      "Full-service digital growth — your dedicated web team on retainer.",
    features: [
      { text: "Everything in Growth" },
      { text: "Dedicated project manager", highlighted: true },
      { text: "Custom feature development" },
      { text: "24/7 priority support" },
      { text: "Growth strategy sessions", highlighted: true },
      { text: "Monthly audit reports" },
      { text: "Unlimited revisions", highlighted: true },
      { text: "Custom integrations" },
    ],
  },
];

/* ── Plan Card ─────────────────────────────────── */
function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl transition-all duration-500 ${
        plan.highlighted
          ? "bg-linear-to-br from-accent/10 via-accent-dark/5 to-accent/10 border-2 border-accent/30 shadow-2xl shadow-accent/10 lg:scale-105"
          : "glass hover:bg-white/6 border border-white/5"
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 sm:px-5 bg-accent text-navy-950 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-accent/25 whitespace-nowrap">
          {plan.badge}
        </div>
      )}

      {/* Plan name */}
      <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${plan.highlighted ? "text-accent" : "text-slate-500"}`}>
        {plan.name}
      </h3>

      {/* Price */}
      <div className="mb-2">
        {plan.originalPrice && (
          <span className="text-sm text-slate-500 line-through mr-2">
            {plan.originalPrice}
          </span>
        )}
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-slate-400 text-base ml-1">{plan.period}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-8 leading-relaxed min-h-12">
        {plan.description}
      </p>

      {/* Divider */}
      <div className={`h-px mb-8 ${plan.highlighted ? "bg-accent/20" : "bg-white/10"}`} />

      {/* Features */}
      <ul className="flex-1 space-y-3.5 mb-8">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3 text-sm">
            <svg
              className={`w-5 h-5 shrink-0 mt-0.5 ${feature.highlighted ? "text-accent" : "text-accent/60"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={feature.highlighted ? "text-white font-medium" : "text-slate-300"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href="/get-started"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`block text-center py-4 rounded-2xl font-semibold text-base transition-all duration-300 ${
          plan.highlighted
            ? "bg-accent text-navy-950 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            : "border border-white/15 text-white hover:bg-white/5 hover:border-white/25"
        }`}
      >
        {plan.highlighted ? "Get Started — Best Deal" : "Get Started"}
      </motion.a>
    </motion.div>
  );
}

/* ── Section ───────────────────────────────────── */
export default function Packages() {
  const [activeTab, setActiveTab] = useState<"one-time" | "subscription">("one-time");
  const plans = activeTab === "one-time" ? oneTimePlans : subscriptionPlans;

  return (
    <section id="packages" className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-125 h-125 bg-accent/3 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-accent-dark/3 rounded-full blur-[180px]" />
      <div className="absolute top-0 right-1/4 w-75 h-75 bg-accent/2 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Simple Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Transparent Packages,
            <br />
            <span className="gradient-text">No Hidden Costs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Choose a one-time build or a subscription partnership — whatever fits
            your business and budget. All prices in INR.
          </motion.p>
        </div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex p-1.5 rounded-2xl glass">
            {(
              [
                { key: "one-time", label: "One-Time Build", icon: "🏗️" },
                { key: "subscription", label: "Monthly Plan", icon: "🔄" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === tab.key
                    ? "bg-accent text-navy-950 shadow-lg shadow-accent/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plans Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
          >
            {plans.map((plan, i) => (
              <PlanCard key={`${activeTab}-${plan.name}`} plan={plan} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 text-slate-500 text-sm"
        >
          All prices are exclusive of GST. Custom requirements? {" "}
          <a href="/book-a-call" className="text-accent hover:text-accent-light underline underline-offset-4 transition-colors">
            Let&apos;s talk
          </a>.
        </motion.p>
      </div>
    </section>
  );
}
