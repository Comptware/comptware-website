import React from "react";

import Button from "components/general/button/Button";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-start sm:items-center text-center md:text-left w-full h-fit z-[5] min-h-[400px] max-h-[800px] pt-6 md:pt-20 px-5 md:px-[5%] lg:px-[8%]">
      <h1 className="text-black bani-heading mb-5 md:mb-6 text-left sm:text-center">
        DLT Payments
      </h1>
      <p className="text-grey-text font-light bani-title mb-12 md:mb-16 text-left sm:text-center md:w-[70%] lg:w-[50%]">
        Enjoy fast and secure local and cross-border transactions with our DLT
        payment service.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center w-full sm:w-[400px] md:w-[450px] h-[350px] md:h-[400px] bg-grey-dull rounded-[40px] py-8 space-y-4 md:space-y-0 md:space-x-2">
        <div
          className={`w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-center bg-crypto`}
        />
      </div>
    </div>
  );
};

export default Banner;
