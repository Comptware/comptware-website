import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { product } from "utils/bannerGrid";

const SectionThree = () => {
  const sectionRef = useRef(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Ease the scroll progress so the highlight ramps in and out smoothly
  const easeInOut = (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };
  const easedProgress = useTransform(scrollYProgress, (value) =>
    easeInOut(value)
  );

  // Line-by-line progress ranges for the heading (staggered reveal)
  const line1Progress = useTransform(easedProgress, [0.0, 0.35], [0, 1]);
  const line2Progress = useTransform(easedProgress, [0.2, 0.55], [0, 1]);
  const line3Progress = useTransform(easedProgress, [0.4, 0.75], [0, 1]);
  const line4Progress = useTransform(easedProgress, [0.6, 0.95], [0, 1]);

  const line1Start = useTransform(line1Progress, [0, 1], [0, 110]);
  const line1End = useTransform(line1Progress, [0, 1], [10, 120]);
  const line2Start = useTransform(line2Progress, [0, 1], [0, 110]);
  const line2End = useTransform(line2Progress, [0, 1], [10, 120]);
  const line3Start = useTransform(line3Progress, [0, 1], [0, 110]);
  const line3End = useTransform(line3Progress, [0, 1], [10, 120]);
  const line4Start = useTransform(line4Progress, [0, 1], [0, 110]);
  const line4End = useTransform(line4Progress, [0, 1], [10, 120]);

  // Use a moving mask so the white highlight progresses through letters
  const line1Mask = useMotionTemplate`linear-gradient(90deg,
    #000 0%,
    #000 ${line1Start}%,
    transparent ${line1End}%,
    transparent 100%)`;
  const line2Mask = useMotionTemplate`linear-gradient(90deg,
    #000 0%,
    #000 ${line2Start}%,
    transparent ${line2End}%,
    transparent 100%)`;
  const line3Mask = useMotionTemplate`linear-gradient(90deg,
    #000 0%,
    #000 ${line3Start}%,
    transparent ${line3End}%,
    transparent 100%)`;
  const line4Mask = useMotionTemplate`linear-gradient(90deg,
    #000 0%,
    #000 ${line4Start}%,
    transparent ${line4End}%,
    transparent 100%)`;

  return (
    <div id="about-us" className="w-full">
      {/* Part A: About Us Text Section with Scroll Effect */}
      <div
        ref={sectionRef}
        className="relative w-full bg-gradient-to-br from-[#3872B3] via-[#3872B3] to-[#3872B3] py-[120px] md:py-[160px] px-5 md:px-[5%] lg:px-[8%] overflow-hidden"
      >
        {/* Decorative gradient blobs */}
        <div className="blue-black-fade-gradient absolute top-[-280px] left-[-280px] min-h-[450px] min-w-[500px] rounded-full opacity-30" />
        <div className="blue-black-fade-gradient absolute bottom-[-280px] right-[-280px] min-h-[450px] min-w-[500px] rounded-full opacity-30" />

        {/* Content with Scroll Animation */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="relative mb-8">
            <p className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-bold bani-heading text-[#49546D]">
              We're your long-term partners in product success.
            </p>
            <motion.p
              aria-hidden="true"
              className="absolute inset-0 text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-bold bani-heading text-white pointer-events-none"
              style={{
                WebkitMaskImage: line1Mask,
                maskImage: line1Mask,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              We're your long-term partners in product success.
            </motion.p>
          </div>

          <div className="relative mb-8">
            <p className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-bold bani-heading text-[#49546D]">
              With deep expertise in AI, cloud architecture, strategic design,
            </p>
            <motion.p
              aria-hidden="true"
              className="absolute inset-0 text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-bold bani-heading text-white pointer-events-none"
              style={{
                WebkitMaskImage: line2Mask,
                maskImage: line2Mask,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              With deep expertise in AI, cloud architecture, strategic design,
            </motion.p>
          </div>

          <div className="relative mb-8">
            <p className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-bold bani-heading text-[#49546D]">
              and platform development, Comptware is the technology partner
            </p>
            <motion.p
              aria-hidden="true"
              className="absolute inset-0 text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-bold bani-heading text-white pointer-events-none"
              style={{
                WebkitMaskImage: line3Mask,
                maskImage: line3Mask,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              and platform development, Comptware is the technology partner
            </motion.p>
          </div>

          <div className="relative">
            <p className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-bold bani-heading text-[#49546D]">
              for teams who value speed, precision, and strategic alignment.
            </p>
            <motion.p
              aria-hidden="true"
              className="absolute inset-0 text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-bold bani-heading text-white pointer-events-none"
              style={{
                WebkitMaskImage: line4Mask,
                maskImage: line4Mask,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              for teams who value speed, precision, and strategic alignment.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Part B: Competitive Edge Cards */}
      <div className="w-full px-5 xs:px-[30px] md:px-[5%] lg:px-[8%] py-[90px] md:py-[120px] lg:py-[170px] bg-white">
        <div
          style={{
            background:
              "linear-gradient(86.7deg, #3A64F8 -34.82%, #3A64F8 -9.23%, #BB39F9 134.18%)",
          }}
          className="w-full rounded-[20px] 2xs:rounded-[50px] gap-[60px] elg:gap-0 p-[20px] 2xs:p-[40px] blg:p-[70px] flex flex-col elg:flex-row wave relative"
        >
          {/* Title Section - 40% width on desktop */}
          <div
            className="w-full elg:w-[40%] text-[28px] md:text-[38px] blg:text-[48px] text-white max-h-[500px]"
            style={{
              backgroundImage: "url(/Wave.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="z-20 relative font-bold">
              Your Competitive Advantage
            </p>
          </div>

          {/* Cards Grid - 60% width on desktop */}
          <div className="w-full elg:w-[60%] flex justify-center elg:justify-end z-20 h-fit">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-start items-start h-fit">
              {product.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`w-full h-fit rounded-[16px] py-[36px] flex flex-col gap-[24px] px-[20px] ${item.bg_color}`}
                >
                  <item.Image />

                  <div className="gap-[10px] flex flex-col">
                    <p className={`${item.header_color} font-bold text-[18px]`}>
                      {item.title}
                    </p>
                    <p
                      className={`${item.body_color} text-[14px] leading-relaxed`}
                    >
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative gradient blob */}
          <div className="purple-black-fade-gradient absolute min-h-[50%] right-7 bottom-14 sm:min-h-[85%] min-w-[40%]" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
