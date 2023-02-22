import React from "react";
import Lottie from "lottie-react";

import Button from "components/general/button/Button";
import ArrowRight from "assets/icons/Arrow/arrow-right-white.svg";
import heroAnimation from "assets/animations/home-hero-animation.json";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-10 md:space-y-0 w-full h-fit min-h-[500px] md:max-h-[700px] md:space-x-8 website-banner px-5 md:px-[5%] lg:px-[8%] relative bg-white z-20">
      <div className="flex flex-col justify-center items-start text-left md:basis-[60%] w-full h-fit z-[5] !ml-0 !mt-0">
        <h1 className="text-blue-gradient bani-heading mb-3 md:mb-5 ">
          Collect and reconcile <br /> payments easily
        </h1>
        <p className="text-grey-text font-thin bani-title mb-10 md:mb-12 ">
          Receive, confirm, and track all online and in-
          <br className="hidden md:block" />
          store payments easily and instantly anywhere.
        </p>
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
              textClass="text-lg"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:items-end md:basis-[40%] w-full md:max-h-[60vh] relative z-[5]">
        <div className="flex flex-col justify-center items-center md:items-end w-full h-full rounded-[45px] blue-grey-gradient">
          <Lottie animationData={heroAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
