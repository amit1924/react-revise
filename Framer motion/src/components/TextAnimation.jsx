import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TextAnimation() {
  const staticText = "I am";
  const roles = [
    "Fullstack Developer",
    "Software Developer",
    "Freelancer",
    "Blogger",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 items-center h-screen bg-gray-900 text-white text-4xl font-bold">
      {/* Static text */}
      <span>{staticText}</span>

      {/* Animated rotating text */}
      <motion.span
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ duration: 0.5 }}
        className="ml-2 text-red-800"
      >
        {roles[index]}
      </motion.span>
    </div>
  );
}
