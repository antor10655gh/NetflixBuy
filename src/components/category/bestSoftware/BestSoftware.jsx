import React from "react";
import bgImg from "../../../assets/images/wilder.jpg";
import { Link } from "react-router-dom";

const BestSofware = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const [bestSofwares, setBestSofwares] = React.useState([]);

  const category = "BestSoftware";

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
      <div className="card-container">
        {bestSofwares?.map((bestSofware) => (
          <div class="card relative flex w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative mx-4 -mt-6 h-full lg:h-96 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src={`https://netflixbuy-server-production.up.railway.app/${bestSofware?.productImg}`}
                alt="img-blur-shadow"
                layout="fill"
                className="w-full h-full"
              />
            </div>
            <div class="p-6">
              <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                {bestSofware?.name.slice(0, 25) + " ..."}
              </h5>
              <div className="card-content">
                <span className="bg-red-500 text-white px-2 my-3 rounded-md">
                  {bestSofware?.subCategory}
                </span>
                <div className="py-3 flex gap-3">
                  <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5">
                    {`${bestSofware.newPrice}$`}
                  </span>
                  <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5 line-through">
                    {`${bestSofware?.oldPrice}$`}
                  </span>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <div className="flex justify-end p-3">
                {user ? (
                  <Link to={`/product/${bestSofware?._id}`}>
                    <button className="prim_btn">Buy now</button>
                  </Link>
                ) : (
                  <Link to={`/login`}>
                    <button className="prim_btn">Buy now</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSofware;
