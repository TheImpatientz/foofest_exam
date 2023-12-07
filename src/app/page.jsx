"use client";

import Layout from "@/components/Layout";
import OurLink from "@/components/OurLink";

import { useState } from "react";

export default function Home() {
  const testArray = ["test", "test", "test", "test"];
  return (
    <Layout>
      <h1>hallo</h1>

      <OurLink text="Klik her til test post siden" href="/postTest" />
    </Layout>
  );
}
