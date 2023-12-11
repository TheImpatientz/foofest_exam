// ticket bliver sendt med til barnet, så vi kan gribe fat i værdierne, der befinder sig i objektet
export default function YourPurchase({ campingspot, ticket, twoPers, threePers, greenCamping, bringYourOwn }) {
  return (
    <div className="outline outline-[var(--accent-color)] outline-1 p-7 mb-2 font-semibold">
      <h4 className="pb-9">YOUR PURCHASE</h4>
      <p className="grid place-items-center border-b border-[var(--accent-color)] pb-1">{campingspot}</p>
      {/* Her bruger jeg en "conditional rendering approach", så i stedet for at benytte "if" bruger jeg "&&". Indholdet inden i parenteserne, vil altså kun renderes, hvis ticket.regular ikke er 0 */}
      {ticket.regular !== 0 && (
        <div className="flex justify-between pt-7 ">
          {/* Dette er måden at få fat i værdien for regular */}
          <p>{ticket.regular}X REGULAR TICKET</p>
          <p className="">{ticket.regular * 799} DKK</p>
        </div>
      )}
      {ticket.vip !== 0 && (
        <div className="flex justify-between pt-7 ">
          {/* Dette er måden at få fat i værdien for vip */}
          <p>{ticket.vip}X VIP TICKET</p>
          <p className="">{ticket.vip * 1299} DKK</p>
        </div>
      )}
      {twoPers > 0 && (
        <div className="flex justify-between pt-7 ">
          <p>{twoPers}X 2-PERS TENTS</p>
          <p className="">{twoPers * 299} DKK</p>
        </div>
      )}

      {threePers > 0 && (
        <div className="flex justify-between pt-7 ">
          <p>{threePers}X 3-PERS TENTS</p>
          <p className="">{threePers * 399} DKK</p>
        </div>
      )}

      {bringYourOwn === true && (
        <div className="flex justify-between pt-7 ">
          <p>BRING YOUR OWN</p>
          <p className="">0 DKK</p>
        </div>
      )}

      {greenCamping === true && (
        <div className="flex justify-between pt-7 ">
          <p>GREEN CAMPING</p>
          <p className="">249 DKK</p>
        </div>
      )}

      <div className="flex pt-7 pb-7 justify-between">
        <p className="">BOOKING FEE</p>
        <p className="">99 DKK</p>
      </div>

      <div className="flex justify-between border-t border-[var(--accent-color)] pt-8">
        <p className="text-[1.3rem] md:text-[1.5rem]">TOTAL</p>
        <p className="text-[1.3rem] md:text-[1.5rem]">{ticket.regular * 799 + ticket.vip * 1299 + twoPers * 299 + threePers * 399 + (greenCamping ? 249 : 0) + 99} DKK</p>
      </div>
    </div>
  );
}

// {threePers !== 0 && (
//   <div className="flex justify-between pt-7 ">
//     {/* Dette er måden at få fat i værdien for vip */}
//     <p>{ticket.vip}X VIP TICKET</p>
//     <p className="">{ticket.vip * 1299} DKK</p>
//   </div>
// )}
