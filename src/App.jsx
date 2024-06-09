import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Projects from "./Components/Projects";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
