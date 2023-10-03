import React, { useEffect, useState } from "react";
import defaultBg from "../assets/images/logo.png";
import netflixBg from "../assets/images/netflix.png";
import razergoldBg from "../assets/images/razergold.png";
import amazonBg from "../assets/images/amazon.png";
import binanceBg from "../assets/images/binance.png";
import vanillaBg from "../assets/images/vanilla.png";
import steamBg from "../assets/images/steam.png";
import itunesBg from "../assets/images/itunes.png";
import virtualBg from "../assets/images/virtual.png";
import wallmartBg from "../assets/images/wallmart.png";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";

const TrendingProducts = () => {
  const [user, setUser] = useState(false);

  const { category } = useParams();
  console.log(category);

  let backgroundImageUrl;

  if (category === "Netflix") {
    backgroundImageUrl = `${netflixBg}`;
  } else if (category === "RazerGold") {
    backgroundImageUrl = `${razergoldBg}`;
  } else if (category === "Amazon") {
    backgroundImageUrl = `${amazonBg}`;
  } else if (category === "BinanceUSDT") {
    backgroundImageUrl = `${binanceBg}`;
  } else if (category === "Vanilla") {
    backgroundImageUrl = `${vanillaBg}`;
  } else if (category === "Steam") {
    backgroundImageUrl = `${steamBg}`;
  } else if (category === "Itunes") {
    backgroundImageUrl = `${itunesBg}`;
  } else if (category === "VirtualMastercard") {
    backgroundImageUrl = `${virtualBg}`;
  } else if (category === "Walmart") {
    backgroundImageUrl = `${wallmartBg}`;
  } else {
    backgroundImageUrl = `${netflixBg}`;
  }

  useEffect(() => {
    setTimeout(() => {
      setUser(true);
    }, 2000);
  });

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
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
        setProducts(data);
      });
  }, [category]);
  return (
    <>
      {user ? (
        <div
          className="bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        >
          <div className="bgImage px-5 py-12 ">
            <div className="text-black text-center lg:text-start pb-12">
              <h1 className="text-3xl py-2"> {category}</h1>
              <p>
                Tons of hot deals on video games, software, various gift cards,
                and more!
              </p>
            </div>
            <div className="card-container">
              {products?.map((product) => (
                <div className="card relative flex w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-full lg:h-96 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-black shadow-lg shadow-blue-gray-500/40">
                    <img
                      src={`https://netflixbuy-server-production.up.railway.app/${product?.productImg}`}
                      alt="img-blur-shadow"
                      layout="fill"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-black antialiased">
                      {product?.name.slice(0, 25) + " ..."}
                    </h5>
                    <div className="card-content">
                      <span className="bg-[#8ea406] text-black px-2 my-3 rounded-md">
                        {product?.subCategory}
                      </span>
                      <div className="py-3 flex gap-3">
                        <span className="text-lg border-[1px] border-gray px-2 rounded-full text-black px-5">
                          {`${product.newPrice}$`}
                        </span>
                        <span className="text-lg border-[1px] border-gray px-2 rounded-full text-black px-5 line-through">
                          {`${product?.oldPrice}$`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex justify-end p-3">
                      <Link to={`/product/${product?._id}`}>
                        <button className="prim_btn">Buy now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TrendingProducts;
