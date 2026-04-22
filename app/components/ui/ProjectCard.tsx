"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      <div className="bg-card-pink flex flex-col gap-4">
        <div className="px-4 pt-10 pb-4">
          <div className="h-40 sm:h-52 lg:h-58 w-full rounded-2xl overflow-hidden relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
        <div className="bg-card-purple h-20 sm:h-24 flex items-center justify-center ">
          <h3 className="heading-card text-text-inverse">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
