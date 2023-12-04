import Dob from "@/components/Dob";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import Labelinput from "@/components/Labelinput";
import Layout from "@/components/Layout";
import ProgramContent from "@/components/ProgramContent";
import ProgramItem from "@/components/ProgramItem";
import SecondaryButton from "@/components/SecondaryButton";
import YourPurchase from "@/components/YourPurchase";
import Image from "next/image";
import landingimg from "@/img/landingimg.png";
import foofest from "@/img/foofest.svg";
// import Link from "@/components/Link";

export default function Home() {
  return (
    <>
      <Layout>
        {/* <Labelinput id="name" inputname="name" label="Name" placeholder="navn navnsen" type="text" forId="name" />
        <Dob /> */}
        <section>
          <Image className="absolute top-0 left-0 w-full" src={landingimg} width={400} height={40} alt="Picture of people and nature"></Image>
          <div className="z-10 relative">
            <Image className="grid ml-auto mr-auto mt-24" src={foofest} width={300} height={300} alt="Foofest"></Image>
            {/* For at kunne style SecondaryButton, har jeg lavet en prop "classname", som sendes til komponenten. Prop'en er placeret i komponentens className-attribut */}
            <SecondaryButton classname="mt-52"></SecondaryButton>
          </div>
        </section>
        <section className="">
          <div className="flex place-content-center">
            <p>DAY</p>
            <p>HOURS</p>
            <p>MIN</p>
            <p>SEC</p>
          </div>
        </section>
      </Layout>
    </>
  );
}
