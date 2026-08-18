"use client";
import { animate } from "motion";
import { motion, scale } from "motion/react";
import { init } from "next/dist/compiled/webpack/webpack";
import React, { useState } from "react";

const ScheduleVariant = {
  initial: {
    opacity: 0,
    scale: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
};
const RemindVariant = {
  initial: {
    opacity: 0,
    scale: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
};

const DisplayOption = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  return (
    <div className="flex my-auto justify-center relative overflow-hidden">
      <motion.div
        className="h-16 w-16 bg-black absolute rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsClicked(!isClicked)}
      >
        <p className="text-white text-[3rem]">+</p>
      </motion.div>
      <div className="flex gap-4">
        <motion.div
          className="bg-gray-300 rounded-full inline-block px-4 py-2 flex items-center justify-center"
          variants={ScheduleVariant}
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={isClicked ? "animate" : "initial"}
          transition={{
            duration: 0.3,
          }}
        >
          <p className="text-black text-[2rem]">Schedule</p>
        </motion.div>
        <motion.div
          className="bg-gray-300 rounded-full inline-block px-4 py-2 flex items-center justify-center"
          variants={RemindVariant}
          initial={{ opacity: 0, scale: 0, x: -100 }}
          animate={isClicked ? "animate" : "initial"}
          transition={{
            duration: 0.3,
          }}
        >
          <p className="text-black text-[2rem]">Remind</p>
        </motion.div>
      </div>
    </div>
  );
};

export default DisplayOption;
