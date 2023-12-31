"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import styles from "@/components/Cardinfo.module.css";
import mobilepayLogo from "@/logo/mobilepay.svg";
import visaLogo from "@/logo/visaIcon.svg";
import mastercardLogo from "@/logo/mastercardLogo.svg";

import Labelinput from "./Labelinput";

export default function Cardinfo() {
  //useRef bruges som reference til bestemte inputfelter, til at skifte fokus
  const expiryDateRef = useRef(null);
  const cvcRef = useRef(null);

  //Holder styr på om hvilken payment der er valgt
  const [isChecked, setIsChecked] = useState("card");
  const defaultCheck = isChecked === "card" ? true : false;

  //cardNumberLayout sørger for feltet laver mellemrum mellem hver fjerde tal og skifter fokus ved fuld længde
  function cardNumberLayout(e) {
    let value = e.target.value; //Tager hvad der er skrevet i feltet indtil videre
    value = value.replace(/[^0-9\s]/g, ""); //Hvis brugeren prøver at skrive tegn ind, der ikke er et nummer, vil det bliver erstattet med ingenting (en tom string "")

    // Ved hver fjerde tal skal der indsættes mellemrum
    if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) {
      value = e.target.value + " ";
    }

    e.target.value = value; // Opdatere input´s value

    //Hvis den fulde længde i et kortnummer er nået skal fokus skifte til næste felt. (e.key !== "Backspace" sørger for der kan slettes i feltet selvom der er en fuld længde)
    if (e.key !== "Backspace" && e.target.value.length === 19) {
      expiryDateRef.current.focus();
    }
  }

  //dateLayout sørger for at expiry feltet har et / i midten og skifter fokus til næste felt ved fuld længde
  function dateLayout(e) {
    //Sætter / efter tal nummer to
    // if (e.target.value.length === 0) {
    //   e.target.value = e.target.value + "M/YY";
    // }
    if (e.target.value.length === 2) {
      e.target.value = e.target.value + "/";
    } else if (e.target.value.length === 5 && e.key !== "Backspace") {
      //Skifter fokus når der er fire tal + /
      cvcRef.current.focus();
    }
    //Hvis brugeren vil slette, skal / forsvinde
    if (e.target.value.length > 2 && e.key === "Backspace") {
      e.target.value = e.target.value.replaceAll("/", "");
    }
  }

  return (
    <section className="flex flex-col">
      <div className={`pl-4 mb-4 outline-1 outline hover:outline-[3px] focus:outline-[3px] outline-[var(--accent-color)] w-full md:w-full h-28 md:h-44 ${styles.checked} ${isChecked === "mobile" && "outline-[3px]"}`}>
        <label htmlFor="mobile" className="h-full w-full flex items-center justify-center text-[var(--secondary-color)]">
          <div className="w-full h-fit flex items-center">
            <input
              type="radio"
              className={`${styles.radio} w-5 md:w-6 h-5 md:h-6`}
              name="payment"
              id="mobile"
              required
              onChange={() => {
                setIsChecked("mobile");
              }}
            />
            <p className="text-[var(--secondary-color)] text-xl lg:text-4xl ml-4 h-fit">MOBILEPAY</p>
          </div>
          <Image src={mobilepayLogo} alt="Mobilepay logo" className="w-20 lg:w-28 mr-3" />
        </label>
      </div>
      <div className={`pl-4 mb-4 outline-1 outline hover:outline-[3px] focus:outline-[3px] outline-[var(--accent-color)] w-full md:w-full h-28 md:h-44 ${styles.checked} ${isChecked === "card" && "outline-[3px] h-fit md:h-fit"}`}>
        <label htmlFor="card" className="flex items-center justify-center text-[var(--secondary-color)] w-full h-28 md:h-44">
          <div className="w-full h-fit flex items-center">
            <input
              type="radio"
              className={`${styles.radio} w-5 md:w-6 h-5 md:h-6`}
              name="payment"
              id="card"
              checked={defaultCheck}
              required
              onChange={() => {
                setIsChecked("card");
              }}
            />
            <p className="text-[var(--secondary-color)] text-xl lg:text-4xl ml-4 h-fit">CARD PAYMENT</p>
          </div>
          <div className="flex mr-7">
            <Image src={visaLogo} alt="Visa logo" className="w-8 lg:w-16 mr-1 md:mr-5" />
            <Image src={mastercardLogo} alt="Mastercard logo" className="w-8 lg:w-16" />
          </div>
        </label>
        {/* Hvis card payment er valgt skal nedestående dukke op */}
        {isChecked === "card" && (
          <div className="flex flex-col px-4 w-full">
            <Labelinput forId="cardname" id="cardname" label="CARD HOLDER NAME" placeholder="PETER THOMSON" type="text" extraStyle="w-full" />
            <Labelinput forId="cardnumber" id="cardnumber" placeholder="2571 6584 3321 5869" label="CARD NUMBER" type="text" extraStyle="w-full" maxLength={19} minLength={19} onKeyDown={cardNumberLayout} keyboardtype="numeric" />
            <div className="flex justify-between w-full max-w-lg">
              <Labelinput forId="expirydate" id="expirydate" label="EXPIRY DATE" type="text" placeholder="MM/YY" extraStyle="w-40" refName={expiryDateRef} maxLength={5} minLength={5} onKeyDown={dateLayout} />
              <Labelinput forId="cvc" id="cvc" label="CVV / CVC" type="text" placeholder="EX. 568" extraStyle="w-24" refName={cvcRef} maxLength={3} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

//Cardnumber input development
{
  /* <div className={`flex flex-col my-6 max-w-lg`}>
          <label className="text-[var(--secondary-color)] semibold" htmlFor="cardnumber">
            CARD NUMBER
          </label>
          <input
            className="bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 outline focus:outline-[3px] outline-[var(--accent-color)]"
            id="cardnumber"
            name="cardnumber"
            type="numeric"
            onKeyDown={cardNumberLayout}
            maxLength={19}
            inputMode="numeric"
          />
        </div> */
}
