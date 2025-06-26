import React from "react";
import Experience from "./Experience";

const CardWithLinks = () => {
  return (
    <>
      <div className="bg-[#222222] w-lg max-h-fit rounded-3xl flex flex-col gap-8 p-5">
        <p className="text-[#EEEEEE] text-sm">Experience</p>
        <Experience
          year="Present"
          companyName=""
          jobRole="Self Study"
          location="Mumbai, India"
        />
        <Experience
          year="2023"
          companyName="Algoris"
          jobRole="Software Engineer"
          location="Gujarat, India"
        />
      </div>
    </>
  );
};

export default CardWithLinks;
