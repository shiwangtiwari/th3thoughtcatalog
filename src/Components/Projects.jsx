import React from "react";

function Projects() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[2px] border-zinc-700 pb-20">
        <h1 className='text-[4vw] font-["Neue_Montreal_Regular"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] z-[9] left-full -translate-x-1/2  top-1/2 -translate-y-1/2 text-[3vw] leading-none tracking-tight font-semibold font-['Neue_Montreal_Regular']">
            {"FYDE".split('').map((item)=><span>{item}</span>)}
            </h1>
            <div className="card w-full rounded-xl h-full overflow-hidden">
              <img
                src="https://www.shiwangtiwari.com/assets/socio-BlN6WkBF.png"
                alt="sas"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] z-[9] right-full translate-x-1/2  top-1/2 -translate-y-1/2 text-[3vw] leading-none tracking-tight font-semibold font-['Neue_Montreal_Regular']">
              {"VISE".split('').map((item)=><span>{item}</span>)}
            </h1>
            <div className="card w-full rounded-xl h-full overflow-hidden">
              <img
                src="https://www.shiwangtiwari.com/assets/socio-BlN6WkBF.png"
                alt="sas"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
