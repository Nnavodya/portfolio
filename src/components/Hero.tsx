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
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center text-gray-900 dark:text-white px-6 md:px-10 overflow-hidden bg-white dark:bg-[#0b0f1e]"
    >

      {/* Background Blur Effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <motion.div
            className="space-y-4"
            variants={item}
          >
            <p className="text-lg sm:text-xl font-semibold text-blue-500 tracking-wide uppercase">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              Nethmi Rajapaksha
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            variants={item}
            className="mt-6 text-xl sm:text-2xl font-medium text-gray-300"
          >
            Software Engineering Undergraduate
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-base sm:text-lg leading-8 text-gray-400"
          >
            Aspiring Software Engineering Intern passionate about building
            responsive web applications, solving real-world problems, and
            continuously expanding my skills in modern software development.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            {["React", "Next.js", "Node.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-sm font-medium hover:bg-blue-500/20 transition text-gray-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
          >
            <a
              href="/cv.pdf"
              download="Nethmi_Rajapaksha_CV.pdf"
              className="px-7 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-medium shadow-lg shadow-blue-500/20"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="px-7 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 font-medium"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="mt-12 flex gap-8 justify-center md:justify-start"
          >
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={
                  i === 0
                    ? "https://github.com/Nnavodya"
                    : i === 1
                    ? "https://www.linkedin.com/in/nethmi-rajapaksha-465335359"
                    : "https://instagram.com/nethmi2988"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-300 hover:text-blue-400 transition duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
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

            <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>

            <img
              src="/my-photo.jpeg"
              alt="Nethmi Rajapaksha"
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-gray-900 transition duration-500 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm"
      >
        ↓ Scroll
      </motion.div>
    </motion.section>
  );
}