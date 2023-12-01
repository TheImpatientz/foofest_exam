import Image from "next/image";
import logoNewsletter from "@/img/logo_newsletter.svg";

export default function Newsletter() {
  return (
    <div className="grid ml-auto mr-auto place-items-center md:grid-rows-2 md:w-[395px]">
      <div className="flex md:place-self-start">
        <Image src={logoNewsletter} alt="" width={50} height={50} className="md:w-16"></Image>
        <p className="newsletter_p italic text-2xl ml-3 min-w-[239px] md:text-3xl md:w-[270px] ">
          Get the latest <br /> updates from FooFest
        </p>
      </div>
      <label className="flex mt-1 md:place-self-end" htmlFor="newsletter">
        <input className="border-2 border-[var(--accent-color)] bg-[var(--primary-color)] p-2 pl-6 min-w-[260px] text-[--secondary-color] md:w-[275px]" id="newsletter" name="newsletter" type="text" placeholder="YOUR EMAIL ADRESS" />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--primary-color)" className="bi bi-arrow-right bg-[var(--accent-color)] h-auto w-[40px] p-2 md:w-[50px]" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </label>
    </div>
  );
}
