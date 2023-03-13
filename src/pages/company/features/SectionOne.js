import React from "react";

const SectionOne = () => {
  return (
    <>
   
    <div className="flex flex-col md:flex-row justify-between items-start w-full h-fit gap-6 sm:gap-8 mb-10 md:mb-[150px]">
      <h2 className="text-blue-gradient basier-medium bani-heading-alt w-full md:w-[35%] text-left md:pt-2">
        Our Mission
      </h2>
      <p className="text-grey-text font-light bani-title text-justify w-full md:w-[65%] leading-[1.85] ">
      We are building a new payments highway to connect and grow trade globally. What does this mean? We want to make it easy for businesses to quickly and seamlessly collect local customer payments.

Whether that is payments into virtual bank accounts, mobile money payments across Sub-Saharan Africa, or crypto and e-wallet payments, we got you covered with our frictionless setup process and API infrastructure resources.
<br/>
We are making it possible for businesses to scale into more markets.
      </p>

    </div>
    <hr className="w-full divider-fade md:hidden"/>
    </>
  );
};

export default SectionOne;
