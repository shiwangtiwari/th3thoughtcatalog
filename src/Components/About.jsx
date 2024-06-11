import React from "react";

function About() {
  return (
    <div className="w-full p-5 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black" id="about">
      <h1 className='font-["Neue_Montreal_Regular"] text-[4.5vw] md:text-[3.5vw] leading-[4.5vw] md:leading-[3.5vw] tracking-tight'>
        The Thought Catalog is a strategic partner for fast-growing tech
        businesses that need to raise funds, sell products, explain complex
        ideas, and hire great people.
      </h1>
      <div className="w-full flex flex-col md:flex-row border-t-[2px] pt-10 mt-10 md:mt-20 border-[#a1b562]">
        <div className="w-full md:w-1/2 md:pr-5">
          <h1 className="text-[4vw] md:text-[2.5vw]">Our Approach</h1>
          <button className="flex uppercase gap-3 md:gap-10 items-center px-5 md:px-10 py-4 md:py-6 bg-zinc-900 rounded-full mt-5 md:mt-10 text-white read-more-btn">Read More
          <div className="dot w-1 h-1 md:w-2 md:h-2 bg-zinc-100 rounded-full"></div></button>
        </div>
        <div className="w-full md:w-1/2 h-[30vh] md:h-[60vh] bg-cover bg-picture rounded-3xl mt-5 md:mt-0"></div>
      </div>
    </div>
  );
}

export default About;