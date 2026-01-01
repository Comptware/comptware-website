import React from "react";
import dynamic from "next/dynamic";
import Button from "components/general/button/Button";
import { bannerVideos } from "utils/videoData";

// Dynamic import for VideoCarousel to optimize performance
const VideoCarousel = dynamic(
  () => import("components/general/VideoCarousel"),
  {
    loading: () => <div className="h-[200px] bg-gray-900 animate-pulse" />,
    ssr: false,
  }
);

const Banner = () => {
  const scrollToSection = (id) => {
    if (typeof window === "undefined") return;
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // Brand logos data
  const brandLogos = [
    {
      name: "Airbnb",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    },
    {
      name: "HubSpot",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
    },
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Walmart",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
    },
  ];

  return (
    <div className="relative w-full bg-[#0B0C10] overflow-hidden">
      {/* Video Background Section */}
      <div className="relative w-full">
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-30"
          style={{
            backgroundImage: "linear-gradient(to bottom, transparent, #0B0C10)",
          }}
        />
      </div>

      {/* Main Banner Content */}
      <div className="relative flex flex-col justify-center items-center pt-[80px] md:pt-[131px] pb-[40px] md:pb-[61px] wallpaper w-full min-h-[500px] px-5 md:px-[5%] lg:px-[8%] z-20">
        {/* Light Blue Patch with Backdrop Blur */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full z-[1]"
          style={{
            background: "#0055FF",
            backdropFilter: "blur(600px)",
            filter: "blur(100px)",
            opacity: 0.3,
          }}
        />

        {/* Content Container */}
        <div className="flex flex-col justify-center items-center text-center w-full max-w-4xl h-fit z-[5] relative">
          <h1 className="text-[#ffffff] bani-heading font-bold mb-3 md:mb-5 text-[28px] 3xs:text-[30px] md:text-[48px] lg:text-[56px]">
            Empowering your business with <br className="hidden md:block" />
            cutting-edge <span className="text-[#3388FF]">software</span>{" "}
            solution
          </h1>

          <p className="text-[#A4A5A8] font-thin bani-title mb-10 md:mb-12 text-[16px] 3xs:text-[18px] md:text-[20px] md:max-w-[600px]">
            Custom software built around your business. We design web, desktop,
            and mobile applications that simplify operations, improve
            efficiency, and support sustainable growth.
          </p>

          {/* CTA Button */}
          <div className="flex w-full justify-center mb-8">
            <Button
              text="Contact us"
              onClick={() => {
                window?.dataLayer?.push({
                  event: "event",
                  eventProps: {
                    category: "Talk To Our Team",
                    action: "Talk To Our Team",
                    label: "Talk To Our Team - home banner",
                    value: 1,
                  },
                });
                scrollToSection("contact");
              }}
              height="h-[54px]"
              textClass="text-lg"
            />
          </div>

          {/* Brand Logos Section */}
          {/* <div className="w-full pt-[40px] flex flex-col gap-[20px] items-center">
            <p className="text-[#2F426A] text-[12px] tracking-wider uppercase">
              We've worked with some of your favorite brands
            </p>

            
            <div className="flex flex-wrap gap-[30px] md:gap-[40px] justify-center items-center">
              {brandLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.name}
                  className="h-[24px] md:h-[30px] opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                  style={{ objectFit: "contain" }}
                />
              ))}
            </div>
          </div> */}
        </div>

        {/* Decorative Gradient Blob */}
        <div className="blue-black-fade-gradient absolute min-h-[20%] sm:min-h-[150%] bottom-0 w-[75%] sm:w-[60%] rounded-full" />
      </div>
    </div>
  );
};

export default Banner;
