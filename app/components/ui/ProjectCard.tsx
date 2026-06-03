"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ProjectHome } from "@/app/lib/types";

interface ProjectCardProps {
  project: ProjectHome;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="bg-[#F2ECF1] flex flex-col gap-4">
        <div className="px-4 pt-10 pb-4">
          <div className="h-36 sm:h-38 lg:h-44 w-full rounded-2xl overflow-hidden relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
        <div className="bg-[#95BDE5] h-20 sm:h-24 flex items-center justify-center ">
          <h3 className="text-[#F2ECF1] text-center font-semibold">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
