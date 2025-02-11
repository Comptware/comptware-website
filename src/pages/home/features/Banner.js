import React from "react";
import Lottie from "lottie-react";
import Button from "components/general/button/Button";
import BH from "public/logos/BH.svg";
import FC from "public/logos/FC.svg";
import Baloosh from "public/logos/balosh-logo.svg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-[131px] wallpaper space-y-10 md:space-y-0 w-full h-fit min-h-[500px] md:max-h-[900px] md:space-x-8 px-5 md:px-[5%] lg:px-[8%] relative z-20 bg-[#0B0C10]">
      <div className="flex flex-col justify-center items-start mt-[70px] text-left md:basis-[60%] w-full h-fit z-[5] !ml-0 ">
        <h1 className="text-[#ffffff] bani-heading mb-3 md:mb-5 text-[32px] 3xs:text-[36px] md:text-[48px] sm:text-center ">
          Empowering your business with cutting-edge{" "}
          <span className="text-blue-gradient">software</span> solution
        </h1>
        <p className="text-[#818A98] font-thin bani-title mb-10 md:mb-12 text-[16px] 3xs:text-[18px] md:text-[20px] sm:text-center">
          Discover a software solution crafted to fit your business perfectly.
          We specialize in building custom web, desktop, and mobile applications
          that streamline your operations and boost efficiency. Our
          user-friendly designs and powerful features are tailored to help your
          business grow and succeed in today’s digital world.
        </p>

        <div className="flex w-full sm:justify-center">
          <div className="flex flex-col w-fit space-y-4 md:space-y-0 md:space-x-2 mb-6 md:mb-0">
            <a
              href="https://calendly.com/bani-inc/sales/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Contact us"
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
                height="h-[54px]"
                textClass="text-lg"
              ></Button>
            </a>
          </div>
        </div>

        <div className="w-full pt-[40px] flex flex-col gap-[15px]">
          <p className="text-[#2F426A] text-[12px] text-center">
            WE’VE WORKED WITH SOME OF YOUR FAVORITE BRANDS
          </p>

          <div className="hidden sm:flex gap-[40px]">
            <BH />
            <FC />
            <Baloosh />
          </div>


          <div className="flex sm:hidden gap-[40px] justify-center ">
          <BH />
            <FC />
            <Baloosh />
          </div>
        </div>

        <div className="blue-black-fade-gradient absolute min-h-[50%] sm:min-h-[40%] top-32 w-[75%] sm:w-[60%] rounded-full" />
      </div>
    </div>
  );
};

export default Banner;
