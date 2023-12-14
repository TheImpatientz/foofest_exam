import Link from "next/link";
import style from "@/components/OurLink.module.css";

//Komponentet skal have en size, text og en href. size kan være enten "big" eller "small" (big til burger-menu og small til footer)
//Hvis linket skal være i vores primary color (mørk), skal color tilføjes og sættes til "dark"
export default function OurLink({ text, size, color, href, current }) {
  const linkSize = size === "big" ? "md:text-7xl" : size === "small" ? "text-base" : "";
  const deskBigSize = size === "big" ? "text-3xl" : "";

  //Link fra next.js med prefetch={false} så den ikke prefetcher alle links på forhånd.
  return (
    <Link href={href} prefetch={false} className={` ${style.a} ${deskBigSize} ${linkSize} ${color === "dark" && style.burger_a} ${current === text && style.current_page}`}>
      {text}
    </Link>
  );
}
