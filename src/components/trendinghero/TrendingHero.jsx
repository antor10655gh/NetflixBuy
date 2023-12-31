import React from "react";
import bgImg from "../../assets/images/trending.jpg";
import { Link } from "react-router-dom";

const TrendingHero = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen opacity-300 flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-center">
        <div className="lg:w-2/3 flex flex-col lg:flex-row lg:justify-center lg:items-center h-1/2 lg:h-screen gap-12 mt-10 lg:mt-0">
          <img
            className="w-full lg:w-1/3 rounded-md p-5 lg:p-0"
            src={bgImg}
            alt=""
          />
          <div className="text-black text-center lg:text-start">
            <h1 className="text-2xl lg:text-5xl font-bold">
              Trending products
            </h1>
            <p className="py-3 lg:py-5">
              The best offers, new video games, AAA titles and indies, DLCs,
              gift cards, and more. Buy bestselling games, and other digital
              products at the best possible price.
            </p>
            <Link to="/category/Netflix" className="prim_btn">
              See all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHero;
