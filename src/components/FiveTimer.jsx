import { useState, useEffect } from "react";

export default function FiveTimer() {
  const [rightNow, setRightNow] = useState(new Date().getTime());
  const [fiveMinutes, setFiveMinutes] = useState(new Date(rightNow + 5 * 60000));
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const distance = fiveMinutes - rightNow;

  useEffect(() => {
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, [distance]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      console.log("times up");
      location.reload();
    }
    const interval = setInterval(() => {
      setRightNow(new Date().getTime());

      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, [rightNow, minutes, seconds]);

  return (
    <div className="grid">
      <div className="flex gap-2 justify-self-end mb-10">
        <p className="text-lg md:text-3xl">{minutes} min</p>
        <p className="text-lg md:text-3xl">{seconds} sec</p>
      </div>
    </div>
  );
}
