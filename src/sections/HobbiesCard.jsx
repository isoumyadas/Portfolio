import Consuming from "../components/Consuming";
import cooking from "../assets/images/cooking.png";
import editing from "../assets/images/editing.webp";
import football from "../assets/images/liverpool.jpeg";
import reading from "../assets/images/oldbooks.webp";

const HobbiesCard = () => {
  return (
    <div className="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-2">
      <p className="text-[#EEEEEE] text-base">Hobbies</p>
      <div className="flex flex-wrap gap-8">
        <Consuming
          mainImage={football}
          mainTitle="Football"
          title="Liverpool FC"
          subTitle="24-25 League Winners - We are the Champions #YNWA"
          link="https://www.youtube.com/live/BgFdYcNbLvg?si=6VKaHzUelBxrNIcJ"
        />

        <Consuming
          mainImage={cooking}
          mainTitle="Cooking - Love Italian Food"
          title="10 Minute Pasta Recipes "
          subTitle="Your Food Lab"
          link="https://youtu.be/BRm3n0lOstg?si=0Qu0aRYmwUoNKNTW"
        />
        <Consuming mainImage={reading} mainTitle="Reading" />
        <Consuming
          mainImage={editing}
          mainTitle="Editing"
          title="Well I'm a newbie!"
          subTitle="AkashKRavi"
          link="https://youtu.be/vv6mtkEwGAU?si=2KCs33vQS55k_SJa"
        />
      </div>
    </div>
  );
};

export default HobbiesCard;
