/*
export default function Skills() {
  const skills = ["Next.js", "React", "Tailwind", "TypeScript"];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Skills</h2>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 rounded bg-gray-200 dark:bg-gray-800"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}*/

"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { DiGit } from "react-icons/di";
import { motion } from "framer-motion";

export default function Skills() {
  const frontend = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ];

  const backend = [
    { name: "Node.js", icon: FaNode },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "REST API", icon: null },
  ];

  const tools = [
    { name: "Git", icon: DiGit },
    { name: "GitHub", icon: FaGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "Postman", icon: SiPostman },
    { name: "Docker (basic)", icon: FaDocker },
  ];

  // 🔥 Stagger container
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Card animation
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
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Frontend */}
        <motion.div
          variants={item}
          className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-sky-400 hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-5 text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
            Frontend Development
          </h3>

          <div className="flex flex-wrap gap-3">
            {frontend.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg bg-sky-500/20 border border-sky-400/30 hover:bg-sky-500/40 hover:border-sky-400/60 hover:shadow-md hover:shadow-sky-500/30 transition-all duration-300 cursor-pointer group/card"
                >
                  {Icon && (
                    <Icon className="text-2xl group-hover/card:scale-125 transition-transform duration-300" />
                  )}
                  <span className="text-xs font-semibold group-hover/card:text-sky-200 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          variants={item}
          className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-purple-400 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
            Backend Development
          </h3>

          <div className="flex flex-wrap gap-3">
            {backend.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg bg-purple-500/20 border border-purple-400/30 hover:bg-purple-500/40 hover:border-purple-400/60 hover:shadow-md hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer group/card"
                >
                  {Icon && (
                    <Icon className="text-2xl group-hover/card:scale-125 transition-transform duration-300" />
                  )}
                  <span className="text-xs font-semibold group-hover/card:text-purple-200 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={item}
          className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-emerald-400 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-5 text-emerald-300 dark:text-emerald-600 group-hover:text-emerald-200 transition-colors">
            Tools & DevOps
          </h3>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg bg-emerald-500/20 border border-emerald-400/30 hover:bg-emerald-500/40 hover:border-emerald-400/60 hover:shadow-md hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer group/card"
                >
                  {Icon && (
                    <Icon className="text-2xl group-hover/card:scale-125 transition-transform duration-300" />
                  )}
                  <span className="text-xs font-semibold group-hover/card:text-emerald-200 transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}