"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BsMoonStarsFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "About Me", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Articles", href: "#articles" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 sm:p-6 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl sm:text-2xl font-bold whitespace-nowrap">My Portfolio</h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm lg:text-base hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {link.name}
          </a>
        ))}

        {/* Theme Toggle Icon */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded border border-gray-400 dark:border-white hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 hover:scale-110 hover:shadow-lg"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {mounted && (theme === "dark" ? <BsSun className="text-lg text-yellow-400" /> : <BsMoonStarsFill className="text-lg text-blue-600" />)}
        </button>
      </div>

      {/* Mobile Menu Button and Theme */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 hover:scale-110 hover:shadow-lg"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {mounted && (theme === "dark" ? <BsSun className="text-lg text-yellow-400" /> : <BsMoonStarsFill className="text-lg text-blue-600" />)}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          title="Toggle Menu"
        >
          {isOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden">
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 px-4 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}