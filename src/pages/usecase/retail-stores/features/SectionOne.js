import React from "react";
import Service1 from '../../../../assets/homepage_logos/Service1.svg'
import Service2 from '../../../../assets/homepage_logos/Service2.svg'
import Service3 from '../../../../assets/homepage_logos/Service3.svg'
import Service4 from '../../../../assets/homepage_logos/Service4.svg'

import Art from '../../../../assets/service/Art.svg'

const firstRow = [

  { Image: Service1, title: 'Let’s help you build faster', content: 'We provide cutting-edge solutions to accelerate your development process, ensuring your projects are delivered on time and with precision. Our team is dedicated to helping you achieve your goals efficiently. ', color: 'bg-[#3388FF]' },
  { Image: Service2, title: 'Quality assurance', content: 'Thorough testing of software to ensure it meets customer requirements and has high levels of reliability and security.', color: 'bg-[#F66F4C]' },

]

const secondRow = [

  { Image: Service3, title: 'Maintenance and support', content: 'Ongoing support and maintenance of software applications to ensure optimal performance and reliability.', color: 'bg-[#821AFF]' },
  { Image: Service4, title: 'Data management and Analytics', content: 'We provide advanced data management and analytics solutions to help you make informed decisions. Our tools and expertise ensure your data is organized, accessible, and actionable, driving your business forward.', color: 'bg-[#05407A]' }

]


const SectionOne = () => {
  return (
    <div className="w-full">

      <div
        className={`hidden blg:flex bg-white gap-10 w-full px-[45px] elg:px-[90px]`}
      >

        <div className="flex mt-[56px] blg:mt-[196px] mb-[250px] w-full">

          <div className='flex flex-col text-[12px] p-[5px] sm:text-[16px] gap-[56px] items-center justify-center'>

            {firstRow.map((items, index) =>
              <div key={index} className="w-[100%] elg:w-[85%] flex flex-col items-center gap-[12px]">

                <div className={`h-[40px] w-[40px] rounded-[30px] ${items.color} flex justify-center items-center`}>
                  <items.Image />
                </div>

                <div className="flex justify-center">
                  <p className="font-semibold text-[18px] blg:text-[16px] elg:text-[18px] text-center">{items.title}</p>
                </div>

                <div className="flex justify-center text-center">
                  <p className="text-[12px] elg:text-[14px]">{items.content}</p>
                </div>
              </div>)}

          </div>


          <div className='flex flex-col justify-between bg-black w-full h-[470px] elg:h-[606px] text-white relative z-20'>
            <div className="px-[32px] py-[48px] flex flex-col gap-[24px]">
              <p className="font-bold text-[24px] slg:text-[32px] elg:text-[40px]">We offer a wide array of services</p>

              <div className="flex justify-center top-5 elg:top-10 relative z-20">
                <Art />

              </div>

            </div>

            <div className="blue-purple-fade-gradient absolute min-h-[50%] sm:min-h-[20%] top-[165px] w-[75%] sm:w-[100%] rounded-full" />

            <div className="brown-black-fade-gradient absolute min-h-[50%] sm:min-h-[25%] bottom-3 w-[75%] sm:w-[100%] rounded-full" />
          </div>


          <div className='flex flex-col text-[12px] sm:text-[16px] p-[5px] gap-[56px] items-center justify-center'>

            {secondRow.map((items, index) =>
              <div key={index} className="w-[100%] elg:w-[85%] flex flex-col items-center gap-[12px]">

                <div className={`h-[40px] w-[40px] rounded-[30px] ${items.color} flex justify-center items-center`}>
                  <items.Image />
                </div>

                <div className="flex justify-center">
                  <p className="font-semibold text-[16px] elg:text-[18px] text-center">{items.title}</p>
                </div>

                <div className="flex justify-center text-center">
                  <p className="text-[12px] elg:text-[14px]">{items.content}</p>
                </div>
              </div>)}

          </div>


        </div>

      </div>


      {/* mobile view */}
      <div className="bg-white  blg:hidden text-black flex flex-col gap-12 w-full pt-[96px] pb-[150px] items-center relative z-20">

        <div className='flex flex-col justify-between items-center bg-black w-full 3xs:w-[343px] h-[470px] text-white'>
          <div className="px-[32px] py-[48px] relative z-20 flex flex-col gap-[24px]">
            <p className="font-bold text-[32px]">We offer a wide array of services</p>

            <div className="flex justify-center">
              <Art />
            </div>
          </div>


          <div className="blue-purple-fade-gradient absolute h-[140px] top-56 min-w-[95%] 3xs:min-w-[75%] 2xs:min-w-[60%] xs:min-w-[45%]  rounded-full" />

          <div className="brown-black-fade-gradient absolute h-[70px] top-[500px] min-w-[95%] 3xs:min-w-[75%] 2xs:min-w-[60%] xs:min-w-[45%]  rounded-full" />
        </div>


        <div className="flex justify-center">
          <div className='flex flex-col w-[75%] 2xs:w-[45%] text-[12px] sm:text-[16px] gap-[56px] items-center'>

            {firstRow.map((items, index) =>
              <div key={index} className="w-[100%] elg:w-[85%] flex flex-col items-start 2xs:items-center gap-[12px]">

                <div className={`h-[40px] w-[40px] rounded-[30px] ${items.color} flex justify-center items-center`}>
                  <items.Image />
                </div>

                <div className="flex justify-center">
                  <p className="font-semibold text-[18px] text-center">{items.title}</p>
                </div>

                <div className="flex justify-center 2xs:text-center">
                  <p className="text-[14px]">{items.content}</p>
                </div>
              </div>)}

          </div>
        </div>


        <div className="flex justify-center">
          <div className='flex flex-col w-[75%] 2xs:w-[45%] text-[12px] sm:text-[16px] gap-[56px] items-start 2xs:items-center'>

            {secondRow.map((items, index) =>
              <div key={index} className="w-[100%] elg:w-[85%] flex flex-col items-start 2xs:items-center gap-[12px]">

                <div className={`h-[40px] w-[40px] rounded-[30px] ${items.color} flex justify-center items-center`}>
                  <items.Image />
                </div>

                <div className="flex justify-center">
                  <p className="font-semibold text-[18px] text-center">{items.title}</p>
                </div>

                <div className="flex justify-center 2xs:text-center">
                  <p className="text-[14px]">{items.content}</p>
                </div>
              </div>)}

          </div>
        </div>


      </div>

    </div>
  );
};

export default SectionOne;
