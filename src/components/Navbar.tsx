"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Why Now", href: "#why-now" },
    { name: "Team", href: "#team" },
    
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#103D54]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="text-white font-semibold text-xl tracking-tight">
          Clinicae
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          {/* CTA */}
          <a
            href="mailto:kampambashula@gmail.com"
            className="px-6 py-2.5 bg-[#FF6B6B] rounded-lg text-white font-medium hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#103D54] border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="mailto:hello@clinicae.online"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 bg-[#FF6B6B] rounded-lg text-white font-medium text-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
