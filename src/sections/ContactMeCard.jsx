import Consuming from "../components/Consuming";

const ContactMeCard = () => {
  return (
    <div className="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-2 flex-1">
      <p className="text-[#EEEEEE] text-base">Contact</p>
      <div className="grid grid-cols-2 gap-7 mobile-skill-section-grid">
        <Consuming mainTitle="Resume" title="Read my resume" />
        <Consuming
          mainTitle="Linkedin"
          title="Connect with me"
          link="https://www.linkedin.com/in/soumyaranjan-dev/"
        />
        <Consuming
          mainTitle="Twitter"
          title="Mostly for learning or inspiration sometimes shitposting :)"
          link="https://x.com/sams_codespace"
        />
        <Consuming
          mainTitle="Email"
          title="Email me"
          //   link="mailto:soumyatweets51@gmail.com"
          link="https://mail.google.com/mail/?view=cm&to=soumyatweets51@gmail.com"
        />
      </div>
    </div>
  );
};

export default ContactMeCard;
