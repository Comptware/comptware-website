import React from "react";
import Lottie from "lottie-react";

import Button from "components/general/button/Button";
import ArrowRight from "assets/icons/Arrow/arrow-right-white.svg";
import devAnimation from "assets/animations/dev-animation.json";

const SectionSix = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-fit my-12 md:my-0 py-14 md:py-28 bg-grey-dull px-5 md:px-[5%] lg:px-[8%]">
      <div className="flex flex-col md:flex-row items-center w-full h-fit gap-y-2 md:gap-x-8 shadow-card-2 rounded-[36px] relative overflow-hidden pl-7 pr-12 md:px-16 py-16">
        <div className="blue-fade-gradient absolute top-[-280px] right-[-280px] min-h-[450px] min-w-[500px] rounded-full" />
        <div className="blue-fade-gradient absolute bottom-[-280px] left-[-280px] min-h-[450px] min-w-[500px] rounded-full" />
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full h-fit space-y-4 ">
          <p className="text-black-light basier-medium text-[26px] md:text-[32px] pb-4 leading-normal text-left ">
            Engineered for developers by developers
          </p>
          <p className="text-grey-text font-light text-lg md:text-[24px] text-left pb-5 md:pb-10 ">
            With our developer-friendly APIs and a few lines of code you can
            implement Bani in the afternoon.
          </p>

          <a
            href="https://docs.getbani.com/bani-pop/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              text="Read our API documentation"
              onClick={() =>
                window?.dataLayer?.push({
                  event: "event",
                  eventProps: {
                    category: "Read our API documentation",
                    action: "Read our API documentation",
                    label:
                      "Read our API documentation - home developer section",
                    value: 3,
                  },
                })
              }
              iconRight={<ArrowRight className="scale-[0.9]" />}
              height="h-[50px] md:h-[56px]"
              textClass="text-lg"
              blackBg
            />
          </a>
        </div>

        <div className="hidden md:flex flex-col justify-center items-center w-fit pt-1 md:pt-0  mr-[-50px]">
          <Lottie
            className="scale-125 mt-[-100px]"
            animationData={devAnimation}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
