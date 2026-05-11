"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";

export default function Articles() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      id: 1,
      title:
        "How I Connected MongoDB Atlas to My Node.js App Using Mongoose (Beginner-Friendly Guide)",
      description:
        "A beginner-friendly guide to connecting MongoDB Atlas with a Node.js application using Mongoose and building scalable backend integrations.",
      date: "May 2026",
      readTime: "5 min read",
      category: "Web Development",
      link: "https://medium.com/@nethmirajapaksha038/how-i-connected-mongodb-atlas-to-my-node-js-app-using-mongoose-beginner-friendly-guide-91116df81b0f",
      image: "/mongoose.png",
    },
    {
      id: 2,
      title: "Data Structures in Python",
      description:
        "Explore Python’s essential built-in data structures including Lists, Tuples, Sets, and Dictionaries with practical examples.",
      date: "May 2025",
      readTime: "4 min read",
      category: "Python",
      link: "https://medium.com/@nethmirajapaksha038/data-structures-in-python-e1e300efc879",
      image: "/python.png",
    },
    {
      id: 3,
      title:
        "The Importance of Continuous Learning in the Software Industry",
      description:
        "Why continuous learning is essential for software engineers to stay competitive in the rapidly evolving tech industry.",
      date: "May 2025",
      readTime: "3 min read",
      category: "Software Engineering",
      link: "https://medium.com/@rajapakse22030.kln/the-importance-of-continuous-learning-in-the-software-industry-e5acb43c7fe2",
      image: "/continuous.png",
    },
    {
      id: 4,
      title: "Choosing the Right Software License",
      description:
        "Learn how to choose the right software license and understand ownership, permissions, and usage rights.",
      date: "May 2025",
      readTime: "4 min read",
      category: "Software Engineering",
      link: "https://medium.com/@rajapakse22030.kln/choosing-the-right-software-license-what-every-developer-should-know-9bcf52a9b609",
      image: "/license.png",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % articles.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <motion.section
      id="articles"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden px-4 sm:px-6 md:px-10 py-24 text-gray-900 dark:text-white scroll-mt-24 bg-white dark:bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <span className="px-4 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-medium backdrop-blur-md">
            Knowledge Sharing
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            I enjoy writing about software engineering, backend development,
            modern web technologies, and lessons learned throughout my developer
            journey.
          </p>
        </motion.div>

        {/* Featured Article */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl" />

          <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500">

            <div className="grid lg:grid-cols-2 items-center">

              {/* Image */}
              <div className="relative h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={articles[currentSlide].image}
                    src={articles[currentSlide].image}
                    alt={articles[currentSlide].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-[260px] sm:h-[350px] lg:h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#050816]/30" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10">

                {/* Category + Date */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-medium">
                    {articles[currentSlide].category}
                  </span>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaClock className="text-xs" />
                    {articles[currentSlide].readTime}
                  </div>

                  <span className="text-gray-500 text-sm">
                    {articles[currentSlide].date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
                  {articles[currentSlide].title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-8 text-base sm:text-lg mb-8">
                  {articles[currentSlide].description}
                </p>

                {/* Read Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href={articles[currentSlide].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Read Article
                  <FaArrowRight />
                </motion.a>
              </div>
            </div>

            {/* Left Button */}
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500/80 transition-all duration-300"
            >
              <FaChevronLeft />
            </motion.button>

            {/* Right Button */}
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500/80 transition-all duration-300"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-cyan-400"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* All Articles */}
        <div className="mt-24">

          {/* Section Heading */}
          <div className="flex flex-col items-center mb-12">
            <span className="text-cyan-400 text-sm uppercase tracking-[0.3em] font-medium mb-3">
              Explore More
            </span>

            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              All Articles
            </h3>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {articles.map((article) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/[0.07] transition-all duration-500">

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-medium">
                        {article.category}
                      </span>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <FaClock />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white leading-snug mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {article.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 leading-7 text-sm sm:text-base mb-6">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {article.date}
                      </span>

                      <span className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all duration-300">
                        Read More
                        <FaArrowRight className="text-sm" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}