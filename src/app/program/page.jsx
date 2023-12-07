import HeaderTwo from "@/components/HeaderTwo";
import Layout from "@/components/Layout";
import Schedule from "@/components/Schedule";
import SecondaryButton from "@/components/SecondaryButton";
// FETCHER DATA FRA DATABASEN MED SCHEDULE FOR AT TAGE FAT I PROGRAMMET
export default async function program() {
  let response = await fetch(`http://localhost:8080/schedule`, {
    method: "GET",
  });
  // SKAL SKIFTES UD MED DENNE
  // let response = await fetch(`https://plant-flaxen-glove.glitch.me/schedule`, {
  //   method: "GET",
  // });

  const data = await response.json();
  console.log(data);
  return (
    <Layout>
      <HeaderTwo page="Program" />
      <SecondaryButton />
      {/* SENDER DATA MED NED TIL SCHEDULE */}
      <Schedule data={data}></Schedule>
    </Layout>
  );
}
