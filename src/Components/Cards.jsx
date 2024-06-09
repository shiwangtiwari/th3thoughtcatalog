import React from 'react';
import Logo from "../assets/ttc-logo.png";

function Cards() {
  return (
    <div className='w-full min-h-screen bg-zinc-100 flex flex-col items-center px-5 md:px-32 gap-5' id="insights">
      <div className="cardcontainer w-full md:w-1/2">
        <div className="card relative w-full rounded-xl h-[40vh] md:h-[50vh] bg-[#004D43] flex items-center justify-center">
          <img src={Logo} alt="" className="w-[40vw] md:w-[15vw]" />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">&copy;2023-2024</button>
        </div>
      </div>
      <div className="cardcontainer flex flex-col md:flex-row gap-5 w-full md:w-1/2">
        <div className="card relative flex items-center justify-center w-full md:w-1/2 rounded-xl h-[40vh] md:h-[50vh] bg-[#192826]">
          <img src={Logo} alt="" className="w-[40vw] md:w-[15vw]" />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">&copy;2023-2024</button>
        </div>
        <div className="card relative flex items-center justify-center w-full md:w-1/2 rounded-xl h-[40vh] md:h-[50vh] bg-[#192826]">
          <img src={Logo} alt="" className="w-[40vw] md:w-[15vw]" />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">&copy;2023-2024</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
