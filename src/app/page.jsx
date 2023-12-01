import Dob from "@/components/Dob";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import Labelinput from "@/components/Labelinput";
import YourPurchase from "@/components/YourPurchase";
// import Link from "@/components/Link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <HeaderTwo />
        <YourPurchase campingspot="MUSPELHEIM"></YourPurchase>
      </main>
      <Footer></Footer>
    </>
  );
}
