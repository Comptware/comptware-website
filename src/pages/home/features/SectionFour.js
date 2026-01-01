import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "utils/testimonialsData";
import HypinIcon from "assets/icons/Hypin.svg";

const SectionFour = () => {
  return (
    <div className="w-full bg-[#EEF4FF] py-16 md:py-24 px-5 md:px-[5%] lg:px-[8%]">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-14">
        <p
          className="text-[12px] tracking-[0.28em] uppercase mb-3 text-transparent bg-clip-text inline-block"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #3388FF -4.88%, #33FFFF 63.35%, #33CEFF 93.29%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WALL OF LOVE
        </p>
        <h2 className="text-[28px] md:text-[40px] font-bold text-[#161717] bani-heading">
          Here's what our <span className="text-[#3388FF]">clients</span> have{" "}
          <br className="hidden md:block" />
          to say
        </h2>
      </div>

      {/* Testimonials Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {testimonials.map((testimonial, index) => {
          const initials = testimonial.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[24px] p-7 md:p-8 shadow-[0_12px_30px_rgba(25,55,115,0.08)] relative overflow-hidden flex flex-col"
            >
              {/* Decorative Quote Mark */}
              <HypinIcon
                aria-hidden="true"
                className="absolute top-6 left-4 opacity-60 scale-[0.5]"
              />

              {/* Testimonial Content */}
              <div className="relative z-10 pt-6 flex flex-col h-full">
                <p className="text-[14px] md:text-[15px] text-[#4B5563] leading-relaxed mb-6 bani-title flex-1">
                  {testimonial.testimonial}
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-[14px] md:text-[15px] font-bold text-[#111827]">
                      {testimonial.name}
                    </p>
                    <p className="text-[12px] md:text-[13px] text-[#6B7280]">
                      {testimonial.title} {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionFour;
