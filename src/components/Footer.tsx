"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
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
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nethmi Rajapaksha
            </h3>

            <p className="text-gray-400 leading-7 text-sm">
              Software Engineering Undergraduate passionate
              about full-stack development, UI/UX design,
              cloud technologies, and building impactful
              digital experiences.
            </p>

            {/* Mini Badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for Internships
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-all duration-300 text-sm"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-cyan-400 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Resources
            </h4>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/Nnavodya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-all duration-300 text-sm"
              >
                <span className="w-0 group-hover:w-3 h-[1px] bg-cyan-400 transition-all duration-300" />
                GitHub Profile
              </a>

              <a
                href="https://medium.com/@nethmirajapaksha"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-all duration-300 text-sm"
              >
                <span className="w-0 group-hover:w-3 h-[1px] bg-cyan-400 transition-all duration-300" />
                Medium Articles
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-all duration-300 text-sm"
              >
                <span className="w-0 group-hover:w-3 h-[1px] bg-cyan-400 transition-all duration-300" />
                Contact Form
              </a>
            </div>
          </motion.div>

          {/* Social + Back To Top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
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
                      scale: 1.12,
                      y: -3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition-all duration-300"
                    title={social.name}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transition duration-300" />

                    <Icon className="relative z-10 text-lg text-gray-300 group-hover:text-cyan-300 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>

            {/* Back To Top */}
            <a
              href="#hero"
              className="mt-8 group flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-300 transition-all duration-300 w-fit"
            >
              <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-cyan-400/40 transition-all duration-300">
                <FaArrowUp className="text-xs" />
              </div>

              Back to top
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-center">
          <p className="text-sm text-gray-400 leading-7">
            © {currentYear}{" "}
            <span className="text-white font-medium">
              Nethmi Rajapaksha
            </span>
            . All rights reserved.
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Built with{" "}
            <span className="text-cyan-400">Next.js</span>,{" "}
            <span className="text-blue-400">Tailwind CSS</span>{" "}
            & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}