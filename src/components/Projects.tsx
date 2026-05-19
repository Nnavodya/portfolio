"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJava,
  FaAws,
  FaChevronLeft,
  FaChevronRight,
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "BookFair Stall Reservation System",

      type: "Group Project",

      role: "Frontend Developer",

      duration: "Jan 2026 - Apr 2026",

      team: "5 Members",

      featured: true,

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

      github: "https://github.com/Nnavodya/SA_PROJECT_V1",

      live: "https://github.com/Nnavodya/SA_PROJECT_V1",

      image: "/gproject1.png",

      gradient: "from-yellow-500/20 via-orange-500/10 to-black/40",

      border: "hover:border-yellow-400/40",

      shadow: "hover:shadow-yellow-500/20",

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
      title: "Care4Pets Pet Care Management System",

      type: "Group Project",

      role: "Frontend Developer",

      duration: "2025 - 2026",

      team: "5 Members",

      featured: false,

      description:
        "A full-stack pet care management web application developed to streamline pet adoption, pet care services, appointment handling, and user management through an interactive and responsive platform.",

      features: [
        "Pet adoption management system",
        "Appointment booking functionality",
        "Responsive modern UI/UX design",
        "Role-based user authentication",
        "Pet service & care management",
        "Admin dashboard & data handling",
      ],

      tech: [
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "Tailwind CSS",
      ],

      github: "https://github.com/Nnavodya/Care4Pets.git",

      live: "https://github.com/Nnavodya/Care4Pets.git",

      image: "/care4pets.png",

      gradient: "from-pink-500/20 via-rose-500/10 to-black/40",

      border: "hover:border-pink-400/40",

      shadow: "hover:shadow-pink-500/20",

      icons: [
        <FaReact key="react" />,
        <SiTypescript key="ts" />,
        <SiSpringboot key="spring" />,
        <FaJava key="java" />,
        <SiPostgresql key="pg" />,
        <SiTailwindcss key="tailwind" />,
      ],
    },

    {
      title: "Personal Portfolio Website",

      type: "Individual Project",

      role: "Full Stack Developer",

      duration: "May 2026 - Present",

      team: "Solo Project",

      featured: false,

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

      github: "https://github.com/Nnavodya",

      live: "https://github.com/Nnavodya",

      image: "/iproject1.png",

      gradient: "from-cyan-500/20 via-blue-500/10 to-black/40",

      border: "hover:border-cyan-400/40",

      shadow: "hover:shadow-cyan-500/20",

      icons: [
        <SiNextdotjs key="next" />,
        <SiTypescript key="ts" />,
        <SiTailwindcss key="tailwind" />,
        <SiFramer key="framer" />,
      ],
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % projects.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + projects.length) % projects.length
    );

  const goToSlide = (index: number) => setCurrentSlide(index);

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
      className="relative overflow-hidden py-24 px-6 md:px-10 bg-[#050816] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/40 rounded-full"
            initial={{
              x: Math.random() * 1500,
              y: Math.random() * 1000,
              opacity: 0,
            }}
            animate={{
              y: [null, -120],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold mb-4"
          >
            Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black mb-6 leading-tight"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-400 leading-8 text-base md:text-lg"
          >
            A selection of full-stack and frontend engineering
            projects built using modern technologies and scalable
            architectures.
          </motion.p>
        </div>

        {/* ================= FEATURED PROJECT SLIDER ================= */}

        <motion.div
          layout
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl mb-14"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentSlide].image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-72 sm:h-[500px] relative"
              >
                <Image
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />

            {/* Badge */}
            {projects[currentSlide].featured && (
              <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold tracking-wide shadow-lg">
                Featured Project
              </div>
            )}

            {/* Duration */}
            <div className="absolute bottom-6 right-6 px-5 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl text-sm text-gray-200">
              {projects[currentSlide].duration}
            </div>
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wide">
                {projects[currentSlide].type}
              </span>

              <span className="text-sm text-gray-400">
                {projects[currentSlide].role}
              </span>

              <span className="text-sm text-gray-500">
                • {projects[currentSlide].team}
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black leading-tight text-white max-w-4xl">
              {projects[currentSlide].title}
            </h3>

            <p className="mt-6 text-gray-300 leading-8 text-base md:text-lg max-w-3xl">
              {projects[currentSlide].description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={projects[currentSlide].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20"
              >
                View Source Code
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={projects[currentSlide].live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-gray-200 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
              >
                Live Preview
                <FaExternalLinkAlt className="text-xs" />
              </motion.a>
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-cyan-500 transition"
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-cyan-500 transition"
          >
            <FaChevronRight />
          </motion.button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-10 h-3 bg-cyan-400"
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* ================= PROJECT GRID ================= */}

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
              className={`group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-xl p-8 transition-all duration-500 hover:scale-[1.02] ${project.border} hover:shadow-2xl ${project.shadow}`}
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent" />

              {/* Featured */}
              {project.featured && (
                <div className="absolute top-5 right-5 z-20 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black shadow-lg">
                  Featured
                </div>
              )}

              {/* Image */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 block cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={500}
                  className="w-full h-52 md:h-60 object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg tracking-wide">
                    View Project
                  </span>
                </div>
              </a>

              {/* Type */}
              <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold text-cyan-400 mb-4">
                {project.type}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              {/* Meta */}
              <p className="text-sm text-cyan-400 mb-2 font-medium">
                Role: {project.role}
              </p>

              <p className="text-sm text-gray-500 mb-1">
                {project.duration}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                Team: {project.team}
              </p>

              {/* Description */}
              <p className="text-gray-300 leading-8 mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-4 text-lg">
                  Key Features
                </h4>

                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="mt-1 text-cyan-400">•</span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10 text-gray-300 backdrop-blur-sm hover:bg-cyan-500/10 transition"
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
              <div className="mt-auto flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
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