import upRightArrow from "../assets/upright-arrow.svg";

const Consuming = ({ mainImage, mainTitle, title, subTitle, link }) => {
  const checkingConditions = () => {
    if (mainTitle === "Book") {
      return "w-15 h-25";
    } else if (
      mainTitle === "Resume" ||
      mainTitle === "Twitter" ||
      mainTitle === "Linkedin" ||
      mainTitle === "Email"
    ) {
      return null;
    } else {
      return "w-15 h-15";
    }
  };
  return (
    <div
      className={
        mainTitle === "Resume" ||
        mainTitle === "Twitter" ||
        mainTitle === "Linkedin" ||
        mainTitle === "Email"
          ? "gap-1"
          : "flex gap-4 items-center"
      }
    >
      <img
        src={
          mainTitle === "Resume" ||
          mainTitle === "Twitter" ||
          mainTitle === "Linkedin" ||
          mainTitle === "Email"
            ? null
            : mainImage
        }
        alt={
          mainTitle === "Reading" ||
          mainTitle === "Resume" ||
          mainTitle === "Twitter" ||
          mainTitle === "Linkedin" ||
          mainTitle === "Email"
            ? null
            : title
        }
        // className={mainTitle === "Book" ? "w-15 h-25" : "w-15 h-15"}
        className={checkingConditions()}
        style={{ objectFit: "cover" }}
      />
      <div>
        <a
          className="hover:underline text-[#EEEEEE] flex gap-2 w-fit"
          href={link}
          target="_blank"
        >
          {mainTitle}
          <img
            src={mainTitle === "Reading" ? null : upRightArrow}
            alt={mainTitle === "Reading" ? null : title}
            className={
              mainTitle === "Reading" ? null : "w-4 hover:animate-bounce"
            }
          />
        </a>
        <p className="text-[#999999]">{title}</p>
        <p className="text-[#999999]">{subTitle}</p>
      </div>
    </div>
  );
};

export default Consuming;
