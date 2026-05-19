"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { useEffect, useState, useMemo } from "react";

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Software Engineering Undergraduate",
    "Frontend Developer",
    "Backend Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ================= PARTICLES =================
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: (i * 137) % 100,
        y: (i * 89) % 100,
        duration: 12 + (i % 10),
        delay: (i % 5) * 0.5,
      })),
    []
  );

  // ================= TYPING EFFECT =================
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // ================= MOUSE GLOW =================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    damping: 40,
    stiffness: 200,
  });

  const smoothY = useSpring(mouseY, {
    damping: 40,
    stiffness: 200,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // ================= ANIMATIONS =================
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="show"
      variants={container}
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white px-6 md:px-12 flex items-center justify-center"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Aurora Background */}
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
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute w-1.5 h-1.5 bg-cyan-400/40 rounded-full"
            initial={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mouse Glow */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl z-0"
      />

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10 py-24">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-500/10 text-green-300 text-sm font-medium backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Internships
          </motion.div>

          {/* Heading */}
          <motion.div variants={item} className="space-y-5">
            <p className="text-lg font-semibold tracking-[0.3em] uppercase text-blue-400">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight">
              <span className="text-white">NETHMI</span>

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                RAJAPAKSHA
              </span>
            </h1>
          </motion.div>

          {/* Typing Role */}
          <motion.div variants={item} className="mt-7 h-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
              {displayText}
              <span className="text-cyan-400 animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-7 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-9 text-gray-400"
          >
            Aspiring Full-Stack Developer dedicated to creating scalable web
            applications with intuitive user experiences and efficient backend
            systems. Continuously learning modern technologies and software
            engineering practices.
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
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <a
              href="/cv.pdf"
              download="Nethmi_Rajapaksha_CV.pdf"
              className="min-w-[170px] px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl shadow-blue-500/20 hover:scale-105 transition-all duration-300 text-center"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="min-w-[170px] px-8 py-3.5 rounded-2xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold hover:scale-105 transition-all duration-300 text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="min-w-[170px] px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300 text-center"
            >
              Contact Me
            </a>
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
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-2xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-xl"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            {/* Floating React Icon */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                },
                rotate: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="hidden lg:flex absolute -top-3 -left-3 w-16 h-16 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl items-center justify-center text-cyan-400 text-3xl"
            >
              <FaReact />
            </motion.div>

            {/* Floating MongoDB Icon */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="hidden lg:flex absolute bottom-8 -right-6 w-16 h-16 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl items-center justify-center text-green-500 text-3xl"
            >
              <SiMongodb />
            </motion.div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-2xl opacity-30 scale-110"></div>

            {/* Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-15px] rounded-full border border-dashed border-cyan-400/20"
            />

            {/* Image Ring */}
            <div className="absolute inset-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"></div>

            {/* Profile Image */}
            <img
              src="/my-photo.jpeg"
              alt="Nethmi Rajapaksha"
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full object-cover border-[6px] border-[#0b1220] shadow-2xl"
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