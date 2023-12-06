import Image from "next/image";

import landingPic from "../img/landingpage_image.jpg";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout className="static">
      <div className="absolute -inset-x-5 md:-inset-x-6 top-0 w-full h-fit overflow-hidden">
        <Image src={landingPic} alt="FooFest image" priority className="max-w-none w-auto opacity-50" />
      </div>
    </Layout>
  );
}
