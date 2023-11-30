//Module css importeret, men bliver kun benyttet hvis der eksisterer en "dark" prop
//Dette er fordi alle links er som standard secondary-color, men med dark bliver det lavet om til primary-color i module css (til burger menu)
import style from "@/components/Link.module.css";

//Komponentet skal have en size og en href. size kan være enten "big" eller "small"
export default function Link({ text, size, color, href }) {
  const linkSize = size === "big" ? "md:text-7xl" : size === "small" ? "text-base" : "";
  const deskBigSize = size === "big" ? "text-3xl" : "";

  return (
    <a href={href} className={` ${style.a} ${deskBigSize} ${linkSize} ${color === "dark" && style.burger_a}`}>
      {text}
    </a>
  );
}

//hover:underline
