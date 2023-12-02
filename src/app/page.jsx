import Dob from "@/components/Dob";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import Labelinput from "@/components/Labelinput";
import SecondaryButton from "@/components/SecondaryButton";
import YourPurchase from "@/components/YourPurchase";
// import Link from "@/components/Link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <HeaderTwo page="Program" />
        <SecondaryButton />
        <YourPurchase campingspot="MUSPELHEIM"></YourPurchase>
      </main>
      <Footer></Footer>
    </>
  );
}
