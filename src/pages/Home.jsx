import React from "react";
import HomeLanding from "../components/home";
import About from "../components/about";
import ResearchDetails from "../components/researchDetails";

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <About />
      <ResearchDetails />
    </div>
  );
};

export default Home;
