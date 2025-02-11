import React from "react";

import Button from "components/general/button/Button";
import ArrowRight from "assets/icons/Arrow/arrow-right-white.svg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-[131px] space-y-10 md:space-y-0 w-full h-fit min-h-[500px] md:max-h-[700px] md:space-x-8 px-5 md:px-[5%] lg:px-[8%] wallpaper relative z-20 bg-[#0B0C10]">
      <div className="flex flex-col justify-center items-start pt-[70px] text-left md:basis-[60%] w-full h-fit z-[5] !ml-0 !mt-0">
        <div className="flex flex-col justify-center items-start text-left md:basis-[75%] w-full h-fit z-[5] !ml-0 !mt-0">
          <h1 className="text-[#ffffff] bani-heading mb-3 md:mb-5 md:text-[48px] text-[36px] sm:text-center ">
            Empowering software solution tailored to your{" "}
            <span className="text-blue-gradient">business needs</span>
          </h1>
          <p className="text-[#818A98] font-thin bani-title mb-10 md:mb-12 text-[18px] md:text-[20px] sm:text-center">
          Discover a software solution crafted to fit your business perfectly. We specialize in building custom web, desktop, and mobile applications that streamline your operations and boost efficiency. Our user-friendly designs and powerful features are tailored to help your business grow and succeed in today’s digital world.
          </p>

          <div className="flex w-full sm:justify-center">
            <div className="flex flex-col w-fit space-y-4 md:space-y-0 md:space-x-2 mb-6 md:mb-0">
              <a
                href="https://calendly.com/bani-inc/sales/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text="Contact Us"
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
                  // iconRight={<ArrowRight className="scale-[0.9]" />}
                  height="h-[50px] md:h-[56px]"
                  blueBg
                  textClass="text-lg text-white stroke-blue-gradient-container"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="blue-black-fade-gradient absolute min-h-[50%] sm:min-h-[40%] top-32 w-[75%] sm:w-[45%] rounded-full" />
      </div>
    </div>
  );
};

export default Banner;
