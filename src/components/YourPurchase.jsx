export default function YourPurchase({ campingspot }) {
  return (
    <div className="outline outline-[var(--accent-color)] p-7 font-semibold">
      <h4 className="pb-9">YOUR PURCHASE</h4>
      <p className="grid place-items-center border-b border-[var(--accent-color)] pb-1">{campingspot}</p>
      <div className="flex justify-between pt-7 pb-7">
        <p>1X REGULAR TICKET</p>
        <p className="">1500 DKK</p>
      </div>

      <div className="flex justify-between pb-7">
        <p>2X VIP TICKET</p>
        <p className="">4500 DKK</p>
      </div>

      <div className="flex pb-7 justify-between">
        <p className="">BOOKING FEE</p>
        <p className="">99 DKK</p>
      </div>

      <div className="flex justify-between border-t border-[var(--accent-color)] pt-8">
        <p className="text-[1.3rem] md:text-[1.5rem]">TOTAL</p>
        <p className="text-[1.3rem] md:text-[1.5rem]">6500 DKK</p>
      </div>
    </div>
  );
}
