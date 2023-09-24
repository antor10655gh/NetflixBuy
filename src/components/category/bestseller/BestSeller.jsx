import React, { useEffect, useState } from "react";
import bgImg from "../../../assets/images/wilder.jpg";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const [bestSellers, setBestSellers] = useState([]);

  const category = "BestSeller";

  useEffect(() => {
    fetch(
      `https://netflixbuy-server-production.up.railway.app/api/v1/product/category/${category}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBestSellers(data);
      });
  }, [category]);

  return (
    <div
      className="px-5 py-12 bg-no-repeat bg-cover bg-center"
      style={divStyle}
    >
      <div className="text-white text-center lg:text-start pb-12">
        <h1 className="text-3xl py-2">Best Sellers</h1>
        <p>Browse the most popular video games on the platform.</p>
      </div>
      <div className="card-container">
        {bestSellers?.map((bestSeller) => (
          <div className="card lg:w-[350px]">
            <div className="card-banner">
              <img
                src={`https://netflixbuy-server-production.up.railway.app/${bestSeller?.productImg}`}
                alt=""
                className="w-full h-full lg:w-[350px] h-[400px] rounded-tl-lg rounded-tr-lg rounded-b-none rounded-br-none "
              />
            </div>
            <div className="card-content p-3">
              <h1 className="text-2xl py-2 text-white">{bestSeller?.name}</h1>
              <span className="bg-red-500 text-white px-2 my-3 rounded-md">
                {bestSeller?.subCategory}
              </span>
              <div className="py-3 flex gap-3">
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5">
                  {`${bestSeller.newPrice}$`}
                </span>
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5 line-through">
                  {`${bestSeller?.oldPrice}$`}
                </span>
              </div>
            </div>
            <div className="flex justify-end p-3">
              {user ? (
                <Link to={`/product/${bestSeller?._id}`}>
                  <button className="prim_btn">Buy now</button>
                </Link>
              ) : (
                <Link to={`/login`}>
                  <button className="prim_btn">Buy now</button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
