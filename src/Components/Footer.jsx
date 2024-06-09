import React from "react";
import Logo from "../assets/ttc-logo.png";

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900 p-20 font-['Founders Grotesk X-Cond']">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[8vw] uppercase font-semibold tracking-tighter leading-none -mb-5">
            Eye-
          </h1>
          <h1 className="text-[8vw] uppercase font-semibold tracking-tighter leading-none -mb-5">
            Opening
          </h1>
        </div>
        <img src={Logo} alt="" className="w-[15vw]" />
      </div>
      <div className="w-1/2">
        <h1 className="text-[5vw] uppercase font-semibold tracking-tighter leading-none -mb-5">
          Projects
        </h1>
        <div className="dets font-['Neue Montreal'] mt-10">
          <a className="block text-xl font-light" href="#">
            Facebook
          </a>
          <a className="block text-xl font-light" href="#">
            Instagram
          </a>
          <a className="block text-xl font-light" href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
