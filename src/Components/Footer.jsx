import React from "react";
import Logo from "../assets/ttc-logo.png";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full h-auto md:h-screen bg-zinc-900 p-5 md:p-20 font-['Founders Grotesk X-Cond']" id="footer">
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[8vw] md:text-5xl uppercase font-semibold tracking-tighter leading-none -mb-15">
            Eye-
          </h1>
          <h1 className="text-[8vw] md:text-5xl uppercase font-semibold tracking-tighter leading-none -mb-15">
            Opening
          </h1>
        </div>
        <img src={Logo} alt="" className="w-[35vw] md:w-[14vw] mx-auto md:mx-0" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-[5vw] md:text-3xl uppercase font-semibold tracking-tighter leading-none -mb-5">
          Projects
        </h1>
        <div className="dets font-['Neue Montreal'] mt-5 md:mt-10">
          <a className="block text-xl md:text-lg font-light mb-2" href="https://github.com/shiwangtiwari/" target="_blank">
            Github
          </a>
          <a className="block text-xl md:text-lg font-light mb-2" href="https://www.instagram.com/th3thoughtcatalog/" target="_blank">
            Instagram
          </a>
          <a className="block text-xl md:text-lg font-light mb-2" href="https://www.linkedin.com/in/shiwangtiwari/" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
