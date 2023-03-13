import React from "react";

const SectionTwo = () => {
  return (
    <div
      className={` px-5 md:px-[5%] lg:px-[8%] h-fit flex flex-col md:flex-row items-center w-full gap-8 transition-all duration-300 ease-in-out max-w-9xl mx-auto my-10 md:my-28`}
    >
   

      <div className="flex flex-col justify-end items-center md:items-start w-full md:min-h-[450px] h-[300px] md:h-[350px] pb-0">
        <div className="flex flex-col justify-between items-center bg-grey-dull rounded-[40px] w-[90%] h-full">
        <div
          className={`w-full bg-contain bg-no-repeat p-0 h-[35%] pb-[calc(100% * 3 / 4)] bg-right bg-flags -mt-[40px] -mr-[180px] scale-125`}
        />

        <div
          className={`w-full bg-contain bg-no-repeat p-0 h-[60%] pb-[calc(100% * 3 / 4)] bg-bottom bg-phone-in-hand`}
        />
        </div>
      
      </div>


      <div className="mt-[1px] flex flex-col justify-center items-start text-left min-w-[50%] w-full md:max-w-[50%] h-fit space-y-4 md:pl-20">
        <h2 className="bani-heading-alt-2 text-black basier-semibold text-cente md:pb-4 pt-0 md:capitalize">
        Mobile Money
        </h2>

        <p className="text-grey-text font-light text-lg md:text-[24px] text-left pb-5 md:pb-10 w-full leading-[1.75]">
        Enjoy seamless mobile money collections in Zambia, Tanzania, Ghana, Kenya, Rwanda, Cameroon, Senegal, Benin, and Ivory Coast.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
