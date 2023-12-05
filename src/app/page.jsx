"use client";

import Dob from "@/components/Dob";
import EkstraTicket from "@/components/EkstraTicket";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import Labelinput from "@/components/Labelinput";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import ProgramContent from "@/components/ProgramContent";
import ProgramItem from "@/components/ProgramItem";
import RadioBtn from "@/components/RadioBtn";
import SecondaryButton from "@/components/SecondaryButton";
import YourPurchase from "@/components/YourPurchase";
import Plusminus from "@/components/plusminus";
import Link from "next/link";

// import Link from "@/components/Link";

export default function Home() {
  const testArray = ["test", "test", "test", "test"];
  return (
    <>
      <Layout>
        <Plusminus></Plusminus>
        <Labelinput id="name" inputname="name" label="Name" placeholder="navn navnsen" type="text" forId="name" />
        <Dob />
        <PrimaryButton />
        <Link href="/program">klik her</Link>
      </Layout>
    </>
  );
}
