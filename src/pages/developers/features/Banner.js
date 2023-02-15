import React from "react";

import Button from "components/general/button/Button";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center md:text-left w-full md:w-[85%] lg:w-[80%] h-fit z-[5] min-h-[400px] max-h-[700px] website-banner-alt px-5 md:px-[5%] lg:px-[8%]">
      <p className="text-grey-text font-semibold leading-none bani-base mb-3 md:mb-8">
        FOR DEVELOPERS
      </p>

      <h1 className="text-black bani-heading mb-3 md:mb-6 text-center">
        Integrate Bani on your platforms
      </h1>
      <p className="text-grey-text font-light bani-title mb-5 md:mb-14 text-center">
        Welcome, Engineer! Get started integrating Bani&apos;s collections and payout
        services on your platform. Install the free plugins or start building
        something yourself with our API resource.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center w-fit space-y-4 md:space-y-0 md:space-x-2">
        <a
          href="https://docs.getbani.com/bani-pop/"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            text="Read Our API Documentation"
            onClick={() =>
              window?.dataLayer?.push({
                event: "event",
                eventProps: {
                  category: "Read Our API Documentation",
                  action: "Read Our API Documentation",
                  label: "Read Our API Documentation - developer banner",
                  value: 3,
                },
              })
            }
            height="h-[48px] md:h-[50px]"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
