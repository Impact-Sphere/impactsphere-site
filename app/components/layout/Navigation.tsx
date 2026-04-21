"use client";

import { motion } from "framer-motion";
import { Menu, X, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "@/app/lib/auth-client";
import type { NavLink } from "@/app/lib/types";

const navLinks: NavLink[] = [
  { name: "Services", href: "/#services" },
  { name: "Our team", href: "/team" },
  { name: "About us", href: "/about" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = useSession();

  const handleLogout = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 sm:top-6 lg:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <div className="nav-glass rounded-[70px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-sans text-lg sm:text-xl lg:text-2xl font-bold text-deep-purple">
            IMPACT SPHERE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.2 }}
              whileHover={{ y: -2 }}
            >
              <Link
                href={link.href}
                className="text-sm lg:text-base text-accent-purple hover:text-primary-purple transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-accent-purple/20 animate-pulse" />
          ) : session ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/30">
                <User className="w-4 h-4 text-accent-purple" />
                <span className="text-sm font-medium text-primary-purple">
                  {session.user.name}
                </span>
                {(session.user as unknown as { role: string }).role === "admin" && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-blue text-white font-medium">
                    Admin
                  </span>
                )}
              </div>
              <motion.button
                type="button"
                onClick={handleLogout}
                className="p-2 rounded-full text-accent-purple hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Sign out"
              >
                <LogOut className="w-5 h-5" />
              </motion.button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <motion.button
                  type="button"
                  className="px-4 sm:px-5 lg:px-6 py-2 rounded-full border-2 border-accent-blue text-accent-blue text-sm font-medium hover:bg-accent-blue hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Log in
                </motion.button>
              </Link>
              <Link href="/register">
                <motion.button
                  type="button"
                  className="px-4 sm:px-5 lg:px-6 py-2 rounded-full border-2 bg-accent-blue border-accent-blue text-white text-sm font-medium hover:bg-accent-blue hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.button>
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-deep-purple"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden mt-2"
      >
        <div className="nav-glass rounded-3xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-accent-purple hover:text-primary-purple transition-colors duration-300 font-medium py-2"
            >
              {link.name}
            </Link>
          ))}
          {session ? (
            <div className="flex items-center justify-between pt-2 border-t border-accent-purple/10">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent-purple" />
                <span className="text-sm font-medium text-primary-purple">
                  {session.user.name}
                </span>
                {(session.user as unknown as { role: string }).role === "admin" && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-blue text-white font-medium">
                    Admin
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-red-500 hover:bg-red-50 transition-all duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sign out</span>
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button
                  type="button"
                  className="w-full px-6 py-2.5 rounded-full border-2 border-accent-blue text-accent-blue text-base font-medium hover:bg-accent-blue hover:text-white transition-all duration-300 mt-2"
                >
                  Log in
                </button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <button
                  type="button"
                  className="w-full px-6 py-2.5 rounded-full border-2 bg-accent-blue border-accent-blue text-white text-base font-medium hover:bg-accent-blue hover:text-white transition-all duration-300 mt-2"
                >
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
}
