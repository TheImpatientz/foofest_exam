import Link from "next/link";
import style from "@/components/Link.module.css";

//Komponentet skal have en size, text og en href. size kan være enten "big" eller "small" (big til burger-menu og small til footer)
//Hvis linket skal være i vores primary color (mørk), skal color tilføjes og sættes til "dark"
export default function OurLink({ text, size, color, href }) {
  const linkSize = size === "big" ? "md:text-7xl" : size === "small" ? "text-base" : "";
  const deskBigSize = size === "big" ? "text-3xl" : "";

  return (
    <Link href={href} className={` ${style.a} ${deskBigSize} ${linkSize} ${color === "dark" && style.burger_a}`}>
      {text}
    </Link>
  );
}
