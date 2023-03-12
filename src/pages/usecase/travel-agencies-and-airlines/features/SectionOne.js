import React from "react";

const SectionOne = () => {
  return (
    <div
      className={` px-5 md:px-[5%] lg:px-[8%] h-fit flex flex-col-reverse md:flex-row items-center w-full gap-8 transition-all duration-300 ease-in-out max-w-9xl mx-auto my-14 md:mt-40 md:mb-28`}
    >
      <div className="mt-[1px] flex flex-col justify-center items-start text-left !min-w-[50%] !w-full md:!max-w-[50%] h-fit space-y-4">
        <h2 className="bani-heading-alt-2 text-black basier-semibold  md:pb-4 pt-0 md:capitalize">
        Fast and Secure  <br  />
        payments
        </h2>

        <p className="text-grey-text font-light text-lg md:text-[24px] text-left pb-5 md:pb-10 w-full md:w-[90%] lg:w-[85%] leading-[1.75]">
        Customers want to make bookings and pay without a hitch. They can make instant payments anytime via bank transfer, mobile money, and e-wallet apps.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:min-h-[450px] h-[300px] md:h-[350px] bg-grey-dull rounded-[40px] py-8">
        <div
          className={`w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-center bg-fast-payment`}
        />
      </div>
    </div>
  );
};

export default SectionOne;
