import React from "react";


const SectionThree = () => {
  return (
    <div className="w-full z-20 relative">
      <div
        className={`bg-[#F5F9FF] flex flex-col blg:flex-row gap-10 w-full px-[45px] pt-[56px] blg:pt-[150px] pb-[150px] elg:px-[90px]`}
      >

        <div className="mt-[44px] flex flex-col justify-center items-start text-left min-w-[90%] blg:min-w-[50%] w-full md:max-w-[50%] h-fit space-y-4">
          <div>
            <p className="text-[12px] text-[#3388FF]">MOBILE APP DEVELOPMENT </p>
          </div>

          <div className="text-[28px] blg:text-[36px] elg:text-[48px] font-bold ">
            <p>Go from design to <span className="text-[#3388FF]">live</span> mobile screens</p>
          </div>

          <div>
            <p className="text-[#818A98]">Transform your vision into reality with our mobile app development services. Our skilled design team creates sleek, user-friendly interfaces that bring your ideas to life, ensuring seamless user experiences and boosting engagement for both Android and IOS.</p>
          </div>

          {/* <div>
            <button className="bg-[#3388FF] text-white w-[152px] rounded-[40px] h-[42px] ">See Projects</button>
          </div> */}

        </div>

        <div className="flex items-center w-full h-[400px] lg:h-[532px] ">
          <div
            className={`w-full bg-contain bg-no-repeat p-0 h-full bg-top mobileScreens  `}
          />
        </div>


      </div>

      <div className="business-hero-section bg-[#fafafa3e] absolute min-h-[100px] bottom-0 w-full" />
    </div>
  );
};

export default SectionThree;


