import React from "react";

const SectionTwo = () => {
  return (
    <div className="w-full relative z-20">
      <div
        className={`bg-[#FAFAFA] flex flex-col-reverse blg:flex-row gap-10 w-full px-[45px] pt-[56px] blg:pt-[150px] pb-[118px] elg:px-[90px]`}
      >
        <div className="flex justify-center items-center w-full md:min-h-[530px] gap-5 slg:h-[200px] p-5 md:h-[350px] bg-[#3A64F8] pb-8">
          <div
            className={`w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-center phone-hero-section-bg`}
          />
          <div
            className={`w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-center phone-hero-section-bg `}
          />

        </div>

        <div className="blg:mt-[44px] flex flex-col justify-center items-start text-left min-w-[90%] blg:min-w-[50%] w-full md:max-w-[50%] h-fit space-y-4 ">
          <div>
            <p className="text-[12px] text-[#3388FF]">PRODUCT DESIGN</p>
          </div>

          <div className="text-[28px] blg:text-[36px] elg:text-[48px] font-bold ">
            <p>Simpler interfaces for your <span className="text-[#3388FF]">business</span> vision</p>
          </div>

          <div>
            <p className="text-[#818A98]">Our experienced design team will craft intuitive, visually appealing interfaces to bring your ideas to life, driving user engagement and business growth."</p>
          </div>

          <div>
            <button className="bg-[#3388FF] text-white w-[152px] rounded-[40px] h-[42px] ">See Projects</button>
          </div>

        </div>



      </div>

      <div className="business-hero-section bg-[#fafafa3e] absolute min-h-[100px] bottom-0 w-full" />
    </div>

  );
};

export default SectionTwo;
