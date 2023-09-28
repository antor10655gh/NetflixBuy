import React from "react";
import bgImg from "../../../assets/images/wilder.jpg";
import { Link } from "react-router-dom";

const GiftCards = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const [giftCards, setGiftCards] = React.useState([]);

  const category = "GiftCards";

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
        setGiftCards(data);
      });
  }, [category]);

  return (
    <div
      className="px-5 py-12 bg-no-repeat bg-cover bg-center"
      style={divStyle}
    >
      <div className="text-white text-center lg:text-start pb-12">
        <h1 className="text-3xl py-2">Giftcards</h1>
        <p>
          Make buying games on Steam easier, faster, and safer with Steam
          giftcards. Top up your wallet and spend the currency on anything
          available in the Steam store.
        </p>
      </div>
      <div className="card-container">
        {giftCards?.map((giftCard) => (
          <div className="card relative flex w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-full lg:h-96 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src={`https://netflixbuy-server-production.up.railway.app/${giftCard?.productImg}`}
                alt="img-blur-shadow"
                layout="fill"
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                {giftCard?.name.slice(0, 25) + " ..."}
              </h5>
              <div className="card-content">
                <span className="bg-red-500 text-white px-2 my-3 rounded-md">
                  {giftCard?.subCategory}
                </span>
                <div className="py-3 flex gap-3">
                  <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5">
                    {`${giftCard.newPrice}$`}
                  </span>
                  <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5 line-through">
                    {`${giftCard?.oldPrice}$`}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-end p-3">
                {user ? (
                  <Link to={`/product/${giftCard?._id}`}>
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

export default GiftCards;
