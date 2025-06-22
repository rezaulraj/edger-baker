import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import team1 from "../../assets/main/team1.jpg?url";
import team2 from "../../assets/main/team2.jpg?url";

const Teams = () => {
  const teams = [
    {
      image: team1,
      name: "JAKUB FEKIAČ",
      position: "Managing Partner",
      bio: "Strategic leader with 15+ years in HR consulting",
      socials: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaEnvelope />, url: "#" },
      ],
    },
    {
      image: team2,
      name: "JANA ŠRAMČÍKOVÁ",
      position: "Associate Partner",
      bio: "Specialized in international talent acquisition",
      socials: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaEnvelope />, url: "#" },
      ],
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-black/95 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h4
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            EDGER BAKER
          </motion.h4>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            GET TO KNOW US <br className="hidden md:block" /> BETTER
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto my-6 rounded-full"
          />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {teams.map((member, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow-xl"
                variants={hoverVariants}
              >
                {/* Image with gradient overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-1"
                    whileHover={{ color: "#93c5fd" }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-blue-300 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>

                  {/* Social Links with React Icons */}
                  <div className="flex space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.socials.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        className="text-gray-400 hover:text-blue-400 text-lg"
                        whileHover={{ y: -3, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FaArrowRight className="text-blue-400/50 text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button with React Icon */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium relative overflow-hidden group flex items-center mx-auto"
            whileHover={{
              y: -3,
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              More About Us
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;
