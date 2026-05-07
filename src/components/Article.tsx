"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Articles() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      id: 1,
      title: "How I Connected MongoDB Atlas to My Node.js App Using Mongoose (Beginner-Friendly Guide)",
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
      title: "The Importance of Continuous Learning in the Software Industry",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.section
      id="articles"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 sm:p-6 md:p-10 text-white dark:text-gray-900 scroll-mt-24 bg-gray-900 dark:bg-gray-100"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        My Articles & Blog Posts
      </h2>

      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        {/* 🔥 Carousel */}
        <div className="relative bg-gradient-to-br from-sky-900/20 to-purple-900/20 border border-sky-400/30 rounded-xl p-4 sm:p-6 md:p-8 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group">

          {/* 🖼️ Animated Image */}
          <div className="mb-4 overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={articles[currentSlide].image}
                src={articles[currentSlide].image}
                alt={articles[currentSlide].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
            </AnimatePresence>
          </div>

          {/* Content */}
          <div>
            <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 bg-sky-500/30 border border-sky-400 rounded-full text-xs text-sky-200 dark:text-sky-700">
                {articles[currentSlide].category}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {articles[currentSlide].date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {articles[currentSlide].title}
            </h3>

            <p className="text-gray-300 dark:text-gray-600 text-sm sm:text-base mb-4">
              {articles[currentSlide].description}
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href={articles[currentSlide].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-sky-600 hover:bg-sky-500 rounded font-semibold transition"
            >
              Read More →
            </motion.a>
          </div>

          {/* Buttons */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-sky-500/80 p-3 rounded-full"
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-sky-500/80 p-3 rounded-full"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition ${
                index === currentSlide
                  ? "w-6 bg-sky-500"
                  : "w-2 bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* 🔥 Grid */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">
            All Articles
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles.map((article) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-sky-400 hover:shadow-lg transition-all duration-300">

                  {/* Image */}
                  <div className="mb-3 overflow-hidden rounded-md">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-32 object-cover rounded-md group-hover:scale-105 transition"
                    />
                  </div>

                  <span className="text-xs text-sky-300">
                    {article.category}
                  </span>

                  <h4 className="font-semibold mt-2 group-hover:text-sky-300">
                    {article.title}
                  </h4>

                  <p className="text-sm text-gray-400 line-clamp-2">
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