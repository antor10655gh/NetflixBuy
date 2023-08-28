import React from 'react';
import Hero from '../components/hero/Hero';
import TrendingHero from '../components/trendinghero/TrendingHero';
import BestSeller from '../components/category/bestseller/BestSeller';
import SummerPlay from '../components/category/summerplay/SummerPlay';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingHero />
      <BestSeller />
      <SummerPlay />
    </div>
  );
};

export default Home;
