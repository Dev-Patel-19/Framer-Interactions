"use client";
import Letter from "@/components/TextOpacityScrolll/Letter";
import Paragraph from "@/components/TextOpacityScrolll/Paragraph";
import Word from "@/components/TextOpacityScrolll/Word";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore accusamus quam provident commodi vitae vel culpa, ducimus officiis nullavoluptatem sed fugit consequuntur ex nihil hic. Rerum, sed deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit modi laborr.";

const TextOpacityScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* <Paragraph value={paragraph} /> */}
      {/* <Word value={paragraph} /> */}
      <Letter value={paragraph} />
    </>
  );
};

export default TextOpacityScroll;
