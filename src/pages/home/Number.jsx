import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Number = () => {
  const numbers = [
    {
      number: 63,
      text: "Candidates placed in Bratislava region",
      suffix: "%",
    },
    {
      number: 54,
      text: "Of the placed candidates were experts and specialists",
      suffix: "%",
    },
    {
      number: 2567,
      text: "Average salary man",
      suffix: "€",
    },
    {
      number: 2325,
      text: "Average salary woman",
      suffix: "€",
    },
  ];

  const testimonials = [
    {
      text: "Hello, I perceive our cooperation with Mrs. Gajdošová as extremely time-saving. I especially appreciate the prompt, individual approach and very good communication. I also appreciate the quality of selected candidates. The subsequent selection was always just about personal preferences. I definitely recommend your services.",
      author: "John Smith, CEO at TechCorp",
    },
    {
      text: "The team provided exceptional service in finding the right candidates for our specialized roles. Their understanding of our needs and the quality of candidates was outstanding.",
      author: "Sarah Johnson, HR Director at Innovate Ltd",
    },
    {
      text: "Working with this recruitment agency saved us countless hours. Their pre-screening process ensured we only interviewed top-quality candidates.",
      author: "Michael Brown, CTO at Digital Solutions",
    },
    {
      text: "Highly professional service with excellent results. They found us the perfect candidate in record time when we were in a tight spot.",
      author: "Emma Wilson, Head of Operations at FinancePro",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const testimonialRef = useRef(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [autoRotate, testimonials.length]);

  // Pause auto-rotation when user interacts
  const handleTestimonialChange = (newIndex) => {
    setAutoRotate(false);
    setCurrentTestimonial(newIndex);
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setAutoRotate(true), 10000);
  };

  const nextTestimonial = () =>
    handleTestimonialChange(
      currentTestimonial === testimonials.length - 1
        ? 0
        : currentTestimonial + 1
    );

  const prevTestimonial = () =>
    handleTestimonialChange(
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1
    );

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const Counter = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      const duration = 2000;
      const startTime = performance.now();
      const startValue = 0;
      const endValue = target;

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(
          progress * (endValue - startValue) + startValue
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isInView, target]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className="bg-black/95 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            White collar
          </motion.h4>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            In numbers 2023
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto my-6 rounded-full"
          />
        </div>

        {/* Numbers Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {numbers.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl p-8 border border-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <Counter target={item.number} suffix={item.suffix} />
              </motion.div>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>

          <div ref={testimonialRef} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800"
              >
                <FaQuoteLeft className="text-blue-400/30 text-4xl absolute top-6 left-6" />

                <p className="text-lg md:text-xl text-gray-300 mb-6 pl-8">
                  {testimonials[currentTestimonial].text}
                </p>

                <p className="text-blue-300 font-medium pl-8">
                  — {testimonials[currentTestimonial].author}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaChevronLeft className="text-blue-400" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaChevronRight className="text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
