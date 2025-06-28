import * as motion from "motion/react-client";
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
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
        }}
        className="max-w-6xl mx-auto p-6 grid grid-cols-4 gap-8 tab-container"
      >
        <AboutMe />
        <ContactMeCard />
        <ProjectCard />
        <ConsumingCard />
        <HobbiesCard />
        <SkillsCard />
        <ExperienceCard />
        <ShitpostingCard />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
