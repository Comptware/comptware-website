import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-start sm:items-center text-center md:text-left w-full h-fit z-[5] min-h-[360px] sm:min-h-[400px] max-h-[700px] px-5 md:px-[5%] lg:px-[8%]">
      <p className="basier-medium leading-none bani-base mb-20 sm:mb-8">
        <span className="text-white opacity-[0.45]">COMPANY </span>
        <span className="text-white">/ ALL OPENINGS</span>
      </p>

      <h1 className="text-white bani-heading mb-3 md:mb-6 text-center">
        Job openings at Bani
      </h1>
      <p className="text-white opacity-80 font-light bani-title mb-5 md:mb-14 text-center">
        Available openings at Bani
      </p>
    </div>
  );
};

export default Banner;
