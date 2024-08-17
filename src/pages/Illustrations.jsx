import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Illustrations = () => {
  return (
    <div
      className=" p-5 md:p-12 text-white space-y-20 bg-black"
      id="illustrations"
    >
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Illustrations
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3> 
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 30 }).map((item, index) => (
            <div className="shadow-lg" key={index}>
              <img
                src={`/Images/Illustrations/image${index + 1}.jpg`}
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

export default Illustrations;
