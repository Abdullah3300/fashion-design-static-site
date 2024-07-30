import React from "react";
import Header from "../header";

const Home = () => {
  return (
    <div className="home-section h-[100vh]" id="home">
      <Header />
      <h1 className="uppercase flex justify-center text-[45px] md:text-[60px] lg:text-[80px] xl:text-[100px] tracking-widest items-center h-[100%] text-white">
        elegance
      </h1>
    </div>
  );
};

export default Home;
