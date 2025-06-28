const Experience = ({ year, companyName, jobRole, location }) => {
  return (
    <div className="grid gap-10 grid-cols-4">
      <div className="text-[#999999] text-sm">
        {year === "Present" ? (
          <div className="bg-[#42FD55] text-[#09090B] rounded-full w-fit px-2 text-xs">
            {year}
          </div>
        ) : (
          year
        )}
      </div>
      <div className="leading-7 col-span-3">
        <p className="text-[#EEEEEE]">{jobRole}</p>

        {/* In future change this into anchor tag */}
        <p className="text-[#EEEEEE] cursor-pointer">{companyName}</p>

        <p className="text-[#999999] ">{location}</p>
      </div>
    </div>
  );
};

export default Experience;
