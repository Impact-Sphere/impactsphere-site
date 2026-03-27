"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  animate = true,
}: GlassCardProps) {
  const cardContent = (
    <div className={`glass-card p-6 sm:p-10 lg:p-12 xl:p-16 ${className}`}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}
