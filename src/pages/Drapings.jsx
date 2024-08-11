import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Drapings = () => {
  return (
    <div
      className=" p-5 md:p-12 text-white space-y-20 bg-black"
      id="illustrations"
    >
      {/* Random */}
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Drapings
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 12 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Drapings/image${
                  index < 9 ? `00${index + 1}` : `0${index + 1}`
                }.jpg`}
                alt=""
                className="w-[100%] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Category-1 */}
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 md:text-3xl">
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
          {Array.from({ length: 11 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Drapings/c1.${index + 1}.jpg`}
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
          <h3 className="flex items-center justify-center gap-5 md:text-3xl">
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
          {Array.from({ length: 10 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Drapings/c2.${index + 1}.jpg`}
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
          <h3 className="flex items-center justify-center gap-5 md:text-3xl">
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
          {Array.from({ length: 8 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Drapings/c3.${index + 1}.jpg`}
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
          <h3 className="flex items-center justify-center gap-5 md:text-3xl">
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
          {Array.from({ length: 10 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Drapings/c4.${index + 1}.jpg`}
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

export default Drapings;
