import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Ratings = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-[#8EA406]" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="text-[#8EA406]" />
        ) : (
          <AiOutlineStar className="w-[19px] h-[19px] text-[#8EA406]" />
        )}
      </span>
    );
  });
  return (
    <div className="flex gap-1 items-center">
      {ratingStar} <span>Reviews</span>
    </div>
  );
};

export default Ratings;
