"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  BsMoonStarsFill,
  BsSun,
  BsArrowUpRight,
} from "react-icons/bs";

import {
  HiMenu,
  HiX,
} from "react-icons/hi";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          scrolled
            ? "backdrop-blur-xl bg-[#050816]/80 border-b border-cyan-500/10 shadow-2xl shadow-cyan-500/5"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            href="#hero"
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition duration-300">
                N
              </div>

              <div className="absolute inset-0 rounded-2xl bg-cyan-400 blur-xl opacity-0 group-hover:opacity-40 transition duration-500" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-black text-white tracking-wide">
                Nethmi Rajapaksha
              </h1>

              <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">
                Software Engineer
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-cyan-300 transition duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">
            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Nnavodya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nethmi-rajapaksha-465335359"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* RESUME BUTTON */}
            <a
              href="/cv.pdf"
              target="_blank"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume
                <BsArrowUpRight />
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-400 to-blue-500" />
            </a>

            {/* THEME TOGGLE */}
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-yellow-300 hover:bg-white/10 hover:scale-110 transition-all duration-300"
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
                  <BsSun className="text-lg" />
                ) : (
                  <BsMoonStarsFill className="text-lg" />
                ))}
            </button>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="lg:hidden flex items-center gap-3">
            {/* THEME */}
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-white/10 transition duration-300"
            >
              {mounted &&
                (theme === "dark" ? (
                  <BsSun className="text-lg text-yellow-300" />
                ) : (
                  <BsMoonStarsFill className="text-lg text-cyan-300" />
                ))}
            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition duration-300"
            >
              {isOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/10 bg-[#050816]/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/20 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}

              {/* MOBILE RESUME */}
              <a
                href="/cv.pdf"
                target="_blank"
                className="mt-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-center font-semibold text-white"
              >
                Download Resume
              </a>

              {/* MOBILE SOCIALS */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href="https://github.com/Nnavodya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/nethmi-rajapaksha-465335359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}