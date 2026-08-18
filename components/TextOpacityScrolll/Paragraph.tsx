import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

type prop = {
  value: string;
};

const Paragraph = ({ value }: prop) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.2"],
  });

  return (
    <div className="bg-black">
      <div className="h-[100vh]"></div>
      <motion.p
        className="text-[56px] text-justify mx-8 text-white"
        ref={container}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default Paragraph;
