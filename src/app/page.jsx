import Image from "next/image";

import styles from "@/app/landing.module.css";

import foofestLogo from "@/logo/logo.svg";
import forrestPic from "@/img/forrest.png";
import partyPic from "@/img/party.png";
import campingPic from "@/img/camping.png";

import Countdown from "../components/Countdown";
import HeaderTwo from "@/components/HeaderTwo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecondaryButton from "@/components/SecondaryButton";

//Alle beskrivelser af Foofest er genereret ved brug af ChatGPT, udfra nogle keywords om en fiktiv musik og natur festival, der foregår på Island.

export default function Home() {
  return (
    <>
      <div className={`${styles.landing_image} h-96 md:h-min flex flex-col gap-8`}>
        <Header current="Home" />
        <h1 className="flex items-center justify-center my-9">
          F
          <span className="h-fit">
            <Image src={foofestLogo} alt="Foofest logo" className="md:h-24 md:w-24" aria-labelledby="the letter o in foofest" />
          </span>
          <span className="h-fit">
            <Image src={foofestLogo} alt="Foofest logo" className="md:h-24 md:w-24" aria-labelledby="the letter o in foofest" />
          </span>
          FEST
        </h1>
        <SecondaryButton specialClass="m-5 md:mx-6" />
      </div>
      <main className="m-5 md:mx-6 md:grid md:justify-items-center">
        <Countdown />
        <section className="grid md:grid-cols-2 md:row-auto md:items-center gap-8 md:gap-0 justify-items-center my-12 lg:w-4/5 border-b-2 border-solid border-[var(--accent-color)]">
          <Image src={forrestPic} alt="Picture of the nature around the festival" className="md:h-96 md:w-auto md:justify-self-start" />
          <p className="md:text-3xl">
            <span className="landing_span italic">FooFest</span> is a festival placed in the beautiful nature at Iceland, where the music is in center{" "}
          </p>
          <Image src={partyPic} alt="Picture of last festival concert" className="md:col-start-2 md:h-96 md:w-auto md:justify-self-end" />
          <p className="md:text-3xl md:col-start-1 md:row-start-2">
            <span className="landing_span italic">FooFest</span> festival is a 7 day festival, where music and nature is the key element.
          </p>
          <Image src={campingPic} alt="Picture of the Sveitheim campingspot" className="md:h-96 md:w-auto md:justify-self-start md:mb-8" />
          <p className="md:text-3xl mb-8">
            <span className="landing_span italic">FooFest</span> is more than an event. It´s a celebration of the connection between music, nature, and people in the middle of the North Atlantic.
          </p>
        </section>
        <HeaderTwo page="Tickets" />
        <section className="flex flex-col w-full md:w-auto md:flex-row justify-between items-center gap-8 md:gap-20 ">
          <article className="grid gap-1 border-solid border border-[var(--accent-color)] p-4 md:p-6 w-full sm:max-w-md md:w-1/2 h-60">
            <h3 className="justify-self-center md:text-4xl">REGULAR TICKET</h3>
            <p>Full festival ticket with self-chosen camping included.</p>
            <p className="text-3xl md:text-4xl justify-self-end mt-6">799,-</p>
          </article>
          <article className="grid gap-1 border-solid border border-[var(--accent-color)] p-4 md:p-6 w-full sm:max-w-md md:w-1/2 h-60">
            <h3 className="justify-self-center md:text-4xl">VIP TICKET</h3>
            <p>Full festival ticket with self-chosen camping included. Gets one free drink each day.</p>
            <p className="text-3xl md:text-4xl justify-self-end mt-6">1299,-</p>
          </article>
        </section>
        <SecondaryButton specialClass="my-8 md:mx-6 justify-self-end" />
      </main>
      <Footer />
    </>
  );
}
