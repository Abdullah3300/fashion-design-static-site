import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Sketches = () => {
  return (
    <div
      className=" p-5 md:p-12 text-white space-y-20 bg-black"
      id="illustrations"
    >
      {/* Category-1 */}
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Street Style
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 24 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Sketches/c1.${index + 1}.jpg`}
                alt=""
                className="w-[100%] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Category-2 */}
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Jacket Trouser
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 23 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Sketches/c2.${index + 1}.jpg`}
                alt=""
                className="w-[100%] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Category-3 */}
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Ensom
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 22 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Sketches/c3.${index + 1}.jpg`}
                alt=""
                className="w-[100%] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Category-4 */}
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Cocktail
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 23 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Sketches/c4.${index + 1}.jpg`}
                alt=""
                className="w-[100%] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sketches;
