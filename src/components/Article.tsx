"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Articles() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      id: 1,
      title:
        "How I Connected MongoDB Atlas to My Node.js App Using Mongoose (Beginner-Friendly Guide)",
      description:
        "A beginner-friendly article on how to connect MongoDB Atlas to a Node.js application using Mongoose.",
      date: "May 2026",
      category: "Web Development",
      link: "https://medium.com/@nethmirajapaksha038/how-i-connected-mongodb-atlas-to-my-node-js-app-using-mongoose-beginner-friendly-guide-91116df81b0f",
      image: "/mongoose.png",
    },
    {
      id: 2,
      title: "Data Structures in Python",
      description:
        "Python provides essential built-in data structures like Lists, Tuples, Sets, and Dictionaries.",
      date: "May 2025",
      category: "Python",
      link: "https://medium.com/@nethmirajapaksha038/data-structures-in-python-e1e300efc879",
      image: "/python.png",
    },
    {
      id: 3,
      title:
        "The Importance of Continuous Learning in the Software Industry",
      description:
        "Continuous learning is essential to stay relevant in the fast-changing software industry.",
      date: "May 2025",
      category: "Software Engineering",
      link: "https://medium.com/@rajapakse22030.kln/the-importance-of-continuous-learning-in-the-software-industry-e5acb43c7fe2",
      image: "/continuous.png",
    },
    {
      id: 4,
      title: "Choosing the Right Software License",
      description:
        "Learn how to choose the right software license and understand ownership and usage rights.",
      date: "May 2025",
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
      className="p-4 sm:p-6 md:p-10 text-gray-900 dark:text-white scroll-mt-24 bg-white dark:bg-[#0b0f1e]"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        My Articles & Blog Posts
      </h2>

      <div className="max-w-4xl mx-auto px-2 sm:px-4">

        {/* Featured Article Slider */}
        <div className="relative bg-gradient-to-br from-[#111827] to-[#1e293b] border border-sky-500/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 group backdrop-blur-md">

          {/* Image */}
          <div className="mb-4 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={articles[currentSlide].image}
                src={articles[currentSlide].image}
                alt={articles[currentSlide].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
              />
            </AnimatePresence>
          </div>

          {/* Content */}
          <div>

            {/* Category + Date */}
            <div className="flex gap-3 items-center mb-4 flex-wrap">
              <span className="px-3 py-1 bg-sky-500/10 border border-sky-400/40 rounded-full text-xs text-sky-300">
                {articles[currentSlide].category}
              </span>

              <span className="text-xs text-gray-400">
                {articles[currentSlide].date}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white leading-snug">
              {articles[currentSlide].title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
              {articles[currentSlide].description}
            </p>

            {/* Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={articles[currentSlide].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-sky-500/30"
            >
              Read More →
            </motion.a>
          </div>

          {/* Left Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/10 hover:bg-sky-500/80 p-3 rounded-full text-white transition"
          >
            <FaChevronLeft />
          </motion.button>

          {/* Right Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/10 hover:bg-sky-500/80 p-3 rounded-full text-white transition"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 bg-sky-500"
                  : "w-2 bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* All Articles */}
        <div className="mt-14">

          <h3 className="text-xl font-semibold mb-6 text-center text-white">
            All Articles
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {articles.map((article) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="p-4 bg-gradient-to-br from-[#111827] to-[#1e293b] border border-sky-500/10 rounded-xl hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 backdrop-blur-md">

                  {/* Image */}
                  <div className="mb-3 overflow-hidden rounded-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Category */}
                  <span className="text-xs text-sky-300">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h4 className="font-semibold mt-2 text-white group-hover:text-sky-300 transition">
                    {article.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-400 line-clamp-2 mt-2">
                    {article.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}