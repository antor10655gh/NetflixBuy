import React from 'react';

const SummerPlay = () => {
  const summerPlays = [
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
        <h1 className="text-3xl py-2">Summer Playground</h1>
        <p>Tons of hot deals on video games, software, various gift cards, and more!</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
        {summerPlays.map((summerPlay) => (
          <div class="card">
            <div class="boxshadow"></div>
            <div class="main">
              <div class="top"></div>
              <div class="left side"></div>
              <div class="right side"></div>
              <div class="title">{summerPlay.title}</div>
              <div class="category">
                <span className='bg-black px-3 py-1'>
                    {summerPlay.category}
                </span>
              </div>
              <div class="price">
                <p className='border-2 px-5'>{summerPlay.newPrice}</p>
                <p className='border-2 px-5 line-through'>{summerPlay.oldPrice}</p>
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

export default SummerPlay;
