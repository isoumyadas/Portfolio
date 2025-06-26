import React from "react";

const Experience = ({ year, companyName, jobRole, location }) => {
  return (
    <div className="grid gap-10 grid-cols-4">
      <p className="text-[#999999] text-sm">{year}</p>
      <div className="leading-7 col-span-3">
        <p className="text-[#EEEEEE]">{jobRole}</p>

        {/* In future change this into anchor tag */}
        <p className="text-[#EEEEEE] cursor-pointer">{companyName}</p>

        <p className="text-[#999999] text-sm">{location}</p>
      </div>
    </div>
  );
};

export default Experience;
