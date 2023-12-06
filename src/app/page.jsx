"use client";

import Dob from "@/components/Dob";
import EkstraTicket from "@/components/EkstraTicket";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import Labelinput from "@/components/Labelinput";
import Layout from "@/components/Layout";
import OurLink from "@/components/OurLink";
import PrimaryButton from "@/components/PrimaryButton";
import ProgramContent from "@/components/ProgramContent";
import ProgramItem from "@/components/ProgramItem";
import RadioBtn from "@/components/RadioBtn";
import SecondaryButton from "@/components/SecondaryButton";
import YourPurchase from "@/components/YourPurchase";
import Plusminus from "@/components/plusminus";

import { useState } from "react";

export default function Home() {
  //metode til at få vist "flere sider" ligesom i matasquizzen
  const [visible, setVisible] = useState(1);

  const testArray = ["test", "test", "test", "test"];
  return (
    <Layout>
      <h1>hallo</h1>

      <OurLink text="Klik her til test post siden" href="/postTest" />

      <div className="h-80">hej</div>
    </Layout>
  );
}
