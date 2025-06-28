import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return;
  }, []);
  return (
    <div className="text-[#EEEEEE] text-sm flex justify-between w-full col-span-4">
      <p>© Soumyaranjan Das</p>
      <p>{time}</p>
      {/* Later work on this */}
      {/* <button>Dark/Light mode</button> */}
    </div>
  );
};

export default Footer;
