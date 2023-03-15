import React from "react";
import Opening from "./Opening";

const openings = [
  {
    title: "Product Designer",
    body: "We are looking for a full-time product designer to join our team.",
    location: "Remote",
    type: "Full-time",
    href: "https://bani.zohorecruit.com/jobs/Careers/714028000000453003/Product-Designer?source=BaniAfrica",
  },
  {
    title: "Accountant",
    body: "We are looking for a full-time accountant to join our team.",
    location: "Remote",
    type: "Full-time",
    href: "https://bani.zohorecruit.com/jobs/Careers/714028000000453093/Accountant?source=BaniAfrica",
  },
  {
    title: "Compliance Officer",
    body: "We are looking for a full-time compliance officer to join our team.",
    location: "Remote",
    type: "Full-time",
    href: "https://bani.zohorecruit.com/jobs/Careers/714028000000453111/Compliance-Officer?source=BaniAfrica",
  },
];

const SectionOne = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-fit gap-12 lg:gap-14 my-[105px]">
      {openings.map((item, index) => (
        <Opening
          key={index + item.title}
          details={item}
          showBorder={index !== openings.length - 1}
        />
      ))}
      {openings.length < 1 && (
        <p className="text-grey-text font-light bani-title text-center leading-[1.85] italic">
          Sadly we have no available <br className="sm:hidden" /> positions.
          Please check <br />
          back soon...
        </p>
      )}
    </div>
  );
};

export default SectionOne;
