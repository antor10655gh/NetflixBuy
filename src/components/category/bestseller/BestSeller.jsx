import React from "react";
import bgImg from "../../../assets/images/wilder.jpg";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const [bestSellers, setBestSellers] = React.useState([]);

  const user = 

  const category = "BestSeller";

  React.useEffect(() => {
    fetch(`http://localhost:8000/api/v1/product/category/${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
        {bestSellers.map((bestSeller) => (
          <div className="card lg:w-[350px]">
            <div className="card-banner">
              <img
                src={`http://localhost:8000/${bestSeller.productImg}`}
                alt=""
                className="w-full h-full lg:w-[350px] h-[400px] rounded-tl-lg rounded-tr-lg rounded-b-none rounded-br-none "
              />
            </div>
            <div className="card-content p-3">
              <h1 className="text-2xl py-2 text-white">{bestSeller.name}</h1>
              <span className="bg-red-500 text-white px-2 my-3 rounded-md">
                {bestSeller.subCategory}
              </span>
              <div className="py-3 flex gap-3">
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5">
                  {`${bestSeller.newPrice}$`}
                </span>
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5 line-through">
                  {`${bestSeller.oldPrice}$`}
                </span>
              </div>
            </div>
            <div className="flex justify-end p-3">
              <Link to={`/product/${bestSeller._id}`}>
                <button className="prim_btn">Buy now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
