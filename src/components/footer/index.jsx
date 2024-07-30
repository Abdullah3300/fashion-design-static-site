import React from "react";

const Footer = () => {
  return (
    <div className="h-[20vh] md:h-[30vh] bg-[#D0B6A6] flex flex-col justify-center items-center">
      <div className="flex gap-8">
        <a
          href="#home"
          className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	"
        >
          HOME
        </a>
        <a
          href="#about"
          className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	"
        >
          ABOUT
        </a>
        <p className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	">
          PROJECTS
        </p>
      </div>
      <p className="text-white text-[10px] mt-2">
        © Hamza - Fashion Designer || All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
