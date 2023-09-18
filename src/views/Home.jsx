import React from "react";
import Hero from "../components/hero/Hero";
import TrendingHero from "../components/trendinghero/TrendingHero";
import BestSeller from "../components/category/bestseller/BestSeller";
import SummerPlay from "../components/category/summerplay/SummerPlay";
import GiftCards from "../components/category/giftCards/GiftCards";
import BestSofware from "../components/category/bestSoftware/BestSoftware";

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
