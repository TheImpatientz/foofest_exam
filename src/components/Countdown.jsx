"use client";
import { useState, useEffect } from "react";

//Countdown er lavet med hjælp fra dette eksempel: https://www.w3schools.com/howto/howto_js_countdown.asp (besøgt 7/12/23)

export default function Countdown() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    //Denne useEffect() køres én gang når siden loader
    //console.log("checking countdown first time");
    // countDownDate sætter vi til at være hvornår festivallen skal foregå
    //Når man benytter getTime() finder man det antal millisekunder der er gået siden January 1, 1970 00:00:00
    const countDownDate = new Date("February 5, 2024 12:00:00").getTime();

    // now sættes til at være dagens dato
    //Igen bruges der getTime() til at få antal millisekunder
    const now = new Date().getTime();

    // Når vi så har antallet af millisekunder fra festivallen og dagens dato, kan vi finde hvor lang tid der er i mellem.
    const distance = countDownDate - now;

    //Så sættes vores states til at være udregning af antal millisekunder fra i dag til festivallen i dage, timer, minutter og sekunder
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, []);

  useEffect(() => {
    //Denne useEffect() kører i et interval hvert sekund (til at opdatere states)
    const interval = setInterval(() => {
      //console.log("checking countdown again");
      const countDownDate = new Date("February 5, 2024 12:00:00").getTime();

      const now = new Date().getTime();

      const distance = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      //Vi returnere en funktion, der stopper intervallet, så vi undgår at flere intervaller bliver sat i gang hele tiden
      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="my-6 grid grid-flow-col gap-5 text-center auto-cols-max text-[var(--secondary-color)] justify-center">
      <div className="flex flex-col">
        <span className="countdown font-mono text-3xl md:text-5xl">
          <span style={{ "--value": days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-3xl md:text-5xl">
          <span style={{ "--value": hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-3xl md:text-5xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-3xl md:text-5xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}
