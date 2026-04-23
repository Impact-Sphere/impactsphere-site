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
      className="group cursor-pointer h-full"
    >
      <div className="glass-card rounded-[44px] relative overflow-hidden h-full flex flex-col justify-between">
        <div className="p-4">
          <div className="aspect-[3/4] w-full relative rounded-2xl overflow-hidden ">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
        <div className="nav-glass rounded-[44px] p-4 flex-1 flex flex-col justify-center">
          <div className="text-center">
            <h3 className="font-bold text-[#3e2a8a] mb-1">{member.name}</h3>
            <p className="font-normal text-[#3e2a8a]">{member.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
