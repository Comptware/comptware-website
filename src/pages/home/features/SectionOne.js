import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import StickyBox from "react-sticky-box";
import Button from "components/general/button/Button";
import ArrowRight from "assets/icons/Arrow/arrow-right-black.svg";
import Pdesign_logo from "assets/homepage_logos/Pdesign_logo.svg";
import { PAYMENT_TYPES_STICKY_MODES } from "utils/constants";
import SliderPagination from "components/general/siderPagination";
import { collargig, grid, product, the_grid } from "utils/bannerGrid";
import blog from "../../../assets/homepage_logos/blog.png";
import Frame from '../../../assets/homepage_logos/Frame.svg'
import Fones from '../../../assets/homepage_logos/Fones.svg'
import Fones_xs from '../../../assets/homepage_logos/fones.svg'




const paymentTypesClsx =
  "w-full bg-contain bg-no-repeat p-0 h-full pb-[calc(100% * 3 / 4)] bg-top transition-all duration-[500ms] ease-in";
const paymentTypes = [
  {
    title: "Virtual accounts",
    body: "Experience greater payment efficiency, control, and flexibility with our virtual accounts.",
    img: (
      <div
        className={`${paymentTypesClsx} bg-virtual-accounts h-[400px] mt-10`}
      />
    ),
    bgImage: "bg-virtual-accounts",
    link: "/payments/virtual-accounts",
  },
  {
    title: "Mobile Money",
    body: "Experience payment convenience and accessibility across Africa with our mobile money service.",
    img: (
      <div
        className={`${paymentTypesClsx} bg-mobile-money-png h-[400px] scale-[1.05] mt-14`}
      />
    ),
    bgImage: "bg-mobile-money-png",
    link: "/payments/mobile-money",
  },
  {
    title: "DLT Payments",
    body: "Enjoy fast and secure local and cross-border transactions with our DLT payment service.",
    img: <div className={`${paymentTypesClsx} bg-crypto h-[350px] mt-10`} />,
    bgImage: "bg-crypto scale-[0.8]",
    link: "/payments/crypto",
  },
  {
    title: "E-wallets",
    body: "Experience the convenience of paying seamlessly on the go with your e-wallet apps.",
    img: (
      <div
        className={`${paymentTypesClsx} bg-e-wallets scale-125 h-[400px] mt-14`}
      />
    ),
    bgImage: "bg-e-wallets",
    link: "/payments/ewallets",
  },
];
const { PRE_VIEW, IN_VIEW, POST_VIEW } = PAYMENT_TYPES_STICKY_MODES;
const delay = 3000;
const SectionOne = () => {
  const sectionRef = useRef(null);
  const scrollXContainerRef = useRef(null);
  const timeoutRef = useRef(null);
  const cardsRef = useRef([]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [activePaymentType, setActivePaymentType] = useState(paymentTypes[0]);
  const [stickyMode, setStickyMode] = useState(PRE_VIEW);

  const handleScroll = (direction) => {
    if (direction === "left") {
      scrollXContainerRef.current.scrollLeft -= width;
    } else {
      scrollXContainerRef.current.scrollLeft += width;
    }
  };

  // const handleCustomScroll = (i) => {
  //   scrollXContainerRef.current.scrollLeft = width * i;
  // };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // React.useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       handleCustomScroll(
  //         activeSlideIndex === paymentTypes.length - 1
  //           ? 0
  //           : activeSlideIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [cardsRef?.current[0]?.getBoundingClientRect()?.x]);

  useEffect(() => {
    setWidth(window?.innerWidth);
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActiveSlideUpdate = () => {
    for (let i = 0; i < cardsRef?.current?.length; i++) {
      const x = cardsRef?.current[i]?.getBoundingClientRect()?.x;

      if (x >= 0 && x < 35) {
        setActiveSlideIndex(i);
      }
    }
  };



  return (
    <div className="flex flex-col justify-start items-center h-fit w-full space-y-7 sticky-boundary sm:mb-[0px] relative">
      <div className="flex flex-col bg-[#F7F7F7] justify-between items-center w-full h-fit gap-y-12 sm:mb-[0px]">
        <div className="flex flex-col justify-between items-center w-full h-fit gap-y-[16px] pt-[70px] md:pt-[152px] bg-[#F7F7F7] z-20">

          <div className="pb-[60px] sm:pb-[110px] flex flex-col justify-between items-center w-full h-fit gap-y-[16px]">
            <div className="w-full text-center text-[#3388FF] text-[12px]">
              <p>WHAT WE DO</p>
            </div>

            <p className="text-[#161717] sm:leading-[64.8px] bani-heading-alt font-bold w-full md:w-[75%] lg:w-[60%] text-[28px] sm:text-[48px] text-center p-2">
              Engineering unique <span className="text-[#3388FF]">visual experiences</span> for your business
            </p>

            <p className="text-[#81BA98] w-[90%] sm:w-[45%] text-center">Lorem lacus eu ac malesuada ultricies ut arcu cras et. Elementum viverra tellus tincidunt. Arcu nec sed tincidunt  luctus iaculis.</p>
          </div>


          <div className="flex-col px-[90px] w-full pb-[135px] text-white gap-[32px] elg:flex hidden">

            <div className="">
              <div className="w-full gap-[21px] flex">

                <div className="flex flex-col justify-between pb-[27px] w-[62%] px-[40px] border-blue-300 border border-2 h-[450px] rounded-[24px] bg-[#3388FF] rectangle-bg">

                  <div className="pt-[80px] w-[400px] flex flex-col gap-[16px]">
                    <p className="font-bold text-[32px]">Engineering Cutting-Edge Technology</p>
                    <p className="">Lorem lacus eu ac malesuada ultricies ut arcu cras Elementum viverra tellus tincidunt. Arcu nec sed tincidunt  luctus iaculis.</p>
                  </div>

                  <div className="flex gap-[7px]">
                    <Button
                      text="See More"
                      height="h-[42px] w-[152px] bg-white text-[#032343]"
                      textClass="text-lg text-[#032343]"
                    />

                    <div className="h-[43px] w-[43px] rounded-[49px] border border-[#65707B]">

                    </div>
                  </div>

                </div>

                <div className="w-[32%] flex flex-col justify-between bg-[#726f7728] border-200 h-[450px] pb-[27px] rounded-[24px] pt-[40px] px-[30px]  gridBg">
                  <div className=" flex flex-col justify-end">
                    <div className="flex justify-end">
                      <Pdesign_logo />
                    </div>

                    <div>
                      <p className="font-bold text-[#71588D] text-[32px]">Product Design</p>
                      <p className="text-[#A6A4A8] leading-[23px]">Lorem lacus eu ac malesuada ultricies ut arcu cras Elementum viverra tellus tincidunt. Arcu nec sed tincidunt  luctus iaculis.</p>
                    </div>
                  </div>

                  <div className="flex gap-[7px]">

                    <Button
                      text="Learn More"
                      height="h-[42px] w-[152px] text-white bg-[#7400FF]"
                      textClass="text-lg text-white"
                    />



                    <div className="h-[43px] w-[43px] rounded-[49px] border border-[#65707B]">

                    </div>
                  </div>

                </div>
              </div>


            </div>


            <div className="flex gap-[21px]">
              {grid.map(items =>

                <div className={`w-[31%] flex flex-col justify-between border-200 h-[450px] pb-[27px] ${items.bg_color} rounded-[24px] pt-[40px] px-[30px] ${items.backgrounds}`}>
                  <div className=" flex flex-col justify-end">
                    <div className="flex justify-end">
                      <items.Image />
                    </div>

                    <div>
                      <p className={`font-bold ${items.header_color} text-[32px]`}>{items.title}</p>
                      <p className={`leading-[23px] ${items.body_color}`}>{items.text}</p>
                    </div>
                  </div>

                  <div className="flex gap-[7px]">

                    <button className={`h-[42px] w-[152px] font-semibold ${items.text_color} ${items.color} text-lg rounded-[40px]`} >
                      Learn More
                    </button>


                    <div className="h-[43px] w-[43px] rounded-[49px] border border-[#65707B]">

                    </div>
                  </div>

                </div>
              )}
            </div>

          </div>

          <div className="w-full flex-col gap-[32px] px-[40px] slg:px-[90px] elg:hidden flex">
            <div className="w-full justify-center hidden md:flex">

              <div className="flex flex-col justify-between pb-[27px] w-[100%] text-white md:w-[90%] slg:w-[85%] px-[40px] border border-2 h-[450px] rounded-[24px] rectangle-bg bg-[#3388FF]">

                <div className="pt-[80px] w-[400px] flex flex-col gap-[16px]">
                  <p className="font-bold text-[32px]">Engineering Cutting-Edge Technology</p>
                  <p className="">Lorem lacus eu ac malesuada ultricies ut arcu cras Elementum viverra tellus tincidunt. Arcu nec sed tincidunt  luctus iaculis.</p>
                </div>

                <div className="flex gap-[7px]">
                  <Button
                    text="See More"
                    height="h-[42px] w-[152px] bg-white text-[#032343]"
                    textClass="text-lg"
                  />

                  <div className="h-[43px] w-[43px] rounded-[49px] border border-[#65707B]">

                  </div>
                </div>

              </div>
            </div>


            <div className="flex justify-center md:hidden ">
              <div className="w-[335px] py-[35px] text-white bg-[#3388FF] rounded-[20px] px-[24px] h-[354px] flex flex-col justify-between">
                <div className="flex flex-col gap-[14px]">
                  <p className={`font-bold text-[26px]`}>Engineering Cutting-Edge Technology</p>
                  <p className={`leading-[23px]`}>Lorem lacus eu ac malesuada ultricies ut arcu cras Elementum viverra tellus </p>
                </div>

                <div className="flex gap-[7px]">

                  <button className={`h-[42px] w-[152px] font-semibold bg-white text-[#032343] text-lg rounded-[40px]`} >
                    Learn More
                  </button>


                  <div className="h-[43px] w-[43px] rounded-[49px] border border-[#65707B]">

                  </div>
                </div>

              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-items-center">
              {the_grid.map(items =>

                <div className={`w-[335px] slg:w-[400px] flex flex-col justify-between border-200 h-[450px] pb-[27px] ${items.bg_color} rounded-[24px] pt-[40px] px-[30px] ${items.backgrounds}`}>
                  <div className="flex flex-col justify-end">
                    <div className="flex justify-end">
                      <items.Image />
                    </div>

                    <div>
                      <p className={`font-bold ${items.header_color} text-[32px]`}>{items.title}</p>
                      <p className={`leading-[23px] ${items.body_color}`}>{items.text}</p>
                    </div>
                  </div>

                  <div className="flex gap-[7px]">

                    <button className={`h-[42px] w-[152px] font-semibold ${items.text_color} ${items.color} text-lg rounded-[40px]`} >
                      Learn More
                    </button>


                    <div className="h-[43px] w-[43px] rounded-[49px] border border-[#65707B]">

                    </div>
                  </div>

                </div>
              )}

            </div>



          </div>

        </div>

        <div className='w-full px-[20x] 3xs:px-[40px] md:px-[60px] lg:px-[90px] pb-[90px] sm:pb-[200px]'>
          <div className="p-5 3xs:p-0  flex flex-col w-full h-fit gap-y-[16px]">
            <div className="w-full text-[#3388FF] text-[12px]">
              <p>OUR WORK</p>
            </div>

            <p className="text-[#161717] leading-[64.8px] bani-heading-alt font-bold w-full md:w-[75%] lg:w-[60%] text-[30px] md:text-[38px] lg:text-[48px]">
              Selected <span className="text-[#3388FF]">Projects</span>
            </p>

            <p className="text-[#81BA98] md:w-[55%]">Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc pellentesque penatibus ut dignissim. </p>
          </div>




          <div className="grid grid-cols-1 blg:grid-cols-2 gap-[32px] w-full pt-[103px]">

            {collargig.map(items =>
              <div className={`w-full flex flex-col gap-[12px] xs:gap-[30px] blg:gap-[30px] sm:gap-[40px] lg:gap-[32px] elg:gap-10 ${items.bg_color} h-[470px] xs:h-[650px] lg:h-[696px] p-[20px] xs:p-[50px] md:p-[30px] lg:p-[50px]`}>
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

            <div className={`w-full flex flex-col gap-[12px] xs:gap-[30px] blg:gap-[30px] sm:gap-[40px] lg:gap-[32px] elg:gap-10 bg-[#E7E6F9] h-[470px] xs:h-[650px] lg:h-[696px] p-[20px] xs:p-[50px] md:p-[30px] lg:p-[50px]`}>
              <p className="font-semibold text-[14px] xs:text-[16px]">COLLARGIG</p>

              <div className="hidden xs:flex blg:hidden slg:flex gap-[12px]">
                <div
                  className={`w-full bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phone-hero-section-bg-tab`}
                />

              </div>

              <div className="flex xs:hidden blg:flex slg:hidden gap-[12px]">
                <div
                  className={`w-full bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phone-hero-section-bg-tab-xs`}
                />

              </div>



              <div className="flex flex-col gap-[8px]">
                <p className={` text-[14px] xs:text-[16px] font-semibold`}>WEB DESIGN, APP DESIGN, DEVELOPMENT</p>

                <p className={`text-[12px] xs:text-[14px]`}>Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus id rutrum est enim odio rutrum ultrices accumsan. Adipiscing in fringilla pharetra aliquet sed. Euismod sed </p>
              </div>

            </div>

          </div>
        </div>

        <div className="xs:px-[30px] flex justify-start w-full pb-[90x] md:pb-[120px] lg:pb-[170px]">
          <div className="w-full h-[1730px] md:h-[1050px] blg:h-[1150px] slg:h-[1140px] elg:h-[914px] rounded-[20px] 2xs:rounded-[50px] gap-[60px] elg:gap-0 bg-[#3A64F8] p-[20px] 2xs:p-[40px] blg:p-[70px] flex flex-col elg:flex-row wave relative z-20">

            <div className="w-full elg:w-[40%] text-[28px] md:text-[38px] blg:text-[48px] text-white">
              <p className="z-20 relative">We’re optimized to build great products to take your business to the next level </p>
            </div>

            <div className="w-full elg:w-[60%] flex justify-center elg:justify-end z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">

                {product.map(items =>
                  <div className={`w-[312px] h-[342px] rounded-[16px] py-[36px] flex flex-col gap-[24px] px-[20px] ${items.bg_color}`}>
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

        <div className="flex flex-col items-center pb-[74px]">
          <div className="w-[95%] 2xs:w-[75%] md:w-[55%] slg:w-[40%] flex flex-col items-center gap-[36px] pb-[57px] md:pb-[70px]">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[28px] md:text-[38px] blg:text-[48px] text-center text-[#161717] font-bold">
                <p>Our Blog</p>
              </div>

              <p className="text-[#818A98] text-center">Egestas tempus nisi nunc aenean dignissim massa aliquet  rutrum est enim odio rutrum ultrices accumsan. Adipiscing in fringilla pharetra aliquet sed. Euismod sed </p>

            </div>

            <div>
              <button className="bg-[#3388FF] h-[42px] w-[152px] text-white rounded-[40px]">Read More</button>
            </div>

          </div>


          <div className="grid grid-cols-1 blg:grid-cols-2 elg:grid-cols-3 gap-[32px]">
            <div className="flex flex-col gap-[24px] 2xs:w-[380px] items-center">
              <div className=" bg-white ">
                <Frame />
              </div>

              <div className="flex flex-col gap-[12px]">
                <p className="text-[20px] font-semibold">Discussions around engineering lol, spans two to three lines some times</p>

                <div>
                  <p className="text-[14px]">Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc cance tum pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus </p>

                  <a className="text-blue underline text-[12px]" href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[24px] 2xs:w-[380px] items-center">
              <div className=" bg-white">
                <Frame />
              </div>

              <div className="flex flex-col gap-[12px]">
                <p className="text-[20px] font-semibold">Discussions around engineering lol, spans two to three lines some times</p>

                <div>
                  <p className="text-[14px]">Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc cance tum pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus </p>

                  <a className="text-blue underline text-[12px]" href="#">READ MORE</a>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-[24px] 2xs:w-[380px] items-center">
              <div className=" bg-white">
                <Frame />
              </div>

              <div className="flex flex-col gap-[12px]">
                <p className="text-[20px] font-semibold">Discussions around engineering lol, spans two to three lines some times</p>

                <div>
                  <p className="text-[14px]">Egestas tempus nisi nunc aenean dignissim massa aliquet fringilla tortor. Nunc cance tum pellentesque penatibus ut dignissim. Tortor pretium vivamus placerat auctor ut. Senectus </p>

                  <a className="text-blue underline text-[12px]" href="#">READ MORE</a>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* 
        <div
          ref={sectionRef}
          className=" h-fit flex flex-col md:flex-row items-start w-full space-y-2 md:space-x-8 sm:py-[70px] relative"
        >
          <div
            className={` h-fit flex flex-col md:flex-row items-start w-full space-y-2 md:space-x-8 transition-all duration-300 ease-in-out max-w-9xl mx-auto`}
          // className={`px-5 md:px-[5%] lg:px-[8%] h-fit flex flex-col md:flex-row items-start w-full space-y-2 md:space-x-8 transition-all duration-300 ease-in-out max-w-9xl mx-auto`}
          >
            <StickyBox
              // offsetTop={20}
              // offsetBottom={20}
              style={{ border: "3px solid green" }}
            >
              <div className="w-full ">
                <div
                  className={`${stickyMode === IN_VIEW
                    ? "fixed sm:top-[90px] left-0 pl-5 md:pl-[5%] lg:pl-[8%]"
                    : "pl-10 md:pl-[10%] lg:pl-[16%]"
                    }  mt-[1px] hidden md:flex flex-col justify-center items-center md:items-start text-center md:text-left !w-full h-fit space-y-4`}
                >
                  <p className="text-black-light basier-medium leading-none bani-base pb-4 pt-5">
                    COLLECT PAYMENTS ANYWHERE
                  </p>
                  {paymentTypes.map(({ title, body, img, bgImage, link }) => (
                    <Link
                      key={title}
                      href={link}
                      className={`${activePaymentType?.title === title
                        ? "text-black-light basier-medium"
                        : "text-black-fade font-normal"
                        } tracking-[0.05em]  leading-normal bani-heading-alt-2 mb-4 cursor-pointer transition-all duration-300 ease-in-out`}
                      onMouseEnter={() => {
                        setActivePaymentType({ title, body, img, bgImage });
                      }}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </StickyBox>
            <div className="pr-5 md:pr-[5%] lg:pr-[8%] hidden sm:flex flex-col justify-center items-center md:items-end !min-w-[50%] !w-full !max-w-[50%] min-h-[55vh] md:pt-0">
              <div className="flex flex-col md:hidden justify-center items-center md:items-start text-center md:text-left w-full h-fit space-y-4">
                <p className="text-black-light basier-medium leading-none bani-base pb-2 pt-10">
                  COLLECT PAYMENTS ANYWHERE
                </p>

                <div className="flex w-full justify-center ">
                  {paymentTypes.map(({ title }) =>
                    activePaymentType?.title == title ? (
                      <span
                        key={title}
                        className={`text-black-light basier-medium tracking-[0.05em]  leading-normal bani-heading-alt-2 mb-4 cursor-pointer transition-all duration-300 ease-in-out animate-fadein`}
                      >
                        {activePaymentType?.title}
                      </span>
                    ) : null
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center !min-w-[100%] !w-full !max-w-[100%] min-h-[450px] bg-grey-dull rounded-[40px] pb-8">
                {activePaymentType?.img ? (
                  <div className="h-[350px] !min-w-[100%] !w-full !max-w-[100%]">
                    <div
                      className={`${paymentTypesClsx} ${activePaymentType?.bgImage}`}
                    />
                  </div>
                ) : null}
                <p className="font-light bani-title-2 text-black px-8">
                  {activePaymentType?.body}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:hidden justify-center items-start text-left w-full h-fit gap-8 px-5">
            <p className="text-black-light basier-medium leading-none text-base">
              COLLECT PAYMENTS ANYWHERE
            </p>

            <div className="flex sm:hidden justify-start items-center gap-x-4 w-full ml-[-10px] md:ml-0">
              <button
                onClick={() => handleScroll("left")}
                className={`scale-[0.75]`}
                style={{ opacity: activeSlideIndex <= 0 ? 0.15 : 1 }}
              >
                <ArrowRight className="rotate-[180deg]" />
              </button>

              <button
                className="works-slide-right scale-[0.75]"
                onClick={() => handleScroll("right")}
              >
                <ArrowRight />
              </button>

              <SliderPagination
                activePage={activeSlideIndex}
                setActivePage={(i) => {
                  setActiveSlideIndex(i);
                  handleCustomScroll(i);
                }}
                pages={paymentTypes}
                className="ml-auto sm:hidden"
              />
            </div>
          </div>

          <div
            className="flex sm:hidden w-full gap-3 py-3 px-5 md:px-0 no-scrollbar overflow-x-auto scroll-smooth snap-mandatory snap-x"
            ref={scrollXContainerRef}
            onScroll={(e) => handleActiveSlideUpdate()}
          >
            {paymentTypes.map((item, i) => (
              <div
                key={item.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className="flex flex-col justify-between items-center w-full min-w-[calc(100vw-50px)] max-w-[calc(100vw-50px)] h-[450px] bg-grey-dull rounded-[20px] pb-8 snap-center overflow-hidden"
              >
                <div className="h-[60%] w-full">{item.img}</div>
                <p className="font-light bani-title-2 text-black px-8">
                  {item?.body}
                </p>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default SectionOne;
