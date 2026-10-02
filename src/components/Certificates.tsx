"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

export default function Certificates() {
  // TODO: Replace with your real certificates (name, issuer, date, credential link, image)
  const certificates = [
    {
      title: "Certificate Title",
      issuer: "Issuing Organization",
      date: "2026",
      image: "/certificate-placeholder.png",
      credentialUrl: "#",
    },
  ];

  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#050816] py-24 px-6 md:px-12 text-white"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl text-cyan-300 text-sm font-medium mb-6">
            <FaCertificate className="text-cyan-400" />
            Achievements
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Certificates &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-8">
            Courses and certifications I&apos;ve completed to keep building my
            skills.
          </p>
        </motion.div>

        {/* CERTIFICATE GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl hover:border-cyan-400/30 transition-all duration-500"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-5">
                  <HiBadgeCheck className="text-white text-2xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-gray-300 font-medium mb-3">{cert.issuer}</p>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span>{cert.date}</span>
                </div>

                {/* Credential Link */}
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm font-semibold transition"
                  >
                    View Credential
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}