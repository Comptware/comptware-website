import React from "react";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const DevelopersList = () => {
  return (
    <div className="flex flex-col justify-start items-center h-fit w-full">
      <Banner />
      <div className="flex flex-col justify-start items-center h-fit w-full px-5 md:px-[5%] lg:px-[8%]">
        <SectionOne />
       
      </div>
      <SectionTwo/>
    </div>
  );
};
export default DevelopersList;
