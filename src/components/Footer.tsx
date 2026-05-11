"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

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
    <footer className="bg-gray-50 dark:bg-[#0b0f1e] border-t border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
      {/* Main Footer Content */}
      <div className="p-4 sm:p-6 md:p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              My Portfolio
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-white text-center sm:text-left">
              Software Engineering Undergraduate
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-sm sm:text-base font-semibold mb-3 text-blue-600 dark:text-blue-400">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 text-center sm:text-left">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs sm:text-sm text-gray-400 dark:text-white hover:text-blue-400 dark:hover:text-blue-600 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-sm sm:text-base font-semibold mb-3 text-blue-600 dark:text-blue-400">
              Resources
            </h4>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <a
                href="https://github.com/Nnavodya"
                className="text-xs sm:text-sm text-gray-400 dark:text-white hover:text-blue-400 dark:hover:text-blue-600 transition"
              >
                GitHub Profile
              </a>
              <a
                href="https://medium.com/@nethmirajapaksha"
                className="text-xs sm:text-sm text-gray-400 dark:text-white hover:text-blue-400 dark:hover:text-blue-600 transition"
              >
                Medium Articles
              </a>
              <a
                href="#contact"
                className="text-xs sm:text-sm text-gray-400 dark:text-white hover:text-blue-400 dark:hover:text-blue-600 transition"
              >
                Contact Form
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-sm sm:text-base font-semibold mb-3 text-blue-600 dark:text-blue-400">
              Connect
            </h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 dark:bg-gray-900/10 hover:bg-blue-600 dark:hover:bg-blue-600 transition hover:scale-110 duration-200"
                    title={social.name}
                  >
                    <Icon className="text-sm sm:text-base" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-300/10" />

      {/* Bottom Footer */}
      <div className="p-4 sm:p-6 text-center">
        <p className="text-xs sm:text-sm text-gray-500 dark:text-white">
          <span className="block sm:inline">
            © {currentYear} Nethmi Rajapaksha. All rights reserved.
          </span>
          <span className="hidden sm:inline mx-2">•</span>
          <span className="block sm:inline">
            Built with{" "}
            <span className="text-blue-400 dark:text-blue-600">Next.js</span> &{" "}
            <span className="text-sky-400 dark:text-sky-600">Tailwind CSS</span>
          </span>
        </p>
      </div>
    </footer>
  );
}
