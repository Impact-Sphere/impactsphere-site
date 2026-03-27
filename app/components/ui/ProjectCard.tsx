"use client";

import { motion } from "framer-motion";
import type { Project } from "@/app/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="card-base">
        <div className="h-64 sm:h-72 lg:h-80 w-full bg-card-pink relative">
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-card-purple flex items-center justify-center">
            <h3 className="heading-card text-white">{project.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
