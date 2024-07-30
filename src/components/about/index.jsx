import React from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
  return (
    <div className="bg-[#EBE2DE] p-5 md:p-12 md:py-20 " id="about">
      <div className="grid md:grid-cols-2">
        <div className="rounded-xl md:rounded-tr-none md:rounded-br-none shadow-2xl border border-gray-300 p-6 px-10 ">
          <h3 className="text-center mb-6 uppercase font-semibold text-[#894821]">
            Embracing Turbulence: Finding Harmony in Chaos.
          </h3>
          <p className="text-justify text-md leading-9">
            I'm{" "}
            <span className="text-lg font-semibold text-[#894821] uppercase">
              Muhammad Hamza
            </span>{" "}
            , a Fashion design student at Institute of Art and design, GC
            university, Faislabad. My research explores the intersections of
            existentialism, harmony, and chaos, driven by a passion for
            understanding human resilience. Inspired by philosophers like Franz
            Kafka,Jean-Paul Sartre and Martin Heidegger, I aim to uncover new
            insights into the human experience. Please explore my site to learn
            more about my journey.
          </p>
          <div className="grid gap-4 mt-6">
            <div className="flex justify-center text-center items-center text-sm flex-col gap-2 shadow-lg p-3 rounded-lg">
              <IoMailUnreadOutline className="text-xl" />
              <p>Email</p>
              <p>hamzaasmat1410@gmail.com</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-center text-center items-center text-sm flex-col gap-2 shadow-lg p-3 rounded-lg">
                <FaWhatsapp className="text-xl" />
                <p>WhatsApp</p>
                <p>03094064419</p>
              </div>
              <div className="flex justify-center text-center items-center text-sm flex-col gap-2 shadow-lg p-3 rounded-lg">
                <FaGraduationCap className="text-xl" />
                <p>Fashion Design (M) </p>
                <p>2020 - 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="filter brightness-50 rounded-tr-xl rounded-br-xl hidden md:block">
          <img
            src="/men.jpg"
            alt=""
            className="rounded-tr-xl rounded-br-xl h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
