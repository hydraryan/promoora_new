"use client";

import { motion } from "framer-motion";

/* ── Demo projects with live links ── */
const projects = [
  {
    title: "Gym & Fitness",
    category: "Fitness & Wellness",
    gradient: "from-emerald-500 to-teal-700",
    emoji: "🏋️",
    demoUrl: "https://themewagon.github.io/gymlife/",
    description: "Membership-focused landing page for local gyms with class schedules and booking CTAs.",
  },
  {
    title: "Coaching Institute",
    category: "Education & Coaching",
    gradient: "from-violet-600 to-indigo-700",
    emoji: "🎓",
    demoUrl: "https://themewagon.github.io/E-learning/",
    description: "Conversion-optimized site for coaching businesses with course listings and lead capture.",
  },
  {
    title: "Clinic & Healthcare",
    category: "Healthcare",
    gradient: "from-sky-500 to-blue-700",
    emoji: "🏥",
    demoUrl: "https://themewagon.github.io/Clinic/",
    description: "Patient-friendly clinic website with appointment scheduling and doctor profiles.",
  },
  {
    title: "Real Estate",
    category: "Property & Real Estate",
    gradient: "from-amber-500 to-orange-700",
    emoji: "🏠",
    demoUrl: "https://themewagon.github.io/findstate/",
    description: "Property listing site with search filters, virtual tours, and agent profiles.",
  },
  {
    title: "Café & Restaurant",
    category: "Food & Hospitality",
    gradient: "from-rose-500 to-pink-700",
    emoji: "☕",
    demoUrl: "http://themewagon.github.io/tasty/",
    description: "Appetizing restaurant site with menu showcase, reservations, and online ordering.",
  },
  {
    title: "Admin Dashboard",
    category: "SaaS & Dashboards",
    gradient: "from-cyan-500 to-blue-700",
    emoji: "📊",
    demoUrl: "https://prium.github.io/phoenix-tailwind/v1.0.0-beta/",
    description: "Feature-rich admin panel with analytics, charts, and data management interfaces.",
  },
  {
    title: "E-Commerce Store",
    category: "Online Shopping",
    gradient: "from-fuchsia-500 to-purple-700",
    emoji: "🛒",
    demoUrl: "https://themewagon.github.io/kaira/",
    description: "Modern e-commerce storefront with product catalog, cart, and checkout flow.",
  },
  {
    title: "Portfolio Website",
    category: "Personal & Creative",
    gradient: "from-teal-500 to-emerald-700",
    emoji: "💼",
    demoUrl: "https://themewagon.github.io/geeky-nextjs/",
    description: "Clean portfolio and blog layout to showcase work, skills, and personal brand.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ── Project Card ──────────────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      className="group relative rounded-xl overflow-hidden bg-white/3 border border-white/6 hover:border-accent/30 transition-all duration-400 flex flex-col"
    >
      {/* Compact gradient header */}
      <div className={`aspect-video bg-linear-to-br ${project.gradient} relative`}>
        {/* Browser chrome dots */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>
        {/* URL bar */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2/5 h-4 bg-white/10 rounded-full" />

        {/* Center emoji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
            {project.emoji}
          </span>
        </div>

        {/* Demo badge */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-md">
          <svg className="w-3 h-3 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span className="text-white/90 text-[9px] font-bold uppercase tracking-wider">Demo</span>
        </div>

        {/* Wireframe lines */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="h-1.5 w-1/3 bg-white/30 rounded mb-1.5" />
          <div className="h-1 w-full bg-white/15 rounded mb-1" />
          <div className="h-1 w-2/3 bg-white/15 rounded" />
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-accent/80 text-[10px] font-semibold uppercase tracking-wider mb-1">
          {project.category}
        </p>
        <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-slate-400 text-xs leading-relaxed mb-3 flex-1">
          {project.description}
        </p>

        {/* View Demo link */}
        <div className="flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2.5 transition-all duration-300">
          <span>View Live Demo</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>

      {/* Hover glow ring */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-accent/20 transition-all duration-400 pointer-events-none" />
    </motion.a>
  );
}

/* ── Section ───────────────────────────────────── */
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-navy-900 overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-accent/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold tracking-wider uppercase mb-4"
          >
            What We Can Build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Concept Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Explore live demo websites across industries — click any card to
            see the kind of sites we build for our clients.
          </motion.p>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 text-slate-500 text-sm"
        >
          These are demo references showcasing the types of websites we build.
          Your project will be custom-designed to match your brand.
        </motion.p>
      </div>
    </section>
  );
}
