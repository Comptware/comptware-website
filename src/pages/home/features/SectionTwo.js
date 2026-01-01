import React from "react";
import { motion } from "framer-motion";
import SuccessStoryCard from "components/general/cards";
import { successStories } from "utils/successStoriesData";

const SectionTwo = () => {
  return (
    <div id="success-stories" className="w-full bg-[#F7F7F7]">
      {/* Section Header - Left Aligned */}
      <div className=" pt-14 md:pt-[72px] pb-14 md:pb-16 px-5 md:px-[5%] lg:px-[8%]">
        <p
          className="text-[12px] tracking-wider uppercase mb-4 text-transparent bg-clip-text inline-block"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #3388FF -4.88%, #33FFFF 63.35%, #33CEFF 93.29%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OUR WORK
        </p>
        <h2 className="text-[32px] md:text-[48px] font-bold text-gray-900 bani-heading mb-4">
          Success <span className="text-[#3388FF]">Stories</span>
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-600 max-w-2xl bani-title">
          Real-world results from teams we have helped design, build, and scale.
          Each story highlights the impact we delivered across product, growth,
          and engineering.
        </p>
      </div>

      {/* Stacking Scroll Section */}
      <div className="relative">
        {successStories.map((story, index) => (
          <div
            key={story.id}
            className="sticky top-0 flex items-center justify-center pt-8"
            style={{ paddingTop: index === 0 ? "0" : "0px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              <SuccessStoryCard {...story} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
