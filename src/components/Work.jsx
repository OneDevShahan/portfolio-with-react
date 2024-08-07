import React from "react";
import TextUtils from "../assets/projects/TextUtils.png";
import ImagePDFConverter from "../assets/projects/ImagePDFConverter.png";
import BudgetTracker from "../assets/projects/BudgetTracker.png";
import Weather from "../assets/projects/Weather.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen  bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-grey-300">
            Work
          </p>
          <p className="py-6">Check out my recent works</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-50">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TextUtils})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TextUtils App
              </span>
              <div className="pt-2">
                <a
                  href="https://onedevshahan.github.io/TextUtility/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-lg px-4 m-2 py-3 bg-white hover:bg-pink-600 text-grey-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/OneDevShahan/TextUtility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-lg px-4 m-2 py-3 bg-white hover:bg-pink-600 text-grey-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ImagePDFConverter})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Image2PDF Converter
              </span>
              <div className="pt-2 flex justify-center">
                <a
                  href="https://onedevshahan.github.io/image-to-pdf-converter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-lg px-4 m-2 py-3 bg-white hover:bg-pink-600 text-grey-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/OneDevShahan/image-to-pdf-converter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-lg px-4 m-2 py-3 bg-white hover:bg-pink-600 text-grey-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BudgetTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Budget Tracker
              </span>
              <div className="pt-2">
                <a
                  href="https://onedevshahan.github.io/budget-tracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-lg px-4 m-2 py-3 bg-white hover:bg-pink-600 text-grey-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/OneDevShahan/budget-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-lg px-4 m-2 py-3 bg-white hover:bg-pink-600 text-grey-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div className="pt-2">
                <a
                  href="https://onedevshahan.github.io/weather/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-lg px-4 m-2 py-3 bg-white hover:bg-pink-600 text-grey-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/OneDevShahan/weather"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-lg px-4 m-2 py-3 bg-white hover:bg-pink-600 text-grey-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
