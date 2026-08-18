"use client";
import { motion } from "motion/react";
import React from "react";

const Button = () => {
  return (
    <div className="h-[40px] w-[100px] rounded-[25px] top-5 right-5 absolute cursor-pointer overflow-hidden">
      <div className="relative h-full w-full">
        <div className="group bg-[#D0FF71] text-[#010202] uppercase h-full w-full">
          <PerspectiveText label={"Open"} />
        </div>
        <div className="group bg-[#010202] text-[#D0FF71] uppercase absolute top-full h-full w-full">
          <PerspectiveText label={"Close"} />
        </div>
      </div>
    </div>
  );
};

export default Button;

type LabelProp = {
  label: string;
};

const PerspectiveText = ({ label }: LabelProp) => {
  return (
    <motion.div
      className="relative flex transform-3d items-center justify-center h-full w-full"
      variants={{ hovered: { rotateX: 90 } }}
      whileHover={"hovered"}
      transition={{
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <motion.p
        variants={{
          hovered: {
            y: "-100%",
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {label}
      </motion.p>
      <motion.p
        className="absolute [transform:rotateX(-90deg)_translateY(10px)] opacity-0 origin-bottom"
        variants={{
          hovered: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};
