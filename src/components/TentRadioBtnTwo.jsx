import { useState } from "react";
import styles from "@/components/RadioBtn.module.css";

//BRING YOUR OWN
export default function TentRadioBtnTwo({ name, id, text, setTwoPers, setThreePers, tentOption, setTentOption }) {
  //const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className={`cursor-pointer mb-5 outline-1 outline hover:outline-[3px] outline-[var(--accent-color)] w-full md:w-full h-fit md:h-56 ${styles.checked} ${tentOption === "bringOwn" && "outline-[3px]"}`}>
        <label htmlFor={id} className="grid grid-rows-2 p-4 md:grid-rows-2 md:grid-cols-3 cursor-pointer  h-full w-full text-[var(--secondary-color)]">
          <div className="row-start-1 self-center w-fit h-fit flex items-center md:col-start-1 md:col-span-4">
            <input
              type="radio"
              className={`${styles.radio} w-5 md:w-6 h-5 md:h-6`}
              name={name}
              id={id}
              required
              onChange={() => {
                setTwoPers((old) => 0);
                setThreePers((old) => 0);
                setTentOption((old) => "bringOwn");
              }}
            />
            <p className="text-[var(--secondary-color)] text-xl md:text-4xl ml-4 h-fit">{text}</p>
          </div>
          <p className="row-start-2 self-start md:col-start-1 md:col-span-2">Bring your own tent to the festival and save money</p>
          <p className="row-start-2 md:row-start-1 md:row-span-2 md:col-start-3 text-3xl md:text-4xl self-end md:self-center justify-self-end ml-4">0,-</p>
        </label>
      </div>
    </>
  );
}

//Validerings fejl:
//div og p er ikke tilladt inde i et label
