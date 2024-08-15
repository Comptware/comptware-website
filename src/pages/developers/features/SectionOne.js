import React, { useState } from "react";

// import ApiVector from "assets/icons/Developers/api-vector.svg";
// import WoocommerceVector from "assets/icons/Developers/woocommerce-vector.svg";
// import RowCard from "components/general/cards/RowCard";

import Inovation from '../../../assets/about_us/innovation.svg'
import Teamwork from '../../../assets/about_us/teamwork.svg'
import Highquality from '../../../assets/about_us/high-quality.svg'


const SectionOne = () => {

  const table = [
    { title: 'Innovation', content: 'Ornare in felis commodo aliquet orci nisl semper quam. Neque metus nisi eu sapien aenean tellus luctus risus. Turpis ultrices vulputate vulputate eu consectetur lacinia enim. Diam at rhoncus vitae egestas.', Image: Inovation },
    { title: 'Collaboration', content: 'Ornare in felis commodo aliquet orci nisl semper quam. Neque metus nisi eu sapien aenean tellus luctus risus. Turpis ultrices vulputate vulputate eu consectetur lacinia enim. Diam at rhoncus vitae egestas.', Image: Teamwork },
    { title: 'Quality', content: 'Ornare in felis commodo aliquet orci nisl semper quam. Neque metus nisi eu sapien aenean tellus luctus risus. Turpis ultrices vulputate vulputate eu consectetur lacinia enim. Diam at rhoncus vitae egestas.', Image: Highquality },

  ]


  return (
    <div className="w-full bg-white">

      <div
        className={` bg-white gap-10 w-full`}
      >
        <div className="flex justify-center pt-[130px]">
          <p className="w-[95%] md:w-[80%] slg:w-[60%] text-[24px] sm:text-[28px] lg:text-[36px] text-center"> Driven by teamwork, digital solutions & the people that use them. We are superheroes focused on the strategy, design and development of digital products for great people.</p>
        </div>


        <div className="pt-[105px] sm:pt-[150px] lg:pt-[180px]">

          <div className="bg-[#0B0C0F] gap-[140px] flex flex-col text-white pt-[150px] pb-[130px] rounded-t-[900px] items-center">
            <div className="flex flex-col justify-center items-center min-w-[90%] blg:min-w-[50%] w-full md:max-w-[50%] h-fit space-y-4 ">
              <div className="flex justify-center w-full">
                <p className="text-[12px] text-[#3388FF]">OUR VISION</p>
              </div>

              <div className="text-[24px] lg:text-[32px] elg:text-[44px] font-bold text-center w-[65%]">
                <p>Let’s figure this heading out <span className="text-[#3388FF]">later</span></p>
              </div>

              <div className="text-center w-[60%]">
                <p className="text-[#ffffff]">Our core values ensure that we produce the best results for our clients</p>
              </div>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[70px] md:gap-[30px] lg:gap-[15px] elg:gap-[70px]">

              {table.map((items, index) =>
                <div key={index} className="flex flex-col gap-4 w-[320px]">
                  <div className="border-b py-[32px] border-[#7d7e825f] border-200">
                    
                    <items.Image />
                  </div>

                  <p className="text-[24px] sm:text-[32px]">{items.title}</p>

                  <p>{items.content}</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
