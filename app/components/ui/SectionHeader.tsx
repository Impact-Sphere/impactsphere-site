"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: ReactNode;
  className?: string;
  showDivider?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
  showDivider = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`text-center mb-10 sm:mb-12 lg:mb-16 ${className}`}
    >
      <h2 className="heading-section">{title}</h2>
      {subtitle}
      {showDivider && (
        <div className="w-48 sm:w-56 lg:w-72 h-1.5 sm:h-2 bg-[rgba(160,87,153,0.8)] rounded-full mx-auto mt-4" />
      )}
    </motion.div>
  );
}
