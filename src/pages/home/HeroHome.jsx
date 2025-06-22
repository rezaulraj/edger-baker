import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import headerimg1 from "../../assets/home/h1.jpg?url";
import headerimg2 from "../../assets/home/h2.jpg?url";
import headerimg3 from "../../assets/home/h3.jpg?url";

const HeroHome = () => {
  const heroImages = [
    {
      image: headerimg1,
      smalText: "vas persoanlity",
      bigtext: "Your professional HR Partner in every sector",
      btn: "Contact",
    },
    {
      image: headerimg2,
      smalText: "the value offer",
      bigtext: "Speed Discussion and Professionalism",
      btn: "Contact",
    },
    {
      image: headerimg3,
      smalText: "save your time",
      bigtext: "You don't have time to hire the wrong person",
      btn: "Contact",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const slideVariants = {
    hidden: (direction) => ({
      scale: 1.05,
      opacity: 0,
      x: direction > 0 ? "100%" : "-100%",
    }),
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: (direction) => ({
      scale: 1.05,
      opacity: 0,
      x: direction > 0 ? "-100%" : "100%",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: "backOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 },
    },
    hover: { scale: 1.05, backgroundColor: "#fff", color: "#000" },
    tap: { scale: 0.95 },
  };

  const dotVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 0.5,
      transition: { delay: i * 0.1 + 0.8, duration: 0.3 },
    }),
    active: { opacity: 1, scale: 1.2, width: "1.5rem" },
    hover: { opacity: 0.8 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(${heroImages[currentSlide].image})`,
          }}
        >
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 flex items-center justify-center text-center">
            {/* Content */}
            <div className="px-6 max-w-4xl mx-auto">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {heroImages[currentSlide].smalText && (
                  <p className="text-lg md:text-xl uppercase tracking-widest mb-4 text-white/90 font-light">
                    {heroImages[currentSlide].smalText}
                  </p>
                )}
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {heroImages[currentSlide].bigtext && (
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight drop-shadow-lg">
                    {heroImages[currentSlide].bigtext}
                  </h1>
                )}
              </motion.div>

              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 border-2 border-white text-white uppercase tracking-wider"
              >
                {heroImages[currentSlide].btn}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Dots Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={dotVariants}
            whileHover="hover"
            className={`h-3 rounded-full bg-white ${
              index === currentSlide ? "!opacity-100 !scale-1.2 w-6" : "w-3"
            }`}
          />
        ))}
      </motion.div>

      {/* Background zoom animation */}
      <style jsx>{`
        .bg-cover {
          animation: zoomIn 12s linear infinite;
        }
        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroHome;