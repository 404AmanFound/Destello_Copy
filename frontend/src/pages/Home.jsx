import React, { Suspense, lazy, useState, useEffect } from "react";
import Nav from "../components/layout/Nav";
import HeroSection from "../components/sections/HeroSection";

const Selected_Works = lazy(() => import("../components/sections/Selected_Works"));
const MarqueLogo = lazy(() => import("../components/layout/MarqueLogo"));
const FooterMarque = lazy(() => import("../components/layout/FooterMarque"));
const Feedback = lazy(() => import("../components/sections/Feedback"));
const Why_Choose_Us = lazy(() => import("../components/sections/Why_Choose_Us"));
const Process = lazy(() => import("../components/sections/Process"));
const Expertise = lazy(() => import("../components/sections/Expertise"));
const FAQ = lazy(() => import("../components/sections/FAQ"));

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div id="home" className="bg-[#f0f0f0] h-auto w-full font-mona mb-[12vh] z-1000 relative">
        <Nav />
        <HeroSection />
        
        <Suspense fallback={<div className="h-[50vh] flex items-center justify-center">Loading...</div>}>
          <div id="works">
            <Selected_Works />
          </div>
          <MarqueLogo />
          <div id="expertise">
            <Expertise />
          </div>
          <div id="process">
            <Process />
          </div>
          <Why_Choose_Us />
          <div id="feedback">
            <Feedback />
          </div>
          <FAQ />
        </Suspense>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[9999] bg-[#262626] text-white p-4 rounded-full shadow-lg hover:bg-[#404040] transition-all"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
      <div className="-z-1 h-[12vh] w-full font-mona fixed left-0  bottom-0 bg-[#272727]">
        <Suspense fallback={null}>
          <FooterMarque />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
