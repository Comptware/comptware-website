import React from "react";

const SectionFour = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-fit space-y-8 md:space-x-8 md:py-4">
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full h-fit ">
        <p className="text-blue font-normal leading-none bani-base mb-4">
          Get access in less than 10 minutes
        </p>
        <h1 className="text-black leading-normal bani-title mb-4">E-Wallets</h1>
        <p className="text-grey-text font-light bani-lg mb-8">
          Instantly accept or settle payments from e-wallets and fintech apps
        </p>
      </div>

      <div className="flex flex-col justify-center items-center md:items-start w-full">
        <div className="width-full h-fit"></div>
      </div>
    </div>
  );
};

export default SectionFour;
