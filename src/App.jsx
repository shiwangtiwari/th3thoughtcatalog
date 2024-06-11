import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Projects from "./Components/Projects";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import LoadingScreen from "./Components/LoadingScreen"; // Import the LoadingScreen component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setLoadingProgress((prev) => {
        if (prev < 100) {
          return prev + 1.65; // Increase progress by smaller increments
        } else {
          clearInterval(progressInterval);
          setIsLoading(false);
          return 100;
        }
      });
    };

    const progressInterval = setInterval(updateProgress, 50); // Increase the interval

    // Initialize Locomotive Scroll after loading
    if (loadingProgress === 100) {
      new LocomotiveScroll();
    }

    return () => clearInterval(progressInterval);
  }, [loadingProgress]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Initialize Locomotive Scroll after loading
    new LocomotiveScroll();
  };

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <LoadingScreen
        progress={loadingProgress}
        isLoading={isLoading}
        onLoadingComplete={handleLoadingComplete} // Pass the function as prop
      />
      {!isLoading && (
        <>
          <Navbar />
          <LandingPage />
          <Marquee />
          <About />
          <Eyes />
          <Projects />
          <Cards />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
