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
// import Link from "@/components/Link";

export default function Home() {
  const testArray = ["test", "test", "test", "test"];
  return (
    <>
      <Layout>
        {testArray.map((item) => {
          const uniqueId = Math.random();
          return <EkstraTicket id={uniqueId} key={uniqueId} />;
        })}
        <RadioBtn name="test" id="test2" />
        <PrimaryButton />
        <button>
          <p>hej</p>
        </button>
      </Layout>
    </>
  );
}
