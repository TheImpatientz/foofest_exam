//SENDER DATA FRA PROGRAMCONTENT
export default function ProgramItem({ act, start, end }) {
  return (
    // ANVENDER DATAEN VED AT LAVE PROPS HVOR DEN TAGER FAT I ACT, START OG END
    <li className="grid h-10 text-[var(--secondary-color)] grid-cols-3 space-between my-6">
      <span className="text-[1rem] leading-5 col-span-2">{act}</span>
      <span className="span place-self-center justify-self-end text-[1rem]">
        {start}-{end}
      </span>
    </li>
  );
}
