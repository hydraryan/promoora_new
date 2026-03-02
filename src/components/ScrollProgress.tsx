"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.75 bg-linear-to-r from-accent-dark via-accent to-accent-light z-100 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
