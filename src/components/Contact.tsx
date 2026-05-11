"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

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
      color: "hover:text-gray-300",
    },
  ];

  // 🔥 Left side stagger
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 🔥 Item animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="p-4 sm:p-6 md:p-10 text-gray-900 dark:text-white bg-white dark:bg-[#0b0f1e]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

        {/* LEFT SIDE */}
        <motion.div
          className="flex flex-col h-full"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
            Get in Touch
          </h3>

          <div className="flex flex-col gap-3 flex-1">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={item}
                  whileHover={{ scale: 1.02, y: -3 }}
                  target={info.label === "Email" || info.label === "Call/SMS" ? "_self" : "_blank"}
                  rel={info.label === "Email" || info.label === "Call/SMS" ? "" : "noopener noreferrer"}
                  className="flex-1 p-4 sm:p-5 rounded-lg bg-linear-to-br from-blue-900/30 to-purple-900/30 border border-white/10 hover:border-blue-400 hover:from-blue-900/50 hover:to-purple-900/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-2xl sm:text-3xl transition ${info.color} shrink-0 group-hover:scale-110`}>
                      <Icon />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-300 dark:text-white mb-0.5 group-hover:text-blue-200 transition-colors">
                        {info.label}
                      </h4>

                      <p className="text-xs sm:text-sm text-gray-400 dark:text-white break-all group-hover:text-gray-300 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex flex-col h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
            Send Message
          </h3>

          <form className="flex flex-col gap-3 sm:gap-4 flex-1">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 sm:p-3 rounded border border-gray-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 hover:border-gray-300 transition-all text-sm sm:text-base"
            />

            <input
              type="email"
              placeholder="Email"
              className="p-2 sm:p-3 rounded border border-gray-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 hover:border-gray-300 transition-all text-sm sm:text-base"
            />

            <textarea
              placeholder="Message"
              className="p-2 sm:p-3 rounded border border-gray-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 hover:border-gray-300 transition-all resize-none text-sm sm:text-base flex-1 min-h-30"
            />

            <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 sm:p-3 rounded transition-all font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-600/50 hover:-translate-y-1">
              Send
            </button>
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
}