import React from "react";
import { useState } from "react";
import Card from "./Card";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function supriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="flex flex-col justify-center items-center rounded-md mt-10 p-10 w-[85vw] md:w-[700px] bg-white transition-all 0.3s duration-500  hover:shadow-xl">
      <Card review={reviews[index]}></Card>

      <div className="flex mx-auto  text-4xl mb-5 text-violet-500">
        <button onClick={leftShiftHandler} className="hover:text-violet-600">
          {<BiSolidChevronLeft />}
        </button>

        <button onClick={rightShiftHandler} className="hover:text-violet-600">
          {<BiSolidChevronRight />}
        </button>
      </div>

      <div className="mb-5 ">
        <button
          onClick={supriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all 0.2s duration-200 px-10 py-2 mt-2 rounded-md font-bold text-white text-lg "
        >
          Suprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
