import React, { useEffect, useState } from "react";
import bgImg from "../assets/images/trending-hero.png";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";

const TrendingProducts = () => {
  const [user, setUser] = useState(false);

  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    setTimeout(() => {
      setUser(true);
    }, 2000);
  });

  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://31.172.83.135:5656/api/v1/product/category/${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
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
          className="px-5 py-12 bg-no-repeat bg-cover bg-center"
          style={divStyle}
        >
          <div className="text-white text-center lg:text-start pb-12">
            <h1 className="text-3xl py-2"> {category}</h1>
            <p>
              Tons of hot deals on video games, software, various gift cards,
              and more!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            {products?.map((product) => (
              <div className="card lg:w-[350px]">
                <div className="card-banner">
                  <img
                    src={`http://31.172.83.135:5656/${product?.productImg}`}
                    alt=""
                    className="w-full h-full lg:w-[350px] rounded-tl-lg rounded-tr-lg rounded-b-none rounded-br-none"
                  />
                </div>
                <div className="card-content p-3">
                  <h1 className="text-2xl py-2 text-white">
                    {`${product?.name}`}
                  </h1>
                  <span className="bg-red-500 text-white px-2 my-3 rounded-md">
                    {`${product?.subCategory}`}
                  </span>
                  <div className="py-3 flex gap-3">
                    <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5">
                      {`${product?.newPrice}$`}
                    </span>
                    <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5 line-through">
                      {`${product?.oldPrice}$`}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <Link to={`/product/${product?._id}`}>
                      <button className="prim_btn">Buy now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TrendingProducts;
