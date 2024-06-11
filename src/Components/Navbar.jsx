import React, { useState, useEffect } from "react";
import Logo from "../assets/ttc-logo.png";
import Bars from "../assets/bars.png";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        setMenuOpened(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="fixed z-[999] w-full px-6 md:px-20 py-4 md:py-8 font-['Neue Montreal'] flex justify-between items-center bg-black">
      <div className="logo">
        <img src={Logo} alt="Logo" className="h-[2vh] md:h-[2.5vh]" />
      </div>
      {/* Conditionally render the bars icon based on the menuOpened state */}
      {!menuOpened && (
        <div className="menu-icon md:hidden" onClick={toggleMenu}>
          <img src={Bars} alt="Bars" className="w-8 h-8" />
        </div>
      )}
      <ul className={`menu md:flex ${menuOpened ? "flex flex-col md:flex-row open-menu-class" : "hidden"} md:items-center md:flex-row md:gap-8 absolute md:static top-full right-0 w-[50vw] md:w-auto bg-black md:bg-transparent`}>
        <li className="md:mr-8">
          <Link
            className="nav-link"
            onClick={() => setMenuOpened(false)}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
          >
            Services
          </Link>
        </li>
        <li className="md:mr-8">
          <Link
            className="nav-link"
            onClick={() => setMenuOpened(false)}
            to="about"
            spy={true}
            smooth={true}
          >
            About Us
          </Link>
        </li>
        <li className="md:mr-8">
          <Link
            className="nav-link"
            onClick={() => setMenuOpened(false)}
            to="work"
            spy={true}
            smooth={true}
          >
            Our Work
          </Link>
        </li>
        <li className="md:mr-8">
          <Link
            className="nav-link"
            onClick={() => setMenuOpened(false)}
            to="insights"
            spy={true}
            smooth={true}
          >
            Insights
          </Link>
        </li>
        <li>
          <Link
            className="nav-link ml-0 md:ml-32"
            onClick={() => setMenuOpened(false)}
            to="footer"
            spy={true}
            smooth={true}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
