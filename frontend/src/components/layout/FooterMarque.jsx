import React from "react";

const FooterMarque = () => {
  return (
    <div className="h-[12vh] w-full relative py-[0.5vh] bg-[#9d9797] flex justify-center items-center ">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-scroll {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="absolute w-full h-[11vh] overflow-hidden bg-[#f0f0f0] flex items-center ">
        <div
          className="absolute left-0 top-0 bottom-0 w-[5%] min-w-15 max-w-37.5 z-10 pointer-events-none"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            maskImage: "linear-gradient(to right, white, transparent)",
            WebkitMaskImage: "linear-gradient(to right, white, transparent)",
          }}
        />

        <div
          className="absolute right-0 top-0 bottom-0 w-[5%] min-w-15 max-w-37.5 z-10 pointer-events-none"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />

        <div className="marquee-scroll flex items-center gap-16 w-max h-[11vh] whitespace-nowrap border border-white/10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0 items-center">
              <h1 className="text-7xl md:text-7xl font-medium text-[#272727] tracking-tigher select-none">
                Destello
              </h1>
              <span className="text-7xl md:text-7xl text-[#272727] font-medium opacity-70 select-none">
                /
              </span>
              <h1 className="text-7xl md:text-7xl text-[#272727] font-medium tracking-tigher select-none">
                Aman404Found
              </h1>
              <span className="text-7xl md:text-7xl text-[#272727] font-medium opacity-70 select-none">
                /
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterMarque;
