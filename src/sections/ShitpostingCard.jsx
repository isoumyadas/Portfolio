import { useEffect, useState } from "react";
import { WobbleCard } from "../components/ui/wobble-card";

const ShitpostingCard = () => {
  const [quote, setQuote] = useState("");
  const [localQuote, setLocalQuote] = useState("");

  const today = new Date().toDateString();

  useEffect(() => {
    const fetchRandomQuotes = async () => {
      const today = new Date().toISOString().split("T")[0];

      const cached = JSON.parse(localStorage.getItem("dailyQuote"));

      if (cached && cached.date === today) {
        setLocalQuote(cached.quote);
        return;
      }

      try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();
        console.log("data", data);

        const quote = `"${data.quote}"  —  ${data.author}`;

        localStorage.setItem(
          "dailyQuote",
          JSON.stringify({
            date: today,
            quote,
          })
        );

        setQuote(quote);
      } catch (error) {
        console.log("Error while fetching: ", error);
      }
    };

    fetchRandomQuotes();
  }, []);

  return (
    <WobbleCard containerClassName="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-2">
      <div>
        <div className="flex flex-col gap-8 ">
          <p className=" text-[#EEEEEE] text-base">Quote of the Day</p>

          <p className="text-[#999999]">{quote ? quote : localQuote}</p>

          <p className="text-[#999999] text-sm">{today}</p>
        </div>
      </div>
    </WobbleCard>
  );
};

export default ShitpostingCard;
