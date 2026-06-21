import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import page2Image from "../../assets/images/page_2.webp";
import ImageScrollAnimation from "../layout/ImageScrollAnimation";
import heroImage_2 from "../../assets/images/Page3.avif";

const pageText = [
  "We turn founder's bold ideas",
  "into unforgettable brands through the",
  "perfect fusion of strategy, design, and",
  "growth marketing.",
];

const studioText = [
  "Since 2014, Destello has been a creative studio driven by a simple",
  "idea — to craft bold, meaningful, and beautiful experiences for the",
  "world's most ambitious brands.",
];

const emotionText = [
  "Rooted in design and guided by emotion, our work blends aesthetics",
  "with purpose — helping our clients stand out in the crowded digital",
  "landscape.",
];

function AnimatedLines({ lines, className = "", lineClassName = "" }) {
  return (
    <div className={className}>
      {lines.map((text, index) => (
        <motion.span
          key={text}
          className={`block text-balance ${lineClassName}`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  );
}


function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <>
      <div className="flex flex-col w-full h-[41vw] relative ">
        <div className="flex flex-row gap-4 w-full p-10 relative h-[30vh]">
          <motion.p
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="w-[12vw] text-[0.85vw] absolute left-[3vw] top-[11vh] indent-[1.3vw]"
          >
            Designing striking visions and digital worlds for iconic brands.
          </motion.p>
          <motion.p
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className=" w-[30vw] text-[1.5vw] absolute right-[20vw] top-[11vh] indent-[5.5vw]"
          >
            Since 2014, crafting transform digital experiences that matter.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full h-[27vw] flex items-center absolute bottom-0 overflow-hidden"
        >
          <h1 className="text-[32vw] text-center w-full tracking-[-0.08em] ">destello</h1>
        </motion.div>
      </div>
      <div className="w-full h-screen overflow-hidden" ref={ref}>
        <motion.img
          style={{ y, scale }}
          className=" h-full w-full object-cover z-10"
          src={page2Image}
          alt="Page 2"
        />
      </div>
      <div className="w-full h-100 p-20 relative bg-[#f0f0f0]">
        <h1 className="text-[40px] w-160 leading-11 bottom-20 right-40 absolute">
          {pageText.map((text, index) => {
            return (
              <motion.span
                key={index}
                className={
                  index === 0
                    ? "block indent-32 text-nowrap"
                    : "block text-nowrap"
                }
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {text}
              </motion.span>
            );
          })}
        </h1>
      </div>
      <hr className="w-[95%] mx-auto  opacity-30" />
      <div className="relative flex w-full h-100 p-10 justify-between bg-[#f0f0f0]">
        <div className="w-1/2 text-xl">
          <h1>Building what tomorrow remembers.</h1>
        </div>
        <div className=" w-1/2">
          <h1 className="w-140 text-xl">
            {studioText.map((text, index) => {
              return (
                <motion.span
                  key={index}
                  className="block text-nowrap"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {text}
                </motion.span>
              );
            })}
          </h1>
          <h1 className="w-140 text-xl mt-5">
            {emotionText.map((text, index) => {
              return (
                <motion.span
                  key={index}
                  className="block text-nowrap"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {text}
                </motion.span>
              );
            })}
          </h1>
          <button className="mt-5 text-xl">Learn More</button>
        </div>
      </div>
      <ImageScrollAnimation
        image={heroImage_2}
        isScaleAnimation={true}
        isY_Animation={true}
        className={
          "w-full min-h-screen bg-[#f0f0f0] flex items-center justify-center py-10"
        }
      />
    </>
  );
}

export default HeroSection;
