import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";

// Reusable animated nav link component
const textVariants = {
  initial: { y: 0 },
  hover: { y: -28 },
};


const AnimatedNavLink = ({ to, label }) => {
  const handleClick = (e) => {
    if (to.startsWith("#")) {
      e.preventDefault();
      const targetId = to.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else if (to === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <motion.li
      className="relative cursor-pointer button-hover"
      initial="initial"
      whileHover="hover"
      onClick={handleClick}
    >
      <div className="flex flex-col h-7 overflow-hidden w-full items-center justify-start">
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center w-full"
        >
          <Link to={to} onClick={handleClick} className="h-7 flex items-center">{label}</Link>
          <Link to={to} onClick={handleClick} className="h-7 flex items-center">{label}</Link>
        </motion.div>
      </div>
    </motion.li>
  );
};

function Nav() {
  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#works", label: "Works" },
    { to: "#expertise", label: "Expertise" },
    { to: "#process", label: "Process" },
    { to: "#feedback", label: "Feedback" },
  ];

  const navRef = useRef(null);
  const [direction, setDirection] = useState("up");
  const { scrollYProgress } = useScroll();
  const lastProgress = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > lastProgress.current) {
      setDirection("down");
    } else {
      setDirection("up");
    }
    lastProgress.current = latest;
  });

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: direction === "down" ? -70 : 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex fixed justify-between items-center p-8 h-3.5 bg-[#262626] text-[#f0f0f0] backdrop-blur-xs z-500 text-lg w-full"
    >
      <div>
        <h1 className="cursor-pointer hover:opacity-80 transition-opacity">
          Destello_Recreated
        </h1>
      </div>

      <ul className="flex gap-10 bg-[#f0f0f0] text-[#282828] rounded-2xl h-10 px-10">
        {navLinks.map((link) => (
          <AnimatedNavLink key={link.to} to={link.to} label={link.label} />
        ))}
      </ul>

      <motion.button className="button-hover">
        Contact Us <span><LuArrowUpRight /></span>
      </motion.button>
    </motion.nav>
  );
}

export default Nav;
