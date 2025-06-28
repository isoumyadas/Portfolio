const Skills = ({ skillName, skillIcon, techLink }) => {
  return (
    <div>
      <div className="flex gap-4 bg-[#353535] p-3 rounded-sm min-w-fit">
        <a href={techLink} target="_blank">
          <img
            src={skillIcon}
            alt={skillName}
            className="min-w-7 min-h-7 rounded-lg"
          />
        </a>
        <p className="text-[#EEEEEE] text-lg font-semibold">{skillName}</p>
      </div>
    </div>
  );
};

export default Skills;
