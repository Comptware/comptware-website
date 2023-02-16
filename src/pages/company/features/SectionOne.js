import React from "react";

const SectionOne = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-full h-fit gap-6 sm:gap-8 mb-[90px] md:mb-[150px]">
      <h2 className="text-blue helv-medium bani-heading-alt w-full md:w-[35%] text-left md:pt-2">
        Our Mission
      </h2>
      <p className="text-grey-text font-light bani-title text-left w-full md:w-[65%] leading-[1.85] ">
        We are building an alternative Payment Infrastructure for the Global
        Economy. What does this mean? We want to make it super easy for any
        business to easily and seamlessly collect alternative payments from
        their customers. Whether that is mobile money payments across
        Sub-Saharan Africa or crypto payments globally we got you covered with
        our frictionless setup process and API infrastructure resources, we are
        making it possible for businesses to scale into more markets
      </p>
    </div>
  );
};

export default SectionOne;
