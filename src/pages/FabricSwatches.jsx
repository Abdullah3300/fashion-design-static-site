import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const FabricSwatches = () => {
  return (
    <div className=" p-5 md:p-12 text-white space-y-20 bg-black">
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Fabric Swatches
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 40 }).map((item, index) => {
            const imageIndex = index * 2 + 1; // This will give odd numbers starting from 1
            const formattedIndex =
              imageIndex < 10 ? `00${imageIndex}` : `0${imageIndex}`;
            return (
              <div className="shadow-lg" key={imageIndex}>
                <img
                  src={`/Images/Fabric/image${formattedIndex}.jpg`}
                  alt=""
                  className="w-[100%] h-[100%] rounded-md"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FabricSwatches;
