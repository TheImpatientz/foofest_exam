import { useState } from "react";

export default function Plusminus({ updateTicketAdd, updateTicketSubstract, ticketArray }) {
  //state der holder styr på ticket antal
  const [counter, setCounter] = useState(0);

  //denne funktion sørger for, at der sker to ting, når der sker et klik. Den sørger for at der bliver lagt 1 til i regular ticket i Ticket-arrayet, og så bliver der også lagt 1 til vores counter
  function handleClickAdd() {
    //hér kalder vi regularTicketAdd, som er sat som en prop
    updateTicketAdd();

    // add to counter
    function add() {
      setCounter((old) => old + 1);
    }
    add();
  }

  //denne funktion sørger for, at der sker to ting, når der sker et klik. Den sørger for at der bliver trukket 1 fra i regular ticket i Ticket-arrayet, og så bliver der også trukket 1 fra vores counter
  function handleClickSubstract() {
    //hér kalder vi regularTicketSubstract, som er sat som en prop
    updateTicketSubstract();

    //substract from counter
    const substract = () => {
      setCounter((old) => old - 1);
    };
    substract();
  }

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
      {/* i onClick eventet kan man se, at handleClickSubstract/Add er tilføjet, så funktionen bliver kaldt onClick */}
      <div className="flex place-items-center">
        <button type="button" disabled={disabled} onClick={handleClickSubstract} className="mr-3">
          <svg width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2L12.5 2" stroke={strokecolor} strokeWidth="4" />
          </svg>
        </button>
        <div className="grid w-7 h-7 bg-[var(--accent-color)] rounded-full">
          <p className="text-black ml-auto mr-auto mt-auto mb-auto">{counter}</p>
        </div>

        <button type="button" onClick={handleClickAdd} className="ml-3">
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9211 5.04V8.56H8.48109V13.4H4.52109V8.56H0.0810938V5.04H4.52109V0.199998H8.48109V5.04H12.9211Z" fill="#C5EF1A" />
          </svg>
        </button>
      </div>
    </>
  );
}
