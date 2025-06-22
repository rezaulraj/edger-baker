import React from "react";
import { motion } from "framer-motion";
import serviceimg1 from "../../assets/home/sr1.jpg?url";
import serviceimg2 from "../../assets/home/sr2.jpg?url";
import serviceimg3 from "../../assets/home/sr3.jpg?url";
import serviceimg4 from "../../assets/home/sr4.jpg?url";

const Services = () => {
  const services = [
    {
      image: serviceimg1,
      title: "Hr Consulting",
      description: "Strategic HR solutions to optimize your workforce",
    },
    {
      image: serviceimg2,
      title: "Outsourcing Services",
      description: "Comprehensive staffing solutions for your business needs",
    },
    {
      image: serviceimg3,
      title: "International And Migration Relocation Services",
      description: "Global talent acquisition and relocation support",
    },
    {
      image: serviceimg4,
      title: "HeadHunting",
      description: "Targeted executive search for top-tier talent",
    },
  ];

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px rgba(0, 0, 0, 0.5)",
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: { repeat: Infinity, repeatType: "reverse", duration: 0.5 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="mb-16 lg:mb-24 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We offer comprehensive HR services tailored to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
            the various needs of your
          </span>{" "}
          company.
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our expertise includes Recruitment services, Executive Search, Expert
          Recruitment, and Project Recruitment, all customized to meet your
          specific requirements.
        </motion.p>

        {/* Additional Description */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-gray-300 text-center">
            Additionally, we provide Temporary staffing and Outsourcing Services
            suitable for optimizing your processes, as well as International
            Recruitment for sourcing specialists from abroad.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-xl border border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover="hover"
            variants={cardVariants}
          >
            {/* Image Container */}
            <motion.div
              className="h-48 overflow-hidden"
              variants={imageVariants}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Content Overlay */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>

              {/* Animated Link */}
              <motion.a
                href="#"
                className="inline-flex items-center text-blue-400 font-medium"
                initial="initial"
                whileHover="hover"
              >
                Learn more
                <motion.span className="ml-2" variants={arrowVariants}>
                  →
                </motion.span>
              </motion.a>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 transition-all pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
