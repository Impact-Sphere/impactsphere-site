"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export default function CTAButton({
  children,
  variant = "primary",
  href,
  onClick,
}: CTAButtonProps) {
  const baseClasses =
    variant === "primary"
      ? "btn-primary flex items-center gap-2 sm:gap-3 mx-auto"
      : "btn-secondary inline-flex items-center gap-2";

  const content = (
    <>
      {children}
      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${baseClasses}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
