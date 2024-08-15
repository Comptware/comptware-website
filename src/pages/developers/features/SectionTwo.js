import React from 'react'
import { product } from 'utils/bannerGrid'
import Owner from '../../../assets/about_us/owner.png'

const SectionTwo = () => {


  return (
    <div className='w-full bg-white pt-[190px] pb-[160px'>

      <div className="xs:px-[30px] flex justify-start w-full pb-[90x] md:pb-[120px] lg:pb-[170px]">
        <div className="w-full h-[1730px] md:h-[1050px] blg:h-[1150px] slg:h-[1140px] elg:h-[914px] rounded-[20px] 2xs:rounded-[50px] gap-[60px] elg:gap-0 bg-[#3A64F8] p-[20px] 2xs:p-[40px] blg:p-[70px] flex flex-col elg:flex-row wave relative z-20">

          <div className="w-full elg:w-[40%] text-[28px] md:text-[38px] blg:text-[48px] text-white">
            <p className="z-20 relative">We’re optimized to build great products to take your business to the next level </p>
          </div>

          <div className="w-full elg:w-[60%] flex justify-center elg:justify-end z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">

              {product.map((items, index) =>
                <div key={index} className={`w-[312px] h-[342px] rounded-[16px] py-[36px] flex flex-col gap-[24px] px-[20px] ${items.bg_color}`}>
                  <items.Image />

                  <div className="gap-[10px] flex flex-col">
                    <p className={`${items.header_color} font-bold`}>{items.title}</p>
                    <p className={`${items.body_color} text-[14px]`}>{items.body}</p>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="purple-black-fade-gradient absolute min-h-[50%]  right-7 bottom-14 sm:min-h-[85%] min-w-[40%] " />

        </div>



      </div>

      <div>
        <div className="pb-[60px] pt-[80px] blg:pt-0 sm:pb-[110px] flex flex-col justify-between items-center w-full h-fit gap-y-[16px]">
          <div className="w-full text-center text-[#3388FF] text-[12px]">
            <p>GET TO KNOW US</p>
          </div>

          <p className="text-[#161717] sm:leading-[64.8px] bani-heading-alt font-bold w-full md:w-[75%] lg:w-[50%] text-[28px] sm:text-[48px] text-center p-2">
            Meet the <span className="text-[#3388FF]">top guns</span> and our team of superheroes
          </p>

          <p className="text-[#81BA98] w-[90%] sm:w-[45%] text-center">Lorem lacus eu ac malesuada ultricies ut arcu cras et. Elementum viverra tellus tincidunt. Arcu nec sed tincidunt  luctus iaculis.</p>
        </div>


        <div className='w-full flex justify-center pb-[90px] sm:pb-[112px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 slg:grid-cols-3 gap-[50px] sm:gap-[10px] md:gap-[70px] slg:gap-[8px] lg:gap-[30px] elg:gap-[70px]'>
            <div className='w-[330px] flex'>
              <div className='w-full flex flex-col items-center'>
                <div className='w-[315px]'>
                  <div className='OwnerPic' />

                </div>

                <div>
                  <p className='text-[24px]'>Charles Zikoko</p>
                </div>

                <div>
                  <p>Founder & software engineer</p>
                </div>
              </div>
            </div>

            <div className='w-[330px] flex'>
              <div className='w-full flex flex-col items-center'>
                <div className='w-[315px]'>
                  <div className='OwnerPic' />

                </div>

                <div>
                  <p className='text-[24px]'>Charles Zikoko</p>
                </div>

                <div>
                  <p>Founder & software engineer</p>
                </div>
              </div>
            </div>

            <div className='w-[330px] flex'>
              <div className='w-full flex flex-col items-center'>
                <div className='w-[315px]'>
                  <div className='OwnerPic' />

                </div>

                <div>
                  <p className='text-[24px]'>Charles Zikoko</p>
                </div>

                <div>
                  <p>Founder & software engineer</p>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>


    </div>
  )
}

export default SectionTwo