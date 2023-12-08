import Dob from "./Dob";
import Labelinput from "./Labelinput";

//Her benyttes der af DaisyUI's collapse component (https://daisyui.com/components/collapse/)
//Tilføjet d. 5/12/23

export default function Cardinfo() {
  return (
    <div tabIndex={0} className="collapse bg-[var(--primary-color)] collapse-arrow border border-[var(--accent-color)] rounded-none">
      <input type="checkbox" />
      <div className="collapse-title text-[var(--secondary-color)] text-xl md:text-4xl">CARD PAYMENT</div>
      <div className="collapse-content">
        <Labelinput forId="cardname" id="cardname" label="CARD HOLDER NAME" type="text" placeholder="" />
        <Labelinput forId="cardnumber" id="cardnumber" label="CARD NUMBER" type="numeric" placeholder="" />
        <div className="flex">
          <Labelinput forId="expirydate" id="expirydate" label="EXPIRY DATE" type="numeric" placeholder="mm/yy" extraStyle="" />
          <Labelinput forId="cardnumber" id="cardnumber" label="CVV / CVC" type="numeric" placeholder="" />
        </div>
      </div>
    </div>
  );
}

//Er nået til at sætte bredde på expiry felt og cvv
