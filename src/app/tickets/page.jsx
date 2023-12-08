import Cardinfo from "@/components/Cardinfo";
import EkstraTicket from "@/components/EkstraTicket";
import HeaderTwo from "@/components/HeaderTwo";
import Layout from "@/components/Layout";
import RadioBtn from "@/components/RadioBtn";

export default function tickets() {
  return (
    <Layout>
      <HeaderTwo page="Tickets" />
      <Cardinfo />
      <EkstraTicket id={3} />
      <RadioBtn name="test" id="test" />
    </Layout>
  );
}
