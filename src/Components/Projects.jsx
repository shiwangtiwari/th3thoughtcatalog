import React, { useState } from "react";
import { motion } from "framer-motion";
import socioImage from "../assets/socio.jpg";
import nuoxImage from "../assets/nuox.jpg";
import portfolioImage from "../assets/portfolio.jpg";
import fitnessImage from "../assets/the-fitness-club.jpg";

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleHoverEnd = () => {
    setHovered(null);
  };

  const cards = [
    { title: "SOCIO", link: "https://socio-st.netlify.app/", bgImage: socioImage },
    { title: "NUOX", link: "https://nuox-olive.vercel.app/", bgImage: nuoxImage },
    { title: "PORTFOLIO", link: "https://www.shiwangtiwari.com", bgImage: portfolioImage },
    { title: "FITNESS", link: "https://th3fitnessclub.netlify.app/", bgImage: fitnessImage },
  ];

  return (
    <div className="w-full py-20" id="work">
      <div className="w-full px-20 border-b-[2px] border-zinc-700 pb-20">
        <h1 className='text-[4vw] font-["Neue_Montreal_Regular"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-5 md:px-20">
        <div className="cards w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 mt-10 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onHoverStart={() => handleHover(index)}
              onHoverEnd={handleHoverEnd}
              whileHover={{ scale: 1.06, zIndex: 2, transition: { duration: 0.5, ease: "easeInOut" } }}
              className={`cardcontainer relative w-full h-[25vh] md:h-[45vh] z-${hovered === index ? "20" : "10"}`}
            >
              <h1 className={`absolute flex overflow-hidden text-[#CDEA68] z-[9] ${index % 2 === 0 ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'} top-1/2 -translate-y-1/2 text-[3vw] leading-none tracking-tight font-semibold font-['Neue_Montreal_Regular']`}>
                {card.title.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ y: "100%", zIndex: hovered === index ? 1 : 0 }}
                    animate={{ y: hovered === index ? "0" : "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: charIndex * 0.05 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <div className={`card w-full h-full bg-cover rounded-xl overflow-hidden`} style={{ backgroundImage: `url(${card.bgImage})`}}></div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
