import Footer from "@/components/Footer";
import RadioBtn from "@/components/RadioBtn";
// import Header from "@/components/Header";
import Link from "@/components/Link";

export default function Home() {
  return (
    <main>
      <RadioBtn name="camps" id="MUSPELHEIM" status="" />
      <RadioBtn name="camps" id="Nilfheim" status="" />
      <RadioBtn name="camps" id="Svartheim" status="" />
      <RadioBtn name="camps" id="Alfheim" status="soldout" />
    </main>
  );
}
