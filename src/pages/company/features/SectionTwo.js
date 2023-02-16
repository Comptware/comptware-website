import React from "react";
import Link from "next/link";

import Button from "components/general/button/Button";

const SectionTwo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-full h-fit gap-8 mb-[150px] md:bg-grey-dull ">
      <div className=" w-full md:w-[35%] text-left ">
        <div className="bg-mission-image bg-cover h-[300px] sm:h-[500px] w-full bg-no-repeat bg-left sm:bg-center" />
      </div>
      <div className="flex flex-col justify-center items-start text-left w-full md:w-[65%] h-full px-5 md:px-[5%] lg:px-[8%]">
        <h2 className="text-black-light helv-medium bani-heading-alt w-full text-left mb-5 md:mb-4">
          Be a part of our mission
        </h2>
        <p className="text-grey-text font-light bani-title mb-8 md:mb-14 text-left leading-[1.85]">
          Come be part of the rockstar and diverse team of people building a new
          payments highway connecting more trade globally.
        </p>
        <div className="flex justify-center md:justify-between items-center w-full">
          <Link href="company/all-openings" target="_blank" rel="noreferrer">
            <Button
              text="View avaialable roles "
              onClick={() =>
                window?.dataLayer?.push({
                  event: "event",
                  eventProps: {
                    category: "View avaialable roles ",
                    action: "View avaialable roles ",
                    label: "View avaialable roles  - company",
                    value: 3,
                  },
                })
              }
              height="h-[48px] md:h-[50px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
