
"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
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

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.03 }}
              className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
            >
              Nethmi.dev
            </motion.h3>

            <p className="text-gray-400 leading-7 text-sm">
              Software Engineering Undergraduate passionate about
              full-stack development, cloud technologies, and
              building scalable real-world applications.
            </p>

            <div className="mt-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300">
                ● Open to Internship Opportunities
              </span>
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
                  className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
                >
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
              <a
                href="https://github.com/Nnavodya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                GitHub Profile
              </a>

              <a
                href="https://medium.com/@nethmirajapaksha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                Medium Articles
              </a>

              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                Contact Form
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
              >
                Download CV
              </a>
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
                      y: -4,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Icon className="text-lg text-gray-300 group-hover:text-cyan-300 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>

            {/* Scroll To Top */}
            <motion.a
              href="#hero"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Back to Top
              <FaArrowUp />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} Nethmi Rajapaksha. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 text-center md:text-right">
            Built with{" "}
            <span className="text-cyan-400">Next.js</span> &{" "}
            <span className="text-blue-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}