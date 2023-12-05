import Dob from "@/components/Dob";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import Labelinput from "@/components/Labelinput";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import ProgramContent from "@/components/ProgramContent";
import ProgramItem from "@/components/ProgramItem";
import SecondaryButton from "@/components/SecondaryButton";
import YourPurchase from "@/components/YourPurchase";
// import Link from "@/components/Link";

export default function Home() {
  return (
    <>
      <Layout>
        <Labelinput id="name" inputname="name" label="Name" placeholder="navn navnsen" type="text" forId="name" />
        <Dob />
        <PrimaryButton />
      </Layout>
    </>
  );
}
