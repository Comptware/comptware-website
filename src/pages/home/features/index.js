import React from "react";

import Banner from "./Banner";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";

const HomeList = () => {
  return (
    <div className="flex flex-col justify-start items-center h-fit w-full">
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};
export default HomeList;
