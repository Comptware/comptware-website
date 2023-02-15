import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Foodcourt from "assets/icons/Clients/foodcourt.svg";
import Hinge from "assets/icons/Clients/hinge.svg";
import Kobo from "assets/icons/Clients/kobo.svg";
import Pivo from "assets/icons/Clients/pivo.svg";


const clients = [
  {
    title: "Foodcourt",
    body: "Bani makes ordering food more convenient and efficient for customers, and it streamlines the process for restaurants and delivery drivers. With our payment integration, customers can easily and securely pay for their food using their credit or debit card, or even with popular e-wallets",
    icon: <Foodcourt />,
  },
  {
    title: "Pivo",
    body: "Bani makes ordering food more convenient and efficient for customers, and it streamlines the process for restaurants and delivery drivers. With our payment integration, customers can easily and securely pay for their food using their credit or debit card, or even with popular e-wallets",
    icon: <Pivo />,
  },
  {
    title: "Hinge",
    body: "Bani makes ordering food more convenient and efficient for customers, and it streamlines the process for restaurants and delivery drivers. With our payment integration, customers can easily and securely pay for their food using their credit or debit card, or even with popular e-wallets",
    icon: <Hinge />,
  },
  {
    title: "Kobo",
    body: "Bani makes ordering food more convenient and efficient for customers, and it streamlines the process for restaurants and delivery drivers. With our payment integration, customers can easily and securely pay for their food using their credit or debit card, or even with popular e-wallets",
    icon: <Kobo />,
  },
];

const SectionThree = () => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  

  return (
    <div className="flex flex-col justify-start items-start w-full h-fit gap-y-8 md:py-[110px] bg-black relative overflow-hidden">
      <div className="blue-black-fade-gradient absolute top-[-280px] left-[-280px] min-h-[450px] min-w-[500px] rounded-full" />
      <div className="blue-black-fade-gradient absolute bottom-[-280px] right-[-280px] min-h-[450px] min-w-[500px] rounded-full" />

      <div className="flex flex-col items-center justify-start w-full py-3 px-5 gap-y-20">
        <div className="flex justify-between flex-wrap items-center py-3 gap-2 md:w-[75%] lg:w-[60%]">
          {clients.map(({ icon, title }, i) => {
            return (
              <button
                key={title}
                style={{ opacity: activeSlideIndex === i ? 1 : 0.3 }}
                className="scale-[0.8] transition-all duration-[1s] ease-in-out"
              >
                {icon}
              </button>
            );
          })}
        </div>

        <div className="md:w-[75%] lg:w-[60%]">
          <Swiper
            ref={sliderRef}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={(e) => setActiveSlideIndex(e.activeIndex)}
            className="!pb-4"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true, el: ".black-bg-swiper-pagination" }}
          >
            {clients.map(({ body, title }) => (
              <SwiperSlide key={title}>
                <p className="text-white font-medium bani-title-alt text-center ">
                  {body}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="black-bg-swiper-pagination flex justify-center items-center mt-7 " />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;