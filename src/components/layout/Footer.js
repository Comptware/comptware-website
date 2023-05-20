import React, { useEffect, useState } from "react";
import Link from "next/link";

import LogoWhite from "assets/logos/logo-white.svg";
import TwitterIcon from "assets/icons/Socials/twitter.svg";
import LinkedinIcon from "assets/icons/Socials/linkedin.svg";
import InstagramIcon from "assets/icons/Socials/instagram.svg";
import FacebookIcon from "assets/icons/Socials/facebook.svg";

import Mail from '../../assets/homepage_logos/Mail.svg'
import Instagram from '../../assets/homepage_logos/Instagram.svg'
import Twitter from '../../assets/homepage_logos/Twitter.svg'
import LinkedIn from '../../assets/homepage_logos/LinkedIn.svg'


const Footer = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window?.innerWidth);
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerLinks = [
    {
      title: "Company",
      links: [
        { title: "What drives us", link: "/company" },
        { title: "Work with us", link: "/company/all-openings" },
        width < 640 && { title: "Newsroom", url: "https://blog.bani.africa" },
        width < 640 && {
          title: "Say hello",
          url: "https://calendly.com/bani-inc/sales/",
        },
      ],
    },

    {
      title: ".",
      links: [
        { title: "Newsroom", url: "https://blog.bani.africa" },
        { title: "Say hello", url: "https://calendly.com/bani-inc/sales/" },
      ],
    },

    {
      title: "Legal",
      links: [
        { title: "AML", link: "/legal/aml-policy" },
        { title: "Privacy Policy", link: "/legal/privacy-policy" },
        { title: "Terms & Conditions", link: "/legal/terms-and-conditions" },
      ],
    },
    {
      title: "Follow us",
      socials: [
        {
          icon: <FacebookIcon className="scale-[0.9]" />,
          url: "https://facebook.com/baniafrica",
        },
        {
          icon: <InstagramIcon className="scale-[0.9]" />,
          url: "https://instagram.com/baniafrica",
        },
        {
          icon: <TwitterIcon className="scale-[0.9]" />,
          url: "https://twitter.com/baniafrica",
        },
        {
          icon: <LinkedinIcon className="scale-[0.9]" />,
          url: "https://www.linkedin.com/company/baniafrica",
        },
      ],
    },
  ];
  return (
    <footer className="website-footer flex flex-col justify-center items-center w-full py-8 md:py-12 px-5 2xs:px-10 blg:px-7 lg:px-10 bg-[#0B0C0F] space-y-8 md:space-y-12 relative z-20 overflow-hidden ">
      <div className="relative z-20">
        <div className="flex flex-row justify-between items-center w-full ">
          <div className=" flex flex-col justify-start items-start mx-auto w-full space-y-10 md:space-y-0 ">

            <div className="w-full h-full justify-center">
              <p className='text-[50px] sm:text-[90px] lg:text-[130px] font-bold flex justify-center text-[#3388FF]'>Contact us</p>
            </div>


            <div className="grid grid-cols-1 blg:grid-cols-2 gap-8 justify-between items-start w-full pt-[60px] transition-all duration-150 ease-in-out text-white">
              <div>
                <div className='blg:h-[100vh] flex justify-between flex-col'>
                  <div className='flex justify-center'>
                    <p className=' text-[20px] md:text-[28px] lg:text-[36px] w-[95%] sm:w-[80%] blg:w-full text-[#393D46] text-center blg:text-start font-semibold'>Let’s make something amazing together. Start by <span className='text-[#F1F2F4]'>Saying hi</span></p>
                  </div>

                  <div className='flex-col gap-[40px] hidden blg:flex'>
                    <div className='flex gap-[24px] text-[#BEC3D0]'>
                      <p>SERVICES</p>
                      <p>PRODUCT</p>
                      <p>ABOUT US</p>
                      <p>BLOG</p>
                    </div>

                    <div className='flex gap-[24px]'>
                      <div className='h-[30px] w-[30px] flex justify-center items-center bg-[#F3F4F6] rounded-[30px]'>
                        <Mail />
                      </div>

                      <div className='h-[30px] w-[30px] flex justify-center items-center bg-[#F3F4F6] rounded-[30px]'>
                        <Twitter />
                      </div>

                      <div className='h-[30px] w-[30px] flex justify-center items-center bg-[#F3F4F6] rounded-[30px]'>
                        <LinkedIn />
                      </div>

                      <div className='h-[30px] w-[30px] flex justify-center items-center bg-[#F3F4F6] rounded-[30px]'>
                        <Instagram />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full flex justify-center slg:h-[750px]'>
                <div className='p-[20px] 2xs:p-[40px] py-10 w-[100%] sm:w-[75%] blg:w-[100%] elg:w-[85%] rounded-[50px] flex flex-col justify-center items-center gap-[44px] bg-[#16181D]'>
                  <div className='flex flex-col gap-[36px] w-full'>


                    <div className='flex flex-col gap-[20px] '>
                      <p className='font-bold text-[18px] slg:text-[24px]'>What's your name </p>
                      <input className='h-[50px] 2xs:h-[50px] blg:h-[50px] slg:h-[55px] text-black rounded-[50px] p-[12px] bg-blue-50 border-b-[#70707074] border' placeholder='Joe manuel' />
                    </div>

                    <div className='flex flex-col gap-[20px] '>
                      <p className='font-bold text-[18px] slg:text-[24px]'>How can we reach you? </p>
                      <input className='h-[50px] 2xs:h-[50px] blg:h-[50px] slg:h-[55px] text-black rounded-[50px] bg-blue-50 p-[12px] border-b-[#70707074] border' placeholder='Joe manuel' />
                    </div>

                    <div className='flex flex-col gap-[20px] '>
                      <p className='font-bold text-[18px] slg:text-[24px]'>Want to tell us what you’re building? (optional) </p>
                      <textarea className='h-[90px] 2xs:h-[150px] blg:h-[100px] slg:h-[150px] text-black rounded-[20px] bg-blue-50 p-[12px] border-b-[#70707074] border' placeholder='Joe manuel' />
                    </div>

                    <div className='flex justify-center'>
                      <button className='h-[50px] slg:h-[64px] w-[90%] rounded-[60px] bg-[#3388FF]'>Send Request</button>
                    </div>

                  </div>
                </div>
              </div>


              <div className='flex-col gap-[40px] flex blg:hidden items-center pt-[70px]'>
                <div className='flex gap-[24px] text-[12px] text-[#BEC3D0]'>
                  <p>SERVICES</p>
                  <p>PRODUCT</p>
                  <p>ABOUT US</p>
                  <p>BLOG</p>
                </div>

                <div className='flex gap-[24px]'>
                  <div className='h-[30px] w-[30px] flex justify-center items-center bg-[#F3F4F6] rounded-[30px]'>
                    <Mail />
                  </div>

                  <div className='h-[30px] w-[30px] flex justify-center items-center bg-[#F3F4F6] rounded-[30px]'>
                    <Twitter />
                  </div>

                  <div className='h-[30px] w-[30px] flex justify-center items-center bg-[#F3F4F6] rounded-[30px]'>
                    <LinkedIn />
                  </div>

                  <div className='h-[30px] w-[30px] flex justify-center items-center bg-[#F3F4F6] rounded-[30px]'>
                    <Instagram />
                  </div>
                </div>
              </div>


            </div>


          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full pt-4 md:pt-10">
          <p className="w-full h-full text-center text-grey-white font-light text-sm md:text-base md:px-6 opacity-[0.9] leading-loose ">
            &copy; All rights reserved. 2023, Comptware Inc.

          </p>
        </div>

      </div>


      <div className="opacity-50 w-full h-full justify-center absolute min-h-[100px] sm:bottom-0 ">
        <div className="flex text-[#13151A] text-[50px] sm:text-[90px] lg:text-[130px] ">
          <p>Contactus</p>
          <p>Contactus</p>
          <p>Contactus</p>
          <p>Contactus</p>
        </div>
        <div className="flex text-[#13151A] text-[50px] sm:text-[90px] lg:text-[130px] relative bottom-[98px]">
          <p>Contactus</p>
          <p>Contactus</p>
          <p>Contactus</p>
          <p>Contactus</p>
        </div>
        <div className="flex text-[#13151A] text-[50px] sm:text-[90px] lg:text-[130px]  relative bottom-[198px]">
          <p>Contactus</p>
          <p>Contactus</p>
          <p>Contactus</p>
          <p>Contactus</p>
        </div>

      </div>



      
    </footer >
  );
};

export default Footer;


