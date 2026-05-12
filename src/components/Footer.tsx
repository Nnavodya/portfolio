"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Nnavodya",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/nethmi-rajapaksha-465335359",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/nethmi2988",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:nethmirajapaksha038@gmail.com",
    },
  ];

  const quickLinks = [
    { label: "About Me", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Articles", href: "#articles" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#050816] border-t border-cyan-500/10 text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

      {/* Main Footer */}
      <div className="relative z-10 py-12 md:py-16 px-6 md:px-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">

            <motion.h3
              whileHover={{ scale: 1.03 }}
              className="text-3xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Nethmi Rajapaksha
            </motion.h3>

            <p className="text-sm leading-7 text-gray-400 text-center sm:text-left max-w-xs">
              Software Engineering Undergraduate passionate
              about Full-Stack Development, UI/UX Design,
              and Cloud Technologies.
            </p>

            {/* Availability */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-green-300 font-medium">
                Available for Internships
              </span>
            </div>

            {/* Download CV */}
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0px 0px 25px rgba(34,211,238,0.35)",
              }}
              whileTap={{ scale: 0.98 }}
              href="/cv.pdf"
              download
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300"
            >
              <FaDownload />

              Download CV
            </motion.a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">

            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3 text-center sm:text-left">

              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative w-fit text-sm text-gray-400 transition duration-300 hover:text-cyan-300"
                >
                  {link.label}

                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center sm:items-start">

            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Resources
            </h4>

            <div className="flex flex-col gap-3 text-center sm:text-left">

              <a
                href="https://github.com/Nnavodya"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-fit text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                GitHub Profile

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="https://medium.com/@nethmirajapaksha"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-fit text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                Medium Articles

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="#contact"
                className="group relative w-fit text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                Contact Form

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center sm:items-start">

            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Connect
            </h4>

            <div className="flex gap-4 flex-wrap">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    whileHover={{
                      scale: 1.12,
                      y: -3,
                      boxShadow:
                        "0px 0px 20px rgba(34,211,238,0.25)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10" />

      <div className="relative z-10 py-6 px-6 text-center">

        <p className="text-sm text-gray-400 leading-7">

          <span className="block md:inline">
            © {currentYear} Nethmi Rajapaksha.
            All rights reserved.
          </span>

          <span className="hidden md:inline mx-2">
            •
          </span>

          <span className="block md:inline">
            Crafted with{" "}
            <span className="text-cyan-400">
              Next.js
            </span>,{" "}
            <span className="text-blue-400">
              Tailwind CSS
            </span>{" "}
            &{" "}
            <span className="text-cyan-300">
              Framer Motion
            </span>
          </span>
        </p>
      </div>
    </motion.footer>
  );
}