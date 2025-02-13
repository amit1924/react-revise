import { motion } from "framer-motion";
import { useState } from "react";

export default function ButtonAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-24 h-24 bg-blue-500 rounded-lg"
        animate={{ x: isAnimating ? 200 : -200 }}
        transition={{ type: "spring", stiffness: 120 }}
      />
      <button
        className="mt-5 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setIsAnimating(!isAnimating)}
      >
        Move Box
      </button>
    </div>
  );
}
