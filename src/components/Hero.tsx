"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="show"
      variants={container}
      className="scroll-mt-24 relative min-h-[90vh] flex items-center justify-center text-gray-900 dark:text-white px-6 md:px-12 overflow-hidden bg-white dark:bg-[#0b0f1e]"
    >

      {/* Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* Availability Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/10 text-green-300 text-sm font-medium backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Internships
          </motion.div>

          {/* Heading */}
          <motion.div
            className="space-y-3"
            variants={item}
          >
            <p className="text-lg sm:text-xl font-semibold text-blue-500 tracking-[0.2em] uppercase">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              Nethmi <br />
              Rajapaksha
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            variants={item}
            className="mt-5 text-xl sm:text-2xl font-medium text-gray-300 leading-relaxed"
          >
            Aspiring Full-Stack Developer & Software Engineering Undergraduate
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-base sm:text-lg leading-9 text-gray-400"
          >
            Passionate about building scalable web applications and creating
            clean, user-friendly digital experiences. Interested in full-stack
            development, cloud technologies, and modern software engineering
            practices while continuously improving technical and problem-solving
            skills.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {["React", "Next.js", "Node.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-sm font-medium hover:bg-blue-500/20 transition text-gray-200 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-center md:justify-start"
          >

            <a
              href="/cv.pdf"
              download="Nethmi_Rajapaksha_CV.pdf"
              className="px-8 py-3.5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold shadow-xl shadow-blue-500/20 text-center"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="px-8 py-3.5 border border-blue-500 text-blue-400 rounded-2xl hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 font-semibold text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-105 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-center border border-cyan-400/20"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-3 gap-4 max-w-lg"
          >
            {[
              { number: "3+", label: "Projects" },
              { number: "10+", label: "Technologies" },
              { number: "5+", label: "Articles" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <h3 className="text-2xl font-bold text-white">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="mt-12 flex gap-5 justify-center md:justify-start"
          >
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={
                  i === 0
                    ? "https://github.com/Nnavodya"
                    : i === 1
                    ? "https://www.linkedin.com/in/nethmi-rajapaksha-465335359"
                    : "https://instagram.com/nethmi2988"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-2xl text-gray-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative group"
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 blur-md opacity-60 group-hover:opacity-90 transition duration-500"></div>

            <img
              src="/my-photo.jpeg"
              alt="Nethmi Rajapaksha"
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-slate-900 shadow-2xl transition duration-500 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm"
      >
        ↓ Scroll
      </motion.div>
    </motion.section>
  );
}