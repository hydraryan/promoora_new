"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BUSINESS_TYPES = [
  "Coaching Institute",
  "Gym",
  "Clinic",
  "Real Estate",
  "Local Brand",
  "Other",
];

const LOOKING_FOR = [
  "New Website",
  "Redesign",
  "Subscription Plan",
  "Not sure",
];

const BUDGETS = [
  "₹15k – ₹30k",
  "₹30k – ₹60k",
  "₹60k+",
  "Prefer to discuss",
];

const TIMELINES = [
  "Immediately",
  "Within 30 days",
  "Just exploring",
];

const STEPS = ["Basic Info", "Business", "Intent", "Timeline"];

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((opt) => (
        <label
          key={opt}
          className={`relative flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer border transition-all duration-200 ${
            value === opt
              ? "border-accent/60 bg-accent/8 text-white"
              : "border-white/8 bg-white/3 text-slate-400 hover:border-white/15 hover:bg-white/5"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          <span
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
              value === opt ? "border-accent" : "border-slate-600"
            }`}
          >
            {value === opt && (
              <span className="w-2 h-2 rounded-full bg-accent" />
            )}
          </span>
          <span className="text-sm">{opt}</span>
        </label>
      ))}
    </div>
  );
}

export default function BookACallPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Form state
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [hasWebsite, setHasWebsite] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const canNext = () => {
    if (step === 0) return fullName && businessName && email && phone;
    if (step === 1) return businessType && hasWebsite;
    if (step === 2) return lookingFor && budget;
    if (step === 3) return timeline;
    return false;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/book-a-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, businessName, email, phone, businessType, hasWebsite, lookingFor, budget, timeline }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="relative min-h-screen bg-navy-950 flex items-center justify-center px-6">
        <div className="absolute top-0 left-1/3 w-150 h-100 bg-accent/4 rounded-full blur-[200px]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-md w-full text-center py-20"
        >
          <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            You&apos;re All Set!
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Thanks, {fullName.split(" ")[0]}! We&apos;ll reach out within 24 hours to schedule your strategy call.
          </p>
          <Link href="/" className="btn-futuristic inline-block">
            Back to Home
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-navy-950 pt-28 pb-20">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-150 h-100 bg-accent/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-xl mx-auto px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Book a Strategy Call
          </h1>
          <p className="text-slate-400 mb-8">
            Takes ~60 seconds. We&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="flex items-center gap-1 mb-10">
          {STEPS.map((label, i) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex items-center">
                <div
                  className={`h-1.5 w-full rounded-full transition-all duration-500 ${
                    i <= step ? "bg-accent" : "bg-white/8"
                  }`}
                />
              </div>
              <span
                className={`text-[11px] font-medium transition-colors hidden sm:block ${
                  i <= step ? "text-accent" : "text-slate-600"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {/* Step 0 — Basic Info */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h2 className="text-lg font-semibold text-white mb-1">Basic Info</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Business Name *</label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Acme Fitness Studio"
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@business.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 1 — Business Context */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-lg font-semibold text-white mb-1">Business Context</h2>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">What type of business do you run? *</label>
                  <div className="relative">
                    <select
                      required
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-white appearance-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-navy-900 text-slate-500">
                        Select your industry
                      </option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-navy-900 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Do you currently have a website? *</label>
                  <RadioGroup
                    name="hasWebsite"
                    options={["Yes", "No"]}
                    value={hasWebsite}
                    onChange={setHasWebsite}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2 — Intent Qualification */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-lg font-semibold text-white mb-1">What Are You Looking For?</h2>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Service type *</label>
                  <RadioGroup
                    name="lookingFor"
                    options={LOOKING_FOR}
                    value={lookingFor}
                    onChange={setLookingFor}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Estimated budget range *</label>
                  <RadioGroup
                    name="budget"
                    options={BUDGETS}
                    value={budget}
                    onChange={setBudget}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3 — Timeline */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-lg font-semibold text-white mb-1">Timeline</h2>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">When are you looking to start? *</label>
                  <RadioGroup
                    name="timeline"
                    options={TIMELINES}
                    value={timeline}
                    onChange={setTimeline}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 gap-4">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-xl text-sm text-slate-400 border border-white/10 hover:border-white/20 hover:text-white transition-all"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                disabled={!canNext()}
                onClick={() => setStep(step + 1)}
                className="btn-futuristic disabled:opacity-40 disabled:pointer-events-none"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canNext() || submitting}
                className="btn-futuristic disabled:opacity-40 disabled:pointer-events-none"
              >
                {submitting ? "Submitting…" : "Schedule Strategy Call"}
              </button>
            )}
          </div>

          {error && (
            <p className="mt-4 text-center text-sm text-red-400">{error}</p>
          )}
        </form>

        {/* Trust note */}
        <p className="mt-8 text-center text-xs text-slate-600">
          No spam. No commitment. We respect your privacy.
        </p>
      </div>
    </main>
  );
}
