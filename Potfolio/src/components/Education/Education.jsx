import React from "react";
import { education } from "../../Constant";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-white h-full" />

        {/* Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center mb-20"
          >
            {/* LEFT CARD */}
            {index % 2 === 0 && (
              <div className="sm:col-start-1 sm:justify-self-end w-full sm:max-w-md">
                <EducationCard edu={edu} />
              </div>
            )}

            {/* TIMELINE CIRCLE */}
            <div className="flex justify-end">
              <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-20">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* RIGHT CARD */}
            {index % 2 !== 0 && (
              <div className="sm:col-start-3 sm:justify-self-start w-full sm:max-w-md">
                <EducationCard edu={edu} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------------- CARD COMPONENT ---------------- */

const EducationCard = ({ edu }) => {
  return (
    <div className="p-6 rounded-2xl border border-white bg-gray-900 shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center space-x-6">
        <div className="w-24 h-16 bg-white rounded-md overflow-hidden shrink-0">
          <img
            src={edu.img}
            alt={edu.school}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
          <h4 className="text-sm text-gray-300">{edu.school}</h4>
          <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-400 font-bold">{edu.grade}</p>
    </div>
  );
};

export default Education;
