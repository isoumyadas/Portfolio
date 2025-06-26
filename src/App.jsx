import { BackgroundBeams } from "./components/ui/background-beams";
import myProfile from "./assets/images/Image1.jpg";
import CardWithLinks from "./components/CardWithLinks";

function App() {
  return (
    <div className="bg-[#09090B] w-full h-screen font-(family-name:--font-outfit)">
      <div className="max-w-6xl mx-auto py-6 flex gap-4">
        <div className="bg-[#222222] w-xl max-h-fit rounded-3xl flex flex-col gap-8 p-5">
          <div className="flex items-center gap-7 ">
            <img src={myProfile} className="h-full w-22 rounded-full" />
            <div>
              <h1 className="text-[#EEEEEE] text-xl">
                Soumyaranjan Das (Sam){" "}
              </h1>
              <p className="text-[#999999] text-base">Software Engineer</p>
            </div>
          </div>
          <div className="leading-6 flex flex-col gap-1">
            <p className="text-[#EEEEEE] text-sm">About</p>
            <p className="text-[#999999] text-base">
              Hey, I’m a full-stack software engineer who enjoys building
              thoughtful, user-focused web applications. I love learning and
              solving problems through code, always aiming to make things that
              are both useful and meaningful. When I’m not coding, you’ll
              probably find me watching/playing football, sketching or admiring
              good design, or reading something insightful.
            </p>
          </div>
        </div>
        <CardWithLinks />
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
}

export default App;
