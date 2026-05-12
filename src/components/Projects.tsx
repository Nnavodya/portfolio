"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJava,
  FaAws,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "BookFair Stall Reservation System",

      type: "Group Project",

      description:
        "A comprehensive full-stack web application developed for managing stall reservations, event layouts, vendor operations, QR-based entry passes, and analytics for large-scale book fairs.",

      features: [
        "Interactive stall reservation system",
        "Dynamic pricing calculation engine",
        "Vendor dashboard & booking management",
        "QR-code based entry pass generation",
        "Role-based authentication & authorization",
        "Revenue analytics & admin dashboard",
      ],

      tech: [
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "Tailwind CSS",
        "AWS",
      ],

      github:
        "https://github.com/Nnavodya/SA_PROJECT_V1",

      live: "https://github.com/Nnavodya/SA_PROJECT_V1",

      image: "/gproject1.png",

      gradient:
        "from-yellow-500/20 via-orange-500/10 to-black/40",

      border:
        "hover:border-yellow-400/40",

      shadow:
        "hover:shadow-yellow-500/20",

      icons: [
        <FaReact key="react" />,
        <SiTypescript key="ts" />,
        <SiSpringboot key="spring" />,
        <FaJava key="java" />,
        <SiPostgresql key="pg" />,
        <SiTailwindcss key="tailwind" />,
        <FaAws key="aws" />,
      ],
    },

    {
      title: "Personal Portfolio Website",

      type: "Individual Project",

      description:
        "A modern responsive portfolio website built using Next.js and Tailwind CSS to showcase my projects, technical skills, articles, and contact information with smooth animations and dark mode support.",

      features: [
        "Responsive modern UI/UX",
        "Dark & light theme support",
        "Framer Motion animations",
        "Professional project showcase",
        "Integrated EmailJS contact form",
        "Optimized for desktop & mobile",
      ],

      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],

      github:
        "https://github.com/Nnavodya",

      live:
        "https://github.com/Nnavodya",

      image: "/portfolio.png",

      gradient:
        "from-cyan-500/20 via-blue-500/10 to-black/40",

      border:
        "hover:border-cyan-400/40",

      shadow:
        "hover:shadow-cyan-500/20",

      icons: [
        <SiNextdotjs key="next" />,
        <SiTypescript key="ts" />,
        <SiTailwindcss key="tailwind" />,
        <SiFramer key="framer" />,
      ],
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
    hidden: {
      opacity: 0,
      y: 40,
    },

    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      id="projects"
      className="relative overflow-hidden py-24 px-6 md:px-10 bg-white dark:bg-[#050816] text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Featured Projects
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-8 text-base md:text-lg">
            Here are some of the software engineering projects
            I have worked on using modern frontend and backend
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-xl p-8 transition-all duration-500 hover:scale-[1.02] ${project.border} hover:shadow-2xl ${project.shadow}`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent" />

              {/* Project Image */}
              {project.image && (
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-52 md:h-60 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Type Badge */}
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold text-cyan-400 mb-5">
                {project.type}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-7 mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-lg">
                  Key Features
                </h4>

                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-1 text-cyan-400">
                        •
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10 text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:bg-cyan-500/10 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Icons */}
              <div className="flex items-center gap-4 text-2xl text-cyan-400 mb-8">
                {project.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="hover:scale-125 transition duration-300"
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <FaGithub />

                  <span>View Repository</span>
                </a>

                {/* Live Preview Button */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-800 dark:text-white transition hover:bg-white/10 hover:scale-105"
                >
                  <FaExternalLinkAlt />

                  <span>Live Preview</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}