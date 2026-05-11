"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaMedium,
} from "react-icons/fa";

export default function Articles() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      id: 1,
      title:
        "How I Connected MongoDB Atlas to My Node.js App Using Mongoose (Beginner-Friendly Guide)",
      description:
        "A beginner-friendly guide explaining how to connect MongoDB Atlas with a Node.js application using Mongoose.",
      date: "May 2026",
      category: "Web Development",
      readTime: "6 min read",
      link: "https://medium.com/@nethmirajapaksha038/how-i-connected-mongodb-atlas-to-my-node-js-app-using-mongoose-beginner-friendly-guide-91116df81b0f",
      image: "/mongoose.png",
    },
    {
      id: 2,
      title: "Data Structures in Python",
      description:
        "Learn the fundamentals of Python data structures including Lists, Tuples, Sets, and Dictionaries.",
      date: "May 2025",
      category: "Python",
      readTime: "4 min read",
      link: "https://medium.com/@nethmirajapaksha038/data-structures-in-python-e1e300efc879",
      image: "/python.png",
    },
    {
      id: 3,
      title:
        "The Importance of Continuous Learning in the Software Industry",
      description:
        "Why continuous learning is essential for software engineers in the fast-changing tech industry.",
      date: "May 2025",
      category: "Software Engineering",
      readTime: "5 min read",
      link: "https://medium.com/@rajapakse22030.kln/the-importance-of-continuous-learning-in-the-software-industry-e5acb43c7fe2",
      image: "/continuous.png",
    },
    {
      id: 4,
      title: "Choosing the Right Software License",
      description:
        "Understand software licenses, ownership rights, and how to choose the correct license for projects.",
      date: "May 2025",
      category: "Software Engineering",
      readTime: "7 min read",
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
      className="relative overflow-hidden px-4 sm:px-6 md:px-10 py-24 text-white bg-[#050816] scroll-mt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-medium backdrop-blur-xl mb-5">
          <FaMedium className="text-cyan-400" />
          Technical Writing
        </div>

        <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Articles
          </span>
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-8">
          I write beginner-friendly technical articles about web development,
          software engineering, databases, and modern technologies.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Featured Article */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

          {/* Image */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={articles[currentSlide].image}
                src={articles[currentSlide].image}
                alt={articles[currentSlide].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[260px] sm:h-[380px] object-cover"
              />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative p-6 sm:p-10">

            {/* Top Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wide">
                {articles[currentSlide].category}
              </span>

              <span className="text-sm text-gray-400">
                {articles[currentSlide].date}
              </span>

              <span className="text-sm text-gray-500">
                • {articles[currentSlide].readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-4xl font-black leading-tight text-white max-w-4xl">
              {articles[currentSlide].title}
            </h3>

            {/* Description */}
            <p className="mt-5 text-gray-300 leading-8 text-base sm:text-lg max-w-3xl">
              {articles[currentSlide].description}
            </p>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href={articles[currentSlide].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300"
            >
              Read Full Article
              <FaArrowRight />
            </motion.a>
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
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {articles.map((_, index) => (
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

        {/* All Articles */}
        <div className="mt-24">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">
                Explore More
              </p>

              <h3 className="text-3xl sm:text-4xl font-black mt-2">
                All Articles
              </h3>
            </div>

            <p className="text-gray-400 text-sm sm:text-base">
              Sharing knowledge through technical writing and tutorials.
            </p>
          </div>

          {/* Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">

            {articles.map((article) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div className="h-full flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-cyan-400/30 hover:bg-white/[0.07] transition-all duration-300 shadow-xl">

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">

                    {/* Meta */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-medium">
                        {article.category}
                      </span>

                      <span className="text-xs text-gray-500">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white leading-snug mb-4 group-hover:text-cyan-300 transition">
                      {article.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 leading-7 text-sm flex-grow">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {article.date}
                      </span>

                      <span className="inline-flex items-center gap-2 text-cyan-300 font-medium text-sm group-hover:gap-3 transition-all">
                        Read More
                        <FaArrowRight className="text-xs" />
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