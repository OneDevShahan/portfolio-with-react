import React from "react";
import TextUtils from "../assets/projects/TextUtils.png";
import ImagePDFConverter from "../assets/projects/ImagePDFConverter.png";
import BudgetTracker from "../assets/projects/BudgetTracker.png";
import Weather from "../assets/projects/Weather.png";
import SwagGenerator from "../assets/projects/SwagGenerator.png";

const Work = () => {
  const projects = [
    {
      name: "Swag Generator",
      image: SwagGenerator,
      live: "https://onedevshahan.github.io/swagger-generator-ui/",
      code: "https://github.com/OneDevShahan/swagger-generator-ui",
    },
    {
      name: "TextUtils App",
      image: TextUtils,
      live: "https://onedevshahan.github.io/TextUtility/",
      code: "https://github.com/OneDevShahan/TextUtility",
    },
    {
      name: "Image2PDF Converter",
      image: ImagePDFConverter,
      live: "https://onedevshahan.github.io/image-to-pdf-converter/",
      code: "https://github.com/OneDevShahan/image-to-pdf-converter",
    },
    {
      name: "Budget Tracker",
      image: BudgetTracker,
      live: "https://onedevshahan.github.io/budget-tracker/",
      code: "https://github.com/OneDevShahan/budget-tracker",
    },
    {
      name: "Weather App",
      image: Weather,
      live: "https://onedevshahan.github.io/weather/",
      code: "https://github.com/OneDevShahan/weather",
    },
  ];

  return (
    <div name="work" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out my recent works</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12">
          {/* Project Items */}
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
            >
              <div className="flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {project.name}
                </span>
                <div className="pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 m-2 py-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Live
                    </button>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 m-2 py-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
