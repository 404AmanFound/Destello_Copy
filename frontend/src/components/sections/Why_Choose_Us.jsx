import ArrowBlack from '../../assets/svg/arrowblack.svg'
import Page71 from '../../assets/images/Page71.avif'
import Page72 from '../../assets/images/Page72.avif'
import { LuArrowUpRight } from "react-icons/lu";


const Why_Choose_Us = () => {
  return (
    <div className="min-h-screen w-full bg-[#f0f0f0] flex items-center flex-col px-8 z-30">
      <hr className=" text-[#d4d1d1] w-full mt-20 " />
      <div className="w-full h-[3vh] mt-4 flex justify-between">
        <h2 className="text-xl">Why Choose us</h2>
        <button className="button-hover">
          Let's talk <span><LuArrowUpRight /></span>
        </button>
      </div>
      <div
        className="w-full h-[70vh] grid gap-4 mt-14"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr",
        }}
      >
        <div className="bg-[#282828] rounded-2xl overflow-hidden relative flex justify-center">
          <img
            className="w-full h-full object-cover object-center absolute z-1"
            src={Page71}
            alt=""
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#171717] via-black/1 to-transparent to-70% z-2" />
          <h1 className="z-3 absolute text-3xl text-[#fefefe] font-medium top-8">
            Destello Stuido
          </h1>
          <h1 className="z-3 absolute text-xl text-[#fefefe] bottom-8">
            Since 2014
          </h1>
        </div>
        <div className="bg-[#E8E8E8] rounded-2xl p-8 flex justify-between flex-col">
          <h3 className="w-full">
            At Destello, we believe creativity should move people — not just
            visually, but emotionally and strategically. We’re passionate about
            helping brands find their voice, tell their story, and make a
            lasting impact.
          </h3>
          <div className="w-full h-[20%]">
            <hr className="w-full text-[#D1D1D1] " />
            <div className="w-full h-full p-4 flex gap-3 items-center">
              <div className="w-19 h-19 flex items-center rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={Page72}
                  alt=""
                />
              </div>
              <div className="h-full flex flex-col relative w-[80%]">
                <h1 className="text-xl font-semibold absolute top-3">Maya L</h1>
                <h2 className="text-sm text-[#6b6b6b] absolute top-10">
                  Marketing Lead at Destello
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#262626] rounded-2xl flex flex-col justify-between text-[#fefefe] p-8">
          <h1 className="text-xl">Trusted Outcomes</h1>
          <div className="w-full h-auto flex flex-col gap-1 justify-center items-center">
            <h1 className="text-6xl">99%</h1>
            <h2 className="text-[#878787]">Success Rate</h2>
          </div>
          <button className="button-hover text-xl self-end">View all works <span><LuArrowUpRight /></span></button>
        </div>
        <div className="bg-[#E8E8E8] rounded-2xl flex flex-col justify-between p-8">
          <div className="w-full h-auto flex flex-col gap-3">
            <h1 className="text-lg">Contact</h1>
            <hr className="w-full text-[#D1D1D1] " />
            <p className="text-[#8F8F8F]">
              Big ideas start with a conversation. Whether you’re ready to
              launch a new brand, elevate your visuals, or explore fresh
              creative possibilities
            </p>
          </div>

          <div className="w-full h-auto flex flex-col gap-2 text-[#262626]">
            <h1>hello@destello.com</h1>
            <h1>+00 1234567890</h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Why_Choose_Us;
