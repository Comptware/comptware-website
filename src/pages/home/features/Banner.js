import React from "react";
import Image from "next/image";

import BannerImage from "assets/images/banner-image.png";
import Button from "components/general/button/Button";
import ArrowRight from "assets/icons/Arrow/arrow-right-white.svg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-10 md:space-y-0 w-full h-fit min-h-[500px] max-h-[700px] md:space-x-8 website-banner px-5 md:px-[5%] lg:px-[8%] relative bg-grey-whitesmoke md:bg-white z-20">
      
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:basis-[60%] w-full h-fit z-[5] !ml-0 !mt-0">
        <h1 className="text-blue-gradient bani-heading mb-3 md:mb-5 ">
          Collect and reconcile <br /> payments easily
        </h1>
        <p className="text-grey-text font-light bani-title mb-5 md:mb-12 ">
          Receive, confirm, and track all online and in-
          <br className="hidden md:block" />
          store payments easily and instantly anywhere.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center w-fit space-y-4 md:space-y-0 md:space-x-2">
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
              iconRight={<ArrowRight className="scale-[0.8]" />}
              height="h-[48px] md:h-[50px]"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:items-end md:basis-[40%] w-full max-h-[60vh] relative z-[5]">
        <Image
          src={BannerImage}
          className="w-full h-full max-w-[500px] z-[5]"
        />
        <div className="z-[1] w-[60%] h-[70%] bg-blue-fade blur-[200px] absolute left-0 right-0 mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
