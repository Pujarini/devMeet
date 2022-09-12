import React from "react";
import { motion } from "framer-motion";

const Meetups = () => {
  return (
    <div className="h-screen bg-green-400 p-6">
      <h1 className="text-center mt-4">Browse Meetups by category</h1>
      <div className="flex items-center justify-center flex-wrap">
        <motion.div
          whileHover={{
            scale: 1.4,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          className="h-48 w-64 rounded m-8 p-6 bg-white flex item-center jutify-center flex-col cursor-pointer"
        >
          <h2 className="text-center">Web Development</h2>
          <p className="text-center m-6 text-gray-400">5 meetups</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.4,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="h-48  border-2 w-64 rounded m-8 p-6 bg-white flex item-center jutify-center flex-col cursor-pointer"
        >
          <h2 className="text-center ">Web 3</h2>
          <p className="text-center m-6 text-gray-400">5 meetups</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.4,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="h-48  border-2 w-64 rounded m-8 p-6 bg-white cursor-pointer"
        >
          <h2 className="text-center">Python </h2>
          <p className="text-center m-6 text-gray-400">8 Meetups</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.4,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="h-48  border-2 w-64 rounded m-8 p-6 bg-white cursor-pointer"
        >
          <h2 className="text-center">Mobile Apps</h2>
          <p className="text-center m-6 text-gray-400">8 Meetups</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.4,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="h-48  border-2 w-64 rounded m-8 p-6 bg-white cursor-pointer"
        >
          <h2 className="text-center">Networking</h2>
          <p className="text-center m-6 text-gray-400">8 Meetups</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.4,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="h-48  border-2 w-64 rounded m-8 p-6 bg-white cursor-pointer"
        >
          <h2 className="text-center">Others</h2>
          <p className="text-center m-6 text-gray-400">8 Meetups</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Meetups;
