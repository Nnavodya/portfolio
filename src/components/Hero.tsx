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
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center text-gray-900 dark:text-white px-4 md:px-10 overflow-hidden bg-white dark:bg-[#0b0f1e]"
    >
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

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div className="text-center md:text-left">

          <motion.div className="space-y-2" variants={item}>
            <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
              Hi, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Nethmi Rajapaksha
            </h1>
          </motion.div>

          <motion.p variants={item} className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white">
            Software Engineering Undergraduate
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300"
          >
            Aspiring Software Engineering Intern passionate about building responsive
            web applications, solving real-world problems, and continuously expanding
            my skills in modern software development.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {['React', 'Next.js', 'Node.js', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500/20 border border-blue-400 rounded-full text-sm hover:bg-blue-500/40 transition text-gray-800 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
          >
            
              href="/cv.pdf"
              download="Nethmi_Rajapaksha_CV.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
            
              href="#projects"
              className="px-6 py-3 border border-blue-500 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex gap-8 justify-center md:justify-start"
          >
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.3, y: -5 }}
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
                className="text-4xl sm:text-5xl md:text-6xl text-gray-800 dark:text-white hover:text-blue-400 transition duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

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
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-gray-200 dark:border-gray-900 transition duration-500 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 text-sm"
      >
        ↓ Scroll
      </motion.div>
    </motion.section>
  );
}