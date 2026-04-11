"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const heroItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

interface ActionButtonProps {
    children?: ReactNode;
    className?: string;
    onClick: () => void;
    name?: string;
    value?: string;
}

export default function ActionButton({
    children,
    className = "",
    onClick,
    name,
    value,
}: ActionButtonProps) {
    return (
        <motion.div variants={heroItemVariants}>
            <motion.button
                type="button"
                name={name}
                value={value}
                className={`group gap-2 sm:gap-3 mx-auto ${className}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClick}
            >
                {children}
            </motion.button>
        </motion.div>
    );
}
