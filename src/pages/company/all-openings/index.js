import React from "react";
import DashboardLayout from "components/Layout";

import Banner from "./Banner";
import SectionOne from "./SectionOne";

const DevelopersList = () => {
  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col justify-start items-center h-fit w-full">
          <div className="w-full bg-blue">
            <Banner />
          </div>

          <div className="flex flex-col justify-start items-center h-fit w-full px-5 md:px-[5%] lg:px-[8%]">
            <SectionOne />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};
export default DevelopersList;
