import React from "react";
import Logo from "../assets/ttc-logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full h-auto md:h-[30vh] bg-zinc-900 p-5 md:p-20 font-['Founders Grotesk X-Cond']" id="footer">
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[8vw] md:text-5xl uppercase font-semibold tracking-tighter leading-none -mb-15">
            Eye-
          </h1>
          <h1 className="text-[8vw] md:text-5xl uppercase font-semibold tracking-tighter leading-none -mb-15">
            Opening
          </h1>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-[5vw] md:text-3xl uppercase font-semibold tracking-tighter leading-none -mb-5">
          Projects
        </h1>
        <div className="dets relative font-['Neue Montreal'] mt-5 md:mt-10">
          <a className="block text-xl md:text-lg font-light mb-2 flex items-center" href="https://github.com/shiwangtiwari/" target="_blank">
            <FaGithub className="mr-2" /> Github
          </a>
          <a className="block text-xl md:text-lg font-light mb-2 flex items-center" href="https://www.instagram.com/th3thoughtcatalog/" target="_blank">
            <FaInstagram className="mr-2" /> Instagram
          </a>
          <a className="block text-xl md:text-lg font-light mb-2 flex items-center" href="https://www.linkedin.com/in/shiwangtiwari/" target="_blank">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
      {/* Logo container at the bottom */}
      <div className="w-[50vw] md:w-[35vw] md:ml-auto flex justify-center items-end mt-auto">
        <img src={Logo} alt="" className="w-full md:w-[14vw]" />
      </div>
    </div>
  );
}

export default Footer;
