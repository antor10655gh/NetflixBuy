import React from "react";
import PrimBtn from "../../button/PrimBtn";
import bgImg from "../../../assets/images/wilder.jpg";

const BestSofware = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const bestSofwares = [
    {
      id: 1,
      img: "https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg",
      title: "The Witcher 3: Wild Hunt",
      category: "Gift Cards",
      oldPrice: "$30",
      newPrice: "$20",
    },
    {
      id: 2,
      img: "https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg",
      title: "The Witcher 3: Wild Hunt",
      category: "Gaming Gift Cards",
      oldPrice: "$30",
      newPrice: "$20",
    },
    {
      id: 3,
      img: "https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg",
      title: "The Witcher 3: Wild Hunt",
      category: "Best Softwares",
      oldPrice: "$30",
      newPrice: "$20",
    },
    {
      id: 4,
      img: "https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg",
      title: "The Witcher 3: Wild Hunt",
      category: "Gaming Gift Cards",
      oldPrice: "$30",
      newPrice: "$20",
    },
    {
      id: 5,
      img: "https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg",
      title: "The Witcher 3: Wild Hunt",
      category: "Subscriptions",
      oldPrice: "$30",
      newPrice: "$20",
    },
    {
      id: 6,
      img: "https://i.ibb.co/PYBwpdw/redeem-art-minecraft-285x380.jpg",
      title: "The Witcher 3: Wild Hunt",
      category: "Subscriptions",
      oldPrice: "$30",
      newPrice: "$20",
    },
  ];
  return (
    <div
      className="px-5 py-12 bg-no-repeat bg-cover bg-center"
      style={divStyle}
    >
      <div className="text-white text-center lg:text-start pb-12">
        <h1 className="text-3xl py-2">Best Software Products</h1>
        <p>
          From methods of protecting your PC to software useful in your
          professional life, you will find it all here at attractive prices.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
        {bestSofwares.map((bestSofware) => (
          <div className="card lg:w-[350px]">
            <div className="card-banner">
              <img
                src="https://i.ibb.co/b54fN95/5cf4fbc146177c41784528f2-e1687732810754.webp"
                alt=""
                className="w-full h-full lg:w-[350px] rounded-tl-lg rounded-tr-lg rounded-b-none rounded-br-none"
              />
            </div>
            <div className="card-content p-3">
              <h1 className="text-2xl py-2 text-white">
                Netflix Gift Card 200 TL - Netflix Key
              </h1>
              <span className="bg-red-500 text-white px-2 my-3 rounded-md">
                TrendingProducts
              </span>
              <div className="py-3 flex gap-3">
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5">
                  {bestSofware.newPrice}
                </span>
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5 line-through">
                  {bestSofware.oldPrice}
                </span>
              </div>
              <div className="flex justify-end">
                <PrimBtn text={"Buy Now"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSofware;
