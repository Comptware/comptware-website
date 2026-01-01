import React from "react";

const SuccessStoryCard = ({
  company,
  tagline,
  description,
  tags,
  screenshots,
  bgColor,
  link,
}) => {
  // Determine if this is a desktop screenshot (single image) or mobile screenshots (multiple images)
  const isDesktop = screenshots.length === 1;

  return (
    <div
      className="w-full overflow-hidden"
      style={{ backgroundColor: bgColor || "#F7F7F7", minHeight: "500px" }}
    >
      <div className="p-8 md:p-12 h-full flex flex-col">
        {/* Top Section: Company Name and Tagline */}
        <div className="mb-6">
          {/* Company Name */}
          <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-2 uppercase tracking-wide">
            {company}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-md text-xs font-medium text-gray-700 border border-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content: Images on Left, Description on Right */}
        <div className="flex flex-col md:flex-row gap-6 flex-1">
          {/* Images Section - Left Side */}
          <div className="flex-shrink-0">
            {isDesktop ? (
              // Desktop Screenshot: 450px width, 250px height
              <img
                src={screenshots[0]}
                alt={`${company} desktop screenshot`}
                className="rounded-lg shadow-lg object-cover"
                style={{ width: "450px", height: "250px" }}
              />
            ) : (
              // Mobile Screenshots: 150px width, 300px height each, side by side
              <div className="flex gap-4 overflow-x-auto">
                {screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${company} screenshot ${index + 1}`}
                    className="rounded-lg shadow-lg object-cover flex-shrink-0"
                    style={{ width: "150px", height: "300px" }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Description Section - Right Side */}
          <div className="flex-1 flex flex-col justify-start">
            {/* Tagline */}
            <p className="text-[14px] md:text-[16px] text-gray-700 mb-4 uppercase tracking-wide font-medium">
              {tagline}
            </p>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed bani-title">
              {description}
            </p>

            {/* Optional Link */}
            {link && link !== "#" && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 group mt-6"
              >
                View Case Study
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
