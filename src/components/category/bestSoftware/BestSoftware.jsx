import React from "react";
import bgImg from "../../../assets/images/wilder.jpg";
import { Link } from "react-router-dom";

const BestSofware = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const [bestSofwares, setBestSofwares] = React.useState([]);

  const category = "BestSoftware";

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
        setBestSofwares(data);
      });
  }, [category]);

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
                src={`http://localhost:8000/${bestSofware.productImg}`}
                alt=""
                className="w-full h-full lg:w-[350px] rounded-tl-lg rounded-tr-lg rounded-b-none rounded-br-none"
              />
            </div>
            <div className="card-content p-3">
              <h1 className="text-2xl py-2 text-white">
                {`${bestSofware.name}`}
              </h1>
              <span className="bg-red-500 text-white px-2 my-3 rounded-md">
                {`${bestSofware.subCategory}`}
              </span>
              <div className="py-3 flex gap-3">
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5">
                  {`${bestSofware.newPrice}$`}
                </span>
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5 line-through">
                  {`${bestSofware.oldPrice}$`}
                </span>
              </div>
              <div className="flex justify-end">
                <Link to={`/product/${bestSofware._id}`}>
                  <button className="prim_btn">Buy now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSofware;
