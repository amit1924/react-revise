/* eslint-disable no-unused-vars */
import React from "react";
import { BIO } from "../constants";
import { motion } from "framer-motion";

const Bio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      <h2 className="text-center text-3xl lg:text-4xl">Bio</h2>
      <motion.div
        className=""
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {BIO.map((bio, index) => (
          <motion.p
            className="mb-4 text-lg lg:text-xl"
            key={index}
            variants={itemVariants}
          >
            {bio}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Bio;
