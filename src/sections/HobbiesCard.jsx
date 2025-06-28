import Consuming from "../components/Consuming";
import cooking from "../assets/images/cooking.png";
import space from "../assets/images/space.jpg";
import football from "../assets/images/football-messi.jpeg";
import reading from "../assets/images/oldbooks.webp";

const HobbiesCard = () => {
  return (
    <div className="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-2 flex-1">
      <p className="text-[#EEEEEE] text-base">Hobbies</p>
      <div className="flex flex-wrap gap-8 consuming-section-grid">
        <Consuming
          mainImage={football}
          mainTitle="Football"
          subTitle="A average football player who loves to defend and admires Leo Messi"
          link="https://www.youtube.com/live/BgFdYcNbLvg?si=6VKaHzUelBxrNIcJ"
        />

        <Consuming
          mainImage={cooking}
          mainTitle="Cooking"
          title="10 Minute Pasta Recipes "
          subTitle="I hope this helps you too."
          link="https://youtu.be/BRm3n0lOstg?si=0Qu0aRYmwUoNKNTW"
        />
        <Consuming
          mainImage={reading}
          mainTitle="Reading"
          subTitle="Trying my best to be regular reader."
        />
        <Consuming
          mainImage={space}
          mainTitle="Cosmology Enthusiast"
          title="Quantum physics"
          subTitle="Probably lying on my bed and understanding."
          link="https://youtu.be/jANZxzetPaQ?si=bfMLa9q7RbXduyTe"
        />
      </div>
    </div>
  );
};

export default HobbiesCard;
