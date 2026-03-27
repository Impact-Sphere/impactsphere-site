"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <Link
            href="/"
            className="font-sans text-lg sm:text-xl font-bold text-deep-purple"
          >
            IMPACT SPHERE
          </Link>

          <div className="flex items-center gap-6 text-sm text-primary-purple">
            <button
              type="button"
              className="hover:text-deep-purple transition-colors"
            >
              Privacy
            </button>
            <button
              type="button"
              className="hover:text-deep-purple transition-colors"
            >
              Terms
            </button>
            <button
              type="button"
              className="hover:text-deep-purple transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="text-xs sm:text-sm text-primary-purple">
            © {currentYear} Impact Sphere. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
