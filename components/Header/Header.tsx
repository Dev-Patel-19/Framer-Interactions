"use client";
import React, { useState } from "react";
import Button from "./Button/Button";
import { AnimatePresence, motion } from "motion/react";
import Nav from "./Nav/Nav";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const variants = {
    open: {
      width: 480,
      height: 650,
      opacity: 1,
      transition: {
        width: {
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1] as const,
        },
        height: {
          duration: 0.4,
          delay: 0.4,
          ease: [0.76, 0, 0.24, 1] as const,
        },
      },
    },
    close: {
      width: 120,
      height: 80,
      opacity: 0,
      transition: {
        opacity: {
          delay: 0.7,
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1] as const,
        },
        width: {
          duration: 0.4,
          delay: 0.7,
          ease: [0.76, 0, 0.24, 1] as const,
        },
        height: {
          delay: 0.3,
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1] as const,
        },
      },
    },
  };
  return (
    <div className="fixed right-[50px] top-[50px]">
      <motion.div
        initial="close"
        variants={variants}
        animate={isActive ? "open" : "close"}
        className="h-[650px] w-[480px] bg-[#D0FF71] rounded-[25px]"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Header;
