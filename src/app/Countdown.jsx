"use client";
import { useState } from "react";

export default function Countdown() {
  const [days, setDays] = useState(90);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(4);

  //Lav function der ændre states med et interval , der passer til deres enhed. måske useEffect eller det der der sørger for setInterval ikke kører flere gange
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}
