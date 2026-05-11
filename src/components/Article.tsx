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
      className="px-4 sm:px-6 md:px-10 py-16 md:py-20 text-gray-900 dark:text-white scroll-mt-24 bg-white dark:bg-[#0b0f1e]"
    >
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        My Articles & Blog Posts
      </h2>

      <div className="max-w-5xl mx-auto px-2 sm:px-4">

        {/* Featured Article */}
        <div className="relative bg-gradient-to-br from-[#111827] to-[#1e293b] border border-sky-500/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 group backdrop-blur-md">

          {/* Featured Image */}
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
                className="w-full h-52 sm:h-64 md:h-72 object-cover rounded-xl"
              />
            </AnimatePresence>
          </div>

          {/* Featured Content */}
          <div>

            {/* Category + Date */}
            <div className="flex flex-wrap gap-3 items-center mb-3">
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
            whileHover={{ scale: 1.15 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/10 hover:bg-sky-500/80 p-3 rounded-full text-white transition"
          >
            <FaChevronLeft />
          </motion.button>

          {/* Right Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/10 hover:bg-sky-500/80 p-3 rounded-full text-white transition"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
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
        <div className="mt-10">

          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            All Articles
          </h3>

          {/* Equal Height Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">

            {articles.map((article) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                className="group h-full"
              >
                <div className="h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#1e293b] border border-sky-500/10 rounded-2xl overflow-hidden hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 backdrop-blur-md">

                  {/* Card Image */}
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-5">

                    {/* Category */}
                    <span className="text-xs text-sky-300 mb-3">
                      {article.category}
                    </span>

                    {/* Title */}
                    <h4 className="font-bold text-lg text-white leading-snug mb-3 group-hover:text-sky-300 transition">
                      {article.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                      {article.description}
                    </p>

                    {/* Date */}
                    <div className="mt-4 text-xs text-gray-500">
                      {article.date}
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