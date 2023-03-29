import React from "react";

import Button from "components/general/button/Button";
import ArrowRight from "assets/icons/Arrow/arrow-right-white.svg";

const Banner = () => {
  return (
    <div className="w-full h-fit bg-blue-gradient pt-[95px] -mt-[95px] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-10 md:space-y-0 w-full !h-full md:h-fit md:min-h-[700px] md:max-h-[800px] md:space-x-8 usecase-banner px-5 md:px-[5%] lg:px-[8%] relative z-20 usecase-hero-section-bg -mt-[95px] pb-[60px] md:pt-[95px] md:pb-0">
        <div className="flex flex-col justify-center items-start text-left md:basis-[90%] w-full h-fit z-[5] !ml-0 !mt-0">
          <div className="rounded-[100px] bg-grey-15 px-5 py-[3px] mb-4 md:mb-5">
            <h1 className="text-white text-sm md:text-xl leading-[27px] uppercase">
              BANI FOR DIGITAL ASSETS PLATFORMS
            </h1>
          </div>

          <h1 className="text-grey-whitesmoke bani-heading mb-10 md:mb-14 ">
            Providing you with seamless digital assets{" "}
            <br className="hidden md:block" />
            transactions for customers&apos; satisfaction
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center w-fit space-y-4 md:space-y-0 md:space-x-2 mb-6 md:mb-0">
            <a
              href="https://calendly.com/bani-inc/sales/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Talk To Our Team"
                onClick={() =>
                  window?.dataLayer?.push({
                    event: "event",
                    eventProps: {
                      category: "Talk To Our Team",
                      action: "Talk To Our Team",
                      label: "Talk To Our Team - home banner",
                      value: 1,
                    },
                  })
                }
                iconRight={<ArrowRight className="scale-[0.9]" />}
                height="h-[50px] md:h-[56px]"
                whiteBg
                textClass="text-lg text-blue stroke-blue-gradient-container"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
