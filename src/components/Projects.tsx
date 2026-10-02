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
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

const INITIAL_VISIBLE = 6;

const FILTERS = [
  { label: "All", value: "All" },
  { label: "Individual", value: "Individual Project" },
  { label: "Group", value: "Group Project" },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "AI GitHub Codebase Assistant",

      type: "Individual Project",

      role: "Full Stack Developer",

      duration: "Ongoing",

      team: "Solo Project",

      featured: true,

      description:
        "An ongoing RAG-based code Q&A tool where users can submit a GitHub repository and ask questions about its code. It uses code chunking, embeddings, vector search, and Groq to provide answers with file references, alongside a streaming chat interface and automatically generated documentation.",

      features: [
        "Ask natural-language questions about a GitHub repository",
        "Retrieve relevant code with chunking, embeddings, and vector search",
        "Generate Groq-powered answers with file references",
        "Next.js chat interface with streaming responses",
        "Automatically generate project documentation",
      ],

      tech: [
        "Next.js",
        "TypeScript",
        "Groq API",
        "GitHub API (Octokit)",
        "Vector Search",
        "Tailwind CSS",
      ],

      github: "https://github.com/Nnavodya/codebase-assistant",

      live: "https://github.com/Nnavodya/codebase-assistant",

      image: "/CodebaseAI.png",

      gradient: "from-teal-500/20 via-cyan-500/10 to-black/40",

      border: "hover:border-teal-400/40",

      shadow: "hover:shadow-teal-500/20",

      icons: [
        <SiNextdotjs key="next" />,
        <SiTypescript key="ts" />,
        <SiTailwindcss key="tailwind" />,
      ],
    },

    {
      title: "GitHub Codebase Assistant",

      type: "Individual Project",

      role: "Full Stack Developer",

      duration: "Ongoing",

      team: "Solo Project",

      featured: false,

      description:
        "Developing a web app where users paste a GitHub repository link and ask natural-language questions about its code. The project implements a RAG pipeline using the GitHub API, code chunking, embeddings, and vector search, and uses Groq to answer with file references.",

      features: [
        "Paste a GitHub repo link and ask natural-language questions",
        "RAG pipeline with GitHub API, chunking, embeddings, and vector search",
        "Groq-powered answers with file references",
        "Next.js chat interface with streaming responses",
        "Auto-generated documentation for explored repositories",
      ],

      tech: [
        "Next.js",
        "TypeScript",
        "Groq API",
        "GitHub API (Octokit)",
        "Vector Search",
        "Tailwind CSS",
      ],

      github: "https://github.com/Nnavodya/codebase-assistant.git",

      live: "https://github.com/Nnavodya/codebase-assistant.git",

      image: "/CodebaseAI.jpeg",

      gradient: "from-sky-500/20 via-cyan-500/10 to-black/40",

      border: "hover:border-sky-400/40",

      shadow: "hover:shadow-sky-500/20",

      icons: [
        <SiNextdotjs key="next" />,
        <SiTypescript key="ts" />,
        <SiTailwindcss key="tailwind" />,
      ],
    },

    {
      title: "LankaTrails",

      type: "Individual Project",

      role: "Mobile App Developer",

      duration: "June 2026 - Present",

      team: "Solo Project",

      featured: false,

      description:
        "A cross-platform travel guide app for Sri Lankan tourism with category filtering, search, and a favorites system using persistent local storage. It also integrates GPS location services and Google Maps navigation with real-time distance calculations to attractions, along with a multi-screen layout and clean component architecture.",

      features: [
        "Category-based travel discovery and searching",
        "Favorites system with persistent local storage",
        "GPS location services and Google Maps navigation",
        "Real-time distance calculation using the Haversine formula",
        "Multi-screen app with file-based routing and tab navigation",
        "Clean component architecture using React Hooks",
      ],

      tech: ["React Native", "Expo", "JavaScript", "Google Maps", "AsyncStorage"],

      github: "https://github.com/Nnavodya/LankaTrails",

      live: "https://github.com/Nnavodya/LankaTrails",

      image: "/Lankatrails.jpeg",

      gradient: "from-green-500/20 via-emerald-500/10 to-black/40",

      border: "hover:border-green-400/40",

      shadow: "hover:shadow-green-500/20",

      icons: [<FaReact key="react" />, <FaGithub key="github" />],
    },

    {
      title: "FurniHub",

      type: "Individual Project",

      role: "Full Stack Developer",

      duration: "2026",

      team: "Solo Project",

      featured: false,

      description:
        "A full-stack furniture e-commerce platform with product browsing, cart, wishlist, checkout, and order tracking. It includes secure JWT authentication, role-based customer and admin access, an admin dashboard, Cloudinary image management, and Google Gemini-powered room furniture recommendations.",

      features: [
        "Product browsing, cart, wishlist, checkout, and order tracking",
        "JWT authentication with bcrypt password hashing",
        "Role-based access for customers and administrators",
        "Admin dashboard for product CRUD, order management, and sales statistics",
        "Cloudinary image management",
        "Google Gemini room furniture recommendations",
      ],

      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Cloudinary",
        "Google Gemini",
      ],

      github: "https://github.com/Nnavodya/MERN-furniture-shop",

      live: "https://github.com/Nnavodya/MERN-furniture-shop",

      image: "/furnihub.png",

      gradient: "from-amber-500/20 via-orange-500/10 to-black/40",

      border: "hover:border-amber-400/40",

      shadow: "hover:shadow-amber-500/20",

      icons: [
        <FaReact key="react" />,
        <SiMongodb key="mongo" />,
        <SiExpress key="express" />,
        <SiTailwindcss key="tailwind" />,
      ],
    },

    {
      title: "ContentFlow AI",

      type: "Individual Project",

      role: "Full Stack Developer",

      duration: "2026",

      team: "Solo Project",

      featured: false,

      description:
        "A full-stack AI content generator that produces blog posts, articles, social media posts, emails, product descriptions, and captions with customizable tone, length, keywords, and target audience — with a searchable generation history.",

      features: [
        "AI-powered generation of 6 content types with tone & length controls",
        "Authentication via Clerk (email/password + Google OAuth)",
        "Dashboard with generation stats and recent activity",
        "Searchable, filterable content history",
        "Account settings with real profile & password management",
        "Persisted dark mode across the app",
      ],

      tech: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Neon PostgreSQL",
        "Groq AI",
        "Clerk",
      ],

      github: "https://github.com/Nnavodya/AI-Content-Generator",

      live: "https://github.com/Nnavodya/AI-Content-Generator",

      image: "/contentflow-ai.png",

      gradient: "from-cyan-500/20 via-blue-500/10 to-black/40",

      border: "hover:border-cyan-400/40",

      shadow: "hover:shadow-cyan-500/20",

      icons: [
        <SiNextdotjs key="next" />,
        <SiTypescript key="ts" />,
        <SiTailwindcss key="tailwind" />,
        <SiPrisma key="prisma" />,
        <SiPostgresql key="pg" />,
      ],
    },

    {
      title: "MERN Student Management System",

      type: "Individual Project",

      role: "Full Stack Developer",

      duration: "2026",

      team: "Solo Project",

      featured: false,

      description:
        "A full-stack student management system built on the MERN stack, handling student records with a themed dashboard and data export functionality.",

      features: [
        "MongoDB Atlas cloud database integration",
        "RESTful API routing with Express",
        "CSV export of student records",
        "Themed, responsive navigation bar",
        "CRUD operations for student data",
      ],

      tech: ["React", "Node.js", "Express", "MongoDB Atlas"],

      github: "https://github.com/Nnavodya/MERN-StudentManagementSystem",

      live: "https://github.com/Nnavodya/MERN-StudentManagementSystem",

      image: "/mern-student-management.png",

      gradient: "from-emerald-500/20 via-teal-500/10 to-black/40",

      border: "hover:border-emerald-400/40",

      shadow: "hover:shadow-emerald-500/20",

      icons: [
        <FaReact key="react" />,
        <SiMongodb key="mongo" />,
        <SiExpress key="express" />,
      ],
    },

    {
      title: "BookFair Stall Reservation System",

      type: "Group Project",

      role: "Frontend Developer",

      duration: "Jan 2026 - Apr 2026",

      team: "5 Members",

      featured: false,

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

      github: "https://github.com/Nnavodya/Care4Pets",

      live: "https://github.com/Nnavodya/Care4Pets",

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

      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],

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
    }, 8000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % projects.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + projects.length) % projects.length
    );

  const goToSlide = (index: number) => setCurrentSlide(index);

  // Filter + Show more logic
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.type === filter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE);

  const handleFilter = (value: string) => {
    setFilter(value);
    setShowAll(false);
  };

  const MAX_TECH_CHIPS = 4;

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
              x: (i * 53.3) % 1500,
              y: (i * 37.1) % 1000,
              opacity: 0,
            }}
            animate={{
              y: [0, -120],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + (i % 6),
              repeat: Infinity,
              delay: (i % 10) * 0.5,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* ================= FEATURED PROJECT SLIDER (NARROWER) ================= */}

        <motion.div
          layout
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl mb-10"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentSlide].image + currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-44 sm:h-56 md:h-64 relative"
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

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />

            {projects[currentSlide].featured && (
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold tracking-wide shadow-lg">
                Featured Project
              </div>
            )}
          </div>

          {/* Content */}
          <div className="relative px-6 pb-6 pt-2 md:px-8 md:pb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black leading-tight text-white">
              {projects[currentSlide].title}
            </h3>

            <p className="mt-3 text-gray-300 leading-7 text-sm line-clamp-3 max-w-3xl">
              {projects[currentSlide].description}
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={projects[currentSlide].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
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
            aria-label="Previous project"
            className="absolute left-4 top-24 sm:top-28 md:top-32 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-cyan-500 transition"
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={nextSlide}
            aria-label="Next project"
            className="absolute right-4 top-24 sm:top-28 md:top-32 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-cyan-500 transition"
          >
            <FaChevronRight />
          </motion.button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mb-14">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-10 h-3 bg-cyan-400"
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* ================= FILTER TABS ================= */}

        <div className="flex justify-center gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                filter === f.value
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/20"
                  : "border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ================= PROJECT GRID (COMPACT) ================= */}

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-xl p-5 transition-colors duration-500 ${project.border} hover:shadow-2xl ${project.shadow}`}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Image */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-4 overflow-hidden rounded-2xl border border-white/10 block"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={800}
                    height={500}
                    className="w-full h-40 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] font-semibold text-cyan-300 border border-white/10">
                    {project.type === "Group Project" ? "Group" : "Individual"}
                  </span>
                </a>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-6 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech chips (limited) */}
                <div
                  className="mb-5 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {project.tech.slice(0, MAX_TECH_CHIPS).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                  {project.tech.length > MAX_TECH_CHIPS && (
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300">
                      +{project.tech.length - MAX_TECH_CHIPS}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    <FaGithub />
                    <span>Source</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= SHOW MORE / LESS ================= */}

        {filteredProjects.length > INITIAL_VISIBLE && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-7 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-xl transition hover:bg-cyan-500 hover:text-white"
            >
              {showAll
                ? "Show Less"
                : `Show More (${filteredProjects.length - INITIAL_VISIBLE})`}
              {showAll ? <FaChevronUp /> : <FaChevronDown />}
            </motion.button>
          </div>
        )}
      </div>
    </motion.section>
  );
}