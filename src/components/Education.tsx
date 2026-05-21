"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCalendarAlt,
  FaAward,
  FaBookOpen,
} from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      type: "University",
      icon: FaUniversity,
      institution: "University of Kelaniya",
      degree: "BSc (Hons) in Software Engineering",
      duration: "2024 - 2027",
      gpa: "Current GPA: 3.68",
      description:
        "Currently pursuing a Software Engineering degree with a strong focus on full-stack development, software architecture, and modern web technologies.",
      coursework: [
        "Web Development",
        "Data Structures",
        "Software Engineering",
        "Mobile App Development",
      ],
      organizations: [
        "SESA (Software Engineering Student Association)",
        "IEEE Student Branch - University of Kelaniya",
      ],
    },
    {
      type: "School",
      icon: FaSchool,
      institution: "Bandaranayake Central College, Veyangoda",
      degree: "G.C.E Advanced Level - Physical Science Stream",
      duration: "2013 - 2021",
      achievements: [
        "Achieved 1A and 2B passes in G.C.E Advanced Level Examination",
        "Obtained a Z-Score of 1.7594 in the Physical Science stream",
        "Built a strong academic foundation in Mathematics and analytical problem-solving",
      ],
      description:
        "Developed a solid academic background in Mathematics, Physics, and ICT while actively engaging in school activities and collaborative learning experiences.",
    },
  ];

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#050816] py-24 px-6 md:px-12 text-white"
    >
      {/* ================= ENHANCED BACKGROUND ANIMATION ================= */}

      {/* Main Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -140, 0],
          y: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-600/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      {/* Aurora Glow Layer */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]"
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "70px 70px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"
        />
      </div>

      {/* Moving Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              rotate: 25,
              x: "-20%",
            }}
            animate={{
              opacity: [0, 0.15, 0],
              x: ["-20%", "120%"],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            className="absolute top-0 w-40 h-[120%] bg-gradient-to-b from-cyan-400/10 via-blue-500/10 to-transparent blur-3xl"
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-cyan-400/40"
            style={{
              width: `${(i % 4) + 2}px`,
              height: `${(i % 4) + 2}px`,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 6 + (i % 6),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 13) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Bottom Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-cyan-500/10 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl text-cyan-300 text-sm font-medium mb-6">
            <FaGraduationCap className="text-cyan-400" />
            Academic Journey
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Education &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-8">
            My academic journey has helped me build a strong foundation in
            software engineering, problem-solving, and modern technologies.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 transform -translate-x-1/2" />

          <div className="space-y-16">
            {educationData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(34,211,238,0.3)",
                          "0 0 40px rgba(34,211,238,0.6)",
                          "0 0 20px rgba(34,211,238,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center border border-white/10"
                    >
                      <Icon className="text-2xl text-white" />
                    </motion.div>
                  </div>

                  {/* CARD */}
                  <div className="w-full md:w-[46%]">
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.01,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl hover:border-cyan-400/30 hover:bg-white/[0.07] transition-all duration-500"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

                      {/* Mobile Icon */}
                      <div className="md:hidden mb-6 w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Icon className="text-white text-2xl" />
                      </div>

                      <div className="relative z-10">
                        {/* Type */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold tracking-wide mb-5">
                          <FaBookOpen />
                          {item.type}
                        </div>

                        {/* Institution */}
                        <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                          {item.institution}
                        </h3>

                        {/* Degree */}
                        <p className="mt-4 text-lg text-gray-300 font-medium">
                          {item.degree}
                        </p>

                        {/* Duration */}
                        <div className="mt-4 flex items-center gap-3 text-gray-400">
                          <FaCalendarAlt className="text-cyan-400" />
                          <span>{item.duration}</span>
                        </div>

                        {/* GPA */}
                        {item.gpa && (
                          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-medium">
                            <FaAward />
                            {item.gpa}
                          </div>
                        )}

                        {/* Achievements */}
                        {item.achievements && (
                          <div className="mt-7">
                            <h4 className="text-white font-semibold mb-4">
                              Academic Achievements
                            </h4>

                            <div className="space-y-4">
                              {item.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  whileHover={{ x: 6 }}
                                  className="flex items-start gap-3 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-gray-300 leading-7"
                                >
                                  <div className="mt-2 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />

                                  <p>{achievement}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Description */}
                        <p className="mt-6 text-gray-400 leading-8">
                          {item.description}
                        </p>

                        {/* Coursework */}
                        {item.coursework && (
                          <div className="mt-7">
                            <h4 className="text-white font-semibold mb-4">
                              Relevant Coursework
                            </h4>

                            <div className="flex flex-wrap gap-3">
                              {item.coursework.map((course, i) => (
                                <motion.span
                                  key={i}
                                  whileHover={{
                                    scale: 1.05,
                                    y: -2,
                                  }}
                                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                  {course}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Organizations */}
                        {item.organizations && (
                          <div className="mt-7">
                            <h4 className="text-white font-semibold mb-4">
                              Organizations & Communities
                            </h4>

                            <div className="space-y-3">
                              {item.organizations.map((org, i) => (
                                <motion.div
                                  key={i}
                                  whileHover={{ x: 5 }}
                                  className="flex items-center gap-3 text-gray-300"
                                >
                                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                  {org}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}