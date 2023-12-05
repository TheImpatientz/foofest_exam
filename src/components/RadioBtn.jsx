"use client";
import { useState } from "react";
import styles from "@/components/RadioBtn.module.css";

//RadioBtn skal modtage
//Et name (dette skal være ens for de buttons der er i samme gruppe)
//Et id, der skal være unikt og som også bliver den tekst der vises i label
//En status, der er = "soldout" hvis knappen skal være disabled
export default function RadioBtn({ name, id, status }) {
  const [isChecked, setIsChecked] = useState(false);
  //Hvis status = soldout, vil disabled blive true ved input + css class'en "styles.disabled" vil blive tilføjet + et ekstra tekst vil dukke op
  const isDisabled = status === "soldout" ? true : false;
  return (
    <>
      <div className={`border hover:border-[3px] border-solid border-[var(--accent-color)] w-full md:w-80 h-28 md:h-44 ${styles.checked} ${status === "soldout" ? styles.disabled : ""} ${isChecked && "border-[3px]"}`}>
        <label htmlFor={id} className="h-full w-full flex flex-col items-center justify-center text-[var(--secondary-color)]">
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
              }}
            />
            <p className="text-[var(--secondary-color)] text-xl md:text-4xl ml-4 h-fit">{id}</p>
          </div>
          {status === "soldout" ? "Sold out" : ""}
        </label>
      </div>
    </>
  );
}

//Validerings fejl:
//div og p er ikke tilladt inde i et label
