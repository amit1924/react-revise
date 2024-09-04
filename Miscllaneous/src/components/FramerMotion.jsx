/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useAnimationControls,
  useInView,
} from "framer-motion";

const FramerMotion = () => {
  const flipControls = useAnimationControls();
  const [isVisible, setIsVisible] = useState(true);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Is In View", isInView);
  }, [isInView]);

  const handleFirst = () => {
    setFirst(!first);

    setIsVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto justify-center items-center bg-gray-100">
      <button
        className="p-3 px-10 bg-blue-600 text-white font-semibold rounded-lg shadow-lg mb-8 hover:bg-blue-700 transition duration-200"
        onClick={handleFirst}
      >
        Basics Framer Motion
      </button>

      {first && (
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 px-10 bg-blue-600 text-white font-semibold rounded-lg shadow-lg mb-8 hover:bg-blue-700 transition duration-200"
            onClick={() => setIsVisible(!isVisible)}
          >
            Show/Hide
          </motion.button>

          <AnimatePresence mode="popLayout">
            {isVisible && (
              <motion.div
                initial={{ rotate: "0deg", scale: 0, y: 0 }}
                animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, 0] }}
                exit={{ rotate: "0deg", scale: 0, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  ease: "backInOut",
                  times: [0, 0.25, 0.5, -0.85, 1],
                }}
                className="w-[150px] h-[150px] bg-red-500 rounded-lg shadow-lg"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <button
        className="p-3 px-10 bg-blue-600 text-white font-semibold rounded-lg shadow-lg mb-8 hover:bg-blue-700 transition duration-200 mt-5"
        onClick={() => setSecond(!second)}
      >
        Gestures
      </button>

      {second && (
        <div>
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              className="bg-green-600 p-5 rounded-lg border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            >
              Click Me
            </motion.button>
          </MotionConfig>
        </div>
      )}

      <button
        className="bg-blue-500 p-5 mt-5 "
        onClick={() => setThird(!third)}
      >
        Animation Controls
      </button>

      {third ? (
        <div className="flex flex-col">
          <button
            className="mt-4 mb-5 text-center bg-green-500 p-2"
            onClick={() => flipControls.start("flip")}
          >
            Flip It
          </button>
          <motion.div
            variants={{
              initial: {
                rotate: 0,
              },
              flip: {
                rotate: 360,
              },
            }}
            initial="initial"
            animate={flipControls}
            // whileHover="flip"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-[150px] h-[150px] bg-yellow-400"
          ></motion.div>
        </div>
      ) : null}
      <button
        className="bg-blue-500 p-3 
      mt-5"
        onClick={() => setFourth(!fourth)}
      >
        View Based Animations
      </button>

      {fourth ? (
        <div className="h-[80vh] overflow-y-auto bg-gray-200">
          <motion.div
            className="h-[100vh] bg-red-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      ) : null}

      <div
        className={`h-[100vh] ${isInView ? "bg-green-500" : "bg-yellow-500"}`}
        ref={ref}
      ></div>
    </div>
  );
};

export default FramerMotion;
