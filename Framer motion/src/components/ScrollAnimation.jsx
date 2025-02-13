import React from "react";
import { motion } from "framer-motion";
const ScrollAnimation = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* First Section */}
      <motion.div
        className="w-3/4 h-64 flex items-center justify-center bg-blue-500 text-3xl font-bold mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        First Section
      </motion.div>
      {/* Second Section */}
      <motion.div
        className="w-3/4 h-64 flex items-center justify-center bg-blue-500 text-3xl font-bold mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        First Section
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
