"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaDocker,
  FaJava,
  FaAws,
} from "react-icons/fa";

import {
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiExpo,
  SiVite,
  SiCloudinary,
  SiGooglegemini,
  SiGooglemaps,
  SiJsonwebtokens,
  SiFramer,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { DiGit } from "react-icons/di";
import { motion } from "framer-motion";

export default function Skills() {
  const frontend = [
    { name: "HTML", icon: FaHtml5, mark: "HTML" },
    { name: "CSS", icon: FaCss3Alt, mark: "CSS" },
    { name: "JavaScript", icon: FaJs, mark: "JS" },
    { name: "TypeScript", icon: SiTypescript, mark: "TS" },
    { name: "React", icon: FaReact, mark: "R" },
    { name: "React Native", icon: FaReact, mark: "RN" },
    { name: "Next.js", icon: SiNextdotjs, mark: "N" },
    { name: "Vite", icon: SiVite, mark: "V" },
    { name: "Tailwind CSS", icon: SiTailwindcss, mark: "TW" },
    { name: "Redux", icon: SiRedux, mark: "R" },
  ];

  const backend = [
    { name: "Node.js", icon: FaNode, mark: "N" },
    { name: "Express.js", icon: SiExpress, mark: "E" },
    { name: "Spring Boot", icon: SiSpringboot, mark: "SB" },
    { name: "Java", icon: FaJava, mark: "J" },
    { name: "REST API", icon: null, mark: "API" },
    { name: "Groq AI", icon: null, mark: "AI" },
    { name: "Google Gemini", icon: SiGooglegemini, mark: "G" },
    { name: "Clerk", icon: null, mark: "C" },
    { name: "JWT", icon: SiJsonwebtokens, mark: "JWT" },
  ];

  const tools = [
    { name: "MongoDB", icon: SiMongodb, mark: "M" },
    { name: "Mongoose", icon: SiMongoose, mark: "M" },
    { name: "PostgreSQL", icon: SiPostgresql, mark: "PG" },
    { name: "MySQL", icon: SiMysql, mark: "SQL" },
    { name: "Prisma", icon: SiPrisma, mark: "P" },
    { name: "Git", icon: DiGit, mark: "Git" },
    { name: "GitHub", icon: FaGithub, mark: "GH" },
    { name: "GitHub API", icon: FaGithub, mark: "API" },
    { name: "Google Maps", icon: SiGooglemaps, mark: "Maps" },
    { name: "Expo", icon: SiExpo, mark: "E" },
    { name: "AsyncStorage", icon: null, mark: "AS" },
    { name: "Cloudinary", icon: SiCloudinary, mark: "C" },
    { name: "AWS", icon: FaAws, mark: "AWS" },
    { name: "Postman", icon: SiPostman, mark: "P" },
    { name: "VS Code", icon: VscVscode, mark: "VS" },
    { name: "Docker", icon: FaDocker, mark: "D" },
    { name: "Framer Motion", icon: SiFramer, mark: "FM" },
    { name: "Vector Search", icon: null, mark: "VS" },
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

  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-24 px-6 md:px-12 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* ================= BACKGROUND ANIMATION ================= */}

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/40 rounded-full"
            initial={{
              x: (i * 120) % 1400,
              y: (i * 70) % 900,
              opacity: 0,
            }}
            animate={{
              y: [
                (i * 70) % 900,
                ((i * 70) % 900) - 80,
                (i * 70) % 900,
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
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

        {/* Auto-scrolling skill rows */}
        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-white/10" />
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                  {group.title}
                </h3>
                <span className="h-px w-10 bg-white/10" />
              </div>

              <div className="skills-marquee-viewport">
                <div
                  className={`skills-marquee-track ${groupIndex % 2 ? "skills-marquee-reverse" : ""}`}
                  style={{ "--marquee-duration": `${group.skills.length * 4}s` } as React.CSSProperties}
                >
                  {[0, 1, 2].map((copy) => (
                    <div
                      key={copy}
                      className="flex shrink-0 gap-4 pr-4"
                      aria-hidden={copy > 0}
                    >
                      {group.skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                          <div
                            key={`${copy}-${skill.name}`}
                            className="flex h-36 w-36 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-3 text-center shadow-lg shadow-black/10 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07]"
                          >
                            <div className="flex h-12 items-center justify-center text-4xl text-cyan-400">
                              {Icon ? <Icon aria-hidden="true" /> : <span className="text-2xl font-bold">{skill.mark}</span>}
                            </div>
                            <span className="text-sm font-medium text-gray-300">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}