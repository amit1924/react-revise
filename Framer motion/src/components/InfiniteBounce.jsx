import { motion } from "framer-motion";
import React from "react";

const InfiniteBounce = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-24 h-24 bg-blue-500 rounded-lg"
        animate={{ y: [0, -50, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,

          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default InfiniteBounce;

// y: [0, -20, 0] → Moves up & down.
// repeat: Infinity → Runs forever.
