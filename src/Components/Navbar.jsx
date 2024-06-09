import React from "react";
import Logo from "../assets/ttc-logo.png";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className="logo">
        <img src={Logo} alt="Logo" className="h-30 w-72" />
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-lg capitalize font-light ${index=== 4 && "ml-32"}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
