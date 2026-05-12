"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Active Section Highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(navLinks[index].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glassmorphism Navbar */}
      <div className="relative flex justify-between items-center px-6 md:px-10 py-5 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

        {/* Logo / Brand */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3"
        >
          {/* Logo Circle */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
            N
          </div>

          {/* Brand Name */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nethmi.dev
            </h1>

            <span className="text-[10px] md:text-xs text-cyan-300 tracking-wide">
              Software Engineer
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5 ${
                activeSection === link.href
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >
              {link.name}

              {/* Active Underline */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  activeSection === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            title={
              mounted
                ? theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
                : ""
            }
          >
            {mounted &&
              (theme === "dark" ? (
                <BsSun className="text-lg text-yellow-400" />
              ) : (
                <BsMoonStarsFill className="text-lg text-cyan-400" />
              ))}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
          >
            {mounted &&
              (theme === "dark" ? (
                <BsSun className="text-lg text-yellow-400" />
              ) : (
                <BsMoonStarsFill className="text-lg text-cyan-400" />
              ))}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 text-white"
          >
            {isOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#050816]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
        >
          <div className="flex flex-col px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-4 text-base border-b border-white/10 transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}