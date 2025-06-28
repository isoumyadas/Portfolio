import Consuming from "../components/Consuming";
import getEpicShitDone from "../assets/images/get-epic-shit-done.jpg";
import atomicHabits from "../assets/images/Atomic-habits.jpg";
import andrewHuberman from "../assets/images/andrew-huberman.jpg";
import theNeighbourhood from "../assets/images/The-neighbourhood.jpg";
import cas from "../assets/images/cas.webp";
import naval from "../assets/images/naval-ravikant.jpeg";
import myPlaylist from "../assets/images/Jim-pam.jpeg";

const ConsumingCard = () => {
  return (
    <div className="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-2 flex-1">
      <div className="flex flex-col gap-4">
        <p className="text-[#EEEEEE] text-base">Consuming</p>
        <div className="flex flex-wrap gap-8">
          <Consuming
            mainImage={getEpicShitDone}
            mainTitle="Book"
            title="Get Epic Shit Done"
            subTitle="Ankur Warikoo"
            link="https://amzn.in/d/eMQZFOE"
          />
          <Consuming
            mainImage={atomicHabits}
            mainTitle="Book"
            title="Atomic Habits"
            subTitle="James Clear"
            link="https://amzn.in/d/aMN33bq"
          />
          <Consuming
            mainImage={naval}
            mainTitle="Podcast"
            title="44 Harsh Truths About Human Nature"
            subTitle="Naval Ravikant"
            link="https://youtu.be/KyfUysrNaco?si=0xw1JHolo6pDZ5Hd"
          />
          <Consuming
            mainImage={andrewHuberman}
            mainTitle="Podcast"
            title="How to Grow From Doing Hard Things"
            subTitle="Andrew Huberman"
            link="https://youtu.be/SsKkZTjUJEk?si=kHtvnPr2AVxWkHcc"
          />
          <Consuming
            mainImage={theNeighbourhood}
            mainTitle="Music"
            title="I Love You"
            subTitle="The Neighbourhood"
            link="https://open.spotify.com/album/4xkM0BwLM9H2IUcbYzpcBI?si=TrsAG-TaS7eQnmbcaRzaxA"
          />
          <Consuming
            mainImage={cas}
            mainTitle="Music"
            title="X's"
            subTitle="Cigarettes After Sex"
            link="https://open.spotify.com/album/2nVPmbiBiR3CrAqDnw1inZ?si=bijlyOXjRCW8htvwIcmzCg"
          />
          <Consuming
            mainImage={myPlaylist}
            mainTitle="Music"
            title="Minee'd'space"
            subTitle="My Playlist | Give a like :} "
            link="https://open.spotify.com/playlist/5SfzzHMU0GLCNN3480etZc?si=6SS-3oEORaWuf8357qAO0A"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsumingCard;
