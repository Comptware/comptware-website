import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-start sm:items-center text-center md:text-left w-full h-fit z-[5] min-h-[400px] max-h-[700px] pt-6 md:pt-20 px-5 md:px-[5%] lg:px-[8%]">
      <h1 className="text-black bani-heading mb-5 md:mb-6 text-left sm:text-center">
      E-Wallets
      </h1>
      <p className="text-grey-text font-light bani-title mb-2 md:mb-6 text-left sm:text-center md:w-[60%] lg:w-[50%]">
      Experience the convenience of paying seamlessly on the go with your e-wallet apps.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-4 md:space-y-0 md:space-x-2">
       <div className="bg-e-wallets w-full bg-contain bg-no-repeat p-0 h-[350px] pb-[calc(100% * 3 / 4)] bg-top" />
      </div>
    </div>
  );
};

export default Banner;
