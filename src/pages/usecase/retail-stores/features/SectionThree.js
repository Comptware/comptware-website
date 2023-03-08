import React from "react";

const SectionThree = () => {
  return (
    <div
      className={` px-5 md:px-[5%] lg:px-[8%] h-fit flex flex-col-reverse md:flex-row items-center w-full gap-8 transition-all duration-300 ease-in-out max-w-9xl mx-auto mt-16 mb-10 md:my-28`}
    >
      <div className="mt-[1px] flex flex-col justify-center items-start text-left !min-w-[50%] !w-full md:!max-w-[50%] h-fit space-y-4">
        <h2 className="bani-heading-alt-2 text-black basier-semibold md:pb-4 pt-0 md:capitalize">
        Multiple payment <br className="" />  options 
        </h2>

        <p className="text-grey-text font-light text-lg md:text-[24px] text-left pb-5 md:pb-10 w-full md:w-[90%] lg:w-[67%] leading-[1.75]">
        Your customers will have various options to choose from when making payments.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:min-h-[450px] h-[300px] md:h-[350px] bg-grey-dull rounded-[40px] pb-8">
        <div
          className={`w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-top bg-multiple-payment mt-[-60px] md:mt-[-160px] scale-125 md:scale-100`}
        />
      </div>
    </div>
  );
};

export default SectionThree;
