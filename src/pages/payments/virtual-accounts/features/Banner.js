import React from "react";
import Lottie from "lottie-react";


const collargigs = [

  { header: 'COLLARGIG', bg_color: 'bg-[#FFF6D7]', title: 'WEB DESIGN, APP DESIGN, DEVELOPMENT', body: 'Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus id rutrum est enim odio rutrum ultrices accumsan. Adipiscing in fringilla pharetra aliquet sed. Euismod sed ', text_color: 'text-[#908C7F]', title_color: 'text-[#997700]' },
  { header: 'COLLARGIG', bg_color: 'bg-[#3872B3]', title: 'WEB DESIGN, APP DESIGN, DEVELOPMENT', body: 'Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus id rutrum est enim odio rutrum ultrices accumsan. Adipiscing in fringilla pharetra aliquet sed. Euismod sed ', text_color: 'text-[#E4E5E7]', title_color: 'text-[#E4E5E7]' },
  { header: 'COLLARGIG', bg_color: 'bg-[#3872B3]', title: 'WEB DESIGN, APP DESIGN, DEVELOPMENT', body: 'Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus id rutrum est enim odio rutrum ultrices accumsan. Adipiscing in fringilla pharetra aliquet sed. Euismod sed ', text_color: 'text-[#E4E5E7]', title_color: 'text-[#E4E5E7]' },
  { header: 'COLLARGIG', bg_color: 'bg-[#FFF6D7]', title: 'WEB DESIGN, APP DESIGN, DEVELOPMENT', body: 'Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus id rutrum est enim odio rutrum ultrices accumsan. Adipiscing in fringilla pharetra aliquet sed. Euismod sed ', text_color: 'text-[#908C7F]', title_color: 'text-[#997700]' },
  { header: 'COLLARGIG', bg_color: 'bg-[#FFF6D7]', title: 'WEB DESIGN, APP DESIGN, DEVELOPMENT', body: 'Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus id rutrum est enim odio rutrum ultrices accumsan. Adipiscing in fringilla pharetra aliquet sed. Euismod sed ', text_color: 'text-[#908C7F]', title_color: 'text-[#997700]' },
  { header: 'COLLARGIG', bg_color: 'bg-[#3872B3]', title: 'WEB DESIGN, APP DESIGN, DEVELOPMENT', body: 'Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus id rutrum est enim odio rutrum ultrices accumsan. Adipiscing in fringilla pharetra aliquet sed. Euismod sed ', text_color: 'text-[#E4E5E7]', title_color: 'text-[#EFF4FA]' },

]


const Banner = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center items-center py-[131px] wallpaper space-y-10 md:space-y-0 w-full h-[775px] 2xs:h-[700px] md:space-x-8 px-5 md:px-[5%] lg:px-[8%] relative z-20 bg-[#0B0C10]">
        <div className="flex flex-col justify-center sm:items-center text-left md:basis-[75%] w-full h-fit z-[5] !ml-0 !mt-0">
          <h1 className="text-[#ffffff] bani-heading w-[95%] lg:w-[85%] mb-3 md:mb-5 text-[26px] 2xs:text-[38px] blg:text-[42px] slg:text-[48px] sm:text-center ">
            Our approach to building creates <span className="text-blue-gradient">impactful</span> and engaging solutions.
          </h1>
          <p className="text-[#818A98] w-[95%] lg:w-[75%] font-thin bani-title mb-10 md:mb-12 text-[16px] 2xs:text-[18px] md:text-[20px] sm:text-center">
            we’ve worked wwith sit justo in sagittis ipsum. Fringilla tortor luctus nunc magna id. Gravida ultricies felis \
          </p>


          <div className="blue-black-fade-gradient absolute min-h-[50%] sm:min-h-[40%] top-32 w-[75%] sm:w-[45%] rounded-full" />

        </div>

      </div>

      <div className="flex bg-[#FFFFFF] flex-col justify-start items-center h-fit w-full space-y-7 sticky-boundary sm:mb-[0px] 4xs:px-5 2xs:px-10 lg:px-[40px]">
        <div className="flex flex-col  justify-between items-center w-full h-fit sm:mb-[0px]">

          <div>


            <div className="grid grid-cols-1 blg:grid-cols-2 gap-[32px] w-full pt-[103px] relative z-20 bottom-48 blg:bottom-64">

              {collargigs.map((items, index) =>
                <div key={index} className={`w-full flex flex-col gap-[24px] 3xs:gap-[40px] xs:gap-[30px] blg:gap-[36px] sm:gap-[40px] lg:gap-[32px] elg:gap-10 ${items.bg_color} h-[490px] xs:h-[650px] lg:h-[696px] p-[20px] xs:p-[50px] md:p-[30px] lg:p-[50px]`}>
                  <p className={`font-semibold text-[14px] ${items.title_color} xs:text-[16px]`}>{items.header}</p>

                  <div className="hidden xs:flex blg:hidden slg:flex gap-[12px]">
                    <div
                      className={`w-full bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phones-homepage-hero-sections `}
                    />
                    <div
                      className={`w-full bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phone-hero-section-bg-home `}
                    />
                    <div
                      className={`w-full bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phones-homepage-hero-sections `}
                    />
                  </div>


                  <div className="flex xs:hidden blg:flex slg:hidden gap-[12px]">
                    <div
                      className={`w-full bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phones-homepage-hero-sections-xs `}
                    />
                    <div
                      className={`w-full bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phone-hero-section-bg-home-xs `}
                    />
                    <div
                      className={`w-full bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phones-homepage-hero-sections-xs `}
                    />
                  </div>


                  <div className="flex flex-col gap-[8px]">
                    <p className={`${items.title_color} text-[14px] xs:text-[16px] font-semibold`}>{items.title}</p>

                    <p className={`text-[12px] xs:text-[14px] ${items.text_color}`}>{items.body}</p>
                  </div>

                </div>
              )}



            </div>

          </div>




          <div className="hidden slg:flex flex-col justify-start items-start pb-[190px] gap-[64px] h-fit w-full space-y-7 sticky-boundary sm:mb-[0px]">
            <div className="flex flex-col">
              <p className="text-[12px] text-[#3388FF]"> MORE WORK</p>

              <p className="text-[48px] font-bold">Other <span className="text-[#3388FF]">Projects</span></p>

            </div>

            <div className="w-full flex gap-[32px]">
              <div className="flex flex-col justify-center items-center w-[60%] min-h-[700px] h-[300px] md:h-[350px] bg-[#FFF6D7] pb-8">

              </div>

              <div className="flex flex-col w-[40%] justify-between">
                <div className="w-full  h-[334px] bg-[#3872B3]">

                </div>

                <div className="w-full bg-[#E7E6F9] h-[334px]">

                </div>
              </div>
            </div>
          </div>


          <div className="w-full pb-[120px] gap-[64px] flex flex-col slg:hidden ">
            <div className="flex flex-col">
              <p className="text-[12px] text-[#3388FF]"> More Work</p>

              <p className="text-[32px] sm:text-[48px] font-bold">Other <span className="text-[#3388FF]">Projects</span></p>

            </div>

            <div className=" w-full items-center justify-items-center grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="w-[100%] 3xs:w-[335px] h-[320px] bg-[#FFF6D7]">

              </div>

              <div className="w-[100%] 3xs:w-[335px] h-[320px] bg-[#3872B3]">

              </div>

              <div className="w-[100%] 3xs:w-[335px] bg-[#E7E6F9] h-[320px]">

              </div>

            </div>

          </div>


        </div>
      </div>





    </div>
  );
};

export default Banner;
