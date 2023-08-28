import React from 'react';

const BestSeller = () => {
  const bestSellers = [
    {
      id: 1,
      img: 'https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg',
      title: 'The Witcher 3: Wild Hunt',
      category: 'Gift Cards',
      oldPrice: '$30',
      newPrice: '$20'
    },
    {
      id: 2,
      img: 'https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg',
      title: 'The Witcher 3: Wild Hunt',
      category: 'Gaming Gift Cards',
      oldPrice: '$30',
      newPrice: '$20'
    },
    {
      id: 3,
      img: 'https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg',
      title: 'The Witcher 3: Wild Hunt',
      category: 'Best Softwares',
      oldPrice: '$30',
      newPrice: '$20'
    },
    {
      id: 4,
      img: 'https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg',
      title: 'The Witcher 3: Wild Hunt',
      category: 'Gaming Gift Cards',
      oldPrice: '$30',
      newPrice: '$20'
    },
    {
      id: 5,
      img: 'https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg',
      title: 'The Witcher 3: Wild Hunt',
      category: 'Subscriptions',
      oldPrice: '$30',
      newPrice: '$20'
    },
    {
      id: 6,
      img: 'https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg',
      title: 'The Witcher 3: Wild Hunt',
      category: 'Subscriptions',
      oldPrice: '$30',
      newPrice: '$20'
    }
  ];
  return (
    <div className="px-5 py-12">
      <div className="text-white text-center lg:text-start pb-12">
        <h1 className="text-3xl py-2">Best Sellers</h1>
        <p>Browse the most popular video games on the platform.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
        {bestSellers.map((bestSeller) => (
          <div class="card">
            <div class="boxshadow"></div>
            <div class="main">
              <div class="top"></div>
              <div class="left side"></div>
              <div class="right side"></div>
              <div class="title">{bestSeller.title}</div>
              <div class="category">
                <span className='bg-black px-3 py-1'>
                    {bestSeller.category}
                </span>
              </div>
              <div class="price">
                <p className='border-2 px-5'>{bestSeller.newPrice}</p>
                <p className='border-2 px-5 line-through'>{bestSeller.oldPrice}</p>
              </div>
              <div class="button-container">
                <button class="button">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
