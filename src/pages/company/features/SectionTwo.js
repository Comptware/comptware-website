import React from "react";
import Link from "next/link";

import Button from "components/general/button/Button";

const SectionTwo = () => {
  return (
    <div className="flex flex-col justify-center items-start md:items-center text-left md:text-center w-full  py-10 md:py-16 px-5 md:px-[5%] lg:px-[8%] md:bg-grey-dull">
      <h2 className="text-black-light basier-medium bani-heading-alt w-full mb-5 md:mb-4">
        Be a part of our mission
      </h2>
      <p className="text-grey-text font-light bani-title mb-8 md:mb-14 leading-[1.85]">
      Be part of the rockstar and diverse team building a new payments highway connecting more trade globally.
      </p>
      <div className="flex justify-center items-center w-full">
        <Link href="company/all-openings" target="_blank" rel="noreferrer">
          <Button
            text="View available roles "
            onClick={() =>
              window?.dataLayer?.push({
                event: "event",
                eventProps: {
                  category: "View available roles ",
                  action: "View available roles ",
                  label: "View available roles  - company",
                  value: 3,
                },
              })
            }
            height="h-[50px] md:h-[56px]"
            textClass="text-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default SectionTwo;
