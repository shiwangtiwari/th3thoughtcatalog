import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
        <h1 className='text-[22vw] leading-none tracking-tightester font-["Founders Grotesk X-Cond"] uppercase pt-1 mb-[1vw] font-bold'>
          We are thoughts
        </h1>
        <h1 className='text-[22vw] leading-none tracking-tightester font-["Founders Grotesk X-Cond"] uppercase pt-1 mb-[1vw] font-bold'>
          We are thoughts
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
