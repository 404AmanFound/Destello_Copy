import ImageScrollAnimation from "../layout/ImageScrollAnimation";
import feedbackImage from "../..//assets/images/Page8img.avif"
import Page81 from "../../assets/images/Page81.avif";
import Page82 from "../../assets/images/Page82.avif";
import Page83 from "../../assets/images/Page83.avif";
import Page84 from "../../assets/images/Page84.avif";
import Page85 from "../../assets/images/Page85.avif";

const Feedback = () => {
  let clientDetails = [
    {
      img: Page81,
      heading: "Sara V",
      subHeading: "Founder of Velvet Frame",
      des: "Working with Destello was a transformative experience. They didn’t just design our brand — they listened, understood, and brought our vision to life in ways we never expected. Every detail, from color to copy, reflected who we are. It was more than a project — it felt like a creative journey.",
    },
    {
      img: Page82,
      heading: "Leila R",
      subHeading: "Co-Founder of Spin Rally",
      des: "Working with Destello was a transformative experience. They didn’t just design our brand — they listened, understood, and brought our vision to life in ways we never expected. Every detail, from color to copy, reflected who we are. It was more than a project — it felt like a creative journey.",
    },
    {
      img: Page83,
      heading: "Jason M",
      subHeading: "Creative Director at NovaCraft",
      des: "From the very first call, I knew Destello was different. They were deeply involved in every phase — not just producing visuals, but building a brand with purpose. Our identity now speaks directly to our audience and stands out in our market. The process was smooth, collaborative, and inspiring.",
    },
    {
      img: Page84,
      heading: "Milo D",
      subHeading: "Marketing Lead at Crown & Glow",
      des: "The team at Destello brought incredible energy, clarity, and taste to our rebrand. Their ability to combine strategy with stunning visual storytelling was next- level. Our launch felt seamless, and the response from our audience was immediate. We couldn’t have asked for a better creative partner.",
    },
    {
      img: Page85,
      heading: "Anya K",
      subHeading: "Founder of ThreadMuse",
      des: "What impressed us most was Destello’s ability to turn a simple product shoot into a powerful commercial story. Their direction, use of light, and aesthetic sensibility elevated our brand beyond expectation. The images still make people stop and ask who did them.",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full flex flex-col gap-10 p-8 sm:p-12 bg-[#272727]">
        <p className="indent-90 text-7xl tracking-tight text-[#f0f0f0] leading-20 py-8 mt-20">
          Real words from brands we've partnered with and brought to life
          through creativity, strategy, and meaningful brand experiences that
          leave a lasting impression.
        </p>
        <hr className="w-full text-[#4a4848] " />
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between border-b border-[#1f1f1f] pb-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#737373] mb-2 font-medium">
              Testimonials
            </p>
            <h1 className="text-3xl sm:text-4xl font-light text-[#f5f5f5] tracking-tight">
              What our clients say
            </h1>
          </div>
          <p className="text-sm text-[#bbb9b9] max-w-xs mt-3 md:mt-0 font-light">
            Stories of collaboration, transformation, and brand elevation.
          </p>
        </div>

        <div
          className="w-full grid gap-4 flex-1"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(3, minmax(160px, auto))",
            gridTemplateAreas: `
            "box1 box2 box3 box4 box9"
            "box5 box2 box6 box4 box10"
            "box5 box7 box6 box8 box10"
            `,
          }}
        >
          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-5 flex flex-col xl:flex-row gap-4 items-center justify-center text-center xl:text-left"
            style={{ gridArea: "box1" }}
          >
            <div className="w-14 h-14 shrink-0 overflow-hidden rounded-full border border-[#2e2e2e]">
              <img
                src={clientDetails[0].img}
                alt={clientDetails[0].heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-base font-medium text-[#f5f5f5] truncate">
                {clientDetails[0].heading}
              </h1>
              <h2 className="text-xs text-[#bbb9b9] truncate mt-0.5">
                {clientDetails[0].subHeading}
              </h2>
            </div>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-6 flex items-center justify-center"
            style={{ gridArea: "box2" }}
          >
            <p className="text-xs sm:text-sm text-[#bbb9b9] font-light leading-relaxed">
              "{clientDetails[0].des}"
            </p>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-5 flex flex-col xl:flex-row gap-4 items-center justify-center text-center xl:text-left"
            style={{ gridArea: "box3" }}
          >
            <div className="w-14 h-14 shrink-0 overflow-hidden rounded-full border border-[#2e2e2e]">
              <img
                src={clientDetails[1].img}
                alt={clientDetails[1].heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-base font-medium text-[#f5f5f5] truncate">
                {clientDetails[1].heading}
              </h1>
              <h2 className="text-xs text-[#bbb9b9] truncate mt-0.5">
                {clientDetails[1].subHeading}
              </h2>
            </div>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-6 flex items-center justify-center"
            style={{ gridArea: "box4" }}
          >
            <p className="text-xs sm:text-sm text-[#bbb9b9] font-light leading-relaxed">
              "{clientDetails[1].des}"
            </p>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-6 flex items-center justify-center"
            style={{ gridArea: "box5" }}
          >
            <p className="text-xs sm:text-sm text-[#bbb9b9] font-light leading-relaxed">
              "{clientDetails[2].des}"
            </p>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-6 flex items-center justify-center"
            style={{ gridArea: "box6" }}
          >
            <p className="text-xs sm:text-sm text-[#bbb9b9] font-light leading-relaxed">
              "{clientDetails[3].des}"
            </p>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-5 flex flex-col xl:flex-row gap-4 items-center justify-center text-center xl:text-left"
            style={{ gridArea: "box7" }}
          >
            <div className="w-14 h-14 shrink-0 overflow-hidden rounded-full border border-[#2e2e2e]">
              <img
                src={clientDetails[2].img}
                alt={clientDetails[2].heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-base font-medium text-[#f5f5f5] truncate">
                {clientDetails[2].heading}
              </h1>
              <h2 className="text-xs text-[#bbb9b9] truncate mt-0.5">
                {clientDetails[2].subHeading}
              </h2>
            </div>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-5 flex flex-col xl:flex-row gap-4 items-center justify-center text-center xl:text-left"
            style={{ gridArea: "box8" }}
          >
            <div className="w-14 h-14 shrink-0 overflow-hidden rounded-full border border-[#2e2e2e]">
              <img
                src={clientDetails[3].img}
                alt={clientDetails[3].heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-base font-medium text-[#f5f5f5] truncate">
                {clientDetails[3].heading}
              </h1>
              <h2 className="text-xs text-[#bbb9b9] truncate mt-0.5">
                {clientDetails[3].subHeading}
              </h2>
            </div>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-5 flex flex-col xl:flex-row gap-4 items-center justify-center text-center xl:text-left"
            style={{ gridArea: "box9" }}
          >
            <div className="w-14 h-14 shrink-0 overflow-hidden rounded-full border border-[#2e2e2e]">
              <img
                src={clientDetails[4].img}
                alt={clientDetails[4].heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-base font-medium text-[#f5f5f5] truncate">
                {clientDetails[4].heading}
              </h1>
              <h2 className="text-xs text-[#bbb9b9] truncate mt-0.5">
                {clientDetails[4].subHeading}
              </h2>
            </div>
          </div>

          <div
            className="bg-[#313131] border border-[#f8f8f824] rounded-2xl p-6 flex items-center justify-center"
            style={{ gridArea: "box10" }}
          >
            <p className="text-xs sm:text-sm text-[#bbb9b9] font-light leading-relaxed">
              "{clientDetails[4].des}"
            </p>
          </div>
        </div>
      </div>
      <ImageScrollAnimation
        image={feedbackImage}
        isScaleAnimation={true}
        isY_Animation={true}
        className={
          "w-full min-h-screen bg-[#f0f0f0] flex items-center justify-center py-10"
        }
      />
    </>
  );
};

export default Feedback;
//"rounded-2xl w-[40%] h-[60%] overflow-hidden"