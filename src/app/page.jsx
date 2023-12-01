import Footer from "@/components/Footer";
import Header from "@/components/Header";
import YourPurchase from "@/components/YourPurchase";
// import Link from "@/components/Link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <YourPurchase campingspot="MUSPELHEIM"></YourPurchase>
      </main>
      <Footer></Footer>
    </>
  );
}
