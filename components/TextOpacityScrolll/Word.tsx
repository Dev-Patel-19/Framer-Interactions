import { span } from "framer-motion/client";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

type prop = {
  value: string;
};

const Word = ({ value }: prop) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.2"],
  });

  const words = value.split(" ");

  return (
    <div className="bg-black">
      <div className="h-[100vh]"></div>
      <p
        className="text-[56px]/18 flex flex-wrap mx-8 text-white"
        ref={element}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <SeparateWord
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </SeparateWord>
          );
        })}
      </p>
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default Word;

type Wordsprop = {
  children: string;
  progress: MotionValue<number>;
  range: number[];
};

const SeparateWord = ({ children, progress, range }: Wordsprop) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[12px]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
