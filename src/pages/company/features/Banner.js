import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-start md:items-center w-full h-fit z-[5] min-h-[400px] px-5 md:px-[5%] lg:px-[8%] pb-6 md:py-16 lg:py-24 ">
      <p className="text-grey-text basier-medium leading-none bani-base mb-6 md:mb-8  text-left md:text-center">
        OUR COMPANY
      </p>

      <h1 className="text-black bani-heading mb-2 sm:mb-8 md:mb-16 text-left md:text-center">
        Building a new payments highway <br className="" />
        connecting more trade globally.
      </h1>
      <div className="bg-company-banner bg-contain sm:bg-cover h-[200px] sm:h-[500px] w-full bg-no-repeat bg-left sm:bg-center" />
    </div>
  );
};

export default Banner;
