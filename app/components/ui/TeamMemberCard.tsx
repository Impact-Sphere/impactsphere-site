"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { TeamMember } from "@/app/lib/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="relative">
        <div
          className={`w-full aspect-[3/4] rounded-2xl sm:rounded-3xl ${member.bgColor} relative overflow-hidden`}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
          <h3 className="font-[family-name:var(--font-poppins)] text-base sm:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg">
            {member.name}
          </h3>
          <p className="font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-white/90 drop-shadow-md">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
