import { useState } from "react";
import FAQ_Image from "../../assets/images/Page9.avif";
import { LuArrowUpRight } from "react-icons/lu";
import { motion, useScroll, AnimatePresence } from "motion/react";
import ImageScrollAnimation from "../layout/ImageScrollAnimation";

const Page_9 = () => {
  const faqData = [
    {
      id: 1,
      question: "What services does Destello Studio offer?",
      answer:
        "We turn founder's bold ideas into unforgettable brands through a fusion of strategy, digital design, brand identity, art direction, and growth marketing.",
    },
    {
      id: 2,
      question: "Do you work with international clients?",
      answer:
        "Yes, we partner with ambitious brands, founders, and creators worldwide. Our digital-first workflow enables seamless collaboration regardless of your timezone.",
    },
    {
      id: 3,
      question: "What types of brands do you work with?",
      answer:
        "We work across industries, specializing in iconic startups, visionary creators, lifestyle brands, and businesses looking to elevate their digital aesthetic and layout presence.",
    },
    {
      id: 4,
      question: "How involved will we be in the process?",
      answer:
        "Highly involved. Our strategy starts with deep exploration workshops. We treat our clients as creative collaborative partners at every key stage of development.",
    },
    {
      id: 5,
      question: "What's your typical project timeline?",
      answer:
        "Timelines range from 4 to 8 weeks depending on the scope of design, content creation, and digital strategy requirements.",
    },
  ];
  
  let [openId,setOpenId] = useState(null);

  let faqToggle = (id) => {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div className="min-h-screen w-full bg-[#f0f0f0] flex flex-col px-8 z-10">
      <div className="min-h-[30vh] w-full relative">
        <h1 className="text-7xl tracking-tight text-neutral-800 leading-20 py-8 absolute w-158 bottom-0 ">
          Frequently Asked Questions
        </h1>
        <button className="flex items-center gap-2 absolute right-0 bottom-9 text-xl button-hover">
          Contact us <span><LuArrowUpRight /></span>
        </button>
      </div>
      <hr className="w-full text-[#D1D1D1] " />
      <div className="min-h-[70vh] w-full py-8 flex">
        <div className="w-[50%] flex flex-col gap-4">
          
          <ImageScrollAnimation
            image={FAQ_Image}
            isScaleAnimation={false}
            isY_Animation={true}
            className={"rounded-2xl w-[40%] h-[60%] overflow-hidden"}
          />
          <div className=" h-[27%] w-[37%]">
            <h1>
              Got questions? We’ve gathered the most common answers to help you
              understand how we work.
            </h1>
          </div>
        </div>
        <div className="w-[45%] flex flex-col gap-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                className="w-full rounded-2xl h-auto border overflow-hidden border-[#413f3f21] bg-[#E8E8E8] gap-6 p-4"
                key={item.id}
              >
                <button
                  onClick={() => faqToggle(item.id)}
                  type="button"
                  className="w-full h-12  cursor-pointer text-left flex items-center justify-between gap-4"
                >
                  <span className="text-lg font-medium text-[#262626]">
                    {item.question}
                  </span>
                  <motion.span
                    initial={{
                      rotate: 0,
                    }}
                    animate={
                      isOpen
                        ? {
                            rotate: 135,
                          }
                        : null
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full text-2xl "
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.h1
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {item.answer}
                    </motion.h1>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page_9;
