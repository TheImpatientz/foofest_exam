"use client";
import { useState, useEffect } from "react";
import styles from "@/components/RadioBtn.module.css";

//RadioBtn skal modtage
//Et name (dette skal være ens for de buttons der er i samme gruppe)
//Et id, der skal være unikt og som også bliver den tekst der vises i label
export default function RadioBtn({ name, id, chosenSpot, setChosenSpot, spotsAvail, text, ticketAmount }) {
  const [isChecked, setIsChecked] = useState(false);

  // Find det objekt der passer med Id
  const idObject = spotsAvail.find((item) => item.area === id);

  // Den tager det valgte objekt og læser dens available-værdi
  const idObjectAvail = idObject && idObject.available;
  //console.log(idObjectAvail);

  //Hvis idObjectAvail er lig med 0, så sættes isDisabled = true ved input + css class'en "styles.disabled" vil blive tilføjet + et ekstra tekst vil dukke op
  let isDisabled = idObjectAvail === 0 ? true : false;
  //Hvis idObjectAvail er mindre end den valgte mængde billetter, så skal disabled=true
  if (idObjectAvail < ticketAmount) {
    isDisabled = true;
  }
  //console.log(id, isChecked);

  return (
    <>
      <div className={`cursor-pointer mb-5 border ${!isDisabled && "hover:border-[3px]"} border-solid border-[var(--accent-color)] w-full h-28 md:h-44 ${styles.checked} ${isDisabled && styles.disabled} ${chosenSpot === id && "border-[3px]"}`}>
        <label htmlFor={id} className="cursor-pointer h-full w-full flex flex-col items-center justify-center text-[var(--secondary-color)]">
          <div className="w-fit h-fit flex items-center">
            <input
              type="radio"
              className={`${styles.radio} w-5 md:w-6 h-5 md:h-6`}
              name={name}
              id={id}
              disabled={isDisabled}
              required
              onChange={() => {
                setIsChecked((old) => !old);
                setChosenSpot(id);
              }}
              value={id}
            />
            <p className="text-[var(--secondary-color)] text-xl md:text-4xl ml-4 h-fit">{text}</p>
          </div>
          {isDisabled ? "Sold out" : ""}
        </label>
      </div>
    </>
  );
}

//Validerings fejl:
//div og p er ikke tilladt inde i et label
