import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
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
      <div className="flex flex-col w-full min-h-[50vh] md:min-h-0 md:h-[41vw] relative ">
        <div className="flex flex-col md:block gap-6 w-full p-6 pt-24 md:p-10 relative md:h-[30vh] z-10">
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
            className="w-[85%] md:w-[12vw] text-base md:text-[0.85vw] md:absolute md:left-[3vw] md:top-[11vh] md:indent-[1.3vw]"
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
            className="w-[95%] md:w-[30vw] text-lg md:text-[1.5vw] md:absolute md:right-[20vw] md:top-[11vh] md:indent-[5.5vw]"
          >
            Since 2014, crafting transform digital experiences that matter.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full mt-auto md:mt-0 md:h-[27vw] flex items-center md:absolute md:bottom-0 overflow-hidden leading-none"
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
      <div className="w-full min-h-[40vh] p-8 md:p-20 relative bg-[#f0f0f0] flex items-center md:block">
        <h1 className="text-2xl text-nowrap md:text-[40px] w-full md:w-160 leading-tight md:leading-11 md:bottom-20 md:right-60 md:absolute">
          {pageText.map((text, index) => {
            return (
              <motion.span
                key={index}
                className={
                  index === 0
                    ? "block md:indent-32 flex-wrap"
                    : "block flex-wrap"
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
      <hr className="w-[97%] mx-auto  opacity-30" />
      <div className="relative flex flex-col md:flex-row w-full min-h-[35vh] md:h-100 p-8 md:px-10 justify-between bg-[#f0f0f0]">
        <div className="w-full md:w-1/2 text-2xl md:text-xl md:mb-0">
          <h1>Building what tomorrow remembers.</h1>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="w-full md:w-140 text-lg md:text-xl text-nowrap">
            {studioText.map((text, index) => {
              return (
                <motion.span
                  key={index}
                  className="block"
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
          <h1 className="w-full md:w-140 text-lg md:text-xl mt-5 text-nowrap">
            {emotionText.map((text, index) => {
              return (
                <motion.span
                  key={index}
                  className="block"
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
          <button className="mt-8 md:mt-5 text-xl font-medium button-hover">Learn More <span><LuArrowUpRight /></span></button>
        </div>
      </div>
      <ImageScrollAnimation
        image={heroImage_2}
        isScaleAnimation={true}
        isY_Animation={true}
        className={
          "w-full min-h-screen bg-[#f0f0f0] flex items-center justify-center"
        }
      />
    </>
  );
}

export default HeroSection;