import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';

import Page6_1 from '../../assets/images/Page6_1.avif'
import Page6_2 from "../../assets/images/Page6_2.avif";
import Page6_3 from "../../assets/images/Page6_3.avif";
import Page6_4 from "../../assets/images/Page6_4.avif";

const page6Details = [
    {
      Sr: "1",
      title: "Spark the Vision",
      des1: "Every project begins with curiosity. We listen deeply to your story, your dreams, and the unique spark that sets your brand apart. Through workshops, conversations, and research, we uncover hidden insights and bold opportunities that become the seeds of your brand’s future.",
      des2: "We believe the best ideas come from true connection — and that’s where we start.",
      img: Page6_1,
    },
    {
      Sr: "2",
      title: "Craft the Blueprint",
      des1: "Next, we turn discovery into direction. We translate insights into a strategic blueprint, defining your brand’s voice, positioning, and visual narrative. Every detail is considered: how your brand should feel, sound, and be remembered.",
      des2: "This stage sets the stage for creativity to thrive with clarity and purpose.",
      img: Page6_2,
    },
    {
      Sr: "3",
      title: "Design the Experience",
      des1: "Now, the magic takes shape. Our designers, creatives, and content makers breathe life into your vision through stunning visuals, evocative storytelling, and meticulously crafted assets. Whether it’s a brand identity, a photography series, or a digital campaign, we create work that is both beautiful and built to perform.",
      des2: "We design not just for aesthetics — but for emotion, connection, and impact.",
      img: Page6_3,
    },
    {
      Sr: "4",
      title: "Launch & Illuminate",
      des1: "We believe a brand deserves a moment in the spotlight. We meticulously prepare for launch, ensuring every asset, message, and visual is aligned for maximum impact. Our team supports you in rolling out your new identity or campaign seamlessly, empowering you to shine across every platform and touchpoint.",
      des2: "Even after launch, we stay close — refining, optimizing, and ensuring your brand continues to grow and inspire.",
      img: Page6_4,
    },
  ];

const textVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(4px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Process = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  const scroll = `${Math.min(Math.max(progress * 100, 0), 100)}%`;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.getBoundingClientRect().height;
      
      const viewportHeight = window.innerHeight;

      const scrollPercentage = Math.max(0, -containerTop) / (containerHeight - viewportHeight);
      const newIndex = Math.min(Math.floor(scrollPercentage * page6Details.length), page6Details.length - 1);

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex, page6Details.length]);

  return (
    <div className="min-h-[600vh] bg-[#f0f0f0]" ref={containerRef}>
      <div
        style={{
          gridTemplateColumns: "1fr 2fr",
        }}
        className="sticky top-[-27%] w-full h-[126vh] p-5 grid overflow-hidden z-30"
      >
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col items-center gap-4 mt-[20vh]">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium">
              Phase
            </span>
            <div className="h-32 w-32 relative overflow-hidden flex justify-center items-center  border-t-2 border-b-gray-800 border-b-2">
              <AnimatePresence>
                <motion.span
                  key={currentIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute text-8xl font-medium text-black"
                >
                  0{currentIndex + 1}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="w-2 h-16 bg-gray-300  my-2 justify-center flex overflow-hidden rounded-full">
              <div
                className={`w-4 bg-[#282828] rounded-full`}
                style={{
                  height: scroll,
                }}
              ></div>
            </div>
            <span
              className={`text-lg font-medium ${progress >= 0.999 ? "text-black" : "text-gray-400"}`}
            >
              0{page6Details.length}
            </span>
          </div>
        </div>
        <div className="h-full flex flex-col">
          <div className="relative w-full h-[20%] flex items-end pb-12">
            <h1 className="text-7xl">Our Process</h1>
          </div>
          <hr className="text-[#c6c5c5] w-full" />
          <div className="w-full flex-1 h-[80%] relative overflow-hidden">
            <AnimatePresence>
              {page6Details.map((detail, index) => {
                if (index !== currentIndex) return null;

                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full flex flex-col"
                  >
                    <div className="w-full md:w-[85%] shrink-0 flex flex-col gap-5 justify-center min-h-[35%] z-10">
                      <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl font-medium text-black"
                      >
                        {detail.title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                        className="text-xl text-gray-800 leading-relaxed"
                      >
                        {detail.des1}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                        className="text-lg text-gray-800"
                      >
                        {detail.des2}
                      </motion.p>
                    </div>
                    <div className="flex-1 w-full max-h-[65%] relative flex items-center">
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                          scale: 0.95,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: -20,
                          scale: 1,
                          filter: "blur(10px)",
                        }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="w-[90%] h-full overflow-hidden rounded-3xl"
                      >
                        <img
                          className="h-full w-full object-cover object-center"
                          src={detail.img}
                          alt={detail.title}
                          loading="lazy"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Process;
