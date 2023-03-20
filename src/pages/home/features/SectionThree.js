import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Foodcourt from "assets/icons/Clients/foodcourt.svg";
import Hinge from "assets/icons/Clients/hinge.svg";
import FFStores from "assets/icons/Clients/ff-stores.svg";
import Mood from "assets/icons/Clients/mood.svg";

const clients = [
  {
    title: "Foodcourt",
    body: "Bani makes payment collection more seamless and instant for Foodcourt. Customers can easily order and pay for food without having to worry about delayed delivery due to failed payments.",
    icon: <Foodcourt />,
  },
  {
    title: "Mood Lagos",
    body: "Bani allows Mood Lagos to deliver efficient and timely service to customers seeking premium relaxation and quality food. With an easy and instant payment process, customers' requests are delivered swiftly without delay.",
    icon: <Mood />,
  },
  {
    title: "Hinge",
    body: "Bani supports Hinge with a seamless payment collection process that helps the company easily provide IoT solutions to businesses. Payment is smooth and swift for clients seeking Hinge's IoT solutions to enjoy automated, stress-free and more efficient utility payments.",
    icon: <Hinge />,
  },
  {
    title: "Fastforward Stores",
    body: "Bani enables Fastforward Stores to render quality and timely service to fashion lovers shopping for their favourite brands. Payment is easy and swift, allowing customers to spend less time shopping.",
    icon: <FFStores />,
  },
];

const SectionThree = () => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlide = useCallback((index) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(index);
  }, []);

  return (
    <div className="flex flex-col justify-start items-start w-full h-fit md:gap-y-8 py-14 md:py-[110px] bg-black relative overflow-hidden">
      <div className="blue-black-fade-gradient absolute top-[-280px] left-[-280px] min-h-[450px] min-w-[500px] rounded-full" />
      <div className="blue-black-fade-gradient absolute bottom-[-280px] right-[-280px] min-h-[450px] min-w-[500px] rounded-full" />

      <div className="flex flex-col items-center justify-start w-full py-3 px-5 md:gap-y-20">
        <div className="flex justify-between items-center py-3 md:w-[80%] overflow-x-scroll scale-[0.45] sm:scale-[0.6] md:scale-[0.7] lg:scale-[1]">
          {clients.map(({ icon, title }, i) => {
            const inactiveOpacity = i === 1 ? 0.7 : 0.3;
            return (
              <button
                key={title}
                style={{
                  opacity: activeSlideIndex === i ? 1 : inactiveOpacity,
                }}
                className="scale-[0.8] transition-all duration-[0.5s] ease-in-out"
                onClick={() => handleSlide(i)}
              >
                {icon}
              </button>
            );
          })}
        </div>

        <div className="w-[85%] md:w-[75%] lg:w-[55%]">
          <Swiper
            ref={sliderRef}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={(e) => setActiveSlideIndex(e.activeIndex)}
            className="!pb-4"
            autoplay={false}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {clients.map(({ body, title }) => (
              <SwiperSlide key={title}>
                <p className="text-white bani-title-alt text-center leading-loose ">
                  {body}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
