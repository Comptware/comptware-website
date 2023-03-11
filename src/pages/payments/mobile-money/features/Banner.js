import React from "react";

import Button from "components/general/button/Button";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-start sm:items-center text-center md:text-left w-full h-fit z-[5] min-h-[400px] max-h-[800px] pt-6 md:pt-20 px-5 md:px-[5%] lg:px-[8%]">
      <h1 className="text-black bani-heading mb-5 md:mb-6 text-left sm:text-center">
      Mobile Money
      </h1>
      <p className="text-grey-text font-light bani-title mb-12 md:mb-16 text-left sm:text-center md:w-[60%] lg:w-[50%]">
      Experience payment convenience and accessibility across Africa with our mobile money service.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center w-[85%] sm:w-[400px] md:w-[480px] h-[350px] md:h-[480px] space-y-4 md:space-y-0 md:space-x-2">


       <div className="flex flex-col justify-between items-center bg-grey-dull rounded-[40px] w-[90%] h-full">
        <div
          className={`w-full bg-contain bg-no-repeat p-0 h-[40%] pb-[calc(100% * 3 / 4)] bg-right bg-flags -mt-[60px] mr-[-140px] md:mr-[-180px]`}
        />

        <div
          className={`w-full bg-contain bg-no-repeat p-0 h-[70%] pb-[calc(100% * 3 / 4)] bg-bottom bg-phone-in-hand`}
        />
        </div>
      </div>
    </div>
  );
};

export default Banner;
