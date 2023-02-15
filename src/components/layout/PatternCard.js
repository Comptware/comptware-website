import React from "react";

import ArrowRight from "assets/icons/Arrow/arrow-right-white.svg";

const GradientFooter = () => {
  return (
    <div className="text-white flex justify-center items-center w-full h-fit py-5 sm:py-8 md:py-10 lg:py-12 md:px-[10%] bg-blue-gradient gap-8">
      <p className="leading-normal text-sm sm:text-base md:text-xl lg:text-2xl">Ready to get started?</p>

      <a
        href="https://calendly.com/bani-inc/sales/"
        target="_blank"
        rel="noreferrer"
        className="underline text-sm sm:text-base md:text-xl lg:text-2xl flex justify-start items-center md:gap-2"
      >
        Schedule a call with sales <ArrowRight className="scale-[0.6] sm:scale-[0.7] md:scale-[1] lg:scale-[1.2]" />
      </a>
    </div>
  );
};

export default GradientFooter;
