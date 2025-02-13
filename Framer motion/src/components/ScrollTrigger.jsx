import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollTriggering = ({ text, bgColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  return (
    <motion.div
      ref={ref}
      className={`w-3/4 h-64 flex items-center justify-center text-3xl font-bold ${bgColor}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  );
};

export default function ScrollTrigger() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center gap-20 py-20">
      <ScrollTriggering text="First Section" bgColor="bg-blue-500" />
      <ScrollTriggering text="Second Section" bgColor="bg-green-500" />
      <ScrollTriggering text="Third Section" bgColor="bg-red-500" />
      <ScrollTriggering text="Fourth Section" bgColor="bg-yellow-500" />
      <ScrollTriggering text="Fifth Section" bgColor="bg-cyan-500" />
    </div>
  );
}
