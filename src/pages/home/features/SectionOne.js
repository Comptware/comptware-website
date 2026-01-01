import React from "react";
import { motion } from "framer-motion";
import { the_grid } from "utils/bannerGrid";

const SectionOne = () => {
  // Separate the first two cards for the top row
  const aiCard = the_grid[0]; // AI & Intelligent Automation
  const designCard = the_grid[1]; // Product Design
  const bottomCards = the_grid.slice(2); // Remaining 3 cards
  const showCardButtons = false;

  const ArrowIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div id="services" className="w-full bg-[#F7F7F7]">
      <div className="w-full px-8 md:px-[5%] lg:px-[8%] py-[70px] md:py-[120px]">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-[12px] tracking-wider uppercase mb-4 text-transparent bg-clip-text inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #3388FF -4.88%, #33FFFF 63.35%, #33CEFF 93.29%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WHAT WE DO
          </p>
          <h2 className="text-[#161717] text-[28px] md:text-[40px] lg:text-[48px] font-bold bani-heading-alt leading-tight max-w-4xl mx-auto">
            Engineering unique{" "}
            <span className="text-[#3388FF]">
              visual <br className="hidden md:block" />
              experiences
            </span>{" "}
            for your business
          </h2>
          <p className="text-[#65717C] text-[16px] md:text-[18px] mt-4 max-w-3xl mx-auto">
            We combine strategy, design, and engineering to build digital
            experiences that are functional, memorable, and tailored to your
            business goals.
          </p>
        </div>

        {/* Desktop Layout (1200px and above) */}
        <div className="hidden elg:block">
          {/* Top Row: Large AI Card + Product Design Card */}
          <div className="flex gap-6 mb-6">
            {/* AI & Intelligent Automation - Large Card with Dual Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-[0_0_62%] rounded-[32px] relative overflow-hidden"
              style={showCardButtons ? { minHeight: "350px" } : undefined}
            >
              {/* Dark Blue Section - 75% width */}
              <div className="absolute inset-0 bg-[#032343] rounded-[32px]" />

              {/* Light Blue Section - 25% width with Slant */}
              <div
                className="absolute top-0 right-0 bottom-0 bg-[#3388FF] rounded-r-[32px]"
                style={{
                  width: "35%",
                  clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              />

              {/* Content - In Dark Blue Section ONLY */}
              <div
                className={`relative z-10 p-10 flex flex-col h-full ${
                  showCardButtons ? "justify-between" : "justify-start"
                }`}
                style={{ maxWidth: "60%" }}
              >
                <div>
                  <h3 className="text-[28px] font-bold mb-4 text-white">
                    {aiCard.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white">
                    {aiCard.text}
                  </p>
                </div>
                {showCardButtons && (
                  <div className="flex items-center gap-2">
                    <button className="bg-white text-[#032343] px-8 py-2.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
                      See More
                    </button>
                    <button
                      className="w-9 h-9 rounded-full bg-transparent border-[#65707B] flex items-center justify-center text-[#65707B] hover:bg-[#65707B]/10 transition-colors"
                      aria-label="View more"
                    >
                      <ArrowIcon />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Design Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex-[0_0_36%] ${
                designCard.bg_color
              } rounded-[32px] p-10 relative overflow-hidden ${
                designCard.backgrounds || ""
              }`}
              style={showCardButtons ? { minHeight: "350px" } : undefined}
            >
              {/* Pattern Background at Top Half */}
              {designCard.patternBg && (
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 bg-no-repeat bg-cover bg-top opacity-60 rounded-t-[32px]"
                  style={{ backgroundImage: `url(${designCard.patternBg})` }}
                />
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-end mb-6">
                  <img
                    src={designCard.Image}
                    alt={designCard.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div
                  className={`flex-1 flex flex-col ${
                    showCardButtons ? "justify-between" : "justify-start"
                  }`}
                >
                  <div>
                    <h3
                      className={`text-[32px] font-bold mb-4 ${designCard.header_color}`}
                    >
                      {designCard.title}
                    </h3>
                    <p
                      className={`text-[16px] leading-relaxed ${designCard.body_color}`}
                    >
                      {designCard.text}
                    </p>
                  </div>
                  {showCardButtons && (
                    <div className="flex items-center gap-2 mt-4">
                      <button className="bg-[#7400FF] text-white px-8 py-2.5 rounded-full font-medium text-sm hover:bg-[#6200DD] transition-colors">
                        Learn More
                      </button>
                      <button
                        className="w-9 h-9 rounded-full bg-transparent border-2 border-[#A59DAF] flex items-center justify-center text-[#A59DAF] hover:bg-[#A59DAF]/10 transition-colors"
                        aria-label="View more"
                      >
                        <ArrowIcon />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 3 Equal Cards */}
          <div className="grid grid-cols-3 gap-6">
            {bottomCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`${
                  card.bg_color
                } rounded-[32px] p-10 relative overflow-hidden ${
                  card.backgrounds || ""
                }`}
                style={showCardButtons ? { minHeight: "350px" } : undefined}
              >
                {/* Pattern Background at Top Half */}
                {card.patternBg && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1/2 bg-no-repeat bg-cover bg-top opacity-60 rounded-t-[32px]"
                    style={{ backgroundImage: `url(${card.patternBg})` }}
                  />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-end mb-6">
                    <img
                      src={card.Image}
                      alt={card.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div
                    className={`flex-1 flex flex-col ${
                      showCardButtons ? "justify-between" : "justify-start"
                    }`}
                  >
                    <div>
                      <h3
                        className={`text-[28px] font-bold mb-4 ${card.header_color}`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-[14px] leading-relaxed ${card.body_color}`}
                      >
                        {card.text}
                      </p>
                    </div>
                    {showCardButtons && (
                      <div className="flex items-center gap-2 mt-4">
                        <button
                          className={`${
                            index === 0
                              ? "bg-white text-[#032343]"
                              : index === 1
                              ? "bg-[#00B3FF] text-white"
                              : "bg-white text-[#2C3E50]"
                          } px-8 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity`}
                        >
                          Learn More
                        </button>
                        <button
                          className="w-9 h-9 rounded-full bg-transparent border-2 border-[#9DA9AF] flex items-center justify-center text-[#9DA9AF] hover:bg-[#9DA9AF]/10 transition-colors"
                          aria-label="View more"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet/Mobile Layout */}
        <div className="elg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Card - Mobile with Lighter Blue Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 rounded-[24px] md:rounded-[32px] bg-[#3388FF] p-8 md:p-10 flex flex-col"
            style={showCardButtons ? { minHeight: "350px" } : undefined}
          >
            <div
              className={`flex flex-col h-full ${
                showCardButtons ? "justify-between" : "justify-start"
              }`}
            >
              <div>
                <div className="flex justify-end mb-6">
                  <img
                    src={aiCard.Image}
                    alt={aiCard.title}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-bold mb-3 text-white">
                  {aiCard.title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-white">
                  {aiCard.text}
                </p>
              </div>
              {showCardButtons && (
                <div className="flex items-center gap-2 mt-4">
                  <button className="bg-white text-[#3388FF] px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
                    See More
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-transparent border-[#65707B] flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                    aria-label="View more"
                  >
                    <ArrowIcon />
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Other Cards */}
          {the_grid.slice(1).map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className={`${
                card.bg_color
              } rounded-[24px] md:rounded-[32px] p-8 md:p-10 relative overflow-hidden ${
                card.backgrounds || ""
              }`}
              style={showCardButtons ? { minHeight: "350px" } : undefined}
            >
              {/* Pattern Background at Top Half */}
              {card.patternBg && (
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 bg-no-repeat bg-cover bg-top opacity-60 rounded-t-[24px] md:rounded-t-[32px]"
                  style={{ backgroundImage: `url(${card.patternBg})` }}
                />
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-end mb-6">
                  <img
                    src={card.Image}
                    alt={card.title}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div
                  className={`flex-1 flex flex-col ${
                    showCardButtons ? "justify-between" : "justify-start"
                  }`}
                >
                  <div>
                    <h3
                      className={`text-[24px] md:text-[28px] font-bold mb-3 ${card.header_color}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-[14px] md:text-[15px] leading-relaxed ${card.body_color}`}
                    >
                      {card.text}
                    </p>
                  </div>
                  {showCardButtons && (
                    <div className="flex items-center gap-2 mt-4">
                      <button
                        className={`${
                          index === 0
                            ? "bg-[#7400FF] text-white"
                            : index === 1
                            ? "bg-white text-[#032343]"
                            : index === 2
                            ? "bg-[#00B3FF] text-white"
                            : "bg-white text-[#2C3E50]"
                        } px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm`}
                      >
                        Learn More
                      </button>
                      <button
                        className="w-8 h-8 rounded-full bg-transparent border-2 border-[#9DA9AF] flex items-center justify-center text-[#9DA9AF] hover:bg-[#9DA9AF]/10 transition-colors"
                        aria-label="View more"
                      >
                        <ArrowIcon />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
