import React from "react";
import bgImg from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="heroBg w-full h-screen">
      <div className="bg-gray-900 w-full h-screen opacity-75 flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-center">
        <div className="lg:w-2/3 flex flex-col lg:flex-row lg:justify-center lg:items-center h-1/2 lg:h-screen gap-12 mt-20">
          <img
            className="w-full lg:w-1/2 rounded-md p-5 lg:p-0"
            src={bgImg}
            alt=""
          />
          <div className="text-white text-center lg:text-start">
            <h1 className="text-2xl lg:text-5xl font-bold">
              Entertainment is here!
            </h1>
            <p className="lg:leading-[80px]">
              Tons of hot deals on video games, software, various gift cards,
              and more!
            </p>
            <Link to="/category/trendingProducts" className="prim_btn">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
