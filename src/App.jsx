import ExperienceCard from "./sections/ExperienceCard";
import AboutMe from "./sections/AboutMe";
import SkillsCard from "./sections/SkillsCard";
import ConsumingCard from "./sections/ConsumingCard";
import HobbiesCard from "./sections/HobbiesCard";
import ContactMeCard from "./sections/ContactMeCard";
import ShitpostingCard from "./sections/ShitpostingCard";
import Footer from "./sections/Footer";
import ProjectCard from "./sections/ProjectCard";

function App() {
  return (
    <div className="bg-[#09090B] w-full font-(family-name:--font-outfit)">
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-4 gap-8">
        <AboutMe />
        <ExperienceCard />
        <SkillsCard />
        <ConsumingCard />
        <HobbiesCard />
        <ProjectCard />
        <ContactMeCard />
        <ShitpostingCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
