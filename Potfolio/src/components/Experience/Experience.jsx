import React from "react";

import Tilt from "react-parallax-tilt";
import "../../index.css"


import oop from "../../assets/work_logo/oop.png";


const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans skills-gradient  clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      <div
        className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-[75%] mx-auto sm:w-[48%] rounded-2xl border border-white 
                    shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
          Certificates
        </h3>

        {/* Skill Items - 3 per row on larger screens */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <div className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center">
         
         <img src={oop} alt="certificate" />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Experience;
