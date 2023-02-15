import React from "react";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";

const HomeList = () => {
  return (
    <div className="flex flex-col justify-start items-center h-fit w-full">
      <Banner />
      <div className="flex flex-col justify-start items-center h-fit w-full space-y-7 px-5 md:px-[5%] lg:px-[8%]">
        <SectionOne />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionSix />
    </div>
  );
};
export default HomeList;
