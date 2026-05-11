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
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#050816] px-6 md:px-12 text-white"
    >

      {/* Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          {/* Availability Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/10 text-green-300 text-sm font-medium backdrop-blur-sm mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Internships
          </motion.div>

          {/* Heading */}
          <motion.div
            className="space-y-4"
            variants={item}
          >
            <p className="text-lg sm:text-xl font-semibold text-blue-400 tracking-[0.25em] uppercase">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
              <span className="text-white">
                Nethmi
              </span>

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Rajapaksha
              </span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            variants={item}
            className="mt-6 text-xl sm:text-2xl font-medium text-gray-300 leading-relaxed max-w-2xl"
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
            practices while continuously improving technical and problem-solving skills.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {["React", "Next.js", "Node.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-200 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-center lg:justify-start"
          >

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download="Nethmi_Rajapaksha_CV.pdf"
              className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl shadow-blue-500/20 hover:scale-105 transition-all duration-300 text-center"
            >
              Download CV
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-2xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold hover:scale-105 transition-all duration-300 text-center"
            >
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-105 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-center border border-cyan-400/20"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0"
          >
            {[
              { number: "3+", label: "Projects" },
              { number: "10+", label: "Technologies" },
              { number: "5+", label: "Articles" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="mt-12 flex gap-5 justify-center lg:justify-start"
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
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-2xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >

            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-2xl opacity-40 scale-110"></div>

            {/* Glass Ring */}
            <div className="absolute inset-0 rounded-full border border-white/10 backdrop-blur-md"></div>

            {/* Image */}
            <img
              src="/my-photo.jpeg"
              alt="Nethmi Rajapaksha"
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] xl:w-[470px] xl:h-[470px] rounded-full object-cover border-[6px] border-[#0b1220] shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-sm tracking-wide"
      >
        ↓ Scroll
      </motion.div>
    </motion.section>
  );
}