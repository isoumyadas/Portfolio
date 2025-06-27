import { useEffect, useState } from "react";

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
        const res = await fetch("https://api.quotable.io/quotes/random");
        const data = await res.json();

        console.log("data", data[0].content);

        const quote = `"${data[0].content}"  —  ${data[0].author}`;

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
    <div className="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-2">
      <div className="flex flex-col gap-8 ">
        <p className=" text-[#EEEEEE] text-base">Quote of the Day</p>

        <p className="text-[#999999]">{quote ? quote : localQuote}</p>

        <p className="text-[#999999] text-sm">{today}</p>
      </div>
    </div>
  );
};

export default ShitpostingCard;
