"use client";
import Lenis from "lenis";
import { div, main } from "motion/react-client";
import React, { useEffect, useRef } from "react";
import image_3 from "../../public/image_3.jpg";
import image_4 from "../../public/image_4.jpg";
import image_5 from "../../public/image_5.jpg";
import Image, { StaticImageData } from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

const TextParallax = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  console.log(scrollYProgress);

  return (
    <main className="overflow-hidden">
      <div className="h-[100vh]" />
      <div ref={container}>
        <Slider
          src={image_3}
          left="-55%"
          progress={scrollYProgress}
          direction="left"
        />
        <Slider
          src={image_4}
          left="-10%"
          progress={scrollYProgress}
          direction="right"
        />
        <Slider
          src={image_5}
          left="-40%"
          progress={scrollYProgress}
          direction="left"
        />
      </div>
      <div className="h-[100vh]" />
    </main>
  );
};

export default TextParallax;

type SliderProp = {
  src: string | StaticImageData;
  left: string;
  progress: MotionValue<number>;
  direction: string;
};
type PhraseProp = {
  src: string | StaticImageData;
};

const Slider = ({ src, left, progress, direction }: SliderProp) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div className="flex whitespace-nowrap relative" style={{ left, x }}>
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

function Phrase({ src }: PhraseProp) {
  return (
    <motion.div className="flex items-center gap-5 px-5">
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="h-[7.5vw] rounded-full overflow-hidden relative aspect-[4/2]">
        <Image src={src} alt={"image"} fill className="object-cover" />
      </span>
    </motion.div>
  );
}
