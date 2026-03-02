"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Promoora completely transformed our online presence. Our admissions went up 40% within the first two months of launching the new website.",
    name: "Rajesh Kapoor",
    role: "Founder",
    company: "CoachPro Academy",
    initials: "RK",
    color: "from-violet-500 to-indigo-600",
  },
  {
    quote:
      "The team understood exactly what a gym website needs — energy, speed, and conversion. We saw a 3x increase in membership inquiries.",
    name: "Sneha Patel",
    role: "Owner",
    company: "FitZone Gym",
    initials: "SP",
    color: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "Professional, fast, and they actually listen. Our patients can now book appointments online and it's been a game-changer for us.",
    name: "Dr. Amit Verma",
    role: "Director",
    company: "MediCare Plus",
    initials: "AV",
    color: "from-sky-500 to-blue-600",
  },
  {
    quote:
      "We went from having no online presence to a website that looks better than most funded startups. The subscription model keeps it always fresh.",
    name: "Priya Sharma",
    role: "Co-Founder",
    company: "BrandCraft Studio",
    initials: "PS",
    color: "from-rose-500 to-pink-600",
  },
  {
    quote:
      "The ongoing support is what sets Promoora apart. They don't just build and leave — they genuinely help your business grow online.",
    name: "Vikram Singh",
    role: "CEO",
    company: "EduSpark Learning",
    initials: "VS",
    color: "from-amber-500 to-orange-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-dark text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Card container */}
          <div className="relative min-h-80 md:min-h-70 flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full max-w-3xl mx-auto text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 relative">
                  {/* Decorative quote mark */}
                  <div className="absolute top-6 left-8 text-6xl text-accent/10 font-serif leading-none select-none">
                    &ldquo;
                  </div>

                  {/* Subtle glow behind card */}
                  <div className="absolute -inset-4 rounded-4xl bg-accent/5 blur-2xl -z-10" />

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {t.initials}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-navy-950">{t.name}</p>
                      <p className="text-sm text-slate-500">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2.5 bg-accent"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
