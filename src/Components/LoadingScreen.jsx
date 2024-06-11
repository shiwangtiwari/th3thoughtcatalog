import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Logo from "../assets/ttc-logo-black.png";
import './LoadingScreen.css'; // Make sure to create this CSS file

function LoadingScreen({ progress, isLoading, onLoadingComplete }) {
  const loadingRef = useRef(null);

  useEffect(() => {
    if (!isLoading && progress === 100) {
      // Zoom and blend animation
      loadingRef.current.classList.add('zoom-in');
      loadingRef.current.classList.add('zoom-out');

      // Wait for the animation to complete before removing the loading screen
      setTimeout(() => {
        onLoadingComplete();
      }, 1000); // Adjust the duration as needed
    }
  }, [isLoading, progress, onLoadingComplete]);

  return (
    <div ref={loadingRef} className={`loading-screen ${isLoading ? '' : 'hide'}`}>
      <div className="loading-container w-full flex items-start overflow-hidden relative">
        <img src={Logo} alt="Logo" className="h-[2vh] md:h-[2.5vh] -mb-20 mt-0 ml-0 md:mt-5 md:ml-5" /> {/* Add the logo here */}
        <h1 className="loading-text pl-0 md:pl-10 flex items-center uppercase text-[7.5vw] md:text-[5.5vw] h-full leading-[5.5vw] md:leading-[5.5vw] tracking-tightest font-['Founders Grotesk X-Cond'] font-bold">WE CREATE<br />EYE-OPENING<br />PRESENTATIONS</h1>
        <div className="loading-percentage text-[7.5vw] md:text-[5.0vw]">{Math.floor(progress)}%</div>
        <div className="loading-note">Loading:</div>
      </div>
    </div>
  );
}

// Add PropTypes validation
LoadingScreen.propTypes = {
  progress: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;
