import Dob from "./Dob";
import Labelinput from "./Labelinput";

//Her benyttes der af DaisyUI's collapse component (https://daisyui.com/components/collapse/)
//Tilføjet d. 5/12/23

export default function EkstraTicket({ id }) {
  return (
    <div tabIndex={0} className="collapse bg-[var(--primary-color)] collapse-arrow border border-[var(--accent-color)] rounded-none">
      <input type="checkbox" />
      <div className="collapse-title text-[var(--secondary-color)] text-xl md:text-4xl">EXTRA TICKET</div>
      <div className="collapse-content">
        <Labelinput forId={id} id={id} label="FIRSTNAME" type="text" placeholder="EX. PETER" />
        <Labelinput forId={id + 1} id={id + 1} label="LASTNAME" type="text" placeholder="EX. THOMSEN" />
        <Dob />
      </div>
    </div>
  );
}
