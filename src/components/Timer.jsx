"use client";
import { useState, useEffect } from "react";

//Countdown er lavet med hjælp fra dette eksempel: https://www.w3schools.com/howto/howto_js_countdown.asp (besøgt 7/12/23)

export default function Timer() {
  //   const [minutes, setMinutes] = useState(5);
  //   const [seconds, setSeconds] = useState(300);
  //   function startTimer() {
  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  // const now = new Date().getMinutes();
  // const later = now + 5;
  // setMinutes(Math.floor((later % (1000 * 60 * 60)) / (1000 * 60)));
  // setSeconds(Math.floor((later % (1000 * 60)) / 1000));
  // console.log(later);
  // setInterval(function () {
  //     var d = new Date(); //get current time
  //     var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
  //     var fiveMin = 60 * 5; //five minutes is 300 seconds!
  //     var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
  //     var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss
  //     document.getElementById('test').innerHTML = result;
  // }, 500)
  //   }

  //   useEffect(() => {
  //Denne useEffect() kører i et interval hvert sekund (til at opdatere states)
  // const interval = setInterval(() => {
  //   console.log("hallo");
  //   setSeconds((o) => o - 1);
  //Vi returnere en funktion, der stopper intervallet, så vi undgår at flere intervaller bliver sat i gang hele tiden
  //       return () => {
  //         clearInterval(interval);
  //       };
  //     }, 1000);
  //   }, []);
  //startTimer();
  return (
    // <div className="my-6 grid grid-flow-col gap-5 text-center auto-cols-max text-[var(--secondary-color)] justify-center">
    //   <div className="flex flex-col">
    //     <span className="countdown font-mono text-sm md:text-md">
    //       <span style={{ "--value": minutes }}></span>
    //     </span>
    //     :
    //   </div>
    //   <div className="flex flex-col">
    //     <span className="countdown font-mono text-sm md:text-md">
    //       <span style={{ "--value": seconds }}></span>
    //     </span>
    //   </div>
    // </div>
    <div className="Timer">
      <p>{counter}</p>
    </div>
  );
}
