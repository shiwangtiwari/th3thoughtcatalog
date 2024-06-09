import React from 'react';
import Logo from "../assets/ttc-logo.png";

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
    <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
            <img src={Logo} alt="" className="w-[15vw]" />
            <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">&copy;2023-2024</button>
        </div>
    </div>
    <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
    <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
    <img src={Logo} alt="" className="w-[15vw]" />
    <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">&copy;2023-2024</button>
    </div>
    <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
    <img src={Logo} alt="" className="w-[15vw]" />
    <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">&copy;2023-2024</button>
    </div>
    </div>
      
    </div>
  )
}

export default Cards
