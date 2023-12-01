import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Link from "@/components/Link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <button className="bg-[var(--accent-color)] p-8">Hey you!</button>
      </main>
      <Footer></Footer>
    </>
  );
}
