"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
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
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        Projects
      </h2>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={item}
          transition={{ duration: 0.5 }}
          className="p-4 sm:p-6 rounded-lg bg-blue-50 dark:bg-gradient-to-br dark:from-blue-900/40 dark:to-purple-900/40 border border-blue-100 dark:border-white/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer group hover:-translate-y-3 hover:scale-[1.03]"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
            Project One
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
            E-commerce website using Next.js
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}