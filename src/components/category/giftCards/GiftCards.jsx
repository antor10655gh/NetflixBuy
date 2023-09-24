import React from "react";
import bgImg from "../../../assets/images/wilder.jpg";
import { Link } from "react-router-dom";

const GiftCards = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center lg:gap-20 gap-10">
        {giftCards?.map((giftCard) => (
          <div className="card lg:w-[350px]">
            <div className="card-banner">
              <img
                src={`https://netflixbuy-server-production.up.railway.app/${giftCard?.productImg}`}
                alt=""
                className="w-full h-full lg:w-[350px] rounded-tl-lg rounded-tr-lg rounded-b-none rounded-br-none"
              />
            </div>
            <div className="card-content p-3">
              <h1 className="text-2xl py-2 text-white">{`${giftCard?.name}`}</h1>
              <span className="bg-red-500 text-white px-2 my-3 rounded-md">
                {`${giftCard?.subCategory}`}
              </span>
              <div className="py-3 flex gap-3">
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5">
                  {`${giftCard?.newPrice}$`}
                </span>
                <span className="text-lg border-[1px] border-gray px-2 rounded-full text-white px-5 line-through">
                  {`${giftCard?.oldPrice}$`}
                </span>
              </div>
              <div className="flex justify-end">
                <Link to={`/product/${giftCard?._id}`}>
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

export default GiftCards;
