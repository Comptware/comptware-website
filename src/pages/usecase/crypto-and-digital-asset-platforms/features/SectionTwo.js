import React from "react";

const SectionTwo = () => {
  return (
    <div
      className={` px-5 md:px-[5%] lg:px-[8%] h-fit flex flex-col md:flex-row items-center w-full gap-8 transition-all duration-300 ease-in-out max-w-9xl mx-auto mb-10 md:my-28`}
    >
      <div className="flex flex-col justify-center items-center w-full md:min-h-[450px] h-[300px] md:h-[350px] bg-grey-dull rounded-[40px] py-8">
        <div
          className={`w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-center bg-settlement`}
        />
      </div>

      <div className="mt-[1px] flex flex-col justify-center items-start text-left min-w-[50%] w-full md:max-w-[50%] h-fit space-y-4 md:pl-20">
        <h2 className="bani-heading-alt-2 text-black basier-semibold text-cente md:pb-4 pt-0 md:capitalize">
          Instant Settlement
        </h2>

        <p className="text-grey-text font-light text-lg md:text-[24px] text-left pb-5 md:pb-10 w-full leading-[1.75]">
          Get your DLT payments settled instantly without any hitch, locally or
          internationally.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
