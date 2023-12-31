import React from "react";
import bgImg from "../../../assets/images/wilder.jpg";
import { Link } from "react-router-dom";

const SummerPlay = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const [summerPlays, setSummerPlays] = React.useState([]);

  const category = "Itunes";

  React.useEffect(() => {
    fetch(`https://gcardapi.gcardbuy.com/api/v1/product/category/${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSummerPlays(data);
      });
  }, [category]);

  return (
    <>
      {summerPlays && summerPlays.length > 0 ? (
        <div className="px-5 py-12">
          <div className="text-black text-center lg:text-start pb-12">
            <h1 className="text-3xl py-2">Summer Playground</h1>
            <p>
              Tons of hot deals on video games, software, various gift cards,
              and more!
            </p>
          </div>
          <div className="card-container">
            {summerPlays?.map((summerPlay) => (
              <div className="card relative flex w-full lg:w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-full lg:h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-black shadow-lg shadow-blue-gray-500/40">
                  <img
                    src={`https://gcardapi.gcardbuy.com/multerFile${summerPlay?.productImg}`}
                    alt="img-blur-shadow"
                    layout="fill"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-black antialiased">
                    {summerPlay?.name.slice(0, 25) + " ..."}
                  </h5>
                  <div className="card-content">
                    <span className="bg-[#8ea406] text-black px-2 my-3 rounded-md">
                      {summerPlay?.subCategory}
                    </span>
                    <div className="py-3 flex gap-3">
                      <span className="text-lg border-[1px] border-gray px-2 rounded-full text-black px-5">
                        {`${summerPlay.newPrice}$`}
                      </span>
                      <span className="text-lg border-[1px] border-gray px-2 rounded-full text-black px-5 line-through">
                        {`${summerPlay?.oldPrice}$`}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-end p-3">
                    <Link to={`product/${summerPlay?._id}`}>
                      <button className="prim_btn">Buy now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-5 py-12">
          <div className="text-black text-center lg:text-start pb-12">
            <h1 className="text-3xl py-2">Summer Playground</h1>
            <p>
              Tons of hot deals on video games, software, various gift cards,
              and more!
            </p>
          </div>
          <div className="card-container">
            <div>Product is not available.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SummerPlay;
