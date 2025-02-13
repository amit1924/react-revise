import { motion } from "framer-motion";

export default function AnimatedSVG() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-24 h-24"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.path d="M12 2L2 22h20L12 2z" />
      </motion.svg>
    </div>
  );
}
