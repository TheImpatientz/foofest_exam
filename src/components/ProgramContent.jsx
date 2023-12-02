import ProgramItem from "./ProgramItem";

export default function ProgramContent() {
  return (
    // her skal der mappes igennem noget data alt efter hvor mange bands der er, og hvilke dage
    <section className="grid md:grid-cols-3 mb-20">
      <div className="md:border-r border-[var(--accent-color)] md:pr-8 grid mb-4 md:pl-8">
        <h4 className="span justify-self-center">MIDGARD</h4>
        <div className="border-t border-[var(--accent-color)]">
          <ProgramItem />
          <ProgramItem />
        </div>
      </div>
      <div className="md:border-r border-[var(--accent-color)] md:pr-8 grid mb-4 md:pl-8">
        <h4 className="span justify-self-center">VANAHEIM</h4>
        <div className="border-t border-[var(--accent-color)]">
          <ProgramItem />
          <ProgramItem />
        </div>
      </div>
      <div className=" md:pr-8 grid mb-4 md:pl-8">
        <h4 className="span justify-self-center">JOTUNHEIM</h4>
        <div className="border-t border-[var(--accent-color)]">
          <ProgramItem />
          <ProgramItem />
        </div>
      </div>
    </section>
  );
}
