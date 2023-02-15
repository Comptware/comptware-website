import React from "react";

import ArrowRight from "assets/icons/Arrow/arrow-right-white.svg";

const GradientFooter = () => {
  return (
    <div className="text-white flex justify-center items-center w-full h-fit py-12 md:px-[10%] bg-blue-gradient gap-8">
      <p className="leading-normal bani-title">Ready to get started?</p>

      <a
        href="https://calendly.com/bani-inc/sales/"
        target="_blank"
        rel="noreferrer"
        className="underline bani-title flex justify-start items-center gap-2"
      >
        Schedule a call with sales <ArrowRight className="scale-[1.2]" />
      </a>
    </div>
  );
};

export default GradientFooter;
