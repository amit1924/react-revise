import React from "react";
import { motion } from "framer-motion";
const DelayEase = () => {
  const boxVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeInOut" }, //easeINOut:Smooth acceleration & deceleration.
    },
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-24 h-24  bg-blue-500 rounded-lg"
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

export default DelayEase;
