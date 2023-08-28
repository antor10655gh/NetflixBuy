import React from 'react';
import bgImg from '../../assets/images/trending.jpg';
import PrimBtn from '../button/PrimBtn';

const TrendingHero = () => {
  return (
    <div className="trendingHeroBg w-full h-screen">
      <div className="w-full h-screen opacity-75 flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-center">
        <div className="lg:w-2/3 flex flex-col lg:flex-row lg:justify-center lg:items-center h-1/2 lg:h-screen gap-12 mt-10 lg:mt-0">
          <img className="w-full lg:w-1/3 rounded-md p-5 lg:p-0" src={bgImg} alt="" />
          <div className="text-white text-center lg:text-start">
            <h1 className="text-2xl lg:text-5xl font-bold">Trending products</h1>
            <p className="py-3 lg:py-5">
              The best offers, new video games, AAA titles and indies, DLCs,
              gift cards, and more. Buy bestselling games, and other digital
              products at the best possible price.
            </p>
            <PrimBtn text="See All" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHero;
