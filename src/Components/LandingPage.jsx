import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/loop.mp4"; // Import your video file

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full min-h-screen bg-zinc-900 pt-1" id="home">
      <div className="textstructure mt-24 md:mt-52 px-5 md:px-20">
        {["WE CREATE", "EYE OPENING", "PROJECTS"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-end overflow-hidden relative">
              {index === 1 && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="relative w-[9vw] md:w-auto h-[5.2vw] md:h-[5.2vw] rounded-md overflow-hidden"
                >
                  <video
                    src={backgroundVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
              <h1 className="flex items-center uppercase text-[7.5vw] md:text-[7.5vw] h-full leading-[6.5vw] md:leading-[6.5vw] tracking-tightest font-['Founders Grotesk X-Cond'] font-bold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-center py-5 px-5 md:px-20">
        {["For Public and Private Companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md md:text-md font-light tracking-tight leading-none mb-2 md:mb-0 md:mr-10">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5 mt-5 md:mt-0">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md md:text-md uppercase rounded-full">
            Start the project
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
