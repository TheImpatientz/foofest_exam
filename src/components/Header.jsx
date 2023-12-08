"use client";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import Image from "next/image";

import foofestLogo from "@/logo/logo.svg";
import userIcon from "@/logo/usericon.svg";
import OurLink from "./OurLink";

//Burgermenu icon + animation installeret fra https://hamburger-react.netlify.app (installeret 5/12/23)

export default function Header() {
  //isOpen statet skifter til true, når burger menuen åbner
  const [isOpen, setOpen] = useState(false);
  const color = isOpen ? "#292d32" : "#f6f1f1";
  return (
    <header className={`flex justify-between ml-2 relative ${isOpen && "fixed"}`}>
      <a href="/" className="my-2">
        {" "}
        <Image src={foofestLogo} alt="Foofest logo" className="md:h-28 md:w-28" />
      </a>

      <div className="flex items-center h-fit my-2">
        <Image src={userIcon} alt="Foofest logo" className="md:h-12 md:w-12 cursor-pointer" />

        <div className={`z-20 ${isOpen && "fixed right-0"}`}>
          <Hamburger toggled={isOpen} toggle={setOpen} color={color} />
        </div>
      </div>

      <nav className={` ${isOpen ? "" : "translate-x-full"} flex items-center justify-center fixed top-0 right-0 transition-transform duration-500 ease-in-out bg-[var(--accent-color)] text-[var(--primary-color)] w-full md:w-1/2 h-screen z-10`}>
        <ul className="flex flex-col place-content-center mb-40 w-fit">
          <li className="w-full h-auto">
            <OurLink size="big" text="Tickets" color="dark" href="/tickets" />
          </li>
          <li>
            <OurLink size="big" text="Program" color="dark" href="/program" />
          </li>
          <li className="w-full h-auto">
            {" "}
            <OurLink size="big" text="Camping" color="dark" href="/" />
          </li>
          <li>
            {" "}
            <OurLink size="big" text="About us" color="dark" href="/" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
