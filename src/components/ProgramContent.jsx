import ProgramItem from "./ProgramItem";
// SENDER DATA OG VISIBLE MED FRA SCHEDULE
export default function ProgramContent({ data, visible }) {
  // HER GÅR VI IND PÅ DE FORSKELLIGE SCENER FRA DATABASEN, OG TAGER FAT I VISIBLE I FORHOLD TIL HVAD DAG DU HAR KLIKKET PÅ
  const midgardDay = data["Midgard"][`${visible}`];
  const vanaheimDay = data["Vanaheim"][`${visible}`];
  const jotunheimDay = data["Jotunheim"][`${visible}`];

  return (
    // her skal der mappes igennem noget data alt efter hvor mange bands der er, og hvilke dage
    <section className="grid md:grid-cols-3 md:mt-14 mb-20 mt-8">
      <div className="md:border-r border-[var(--accent-color)] md:pr-8 grid mb-4 md:pl-8">
        <h4 className="span justify-self-center">MIDGARD</h4>
        <ul className="border-t space-between border-[var(--accent-color)]">
          {/* MAPPER IGENNEM DE FORSKELLIGE SCENER HVOR MAN SENDER DATA MED NED TIL PROGRAMITEM + GIVER KEY ET RANDOM TAL (PGA BREAK) */}
          {midgardDay.map((item) => (
            <ProgramItem key={Math.random()} act={item.act} start={item.start} end={item.end} />
          ))}
        </ul>
      </div>
      <div className="md:border-r border-[var(--accent-color)] md:pr-8 grid mb-4 md:pl-8">
        <h4 className="span justify-self-center">VANAHEIM</h4>
        <ul className="border-t space-between border-[var(--accent-color)]">
          {/* MAPPER IGENNEM DE FORSKELLIGE SCENER HVOR MAN SENDER DATA MED NED TIL PROGRAMITEM + GIVER KEY ET RANDOM TAL (PGA BREAK) */}
          {vanaheimDay.map((item) => (
            <ProgramItem key={Math.random()} act={item.act} start={item.start} end={item.end} />
          ))}
        </ul>
      </div>
      <div className=" md:pr-8 grid mb-4 md:pl-8">
        <h4 className="span justify-self-center">JOTUNHEIM</h4>
        <ul className="border-t space-between border-[var(--accent-color)]">
          {/* MAPPER IGENNEM DE FORSKELLIGE SCENER HVOR MAN SENDER DATA MED NED TIL PROGRAMITEM + GIVER KEY ET RANDOM TAL (PGA BREAK) */}
          {jotunheimDay.map((item) => (
            <ProgramItem key={Math.random()} act={item.act} start={item.start} end={item.end} />
          ))}
        </ul>
      </div>
    </section>
  );
}
