//"use client" var nødvendig for at bruge plus-minus komponten
"use client";

import { useState } from "react";

export default function Plusminus() {
  //state der holder styr på ticket antal
  const [counter, setCounter] = useState(0);
  //add to counter
  const add = () => {
    setCounter((old) => old + 1);
  };
  //substract from counter
  const substract = () => {
    setCounter((old) => old - 1);
  };
  //Jeg deklarerer lige strokecolor, som er værdien der bliver sat nede ved stroke i svg'en. Minustegnet bliver grå, hvis værdien er 0, og hvis værdien er over 0, bliver tegnet grønt
  let strokecolor;
  //Jeg deklarerer disabled, så hvis værdien er lig med 0, disabler den minustegnet (knappen), så vi ikke kan få negative værdier
  let disabled;
  if (counter === 0) {
    strokecolor = "#C3C4C2";
    disabled = true;
  } else if (counter > 0) {
    strokecolor = "#C5EF1A";
    disabled = false;
  }
  return (
    <>
      {/* Start plus-minus komponent */}
      <div className="flex place-items-center">
        <button disabled={disabled} onClick={substract} className="mr-3">
          <svg width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2L12.5 2" stroke={strokecolor} stroke-width="4" />
          </svg>
        </button>
        <div className="grid w-9 h-9 bg-[var(--accent-color)] rounded-full">
          <p className="text-black ml-auto mr-auto mt-auto mb-auto">{counter}</p>
        </div>
        <button onClick={add} className="ml-3">
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9211 5.04V8.56H8.48109V13.4H4.52109V8.56H0.0810938V5.04H4.52109V0.199998H8.48109V5.04H12.9211Z" fill="#C5EF1A" />
          </svg>
        </button>
      </div>
      {/* Slut plus-minus komponent */}
    </>
  );
}
