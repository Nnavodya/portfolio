"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

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
    { label: "About", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Articles", href: "#articles" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10 text-white">

      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Main Footer */}
      <div className="relative z-10 px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.03 }}
              className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4"
            >
              Nethmi.dev
            </motion.h3>

            <p className="text-gray-400 leading-7 text-sm">
              Software Engineering Undergraduate passionate about
              full-stack development, cloud technologies, and
              building scalable real-world software solutions.
            </p>

            {/* Availability Badge */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Open to Internships
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300">
                Full-Stack Developer
              </span>
            </div>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <FaMapMarkerAlt className="text-cyan-400" />
              Sri Lanka
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-cyan-400 transition-all duration-300" />
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Resources
            </h4>

            <div className="flex flex-col gap-3">
              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/Nnavodya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                GitHub Profile
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="https://medium.com/@nethmirajapaksha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                Medium Articles
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="#contact"
                className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                Contact Form
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="/cv.pdf"
                target="_blank"
                className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                Download CV
              </motion.a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Connect
            </h4>

            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl" />

                    <Icon className="relative z-10 text-lg text-gray-300 group-hover:text-cyan-300 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-5"
            >
              <h5 className="font-semibold text-white mb-2">
                Looking for a developer?
              </h5>

              <p className="text-sm text-gray-400 leading-6 mb-4">
                I’m currently available for internship opportunities
                and exciting collaborations.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 backdrop-blur-md bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-5">

          {/* Left */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-500">
              © {currentYear} Nethmi Rajapaksha. All rights reserved.
            </p>

            <p className="text-xs text-gray-600 mt-1">
              Designed & Developed by Nethmi.dev
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Built with
            <span className="text-cyan-400 font-medium">
              Next.js
            </span>
            &
            <span className="text-blue-400 font-medium">
              Tailwind CSS
            </span>
          </div>

          {/* Right */}
          <motion.a
            href="#hero"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
          >
            Back to Top

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <FaArrowUp className="text-cyan-400 group-hover:text-cyan-300" />
            </motion.div>
          </motion.a>
        </div>
      </div>

      {/* Floating Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Tiny Signature */}
      <div className="absolute bottom-2 right-4 hidden md:flex items-center gap-1 text-[10px] text-gray-600">
        Made with <FaHeart className="text-red-400" /> using React & Next.js
      </div>
    </footer>
  );
}