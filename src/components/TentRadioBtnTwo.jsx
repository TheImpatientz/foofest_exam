import { useState } from "react";
import styles from "@/components/RadioBtn.module.css";

//RadioBtn skal modtage
//Et name (dette skal være ens for de buttons der er i samme gruppe)
//Et id, der skal være unikt og som også bliver den tekst der vises i label
export default function TentRadioBtnTwo({ name, id, text, setTwoPers, setThreePers, setBringYourOwn }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className={`cursor-pointer mb-5 border hover:border-[3px] border-solid border-[var(--accent-color)] w-full md:w-80 h-28 md:h-44 ${styles.checked} ${isChecked && "border-[3px]"}`}>
        <label htmlFor={id} className="cursor-pointer h-full w-full flex flex-col items-center justify-center text-[var(--secondary-color)]">
          <div className="w-fit h-fit flex items-center">
            <input
              type="radio"
              className={`${styles.radio} w-5 md:w-6 h-5 md:h-6`}
              name={name}
              id={id}
              required
              onChange={() => {
                setTwoPers((old) => 0);
                setThreePers((old) => 0);
                setBringYourOwn((old) => !old);
                setIsChecked((old) => !old);
              }}
            />
            <p className="text-[var(--secondary-color)] text-xl md:text-4xl ml-4 h-fit">{text}</p>
          </div>
        </label>
      </div>
    </>
  );
}

//Validerings fejl:
//div og p er ikke tilladt inde i et label
