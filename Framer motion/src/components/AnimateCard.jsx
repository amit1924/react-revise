import React from "react";
import { motion } from "framer-motion";

const AnimateCard = () => {
  return (
    <motion.div
      className="p-5 w-64 bg-white shadow-lg rounded-lg"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-bold">Framer Motion</h2>
      <p className="text-gray-600">Smooth and powerful animations in React.</p>
    </motion.div>
  );
};

export default AnimateCard;
