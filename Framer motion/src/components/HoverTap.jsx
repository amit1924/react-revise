import { motion } from "framer-motion";
import React from "react";

const HoverTap = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-24 h-24 bg-blue-500 rounded-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default HoverTap;
