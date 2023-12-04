"use client";
import { useRef } from "react";
export default function Dob() {
  //Her benyttes useRef, der kan bruges til at manipulere dom'en.
  //Der er her lavet to forskellige referencer, der så er sat på month's input og year's input
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  function changeFocus(e) {
    //Hvis den maksimale længde er nået, skal focus gå til næste felt. Den bliver kaldt når der sker ændringer i feltet
    if (e.target.value.length == e.target.maxLength) {
      //Her spørg vi om det er day input der har kaldt funktionen eller month
      if (e.target.name === "day") {
        //Her tages der fat i monthRef's current, hvilket er i lig med det dom element den er sat på. Så her er det months's inputfelt.
        //Der sættes focus på month
        monthRef.current.focus();
      } else if (e.target.name === "month") {
        yearRef.current.focus();
      }
    }
  }
  return (
    <div className="flex flex-row gap-4 max-w-lg justify-between">
      <div className="flex flex-col shrink  my-6 w-1/4">
        <label className="text-[var(--secondary-color)] w-fit semibold" htmlFor="day">
          DAY
        </label>
        <input className="w-full bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 border focus:border-[3px] border-[var(--accent-color)]" id="day" placeholder="dd" name="day" type="text" maxLength="2" onChange={changeFocus} />
      </div>
      <div className="flex flex-col shrink my-6 w-1/4">
        <label className="text-[var(--secondary-color)] w-fit semibold" htmlFor="month">
          MONTH
        </label>
        <input
          className="w-full bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 border focus:border-[3px] border-[var(--accent-color)]"
          id="month"
          placeholder="mm"
          name="month"
          type="text"
          maxLength="2"
          ref={monthRef}
          onChange={changeFocus}
        />
      </div>
      <div className="flex flex-col shrink my-6 w-2/4">
        <label className="text-[var(--secondary-color)] w-fit semibold" htmlFor="year">
          YEAR
        </label>
        <input className="w-full bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 border focus:border-[3px] border-[var(--accent-color)]" id="year" placeholder="yyyy" name="year" type="text" maxLength="4" ref={yearRef} />
      </div>
    </div>
  );
}
