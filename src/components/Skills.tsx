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

  const skillGroups = [
    {
      title: "Frontend Development",
      skills: frontend,
    },
    {
      title: "Backend Development",
      skills: backend,
    },
    {
      title: "Tools & DevOps",
      skills: tools,
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-24 px-6 md:px-12 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Skills & Technologies
          </h2>

          <div className="mt-5 w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-8">
            Technologies and tools I use to build responsive,
            scalable, and user-friendly modern web applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#161b2e] to-[#111827] backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

              {/* Title */}
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-bold text-white">
                  {group.title}
                </h3>

                <div className="mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>

              {/* Skills */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                      {Icon && (
                        <Icon className="text-4xl text-cyan-400" />
                      )}

                      <span className="text-sm font-medium text-gray-200 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}