import React, { useState } from "react";
import { Data, FooterData } from "../Nav/Data";
import { motion } from "motion/react";
import { Variants } from "motion/react";

type DataProp = {
  title: string;
  href: string;
};

const perspectiveVariants = {
  initial: {
    opacity: 0,
    rotateY: -90,
    translateX: -80,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateY: 0,
    translateX: 0,
    transition: {
      duration: 0.9,
      delay: 0.6 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1] as const,
      opacity: { duration: 0.5 },
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    rotateY: -90,
    translateX: -40,
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  }),
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  }),
};

const arrowVariants = {
  initial: {
    opacity: 0,
    width: 0,
    x: -30,
  },
  hover: {
    opacity: 1,
    width: 40,
    x: 0,
    transition: {
      duration: 0.28,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
};

const footerUnderlineVariants = {
  initial: {
    scaleX: 0,
    opacity: 0,
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

const Nav = () => {
  return (
    <div className="flex flex-col justify-between h-full box-border pt-[120px] pr-[40px] pb-[50px] pl-[40px] overflow-hidden">
      <div className="flex flex-col gap-3">
        {Data.map((data: DataProp, index) => (
          <div key={index} style={{ perspective: "1200px" }}>
            <motion.div
              custom={index}
              variants={perspectiveVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              style={{ transformOrigin: "left center" }}
            >
              <motion.a
                href={data.href}
                style={{
                  textDecoration: "none",
                  color: "#010202",
                  fontSize: "52px",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  overflow: "hidden",
                }}
                initial="initial"
                whileHover="hover"
              >
                <motion.span
                  variants={arrowVariants}
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 0,
                    minWidth: 0,
                    overflow: "hidden",
                    fontSize: "52px",
                    lineHeight: 1,
                    marginRight: "8px",
                  }}
                >
                  →
                </motion.span>
                <span>{data.title}</span>
              </motion.a>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {FooterData.map((link, i) => {
          const [isHovered, setIsHovered] = useState(false);
          return (
            <motion.a
              style={{
                display: "block",
                width: "50%",
                marginTop: "5px",
                color: "#010202",
                position: "relative",
                overflow: "hidden",
              }}
              custom={i}
              key={`${i}`}
              variants={slideIn}
              initial="initial"
              animate="enter"
              exit="exit"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              href={link.href}
            >
              <span
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  position: "relative",
                  paddingBottom: "1px",
                }}
              >
                {link.title}
                <motion.span
                  variants={footerUnderlineVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#010202",
                    transformOrigin: "left center",
                  }}
                />
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
