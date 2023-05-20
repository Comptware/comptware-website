import React from "react";

const SectionFour = () => {
  return (
    <div className="relative z-20 w-full">
    <div
      className={`bg-[#FAFAFA] flex flex-col-reverse blg:flex-row gap-[56px] blg:gap-10 w-full px-[45px] pt-[56px] blg:pt-[150px] pb-[118px] elg:px-[90px]`}
    >
   

   <div className="flex items-center w-full h-[400px] lg:h-[532px] ">
          <div
            className={`w-full bg-contain bg-no-repeat p-0 h-full bg-top Laptop  `}
          />
        </div>


      <div className="mt-[44px] flex flex-col justify-center items-start text-left min-w-[90%] blg:min-w-[50%] w-full md:max-w-[50%] h-fit space-y-4">
        <div>
          <p className="text-[12px] text-[#3388FF]">WEB DEVELOPMENT</p>
        </div>

        <div className="text-[28px] blg:text-[32px] elg:text-[48px] font-bold ">
          <p>Build dynamic websites to <span className="text-[#3388FF]">grow</span> your business</p>
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

export default SectionFour;
