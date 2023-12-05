import HeaderTwo from "@/components/HeaderTwo";
import Layout from "@/components/Layout";
import SecondaryButton from "@/components/SecondaryButton";

export default async function program() {
  // let headersList = {
  //     apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib2F3YnZka2dieHV5aWh1eXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MzAsImV4cCI6MjAxMjQyNzUzMH0.Iq40XCZG1EvkMh2BD41TMTkAK97Ow5WwUwb_7tDsZeI",
  //     Prefer: "return=representation",
  //   };
  let response = await fetch(`http://localhost:8080/bands`, {
    method: "GET",
    // headers: headersList,
  });

  const data = await response.json();
  console.log(data);
  return (
    <Layout>
      <HeaderTwo page="Program" />
      <SecondaryButton />
    </Layout>
  );
}
