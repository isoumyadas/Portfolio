import todoApp from "../assets/images/todo-react.png";
import nike from "../assets/images/nike.png";
import manage from "../assets/images/manage-landing.png";
import { Carousel } from "../components/ui/carousel";

const ProjectCard = () => {
  const slideData = [
    {
      title: "Todo applicatin using React, Redux Toolkit",
      button: "Demo",
      src: todoApp,
      demoClick: "https://todosammy.netlify.app/",
    },
    {
      title: "Manage Landing Page using HTML and Tailwind Css",

      src: nike,
    },
    {
      title: "Manage Landing Page using HTML and CSS",

      src: manage,
    },
  ];
  return (
    <div className="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 col-span-4 flex-1 pb-20 px-5 py-5 overflow-hidden">
      <p className="text-[#EEEEEE] text-base">Projects</p>
      <Carousel slides={slideData} />
    </div>
  );
};

export default ProjectCard;
