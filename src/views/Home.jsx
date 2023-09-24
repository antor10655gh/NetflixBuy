import React from "react";
import Hero from "../components/hero/Hero";
import BestSofware from "../components/category/bestSoftware/BestSoftware";
import GiftCards from "../components/category/giftCards/GiftCards";
import SummerPlay from "../components/category/summerplay/SummerPlay";
import BestSeller from "../components/category/bestseller/BestSeller";
import TrendingHero from "../components/trendinghero/TrendingHero";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingHero />
      <BestSeller />
      <SummerPlay />
      <GiftCards />
      <BestSofware />
    </div>
  );
};

export default Home;
