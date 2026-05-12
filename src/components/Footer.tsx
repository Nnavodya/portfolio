"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
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
    <footer className="bg-[#050816] border-t border-cyan-500/10 text-white">

      {/* Main Footer */}
      <div className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">

            <h3 className="text-2xl font-black mb-3">
              My Portfolio
            </h3>

            <p className="text-sm leading-7 text-gray-400 text-center sm:text-left max-w-xs">
              Software Engineering Undergraduate passionate
              about Full-Stack Development, UI/UX Design,
              and Cloud Technologies.
            </p>

            {/* Availability Badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-green-300 font-medium">
                Available for Internships
              </span>
            </div>
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
                  className="text-sm text-gray-400 hover:text-cyan-300 transition duration-300"
                >
                  {link.label}
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
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center sm:items-start">

            <h4 className="text-lg font-semibold mb-5 text-cyan-400">
              Connect
            </h4>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10" />

      <div className="py-6 px-6 text-center">
        <p className="text-sm text-gray-400 leading-7">

          <span className="block md:inline">
            © {currentYear} Nethmi Rajapaksha.
            All rights reserved.
          </span>

          <span className="hidden md:inline mx-2">
            •
          </span>

          <span className="block md:inline">
            Built with{" "}
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
    </footer>
  );
}