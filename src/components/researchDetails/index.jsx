import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { LiaQuoteRightSolid } from "react-icons/lia";

const ResearchDetails = () => {
  return (
    <div className="">
      <h3 className="text-center p-5 md:p-12 text-lg uppercase font-semibold text-[#894821] flex items-center justify-center gap-5">
        <span className="text-xl">
          <FaQuoteLeft />
        </span>
        Embracing Turbulence: Finding Harmony in Chaos
        <span className="text-xl">
          <FaQuoteRight />
        </span>
      </h3>
      <div className="grid gap-6 md:grid-cols-2 text-justify bg-[#EBE2DE] p-5 md:p-12">
        <div className="bg-white rounded-md p-7">
          <h5 className="text-[#894821] text-md uppercase font-semibold flex justify-center items-start mb-3 gap-1">
            <LiaQuoteLeftSolid />
            Introduction
            <LiaQuoteRightSolid />
          </h5>
          In the midst of chaos, I find solace in the pursuit of harmony. This
          thesis is a personal and academic journey to explore the resilience of
          the human spirit in the face of uncertainty. Through existentialist
          philosophy, I aim to uncover the balance between turmoil and serenity.
        </div>
        <div className="bg-white rounded-md p-7">
          <h5 className="text-[#894821] text-md uppercase font-semibold flex justify-center items-start mb-3 gap-1">
            <LiaQuoteLeftSolid />
            Inspiration
            <LiaQuoteRightSolid />
          </h5>
          The works of Jean-Paul Sartre, Martin Heidegger, Albert Camus, and
          Franz Kafka inspire my research. Their concepts of freedom, choice,
          the absurd, and the search for meaning guide my inquiry into the human
          experience. Existentialism's emphasis on individual responsibility and
          creativity in the face of uncertainty resonates with my quest for
          harmony.
        </div>
        <div className="bg-white rounded-md p-7">
          <h5 className="text-[#894821] text-md uppercase font-semibold flex justify-center items-start mb-3 gap-1">
            <LiaQuoteLeftSolid />
            Research Focus
            <LiaQuoteRightSolid />
          </h5>
          How can individuals find harmony in chaotic situations, and what role
          does existential resilience play in this process?
        </div>
        <div className="bg-white rounded-md p-7">
          <h5 className="text-[#894821] text-md uppercase font-semibold flex justify-center items-start mb-3 gap-1">
            <LiaQuoteLeftSolid />
            Mood and Tone
            <LiaQuoteRightSolid />
          </h5>
          Fortitude and resilience shape my approach, as I delve into the
          complexities of chaos and harmony. My tone is reflective, inquisitive,
          and hopeful, seeking to inspire others to embrace turbulence and find
          balance.
        </div>
        <div className="bg-white rounded-md p-7">
          <h5 className="text-[#894821] text-md uppercase font-semibold flex justify-center items-start mb-3 gap-1">
            <LiaQuoteLeftSolid />
            Goals and Outcomes
            <LiaQuoteRightSolid />
          </h5>
          <p>1. Explore the concept of harmony in chaotic situations.</p>
          <p>
            2. Analyze the role of existential resilience in finding balance.
          </p>
          <p>
            3. Develop a framework for cultivating harmony in turbulent times.
          </p>
          <p>
            4.Contribute to the understanding of existentialism's practical
            applications.
          </p>
        </div>
        <div className="bg-white rounded-md p-7">
          <h5 className="text-[#894821] text-md uppercase font-semibold flex justify-center items-start mb-3 gap-1">
            <LiaQuoteLeftSolid />
            Personal Quotes
            <LiaQuoteRightSolid />
          </h5>
          <p>
            1. "Life begins on the other side of despair." - Jean-Paul Sartre.
          </p>
          <p>
            2. "You can hold yourself back from the sufferings of the world,
            that is something you are free to do and it accords with your
            nature, but perhaps this very holding back is the one suffering you
            could avoid." - Franz Kafka
          </p>
        </div>
      </div>
      <div className="bg-[#EBE2DE] p-5 md:px-12 text-md  text-justify pb-10">
        <p>
          The Kafka quote highlights the existentialist idea that our choices
          and actions (or inactions) have consequences, and that even avoiding
          suffering can be a form of suffering itself. This resonates with my
          research focus on finding harmony in chaotic situations.
        </p>
      </div>
    </div>
  );
};

export default ResearchDetails;
