import Experience from "../components/Experience";

const ExperienceCard = () => {
  return (
    <>
      <div className="bg-[#222222] max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-2 flex-1">
        <p className="text-[#EEEEEE] text-base">Experience</p>
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

export default ExperienceCard;
