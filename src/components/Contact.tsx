"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "nethmirajapaksha038@gmail.com",
      href: "mailto:nethmirajapaksha038@gmail.com",
      color: "hover:text-red-400",
    },
    {
      icon: FaPhone,
      label: "Call/SMS",
      value: "+94 704 122 495",
      href: "tel:+94704122495",
      color: "hover:text-green-400",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+94 704 122 495",
      href: "https://wa.me/94704122495",
      color: "hover:text-green-500",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Nethmi Rajapaksha",
      href: "https://www.linkedin.com/in/nethmi-rajapaksha-465335359",
      color: "hover:text-blue-400",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Nnavodya",
      href: "https://github.com/Nnavodya",
      color: "hover:text-gray-400",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden py-24 px-6 md:px-10 bg-[#050816] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Let&apos;s Work Together
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 leading-8 text-base md:text-lg">
            I’m always interested in internship opportunities, collaborations,
            and exciting software engineering projects. Feel free to reach out
            anytime.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2">
              Get in Touch
            </h3>

            <p className="text-gray-400 mb-8 leading-7">
              You can contact me through email, phone, WhatsApp, or my social
              platforms.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    variants={item}
                    whileHover={{ scale: 1.02, y: -3 }}
                    target={
                      info.label === "Email" || info.label === "Call/SMS"
                        ? "_self"
                        : "_blank"
                    }
                    rel={
                      info.label === "Email" || info.label === "Call/SMS"
                        ? ""
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400/30 p-5 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-2xl text-gray-300 transition-all duration-300 ${info.color}`}
                    >
                      <Icon />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">
                        {info.label}
                      </h4>

                      <p className="text-sm text-gray-400 break-all">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2">
              Send Message
            </h3>

            <p className="text-gray-400 mb-8 leading-7">
              Have a project idea or internship opportunity? Send me a message.
            </p>

            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />

              <textarea
                placeholder="Your Message"
                rows={7}
                className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}