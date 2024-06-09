import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[22vw] leading-none tracking-tightester font-["Founders Grotesk X-Cond"] uppercase pt-1 mb-[1vw] font-bold pr-20'
        >
          We are thoughts
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[22vw] leading-none tracking-tightester font-["Founders Grotesk X-Cond"] uppercase pt-1 mb-[1vw] font-bold'
        >
          We are thoughts
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
