import Page_4Cards from '../common/Work_Card'
import { LuArrowUpRight } from "react-icons/lu";
import Page4img1 from "../../assets/images/Page4img1.avif";
import Page4img2 from "../../assets/images/Page4img2.avif";
import Page4img3 from "../../assets/images/Page4img3.avif";
import Page4img4 from "../../assets/images/Page4img4.avif";
import Page4img5 from "../../assets/images/Page4img5.avif";
import Page4img6 from "../../assets/images/Page4img6.avif";
import Page4img7 from "../../assets/images/Page4img7.avif";
import Page4img8 from "../../assets/images/Page4img8.avif";
import Page4img11 from "../../assets/images/Page4img11.avif";
import Page4img21 from "../../assets/images/Page4img21.avif";
import Page4img31 from "../../assets/images/Page4img31.avif";
import Page4img41 from "../../assets/images/Page4img41.avif";
import Page4img51 from "../../assets/images/Page4img51.avif";
import Page4img61 from "../../assets/images/Page4img61.avif";
import Page4img71 from "../../assets/images/Page4img71.avif";
import Page4img81 from "../../assets/images/Page4img81.avif";


const Page_4 = () => {
  const selectedWorks = [
    {
      title: "Spin Rally",
      details: ["Art Direction", "Social Media", "Content"],
      img: Page4img1,
      subimg: Page4img11
    },
    {
      title: "Valvet Frame",
      details: [
        "Visual Strategy",
        "Creative Direction",
        "Art Direction",
        "Brand Experience",
      ],
      img: Page4img2,
      subimg: Page4img21
    },
    {
      title: "Shoreline",
      details: ["Photography", "Content", "Social Media"],
      img: Page4img3,
      subimg: Page4img31
    },
    {
      title: "LuminEdge",
      details: [
        "Strategy",
        "Digital Design",
        "Brand Identity",
        "Creative Direction",
      ],
      img: Page4img4,
      subimg: Page4img41
    },
    {
      title: "Pulse Narrative",
      details: ["Content", "Strategy", "Motion Design"],
      img: Page4img5,
      subimg: Page4img51
    },
    {
      title: "Royal Radiance",
      details: ["Photography", "Art Direction", "Visual Strategy","Content"],
      img: Page4img6,
      subimg: Page4img61
    },
    {
      title: "Starry Sky",
      details: ["Creative Director", "Photography", "Visual Editor"],
      img: Page4img7,
      subimg: Page4img71
    },
    {
      title: "AeroDrive",
      details: ["Campaign Development", "Branding", "Creative Direction","Marketing"],
      img: Page4img8,
      subimg: Page4img81
    },
  ];
  
  return (
    <div className="min-w-full flex flex-col items-center h-auto py-24 bg-[#f0f0f0] relative">
      <div className=" w-full h-[14vh] relative text-[#262626] flex justify-between items-center px-6">
        <h1 className="text-[4rem]">
          Selected works
        </h1>
        <button className='button-hover'>See all works <span><LuArrowUpRight /></span></button>
      </div>
      <div className="w-full flex">
        <aside className="sticky top-20 w-[25%] pl-7 h-fit">
          <div className="flex flex-col gap-14">
            <h1 className="text-[#989898]">Index</h1>
            <ul className="flex flex-col gap-1.5">
              {selectedWorks.map((work, index) => {
                return (
                  <li key={index}>
                    ({index + 1}) {work.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <div className="flex flex-wrap gap-y-8 justify-between pr-7 w-[75%]">
          {selectedWorks.map((work, index) => {
            return (
              <Page_4Cards
                key={index}
                Page4img={work.img}
                Page4subimg={work.subimg}
                Title={work.title}
                Details={work.details}
              />
            );
          })}
        </div>
      </div>
      <hr className=" text-[#c6c5c5]  absolute bottom-0 w-[97%] " />
    </div>
  );
}

export default Page_4
