"use client";
import { useState, useEffect } from "react";
import styles from "@/components/RadioBtn.module.css";

//RadioBtn skal modtage
//Et name (dette skal være ens for de buttons der er i samme gruppe)
//Et id, der skal være unikt og som også bliver den tekst der vises i label
//En status, der er = "soldout" hvis knappen skal være disabled
export default function RadioBtn({ name, id, status, setChosenSpot, spotsAvail, text }) {
  const [isChecked, setIsChecked] = useState(false);

  // Find det objekt der passer med Id
  const idObject = spotsAvail.find((item) => item.area === id);

  // Den tager det valgte objekt og læser dens available-værdi
  const idObjectAvail = idObject && idObject.available;
  // console.log(idObjectAvail);

  //Hvis idObjectAvail er lig med 0, så sættes isDisabled = true ved input + css class'en "styles.disabled" vil blive tilføjet + et ekstra tekst vil dukke op
  const isDisabled = idObjectAvail === 0 ? true : false;

  return (
    <>
      <div className={`cursor-pointer mb-5 border hover:border-[3px] border-solid border-[var(--accent-color)] w-full md:w-80 h-28 md:h-44 ${styles.checked} ${isDisabled && styles.disabled} ${isChecked && "border-[3px]"}`}>
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
            />
            <p className="text-[var(--secondary-color)] text-xl md:text-4xl ml-4 h-fit">{text + idObjectAvail}</p>
          </div>
          {isDisabled ? "Sold out" : ""}
        </label>
      </div>
    </>
  );
}

//Validerings fejl:
//div og p er ikke tilladt inde i et label
