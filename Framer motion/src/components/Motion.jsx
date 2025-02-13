import React from "react";
import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-24 h-24 bg-blue-500 rounded-lg"
        initial={{ opacity: 0, scale: 0.5 }} //hidden and small
        animate={{ opacity: 1, scale: 1 }} //fully visible and small
        transition={{ duration: 1 }} //animation duration
      />
    </div>
  );
};

export default Motion;
