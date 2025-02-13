import React from "react";
import { motion } from "framer-motion";

const DraggableBox = () => {
  return (
    <motion.div
      className="w-40 h-40 bg-blue-500 rounded-lg flex justify-center items-center text-white text-xl"
      drag
      dragConstraints={{ left: 0, right: 500, top: 0, bottom: 500 }}
      //   drag
      //   dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      //   dragElastic={0.5}
      //   dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
    >
      Drag Me!
    </motion.div>
  );
};

export default DraggableBox;
