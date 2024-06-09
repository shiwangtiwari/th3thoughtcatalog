import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal_Regular"] text-[4vw] leading-[3.5vw] tracking-tight'>
        The Thought Catalog is a strategic partner for fast-growing tech
        businesses that need to raise funds, sell products, explain complex
        ideas, and hire great people.
      </h1>
      <div className="w-full flex border-t-[2px] pt-10 mt-10 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our Aproach</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white">Read More
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>
        </div>
        <div className="w-1/2 h-[60vh] bg-red-500 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
