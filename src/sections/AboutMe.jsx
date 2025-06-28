import myProfile from "../assets/images/Image1.jpg";

const AboutMe = () => {
  return (
    <div className="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-2 flex-1">
      <div className="flex items-center gap-7 ">
        <img
          src={myProfile}
          className="h-full w-22 rounded-full"
          alt="soumya's-profile"
        />
        <div>
          <h1 className="text-[#EEEEEE] text-xl">Soumyaranjan Das (Sam) </h1>
          <p className="text-[#999999] text-base">Software Engineer</p>
        </div>
      </div>
      <div className="leading-6 flex flex-col gap-1">
        <p className="text-[#EEEEEE] text-base">About</p>
        <p className="text-[#999999] text-base">
          Hey, I’m a full-stack software engineer who enjoys building
          thoughtful, user-focused web applications. I love learning and solving
          problems through code, always aiming to make things that are both
          useful and meaningful. When I’m not coding, you’ll probably find me
          watching/playing football, admiring good design, or reading something
          insightful.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
