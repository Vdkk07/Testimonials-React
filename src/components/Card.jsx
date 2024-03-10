import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-10 mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140x] z-20"
          src={review.image}
          alt=""
        />
      </div>

      <div className="aspect-square rounded-full w-[140px] h-[140x] bg-violet-500 absolute top-[-7.2rem] left-[0.65rem]   "></div>

      <div className="text-center mt-7">
        <p className="text-2xl font-bold capitalize tracking-wider">
          {review.name}
        </p>
        <p className="text-violet-300 uppercase">{review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-7 ">
        <FaQuoteLeft></FaQuoteLeft>
      </div>

      <div className="text-center text-slate-500 mt-5 mb-5">{review.text}</div>

      <div className="text-violet-400 mx-auto mb-10">
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  );
};

export default Card;
