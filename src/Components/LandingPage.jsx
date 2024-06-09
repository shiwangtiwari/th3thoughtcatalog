import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["WE CREATE", "EYE OPENING", "PROJECTS"].map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (<div className="w-[9vw] rounded-md h-[5.2vw] relative bg-red-500"></div>)}
                <h1 className="flex items-center uppercase text-[7.5vw] h-full leading-[6.5vw] tracking-tightest font-['Founders Grotesk X-Cond'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For Public and Private Companies", "From the fist pitch to IPO"].map(
          (item) => (
            // eslint-disable-next-line react/jsx-key
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
