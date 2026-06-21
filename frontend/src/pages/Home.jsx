import Nav from "../components/layout/Nav";
import HeroSection from "../components/sections/HeroSection";
import Selected_Works from "../components/sections/Selected_Works";
import MarqueLogo from "../components/layout/MarqueLogo";
import Footer from "../components/sections/Footer";
import FooterMarque from "../components/layout/FooterMarque";
import Feedback from "../components/sections/Feedback";
import Why_Choose_Us from "../components/sections/Why_Choose_Us";
import Progress from "../components/sections/Progress";
import Expertise from "../components/sections/Expertise";
import FAQ from "../components/sections/FAQ"

function Home() {
  return (
    <>
      <div className="bg-[#f0f0f0] h-auto w-full font-mona mb-[12vh] z-1000">
        <Nav />
        <HeroSection />
        <Selected_Works />
        <MarqueLogo />
        <Expertise />
        <Progress />
        <Why_Choose_Us />
        <Feedback />
        <FAQ />
      </div>
      <div className="-z-1 h-[12vh] w-full font-mona fixed left-0  bottom-0 bg-[#272727]">
        
        <FooterMarque></FooterMarque>
      </div>
    </>
  );
}

export default Home;
