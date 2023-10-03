import React from "react";
import { Link, useParams } from "react-router-dom";
import bgImg from "../../assets/images/trending-hero.png";
import Ratings from "../ratings/Ratings";
import Reaction from "../reaction/Reaction";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Loader from "../loader/Loader";

const SingleProduct = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const { id } = useParams();

  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    fetch(
      `https://netflixbuy-server-production.up.railway.app/api/v1/product/${id}`,
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
        setProduct(data);
      });
  }, [id]);

  return (
    <>
      {product ? (
        <div>
          <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:h-[800px]">
            <div className="py-8 lg:py-0">
              <img
                className="single-product-img"
                src={`https://netflixbuy-server-production.up.railway.app/${product.productImg}`}
                alt=""
              />
            </div>
            <div className="text-[#696969] px-10">
              <span className="text-sm lg:text-lg bg-[#8ea406] text-black px-2 my-3 rounded-md">
                {product.subCategory}
              </span>
              <h1 className="text-xl lg:text-3xl pr-20">{product.name}</h1>
              <div className="flex items-center gap-3">
                <Ratings rating={product.rating} />
                <div className="h-[40px] w-[1px] bg-[#696969] mx-3"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#fff] p-2 hover:bg-[red] transition duration-300 rounded-sm group cursor-pointer">
                    <FaFacebookF className="group-hover:text-[white] transition duration-300" />
                  </div>
                  <div className="bg-[#fff] p-2 hover:bg-[red] transition duration-300 rounded-sm group cursor-pointer">
                    <AiOutlineTwitter className="group-hover:text-[white] transition duration-300" />
                  </div>
                  <div className="bg-[#fff] p-2 hover:bg-[red] transition duration-300 rounded-sm group cursor-pointer">
                    <FaPinterestP className="group-hover:text-[white] transition duration-300" />
                  </div>
                </div>
              </div>
              <div className="h-[2px] bg-[#696969] my-5"></div>
              <div className="flex justify-between items-center">
                <div className="mr-3">
                  <div className="py-3 flex gap-3">
                    <span className="text-lg lg:text-2xl text-black">
                      {`${product.newPrice}$`}
                    </span>
                    <span className="text-lg lg:text-2xl text-black line-through">
                      {`${product.oldPrice}$`}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link to={`/payment-details/${product?._id}`}>
                    <button className="px-8 py-2 rounded-md bg-[#8EA406] hover:bg-[#a1b909] hover:text-white transition duration-300 text-black">
                      Confirm
                    </button>
                  </Link>
                  <Reaction />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleProduct;
